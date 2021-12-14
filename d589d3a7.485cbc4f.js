(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(88)),i={id:"getting-started",title:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The following tutorials and exampes are here to give you a better understanding of the functionality that Verse Extensibility has to offer.",source:"@site/docs/getting-started.md",permalink:"/verse-developer/docs/getting-started",sidebar:"tutorials_examples",next:{title:"Your First Application",permalink:"/verse-developer/docs/your-first-application"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following tutorials and exampes are here to give you a better understanding of the functionality that Verse Extensibility has to offer."),Object(o.b)("p",null,"You can download the example directory ahead of time ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src"}),"here"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Things to Note:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Notice that ",Object(o.b)("inlineCode",{parentName:"li"},"${extensionPath}")," is used at the base URL for all sample web applications in the examples. Follow the ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"./development"}),"Development Docs"))," to gain a better understanding around how this string template will be replaced with a fully-qualified URL when the application is loaded into the broswer."),Object(o.b)("li",{parentName:"ul"},"Configure the ",Object(o.b)("inlineCode",{parentName:"li"},"matches")," property in the ",Object(o.b)("inlineCode",{parentName:"li"},"manifest.json")," to include your organization's domain. It may be useful to reference ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"./development#the-manifest"}),"The Manifest"))," configuration section of the development docs."),Object(o.b)("li",{parentName:"ul"},"Resources used by the application need to be added to the ",Object(o.b)("inlineCode",{parentName:"li"},"manifest.json"),"'s ",Object(o.b)("inlineCode",{parentName:"li"},"web_accessible_resources")," array"),Object(o.b)("li",{parentName:"ul"},"Production ready applications will need to be served from a real web server")))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);