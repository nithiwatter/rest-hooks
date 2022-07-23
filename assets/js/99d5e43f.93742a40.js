/*! For license information please see 99d5e43f.93742a40.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[4090],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=k.prototype=new b;v.constructor=k,h(v,y.prototype),v.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var a,o={},s=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:S.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var D=/\/+/g;function Z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===o?"."+Z(i,0):o,w(s)?(a="",null!=e&&(a=e.replace(D,"$&/")+"/"),_(s,t,a,"",(function(e){return e}))):null!=s&&(T(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(D,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+Z(l=e[u],u);i+=_(l,t,a,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)i+=_(l=l.value,t,a,c=o+Z(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},A={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),o=n(86010),s=n(72389),l=n(67392),i=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[E,S]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=v[f];null!=e&&e!==E&&y.some((t=>t.value===e))&&S(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==E&&(N(t),S(r),null!=f&&w(f,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:D,onFocus:T,onClick:T},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ve});var r=n(67294),a=n(43329),o=n(67601),s=n(37814),l=n(65612),i=n(9546),u=n(51111),c=n(44431),d=n.n(c),p=n(32257),m=n(66856);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:y,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:b})}}h.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),y=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),b=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(83117),v=n(61313),w=n(86010),E=n(95999),S=n(52263),x=n(72389),N=n(66412),T=n(55423),D=n(84195),Z=n(33625),_=n(85109),C=n(83477),I=n(33799),R=n(7094),A=n(12466),P=n(91262);const F="playgroundContainer_sLUA",L="row_YGZs",O="hidden_Hh8i",U="playgroundHeader_Zx4K",j="playgroundEditor_lYwu",B="playgroundPreview_rk9R",$="playgroundError_sRnA",M="playgroundResult_tefG",q="debugToggle_zlro",V="tabControls_trxh",z="tabs_m54V",G="tab_bTGw",X="selected_QXZk";var Y=n(78914),H=n(90988),J=n(92949);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,J.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(H.L,{shouldExpandNode:W,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:q,onClick:t},"Store"),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(Y.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const ae=(0,r.memo)(re);function oe(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,R.U)(),[l,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,A.o5)();if(null!=t){const e=o[t];null!=e&&e!==l&&i(e)}const c=(0,r.useCallback)((e=>{u(e.currentTarget),i((e=>"y"===e?"n":"y")),s(t,"y"===l?"n":"y")}),[u,t,l,s]),d=(0,r.useMemo)((()=>[new I.Z,new Z.Z(_.Z)]),[]),p=!("n"===l||!a);return r.createElement(C.nq,{managers:d},r.createElement("div",{className:(0,w.Z)(B,{[O]:p})},r.createElement(P.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(le,null)},r.createElement(v.i5,null),r.createElement(v.IF,{className:$}))))),r.createElement(ne,{selectedValue:l,toggle:c}))}const se=(0,r.memo)(oe);function le(){return r.createElement("div",null,"Loading...")}function ie(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,w.Z)(U,n)},t)}function ue(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ie,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:M},r.createElement(se,{groupId:t,defaultOpen:n,row:a})))}function ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(D.Z);return r.createElement("div",{className:z,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,w.Z)(G,{[X]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function de(e){let{children:t}=e;return r.createElement(ie,{className:V},r.createElement("div",null,t),r.createElement(ce,null))}function pe(e){let{title:t}=e;const{values:n}=(0,r.useContext)(D.Z),a=n.length>0,o=(0,x.Z)();return r.createElement("div",null,a?r.createElement(de,null,t):r.createElement(ie,null,t),r.createElement(v.uz,{key:o,className:j}))}function me(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:s,hidden:l=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,S.Z)(),c=(0,N.p)();i.scope;return r.createElement("div",{className:(0,w.Z)(F,{[L]:s,[O]:l})},r.createElement(v.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},i),"top"===u?r.createElement(r.Fragment,null,r.createElement(ue,{groupId:a,defaultOpen:o,row:s}),r.createElement(pe,null)):r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(ue,{groupId:a,defaultOpen:o,row:s}))))}pe.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},me.defaultProps={row:!1};var fe=n(32430),he=n(23212);class ge extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ge.schema={updatedAt:Date};const ye=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ge});const be={...a,...s,...u,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d(),lastUpdated:ye,TimedEntity:ge,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=(0,fe.Z)();return r.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:$},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ke=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o="n",row:s=!1}=e;return r.createElement(me,{scope:be,noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ve=(0,r.memo)(ke)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(55468);const o={React:r,...r,...a}},4991:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>f});var r=n(83117),a=(n(27378),n(3905)),o=n(65488),s=n(85162),l=n(70523),i=n(9790),u=n(85761);const c={title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},d=void 0,p={unversionedId:"getting-started/data-dependency",id:"getting-started/data-dependency",title:"Co-locate Data Dependencies",description:"Co-locating data dependencies means we only use data-binding hooks like useSuspense()",source:"@site/../docs/core/getting-started/data-dependency.md",sourceDirName:"getting-started",slug:"/getting-started/data-dependency",permalink:"/docs/getting-started/data-dependency",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/data-dependency.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/docs/getting-started/endpoint"},next:{title:"Entity",permalink:"/docs/getting-started/entity"}},m={},f=[{value:"Async Fallbacks (loading/error)",id:"async-fallbacks",level:2},{value:"Boundaries (Suspense/NetworkErrorBoundary)",id:"boundaries",level:3},{value:"Stateful",id:"stateful",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Live Crypto Price Example",id:"live-crypto-price-example",level:3}],h={toc:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Co-locating data dependencies means we only use data-binding hooks like ",(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nin components where we display/use their data directly."),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  // highlight-next-line\n  const todo = useSuspense(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,a.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  // highlight-next-line\n  const todos = useSuspense(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"#boundaries"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)(u.ZP,{mdxType:"ConditionalDependencies"}),(0,a.kt)("h2",{id:"async-fallbacks"},"Async Fallbacks (loading/error)"),(0,a.kt)("p",null,"This works great if the client already has the data. But while it's waiting on a response from the server,\nwe need some kind of loading indication. Similarly if there is an error in the fetch, we should indicate such.\nThese are called 'fallbacks'."),(0,a.kt)("h3",{id:"boundaries"},"Boundaries (Suspense/NetworkErrorBoundary)"),(0,a.kt)("p",null,"In React 18, the best way to achieve this is with boundaries. (",(0,a.kt)("a",{parentName:"p",href:"#stateful"},"React 16.3+ supported"),", but less powerful.)\n",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />"),"\nare wrapper components which show fallback ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/rendering-elements.html"},"elements"),"\nwhen any component rendered as a descendent is loading or errored while loading their data dependency."),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,23-25}","{6,12,23-25}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\ninterface Props {\n  fallback: React.ReactElement;\n  children: React.ReactNode;\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,12,18-20}","{6,12,18-20}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This greatly simplifies complex orchestrations of data dependencies by decoupling where to show fallbacks\nfrom the components using the data.")),(0,a.kt)("p",null,"For instance, here we have three different components requesting different todo data. These will all loading in\nparallel and only show one loading indicator instead of filling the screen with them. Although this case\nis obviously contrived; in practice this comes up quite often, especially when data dependencies end up deeply nesting."),(0,a.kt)("h3",{id:"stateful"},"Stateful"),(0,a.kt)("p",null,"You may find cases where it's still useful to use a stateful approach to fallbacks when using React 16 and 17.\nFor these cases, or compatibility with some component libraries, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useDLE"},"useDLE()")," is provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDLE } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const {\n    loading,\n    error,\n    data: todo,\n  } = useDLE(todoDetail, { id });\n  if (loading) return 'loading';\n  if (error) return error.status;\n  return <div>{todo.title}</div>;\n}\n")),(0,a.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"When data is likely to change due to external factor; ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()"),"\nensures continual updates while a component is mounted."),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  // highlight-next-line\n  useSubscription(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,a.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  const todos = useSuspense(todoList, {});\n  // highlight-next-line\n  useSubscription(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,"Subscriptions are orchestrated by ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Managers"),". Out of the box,\npolling based subscriptions can be used by adding ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Endpoint#pollfrequency-number"},"pollFrequency")," to an endpoint.\nFor pushed based networking protocols like websockets, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Manager#middleware-data-stream"},"example websocket stream manager"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\nconst todoDetail = new Endpoint(\n  fetchTodoDetail,\n  // highlight-next-line\n  { pollFrequency: 1000 },\n);\n")),(0,a.kt)("h3",{id:"live-crypto-price-example"},"Live Crypto Price Example"),(0,a.kt)(i.Z,{defaultOpen:"n",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class ExchangeRatesResource extends Resource {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n\n  static urlRoot = 'https://www.coinbase.com/api/v2/exchange-rates';\n\n  static getEndpointExtra() {\n    return { pollFrequency: 5000 };\n  }\n\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<[{ currency: string }]>, { data: T }, undefined> {\n    return super.list().extend({\n      schema: { data: this },\n    });\n  }\n}\n\nfunction AssetPrice({ symbol }: { symbol: string }) {\n  const { data: price } = useSuspense(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  useSubscription(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\n\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}g.isMDXComponent=!0},85761:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l});var r=n(83117),a=(n(27378),n(3905)),o=n(69671);const s={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}l.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);