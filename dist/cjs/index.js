"use strict";var e=require("react"),t=require("@mui/material");function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var a,n={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/a=n,function(){var e={}.hasOwnProperty;function t(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=n(e,r(a)))}return e}function r(r){if("string"==typeof r||"number"==typeof r)return r;if("object"!=typeof r)return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var a="";for(var c in r)e.call(r,c)&&r[c]&&(a=n(a,c));return a}function n(e,t){return t?e?e+" "+t:e+t:e}a.exports?(t.default=t,a.exports=t):window.classNames=t}();var c=r(n.exports);const o=({className:t})=>e.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},e.createElement("path",{d:"M14.1,7.5l8.1,0v14.7c0,0.6,0,1.2,0.1,1.7c-0.1-0.6-0.1-1.2-0.1-1.7V7.5c0,0,63.6,0,63.6,0h-8.1 c0,0,0,14.7,0,14.7c0,7-4.6,13.3-11.7,17.1c-4.2,2.3-6.8,5.9-6.8,9.8v1.9c0,3.9,2.5,7.6,6.8,9.8c7.1,3.8,11.7,10,11.7,17.1 c0,0,0,14.7,0,14.7h8.1h-8.1H50h18V82.3c0-3.8-2.6-7.4-7-9.8c-0.1,0-0.1-0.1-0.2-0.1c-6.6-3.6-14.9-3.6-21.5,0 c-0.1,0-0.1,0.1-0.2,0.1c-4.5,2.4-7,6-7,9.8l0,10.2h18c0,0-18,0-18,0H14.1l8.1,0V77.8c0-7,4.6-13.3,11.7-17.1 c4.2-2.3,6.8-5.9,6.8-9.8v-1.9c0-3.9-2.5-7.6-6.8-9.8c-6.5-3.5-10.9-9-11.6-15.3l9.9,0c0.7,3.1,3,5.9,6.8,8c5.7,3,9.5,7.7,10.9,12.9 c1.4-5.2,5.3-9.9,10.9-12.9c3.8-2,6.2-4.8,6.8-8H32.2",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("animate",{attributeName:"stroke-dasharray",keyTimes:"0;1",values:"480 100;480 110",dur:"3.2258064516129035s",repeatCount:"indefinite"}),e.createElement("animate",{attributeName:"stroke-dashoffset",keyTimes:"0;1",values:"0;-1180",dur:"3.2258064516129035s",repeatCount:"indefinite"}))),s=({fullPage:t,absolute:r,backdrop:a,className:n})=>e.createElement("div",{className:c(n,"loader",{"page-loader-wrapper":t,"loader-wrapper":!t,"'absolute'":r&&!t,"'backdrop'":a})},e.createElement(o,{className:c("icon","icon",{"full-page":t})}));exports.Button=({className:r,wrapperClassName:a,disabled:n,isLoading:o,children:l,...i})=>e.createElement("div",{className:c("btn-wrapper",a,{"'disabled'":n})},e.createElement(t.Button,{...i,className:c("button",r,{"'disabled'":n}),disabled:n},o&&e.createElement(s,{className:"loader",absolute:!0}),e.createElement("div",{className:c("content",{"'loading'":o})},l))),exports.Loader=s;
//# sourceMappingURL=index.js.map