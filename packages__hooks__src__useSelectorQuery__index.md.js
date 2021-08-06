(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5934],{36081:function(){},63263:function(e,t,n){"use strict";var l=n(67294),a=n(4649),r=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return u(e)||m(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(i){o=!0,a=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function u(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,s=void 0===i||i,d=(0,r.useCopy)(),m=o(d,2),u=m[0],E=m[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(a.ZP,c({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:a},s&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return u(t)}}),r.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},50898:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),r=n(27832),c=n(63263),o=n(42911),i=l.memo(o.default["pages-useselectorquery"].component),s=l.memo(o.default["useselectorquery-getboundingclientrect"].component),d=l.memo(o.default["useselectorquery-getfields"].component),m=l.memo(o.default["useselectorquery-getscrolloffset"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"useselectorquery"},l.createElement(a.AnchorLink,{to:"#useselectorquery","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useSelectorQuery"),l.createElement("p",null,"\u83b7\u53d6\u6307\u5b9a\u7ec4\u4ef6\u6216\u6807\u7b7e\u7684\u5c3a\u5bf8\u4ee5\u53ca context"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u7ec4\u4ef6\u76f8\u5173\u4fe1\u606f\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [\n    query,\n    {\n      in,\n      exec,\n      select,\n      selectAll,\n      selectViewport,\n      getBoundingClientRect,\n      getContext,\n      getFields,\n      getNode,\n      getScrollOffset,\n    },\n  ] = useSelectorQuery();",lang:"jsx"}),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(r.default,o.default["pages-useselectorquery"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"query"),l.createElement("td",null,l.createElement("code",null,"SelectorQuery"),"\u5bf9\u8c61\u5b9e\u4f8b"),l.createElement("td",null,l.createElement("code",null,"SelectorQuery"))))),l.createElement("h3",{id:"in"},l.createElement(a.AnchorLink,{to:"#in","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"in"),l.createElement(c.Z,{code:"in(component)",lang:"javascript"}),l.createElement("h3",{id:"exec"},l.createElement(a.AnchorLink,{to:"#exec","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"exec"),l.createElement(c.Z,{code:"SelectorQuery.exec(callback?: void)",lang:"javascript"}),l.createElement("h3",{id:"select"},l.createElement(a.AnchorLink,{to:"#select","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"select"),l.createElement(c.Z,{code:"const node: NodesRef = select(selector: string);",lang:"javascript"}),l.createElement("h3",{id:"selectall"},l.createElement(a.AnchorLink,{to:"#selectall","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"selectAll"),l.createElement(c.Z,{code:"const nodes: NodesRef = select(selector: string);",lang:"javascript"}),l.createElement("h3",{id:"selectviewport"},l.createElement(a.AnchorLink,{to:"#selectviewport","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"selectViewport"),l.createElement(c.Z,{code:"const nodes: NodesRef = select(selector: string);",lang:"javascript"}),l.createElement("h3",{id:"getboundingclientrect"},l.createElement(a.AnchorLink,{to:"#getboundingclientrect","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"getBoundingClientRect"),l.createElement(c.Z,{code:"getBoundingClientRect(selector: string, all: boolean).then((nodes: NodesRef.boundingClientRectCallbackResult) => void)",lang:"javascript"})),l.createElement(r.default,o.default["useselectorquery-getboundingclientrect"].previewerProps,l.createElement(s,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"getcontext"},l.createElement(a.AnchorLink,{to:"#getcontext","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"getContext"),l.createElement(c.Z,{code:"getContext(selector: string).then(context)",lang:"javascript"}),l.createElement("h3",{id:"getfields"},l.createElement(a.AnchorLink,{to:"#getfields","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"getFields"),l.createElement(c.Z,{code:"getFields(selector: string, fields: NodesRef.Fields).then(fields)",lang:"javascript"})),l.createElement(r.default,o.default["useselectorquery-getfields"].previewerProps,l.createElement(d,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"getnode"},l.createElement(a.AnchorLink,{to:"#getnode","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"getNode"),l.createElement(c.Z,{code:"getNode(selector: string).then(node)",lang:"javascript"}),l.createElement("h3",{id:"getscrolloffset"},l.createElement(a.AnchorLink,{to:"#getscrolloffset","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"getScrollOffset"),l.createElement(c.Z,{code:"getScrollOffset(selector: string).then((offsetInfo: NodesRef.scrollOffsetCallbackResult))",lang:"javascript"})),l.createElement(r.default,o.default["useselectorquery-getscrolloffset"].previewerProps,l.createElement(m,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}))))))))}}]);