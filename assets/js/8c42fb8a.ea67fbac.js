(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[97746],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ee});var r=n(67294),i=n(43329),a=n(67601),l=n(37814),o=n(65612),c=n(9546),s=n(51111),d=n(44431),u=n.n(d),m=n(32257),p=n(66856);class f extends p.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class g extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:h})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:y,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new m.Z(this),getOptimisticResponse:v})}}g.urlRoot="/api/todos";const h=(e,t,n)=>({id:t.id,...e.getResponse(g.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),y=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(83117),E=n(61313),b=n(86010),w=n(95999),A=n(52263),x=n(72389),O=n(66412),D=n(55423),T=n(84195),N=n(33625),P=n(85109),C=n(83477),Z=n(33799),S=n(7094),j=n(12466),F=n(91262);const I="playgroundContainer_sLUA",R="row_YGZs",U="hidden_Hh8i",_="playgroundHeader_Zx4K",L="playgroundEditor_lYwu",M="playgroundPreview_rk9R",H="playgroundError_sRnA",V="playgroundResult_tefG",z="debugToggle_zlro",B="tabControls_trxh",G="tabs_m54V",X="tab_bTGw",$="selected_QXZk";var J=n(78914),K=n(90988),Y=n(92949);function q(e){let{value:t}=e;const{isDarkTheme:n}=(0,Y.I)(),i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(K.L,{shouldExpandNode:Q,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"}})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store"),"y"===n?r.createElement(ie,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(J.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(q,{value:t})}const ie=(0,r.memo)(re);function ae(e){let{groupId:t,defaultOpen:n,row:i}=e;const{tabGroupChoices:a,setTabGroupChoices:l}=(0,S.U)(),[o,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:s}=(0,j.o5)();if(null!=t){const e=a[t];null!=e&&e!==o&&c(e)}const d=(0,r.useCallback)((e=>{s(e.currentTarget),c((e=>"y"===e?"n":"y")),l(t,"y"===o?"n":"y")}),[s,t,o,l]),u=(0,r.useMemo)((()=>[new Z.Z,new N.Z(P.Z)]),[]),m=!("n"===o||!i);return r.createElement(C.nq,{managers:u},r.createElement("div",{className:(0,b.Z)(M,{[U]:m})},r.createElement(F.Z,{fallback:r.createElement(oe,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(oe,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:H}))))),r.createElement(ne,{selectedValue:o,toggle:d}))}const le=(0,r.memo)(ae);function oe(){return r.createElement("div",null,"Loading...")}function ce(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,b.Z)(_,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(ce,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:V},r.createElement(le,{groupId:t,defaultOpen:n,row:i})))}function de(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,b.Z)(X,{[$]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function ue(e){let{children:t}=e;return r.createElement(ce,{className:B},r.createElement("div",null,t),r.createElement(de,null))}function me(e){let{title:t}=e;const{values:n}=(0,r.useContext)(T.Z),i=n.length>0,a=(0,x.Z)();return r.createElement("div",null,i?r.createElement(ue,null,t):r.createElement(ce,null,t),r.createElement(E.uz,{key:a,className:L}))}function pe(e){let{children:t,transformCode:n,groupId:i,defaultOpen:a,row:l,hidden:o=!1,...c}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:s}}}}=(0,A.Z)(),d=(0,O.p)();c.scope;return r.createElement("div",{className:(0,b.Z)(I,{[R]:l,[U]:o})},r.createElement(E.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>D.transpileModule(e,{compilerOptions:{module:D.ModuleKind.ESNext,target:D.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:d},c),"top"===s?r.createElement(r.Fragment,null,r.createElement(se,{groupId:i,defaultOpen:a,row:l}),r.createElement(me,null)):r.createElement(r.Fragment,null,r.createElement(me,null),r.createElement(se,{groupId:i,defaultOpen:a,row:l}))))}me.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var fe=n(32430),ge=n(23212);class he extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}he.schema={updatedAt:Date};const ye=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:he});const ve={...i,...l,...s,...c,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u(),lastUpdated:ye,TimedEntity:he,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:a}=(0,fe.Z)();return r.createElement(ge.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:H},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{a(),i((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends g{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ke=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:a="n",row:l=!1}=e;return r.createElement(pe,{scope:ve,noInline:!0,groupId:n,defaultOpen:a,row:l,hidden:i},"string"==typeof t?t:t.props.children.props.children)},Ee=(0,r.memo)(ke)},62499:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(83117),i=(n(67294),n(3905)),a=n(9790);const l={title:"Validation"},o=void 0,c={unversionedId:"getting-started/validation",id:"version-6.1/getting-started/validation",title:"Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/versioned_docs/version-6.1/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/6.1/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Validation"},sidebar:"version-6.1/docs",previous:{title:"Expiry Policy",permalink:"/docs/6.1/getting-started/expiry-policy"},next:{title:"Usage",permalink:"/docs/6.1/rest/usage"}},s={},d=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"../api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"../api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n      '3': { id: '3', title: { complex: 'second', object: 5 } },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useResource(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': { id: '1', title: 'first' },\n      '2': { id: '2' },\n    }[id]),\n  'mockArticleDetail',\n);\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: Article,\n});\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useResource(articleDetail, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockArticleList = mockFetch(\n  () => [\n    { id: '1', title: 'first' },\n    { id: '2', title: 'second' },\n  ],\n  'mockArticleList',\n);\nconst mockArticleDetail = mockFetch(\n  ({ id }) =>\n    ({\n      '1': {\n        id: '1',\n        title: 'first',\n        content: 'long',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n      '2': {\n        id: '2',\n        title: 'second',\n        content: 'short',\n        createdAt: '2011-10-05T14:48:00.000Z',\n      },\n    }[id]),\n  'mockArticleDetail',\n);\n\nclass ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst articleList = new Endpoint(mockArticleList, { schema: [ArticlePreview] });\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\nconst articleDetail = new Endpoint(mockArticleDetail, {\n  schema: ArticleFull,\n});\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useResource(articleDetail, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{cursor: 'pointer'}}>&lt;</a> {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useResource(articleList, {});\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div key={article.pk()} onClick={() => setRoute(article.id)} style={{cursor: 'pointer'}}>\n            {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}m.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);