"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[41558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(83117),o=(n(67294),n(3905));const s={title:"Unit testing components"},i=void 0,a={unversionedId:"guides/unit-testing-components",id:"version-6.1/guides/unit-testing-components",title:"Unit testing components",description:"If you need to add unit tests to your components to check some behavior you might want",source:"@site/versioned_docs/version-6.1/guides/unit-testing-components.md",sourceDirName:"guides",slug:"/guides/unit-testing-components",permalink:"/docs/6.1/guides/unit-testing-components",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-components.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Unit testing components"},sidebar:"version-6.1/docs",previous:{title:"Unit testing hooks",permalink:"/docs/6.1/guides/unit-testing-hooks"},next:{title:"Handling loading state",permalink:"/docs/6.1/concepts/loading-state"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to add unit tests to your components to check some behavior you might want\navoid dealing with network fetch cycle as that is probably orthogonal to what your are\ntrying to test. Using ",(0,o.kt)("a",{parentName:"p",href:"../api/MockResolver"},"<MockResolver /",">")," in our tests allow\nus to prime the cache with provided fixtures so the components will immediately render\nwith said results."),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("b",null,"__tests__/fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n    {\n      endpoint: ArticleResource.update(),\n      args: [{ id: 532 }] as const,\n      response: {\n        id: 532,\n        content: 'updated \"never again\"',\n        author: 23,\n        contributors: [5],\n      },\n    },\n  ],\n  empty: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [],\n    },\n  ],\n  error: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: { message: 'Bad request', status: 400, name: 'Not Found' },\n      error: true,\n    },\n  ],\n  loading: [],\n};\n"))),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("b",null,"__tests__/ArticleList.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CacheProvider } from 'rest-hooks';\nimport { render } from '@testing-library/react';\nimport { MockResolver } from '@rest-hooks/test';\n\nimport ArticleList from 'components/ArticleList';\nimport results from './fixtures';\n\ndescribe('<ArticleList />', () => {\n  it('renders', () => {\n    const tree = (\n      <CacheProvider initialState={mockInitialState(results.full)}>\n        <ArticleList maxResults={10} />\n      </CacheProvider>\n    );\n    const { queryByText } = render(tree);\n    const content = queryByText(results.full.result[0].content);\n    expect(content).toBeDefined();\n  });\n\n  it('suspends then resolves', async () => {\n    const tree = (\n      <CacheProvider>\n        <MockResolver fixtures={results.full}>\n          <Suspense fallback=\"loading\">\n            <ArticleList maxResults={10} />\n          </Suspense>\n        </MockResolver>\n      </CacheProvider>\n    );\n    const { queryByText, waitForNextUpdate } = render(tree);\n    expect(queryByText('loading')).toBeDefined();\n\n    await waitForNextUpdate();\n    expect(queryByText(results.full.result[0].content)).toBeDefined();\n  })\n});\n"))))}p.isMDXComponent=!0}}]);