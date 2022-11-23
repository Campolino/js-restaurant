(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"/* --- HEADER --- */\n\nbody,\n#content {\n  margin: 0;\n  padding: 0;\n}\n\n#content > header > .header-image {\n  background-repeat: no-repeat;\n  height: 224px;\n  background-color: blue;\n}\n\n#content > header > .header-image > .header-text {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.473);\n}\n\n#content > header > .header-image > .header-text > h1,\n#content > header > .header-image > .header-text > a {\n  font-size: 1.2rem;\n  padding: 5px 10px;\n  font-weight: bold;\n}\n\n#content > header > .header-image > .header-text > h1:hover,\n#content > header > .header-image > .header-text > a:hover {\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.651);\n}\n\n/* --- MAIN --- */\n\nmain {\n  width: 90%;\n  margin: 20px auto;\n  display: flex;\n  align-items: center;\n}\n\n/* --- ARTICLE --- */\narticle {\n  width: 65%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n\n.card {\n  border: 1px solid black;\n  border-radius: 15px;\n  padding: 5px;\n}\n\n.card > img {\n  width: 100%;\n  height: 250px;\n  border-radius: 15px;\n}\n\n.card > hr {\n  border: 0.5px solid black;\n}\n\n.card > div {\n  text-align: center;\n  font-weight: bold;\n}\n\n.card:hover {\n  box-shadow: 2px 2px 2px 2px black;\n  cursor: pointer;\n}\n\n/* --- PRESENTATION --- */\n\n.presentation {\n  max-width: 25%;\n  margin: 0 auto;\n  border: 1px solid black;\n  border-radius: 15px;\n  box-sizing: border-box;\n  box-shadow: 2px 2px black;\n}\n\n.presentation > h2 {\n  text-align: center;\n  background-color: rgb(239, 241, 109);\n  margin: 0;\n  padding: 10px 0;\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n}\n\n.presentation > img {\n  width: 100%;\n  height: auto;\n  border: 5px solid rgb(239, 241, 109);\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-sizing: border-box;\n}\n\n.presentation > p {\n  padding: 5px 10px 0 10px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=o[s]||0,l="".concat(s," ").concat(p);o[s]=p+1;var u=t(l),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=a(h,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var p=t(o[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"f81ea82e0b3c82ecf3e4.jpg",n=t.p+"a7ac414ba462926283f3.jpg",r=t.p+"060fd6cc6060139bcc65.jpg",a=t.p+"1f6109904eb7573c2f7d.jpg",o=t.p+"37ffa7886ee481368c67.jpg",i=t.p+"e26c7625fe3d65ad3cdf.jpg";var c=t(379),d=t.n(c),s=t(795),p=t.n(s),l=t(569),u=t.n(l),h=t(565),m=t.n(h),f=t(216),g=t.n(f),b=t(589),x=t.n(b),v=t(426),y={};y.styleTagTransform=x(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=g(),d()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const C=document.querySelector("#content"),w=document.createElement("main");let E=[{image:`${r}`,data:"pesto",recipe:"Dandelion Pumpkin Seed Pesto"},{image:`${a}`,data:"tempura",recipe:"Golden Dandelion Tempura Blooms"},{image:`${o}`,data:"salad",recipe:"Warm Potato Salad With Shallot Dressing"},{image:`${i}`,data:"green",recipe:"Sautéed Spicy Dandelion Greens"}];w.appendChild(function(){const e=document.createElement("article");return E.forEach((n=>{e.appendChild(function(e){const n=document.createElement("div");n.classList.add("card"),n.setAttribute("data-card",`${e.data}`);const t=new Image;t.src=e.image;const r=document.createElement("div");r.textContent=e.recipe;const a=document.createElement("hr");return n.appendChild(t),n.appendChild(a),n.appendChild(r),n}(n))})),e}()),w.appendChild(function(){const e=document.createElement("section");e.classList.add("presentation");const t=document.createElement("h2");t.textContent="Dandelion";const r=new Image;r.src=n;const a=document.createElement("p");return a.textContent="The nutrients found in dandelions rival any leafy greens, they are full of vitamins and minerals. Dandelions contain vitamins A, C, K, Folate, calcium, and potassium. These vitamins and minerals provide those that use dandelion recipes with many different health benefits.",e.appendChild(t),e.appendChild(r),e.appendChild(a),e}()),C.appendChild(function(){const n=document.createElement("header"),t=document.createElement("div");t.classList.add("header-image"),t.style.backgroundImage=`url('${e}')`;const r=document.createElement("div");r.classList.add("header-text");const a=document.createElement("h1");a.textContent="Dandelion Foodie";const o=document.createElement("a");o.textContent="Recipes";const i=document.createElement("a");return i.textContent="Contact Us",r.appendChild(a),r.appendChild(o),r.appendChild(i),t.appendChild(r),n.appendChild(t),n}()),C.appendChild(w)})()})();