(self.webpackChunk=self.webpackChunk||[]).push([[77178],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},80944:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),o=r(79443);const s=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,r)=>{"use strict";r.d(t,{Z:()=>ge});var n=r(67294),o=r(24861),s=r(88300),a=r(71481),l=r(42910),i=r(99876),c=r(63312),u=r(33186),d=r(52803),p=r(44431),m=r.n(p),f=r(53775);class h extends f.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,r)=>({...await e(t,r),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,r)=>({...await e(t,r),id:r.id})})}}class g extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:y})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:b,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({optimisticUpdate:v})}}g.urlRoot="https://jsonplaceholder.typicode.com/todos";const y=(e,t)=>({id:e.id,...t}),b=(e,t)=>t,v=e=>e;var E=r(87462),k=r(50776),w=r(86010),R=r(95999),x=r(52263),O=r(72389),N=r(83229),C=r(55423),U=r(84195),T=r(58699),P=r(28808),Z=r(96714),S=r(28224),j=r(80944),I=r(53810),A=r(91262);const _="playgroundContainer_1vxj",D="row_3g4V",M="hidden_2rz-",F="playgroundHeader_2X75",L="playgroundEditor_1tQZ",V="playgroundPreview_3d_E",B="playgroundResult_5IAE",z="debugToggle_2KFu",H="tabControls_vH2K",X="tabs_1lMe",$="tab_3qyO",J="selected_3AAM";var K=r(60522),q=r(83552),G=r(85350);function Q(e){let{value:t}=e;const{isDarkTheme:r}=(0,G.Z)(),o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return n.createElement(q.L,{shouldExpandNode:W,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,"font-family":"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}function Y(e){let{toggle:t,selectedValue:r}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:z,onClick:t},"Store"),"y"===r?n.createElement(re,null):null)}const ee=(0,n.memo)(Y);function te(){const e=(0,n.useContext)(K.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return n.createElement(Q,{value:t})}const re=(0,n.memo)(te);function ne(e){let{groupId:t,defaultOpen:r,row:o}=e;const{tabGroupChoices:s,setTabGroupChoices:a}=(0,j.Z)(),[l,i]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:c}=(0,I.o5)();if(null!=t){const e=s[t];null!=e&&e!==l&&i(e)}const u=(0,n.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),a(t,"y"===l?"n":"y")}),[c,t,l,a]),d=(0,n.useMemo)((()=>[new S.Z,new T.Z(P.Z)]),[]),p=!("n"===l||!o);return n.createElement(Z.nq,{managers:d},n.createElement("div",{className:(0,w.Z)(V,{[M]:p})},n.createElement(A.Z,{fallback:n.createElement(se,null)},(()=>n.createElement(n.Suspense,{fallback:n.createElement(se,null)},n.createElement(k.i5,null),n.createElement(k.IF,null))))),n.createElement(ee,{selectedValue:l,toggle:u}))}const oe=(0,n.memo)(ne);function se(){return n.createElement("div",null,"Loading...")}function ae(e){let{children:t,className:r}=e;return n.createElement("div",{className:(0,w.Z)(F,r)},t)}function le(e){let{groupId:t,defaultOpen:r,row:o}=e;return n.createElement("div",null,n.createElement(ae,null,n.createElement(R.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",{className:B},n.createElement(oe,{groupId:t,defaultOpen:r,row:o})))}function ie(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(U.Z);return n.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:s}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,w.Z)($,{[J]:e===o}),onFocus:t,onClick:t,value:o},s)})))}function ce(e){let{children:t}=e;return n.createElement(ae,{className:H},n.createElement("div",null,t),n.createElement(ie,null))}function ue(e){let{title:t}=e;const{values:r}=(0,n.useContext)(U.Z),o=r.length>0,s=(0,O.Z)();return n.createElement("div",null,o?n.createElement(ce,null,t):n.createElement(ae,null,t),n.createElement(k.uz,{key:s,className:L}))}function de(e){let{children:t,transformCode:r,groupId:o,defaultOpen:s,row:a,hidden:l=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,x.Z)(),u=(0,N.Z)();i.scope;return n.createElement("div",{className:(0,w.Z)(_,{[D]:a,[M]:l})},n.createElement(k.nu,(0,E.Z)({code:t.replace(/\n$/,""),transformCode:r||(e=>(e=>C.transpileModule(e,{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},i),"top"===c?n.createElement(n.Fragment,null,n.createElement(le,{groupId:o,defaultOpen:s,row:a}),n.createElement(ue,null)):n.createElement(n.Fragment,null,n.createElement(ue,null),n.createElement(le,{groupId:o,defaultOpen:s,row:a}))))}ue.defaultProps={title:n.createElement(R.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},de.defaultProps={row:!1};class pe extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}pe.schema={updatedAt:Date};const me=new s.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:pe});const fe={...o,...i,...d,...u,mockFetch:function(e,t,r){void 0===r&&(r=150);const n=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return new Promise((t=>setTimeout((()=>t(e(...n))),r)))};return t&&Object.defineProperty(n,"name",{value:t,writable:!1}),n},BigNumber:m(),lastUpdated:me,TimedEntity:pe,CurrentTime:function(){const[e,t]=(0,n.useState)((()=>new Date));return(0,n.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),n.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[r,o]=n.useState(0),{resetEntireStore:s}=a.Z();return n.createElement(l.Z,{key:r,fallbackComponent:e=>{let{error:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",null,t.message," ",n.createElement("i",null,t.status)),n.createElement("button",{onClick:()=>{s(),o((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends g{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},he=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:s="n",row:a=!1}=e;return n.createElement(de,{scope:fe,noInline:!0,groupId:r,defaultOpen:s,row:a,hidden:o},"string"==typeof t?t:t.props.children.props.children)},ge=(0,n.memo)(he)},24815:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>d});var n=r(87462),o=(r(67294),r(3905)),s=r(70720);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},l=void 0,i={unversionedId:"guides/nested-response",id:"version-6.1/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-6.1/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/guides/nested-response",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"version-6.1/docs",previous:{title:"Multi-column primary key",permalink:"/docs/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/guides/rpc"}},c=[{value:"static schema",id:"static-schema",children:[],level:2},{value:"Circular dependencies",id:"circular-dependencies",children:[],level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useResource(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);