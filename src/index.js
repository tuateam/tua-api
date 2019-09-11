
import koaCompose from 'koa-compose'

import { version } from '../package.json'
import {
    map,
    pipe,
    isWx,
    logger,
    mergeAll,
    apiConfigToReqFnParams,
} from './utils'
import {
    ERROR_STRINGS,
    VALID_REQ_TYPES,
} from './constants'
import {
    getWxPromise,
    getAxiosPromise,
    getFetchJsonpPromise,
} from './adapters/'
import {
    formatResDataMiddleware,
    recordReqTimeMiddleware,
    setReqFnParamsMiddleware,
    recordStartTimeMiddleware,
    formatReqParamsMiddleware,
} from './middlewareFns'

logger.log(`Version: ${version}`)

class TuaApi {
    /**
     * @param {object} [options]
     * @param {string} [options.host] 服务器基础地址，例如 https://example.com/
     * @param {string} [options.reqType] 使用什么工具发(axios/jsonp/wx)
     * @param {function[]} [options.middleware] 中间件函数数组
     * @param {object} [options.axiosOptions] 透传 axios 配置参数
     * @param {object} [options.jsonpOptions] 透传 fetch-jsonp 配置参数
     * @param {object} [options.defaultErrorData] 出错时的默认数据
     */
    constructor ({
        host,
        reqType = isWx() ? 'wx' : 'axios',
        middleware = [],
        axiosOptions = {},
        jsonpOptions = {},
        defaultErrorData = { code: 999, msg: '出错啦！' },
    } = {}) {
        this.host = host
        this.reqType = reqType
        this.middleware = middleware
        this.axiosOptions = axiosOptions
        this.jsonpOptions = jsonpOptions
        this.defaultErrorData = defaultErrorData

        this._checkReqType(this.reqType)

        return this
    }

    /* -- 各种对外暴露方法 -- */

    /**
     * 添加一个中间件函数
     * @param {function} fn
     * @return {object} self
     */
    use (fn) {
        if (typeof fn !== 'function') {
            throw TypeError(ERROR_STRINGS.middleware)
        }
        this.middleware.push(fn)

        return this
    }

    /**
     * 根据 apiConfig 生成请求函数组成的 map
     * @param {object} apiConfig
     * @return {object}
     */
    getApi (apiConfig) {
        return pipe(
            apiConfigToReqFnParams,
            map(this._getOneReqMap.bind(this)),
            mergeAll,
        )(apiConfig)
    }

    /* -- 各种私有方法 -- */

    /**
     * 根据 reqType 和 type 决定调用哪个库
     * @param {object} options
     * @param {Object|Function} options.mock 模拟的响应数据或是生成数据的函数
     * @param {string} options.url 接口地址
     * @param {string} options.method 接口请求类型 get/post...
     * @param {string} options.fullUrl 完整接口地址
     * @param {string} options.reqType 使用什么工具发(axios/jsonp/wx)
     * @param {object} options.reqParams 请求参数
     * @param {string} options.callbackName 使用 jsonp 时的回调函数名
     * @param {object} options.axiosOptions 透传 axios 配置参数
     * @param {object} options.jsonpOptions 透传 fetch-jsonp 配置参数
     * @return {Promise}
     */
    _reqFn ({
        url,
        mock,
        method,
        fullUrl,
        reqType,
        reqParams: data,
        callbackName,
        axiosOptions,
        jsonpOptions,
        ...rest
    }) {
        // check type
        this._checkReqType(reqType)

        // mock data
        if (mock) {
            const resData = typeof mock === 'function'
                ? mock(data)
                : { ...mock }

            return Promise.resolve({ data: resData })
        }

        method = method.toLowerCase()

        if (reqType === 'wx') {
            return getWxPromise({ url, fullUrl, data, method, ...rest })
        }

        if (reqType === 'axios') {
            const params = {
                url: method === 'get' ? fullUrl : url,
                data: method === 'get' ? {} : data,
                method,
                ...axiosOptions,
            }

            return getAxiosPromise(params)
        }

        // 对于 post 请求使用 axios
        return method === 'post'
            ? getAxiosPromise({ url, data, ...axiosOptions })
            : getFetchJsonpPromise({
                url: fullUrl,
                jsonpOptions: { ...jsonpOptions, callbackName },
            })
    }

    /**
     * 检查 reqType 是否合法
     */
    _checkReqType (reqType) {
        if (VALID_REQ_TYPES.indexOf(reqType) !== -1) return

        throw TypeError(ERROR_STRINGS.reqTypeFn(reqType))
    }

