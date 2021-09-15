(self["webpackChunk"]=self["webpackChunk"]||[]).push([[6935],{31695:function(){},35956:function(e,t,n){"use strict";n.r(t);var r=n(68699),a=n(94043),l=n.n(a),o=n(67294),c=n(60535),i=n(96089),u=(n(27832),n(63263));n(65675);t["default"]=e=>(o.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&i.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.createElement(o.Fragment,null,o.createElement("div",{className:"markdown"},o.createElement("h2",{id:"\u8f7b\u677e\u4f7f\u7528"},o.createElement(i.AnchorLink,{to:"#\u8f7b\u677e\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},o.createElement("span",{className:"icon icon-link"})),"\u8f7b\u677e\u4f7f\u7528"),o.createElement("ol",null,o.createElement("li",null,"\u5b89\u88c5\u4f9d\u8d56")),o.createElement(u.Z,{code:"$ npm i taro-hooks --save",lang:"bash"}),o.createElement("ol",{start:2},o.createElement("li",null,"\u4f7f\u7528")),o.createElement(u.Z,{code:"import { useEnv } from 'taro-hooks';",lang:"jsx"}),o.createElement("p",null,"\u6ce8: ",o.createElement("code",null,"taro-hooks"),"\u7684",o.createElement("code",null,"js"),"\u4ee3\u7801\u9ed8\u8ba4\u652f\u6301\u57fa\u4e8e",o.createElement("code",null,"ES modules"),"\u7684",o.createElement("code",null,"tree shaking"),". \u4f46\u4f60\u4f9d\u7136\u53ef\u4ee5\u663e\u5f0f\u7684\u4f7f\u7528",o.createElement(i.Link,{to:"https://github.com/ant-design/babel-plugin-import"},o.createElement("code",null,"babel-plugin-import")),"\u53bb\u8bbe\u7f6e\u6309\u9700\u52a0\u8f7d, \u8bbe\u7f6e\u65b9\u5f0f\u5982\u4e0b:"),o.createElement(u.Z,{code:"// babel.config.js\nmodule.exports = {\n  plugins: [\n    [\n      'import',\n      {\n        libraryName: 'taro-hooks',\n        camel2DashComponentName: false,\n      },\n      'taro-hooks',\n    ],\n  ],\n};",lang:"js"}),o.createElement("ol",{start:3},o.createElement("li",null,"taro-init")),o.createElement(o.Fragment,{children:o.createElement((0,c.D8)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",n.e(4436).then(n.bind(n,53956)));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}))}),o.createElement("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},o.createElement(i.AnchorLink,{to:"#\u4f7f\u7528\u6848\u4f8b","aria-hidden":"true",tabIndex:-1},o.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u6848\u4f8b"),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",{align:"center"},o.createElement("a",null,o.createElement("img",{width:200,src:"/image/hooks.jpeg"}),o.createElement("br",null),o.createElement("strong",null,"Taro-hooks weapp"))),o.createElement("td",{align:"center"},o.createElement(i.Link,{to:"https://taro-hooks-h5-innocces.vercel.app/",target:"_blank"},o.createElement("img",{height:200,style:{verticalAlign:"-0.32em",marginRight:"8px"},src:"/image/hooksite.png"}),o.createElement("br",null),o.createElement("strong",null,"Taro-hooks h5")))))),o.createElement(o.Fragment,{children:o.createElement((0,c.D8)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",n.e(4436).then(n.bind(n,79737)));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}))}))))},63263:function(e,t,n){"use strict";var r=n(67294),a=n(4649),l=n(96089);n(31695);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){return d(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){c=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,s=(0,l.useCopy)(),m=c(s,2),d=m[0],h=m[1];return r.createElement("div",{className:"__dumi-default-code-block"},r.createElement(a.ZP,o({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,l=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.createElement("pre",{className:n,style:a},u&&r.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return d(t)}}),l.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",c({token:e,key:t}))})))})))})))}}}]);