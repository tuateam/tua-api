(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{56:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"运行配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行配置"}},[t._v("#")]),t._v(" 运行配置 "),s("Badge",{attrs:{text:"1.0.0+"}})],1),t._v(" "),s("p",[t._v("运行配置指的是在接口实际调用时通过第二个参数传递的配置。这部分的配置优先级最高。")]),t._v(" "),s("p",[t._v("以下接口以导出为 "),s("code",[t._v("exampleApi")]),t._v(" 为例。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("exampleApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数传接口参数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个参数传接口配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"callback-回调函数参数的名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callback-回调函数参数的名称"}},[t._v("#")]),t._v(" callback 回调函数参数的名称 "),s("Badge",{attrs:{text:"1.4.4+"}})],1),t._v(" "),s("p",[t._v("通过 jsonp 发起请求时，在请求的 "),s("code",[t._v("url")]),t._v(" 上都会有一个参数用来标识回调函数，例如 "),s("code",[t._v("callback=jsonp_1581908021389_16566")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("callback")]),t._v(" 这个参数可以用来标识等号左边的值（不填则默认为 "),s("code",[t._v("callback")]),t._v("）。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("exampleApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("cb")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("最终的请求 "),s("code",[t._v("url")]),t._v(" 大概是："),s("code",[t._v("/foo?cb=jsonp_1581908021389_16566")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("callback")]),t._v(" 其实就是透传了 "),s("code",[t._v("fetch-jsonp")]),t._v(" 中的 "),s("code",[t._v("jsonpCallback")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"callbackname-回调函数名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbackname-回调函数名称"}},[t._v("#")]),t._v(" callbackName 回调函数名称")]),t._v(" "),s("p",[t._v("通过 jsonp 发起请求时，一般默认回调函数的名称都是由一些随机值构成，例如 "),s("code",[t._v("callback=jsonp_1581908021389_16566")])]),t._v(" "),s("p",[t._v("不过为了使用缓存一般需要添加 "),s("code",[t._v("callbackName")]),t._v("，但是注意重复请求时会报错（此时不设置 "),s("code",[t._v("callbackName")]),t._v(" 即可）。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("exampleApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" callbackName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("fooCallback")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("最终的请求 "),s("code",[t._v("url")]),t._v(" 大概是："),s("code",[t._v("/foo?callback=fooCallback")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("callbackName")]),t._v(" 其实就是透传了 "),s("code",[t._v("fetch-jsonp")]),t._v(" 中的 "),s("code",[t._v("jsonpCallbackFunction")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"其他参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他参数"}},[t._v("#")]),t._v(" 其他参数")]),t._v(" "),s("p",[t._v("公共配置一节中的所有参数（除了 "),s("code",[t._v("pathList")]),t._v(" 外），以及自身配置一节中的所有参数均有效，且优先级最高。")]),t._v(" "),s("ul",[s("li",[t._v("详情参阅"),s("RouterLink",{attrs:{to:"/config/common.html"}},[t._v("公共配置")])],1),t._v(" "),s("li",[t._v("详情参阅"),s("RouterLink",{attrs:{to:"/config/self.html"}},[t._v("自身配置")])],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);