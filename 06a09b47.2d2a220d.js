(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(88)),o=n(92),c={id:"directory-search-extension",title:"Directory Search Extension"},s={unversionedId:"directory-search-extension",id:"directory-search-extension",isDocsHomePage:!1,title:"Directory Search Extension",description:"Add the Extension",source:"@site/docs/directory-search-extension.md",permalink:"/Verse-Extension-Documentation/docs/directory-search-extension",sidebar:"tutorials_examples",previous:{title:"Third Party File Repository",permalink:"/Verse-Extension-Documentation/docs/third-party-file-repository"},next:{title:"CSS Extension",permalink:"/Verse-Extension-Documentation/docs/css-extension"}},l=[{value:"Add the Extension",id:"add-the-extension",children:[]},{value:"Test it Out",id:"test-it-out",children:[]},{value:"How it Works",id:"how-it-works",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"add-the-extension"},"Add the Extension"),Object(i.b)("p",null,"This example demonstrates how to use the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"./extension-points#directory-search"}),"Directory Search"))," extension to add new users to your default HCL Verse search directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'[\n  {\n    "name": "Directory Search Sample",\n    "title": "Directory Search Sample",\n    "description": "This is a sample of directory search extension",\n    "extensions": [\n      {\n        "type": "com.ibm.verse.ext.directorySearch",\n        "payload": {\n          "url": "${extensionPath}/custom-directory-search/index.html",\n          "enableBuiltinDirectorySearch": true\n        }\n      }\n    ],\n    "services": ["Verse"]\n  }\n]\n')),Object(i.b)("h4",{id:"extension-properties"},"Extension Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the extension point  (",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"./extension-points"}),"List of Extension Points"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"payload"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSON object that specifies properties specific to the extension")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"url"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The fully-qualified URL of where your application is being served from")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"enableBuiltinDirectorySearch"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"Boolean")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"controls whether the built-in directory search in Verse is also used")))),Object(i.b)("h2",{id:"test-it-out"},"Test it Out"),Object(i.b)(o.a,{path:"samples/custom-search-directory.gif",mdxType:"Expandable"}),Object(i.b)("h2",{id:"how-it-works"},"How it Works"),Object(i.b)("p",null,"The Directory Search extension allows you to customize the results of Verse's built-in search directory. In this application, the search ",Object(i.b)("strong",{parentName:"p"},"sample hcl")," returns some custom results from the sample web application via cross-document messaging. Selecting ",Object(i.b)("strong",{parentName:"p"},"Search Directory")," intiates a ping from Verse to the custom web application which, in return, sends a message that informs Verse it is ready to receive information. Verse will then send another message to the web application with the search string. As always, it is good practice to verify the ",Object(i.b)("inlineCode",{parentName:"p"},"verseApiData.actionId"),", in this case it is ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.verse.ext.action.directorySearch"),"."),Object(i.b)("p",null,"Once the handshake is complete, the sample web application is responsible for sending relevant search results back to Verse. For the purposes of this demo, there are six hard-coded sample results that are sent in a postMessage to Verse in the format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var searched_message = {\n  verseApiType: 'com.ibm.verse.ext.directorySearch.searchResults',\n  returnCode: 0,\n  result: searchResult,\n};\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"searchResult")," is an array of objects with properties:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"emailAddress: // email address (test@hcl.com)\nnotesAddress: // Notes name (John Smith/UK/HCL)\ndisplayName: // Name to be displayed. Optional\nforwardMailAddress: // Forward mail address. Optional\n")),Object(i.b)("p",null,"Take a look inside the ",Object(i.b)("inlineCode",{parentName:"p"},"script.js")," file in the ",Object(i.b)("inlineCode",{parentName:"p"},"custom-directory-search")," folder to get a better understanding of how the sample web application sends and receives data. Additionally, reference the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"./extension-points#directory-search"}),"Directory Search"))," extension documentation for more information."))}u.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(89),a=n(91);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},91:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),i=(n(47),n(90)),o=function(e){var t=e.path,n=a.a.useState(!1),r=n[0],o=n[1],c=a.a.useState({}),s=c[0],l=c[1],b=a.a.useRef(null),u=function(e){e.preventDefault(),o(!r)},d=function(e){r&&(e.preventDefault(),o(!1))};return a.a.useEffect((function(){return document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}}),[]),a.a.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];r&&b.current?(document.body.setAttribute("style","overflow:hidden;"),l({top:e.offsetTop})):(document.body.removeAttribute("style"),b.current.focus(),l({}))}),[r]),a.a.createElement("div",{onKeyPress:u,onClick:u,className:r?"expandable-container expanded":"expandable-container",ref:b,style:s},a.a.createElement("img",{tabIndex:"0",className:r?"image image-expanded":"image",src:Object(i.a)(t)}))}}}]);