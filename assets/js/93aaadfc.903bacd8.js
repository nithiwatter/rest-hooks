"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(86010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(83117),o=r(67294),a=r(86010),s=r(72389),l=r(67392),i=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:m,groupId:f,className:b}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=(0,i.U)(),[w,N]=(0,o.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const R=e=>{const t=e.currentTarget,r=T.indexOf(t),n=k[r].value;n!==w&&(A(t),N(n),null!=f&&x(f,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},b)},k.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:R,onClick:R},s,{className:(0,a.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,o.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},45291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(83117),o=(r(67294),r(3905)),a=r(65488),s=r(85162);const l={title:"Mocking data for Storybook"},i=void 0,u={unversionedId:"guides/storybook",id:"version-6.0/guides/storybook",title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/versioned_docs/version-6.0/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/6.0/guides/storybook",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/storybook.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{title:"Mocking data for Storybook"},sidebar:"version-6.0/docs",previous:{title:"Debugging",permalink:"/docs/6.0/guides/debugging"},next:{title:"Unit testing hooks",permalink:"/docs/6.0/guides/unit-testing-hooks"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"Fixtures",id:"fixtures",level:2},{value:"Decorators",id:"decorators",level:2},{value:"<code>.storybook/preview.tsx</code>",id:"storybookpreviewtsx",level:4},{value:"Story",id:"story",level:2},{value:"<code>ArticleList.stories.tsx</code>",id:"articleliststoriestsx",level:4}],d=(m="MockResolver",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const f={toc:p};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/6.0/api/MockResolver"},"\\",(0,o.kt)(d,{mdxType:"MockResolver"}))," enables easy loading of fixtures to see what\ndifferent network responses might look like. It can be layered, composed, and even used\nfor ",(0,o.kt)("a",{parentName:"p",href:"../api/useFetcher"},"imperative fetches")," like ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"update"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(a.Z,{defaultValue:"ArticleResource.ts",values:[{label:"ArticleResource.ts",value:"ArticleResource.ts"},{label:"ArticleList.tsx",value:"ArticleList.tsx"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ArticleResource.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,o.kt)(s.Z,{value:"ArticleList.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import ArticleResource from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useResource(ArticleResource.list(), { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")))),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("b",null,"fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n    {\n      endpoint: ArticleResource.update(),\n      args: [{ id: 532 }] as const,\n      response: {\n        id: 532,\n        content: 'updated \"never again\"',\n        author: 23,\n        contributors: [5],\n      },\n    },\n  ],\n  empty: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [],\n    },\n  ],\n  error: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: { message: 'Bad request', status: 400, name: 'Not Found' },\n      error: true,\n    },\n  ],\n  loading: [],\n};\n"))),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You'll need to add the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators"},"global decorators")," to establish the correct context."),(0,o.kt)("p",null,"This should resemble what you have added in ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#add-provider-at-top-level-component"},"initial setup")),(0,o.kt)("h4",{id:"storybookpreviewtsx"},(0,o.kt)("inlineCode",{parentName:"h4"},".storybook/preview.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';\n\nexport const decorators = [\n  Story => (\n    <CacheProvider>\n      <Suspense fallback=\"loading\">\n        <NetworkErrorBoundary>\n          <Story />\n        </NetworkErrorBoundary>\n      </Suspense>\n    </CacheProvider>\n  ),\n];\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"Wrapping our component with \\",(0,o.kt)(d,{mdxType:"MockResolver"})," enables us to declaratively\ncontrol how Rest Hooks' fetches are resolved."),(0,o.kt)("p",null,"Here we select which fixtures should be used by ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"storybook controls"),"."),(0,o.kt)("h4",{id:"articleliststoriestsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"ArticleList.stories.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MockResolver } from '@rest-hooks/test';\nimport type { Fixture } from '@rest-hooks/test';\nimport { Story } from '@storybook/react/types-6-0';\n\nimport ArticleList from 'ArticleList';\nimport options from './fixtures';\n\nexport default {\n  title: 'Pages/ArticleList',\n  component: ArticleList,\n  argTypes: {\n    result: {\n      description: 'Results',\n      defaultValue: 'full',\n      control: {\n        type: 'select',\n        options: Object.keys(options),\n      },\n    },\n  },\n};\n\nconst Template: Story<{ result: keyof typeof options }> = ({ result }) => (\n  <MockResolver fixtures={options[result]}>\n    <ArticleList maxResults={10} />\n  </MockResolver>\n);\n\nexport const FullArticleList = Template.bind({});\n\nFullArticleList.args = {\n  result: 'full',\n};\n")))}b.isMDXComponent=!0}}]);