(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{101:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(96),i=n(93),s=n(48),c=n.n(s),l=37,b=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,p=e.values,d=e.groupId,u=Object(r.a)(),m=u.tabGroupChoices,h=u.setTabGroupChoices,f=Object(a.useState)(s),j=f[0],O=f[1],v=Object(a.useState)(!1),g=v[0],y=v[1];if(null!=d){var w=m[d];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=d&&h(d,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},E=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},102:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(88)),i=n(92),s=(n(101),n(102),{id:"development",title:"Loading an Application for Development"}),c={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Loading an Application for Development",description:"The Verse Extension API is heavily influenced by the Chrome/Firefox Web Extension API. This is used to emulate deploying an application without needing to acutally deploy with Domino which streamlines development and testing. If you don't have an application ready, please reference the Getting Started tutorial.",source:"@site/docs/development.md",permalink:"/Verse-Extension-Documentation/docs/development",sidebar:"docs",previous:{title:"Extension Data API",permalink:"/Verse-Extension-Documentation/docs/extension-data-api"},next:{title:"Best Security Practices",permalink:"/Verse-Extension-Documentation/docs/best-security-practices"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration",id:"configuration",children:[{value:"The Manifest",id:"the-manifest",children:[]},{value:"The Scripts",id:"the-scripts",children:[]},{value:"Using Web Accessible Resources",id:"using-web-accessible-resources",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Installing to Chrome (Latest)",id:"installing-to-chrome-latest",children:[]},{value:"Installing to Firefox (Latest)",id:"installing-to-firefox-latest",children:[]}]},{value:"Check it Out!",id:"check-it-out",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Verse Extension API is heavily influenced by the Chrome/Firefox Web Extension API. This is used to emulate ",Object(r.b)("em",{parentName:"p"},"deploying")," an application without needing to acutally deploy with Domino which streamlines development and testing. If you don't have an application ready, please reference the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://git.cwp.pnp-hcl.com/IBM-Verse/verse-developer-chrome-ext/tree/master"}),"Getting Started"))," tutorial."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"There are a few things you will need to get started:  "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Google Chrome or Firefox (Version 49.0 or greater)"),Object(r.b)("li",{parentName:"ol"},"Your custom application or a local copy of the Verse Developer Extension Demo ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://git.cwp.pnp-hcl.com/IBM-Verse/verse-developer-chrome-ext/tree/master"}),"source code")),"."),Object(r.b)("li",{parentName:"ol"},"contentscript.js and page.js from ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://git.cwp.pnp-hcl.com/IBM-Verse/verse-developer-chrome-ext/tree/master/src"}),"here"))," ",Object(r.b)("em",{parentName:"li"},"(Only if you are using your custom application)"))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Some files will need to be configured and added to your application directory for successful deployment."),Object(r.b)("h3",{id:"the-manifest"},"The Manifest"),Object(r.b)("p",null,"The first file you will need to configure before deploying is the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json"),". The manifest is a uniform file, used for both Chrome and Firefox web add-ons, to specify some basic application properties such as the name, version, and URL(s) of where the extension should run. For more information take a look at the, ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json"),", ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#Browser_compatibility"}),"Browser Compatibility Documentation"),".")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Demo manifest.json:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "name": "HCL Verse Developer Browser Extension",\n  "version": "1.0.0",\n  // Leave this property alone\n  "manifest_version": 2,\n  // This attribute is browser specific to Firefox and only necessary for browser versions < v48.0\n  "applications": { "gecko": {"id": "verse_dev_extension@hcl.com", "strict_min_version": "45.0"} },\n  "content_scripts": [ {\n    // Add the relative path to your contentscript.js file\n    "js": [ "/scripts/contentscript.js"],\n    "matches": [\n      // These should match your organization\'s URL\n      "https://mail.notes.na.collabserv.com/verse*",\n      "https://mail.notes.ap.collabserv.com/verse*",\n      "https://mail.notes.ce.collabserv.com/verse*"\n    ],\n    "run_at": "document_start"\n  }],\n  "web_accessible_resources": [\n    "/scripts/page.js",\n    "applications.json",\n    // Add additional resources here\n  ]\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"matches")," property contains an array of URLs that tell the browser where the extension should run; more specifically, what pages the ",Object(r.b)("inlineCode",{parentName:"p"},"contentscript.js")," file should be injected into. ",Object(r.b)("strong",{parentName:"p"},"The field should be updated to match that of your own Verse URL"),". The ",Object(r.b)("strong",{parentName:"p"},"*")," you see at the end of the example URLs mean ",Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},"matching 0 or more characters")),". It is recommended to add the star, otherwise, the extension will not run on pages of Verse where the URL does not match, exactly, one of the specified URLS. In addition, a comma should be added to the end of each URL, except for the last one."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("em",{parentName:"p"},"Trailing commas in the ",Object(r.b)("inlineCode",{parentName:"em"},"manifest.json")," and ",Object(r.b)("inlineCode",{parentName:"em"},"applications.json")," can result in parsing errors, causing your application to fail to load.")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"web_accessible_resources")," field is an array of paths and should include the ",Object(r.b)("inlineCode",{parentName:"p"},"applications.json")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"page.js")," file. Other resources including images, HTML, CSS, and JavaScript can be specified in the array, making them accessible to the browser. You can read more about the ",Object(r.b)("inlineCode",{parentName:"p"},"web_accessible_resources")," property ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources"}),"here"),".")),Object(r.b)("h3",{id:"the-scripts"},"The Scripts"),Object(r.b)("p",null,"There are two important scripts required to load the ",Object(r.b)("inlineCode",{parentName:"p"},"applications.json"),". They should be added, ",Object(r.b)("strong",{parentName:"p"},"unaltered"),", to your project directory and included in the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," exactly as shown in the above example. Their purpose is to mimic the initialization behavior of the ",Object(r.b)("strong",{parentName:"p"},"WidgetRegistry"),", which is used to load applications in Verse.  "),Object(r.b)("p",null,"Scripts:  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"content.js"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"page.js")),"  ")),Object(r.b)("h3",{id:"using-web-accessible-resources"},"Using Web Accessible Resources"),Object(r.b)("p",null,"For development purposes, additional application resources can be easily accessed from your web extension's ",Object(r.b)("inlineCode",{parentName:"p"},"web_accessible_resources")," by using ",Object(r.b)("inlineCode",{parentName:"p"},"${extensionPath}")," as the base url of the path. "),Object(r.b)("p",null,"Before the ",Object(r.b)("inlineCode",{parentName:"p"},"applications.json")," is loaded into Verse, it is parsed and all instances of ",Object(r.b)("inlineCode",{parentName:"p"},"${extensionPath}")," are replaced with a fully-qualified URL. For this to work correctly, any resources accessed this way must be declared in the ",Object(r.b)("inlineCode",{parentName:"p"},"web_accessible_resources")," array of the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example Extension linking to Additional Resources:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"name": "Sample Widget Using an HTTP Served Resource",\n"type": "com.ibm.verse.ext.widget",\n"payload": {\n  // Use the port number assigned by the web server application\n  "url": "${extensionPath}/samples/actions.html",\n  "features": [\n    "core"\n  ],\n  "actions": [\n    {\n     //Other action properties Ex. \n    },\n  ]\n}\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When deploying for production use, your resources will need to be hosted via a web server and the ",Object(r.b)("inlineCode",{parentName:"p"},"${extensionPath}")," shortcut must be updated according otherwise, your resources will not load."))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Now that the necessary files have been added and configured, you can load your extension into the browser using Chrome or Firefox."),Object(r.b)("h3",{id:"installing-to-chrome-latest"},"Installing to Chrome (Latest)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to ",Object(r.b)("inlineCode",{parentName:"li"},"chrome://extensions")," inside of Chrome"),Object(r.b)("li",{parentName:"ol"},"Make sure ",Object(r.b)("strong",{parentName:"li"},"Developer Mode")," is toggled on, in the upper right corner of the browser"),Object(r.b)("li",{parentName:"ol"},"Select the ",Object(r.b)("strong",{parentName:"li"},"Load Unpacked")," option"),Object(r.b)("li",{parentName:"ol"},"Select the root folder containing the ",Object(r.b)("inlineCode",{parentName:"li"},"manifest.json")," (in this example it is in the ",Object(r.b)("inlineCode",{parentName:"li"},"/src")," folder)")),Object(r.b)(i.a,{path:"deployment/load-to-chrome.gif",mdxType:"Expandable"}),Object(r.b)("h3",{id:"installing-to-firefox-latest"},"Installing to Firefox (Latest)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to ",Object(r.b)("inlineCode",{parentName:"li"},"about:debugging")," and select ",Object(r.b)("em",{parentName:"li"},"This Firefox")," from the left panel"),Object(r.b)("li",{parentName:"ol"},"Select the ",Object(r.b)("strong",{parentName:"li"},"Load Temporary Add-on")," option"),Object(r.b)("li",{parentName:"ol"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"manifest.json")," file (",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"not its containing folder")),")")),Object(r.b)(i.a,{path:"deployment/load-to-firefox.gif",mdxType:"Expandable"}),Object(r.b)("h2",{id:"check-it-out"},"Check it Out!"),Object(r.b)("p",null,"After following one of the above methods, reload Verse to test your new application. "),Object(r.b)(i.a,{path:"deployment/mail_compose_action.gif",mdxType:"Expandable"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you deployed your own custom application then look in the Verse UI for your own changes"),". The demo application is a Widget extension type that adds a new action to a dropdown menu in the Mail Compose View and an action to back of the Verse people business card. Clicking on the application opens the specified HTML file that is served via the local web server. This widget, also, leverages the ",Object(r.b)("strong",{parentName:"p"},"Verse Data API")," to receive useful Verse information in the browser (Ex. a business card action extension sends the person\u2019s name, email, phone, etc.)."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To learn more about the different types of extensions that Verse has to offer head over the the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"./what-is-an-extension"}),"Extension Documentation")),"."))))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var a=n(0),o=n(20);t.a=function(){var e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(89),o=n(91);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,s=void 0!==i&&i,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+b:b}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},91:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a),r=(n(47),n(90)),i=function(e){var t=e.path,n=o.a.useState(!1),a=n[0],i=n[1],s=o.a.useState({}),c=s[0],l=s[1],b=o.a.useRef(null),p=function(e){e.preventDefault(),i(!a)},d=function(e){a&&(e.preventDefault(),i(!1))};return o.a.useEffect((function(){return document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}}),[]),o.a.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];a&&b.current?(document.body.setAttribute("style","overflow:hidden;"),l({top:e.offsetTop})):(document.body.removeAttribute("style"),b.current.focus(),l({}))}),[a]),o.a.createElement("div",{onKeyPress:p,onClick:p,className:a?"expandable-container expanded":"expandable-container",ref:b,style:c},o.a.createElement("img",{tabIndex:"0",className:a?"image image-expanded":"image",src:Object(r.a)(t)}))}},93:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},95:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},96:function(e,t,n){"use strict";var a=n(0),o=n(95);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);