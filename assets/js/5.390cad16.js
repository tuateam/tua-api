(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{51:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"公共配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 公共配置")]),t._v(" "),s("p",[t._v("详细地址指的是填写在 "),s("code",[t._v("src/apis/foobar.js")]),t._v(" 中的一级配置。这部分的配置优先级比默认配置高，但低于各个接口的自身配置。")]),t._v(" "),s("h2",{attrs:{id:"type-请求类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-请求类型","aria-hidden":"true"}},[t._v("#")]),t._v(" type 请求类型")]),t._v(" "),s("p",[t._v("所有请求类型（可忽略大小写，可选值 OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 忽略大小写")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'post'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"host-服务器地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host-服务器地址","aria-hidden":"true"}},[t._v("#")]),t._v(" host 服务器地址")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    host"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'https://example-api.com/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"mock-模拟接口数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-模拟接口数据","aria-hidden":"true"}},[t._v("#")]),t._v(" mock 模拟接口数据")]),t._v(" "),s("ul",[s("li",[t._v("类型："),s("code",[t._v("Object")]),t._v("、"),s("code",[t._v("Function")])]),t._v(" "),s("li",[t._v("默认值："),s("code",[t._v("{}")])])]),t._v(" "),s("p",[t._v("模拟接口数据，可以直接填数据，或是填函数。函数将收到 "),s("code",[t._v("params")]),t._v(" 参数对象，即最终发送给接口的数据对象。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 对象形式")]),t._v("\n    mock"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'some data'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 函数形式")]),t._v("\n    mock"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" params"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mockCode"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" params"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mockData"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("详情参阅 "),s("router-link",{attrs:{to:"/guide/mock.html"}},[t._v("mock 章节")])],1),t._v(" "),s("h2",{attrs:{id:"prefix-接口中间地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefix-接口中间地址","aria-hidden":"true"}},[t._v("#")]),t._v(" prefix 接口中间地址")]),t._v(" "),s("p",[t._v("建议与文件同名，方便维护。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    prefix"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'foobar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"reqtype-请求使用库类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reqtype-请求使用库类型","aria-hidden":"true"}},[t._v("#")]),t._v(" reqType 请求使用库类型")]),t._v(" "),s("p",[t._v("即用哪个库发起请求目前支持：jsonp、axios，不填则使用默认配置。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reqType"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'jsonp'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"commonparams-公共参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonparams-公共参数","aria-hidden":"true"}},[t._v("#")]),t._v(" commonParams 公共参数")]),t._v(" "),s("p",[t._v("有时对于所有接口都需要添加一个公共参数。")]),t._v(" "),s("p",[t._v("例如在小程序端，可能需要添加 "),s("code",[t._v("from")]),t._v(" 参数标记这个接口是由小程序请求了。可以这么写：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    commonParams"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'miniprogram'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"axiosoptions-透传参数配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axiosoptions-透传参数配置","aria-hidden":"true"}},[t._v("#")]),t._v(" axiosOptions 透传参数配置")]),t._v(" "),s("p",[t._v("由于 tua-api 是依赖于 "),s("code",[t._v("axios")]),t._v(" 或是 "),s("code",[t._v("fetch-jsop")]),t._v(" 来发送请求的。所以势必要提供参数透传的功能。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 透传 `fetch-jsonp` 需要配置的参数。例如需要传递超时时间时可添加：")]),t._v("\n    jsonpOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" timeout"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 透传 `axios` 需要配置的参数。例如需要传递超时时间时可添加：")]),t._v("\n    axiosOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" timeout"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"jsonpoptions-透传参数配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonpoptions-透传参数配置","aria-hidden":"true"}},[t._v("#")]),t._v(" jsonpOptions 透传参数配置")]),t._v(" "),s("p",[t._v("同上")]),t._v(" "),s("h2",{attrs:{id:"middleware-中间件函数数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware-中间件函数数组","aria-hidden":"true"}},[t._v("#")]),t._v(" middleware 中间件函数数组")]),t._v(" "),s("p",[t._v("中间件采用的是 koa 风格，所以对于一个 api 请求，从发起请求到收到响应你都有充分的控制权。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    middleware"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" fn1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn2"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn3 "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("详情参阅："),s("router-link",{attrs:{to:"/guide/middleware.html"}},[t._v("中间件进阶")])],1),t._v(" "),s("h2",{attrs:{id:"beforefn-发起请求前钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforefn-发起请求前钩子函数","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeFn 发起请求前钩子函数")]),t._v(" "),s("p",[t._v("在请求发起前执行的函数（例如小程序可以通过返回 "),s("code",[t._v("header")]),t._v(" 传递 "),s("code",[t._v("cookie")]),t._v("），因为是通过 "),s("code",[t._v("beforeFn().then(...)")]),t._v(" 调用，所以注意要返回 Promise。")]),t._v(" "),s("h2",{attrs:{id:"afterfn-收到响应后的钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#afterfn-收到响应后的钩子函数","aria-hidden":"true"}},[t._v("#")]),t._v(" afterFn 收到响应后的钩子函数")]),t._v(" "),s("p",[t._v("在收到响应后执行的函数，可以不用返回 "),s("code",[t._v("Promise")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意接收的参数是一个【数组】 "),s("code",[t._v("[res.data, ctx]")])])]),t._v(" "),s("ul",[s("li",[t._v("第一个参数是接口返回数据对象 "),s("code",[t._v("{ code, data, msg }")])]),t._v(" "),s("li",[t._v("第二个参数是请求相关参数的对象，例如有请求的 host、type、params、fullPath、reqTime、startTime、endTime 等等")])]),t._v(" "),s("p",[t._v("默认值如下，即返回接口数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("afterFn")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("注意若是返回了数据，则业务侧将收到这个数据。所以在这里可以添加一些通用逻辑，处理返回的数据。")]),t._v(" "),s("p",[t._v("反之，若是返回 "),s("code",[t._v("undefined")]),t._v(" 则业务侧将收到 "),s("code",[t._v("res.data")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"isshowloading-小程序-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isshowloading-小程序-only","aria-hidden":"true"}},[t._v("#")]),t._v(" isShowLoading (小程序 only)")]),t._v(" "),s("p",[t._v("所有请求发起时是否自动展示 loading（默认为 true）。")]),t._v(" "),s("p",[t._v("一般来说都是需要展示 loading 的，但是有些接口轮询时如果一直展示 loading 会很奇怪。")]),t._v(" "),s("h2",{attrs:{id:"showloadingfn-小程序-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#showloadingfn-小程序-only","aria-hidden":"true"}},[t._v("#")]),t._v(" showLoadingFn (小程序 only)")]),t._v(" "),s("p",[t._v("小程序中展示 loading 的方法：")]),t._v(" "),s("ul",[s("li",[t._v("默认值: "),s("code",[t._v("() => wx.showLoading({ title: '加载中' })")])]),t._v(" "),s("li",[t._v("可选值: "),s("code",[t._v("() => wx.showLoading(YOUR_OPTIONS)")])]),t._v(" "),s("li",[t._v("可选值: "),s("code",[t._v("wx.showNavigationBarLoading")])]),t._v(" "),s("li",[t._v("或者调用你自己定义的展示 loading 方法...")])]),t._v(" "),s("h2",{attrs:{id:"hideloadingfn-小程序-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hideloadingfn-小程序-only","aria-hidden":"true"}},[t._v("#")]),t._v(" hideLoadingFn (小程序 only)")]),t._v(" "),s("p",[t._v("小程序中隐藏 loading 的方法：")]),t._v(" "),s("ul",[s("li",[t._v("默认值: wx.hideLoading")]),t._v(" "),s("li",[t._v("可选值: wx.hideNavigationBarLoading")]),t._v(" "),s("li",[t._v("或者调用你自己定义的隐藏 loading 方法...")])]),t._v(" "),s("h2",{attrs:{id:"useglobalmiddleware-使用全局中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useglobalmiddleware-使用全局中间件","aria-hidden":"true"}},[t._v("#")]),t._v(" useGlobalMiddleware 使用全局中间件")]),t._v(" "),s("p",[t._v("是否使用全局中间件，默认为 true。")]),t._v(" "),s("p",[t._v("适用于某些接口正好不需要调用在 "),s("code",[t._v("tua-api")]),t._v(" 初始化时定义的全局中间件的情况。")]),t._v(" "),s("h2",{attrs:{id:"pathlist-各个接口自身配置数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pathlist-各个接口自身配置数组","aria-hidden":"true"}},[t._v("#")]),t._v(" pathList 各个接口自身配置数组")]),t._v(" "),s("p",[t._v("这个数组中填写的是接口最后的地址。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pathList"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'create'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// 覆盖公共 middleware")]),t._v("\n            middleware"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// 覆盖公共 jsonpOptions")]),t._v("\n            jsonpOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'modify'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// 覆盖公共 axiosOptions")]),t._v("\n            axiosOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("在 pathList 的接口对象中填写的配置具有最高优先级！将会覆盖上一级的同名属性。")])]),t._v(" "),s("p",[s("code",[t._v("pathList")]),t._v(" 中其他配置见下一节~")])])},[],!1,null,null,null);o.options.__file="common.md";a.default=o.exports}}]);