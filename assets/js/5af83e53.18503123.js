"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[38919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(83117),n=(a(67294),a(3905));const o={title:"useCacheLegacy()",id:"useCacheLegacy",original_id:"useCacheLegacy"},l=void 0,c={unversionedId:"api/useCacheLegacy",id:"version-3.0/api/useCacheLegacy",title:"useCacheLegacy()",description:"### Rest Hooks 3.1 - Removal",source:"@site/versioned_docs/version-3.0/api/useCacheLegacy.md",sourceDirName:"api",slug:"/api/useCacheLegacy",permalink:"/docs/3.0/api/useCacheLegacy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useCacheLegacy.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"useCacheLegacy()",id:"useCacheLegacy",original_id:"useCacheLegacy"},sidebar:"version-3.0/docs",previous:{title:"useCache()",permalink:"/docs/3.0/api/useCache"},next:{title:"useSubscription()",permalink:"/docs/3.0/api/useSubscription"}},s={},i=[{value:"Example",id:"example",level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",level:2}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCacheLegacy(\n  fetchShape: ReadShape,\n  params: object | null\n): SchemaOf<typeof fetchShape.schema> | null;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCacheLegacy<Params extends Readonly<object>, S extends Schema>(\n  { schema, getFetchKey }: ReadShape<S, Params>,\n  params: Params | null\n): SchemaOf<S> | null;\n")),(0,n.kt)("blockquote",null,(0,n.kt)("h3",{parentName:"blockquote",id:"rest-hooks-31---removal"},"Rest Hooks 3.1 - Removal"),(0,n.kt)("p",{parentName:"blockquote"},"This hook is deprecated in favor of ",(0,n.kt)("a",{parentName:"p",href:"./useCache"},"useCache()")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"3.1 will remove ",(0,n.kt)("inlineCode",{parentName:"li"},"useCacheLegacy()")))),(0,n.kt)("p",null,"Excellent to use data in the normalized cache without fetching."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,n.kt)("li",{parentName:"ul"},"null otherwise"))),(0,n.kt)("li",{parentName:"ul"},"While loading:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,n.kt)("li",{parentName:"ul"},"null otherwise")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Using a type guard to deal with null"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useCacheLegacy(PostResource.detailShape(), { id });\n  // post as PostResource | null\n  if (!post) return null;\n  // post as PostResource (typeguarded)\n  // ...render stuff here\n}\n")),(0,n.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,n.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"detailShape()"),(0,n.kt)("li",{parentName:"ul"},"listShape()")),(0,n.kt)("p",null,"Feel free to add your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.0/api/FetchShape"},"FetchShape")," as well."))}u.isMDXComponent=!0}}]);