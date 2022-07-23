"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[32150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=s,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),s=(a(67294),a(3905));const r={id:"resource",title:"Resource",original_id:"resource"},i=void 0,o={unversionedId:"api/resource",id:"version-2.2/api/resource",title:"Resource",description:"Resource is an abstract class that will help you define the data you are working with. There are",source:"@site/versioned_docs/version-2.2/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/docs/2.2/api/resource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Resource.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{id:"resource",title:"Resource",original_id:"resource"},sidebar:"version-2.2/docs",previous:{title:"API Reference",permalink:"/docs/2.2/api/"},next:{title:"FetchShape",permalink:"/docs/2.2/api/FetchShape"}},l={},p=[{value:"Static",id:"static",level:3},{value:"Instance",id:"instance",level:3},{value:"Factory method",id:"factory-method",level:2},{value:"static fromJS&lt;T extends typeof Resource&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet",level:3},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",level:2},{value:"pk: () =&gt; string | number | null",id:"pk---string--number--null",level:3},{value:"Multi-column primary key:",id:"multi-column-primary-key",level:4},{value:"Null value",id:"null-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Resources",id:"singleton-resources",level:4},{value:"static urlRoot: string",id:"static-urlroot-string",level:3},{value:"static getKey()",id:"static-getkey",level:3},{value:"Data methods",id:"data-methods",level:2},{value:"static merge&lt;T extends typeof Resource&gt;(first: InstanceType&lt;T&gt;, second: InstanceType&lt;T&gt;) =&gt; InstanceType&lt;T&gt;",id:"static-merget-extends-typeof-resourcefirst-instancetypet-second-instancetypet--instancetypet",level:3},{value:"static hasDefined&lt;T extends typeof Resource&gt;(instance: InstanceType&lt;T&gt;, key: keyof InstanceType&lt;T&gt;) =&gt; boolean",id:"static-hasdefinedt-extends-typeof-resourceinstance-instancetypet-key-keyof-instancetypet--boolean",level:3},{value:"static toObjectDefined&lt;T extends typeof Resource&gt;(instance: AbstractInstanceType&lt;T&gt;) =&gt; Partial&lt;InstanceType&lt;T&gt;&gt;",id:"static-toobjectdefinedt-extends-typeof-resourceinstance-abstractinstancetypet--partialinstancetypet",level:3},{value:"static keysDefined&lt;T extends typeof Resource&gt;(instance: InstanceType&lt;T&gt;) =&gt; (keyof InstanceType&lt;T&gt;)[]",id:"static-keysdefinedt-extends-typeof-resourceinstance-instancetypet--keyof-instancetypet",level:3},{value:"Static network methods and properties",id:"static-network-methods-and-properties",level:2},{value:"static url&lt;T extends typeof Resource&gt;(urlParams?: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;) =&gt; string",id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string",level:3},{value:"static listUrl&lt;T extends typeof Resource&gt;(searchParams?: Readonly&lt;Record&lt;string, string&gt;&gt;) =&gt; string",id:"static-listurlt-extends-typeof-resourcesearchparams-readonlyrecordstring-string--string",level:3},{value:"static fetch&lt;T extends typeof Resource&gt;(method: &quot;get&quot; | &quot;post&quot; | &quot;put&quot; | &quot;patch&quot; | &quot;delete&quot; | &quot;options&quot;, url: string, body?: Readonly&lt;object | string&gt;&gt;) =&gt; Promise&lt;any&gt;",id:"static-fetcht-extends-typeof-resourcemethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseany",level:3},{value:"static getEntitySchema() =&gt; schema.Entity",id:"static-getentityschema--schemaentity",level:3},{value:"static getRequestOptions() =&gt; RequestOptions | undefined",id:"static-getrequestoptions--requestoptions--undefined",level:3},{value:"Fetch shapes",id:"fetch-shapes",level:2},{value:"detailShape(): ReadShape",id:"detailshape-readshape",level:3},{value:"listShape(): ReadShape",id:"listshape-readshape",level:3},{value:"createShape(): MutateShape",id:"createshape-mutateshape",level:3},{value:"updateShape(): MutateShape",id:"updateshape-mutateshape",level:3},{value:"partialUpdateShape(): MutateShape",id:"partialupdateshape-mutateshape",level:3},{value:"deleteShape(): DeleteShape",id:"deleteshape-deleteshape",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  id = null;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  +id: ?number = null;\n  +title: string = '';\n  +content: string = '';\n  +author: ?number = null;\n  +tags: string[] = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," is an abstract class that will help you define the data you are working with. There are\ntwo sides to ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," - the static and instance side."),(0,s.kt)("h3",{id:"static"},"Static"),(0,s.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"FetchShapes"),", which\ntell the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useresource"},"hooks")," how to process requests. Shapes are provided for the\ncommon ",(0,s.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,s.kt)("h3",{id:"instance"},"Instance"),(0,s.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as you\nshould be treating all your data as immutable (this library assumes that)!"),(0,s.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,s.kt)("p",null,"A final note: ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,s.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,s.kt)("h2",{id:"factory-method"},"Factory method"),(0,s.kt)("h3",{id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof Resource",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,s.kt)("p",null,"This is used to create instances of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," you defined. Will copy over props provided to\nthe instance in construction."),(0,s.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,s.kt)("h3",{id:"pk---string--number--null"},"pk: () => string | number | null"),(0,s.kt)("p",null,"PK stands for ",(0,s.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,s.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return [this.firstCol, this.secondCol, this.thirdCol].join(',');\n}\n")),(0,s.kt)("h4",{id:"null-value"},"Null value"),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,s.kt)("a",{parentName:"p",href:"./api/resource#static-fromjs-t-extends-typeof-resource-this-t-props-partial-abstractinstancetype-t-abstractinstancetype-t"},"Resource.fromJS()"),"\ndirectly. If ",(0,s.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,s.kt)("h4",{id:"other-uses"},"Other uses"),(0,s.kt)("p",null,"While the ",(0,s.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => <TheThing key={result.pk()} thing={result} />)}\n  </div>\n)\n")),(0,s.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,s.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,s.kt)("h3",{id:"static-urlroot-string"},"static urlRoot: string"),(0,s.kt)("p",null,"Used to build url patterns in ",(0,s.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,s.kt)("inlineCode",{parentName:"p"},"getKey()")," so typically you'll want this to be globally unique per Resource."),(0,s.kt)("h3",{id:"static-getkey"},"static getKey()"),(0,s.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic getKey<T extends typeof Resource>(this: T) {\n  return this.urlRoot;\n}\n")),(0,s.kt)("h2",{id:"data-methods"},"Data methods"),(0,s.kt)("h3",{id:"static-merget-extends-typeof-resourcefirst-instancetypet-second-instancetypet--instancetypet"},"static merge\\<T extends typeof Resource",">","(first: InstanceType\\<T",">",", second: InstanceType\\<T",">",") => InstanceType\\<T",">"),(0,s.kt)("p",null,"Takes only the defined (non-default) values of first and second and creates a new instance copying them over.\nSecond will override values of first. Merge is shallow, so you'll need to override this to do any deep merges."),(0,s.kt)("h3",{id:"static-hasdefinedt-extends-typeof-resourceinstance-instancetypet-key-keyof-instancetypet--boolean"},"static hasDefined\\<T extends typeof Resource",">","(instance: InstanceType\\<T",">",", key: keyof InstanceType\\<T",">",") => boolean"),(0,s.kt)("p",null,"Returns whether provided ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," is defined (non-default) in ",(0,s.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,s.kt)("h3",{id:"static-toobjectdefinedt-extends-typeof-resourceinstance-abstractinstancetypet--partialinstancetypet"},"static toObjectDefined\\<T extends typeof Resource",">","(instance: AbstractInstanceType\\<T",">",") => Partial\\<InstanceType\\<T",">",">"),(0,s.kt)("p",null,"Returns an ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")," with only the defined (non-default) members of ",(0,s.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,s.kt)("h3",{id:"static-keysdefinedt-extends-typeof-resourceinstance-instancetypet--keyof-instancetypet"},"static keysDefined\\<T extends typeof Resource",">","(instance: InstanceType\\<T",">",") => (keyof InstanceType\\<T",">",")[]"),(0,s.kt)("p",null,"Returns an ",(0,s.kt)("inlineCode",{parentName:"p"},"Array")," of all defined (non-default) keys of ",(0,s.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,s.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,s.kt)("p",null,"These are the basic building blocks used to compile the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"Fetch shapes")," below."),(0,s.kt)("h3",{id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"static url\\<T extends typeof Resource",">","(urlParams?: Partial\\<AbstractInstanceType\\<T",">",">",") => string"),(0,s.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,s.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,s.kt)("p",null,"Used in ",(0,s.kt)("a",{parentName:"p",href:"#detailshape-readshape"},"detailShape()"),", ",(0,s.kt)("a",{parentName:"p",href:"#updateshape-mutateshape"},"updateShape()"),"\n",(0,s.kt)("a",{parentName:"p",href:"#partialupdateshape-mutateshape"},"partialUpdateShape()"),", and ",(0,s.kt)("a",{parentName:"p",href:"#deleteshape-deleteshape"},"deleteShape()")),(0,s.kt)("h3",{id:"static-listurlt-extends-typeof-resourcesearchparams-readonlyrecordstring-string--string"},"static listUrl\\<T extends typeof Resource",">","(searchParams?: Readonly\\<Record\\<string, string",">",">",") => string"),(0,s.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,s.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,s.kt)("p",null,"Used in ",(0,s.kt)("a",{parentName:"p",href:"#listshape-readshape"},"listShape()")," and ",(0,s.kt)("a",{parentName:"p",href:"#createshape-mutateshape"},"createShape()")),(0,s.kt)("h3",{id:"static-fetcht-extends-typeof-resourcemethod-get--post--put--patch--delete--options-url-string-body-readonlyobject--string--promiseany"},"static fetch\\<T extends typeof Resource",">",'(method: "get" | "post" | "put" | "patch" | "delete" | "options", url: string, body?: Readonly\\<object | string',">",">",") => Promise\\<any",">"),(0,s.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,s.kt)("h3",{id:"static-getentityschema--schemaentity"},"static getEntitySchema() => ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#entitykey-definition---options--"},"schema.Entity")),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#schema"},"shape of the data"),"\nwhen requesting one resource at a time. Defaults to a plain object\ncontaining the keys. This can be useful to override if your response is in a different form."),(0,s.kt)("h3",{id:"static-getrequestoptions--requestoptions--undefined"},"static getRequestOptions() => ",(0,s.kt)("a",{parentName:"h3",href:"/docs/2.2/api/FetchShape#RequestOptions"},"RequestOptions")," | undefined"),(0,s.kt)("p",null,"Returns the default request options for this resource. By default this returns undefined"),(0,s.kt)("h2",{id:"fetch-shapes"},(0,s.kt)("a",{parentName:"h2",href:"../api/FetchShape"},"Fetch shapes")),(0,s.kt)("p",null,"These provide the standard ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\nshapes common in ",(0,s.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew shapes based to match your API."),(0,s.kt)("h3",{id:"detailshape-readshape"},"detailShape(): ReadShape"),(0,s.kt)("p",null,"A GET request using standard ",(0,s.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useresource"},"useResource")),(0,s.kt)("h3",{id:"listshape-readshape"},"listShape(): ReadShape"),(0,s.kt)("p",null,"A GET request using ",(0,s.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useresource"},"useResource")),(0,s.kt)("h3",{id:"createshape-mutateshape"},"createShape(): MutateShape"),(0,s.kt)("p",null,"A POST request sending a payload to ",(0,s.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useFetcher"},"useFetcher")),(0,s.kt)("h3",{id:"updateshape-mutateshape"},"updateShape(): MutateShape"),(0,s.kt)("p",null,"A PUT request sending a payload to a ",(0,s.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useFetcher"},"useFetcher")),(0,s.kt)("h3",{id:"partialupdateshape-mutateshape"},"partialUpdateShape(): MutateShape"),(0,s.kt)("p",null,"A PATCH request sending a partial payload to ",(0,s.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useFetcher"},"useFetcher")),(0,s.kt)("h3",{id:"deleteshape-deleteshape"},"deleteShape(): DeleteShape"),(0,s.kt)("p",null,"A DELETE request sent to ",(0,s.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useFetcher"},"useFetcher")))}u.isMDXComponent=!0}}]);