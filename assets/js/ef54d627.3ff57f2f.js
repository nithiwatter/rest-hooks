/*! For license information please see ef54d627.3ff57f2f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[18294],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function y(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||m}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,h(b,y.prototype),b.isPureReactComponent=!0;var N=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var r,s={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=t[r]);var i=arguments.length-2;if(1===i)s.children=a;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];s.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===s[r]&&(s[r]=i[r]);return{$$typeof:n,type:e,key:o,ref:l,props:s,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,s,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case a:i=!0}}if(i)return o=o(i=e),e=""===s?"."+T(i,0):s,N(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),R(o,t,r,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(i=0,s=""===s?".":s+":",N(e))for(var u=0;u<e.length;u++){var p=s+T(l=e[u],u);i+=R(l,t,r,p,o)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)i+=R(l=l.value,t,r,p=s+T(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,n){if(null==e)return e;var a=[],r=0;return R(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},D={transition:null}},27378:(e,t,n)=>{n(41535)},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(83117),r=n(67294),s=n(86010),o=n(72389),l=n(67392),i=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:f,groupId:m,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=f??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,i.U)(),[S,w]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=m){const e=b[m];null!=e&&e!==S&&y.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==S&&(_(t),w(a),null!=m&&N(m,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:x,onClick:x},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function f(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(65488),r=n(85162),s=n(67294);function o(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(r.Z,{value:"simple"},t[0]),s.createElement(r.Z,{value:"generics"},t[1]))}},56922:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(55468);const s={React:a,...a,...r}},21918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(83117),r=(n(27378),n(3905)),s=n(11048),o=n(85761);const l={title:"useSuspense()"},i=void 0,u={unversionedId:"api/useSuspense",id:"api/useSuspense",title:"useSuspense()",description:"useSuspense() - Data fetching with Suspense",source:"@site/../docs/core/api/useSuspense.md",sourceDirName:"api",slug:"/api/useSuspense",permalink:"/docs/api/useSuspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSuspense.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"useSuspense()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/api/Snapshot"},next:{title:"useController()",permalink:"/docs/api/useController"}},p={},c=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],d={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useSuspense() - Data fetching with Suspense")),(0,r.kt)(s.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,r.kt)("p",null,"Excellent for retrieving the data you need."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSuspense()")," ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks-loadingerror"},"suspends")," rendering until the data is available. This is much like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,r.kt)("p",null,"Cache policy is ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy"},"configurable"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On first-render",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or parameters change"),(0,r.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,r.kt)("li",{parentName:"ul"},"or imperative ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/Controller#invalidate"},"invalidation")," triggered"))),(0,r.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,r.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,r.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Throws error to be ",(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks-loadingerror"},"caught")," by ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,r.kt)("li",{parentName:"ul"},"While Loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/Controller#invalidate"},"invalidation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks-loadingerror"},"Suspend rendering")," otherwise")))),(0,r.kt)("h2",{id:"single"},"Single"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n}\n")),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useSuspense(PostResource.list());\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"sequential"},"Sequential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n  const author = useSuspense(UserResource.detail(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,r.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', lastPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const {\n    results: posts,\n    nextPage,\n    lastPage,\n  } = useSuspense(PaginatedPostResource.list(), { page });\n  // posts as PaginatedPostResource[]\n}\n")),(0,r.kt)(o.ZP,{mdxType:"ConditionalDependencies"}),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detail()"),(0,r.kt)("li",{parentName:"ul"},"list()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Endpoint"},"Endpoint")," as well."))}f.isMDXComponent=!0},85761:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(83117),r=(n(27378),n(3905)),s=n(69671);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(s.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}l.isMDXComponent=!0}}]);