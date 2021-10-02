(self["webpackChunk"]=self["webpackChunk"]||[]).push([[920],{27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),a=n(3911),c=n(67294),o=n(9790);t["default"]=e=>{var t=e.hidden,n=(0,a.Z)(e,["hidden"]);return c.createElement(o.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},33429:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),c=n(27832),o=n(65659),r=n(99983),i=l.memo(r.default["pages-uselocation"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"uselocation"},l.createElement(a.AnchorLink,{to:"#uselocation","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useLocation"),l.createElement("p",null,"\u5730\u7406\u4f4d\u7f6e"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u4f7f\u7528\u5730\u7406\u4f4d\u7f6e\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(o.Z,{code:"const [\n  location,\n  {\n    getLocation,\n    chooseLocation,\n    openLocation,\n    onLocationChange,\n    offLocationChange,\n    startLocationUpdate,\n    startLocationUpdateBackground,\n    stopLocationUpdate,\n  },\n] = useLocation(options?);",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"\u83b7\u53d6\u5730\u7406\u4fe1\u606f\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),l.createElement("td",null,l.createElement("code",null,"IPositionOption & ","{"," altitude?: boolean ","}")),l.createElement("td",null,"-")))),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"location"),l.createElement("td",null,"\u6839\u636e\u521d\u59cb\u5316\u914d\u7f6e\u83b7\u53d6\u7684\u5730\u7406\u4fe1\u606f"),l.createElement("td",null,l.createElement("code",null,"getLocation.SuccessCallbackResult | IGeolocationCoordinates | undefined"))),l.createElement("tr",null,l.createElement("td",null,"getLocation"),l.createElement("td",null,"\u83b7\u53d6\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\u3001\u901f\u5ea6(h5 \u652f\u6301)"),l.createElement("td",null,l.createElement("code",null,"(getLocationOption?: IGetLocationOption) => Promise<General.CallbackResult |ILocation>"))),l.createElement("tr",null,l.createElement("td",null,"chooseLocation"),l.createElement("td",null,"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e"),l.createElement("td",null,l.createElement("code",null,"(chooseLocationOption?: Pick<chooseLocation.Option, 'latitude' | 'longitude'>) => Promise<chooseLocation.SuccessCallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"openLocation"),l.createElement("td",null,"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e"),l.createElement("td",null,l.createElement("code",null,"(openLocationOption: Pick<openLocation.Option,'address' | 'latitude' | 'longitude' | 'name' | 'scale'>) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"onLocationChange"),l.createElement("td",null,"\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6(h5 \u652f\u6301)"),l.createElement("td",null,l.createElement("code",null,"(callback: INormalCallback | onLocationChange.Callback) => void"))),l.createElement("tr",null,l.createElement("td",null,"offLocationChange"),l.createElement("td",null,"\u53d6\u6d88\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6(h5 \u652f\u6301)"),l.createElement("td",null,l.createElement("code",null,"(callback: INormalCallback | onLocationChange.Callback) => void"))),l.createElement("tr",null,l.createElement("td",null,"startLocationUpdate"),l.createElement("td",null,"\u5f00\u542f\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u524d\u53f0\u65f6\u63a5\u6536\u4f4d\u7f6e\u6d88\u606f"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"startLocationUpdateBackground"),l.createElement("td",null,"\u5f00\u542f\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u524d\u540e\u53f0\u65f6\u5747\u63a5\u6536\u4f4d\u7f6e\u6d88\u606f"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"stopLocationUpdate"),l.createElement("td",null,"\u5173\u95ed\u76d1\u542c\u5b9e\u65f6\u4f4d\u7f6e\u53d8\u5316"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(c.default,r.default["pages-uselocation"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}))))))))}}]);