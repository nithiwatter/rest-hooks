(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[62877],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),l=n(86010),i=n(72389),s=n(67392),o=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:h,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,o.U)(),[w,N]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==w&&(I(t),N(r),null!=h&&E(h,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var r=n(67294),a=n(43329),l=n(67601),i=n(37814),s=n(65612),o=n(9546),c=n(51111),u=n(44431),d=n.n(u),p=n(32257),m=n(66856);class h extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class f extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:y})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:v})}}f.urlRoot="/api/todos";const y=(e,t,n)=>({id:t.id,...e.getResponse(f.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),g=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var b=n(83117),k=n(61313),E=n(86010),w=n(95999),N=n(52263),x=n(72389),I=n(66412),O=n(55423),T=n(84195),C=n(33625),A=n(85109),Z=n(83477),P=n(33799),S=n(7094),D=n(12466),j=n(91262);const F="playgroundContainer_sLUA",U="row_YGZs",L="hidden_Hh8i",_="playgroundHeader_Zx4K",R="playgroundEditor_lYwu",M="playgroundPreview_rk9R",V="playgroundError_sRnA",$="playgroundResult_tefG",z="debugToggle_zlro",H="tabControls_trxh",B="tabs_m54V",G="tab_bTGw",q="selected_QXZk";var J=n(78914),X=n(90988),K=n(92949);function Y(e){let{value:t}=e;const{isDarkTheme:n}=(0,K.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(X.L,{shouldExpandNode:W,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store"),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(J.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(Y,{value:t})}const ae=(0,r.memo)(re);function le(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:l,setTabGroupChoices:i}=(0,S.U)(),[s,o]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,D.o5)();if(null!=t){const e=l[t];null!=e&&e!==s&&o(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),o((e=>"y"===e?"n":"y")),i(t,"y"===s?"n":"y")}),[c,t,s,i]),d=(0,r.useMemo)((()=>[new P.Z,new C.Z(A.Z)]),[]),p=!("n"===s||!a);return r.createElement(Z.nq,{managers:d},r.createElement("div",{className:(0,E.Z)(M,{[L]:p})},r.createElement(j.Z,{fallback:r.createElement(se,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(se,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:V}))))),r.createElement(ne,{selectedValue:s,toggle:u}))}const ie=(0,r.memo)(le);function se(){return r.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(_,n)},t)}function ce(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(oe,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:$},r.createElement(ie,{groupId:t,defaultOpen:n,row:a})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(G,{[q]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function de(e){let{children:t}=e;return r.createElement(oe,{className:H},r.createElement("div",null,t),r.createElement(ue,null))}function pe(e){let{title:t}=e;const{values:n}=(0,r.useContext)(T.Z),a=n.length>0,l=(0,x.Z)();return r.createElement("div",null,a?r.createElement(de,null,t):r.createElement(oe,null,t),r.createElement(k.uz,{key:l,className:R}))}function me(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:i,hidden:s=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,N.Z)(),u=(0,I.p)();o.scope;return r.createElement("div",{className:(0,E.Z)(F,{[U]:i,[L]:s})},r.createElement(k.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>O.transpileModule(e,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},o),"top"===c?r.createElement(r.Fragment,null,r.createElement(ce,{groupId:a,defaultOpen:l,row:i}),r.createElement(pe,null)):r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(ce,{groupId:a,defaultOpen:l,row:i}))))}pe.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},me.defaultProps={row:!1};var he=n(32430),fe=n(23212);class ye extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ye.schema={updatedAt:Date};const ge=new l.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ye});const ve={...a,...i,...c,...o,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d(),lastUpdated:ge,TimedEntity:ye,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,he.Z)();return r.createElement(fe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends f{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},be=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l="n",row:i=!1}=e;return r.createElement(me,{scope:ve,noInline:!0,groupId:n,defaultOpen:l,row:i,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ke=(0,r.memo)(be)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(65488),a=n(85162),l=n(67294);function i(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},36510:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(83117),a=(n(67294),n(3905)),l=(n(65488),n(85162),n(70523),n(9790));const i={title:"schema.Array"},s=void 0,o={unversionedId:"api/Array",id:"version-6.2/api/Array",title:"schema.Array",description:"schema.Array - Representing Arrays | Rest Hooks",source:"@site/versioned_docs/version-6.2/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/docs/6.2/api/Array",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Array.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"schema.Array"},sidebar:"docs",previous:{title:"schema.Object",permalink:"/docs/6.2/api/Object"},next:{title:"schema.Union",permalink:"/docs/6.2/api/Union"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Array - Representing Arrays | Rest Hooks")),(0,a.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," instead of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"'s values."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,a.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("em",{parentName:"li"},"optional")," (required if ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,a.kt)("em",{parentName:"li"}," ",(0,a.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,a.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n]);\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(User),\n  ,\n});\nfunction UsersPage() {\n  const users = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,a.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,a.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,a.kt)("p",null,"The return values should match a key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(\n      {\n        links: Link,\n        posts: Post,\n      },\n      (input, parent, key) => `${input.type}s`,\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);