(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{188:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"中间件进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" 中间件进阶")]),t._v(" "),a("p",[t._v("在这一节中聊聊中间件该怎么用、注意事项、参数含义等等。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    middleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" fn1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"中间件执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件执行顺序","aria-hidden":"true"}},[t._v("#")]),t._v(" 中间件执行顺序")]),t._v(" "),a("p",[t._v("koa 中间件的执行顺序和 redux 的正好相反，例如以上写法会以以下顺序执行：")]),t._v(" "),a("p",[a("code",[t._v("请求参数 -> fn1 -> fn2 -> fn3 -> 响应数据 -> fn3 -> fn2 -> fn1")])]),t._v(" "),a("h2",{attrs:{id:"中间件写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件写法","aria-hidden":"true"}},[t._v("#")]),t._v(" 中间件写法")]),t._v(" "),a("ul",[a("li",[t._v("普通函数：注意一定要 "),a("code",[t._v("return next()")]),t._v(" 否则 "),a("code",[t._v("Promise")]),t._v(" 链就断了！")]),t._v(" "),a("li",[t._v("async 函数：注意一定要 "),a("code",[t._v("await next()")]),t._v("！")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 普通函数，注意一定要 return next()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求的各种配置")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应，但这时还未发起请求，所以是 undefined！")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发起请求的时间")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递控制权给下一个中间件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里才有响应！")]),t._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应对象")]),t._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应格式化后的数据")]),t._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rawData  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应的原始数据")]),t._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reqTime   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求花费的时间")]),t._v("\n        ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endTime   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收到响应的时间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async/await")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求的各种配置")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递控制权给下一个中间件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里才有响应！")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"中间件参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 中间件参数")]),t._v(" "),a("p",[t._v("以下是挂在 ctx 下的各种属性，业务侧的中间件可以改写其中某些属性达到在请求发起前，以及在收到响应后进行某些操作。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("已使用的属性名")]),t._v(" "),a("th",[t._v("含义和作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("req")]),t._v(" "),a("td",[t._v("请求")])]),t._v(" "),a("tr",[a("td",[t._v("req.host "),a("badge",{attrs:{text:"2.0.0-"}})],1),t._v(" "),a("td",[t._v("接口基础地址")])]),t._v(" "),a("tr",[a("td",[t._v("req.baseUrl "),a("badge",{attrs:{text:"1.3.5+"}})],1),t._v(" "),a("td",[t._v("接口基础地址")])]),t._v(" "),a("tr",[a("td",[t._v("req.mock")]),t._v(" "),a("td",[t._v("模拟的响应数据或是生成数据的函数")])]),t._v(" "),a("tr",[a("td",[t._v("req.type "),a("badge",{attrs:{text:"2.0.0-"}})],1),t._v(" "),a("td",[t._v("接口请求类型 get/post...")])]),t._v(" "),a("tr",[a("td",[t._v("req.method "),a("badge",{attrs:{text:"1.3.5+"}})],1),t._v(" "),a("td",[t._v("接口请求类型 get/post...")])]),t._v(" "),a("tr",[a("td",[t._v("req.path")]),t._v(" "),a("td",[t._v("接口结尾路径")])]),t._v(" "),a("tr",[a("td",[t._v("req.prefix")]),t._v(" "),a("td",[t._v("接口前缀")])]),t._v(" "),a("tr",[a("td",[t._v("req.reqType")]),t._v(" "),a("td",[t._v("使用什么工具发(axios/jsonp/wx)")])]),t._v(" "),a("tr",[a("td",[t._v("req.reqParams")]),t._v(" "),a("td",[t._v("已添加默认参数的请求参数")])]),t._v(" "),a("tr",[a("td",[t._v("req.callbackName")]),t._v(" "),a("td",[t._v("使用 jsonp 时的回调函数名")])]),t._v(" "),a("tr",[a("td",[t._v("req.axiosOptions")]),t._v(" "),a("td",[t._v("透传 axios 配置参数")])]),t._v(" "),a("tr",[a("td",[t._v("req.jsonpOptions")]),t._v(" "),a("td",[t._v("透传 fetch-jsonp 配置参数")])]),t._v(" "),a("tr",[a("td",[t._v("req.reqFnParams")]),t._v(" "),a("td",[t._v("发起请求时的参数对象（上面那些参数都会被放进来作为属性）")])]),t._v(" "),a("tr",[a("td",[t._v("---")]),t._v(" "),a("td",[t._v("---")])]),t._v(" "),a("tr",[a("td",[t._v("res")]),t._v(" "),a("td",[t._v("响应")])]),t._v(" "),a("tr",[a("td",[t._v("res.data")]),t._v(" "),a("td",[t._v("响应格式化后的数据")])]),t._v(" "),a("tr",[a("td",[t._v("res.rawData "),a("badge",{attrs:{text:"1.6.0+"}})],1),t._v(" "),a("td",[t._v("响应的原始数据")])]),t._v(" "),a("tr",[a("td",[t._v("res.error")]),t._v(" "),a("td",[t._v("错误对象（可以取 stack 和 message）")])]),t._v(" "),a("tr",[a("td",[t._v("res.*")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/axios/axios#response-schema",target:"_blank",rel:"noopener noreferrer"}},[t._v("透传 axios 的配置"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("---")]),t._v(" "),a("td",[t._v("---")])]),t._v(" "),a("tr",[a("td",[t._v("reqTime")]),t._v(" "),a("td",[t._v("请求花费的时间")])]),t._v(" "),a("tr",[a("td",[t._v("startTime")]),t._v(" "),a("td",[t._v("请求开始时的时间戳")])]),t._v(" "),a("tr",[a("td",[t._v("endTime")]),t._v(" "),a("td",[t._v("收到响应时的时间戳")])])])])])},[],!1,null,null,null);s.default=e.exports}}]);