    /**
     * 组合生成中间件函数
     * @param {function[]} middleware
     * @param {Boolean} useGlobalMiddleware 是否使用全局中间件
     */
    _getMiddlewareFn (middleware, useGlobalMiddleware) {
        const middlewareFns = useGlobalMiddleware
            ? this.middleware.concat(middleware)
            : middleware

        return koaCompose([
            // 记录开始时间
            recordStartTimeMiddleware,
            // 格式化生成请求参数
            formatReqParamsMiddleware,
            // 业务侧中间件函数数组
            ...middlewareFns,
            // 生成 _reqFn 参数
            setReqFnParamsMiddleware,
            // 统一转换响应数据为对象
            formatResDataMiddleware,
            // 记录结束时间
            recordReqTimeMiddleware,
            // 发起请求
            (ctx, next) => next()
                .then(() => this._reqFn(ctx.req.reqFnParams))
                // 暂存出错，保证 afterFn 能执行（finally）
                .catch((error) => ({
                    // 浅拷贝一份默认出错值
                    data: { ...this.defaultErrorData },
                    error,
                }))
                .then(res => { ctx.res = res }),
        ])
    }

    /**
     * 接受 api 对象，返回待接收参数的单个 api 函数的对象
     * @param {object} options
     * @param {string} options.type 接口请求类型 get/post...
     * @param {string} options.method 接口请求类型 get/post...
     * @param {Object|Function} options.mock 模拟的响应数据或是生成数据的函数
     * @param {string} options.name 自定义的接口名称
     * @param {string} options.path 接口结尾路径
     * @param {String[] | object} options.params 接口参数数组
     * @param {string} options.prefix 接口前缀
     * @param {function} options.afterFn 在请求完成后执行的钩子函数（将被废弃）
     * @param {function} options.beforeFn 在请求发起前执行的钩子函数（将被废弃）
     * @param {function[]} options.middleware 中间件函数数组
     * @param {Boolean} options.useGlobalMiddleware 是否使用全局中间件
     * @param {string} options.host 服务器地址
     * @param {string} options.reqType 使用什么工具发
     * @param {object} options.axiosOptions 透传 axios 配置参数
     * @param {object} options.jsonpOptions 透传 fetch-jsonp 配置参数
     * @return {object} 以 apiName 为 key，请求函数为值的对象
     */
    _getOneReqMap ({
        type,
        method = type,
        mock,
        name,
        path,
        params = {},
        prefix,
        afterFn = ([x]) => x,
        beforeFn = Promise.resolve.bind(Promise),
        middleware = [],
        useGlobalMiddleware = true,
        ...rest
    }) {
        if (type) {
            logger.warn(
                '[type] will be deprecated, please use [method] instead!\n' +
                '[type] 属性将被废弃, 请用 [method] 替代！'
            )
        }

        // 优先使用 name
        const apiName = name || path
        // 默认值
        method = method || 'get'
        // 向前兼容
        type = method

        // 合并全局默认值
        rest.host = rest.host || this.host
        rest.reqType = rest.reqType || this.reqType
        rest.axiosOptions = rest.axiosOptions
            ? { ...this.axiosOptions, ...rest.axiosOptions }
            : this.axiosOptions
        rest.jsonpOptions = rest.jsonpOptions
            ? { ...this.jsonpOptions, ...rest.jsonpOptions }
            : this.jsonpOptions

        /**
         * 被业务侧调用的函数
         * @param {object} args 接口参数（覆盖默认值）
         * @param {object} runtimeOptions 运行时配置
         * @return {Promise}
         */
        const apiFn = (args, runtimeOptions = {}) => {
            args = args || {}

            // 最终的运行时配置，runtimeOptions 有最高优先级
            const runtimeParams = { type, path, params, prefix, apiName, fullPath: `${prefix}/${path}`, ...rest, ...runtimeOptions }

            // 向前兼容
            runtimeParams.method = runtimeParams.type

            // 自定义回调函数名称（用于 jsonp）
            runtimeParams.callbackName = runtimeParams.callbackName || `${runtimeParams.path}Callback`

            // 请求的上下文信息
            const ctx = {
                req: { args, mock: apiFn.mock, reqFnParams: {}, ...runtimeParams },
            }

            // 执行完 beforeFn 后执行的函数
            const beforeFnCb = (rArgs = {}) => {
                // 兼容小程序传递请求头（建议还是放在中间件中）
                if (rArgs.header) {
                    ctx.req.reqFnParams.header = rArgs.header
                }

                if (!rArgs.params) return

                // 合并 beforeFn 中传入的 params
                ctx.req.params = Array.isArray(params)
                    ? rArgs.params
                    // 可以通过给 beforeFn 添加 params 返回值来添加通用参数
                    : { ...params, ...rArgs.params }
            }

            // 中间件函数
            const middlewareFn = this._getMiddlewareFn(middleware, useGlobalMiddleware)

            return beforeFn()
                .then(beforeFnCb)
                .then(() => middlewareFn(ctx))
                .then(() => afterFn([ctx.res.data, ctx]))
                .then((data) => ctx.res.error
                    ? Promise.reject(ctx.res.error)
                    : data || ctx.res.data
                )
        }

        apiFn.key = `${prefix}/${path}`
        apiFn.mock = mock
        apiFn.params = params

        return { [apiName]: apiFn }
    }
}

export default TuaApi
export * from './exportUtils'
