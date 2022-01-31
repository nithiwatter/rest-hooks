/*! For license information please see 27ace9ba.ff9b1eb9.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[37526],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,l=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))n.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var p=0;p<i.length;p++)r.call(s,i[p])&&(l[i[p]]=s[i[p]])}}return l}},41535:(e,t,n)=>{"use strict";var r=n(62525),a=60103,o=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=g.prototype=new y;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return s=s(l=e),e=""===r?"."+x(l,0):r,k(s)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(s,t,n,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var u=r+x(i=e[c],c);l+=C(i,t,n,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(i=e.next()).done;)l+=C(i=i.value,t,n,u=r+x(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},R={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var r=n(67294),a=n(24861),o=n(88300),s=n(71481),i=n(42910),l=n(99876),c=n(63312),u=n(33186),p=n(52803),d=n(44431),m=n.n(d),f=n(53775);class h extends f.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class y extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:b,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({optimisticUpdate:k})}}y.urlRoot="https://jsonplaceholder.typicode.com/todos";const g=(e,t)=>({id:e.id,...t}),b=(e,t)=>t,k=e=>e;var v=n(87462),w=n(50776),E=n(86010),j=n(95999),N=n(52263),O=n(72389),x=n(83229),C=n(55423),P=n(84195),S=n(58699),T=n(28808),R=n(96714),I=n(28224),_=n(80944),A=n(53810),U=n(91262);const Z="playgroundContainer_1vxj",q="row_3g4V",D="hidden_2rz-",M="playgroundHeader_2X75",F="playgroundEditor_1tQZ",z="playgroundPreview_3d_E",$="playgroundResult_5IAE",H="debugToggle_2KFu",L="tabControls_vH2K",B="tabs_1lMe",K="tab_3qyO",V="selected_3AAM";var W=n(60522),G=n(83552),X=n(85350);function J(e){let{value:t}=e;const{isDarkTheme:n}=(0,X.Z)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(G.L,{shouldExpandNode:Y,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,"font-family":"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function Q(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:H,onClick:t},"Store"),"y"===n?r.createElement(ne,null):null)}const ee=(0,r.memo)(Q);function te(){const e=(0,r.useContext)(W.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(J,{value:t})}const ne=(0,r.memo)(te);function re(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,_.Z)(),[i,l]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,A.o5)();if(null!=t){const e=o[t];null!=e&&e!==i&&l(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),l((e=>"y"===e?"n":"y")),s(t,"y"===i?"n":"y")}),[c,t,i,s]),p=(0,r.useMemo)((()=>[new I.Z,new S.Z(T.Z)]),[]),d=!("n"===i||!a);return r.createElement(R.nq,{managers:p},r.createElement("div",{className:(0,E.Z)(z,{[D]:d})},r.createElement(U.Z,{fallback:r.createElement(oe,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(oe,null)},r.createElement(w.i5,null),r.createElement(w.IF,null))))),r.createElement(ee,{selectedValue:i,toggle:u}))}const ae=(0,r.memo)(re);function oe(){return r.createElement("div",null,"Loading...")}function se(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(M,n)},t)}function ie(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(se,null,r.createElement(j.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:$},r.createElement(ae,{groupId:t,defaultOpen:n,row:a})))}function le(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(P.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(K,{[V]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function ce(e){let{children:t}=e;return r.createElement(se,{className:L},r.createElement("div",null,t),r.createElement(le,null))}function ue(e){let{title:t}=e;const{values:n}=(0,r.useContext)(P.Z),a=n.length>0,o=(0,O.Z)();return r.createElement("div",null,a?r.createElement(ce,null,t):r.createElement(se,null,t),r.createElement(w.uz,{key:o,className:F}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:s,hidden:i=!1,...l}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,N.Z)(),u=(0,x.Z)();l.scope;return r.createElement("div",{className:(0,E.Z)(Z,{[q]:s,[D]:i})},r.createElement(w.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>C.transpileModule(e,{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},l),"top"===c?r.createElement(r.Fragment,null,r.createElement(ie,{groupId:a,defaultOpen:o,row:s}),r.createElement(ue,null)):r.createElement(r.Fragment,null,r.createElement(ue,null),r.createElement(ie,{groupId:a,defaultOpen:o,row:s}))))}ue.defaultProps={title:r.createElement(j.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};class de extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}de.schema={updatedAt:Date};const me=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:de});const fe={...a,...l,...p,...u,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:m(),lastUpdated:me,TimedEntity:de,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=s.Z();return r.createElement(i.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends y{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},he=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o="n",row:s=!1}=e;return r.createElement(pe,{scope:fe,noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ye=(0,r.memo)(he)},59495:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=n(70720);const s={title:"Transforming data on fetch"},i=void 0,l={unversionedId:"guides/network-transform",id:"guides/network-transform",title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/../docs/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/docs/next/guides/network-transform",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/network-transform.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Transforming data on fetch"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/next/guides/auth"},next:{title:"Mocking unfinished endpoints",permalink:"/docs/next/guides/mocking-unfinished"}},c=[{value:"Snakes to camels",id:"snakes-to-camels",children:[],level:2},{value:"Deserializing fields",id:"deserializing-fields",children:[],level:2},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",children:[],level:2},{value:"Using HTTP Headers",id:"using-http-headers",children:[],level:2},{value:"Name calling",id:"name-calling",children:[],level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All network requests flow through the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you retain control over the API design, generally it's preferred to\nupdate the data sent over the network. Keeping the client as ",(0,a.kt)("inlineCode",{parentName:"p"},"thin")," as possible\nis helpful to both performance and complexity."),(0,a.kt)("p",{parentName:"blockquote"},"That said, in many cases you want to consume APIs you don't have control over -\nbe they public APIs, or due to internal organizational structure.")),(0,a.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,a.kt)("p",null,"Commonly APIs are designed with keys using ",(0,a.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CamelResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { camelCase, snakeCase } from 'lodash';\nimport { Resource } from '@rest-hooks/rest';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: Record<string, any> = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\n// We can now extend CamelResource instead of Resource to build\n// all of our classes.\nabstract class CamelResource extends Resource {\n  static async fetch(input: RequestInfo, init: RequestInit) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (init.body) {\n      init.body = deeplyApplyKeyTransform(init.body, snakeCase);\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(input, init);\n    // do the conversion!\n    return deeplyApplyKeyTransform(jsonResponse, camelCase);\n  }\n}\n")),(0,a.kt)("h2",{id:"deserializing-fields"},"Deserializing fields"),(0,a.kt)("p",null,"In many cases, data sent through JSON is serialized into strings since JSON\nonly has a few primitive types. Common examples include ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),"\nfor dates or even strings for decimals that require high precision (",(0,a.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"floats can be lossy"),").\nKeeping data in the serialized form is often fine, especially if it is only being used to\nbe displayed. However, this can be problematic when derived data is computed like adding time to a date\nor multiplying two numbers."),(0,a.kt)("p",null,"In this case, simply use the ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"static schema")," with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"BigNumber")),(0,a.kt)(o.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const exchangeMock = ({ exchangePair }) =>\n  Promise.resolve({\n    exchangePair,\n    price: '32982389239823983298329832.238923982389328932893298',\n    updatedAt: new Date().toISOString(),\n  });\n\nclass ExchangePrice extends Entity {\n  readonly exchangePair = '';\n  readonly updatedAt = new Date(0);\n  readonly price = new BigNumber(0);\n  static schema = {\n    updatedAt: Date,\n    price: BigNumber,\n  };\n  pk() {\n    return this.exchangePair;\n  }\n}\nconst getPrice = new Endpoint(exchangeMock, {\n  schema: ExchangePrice,\n});\nfunction PricePage() {\n  const currentPrice = useSuspense(getPrice, { exchangePair: 'btc-usd' });\n  return (\n    <div>\n      {currentPrice.price.toPrecision(2)} as of{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          currentPrice.updatedAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PricePage />);\n"))),(0,a.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Id")),(0,a.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,a.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,a.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET https://mystreamsite.tv/ntucker/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StreamResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nabstract class StreamResource extends CamelResource {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n\n  static detail<T extends typeof Resource>(this: T) {\n    const superEndpoint = super.detail() as ReadEndpoint<FetchFunction, T>;\n    return superEndpoint.extend({\n      fetch: async (params: { username: string }) => {\n        const response = await superEndpoint.fetch.call(this, params);\n        response.username = params.username;\n        return response;\n      },\n      // calling super with generics is broken in TypeScript, so re-defining schema ensures correct typing\n      schema: this,\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"using-http-headers"},"Using HTTP Headers"),(0,a.kt)("p",null,"HTTP ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers"},"Headers")," are accessible in the fetch\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),". ",(0,a.kt)("a",{parentName:"p",href:"../api/resource#static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse"},"Resource.fetchResponse()"),"\ncan be used to construct ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,a.kt)("p",null,"Sometimes this is used for cursor based ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/guides/pagination#tokens-in-http-headers"},"pagination"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Endpoint to get a list of entities */\n  static list<T extends typeof Resource>(this: T) {\n    const instanceFetchResponse = this.fetchResponse.bind(this);\n\n    return super.list().extend({\n      fetch: async function (params: Readonly<Record<string, string | number>>) {\n        const response = await instanceFetchResponse(this.url(params), this.init);\n        return {\n          link: response.headers.get('link'),\n          results: await response.json().catch((error: any) => {\n            error.status = 400;\n            throw error;\n        };\n      },\n      schema: { results: [this], link: '' },\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"name-calling"},"Name calling"),(0,a.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ArticleResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// We're using camelCase now as well ;)\nclass ArticleResource extends CamelResource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly carrotsUsed: number = 0;\n\n  static async fetch(input: RequestInfo, init: RequestInit) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (init.body && 'carrotsUsed' in init.body) {\n      // caller should manage init & body, so we don't want to modify it\n      init = { ...init, body: { ...init.body } };\n      init.body.carrotsUsedIsThisNameTooLong = init.body.carrotsUsed;\n      delete init.body.carrotsUsed;\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(input, init);\n    // only replace the name if it exists. This also helps us ignore list responses.\n    if ('carrotsUsedIsThisNameTooLong' in jsonResponse) {\n      // ok to mutate jsonResponse since we control it\n      jsonResponse.carrotsUsed = jsonResponse.carrotsUsedIsThisNameTooLong;\n      delete jsonResponse.carrotsUsedIsThisNameTooLong;\n    }\n    return jsonResponse;\n  }\n}\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);