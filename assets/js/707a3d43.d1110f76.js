"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[78968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),s=n(86010),o=n(72389),l=n(67392),i=n(7094),p=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,i.U)(),[R,w]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==R&&g.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==R&&(T(t),w(r),null!=h&&N(h,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},k)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:E,onClick:E},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":R===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},32248:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),s=n(67294);function o(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},s.createElement(a.Z,{value:"before"},t[0]),s.createElement(a.Z,{value:"after"},t[1]))}},14711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(83117),a=(n(67294),n(3905)),s=n(32248);const o={title:"Upgrading from 4 to 5"},l=void 0,i={unversionedId:"upgrade/upgrading-to-5",id:"version-6.0/upgrade/upgrading-to-5",title:"Upgrading from 4 to 5",description:"Deprecation Removals",source:"@site/versioned_docs/version-6.0/upgrade/upgrading-to-5.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-5",permalink:"/docs/6.0/upgrade/upgrading-to-5",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-5.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Upgrading from 4 to 5"},sidebar:"version-6.0/docs",previous:{title:"Upgrading from 5 to 6",permalink:"/docs/6.0/upgrade/upgrading-to-6"},next:{title:"Upgrading @rest-hooks/test to 3",permalink:"/docs/6.0/upgrade/upgrading-test-to-three"}},p={},c=[{value:"Deprecation Removals",id:"deprecation-removals",level:2},{value:"Other breaking changes",id:"other-breaking-changes",level:2},{value:"Network Definitions (Resource/FetchShape, etc)",id:"network-definitions-resourcefetchshape-etc",level:3},{value:"Imports",id:"imports",level:3},{value:"Managers",id:"managers",level:3},{value:"Cache Lifetime Policy",id:"cache-lifetime-policy",level:3},{value:"Upgrading from beta versions to final",id:"upgrading-from-beta-versions-to-final",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"@rest-hooks/legacy",id:"rest-hookslegacy",level:3},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:3},{value:"Summary of interface differences",id:"summary-of-interface-differences",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deprecation-removals"},"Deprecation Removals"),(0,a.kt)("p",null,"These previously deprecated members have been removed:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Resource.getKey() -> Resource.key"),(0,a.kt)("p",null,"Simply rename this to ",(0,a.kt)("inlineCode",{parentName:"p"},"get key()"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Resource.getEntitySchema() -> Resource"),(0,a.kt)("p",null,"This has been simplified to simply use the Resource itself:"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  static customEndpoint<T extends typeof MyResource>(this: T) {\n    return {\n      ...super.listShape(),\n      // notice the next line\n      schema: { results: [this.getEntitySchema()], nextPage: '' },\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  static customEndpoint<T extends typeof MyResource>(this: T) {\n    return {\n      ...super.listShape(),\n      // notice the next line\n      schema: { results: [this], nextPage: '' },\n    };\n  }\n}\n")))),(0,a.kt)("h2",{id:"other-breaking-changes"},"Other breaking changes"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"yarn add @rest-hooks/test@2 @rest-hooks/legacy@2"),(0,a.kt)("p",null,"Be sure to also upgrade these libraries if you use them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rest-hooks/test@2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rest-hooks/legacy@2"))),(0,a.kt)("p",null,"These libraries don't have any breaking changes within themselves, but\nthey do require ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks@5")," and (reflexively) ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks@5")," requires\nat least v2.")),(0,a.kt)("h3",{id:"network-definitions-resourcefetchshape-etc"},"Network Definitions (Resource/FetchShape, etc)"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"FetchShape: {type: 'delete'} -> { type: 'mutate', schema: new schemas.Delete(this) }"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Resource.deleteShape()")," will continue to work as expected. However, if\nyou defined some custom shapes with type: 'delete'"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  static someOtherDeleteShape<T extends typeof Resource>(\n    this: T,\n  ): DeleteShape<any, Readonly<object>> {\n    const options = this.getFetchOptions();\n    return {\n      // changed\n      type: 'delete',\n      // changed\n      schema: this.asSchema(),\n      options,\n      getFetchKey: (params: object) => {\n        return 'DELETE ' + this.url(params);\n      },\n      fetch: (params: Readonly<object>) => {\n        return this.fetch('delete', this.url(params));\n      },\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schemas } from 'rest-hooks';\nclass MyResource extends Resource {\n  static someOtherDeleteShape<T extends typeof Resource>(\n    this: T,\n  ): DeleteShape<any, Readonly<object>> {\n    const options = this.getFetchInit();\n    return {\n      // changed\n      type: 'mutate',\n      // changed\n      schema: new schemas.Delete(this),\n      options,\n      getFetchKey: (params: object) => {\n        return 'DELETE ' + this.url(params);\n      },\n      fetch: (params: Readonly<object>) => {\n        return this.fetch('delete', this.url(params));\n      },\n    };\n  }\n}\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Validation Errors: `This is likely due to a malformed response`"),(0,a.kt)("p",null,"To aid with common schema definition or networking errors, Rest Hooks\nwill sometimes throw an error. This only occurs during development, to\nhelp users correctly define their schemas and endpoints."),(0,a.kt)("p",null,"While the heuristics have been heavily tuned, if you don't believe\nthe errors reported are valid please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/new/choose"},"report a bug"),"."),(0,a.kt)("p",null,"When reporting, be sure to include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The exact network response from the ",(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/network"},"network inspector")),(0,a.kt)("li",{parentName:"ul"},"The full schema definition.")),(0,a.kt)("p",null,"Alternatively, this can be disabled by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"static automaticValidation = 'silent' | 'warn'")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  static automaticValidation = 'silent' as const;\n  // ...\n}\n")),(0,a.kt)("p",null,"Warn will no longer throw an error, but still add a message to the browser console.\nSilent removes the check completely.")),(0,a.kt)("h3",{id:"imports"},"Imports"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"import { reducer, NetworkManager } from '@rest-hooks/core'"),(0,a.kt)("p",null,"Many 'advanced' features of rest-hooks are not longer exported by 'rest-hooks' package itself, but require importing from ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/core"},"@rest-hooks/core")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reducer"),(0,a.kt)("li",{parentName:"ul"},"NetworkManager"),(0,a.kt)("li",{parentName:"ul"},"action creators:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"createFetch"),(0,a.kt)("li",{parentName:"ul"},"createReceive"),(0,a.kt)("li",{parentName:"ul"},"createReceiveError"))))),(0,a.kt)("h3",{id:"managers"},"Managers"),(0,a.kt)("p",null,"These only apply if you have a custom ",(0,a.kt)("a",{parentName:"p",href:"../api/Manager"},"Manager")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"action.meta.url -> action.meta.key"),(0,a.kt)("p",null,"It's recommend to now use the action creators\nexported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/core")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/createFetch"},"createFetch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/createReceive"},"createReceive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/createReceiveError"},"createReceiveError")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"getState()"),(0,a.kt)("p",null,"This is very unlikely to make a difference, but the internal cache state\n(accessible with getState()) might be slightly different. Mutations now\nresult in entries in ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"results"),". This brings them more in line with\nreads, making the distinction simply about which hooks they are allowed\nin. (To prevent unwanted side effects.)")),(0,a.kt)("h3",{id:"cache-lifetime-policy"},"Cache Lifetime Policy"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"useInvalidator() triggers suspense"),(0,a.kt)("p",null,"You can likely remove ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#invalidifstale-boolean"},"invalidIfStale")," if used in conjunction with ",(0,a.kt)("a",{parentName:"p",href:"../api/useInvalidator"},"useInvalidator()")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#invalidifstale-boolean"},"invalidIfStale")," is still useful to disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"stale-while-revalidate")," policy.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"`delete` suspends instead of throwing 404"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Delete"},"Delete")," marks an entity as deleted. ",(0,a.kt)("em",{parentName:"p"},"Any")," response requiring\nthat entity will suspend. Previously it throw a 404 error.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Missing entities suspend"),(0,a.kt)("p",null,"Required entities missing from network response will now throw error in useResource() just like other unexpected deserializations."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"../api/SimpleRecord"},"SimpleRecord")," for ",(0,a.kt)("a",{parentName:"p",href:"../api/SimpleRecord#optional-members"},"optional entities"),"."),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const schema = {\n  data: MyEntity,\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class OptionalSchema extends SimpleRecord {\n  readonly data: MyEntity | null = null;\n\n  static schema = {\n    data: MyEntity,\n  };\n}\nconst schema = OptionalSchema;\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"invalidIfStale"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#invalidifstale-boolean"},"invalidIfStale")," is true, useCache() and useStatefulResource() will no longer return entities, even if they are in the cache.\nThis matches the expected behavior that any ",(0,a.kt)("inlineCode",{parentName:"p"},"loading")," data should not be usable.")),(0,a.kt)("h2",{id:"upgrading-from-beta-versions-to-final"},"Upgrading from beta versions to final"),(0,a.kt)("p",null,"The last breaking changes introduced to ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hook")," were in ",(0,a.kt)("inlineCode",{parentName:"p"},"delta.0")," where TTL\nand deletes were reworked. If you are on a more recent beta (",(0,a.kt)("inlineCode",{parentName:"p"},"i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"j"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rc"),"),\nupgrades should be as simple as updating the version."),(0,a.kt)("p",null,"If this is not the case, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/new/choose"},"report a bug"),"."),(0,a.kt)("h2",{id:"deprecations"},"Deprecations"),(0,a.kt)("p",null,"After a successful upgrade, it is recommended to adopt the modern practices."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Resource.fetchOptionsPlugin() -> Resource.getFetchInit()"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class AuthdResource extends Resource {\n  static fetchOptionsPlugin = (options: RequestInit) => ({\n    ...options,\n    credentials: 'same-origin',\n  });\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class AuthdResource extends Resource {\n  static getFetchInit = (init: RequestInit) => ({\n    ...init,\n    credentials: 'same-origin',\n  });\n}\n"))),(0,a.kt)("p",null,"(Resource.getFetchInit())../api/resource#static-getfetchinitinit-requestinit-requestinit)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Resource.getFetchOptions() -> Resource.getEndpointExtra()"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class PollingResource extends Resource {\n  static getFetchOptions(): FetchOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class PollingResource extends Resource {\n  static getEndpointExtra(): FetchOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n"))),(0,a.kt)("p",null,"(Resource.getEndpointExtra())../api/resource#static-getendpointextra--endpointextraoptions--undefined)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Resource.asSchema() -> Resource"),(0,a.kt)("p",null,"This has been simplified to simply use the Resource itself:"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  static customEndpoint<T extends typeof MyResource>(this: T) {\n    return {\n      ...super.listShape(),\n      // notice the next line\n      schema: { results: [this.asSchema()], nextPage: '' },\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyResource extends Resource {\n  static customEndpoint<T extends typeof MyResource>(this: T) {\n    return {\n      ...super.listShape(),\n      // notice the next line\n      schema: { results: [this], nextPage: '' },\n    };\n  }\n}\n")))),(0,a.kt)("h3",{id:"rest-hookslegacy"},"@rest-hooks/legacy"),(0,a.kt)("p",null,"For v5 of Rest Hooks, the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleResource")," classes will\nbe exported."),(0,a.kt)("p",null,"In v6, this will no longer be the case. However, they will continue to live in ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy"),", allowing\neasy safe upgrade to v6 by simply changing the import path. However, it is still recommended to\ntry to migrate to ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")," as this is the future. v1 of @rest-hooks/rest will be the easiest to\nstart with."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"yarn add @rest-hooks/legacy"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nclass MyResource extends Resource {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/legacy';\n\nclass MyResource extends Resource {}\n")))),(0,a.kt)("h3",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,a.kt)("p",null,"Rest Hooks is protocol agnostic, so the REST/CRUD specific class ",(0,a.kt)("a",{parentName:"p",href:"../api/resource"},"Resource"),"\nwill eventually be fully deprecated and removed. ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")," is intended as its\nreplacement. Other supplementary libraries like ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/graphql")," could be\nadded in the future, for intance. This is also beneficial as these libraries\nchange more frequently than the core of rest hooks."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"yarn add @rest-hooks/rest"),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nclass MyResource extends Resource {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {}\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Breaking change:"),(0,a.kt)("p",{parentName:"blockquote"},"Nested entities ",(0,a.kt)("inlineCode",{parentName:"p"},"static schema")," will return from ",(0,a.kt)("inlineCode",{parentName:"p"},"useResource()")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"static schema"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../guides/nested-response"},"Nesting")," entities inside a schema will now denormalize those nested items."),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nclass ArticleResource extends Resource {\n  // other stuff omitted\n  readonly user: string = '';\n\n  static schema = {\n    user: UserResource,\n  };\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const article = useResource(ArticleResource.detail(), { id });\nconst user = useCache(UserResource.detail(), { id: article.user });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nclass ArticleResource extends Resource {\n  // other stuff omitted\n  readonly user: UserResource = UserResource.fromJS({});\n\n  static schema = {\n    user: UserResource,\n  };\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const article = useResource(ArticleResource.detail(), { id });\nconst user = article.user;\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"FetchShape -> Endpoint"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoints")," use the builder pattern to make customization easy. Use ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#extendendpointoptions-endpoint"},"extend()")," to customize."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"@rest-hooks/endpoint")," is also its own package. This empowers you to publish interfaces for public APIs by marking ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"@rest-hooks/endpoint")," as a peerDependency in the package."),(0,a.kt)(s.Z,{mdxType:"BeforeAfterTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static currentShape<T extends typeof Resource>(this: T) {\n    return {\n      ...this.detailShape(),\n      getFetchKey: () => {\n        return '/current_user/';\n      },\n      fetch: (params: {}, body?: Readonly<object | string>) => {\n        return this.fetch('post', `/current_user/`, body);\n      },\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static current<T extends typeof Resource>(this: T) {\n    const endpoint = this.detail();\n    return endpoint.extend({\n      fetch() { return endpoint(this); }\n      url() { return '/current_user/' },\n    })\n  }\n}\n"))),(0,a.kt)("p",null,"Currently all ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoints")," also implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"FetchShape")," interface, so feel free to incrementally migrate. This means using Endpoint and extended via object spreads will still work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class UserResource extends Resource {\n  static currentShape<T extends typeof Resource>(this: T) {\n    return {\n      // this is an Endpoint, but can be spread the same way\n      ...this.detail(),\n      getFetchKey: () => {\n        return '/current_user/';\n      },\n      fetch: (params: {}, body?: Readonly<object | string>) => {\n        return this.fetch('post', `/current_user/`, body);\n      },\n    };\n  }\n}\n")),(0,a.kt)("p",null,"Eventually support for FetchShape will be deprecated, and then removed."),(0,a.kt)("h4",{id:"summary-of-interface-differences"},"Summary of interface differences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"schema is optional"),(0,a.kt)("li",{parentName:"ul"},"type removed in favor of sideEffect",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"type = 'read' -> sideEffect = undefined"),(0,a.kt)("li",{parentName:"ul"},"type = 'mutate' -> sideEffect = true"))),(0,a.kt)("li",{parentName:"ul"},"options members elevated to top"),(0,a.kt)("li",{parentName:"ul"},"top level object should be the actual fetch"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%405.0.0"},"Full Release notes")))}d.isMDXComponent=!0}}]);