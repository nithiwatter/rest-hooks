/*! For license information please see 1a20b94c.33857d39.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[71913],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=k.prototype=new b;g.constructor=k,f(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,S={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,a){var r,o={},s=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=a;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case a:i=!0}}if(i)return s=s(i=e),e=""===o?"."+F(i,0):o,w(s)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),R(s,t,r,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+F(l=e[u],u);i+=R(l,t,r,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(l=e.next()).done;)i+=R(l=l.value,t,r,c=o+F(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,n){if(null==e)return e;var a=[],r=0;return R(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},_={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),o=n(86010),s=n(72389),l=n(67392),i=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[N,S]=(0,r.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=v[n].value;a!==N&&(x(t),S(a),null!=h&&w(h,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>P.push(e),onKeyDown:j,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},63568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(83117),r=(n(27378),n(3905)),o=n(11048);const s={title:"useFetcher()"},l=void 0,i={unversionedId:"api/useFetcher",id:"api/useFetcher",title:"useFetcher()",description:"Use Controller.fetch() instead",source:"@site/../docs/core/api/useFetcher.md",sourceDirName:"api",slug:"/api/useFetcher",permalink:"/docs/api/useFetcher",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useFetcher.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"6/9/2022",frontMatter:{title:"useFetcher()"},sidebar:"docs",previous:{title:"DevToolsManager",permalink:"/docs/api/DevToolsManager"},next:{title:"useInvalidator()",permalink:"/docs/api/useInvalidator"}},u={},c=[{value:"throttle?: boolean = false",id:"throttle-boolean--false",level:2},{value:"Example",id:"example",level:2},{value:"updateParams: destEndpoint, destParams, updateFunction",id:"updateparams-destendpoint-destparams-updatefunction",level:2},{value:"updateFunction: (sourceResults, destResults) =&gt; destResults",id:"updatefunction-sourceresults-destresults--destresults",level:3},{value:"Example",id:"example-1",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," instead"))),(0,r.kt)(o.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher(\n  endpoint: Endpoint,\n  throttle?: boolean = false,\n): FetchFunction;\n\ntype FetchFunction = (\n  params: object,\n  body: object | void,\n  updateParams?: OptimisticUpdateParams[]\n) => Promise<any>;\n\ntype OptimisticUpdateParams = [\n  destShape: Endpoint,\n  destParams: object,\n  updateFunction: (sourceResults: object, destResults: object) => object,\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(\n  endpoint: Endpoint<(p: Params, b: Body) => Promise<any>, S>,\n  throttle?: boolean = false,\n): <\n  UpdateParams extends OptimisticUpdateParams<\n    SchemaFromShape<Shape>,\n    FetchShape<any, any, any>\n  >[]\n>(\n  params: ParamsFromShape<Shape>,\n  body: BodyFromShape<Shape>,\n  updateParams?: UpdateParams | undefined,\n) => Promise<any>;\n\ntype OptimisticUpdateParams<\n  SourceSchema extends Schema,\n  DestShape extends FetchShape<any, any, any>\n> = [\n  DestShape,\n  ParamsFromShape<DestShape>,\n  UpdateFunction<SourceSchema, SchemaFromShape<DestShape>>,\n];\n\ntype UpdateFunction<SourceSchema extends Schema, DestSchema extends Schema> = (\n  sourceResults: Normalize<SourceSchema>,\n  destResults: Normalize<DestSchema> | undefined,\n) => Normalize<DestSchema>;\n"))),(0,r.kt)("p",null,"Mostly useful for imperatively triggering mutation effects."),(0,r.kt)("p",null,"However, this hook is actually used by the retrieval hooks (useFetch(), useCache(), useSuspense()). Using\nit with a side-effect free ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"detail()")," can be done to force a refresh imperatively."),(0,r.kt)("h2",{id:"throttle-boolean--false"},"throttle?: boolean = false"),(0,r.kt)("p",null,"By default all calls force the fetch, however by calling with throttle=true identical\nin-flight requests will be deduped."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const create = useFetcher(PostResource.create());\n  // create as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => create({}, new FormData(e.target))}>{/* ... */}</form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const update = useFetcher(PostResource.update());\n  // update as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => update({ id }, new FormData(e.target))}>\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const del = useFetcher(PostResource.delete());\n  // del as (body: any, params: Readonly<object>) => Promise<any>\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={() => del({ id: post.id })}>X</button>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"updateparams-destendpoint-destparams-updatefunction"},"updateParams: ","[destEndpoint, destParams, updateFunction][]"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Endpoint#update"},"Endpoint.update")," instead"))),(0,r.kt)("p",null,"The optional third argument to the fetch function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher()")," is a\nlist of tuples that tell Rest Hooks additional updates that should take place."),(0,r.kt)("p",null,"The result cache will be updated based on the destEndpoint with destParams applied.\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"destEndpoint.key(destParams)")," would find the location in the cache.)"),(0,r.kt)("p",null,"The third argument is a function to run on that result cache."),(0,r.kt)("h3",{id:"updatefunction-sourceresults-destresults--destresults"},"updateFunction: (sourceResults, destResults) => destResults"),(0,r.kt)("p",null,"This function takes two arguments\nand returns the new result state to be placed in the destination. (Result state resembles\nthe shape of the actual response, except all entities are replaced with their primary keys.)\nThe first argument to the update function is the result of the resolved value of the given fetch call.\nThe second argument is the existing result state of the destination."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This will insert the newly created article id onto the end of the list endpoint with ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticleResource.list(),\n    {},\n    (newArticleID: string, articleIDs: string[] | undefined) => [\n      ...(articleIDs || []),\n      newArticleID,\n    ],\n  ],\n]);\n")),(0,r.kt)("p",null,"This shows the same concept, but for a custom list endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ArticlePaginatedResource extends Resource {\n  static list<T extends Resource>() {\n    return super.list().extend({\n      schema: { results: this[], nextPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticlePaginatedResource.list(),\n    {},\n    (newArticleID: string, articleIDs: { results: string[] } | undefined) => ({\n      ...articleIDs,\n      results: [...articleIDs?.results, newArticleID],\n    }),\n  ],\n]);\n")),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create()"),(0,r.kt)("li",{parentName:"ul"},"update()"),(0,r.kt)("li",{parentName:"ul"},"partialUpdate()"),(0,r.kt)("li",{parentName:"ul"},"delete()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Endpoint"},"Endpoint")," as well."),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"notes"},"Notes"),(0,r.kt)("p",{parentName:"blockquote"},"As this is the most basic hook to dispatch network requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," it will run through all normal fetch processing like updating\nthe normalized cache, etc.")))}d.isMDXComponent=!0}}]);