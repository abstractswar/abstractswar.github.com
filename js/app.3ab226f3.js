(function(t){function e(e){for(var n,s,u=e[0],l=e[1],o=e[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"3e80":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper",attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"menu-wrapper"},[r("div",{staticClass:"menu-title"},[t._v("Розділи")]),r("div",{staticClass:"menu-topics"},t._l(t.menu.topics,(function(e,n){return r("div",{key:n,staticClass:"menu-topic"},[r("div",{staticClass:"menu-topic-title"},[t._v(t._s(e.title))]),r("div",{staticClass:"menu-topic-items"},t._l(e.items,(function(n,i){return r("div",{key:i,staticClass:"menu-topic-item",on:{click:function(r){return t.$router.push(e.href+n.href)}}},[t._v(" "+t._s(n.title)+" ")])})),0)])})),0)]),r("div",{staticClass:"content-wrapper scrollable"},[r("div",{staticClass:"in-content-wrapper"},[r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-wrapper"},[r("div",{staticClass:"header-title"},[r("b",{staticClass:"header-title-p1"},[t._v("Abstracts")]),t._v(" "),r("b",{staticClass:"header-title-p2"},[t._v("War")])])])}],u={data:function(){return{menu:{topics:[{title:"Системне програмування",href:"/sp",items:[{title:"Пошук епсілон нетерміналів",href:"/eps-non-terms"},{title:"Пошук first_k множини",href:"/first_k"}]},{title:"Математична логіка",href:"/ml",items:[{title:"Побудова дерева секвенцій дерева секвенцій",href:"/sequences-tree"},{title:"Метод резолюцій",href:"/resolutions-method"}]}]}}},computed:{},components:{},methods:{},mounted:function(){}},l=u,o=(r("034f"),r("2877")),c=Object(o["a"])(l,a,s,!1,null,null,null),f=c.exports,p=r("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-title"},[t._v("Вхідні данні")]),r("div",{staticClass:"card-comment"},[t._v("Вкажіть граматику, для якої потрібно побудувати множину ε – нетерміналів:")]),r("div",{staticClass:"grammar-rules"},t._l(t.rules.length,(function(e){return r("div",{key:e,staticClass:"grammar-rule-line"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.rules[e-1].left,expression:"rules[index - 1].left"}],staticClass:"grammar-rule-input grammar-rule-input-left",attrs:{type:"text"},domProps:{value:t.rules[e-1].left},on:{input:function(r){r.target.composing||t.$set(t.rules[e-1],"left",r.target.value)}}}),r("b",{staticClass:"grammar-rule-splitter"},[t._v("➔")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.rules[e-1].right,expression:"rules[index - 1].right"}],staticClass:"grammar-rule-input grammar-rule-input-right",attrs:{type:"text"},domProps:{value:t.rules[e-1].right},on:{input:function(r){r.target.composing||t.$set(t.rules[e-1],"right",r.target.value)}}}),t.rules.length>2?r("button",{staticClass:"grammar-rule-delete",on:{click:function(r){return t.deleteRule(e)}}},[t._v("✖")]):t._e()])})),0),r("div",{staticClass:"options-buttons-wrapper"},[r("button",{staticClass:"grammar-rule-add",on:{click:function(e){return t.addRule()}}},[t._v("+ Добавити правило")]),r("button",{staticClass:"put-example-button example-1",on:{click:function(e){return t.putExample(0)}}},[t._v("Приклад 1")]),r("button",{staticClass:"put-example-button example-2",on:{click:function(e){return t.putExample(1)}}},[t._v("Приклад 2")])])]),r("div",{staticClass:"run-button-wrapper"},[t.validate()?r("button",{staticClass:"run-button",on:{click:t.run}},[t._v("Пошльопали")]):r("button",{staticClass:"run-button unactivated"},[t._v("Пошльопали")])]),r("div",{staticClass:"card"},[r("div",{staticClass:"card-title"},[t._v("Хід розв'язання:")]),t._l(t.outputBuffer,(function(e){return r("div",{key:e,staticClass:"solving-steps",domProps:{innerHTML:t._s(e)}})}))],2),r("div",{staticClass:"card"},[r("div",{staticClass:"card-title"},[t._v("Результат:")]),r("div",{domProps:{innerHTML:t._s(t.result)}})])])},d=[],h=(r("a434"),r("b85c")),m=(r("d3b7"),r("3ca3"),r("10d1"),r("ddb0"),r("d4ec")),b=r("bee2"),g=r("5364"),y=(r("caad"),r("c975"),r("ac1f"),r("25f0"),r("2532"),r("1276"),r("262e")),C=r("2caf"),_=r("9bd1"),O=new WeakMap,w=new WeakMap,j=function(){function t(e,r){Object(m["a"])(this,t),O.set(this,{writable:!0,value:void 0}),w.set(this,{writable:!0,value:void 0}),Object(_["a"])(this,O,e),Object(_["a"])(this,w,r)}return Object(b["a"])(t,[{key:"solve",value:function(t,e){}},{key:"getTopic",value:function(){return Object(g["a"])(this,O)}},{key:"getTheme",value:function(){return Object(g["a"])(this,w)}},{key:"getTestCase",value:function(t){}}]),t}(),k=j,S=[["S-aBaA","S-BYXAa","B-XCAAX","B-abBS","X-abX","X-","A-bSX","A-","C-XAX","C-abXA","Y-ВAXaB","Y-abXA"],["S-aBA","S-BSXA","B-XCAX","B-BYa","B-b","X-abX","X-","A-ASbX","A-AX","A-","C-XAAX","Y-BAXB","Y-abXA"]],x=function(t){Object(y["a"])(r,t);var e=Object(C["a"])(r);function r(){return Object(m["a"])(this,r),e.call(this,"sp","eps-non-terms")}return Object(b["a"])(r,[{key:"getTestCase",value:function(t){var e,r=[],n=Object(h["a"])(S[t]);try{for(n.s();!(e=n.n()).done;){var i=e.value,a=i.split("-");r.push({left:a[0],right:a[1]})}}catch(s){n.e(s)}finally{n.f()}return r}},{key:"solve",value:function(t,e,r){var n,i=[],a=Object(h["a"])(t);try{for(a.s();!(n=a.n()).done;){for(var s=n.value,u=s.substring(0,1),l=s.substring(2,s.length),o=1,c=0;c<l.length;c++){var f=l.charAt(c);if("a"<=f&&f<="z"){o=0;break}}1===o&&i.push({nt:u,word:l})}}catch(M){a.e(M)}finally{a.f()}for(var p=[],v=0,d=i;v<d.length;v++){var m=d[v];""===m.word&&this.insert(p,m.nt)}var b=0;for(e(this.stepResult(b,p));;){var g,y=[],C=Object(h["a"])(p);try{for(C.s();!(g=C.n()).done;){var _=g.value;this.insert(y,_)}}catch(M){C.e(M)}finally{C.f()}var O,w=Object(h["a"])(i);try{for(w.s();!(O=w.n()).done;){var j=O.value;if(-1===y.indexOf(j.nt)){var k,S=1,x=Object(h["a"])(j.word);try{for(x.s();!(k=x.n()).done;){var A=k.value;-1===p.indexOf(A)&&(S=0)}}catch(M){x.e(M)}finally{x.f()}1===S&&y.push(j.nt)}}}catch(M){w.e(M)}finally{w.f()}if(this.eqSet(y,p))return e(this.stepResult(b+1,p)),r(this.printSet(p)+" - множина ε - нетерміналів для вказаної граматики."),p;b++;for(var X=[],B=0,T=y;B<T.length;B++){var P=T[B];-1===p.indexOf(P)&&X.push(P)}e(this.stepResult(b,p,X)),p=y}}},{key:"stepResult",value:function(t,e,r){var n="S"+t+" = "+this.printSet(e);return void 0!==r&&0!==r.length&&(n+=" ∪ "+this.printSet(r.toString())),n}},{key:"printSet",value:function(t){return t.length>1&&t.sort(),"{ "+t.toString().replaceAll(",",", ")+" }"}},{key:"log",value:function(t){console.log("[DEBUG]: ",t)}},{key:"eqSet",value:function(t,e){if(t.size!==e.size)return!1;for(var r=0;r<t.length;r++)if(-1===e.indexOf(t[r]))return!1;return!0}},{key:"insert",value:function(t,e){t.includes(e)||t.push(e)}}]),r}(k),A=new x,X=A,B=new WeakMap,T=function(){function t(){Object(m["a"])(this,t),B.set(this,{writable:!0,value:{}}),Object(g["a"])(this,B)[this.buildSolverId(X.getTopic(),X.getTheme())]=X}return Object(b["a"])(t,[{key:"getSolverService",value:function(t,e){return Object(g["a"])(this,B)[this.buildSolverId(t,e)]}},{key:"buildSolverId",value:function(t,e){return"/"+t+"/"+e}}]),t}(),P=new T,M=P,R={data:function(){return{rules:[{left:"S",right:""},{left:"",right:""}],outputBuffer:[],result:""}},props:["topic","theme"],computed:{},components:{},methods:{init:function(){n=M.getSolverService(this.topic,this.theme)},validate:function(){if(this.rules.length<2)return!1;var t,e=Object(h["a"])(this.rules);try{for(e.s();!(t=e.n()).done;){var r=t.value;if(""===r.left)return!1}}catch(n){e.e(n)}finally{e.f()}return!0},run:function(){var t=this;if(void 0!==n){this.outputBuffer=[],this.result="";var e,r=[],i=Object(h["a"])(this.rules);try{for(i.s();!(e=i.n()).done;){var a=e.value;r.push(a.left+"-"+a.right)}}catch(s){i.e(s)}finally{i.f()}n.solve(r,(function(e){t.outputBuffer.push(e)}),(function(e){t.result=e}))}},addRule:function(){this.rules.push({left:"",right:""})},deleteRule:function(t){this.rules.splice(t-1,1)},putExample:function(t){this.rules=n.getTestCase(t),this.run()}},created:function(){this.init()},watch:{topic:function(){this.init()},theme:function(){this.init()}},mounted:function(){}},E=R,$=(r("b9d9"),Object(o["a"])(E,v,d,!1,null,"3f0df5ba",null)),Y=$.exports;i["a"].use(p["a"]);var W=[{path:"/:topic/:theme",component:Y,props:!0}],q=new p["a"]({mode:"history",routes:W});i["a"].config.productionTip=!1;var z=p["a"].prototype.push;p["a"].prototype.push=function(t){return z.call(this,t).catch((function(t){return t}))},new i["a"]({router:q,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,r){},b9d9:function(t,e,r){"use strict";r("3e80")}});
//# sourceMappingURL=app.3ab226f3.js.map