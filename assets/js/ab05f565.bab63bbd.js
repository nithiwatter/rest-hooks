/*! For license information please see ab05f565.bab63bbd.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47669],{41535:(e,t)=>{var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function k(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}function y(){}function b(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var v=b.prototype=new y;v.constructor=b,h(v,k.prototype),v.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,S={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,s={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,r)&&!I.hasOwnProperty(r)&&(s[r]=t[r]);var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];s.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===s[r]&&(s[r]=u[r]);return{$$typeof:a,type:e,key:o,ref:l,props:s,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function Z(e,t,r,s,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case n:u=!0}}if(u)return o=o(u=e),e=""===s?"."+T(u,0):s,w(o)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),Z(o,t,r,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(u=0,s=""===s?".":s+":",w(e))for(var i=0;i<e.length;i++){var c=s+T(l=e[i],i);u+=Z(l,t,r,c,o)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),i=0;!(l=e.next()).done;)u+=Z(l=l.value,t,r,c=s+T(l,i++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function j(e,t,a){if(null==e)return e;var n=[],r=0;return Z(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},P={transition:null}},27378:(e,t,a)=>{a(41535)},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),s=a(86010),o=a(72389),l=a(67392),u=a(7094),i=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,u.U)(),[N,S]=(0,r.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:_}=(0,i.o5)();if(null!=f){const e=v[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,a=I.indexOf(t),n=k[a].value;n!==N&&(_(t),S(n),null!=f&&w(f,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;a=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;a=I[t]??I[I.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:E,onFocus:x,onClick:x},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(65488),r=a(85162),s=a(67294),o=a(93896);function l(e){let{pkgs:t,dev:a=!1}=e;return s.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(r.Z,{value:"yarn"},s.createElement(o.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),s.createElement(r.Z,{value:"npm"},s.createElement(o.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(15814);const s={React:n,...n,...r}},78525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var n=a(83117),r=(a(27378),a(3905)),s=a(96497),o=a(65488),l=a(85162);const u={title:"Images and other Media"},i=void 0,c={unversionedId:"guides/img-media",id:"guides/img-media",title:"Images and other Media",description:"Using React Suspense with Images and other Media | Rest Hooks",source:"@site/../docs/guides/img-media.md",sourceDirName:"guides",slug:"/guides/img-media",permalink:"/docs/guides/img-media",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/img-media.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Images and other Media"},sidebar:"docs",previous:{title:"Dealing with network errors",permalink:"/docs/concepts/network-errors"},next:{title:"Infinite Scrolling",permalink:"/docs/guides/infinite-scrolling-pagination"}},p={},d=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],m={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Using React Suspense with Images and other Media | Rest Hooks")),(0,r.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,r.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,r.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,r.kt)(o.Z,{defaultValue:"useSuspense",values:[{label:"useSuspense",value:"useSuspense"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"useSuspense",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useSuspense(getPhoto, { userId });\n"))),(0,r.kt)(l.Z,{value:"useCache",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,r.kt)(l.Z,{value:"JS/Node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,r.kt)("h2",{id:"just-images"},"Just Images"),(0,r.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,r.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(s.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Profile.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useSuspense(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,r.kt)("h4",{id:"prefetching"},"Prefetching"),(0,r.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Profile.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense, useFetch } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useFetch(getImage, { src: imageSrc });\n  const user = useSuspense(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,r.kt)("p",null,"When using the ",(0,r.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}f.isMDXComponent=!0}}]);