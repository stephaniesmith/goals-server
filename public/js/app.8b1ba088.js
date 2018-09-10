(function(t){function e(e){for(var o,i,u=e[0],l=e[1],s=e[2],f=0,p=[];f<u.length;f++)i=u[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"0d00":function(t,e,n){"use strict";var o=n("744f"),r=n.n(o);r.a},2422:function(t,e,n){"use strict";var o=n("7801"),r=n.n(o);r.a},"442e":function(t,e,n){},"4e3e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RouterLink",{attrs:{to:"/"}},[t._v("Home")]),t._v("\n   \n  "),t.user?t._e():n("RouterLink",{attrs:{to:"/auth"}},[t._v("Login")]),t._v("\n   \n  "),t.user?n("RouterLink",{attrs:{to:"/goals"}},[t._v("My Goals")]):t._e(),t._v("\n   \n  "),t.user?n("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.handleSignOut(e)}}},[t._v("Log Out")]):t._e(),n("RouterView",{attrs:{onUser:t.handleUser,user:t.user}})],1)},i=[],u="/api",l="".concat(u,"/auth"),s="".concat(u,"/goals"),c="";function f(t){return t.ok?t.json():t.json().then(function(t){throw t.error})}function p(){var t={"Content-type":"application/json"};return c&&(t["Authorization"]=c),t}function d(t){c=t.id,window.localStorage.setItem("user",JSON.stringify(t))}function h(){var t=window.localStorage.getItem("user");if(!t)return null;var e=JSON.parse(t);return c=e.id,e}function v(t){return fetch("".concat(l,"/signup"),{method:"POST",headers:p(),body:JSON.stringify(t)}).then(f).then(function(t){return d(t),t})}function g(t){return fetch("".concat(l,"/signin"),{method:"POST",headers:p(),body:JSON.stringify(t)}).then(f).then(function(t){return d(t),t})}function m(){c="",window.localStorage.removeItem("user")}function _(){return fetch(s,{headers:p()}).then(f)}function b(){return fetch("".concat(s,"/me"),{headers:p()}).then(f)}function S(t){return fetch("".concat(s,"/me"),{method:"POST",headers:p(),body:JSON.stringify(t)}).then(f)}function y(t){return fetch("".concat(s,"/me"),{method:"PUT",headers:p(),body:JSON.stringify(t)}).then(f)}var w={name:"app",data:function(){return{user:null}},created:function(){this.user=h()},watch:{type:function(t,e){t!==e&&(this.error=null)}},methods:{handleUser:function(t){this.user=t},handleSignOut:function(){m(),this.user=null,this.$router.push("/")}}},O=w,k=(n("034f"),n("2877")),j=Object(k["a"])(O,a,i,!1,null,null,null);j.options.__file="App.vue";var U=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth"},[n("h2",[t._v(t._s(t.label))]),n("button",{on:{click:function(e){t.type=t.isSignUp?"singIn":"signUp"}}},[t._v("\n    "+t._s(t.isSignUp?"Already a user? Click here to sign in":"New? Click here to sign up")+"\n  ")]),n("pre",[t._v(t._s(t.error))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],attrs:{placeholder:"email"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{placeholder:"password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),n("button",[t._v(t._s(t.label))])])])},A=[],P={name:"Auth",props:{onUser:Function},data:function(){return{credentials:{email:"",password:""},type:"SignIn",error:null}},computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},methods:{handleSubmit:function(){var t=this;this.error=null;var e=this.isSignUp?v:g;e(this.credentials).then(function(e){t.onUser(e),t.$router.push("/")}).catch(function(e){t.error=e})}}},G=P,$=(n("2422"),Object(k["a"])(G,x,A,!1,null,"409d1824",null));$.options.__file="Auth.vue";var L=$.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.goals?n("h1",[t._v("Goals of all Users")]):t._e(),n("ul",t._l(t.goals,function(e){return n("li",{key:e.id},[n("h2",[t._v(t._s(e.user))]),n("p",[t._v(t._s(e.goal))]),e.complete?n("h2",[t._v("💯 ☑️ 🎉")]):t._e()])}))])},C=[],J={data:function(){return{goals:null}},created:function(){var t=this;_().then(function(e){console.log(e),t.goals=e})}},T=J,E=(n("0d00"),Object(k["a"])(T,N,C,!1,null,"b9d85730",null));E.options.__file="Home.vue";var I=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("GOALS!")]),n("AddGoal",{attrs:{onAdd:t.handleAdd}}),n("GoalList",{attrs:{goals:t.goals}})],1)},M=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("GOALSLIST")]),n("ul",t._l(t.goals,function(e){return n("Goal",{key:e.id,attrs:{goal:e,onUpdate:t.handlePut}})}))])},H=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n  "+t._s(t.goal.goal)+"\n  "),n("button",{class:{completed:t.goal.complete},on:{click:t.handleClick}},[t._v("Click")])])},z=[],F={props:["goal","onUpdate"],methods:{handleClick:function(){this.goal.complete=!this.goal.complete,this.onUpdate(this.goal)}}},W=F,q=(n("97ca"),Object(k["a"])(W,V,z,!1,null,"7b38acd4",null));q.options.__file="Goal.vue";var B=q.exports,K={props:["goals"],components:{Goal:B},methods:{handlePut:function(t){y(t)}}},Q=K,X=(n("c378"),Object(k["a"])(Q,D,H,!1,null,null,null));X.options.__file="GoalList.vue";var Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.goal,expression:"goal.goal"}],attrs:{placeholder:"Write a goal"},domProps:{value:t.goal.goal},on:{input:function(e){e.target.composing||t.$set(t.goal,"goal",e.target.value)}}}),n("button",[t._v("Submit")])])},tt=[],et=function(){return{goal:""}},nt={props:["onAdd"],data:function(){return{goal:et()}},methods:{handleSubmit:function(){this.onAdd(this.goal),this.goal=et()}}},ot=nt,rt=(n("e00a"),Object(k["a"])(ot,Z,tt,!1,null,null,null));rt.options.__file="AddGoal.vue";var at=rt.exports,it={props:["user"],components:{GoalList:Y,AddGoal:at},data:function(){return{goals:null}},created:function(){var t=this;b().then(function(e){t.goals=e})},methods:{handleAdd:function(t){var e=this;S(t).then(function(t){e.goals.push(t)})}}},ut=it,lt=(n("9fc7"),Object(k["a"])(ut,R,M,!1,null,null,null));lt.options.__file="Goals.vue";var st=lt.exports,ct=new r["a"]({routes:[{path:"/",component:I},{path:"/auth",component:L},{path:"/goals",component:st}]});n("3cc5");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].component("RouterLink",o["a"].component("router-link")),o["a"].component("RouterView",o["a"].component("router-view")),new o["a"]({router:ct,render:function(t){return t(U)}}).$mount("#app")},"744f":function(t,e,n){},7801:function(t,e,n){},"97ca":function(t,e,n){"use strict";var o=n("442e"),r=n.n(o);r.a},"9fc7":function(t,e,n){"use strict";var o=n("ceeb"),r=n.n(o);r.a},c21b:function(t,e,n){},c378:function(t,e,n){"use strict";var o=n("e360"),r=n.n(o);r.a},ceeb:function(t,e,n){},e00a:function(t,e,n){"use strict";var o=n("4e3e"),r=n.n(o);r.a},e360:function(t,e,n){}});
//# sourceMappingURL=app.8b1ba088.js.map