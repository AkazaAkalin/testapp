(function(e){function t(t){for(var a,r,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)r=i[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0c10bdcd","chunk-0ea9868a":"3d28c2f7","chunk-19bfaee0":"e82cdfe7","chunk-2d221da6":"4887bf3a","chunk-7997a635":"3014bbef","chunk-e719c440":"ae744095"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0ea9868a":1,"chunk-7997a635":1,"chunk-e719c440":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-0ea9868a":"c9695591","chunk-19bfaee0":"31d6cfe0","chunk-2d221da6":"31d6cfe0","chunk-7997a635":"070edfbb","chunk-e719c440":"ed919558"}[e]+".css",o=c.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.request=a,delete r[e],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");u.type=a,u.request=r,n[1](u)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"1c61":function(e,t,n){"use strict";var a=n("ed34"),r=n.n(a);r.a},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("d847"),o=n.n(r),u=n("795b"),i=n.n(u),c=n("bc3a"),s=n.n(c),l={},f=s.a.create(l);f.interceptors.request.use(function(e){return e},function(e){return i.a.reject(e)}),f.interceptors.response.use(function(e){return e},function(e){return i.a.reject(e)}),Plugin.install=function(e,t){e.axios=f,window.axios=f,o()(e.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},a["default"].use(Plugin);Plugin;var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navi",{attrs:{navVal:e.activeNav}}),n("router-view",{on:{changeNav:e.change}})],1)},h=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.activeClass},[n("header",[n("span",{on:{click:function(t){return e.routerPush(e.btnList[0])}}},[e._v("首页")]),n("h1",[e._v(e._s(e.activeTitle))])]),n("nav",[n("ul",e._l(e.btnList,function(t,a){return n("li",{key:a,class:{active:t.className==e.activeClass},on:{click:function(n){return e.routerPush(t)}}},[e._v(e._s(t.name))])}),0)])])},m=[],v=(n("7f7f"),{created:function(){},data:function(){return{activeTitle:"电影",activeClass:"movie",btnList:[{name:"电影",routerPath:"/movie",className:"movie"},{name:"音乐",routerPath:"/music",className:"music"},{name:"书籍",routerPath:"/book",className:"book"},{name:"聊天",routerPath:"/talk",className:"talk"}]}},methods:{routerPush:function(e){this.$router.push(e.routerPath),this.activeTitle=e.name,this.activeClass=e.className}},props:["navVal"],computed:{propsVal:function(){return this.navVal.title}},watch:{propsVal:function(){this.activeClass=this.navVal.className,this.activeTitle=this.navVal.title}}}),b=v,g=(n("1c61"),n("2877")),k=Object(g["a"])(b,p,m,!1,null,"6d155480",null),y=k.exports,w={data:function(){return{activeNav:{title:"电影",className:"movie"}}},components:{navi:y},methods:{change:function(e){this.activeNav.title=e.title,this.activeNav.className=e.className}}},P=w,N=(n("034f"),Object(g["a"])(P,d,h,!1,null,null,null)),T=N.exports,_=n("8c4f");a["default"].use(_["a"]);var j=new _["a"]({mode:"history",base:"",routes:[{path:"/",name:"movie",component:function(){return n.e("chunk-0ea9868a").then(n.bind(null,"948e"))}},{path:"/movie",name:"movie",component:function(){return n.e("chunk-0ea9868a").then(n.bind(null,"948e"))}},{path:"/music",name:"music",component:function(){return n.e("chunk-19bfaee0").then(n.bind(null,"2b17"))}},{path:"/book",name:"book",component:function(){return n.e("chunk-e719c440").then(n.bind(null,"f6e6"))}},{path:"/talk",name:"talk",component:function(){return n.e("chunk-7997a635").then(n.bind(null,"c592"))}},{path:"*",component:function(){return n.e("about").then(n.bind(null,"dda8"))}},{path:"/moviedetail",name:"moviedetail",component:function(){return n.e("chunk-2d221da6").then(n.bind(null,"cbb3"))}}]});n("4ee2");(function(e){var t,n=e.document,a=n.documentElement;function r(){var e=a.getBoundingClientRect().width,t=e/6.4;a.style.fontSize=t+"px"}e.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(r,10)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(r,10))},!1),r()})(window),a["default"].config.productionTip=!1,new a["default"]({router:j,render:function(e){return e(T)}}).$mount("#app")},"64a9":function(e,t,n){},ed34:function(e,t,n){}});
//# sourceMappingURL=app.f002818e.js.map