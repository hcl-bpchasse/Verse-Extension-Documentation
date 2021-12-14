(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(88)),i={id:"faq",title:"FAQ"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How do I load my application in Verse?",source:"@site/docs/faq.md",permalink:"/Verse-Extension-Documentation/docs/faq"},p=[{value:"How do I load my application in Verse?",id:"how-do-i-load-my-application-in-verse",children:[]},{value:"Why won&#39;t my application load?",id:"why-wont-my-application-load",children:[]},{value:"Why doesn&#39;t my application open in a new window?",id:"why-doesnt-my-application-open-in-a-new-window",children:[]}],s={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"how-do-i-load-my-application-in-verse"},"How do I load my application in Verse?"),Object(a.b)("h4",{id:"for-testing--development"},"For Testing & Development"),Object(a.b)("p",null,"It can be useful to test your application locally before deploying for production use. The ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"./development"}),"Deploying for Development"))," docs will help you get started."),Object(a.b)("h4",{id:"deploy-for-production"},"Deploy for Production"),Object(a.b)("p",null,"If your application is ready for production use then, use the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"./domino-server-deployment"}),"Domino Server Deployment"))," documentation to deploy."),Object(a.b)("h3",{id:"why-wont-my-application-load"},"Why won't my application load?"),Object(a.b)("h4",{id:"did-you-add-your-organizations-verse-domain-to-the-manifestjson"},"Did you add your organization's Verse domain to the manifest.json"),Object(a.b)("p",null,"The manifest.json requires a ",Object(a.b)("inlineCode",{parentName:"p"},"matches")," attribute that takes an array of URL strings. For the extension to run on Verse, you must add your organizations domain name to the array. "),Object(a.b)("h4",{id:"check-your-application-for-trailing-commas-andor-syntax-errors"},"Check your application for trailing commas and/or syntax errors"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"applications.json")," will not be parsed correctly if there are trailing commas or other syntax errors. Check your browser's console log to check for error messages. If you are testing your application locally, check the loaded extension for any errors."),Object(a.b)("h4",{id:"are-your-resources-being-served-and-linked-to-correctly"},"Are your resources being served and linked to correctly"),Object(a.b)("p",null,"If your application is using resources served via a web-server, be sure the web server is working properly and that the specified URL is correct."),Object(a.b)("h3",{id:"why-doesnt-my-application-open-in-a-new-window"},"Why doesn't my application open in a new window?"),Object(a.b)("h4",{id:"did-you-put-the-correct-window_features-attribute-on-the-extension"},"Did you put the correct ",Object(a.b)("inlineCode",{parentName:"h4"},"window_features")," attribute on the extension"),Object(a.b)("p",null,"Make sure you add the ",Object(a.b)("inlineCode",{parentName:"p"},"target=_blank")," attribute to force links to open in a new Window."),Object(a.b)("h4",{id:"are-you-using-a-mac-with-your-browser-in-fullscreen"},"Are you using a Mac with your browser in ",Object(a.b)("inlineCode",{parentName:"h4"},"fullscreen")),Object(a.b)("p",null,"There is a known issue on Macs where, when the browser is open in ",Object(a.b)("strong",{parentName:"p"},"fullscreen"),", new windows are forced to open in a new tab instead."))}l.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,y=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(y,c(c({ref:n},s),{},{components:t})):o.a.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);