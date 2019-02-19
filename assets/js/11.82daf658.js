(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{53:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("h2",{attrs:{id:"web-端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-端","aria-hidden":"true"}},[a._v("#")]),a._v(" web 端")]),a._v(" "),s("h3",{attrs:{id:"安装本体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装本体","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装本体")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -S tua-api\n"),s("span",{attrs:{class:"token comment"}},[a._v("# OR")]),a._v("\n$ yarn add tua-api\n")])])]),s("p",[a._v("然后直接导入即可")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" TuaApi "),s("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'tua-api'")]),a._v("\n")])])]),s("h4",{attrs:{id:"配置武器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置武器","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置武器")]),a._v(" "),s("p",[a._v("配置“武器”分为两种情况:")]),a._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[a._v("已配置 CORS 跨域请求头"),s("OutboundLink")],1),a._v("，或是没有跨域需求时，无需任何操作（默认采用的就是 "),s("code",[a._v("axios")]),a._v("）。")])]),a._v(" "),s("li",[s("p",[a._v("若是用不了 CORS，那么就需要设置 "),s("code",[a._v("reqType: 'jsonp'")]),a._v(" 借助 jsonp 实现跨域")])])]),a._v(" "),s("p",[a._v("但是 jsonp 只支持使用 get 的方式请求，所以如果需要发送 post 或其他方式的请求，还是需要使用 "),s("code",[a._v("axios")]),a._v("（服务端还是需要配置 CORS）。")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("不推荐使用 jsonp 的方式，有以下几个原因：")]),a._v(" "),s("p",[a._v("1.频繁报错，并且报错信息比较含糊")]),a._v(" "),s("p",[a._v("2.为了使用缓存一般添加 callbackName，但是重复请求会报错")])]),a._v(" "),s("h2",{attrs:{id:"小程序端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序端","aria-hidden":"true"}},[a._v("#")]),a._v(" 小程序端")]),a._v(" "),s("h3",{attrs:{id:"安装本体即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装本体即可","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装本体即可")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -S tua-api\n"),s("span",{attrs:{class:"token comment"}},[a._v("# OR")]),a._v("\n$ yarn add tua-api\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" TuaApi "),s("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'tua-api'")]),a._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("小程序还用不了 npm？"),s("a",{attrs:{href:"https://tuateam.github.io/tua-mp/tua-mp-service/",target:"_blank",rel:"noopener noreferrer"}},[a._v("@tua-mp/service"),s("OutboundLink")],1),a._v(" 了解一下？")])])])},[],!1,null,null,null);r.options.__file="installation.md";t.default=r.exports}}]);