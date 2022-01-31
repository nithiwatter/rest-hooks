(self.webpackChunk=self.webpackChunk||[]).push([[62152],{84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var a=n(67294),r=n(24861),i=n(88300),l=n(71481),s=n(42910),o=n(99876),c=n(63312),d=n(33186),u=n(52803),m=n(44431),p=n.n(m),h=n(53775);class y extends h.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class k extends y{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:f})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({optimisticUpdate:v})}}k.urlRoot="https://jsonplaceholder.typicode.com/todos";const f=(e,t)=>({id:e.id,...t}),g=(e,t)=>t,v=e=>e;var b=n(87462),E=n(50776),N=n(86010),w=n(95999),I=n(52263),x=n(72389),C=n(83229),A=n(55423),Z=n(84195),T=n(58699),P=n(28808),U=n(96714),S=n(28224),L=n(80944),O=n(53810),F=n(91262);const D="playgroundContainer_1vxj",j="row_3g4V",_="hidden_2rz-",M="playgroundHeader_2X75",R="playgroundEditor_1tQZ",H="playgroundPreview_3d_E",V="playgroundResult_5IAE",z="debugToggle_2KFu",$="tabControls_vH2K",B="tabs_1lMe",q="tab_3qyO",J="selected_3AAM";var K=n(60522),X=n(83552),G=n(85350);function Q(e){let{value:t}=e;const{isDarkTheme:n}=(0,G.Z)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(X.L,{shouldExpandNode:W,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,"font-family":"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function Y(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:z,onClick:t},"Store"),"y"===n?a.createElement(ne,null):null)}const ee=(0,a.memo)(Y);function te(){const e=(0,a.useContext)(K.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(Q,{value:t})}const ne=(0,a.memo)(te);function ae(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:i,setTabGroupChoices:l}=(0,L.Z)(),[s,o]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,O.o5)();if(null!=t){const e=i[t];null!=e&&e!==s&&o(e)}const d=(0,a.useCallback)((e=>{c(e.currentTarget),o((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[c,t,s,l]),u=(0,a.useMemo)((()=>[new S.Z,new T.Z(P.Z)]),[]),m=!("n"===s||!r);return a.createElement(U.nq,{managers:u},a.createElement("div",{className:(0,N.Z)(H,{[_]:m})},a.createElement(F.Z,{fallback:a.createElement(ie,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(ie,null)},a.createElement(E.i5,null),a.createElement(E.IF,null))))),a.createElement(ee,{selectedValue:s,toggle:d}))}const re=(0,a.memo)(ae);function ie(){return a.createElement("div",null,"Loading...")}function le(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,N.Z)(M,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",null,a.createElement(le,null,a.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:V},a.createElement(re,{groupId:t,defaultOpen:n,row:r})))}function oe(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(Z.Z);return a.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:i}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,N.Z)(q,{[J]:e===r}),onFocus:t,onClick:t,value:r},i)})))}function ce(e){let{children:t}=e;return a.createElement(le,{className:$},a.createElement("div",null,t),a.createElement(oe,null))}function de(e){let{title:t}=e;const{values:n}=(0,a.useContext)(Z.Z),r=n.length>0,i=(0,x.Z)();return a.createElement("div",null,r?a.createElement(ce,null,t):a.createElement(le,null,t),a.createElement(E.uz,{key:i,className:R}))}function ue(e){let{children:t,transformCode:n,groupId:r,defaultOpen:i,row:l,hidden:s=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,I.Z)(),d=(0,C.Z)();o.scope;return a.createElement("div",{className:(0,N.Z)(D,{[j]:l,[_]:s})},a.createElement(E.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>A.transpileModule(e,{compilerOptions:{module:A.ModuleKind.ESNext,target:A.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:d},o),"top"===c?a.createElement(a.Fragment,null,a.createElement(se,{groupId:r,defaultOpen:i,row:l}),a.createElement(de,null)):a.createElement(a.Fragment,null,a.createElement(de,null),a.createElement(se,{groupId:r,defaultOpen:i,row:l}))))}de.defaultProps={title:a.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class me extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}me.schema={updatedAt:Date};const pe=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:me});const he={...r,...o,...u,...d,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:p(),lastUpdated:pe,TimedEntity:me,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:i}=l.Z();return a.createElement(s.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",null,t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{i(),r((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends k{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ye=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:i="n",row:l=!1}=e;return a.createElement(ue,{scope:he,noInline:!0,groupId:n,defaultOpen:i,row:l,hidden:r},"string"==typeof t?t:t.props.children.props.children)},ke=(0,a.memo)(ye)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(9877),r=n(58215),i=n(67294);function l(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}},12112:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>o,toc:()=>c,default:()=>u});var a=n(87462),r=(n(27378),n(3905)),i=(n(9877),n(58215),n(70523),n(70720));const l={title:"schema.Array"},s=void 0,o={unversionedId:"api/Array",id:"api/Array",title:"schema.Array",description:"schema.Array - Representing Arrays | Rest Hooks",source:"@site/../docs/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/docs/next/api/Array",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Array.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Array"},sidebar:"docs",previous:{title:"schema.Object",permalink:"/docs/next/api/Object"},next:{title:"schema.Union",permalink:"/docs/next/api/Union"}},c=[{value:"Instance Methods",id:"instance-methods",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Dynamic entity types",id:"dynamic-entity-types",children:[{value:"string schemaAttribute",id:"string-schemaattribute",children:[],level:4},{value:"function schemaAttribute",id:"function-schemaattribute",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"schema.Array - Representing Arrays | Rest Hooks")),(0,r.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," instead of an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"'s values."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,r.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,r.kt)("em",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n]);\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(User),\n  ,\n});\nfunction UsersPage() {\n  const users = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(\n      {\n        links: Link,\n        posts: Post,\n      },\n      (input, parent, key) => `${input.type}s`,\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}u.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);