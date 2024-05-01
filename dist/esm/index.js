import e from"react";import{Button as n}from"@mui/material";function t(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}t('h1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n}\n\n.base_label-input-wrapper__YqcTR {\n  display: flex;\n  flex-direction: column;\n}\n.base_label-input-wrapper__YqcTR label {\n  margin-bottom: 8px;\n}\n\nbody {\n  background-color: #222222;\n  color: #ddd;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nsvg, path {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: #ffffff;\n  transition: background-color 5000s ease-in-out 0s;\n  box-shadow: inset 0 0 20px 20px rgba(35, 35, 35, 0.1607843137);\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}');var a,l={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=l,function(){var e={}.hasOwnProperty;function n(){for(var e="",n=0;n<arguments.length;n++){var a=arguments[n];a&&(e=o(e,t(a)))}return e}function t(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var a="";for(var l in t)e.call(t,l)&&t[l]&&(a=o(a,l));return a}function o(e,n){return n?e?e+" "+n:e+n:e}a.exports?(n.default=n,a.exports=n):window.classNames=n}();var i=o(l.exports);const s=({className:n})=>e.createElement("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},e.createElement("path",{d:"M14.1,7.5l8.1,0v14.7c0,0.6,0,1.2,0.1,1.7c-0.1-0.6-0.1-1.2-0.1-1.7V7.5c0,0,63.6,0,63.6,0h-8.1 c0,0,0,14.7,0,14.7c0,7-4.6,13.3-11.7,17.1c-4.2,2.3-6.8,5.9-6.8,9.8v1.9c0,3.9,2.5,7.6,6.8,9.8c7.1,3.8,11.7,10,11.7,17.1 c0,0,0,14.7,0,14.7h8.1h-8.1H50h18V82.3c0-3.8-2.6-7.4-7-9.8c-0.1,0-0.1-0.1-0.2-0.1c-6.6-3.6-14.9-3.6-21.5,0 c-0.1,0-0.1,0.1-0.2,0.1c-4.5,2.4-7,6-7,9.8l0,10.2h18c0,0-18,0-18,0H14.1l8.1,0V77.8c0-7,4.6-13.3,11.7-17.1 c4.2-2.3,6.8-5.9,6.8-9.8v-1.9c0-3.9-2.5-7.6-6.8-9.8c-6.5-3.5-10.9-9-11.6-15.3l9.9,0c0.7,3.1,3,5.9,6.8,8c5.7,3,9.5,7.7,10.9,12.9 c1.4-5.2,5.3-9.9,10.9-12.9c3.8-2,6.2-4.8,6.8-8H32.2",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("animate",{attributeName:"stroke-dasharray",keyTimes:"0;1",values:"480 100;480 110",dur:"3.2258064516129035s",repeatCount:"indefinite"}),e.createElement("animate",{attributeName:"stroke-dashoffset",keyTimes:"0;1",values:"0;-1180",dur:"3.2258064516129035s",repeatCount:"indefinite"})));t(".styles-module_loader-wrapper__ZBbV0 {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.styles-module_page-loader-wrapper__7-6tB {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99999;\n}\n\n.styles-module_absolute__JqY7T {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.styles-module_absolute__JqY7T .styles-module_icon__H4z9j {\n  z-index: 100;\n}\n\n.styles-module_backdrop__FHc-4 {\n  background-color: rgba(34, 34, 34, 0.4);\n  z-index: 90;\n}\n\n.styles-module_icon__H4z9j {\n  color: #f47e60;\n  padding: 20px 0;\n}\n.styles-module_icon__H4z9j, .styles-module_icon__H4z9j path {\n  min-width: 30px;\n  max-width: 30px;\n  min-height: 30px;\n  max-height: 30px;\n  width: 30px;\n  height: 30px;\n}\n.styles-module_icon__H4z9j.styles-module_full-page__aXLpq, .styles-module_icon__H4z9j.styles-module_full-page__aXLpq path {\n  min-width: 80px;\n  max-width: 80px;\n  min-height: 80px;\n  max-height: 80px;\n  width: 80px;\n  height: 80px;\n}");const r=({fullPage:n,absolute:t,backdrop:o,className:a})=>e.createElement("div",{className:i(a,"loader",{"page-loader-wrapper":n,"loader-wrapper":!n,"'absolute'":t&&!n,"'backdrop'":o})},e.createElement(s,{className:i("icon","icon",{"full-page":n})}));var d={"btn-wrapper":"styles-module_btn-wrapper__Nmvo1",disabled:"styles-module_disabled__qFYm0",loader:"styles-module_loader__JYmB4",content:"styles-module_content__625YX",loading:"styles-module_loading__jL3RT"};t(".styles-module_btn-wrapper__Nmvo1 {\n  position: relative;\n}\n.styles-module_btn-wrapper__Nmvo1.styles-module_disabled__qFYm0 .MuiButtonBase-root {\n  color: rgba(255, 255, 255, 0.5);\n}\n.styles-module_btn-wrapper__Nmvo1 .styles-module_loader__JYmB4 .icon {\n  color: white;\n  padding: 0;\n}\n.styles-module_btn-wrapper__Nmvo1 .styles-module_loader__JYmB4 .icon, .styles-module_btn-wrapper__Nmvo1 .styles-module_loader__JYmB4 .icon path {\n  min-width: calc(22px);\n  max-width: calc(22px);\n  min-height: calc(22px);\n  max-height: calc(22px);\n  width: calc(22px);\n  height: calc(22px);\n}\n.styles-module_btn-wrapper__Nmvo1 .styles-module_content__625YX {\n  font-size: 14px;\n}\n.styles-module_btn-wrapper__Nmvo1 .styles-module_content__625YX.styles-module_loading__jL3RT {\n  visibility: hidden;\n}");const c=({className:t,wrapperClassName:o,disabled:a,isLoading:l,children:s,...c})=>e.createElement("div",{className:i(d["btn-wrapper"],o,{[d.disabled]:a})},e.createElement(n,{...c,className:i(d.button,t,{[d.disabled]:a}),disabled:a},l&&e.createElement(r,{className:d.loader,absolute:!0}),e.createElement("div",{className:i(d.content,{[d.loading]:l})},s)));export{c as Button,r as Loader};
//# sourceMappingURL=index.js.map
