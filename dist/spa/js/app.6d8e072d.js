(function(e){function t(t){for(var r,n,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},n={1:0},a={1:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"b998b194",3:"24dca6c5",4:"a053c4e3",5:"b45807e3",6:"7fd14dad"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={2:1,3:1,4:1,5:1,6:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var r="css/"+({}[e]||e)+"."+{2:"50f2b416",3:"97ef4a9c",4:"db0ee047",5:"e4b5609e",6:"42d15122"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],d.parentNode.removeChild(d),o(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var o=a[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,o[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=u;i.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);var r={};o.r(r),o.d(r,"getPokemons",(function(){return T}));var n={};o.r(n),o.d(n,"getPokemon",(function(){return k})),o.d(n,"SET_POKEMON",(function(){return A}));var a={};o.r(a),o.d(a,"actNamePokemon",(function(){return I}));var i={};o.r(i),o.d(i,"getAnotations",(function(){return J}));var s={};o.r(s),o.d(s,"SET_ANOTATIONS",(function(){return L}));var l={};o.r(l),o.d(l,"actGetAnotations",(function(){return M})),o.d(l,"actSetAnotations",(function(){return q})),o.d(l,"actRemoveAnotations",(function(){return $}));o("5319"),o("e54f"),o("985d"),o("31cd");var c=o("2b0e"),u=o("1f91"),f=o("42d2"),d=o("b05d"),p=o("2a19"),m=o("f508"),g=o("436b");c["a"].use(d["a"],{config:{notify:{},loading:{}},lang:u["a"],iconSet:f["a"],plugins:{Notify:p["a"],Loading:m["a"],Dialog:g["a"]}});var h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},v=[],b={name:"App"},y=b,S=o("2877"),w=Object(S["a"])(y,h,v,!1,null,null,null),O=w.exports,N=o("2f62"),P={pokemons:{}};function T(e){return e.pokemons}function k(e,t){}const A=(e,t)=>{e.pokemons=t};var E=o("bc3a"),x=o.n(E),C=o("7424");const I=async({commit:e})=>{let t={};return"undefined"!=localStorage.getItem("pokemons")&&(t=JSON.parse(localStorage.getItem("pokemons"))),null===t&&await C["a"].get("/pokemon/?offset=0&limit=100").then((e=>{t=e.data.results,localStorage.setItem("pokemons",JSON.stringify(t))})).catch((e=>{console.log(e)})),e("SET_POKEMON",t),t};var _={namespaced:!0,state:P,getters:r,mutations:n,actions:a},j={anotations:[]};function J(e){return e.anotations}const L=(e,t)=>{e.anotations=t},M=async({commit:e})=>{let t={};return"undefined"!=localStorage.getItem("user-anotations")&&(t=JSON.parse(localStorage.getItem("user-anotations"))),e("SET_ANOTATIONS",t),t},q=async({commit:e},t)=>{let o=[];"undefined"!=localStorage.getItem("user-anotations")&&null!=localStorage.getItem("user-anotations")&&(o=JSON.parse(localStorage.getItem("user-anotations")));let r={id:o.length,text:t};return o.push(r),localStorage.setItem("user-anotations",JSON.stringify(o)),e("SET_ANOTATIONS",o),o},$=async({commit:e},t)=>{let o=[];return"undefined"!=localStorage.getItem("user-anotations")&&null!=localStorage.getItem("user-anotations")&&(o=JSON.parse(localStorage.getItem("user-anotations"))),o=o.filter((e=>e.id!=t)),localStorage.setItem("user-anotations",JSON.stringify(o)),e("SET_ANOTATIONS",o),o};var B={namespaced:!0,state:j,getters:i,mutations:s,actions:l};c["a"].use(N["a"]);var D=function(){const e=new N["a"].Store({modules:{pokemons:_,anotations:B},strict:!1});return e},R=o("8c4f");o("ddb0");const V=[{path:"/",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"bc13"))},{path:"about",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"a1d1"))},{path:"pokemons",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"1aaf"))},{path:"notes",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"d171"))}]}];var K=V;c["a"].use(R["a"]);var H=function(){const e=new R["a"]({scrollBehavior:()=>({x:0,y:0}),routes:K,mode:"hash",base:""});return e},U=async function(){const e="function"===typeof D?await D({Vue:c["a"]}):D,t="function"===typeof H?await H({Vue:c["a"],store:e}):H;e.$router=t;const o={router:t,store:e,render:e=>e(O),el:"#q-app"};return{app:o,store:e,router:t}};c["a"].prototype.$axios=x.a;var F=async({app:e,Vue:t})=>{t.prototype.$dialog={error:(e,t)=>{g["a"].create({title:t||"ERRO",color:"red-14",html:!0,message:e||"Ops, ocorreu um erro"})},confirm(e,t){return g["a"].create({title:e||"Confirmar!",message:t||"",cancel:{label:"Cancelar",flat:!0,textColor:"#999",color:"white"},ok:{label:"Confirmar",color:"red-1",flat:!0,textColor:"primary"},html:!0,persistent:!0})}}};c["a"].prototype.$notify={validation:e=>{p["a"].create({color:"red-14",textColor:"white",html:!0,message:e||"Dados enviados são inválidos, verifique os campos marcados em vermelho"})},error:e=>{p["a"].create({color:"red-14",textColor:"white",html:!0,message:e||"Oops, ocorreu um erro inesperado"})},alert:e=>{p["a"].create({color:"grey-10",textColor:"white",html:!0,message:e||"Aguarde ..."})},warning:e=>{p["a"].create({color:"amber-10",textColor:"white",html:!0,message:e||"ATENÇÃO"})},success:e=>{p["a"].create({color:"green-10",textColor:"white",position:"top",html:!0,message:e||"Sucesso"})}};const G="";async function Q(){const{app:e,store:t,router:o}=await U();let r=!1;const n=e=>{r=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[void 0,F,void 0];for(let l=0;!1===r&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:o,store:t,Vue:c["a"],ssrContext:null,redirect:n,urlPath:a,publicPath:G})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new c["a"](e)}Q()},"31cd":function(e,t,o){},7424:function(e,t,o){"use strict";var r=o("bc3a"),n=o.n(r);const a=n.a.create({baseURL:"https://pokeapi.co/api/v2",timeout:1e3,headers:{"X-Custom-Header":"foobar"}});t["a"]=a}});