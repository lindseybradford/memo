(function(t){function e(e){for(var o,i,c=e[0],u=e[1],p=e[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(e);while(l.length)l.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-10185a8f":"2b4b7d44","chunk-2584c866":"906d9d80","chunk-2d0b368a":"d3f7e73d","chunk-4145b1ad":"670aabb8"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var p=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var s=p;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"452c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("site-menu",{on:{"update-component":t.updateComponent}}),n("transition-page",{attrs:{state:t.currentComponent}},[n(t.currentComponent,{tag:"Component"})],1)],1)},a=[],i=(n("d3b7"),{name:"memo",metaInfo:{link:[{rel:"canonical",href:"https://www.courtneybradford.com"}],title:"Memo",titleTemplate:"Courtney Bradford ← %s",meta:[{name:"description",content:"Memo description."},{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:title",content:"Courtney Bradford ← Memo"},{property:"og:site_name",content:"Memo"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.courtneybradford.com"},{property:"og:image",content:"https://www.courtneybradford.com/meta-image.jpg"},{property:"og:description",content:"I have things here on Memo."},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"https://www.courtneybradford.com"},{name:"twitter:title",content:"Courtney Bradford ← Memo"},{name:"twitter:description",content:"I have things here on Memo."},{name:"twitter:creator",content:"@courtney271"},{name:"twitter:image:src",content:"https://www.courtneybradford.com/meta-image.jpg"},{itemprop:"name",content:"Courtney Bradford ← Memo"},{itemprop:"description",content:"I have things here on Memo."},{itemprop:"image",content:"https://www.courtneybradford.com/meta-image.jpg"}]},data:function(){return{currentComponent:"home"}},components:{contact:function(){return n.e("chunk-4145b1ad").then(n.bind(null,"9f01"))},home:function(){return n.e("chunk-10185a8f").then(n.bind(null,"0f93"))},transitionPage:function(){return n.e("chunk-2d0b368a").then(n.bind(null,"27f5"))},siteMenu:function(){return n.e("chunk-2584c866").then(n.bind(null,"f845"))}},mounted:function(){this.onLoad()},methods:{updateComponent:function(t){history.pushState(null,null,t),"home"!=t&&"contact"!=t||(this.currentComponent=t)},onLoad:function(){"/contact"==window.location.pathname?this.currentComponent="contact":this.currentComponent="home"}}}),c=i,u=(n("f6b0"),n("b0a0"),n("2877")),p=Object(u["a"])(c,r,a,!1,null,null,null),d=p.exports,s=n("58ca"),l=n("e6ae"),f=n.n(l),m="56.25",h={bind:function(t,e){if(t&&e.value){var n=e.value.h/e.value.w*100;t.style.paddingTop=n+"%"}else t&&(t.style.paddingTop=m+"%")}};o["a"].config.productionTip=!1,o["a"].use(s["a"]),o["a"].directive("in-viewport",f.a),o["a"].directive("get-ratio",h),new o["a"]({render:function(t){return t(d)}}).$mount("#app")},"6d65":function(t,e,n){},b0a0:function(t,e,n){"use strict";var o=n("452c"),r=n.n(o);r.a},f6b0:function(t,e,n){"use strict";var o=n("6d65"),r=n.n(o);r.a}});
//# sourceMappingURL=app.4c808817.js.map