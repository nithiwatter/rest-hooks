/*! For license information please see 5d5b83e5.3f811d95.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[12472],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var k=b.prototype=new y;k.constructor=b,h(k,v.prototype),k.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,x={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,s={},l=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)E.call(t,a)&&!N.hasOwnProperty(a)&&(s[a]=t[a]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===s[a]&&(s[a]=i[a]);return{$$typeof:n,type:e,key:l,ref:o,props:s,_owner:x.current}}function Z(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var U=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,s,l){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return l=l(i=e),e=""===s?"."+T(i,0):s,w(l)?(a="",null!=e&&(a=e.replace(U,"$&/")+"/"),_(l,t,a,"",(function(e){return e}))):null!=l&&(Z(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(U,"$&/")+"/")+e)),t.push(l)),1;if(i=0,s=""===s?".":s+":",w(e))for(var u=0;u<e.length;u++){var c=s+T(o=e[u],u);i+=_(o,t,a,c,l)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(o=e.next()).done;)i+=_(o=o.value,t,a,c=s+T(o,u++),l);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function q(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},L={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),s=n(86010),l=n(72389),o=n(67392),i=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[E,x]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==E&&v.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==E&&(S(t),x(r),null!=f&&w(f,String(r)))},U=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:U,onFocus:Z,onClick:Z},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var r=n(67294),a=n(98416),s=n(88300),l=n(81593),o=n(63312),i=n(33186),u=n(52803),c=n(44431),p=n.n(c),d=n(49909),m=n(53775);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:v,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new d.Z(this),getOptimisticResponse:y})}}h.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),v=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),y=(e,t)=>({...t,updatedAt:e.fetchedAt});var b=n(83117),k=n(61313),w=n(86010),E=n(95999),x=n(52263),N=n(72389),S=n(66412),Z=n(55423),U=n(84195),T=n(58699),_=n(28808),C=n(16909),q=n(28224),I=n(7094),L=n(12466),P=n(91262);const R="playgroundContainer_sLUA",D="row_YGZs",G="hidden_Hh8i",F="playgroundHeader_Zx4K",$="playgroundEditor_lYwu",A="playgroundPreview_rk9R",O="playgroundError_sRnA",j="playgroundResult_tefG",Q="debugToggle_zlro",M="tabControls_trxh",V="tabs_m54V",z="tab_bTGw",B="selected_QXZk";var H=n(60522),W=n(90988),Y=n(92949);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,Y.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(W.L,{shouldExpandNode:X,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function X(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const J="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return J&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:Q,onClick:t},"Store"),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(H.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const ae=(0,r.memo)(re);function se(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:s,setTabGroupChoices:l}=(0,I.U)(),[o,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,L.o5)();if(null!=t){const e=s[t];null!=e&&e!==o&&i(e)}const c=(0,r.useCallback)((e=>{u(e.currentTarget),i((e=>"y"===e?"n":"y")),l(t,"y"===o?"n":"y")}),[u,t,o,l]),p=(0,r.useMemo)((()=>[new q.Z,new T.Z(_.Z)]),[]),d=!("n"===o||!a);return r.createElement(C.nq,{managers:p},r.createElement("div",{className:(0,w.Z)(A,{[G]:d})},r.createElement(P.Z,{fallback:r.createElement(oe,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(oe,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:O}))))),r.createElement(ne,{selectedValue:o,toggle:c}))}const le=(0,r.memo)(se);function oe(){return r.createElement("div",null,"Loading...")}function ie(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,w.Z)(F,n)},t)}function ue(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ie,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:j},r.createElement(le,{groupId:t,defaultOpen:n,row:a})))}function ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(U.Z);return r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,w.Z)(z,{[B]:e===a}),onFocus:t,onClick:t,value:a},s)})))}function pe(e){let{children:t}=e;return r.createElement(ie,{className:M},r.createElement("div",null,t),r.createElement(ce,null))}function de(e){let{title:t}=e;const{values:n}=(0,r.useContext)(U.Z),a=n.length>0,s=(0,N.Z)();return r.createElement("div",null,a?r.createElement(pe,null,t):r.createElement(ie,null,t),r.createElement(k.uz,{key:s,className:$}))}function me(e){let{children:t,transformCode:n,groupId:a,defaultOpen:s,row:l,hidden:o=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,x.Z)(),c=(0,S.p)();i.scope;return r.createElement("div",{className:(0,w.Z)(R,{[D]:l,[G]:o})},r.createElement(k.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>Z.transpileModule(e,{compilerOptions:{module:Z.ModuleKind.ESNext,target:Z.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},i),"top"===u?r.createElement(r.Fragment,null,r.createElement(ue,{groupId:a,defaultOpen:s,row:l}),r.createElement(de,null)):r.createElement(r.Fragment,null,r.createElement(de,null),r.createElement(ue,{groupId:a,defaultOpen:s,row:l}))))}de.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},me.defaultProps={row:!1};var fe=n(71481),he=n(42910);class ge extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ge.schema={updatedAt:Date};const ve=new s.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ge});const ye={...a,...l,...u,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:p(),lastUpdated:ve,TimedEntity:ge,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:s}=(0,fe.Z)();return r.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:O},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{s(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},be=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:s="n",row:l=!1}=e;return r.createElement(me,{scope:ye,noInline:!0,groupId:n,defaultOpen:s,row:l,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ke=(0,r.memo)(be)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),s=n(67294);function l(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(a.Z,{value:"ts"},t[0]),s.createElement(a.Z,{value:"js"},t[1]))}},96497:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),s=n(67294),l=n(93896);function o(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(l.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(l.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(15814);const s={React:r,...r,...a}},82668:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var r=n(83117),a=(n(27378),n(3905)),s=n(70523),l=n(65488),o=n(85162),i=n(96497),u=n(9790);const c={id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},p=void 0,d={unversionedId:"graphql/usage",id:"graphql/usage",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/../docs/graphql/usage.md",sourceDirName:"graphql",slug:"/graphql/usage",permalink:"/docs/graphql/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/usage.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Custom networking library",permalink:"/docs/guides/custom-networking"},next:{title:"Authentication",permalink:"/docs/graphql/auth"}},m={},f=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],h={toc:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Using GQLEntities is not required, but is important to achieve data consistency."))),(0,a.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,a.kt)(l.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useSuspense(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"SWAPI Demo")),(0,a.kt)(u.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useSuspense(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,a.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,a.kt)("p",null,"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,a.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,a.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}g.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);