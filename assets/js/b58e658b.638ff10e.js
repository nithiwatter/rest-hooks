/*! For license information please see b58e658b.638ff10e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[7688],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var k=g.prototype=new v;k.constructor=g,y(k,b.prototype),k.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)S.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:n,type:e,key:l,ref:s,props:o,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return l=l(i=e),e=""===o?"."+D(i,0):o,w(l)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),T(l,t,a,"",(function(e){return e}))):null!=l&&(_(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+D(s=e[c],c);i+=T(s,t,a,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)i+=T(s=s.value,t,a,u=o+D(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function x(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},U={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(83117),a=n(67294),o=n(86010),l=n(72389),s=n(67392),i=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[S,j]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==S&&b.some((t=>t.value===e))&&j(e)}const _=e=>{const t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==S&&(O(t),j(r),null!=f&&w(f,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},y)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>E.push(e),onKeyDown:N,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},31836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(83117),a=(n(27378),n(3905)),o=n(70523);const l={title:"Schema Quick Start",sidebar_label:"Schema"},s=void 0,i={unversionedId:"api/schema",id:"api/schema",title:"Schema Quick Start",description:"Consider a typical blog post. The API response for a single post might look something like this:",source:"@site/../docs/core/api/schema.md",sourceDirName:"api",slug:"/api/schema",permalink:"/docs/api/schema",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/schema.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Schema Quick Start",sidebar_label:"Schema"},sidebar:"docs",previous:{title:"Index",permalink:"/docs/api/Index"},next:{title:"Entity",permalink:"/docs/api/Entity"}},c={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Consider a typical blog post. The API response for a single post might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "author": {\n    "id": "1",\n    "name": "Paul"\n  },\n  "title": "My awesome blog post",\n  "comments": [\n    {\n      "id": "324",\n      "createdAt": "2013-05-29T00:00:00-04:00",\n      "commenter": {\n        "id": "2",\n        "name": "Nicole"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"We have two nested entity types within our ",(0,a.kt)("inlineCode",{parentName:"p"},"article"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"comments"),". Using various ",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),", we can normalize all three entity types down:"),(0,a.kt)(o.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  readonly id: string = '';\n  readonly name: string = '';\n\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  readonly id: string = '';\n  readonly createdAt: Date = new Date(0);\n  readonly commenter: User = User.fromJS({});\n\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly author: User = User.fromJS({});\n  readonly comments: Comment[] = [];\n\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n"))),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"normalizedData")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  result: "123",\n  entities: {\n    "articles": Article {\n      "123": {\n        id: "123",\n        author: "1",\n        title: "My awesome blog post",\n        comments: [ "324" ]\n      }\n    },\n    "users": {\n      "1": User { "id": "1", "name": "Paul" },\n      "2": User { "id": "2", "name": "Nicole" }\n    },\n    "comments": {\n      "324": Comment {\n        id: "324",\n        "createdAt": Date(`May 29, 2013`),\n        "commenter": "2"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);