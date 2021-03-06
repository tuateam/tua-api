# 默认配置
默认配置指的就是在 `tua-api` 初始化时传递的配置

```js
import TuaApi from 'tua-api'

new TuaApi({
    baseUrl, // 即原 host
    reqType,
    middleware,
    customFetch,
    axiosOptions,
    jsonpOptions,
    defaultErrorData,
})
```

## host 接口基础地址 <badge text="2.0.0-" />
重命名为 `baseUrl`，`host` 属性将在 `2.0.0+` 后废弃。

## baseUrl 接口基础地址 <badge text="1.4.1+" />
例如 `https://example.com/api/`

## reqType 请求类型
即使用哪个库发起请求目前支持：jsonp、axios、wx，不填默认使用 axios。

## middleware 中间件函数数组
【所有】请求都会调用的中间件函数数组！适合添加一些通用逻辑，例如接口上报。

## customFetch 自定义请求函数 <badge text="1.6.0+" />
这是一个函数，将会接收接口相关配置，在函数内发起请求，返回值为一个 Promise。

## axiosOptions 透传 axios 配置参数
【通用】的配置，会和之后的配置合并。

## jsonpOptions 透传 fetch-jsonp 配置参数
同上

## defaultErrorData 出错时的默认数据对象
默认值是 `{ code: 999, msg: '出错啦！' }`，可以根据自己的业务需要修改。
