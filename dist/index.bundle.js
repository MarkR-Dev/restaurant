(()=>{"use strict";var n={790:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* Added by me */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}",""]);const s=i},16:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(417),c=t.n(s),l=new URL(t(282),t.b),d=new URL(t(25),t.b),u=i()(r()),p=c()(l),f=c()(d);u.push([n.id,`@font-face {\n    font-family: "MyFont";\n    src: url(${p}) format('opentype');\n}\n\nbody {\n   background-image: url(${f});\n   width: 100vw;\n   height: 100vh;\n   background-position: center;\n   box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.7);\n}\n\n/* Header */\n\nheader {\n    color: white;\n    font-family: "MyFont";\n    text-align: center;\n    padding: 30px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n#logo {\n    font-size: 3.5rem;\n    font-weight: bold;\n    color: orange;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n}\n\nnav button {\n    font-size: 2rem;\n    font-weight: 600;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    cursor: pointer;\n}\n\nnav button:hover {\n    text-decoration: underline;\n    text-underline-position: under;\n    color: orange;\n}\n\n.selected {\n    color: orange;\n}\n\n/* Home */\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    color: white;\n    font-family: 'MyFont';\n}\n\n.home-img {\n    width: 600px;\n    border: 3px solid orange;\n    border-radius: 16px;\n}\n\n.home-tagline {\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.home-buttons-div {\n    margin-top: 50px;\n    display: flex;\n    gap: 50px;\n}\n\n.home-buttons-div button {\n    color: white;\n    background-color: transparent;\n    border: 3px solid white;\n    padding: 10px;\n    width: 200px;\n    height: 50px;\n    font-size: 1.5rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.home-buttons-div button:hover {\n    border: 3px solid orange;\n    color: orange;\n}\n`,""]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},25:(n,e,t)=>{n.exports=t.p+"assets/background.jpg"},282:(n,e,t)=>{n.exports=t.p+"assets/font.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),s=t(56),c=t.n(s),l=t(540),d=t.n(l),u=t(113),p=t.n(u),f=t(790),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;var h=t(16),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(h.A,b),h.A&&h.A.locals&&h.A.locals;const g=t.p+"assets/burger.jpg",v=function(){const n=document.querySelector("#home"),e=document.querySelector("#menu"),t=document.querySelector("#contact");n.classList.add("selected"),e.classList.remove("selected"),t.classList.remove("selected");const o=document.createElement("div");o.classList.add("home");const r=new Image;r.src=g,r.classList.add("home-img");const a=document.createElement("h2");a.textContent='"Life\'s Too Short for Small Burgers!"',a.classList.add("home-tagline");const i=document.createElement("div");i.classList.add("home-buttons-div");const s=document.createElement("button");s.setAttribute("type","button"),s.textContent="Book Table",i.appendChild(s);const c=document.createElement("button");return c.setAttribute("type","button"),c.textContent="Order Delivery",i.appendChild(c),o.appendChild(r),o.appendChild(a),o.appendChild(i),o},y=document.querySelector("#content");document.querySelector("#home").addEventListener("click",(()=>{y.textContent="",y.appendChild(v())})),window.addEventListener("load",(()=>{y.appendChild(v())}))})()})();