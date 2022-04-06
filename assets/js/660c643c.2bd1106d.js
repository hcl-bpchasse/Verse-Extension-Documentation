"use strict";(self.webpackChunkverse_developer=self.webpackChunkverse_developer||[]).push([[258],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,u=c["".concat(d,".").concat(h)]||c[h]||m[h]||o;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8873:function(e,t,n){n.d(t,{A:function(){return o}});var i=n(7294),a=n(4996),o=function(e){var t=e.path,n=i.useState(!1),o=n[0],r=n[1],s=i.useState({}),d=s[0],l=s[1],p=i.useRef(null),m=function(e){e.preventDefault(),r(!o)},c=function(e){o&&(e.preventDefault(),r(!1))};return i.useEffect((function(){return document.body.addEventListener("keydown",c),function(){document.body.removeEventListener("keydown",c)}}),[]),i.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];o&&p.current?(document.body.setAttribute("style","overflow:hidden;"),l({top:e.offsetTop})):(document.body.removeAttribute("style"),p.current.focus(),l({}))}),[o]),i.createElement("div",{onKeyPress:m,onClick:m,className:o?"expandable-container expanded":"expandable-container",ref:p,style:d},i.createElement("img",{tabIndex:"0",className:o?"image image-expanded":"image",src:(0,a.Z)(t)}))}},4796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=n(8873),s=["components"],d={id:"modify-on-send",title:"Modify On Send"},l=void 0,p={unversionedId:"modify-on-send",id:"modify-on-send",title:"Modify On Send",description:"With an User Interface",source:"@site/docs/modify-on-send.md",sourceDirName:".",slug:"/modify-on-send",permalink:"/Verse-Extension-Documentation/docs/modify-on-send",tags:[],version:"current",frontMatter:{id:"modify-on-send",title:"Modify On Send"},sidebar:"tutorials_examples",previous:{title:"Hook Before Send",permalink:"/Verse-Extension-Documentation/docs/hook-before-send"},next:{title:"Live Text Widget",permalink:"/Verse-Extension-Documentation/docs/live-text-widget"}},m={},c=[{value:"With an User Interface",id:"with-an-user-interface",level:2},{value:"Add the Extension",id:"add-the-extension",level:3},{value:"Extension Properties",id:"extension-properties",level:4},{value:"Test it out",id:"test-it-out",level:3},{value:"How it Works",id:"how-it-works",level:3},{value:"Without an User Interface",id:"without-an-user-interface",level:2},{value:"Add the Extension",id:"add-the-extension-1",level:3},{value:"Extension Properties",id:"extension-properties-1",level:4},{value:"Test it out",id:"test-it-out-1",level:3},{value:"How it Works",id:"how-it-works-1",level:3}],h={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"with-an-user-interface"},"With an User Interface"),(0,o.kt)("p",null,"This sample application adds one extension to the ",(0,o.kt)("inlineCode",{parentName:"p"},"applications.json")," extension array, a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../extension-points#modify-on-send"},"Modify On Send"))," extension. You can use this extension to present the user with a UI as well as (optionally) modify the message before it is sent."),(0,o.kt)("p",null,"View this extension's source ","*","*",(0,o.kt)("a",{parentName:"p",href:"https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/with-ui"},"here"),"."),(0,o.kt)("h3",{id:"add-the-extension"},"Add the Extension"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    name: "ModifyOnSend",\n    title: "ModifyOnSend",\n    description:\n      "This sample demonstrates using the ModifyOnSend extension point",\n    extensions: [\n      {\n        name: "Modify on Send",\n        type: "com.ibm.verse.ext.modifyOnSend",\n        title: "Modify the contents of mail",\n        payload: {\n          location: "embedded",\n          pattern: "\\\\[(PROTECTED|PRIVATE|CLASSIFIED|SECRET)\\\\](\\\\s*)",\n          url: "${extensionPath}/modify-on-send/with-ui/index.html",\n        },\n      },\n    ],\n    services: ["Verse"],\n  },\n];\n')),(0,o.kt)("h4",{id:"extension-properties"},"Extension Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"name"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of the extension")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"type"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The extension point (",(0,o.kt)("a",{parentName:"td",href:"../extension-points"},"List of Extension Points"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"title"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The title of the extension")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"location"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"embedded - Indicates that the extension will render a UI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"pattern"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"A regex to limit what subject modifications the extension can make")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"url"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The fully-qualified URL of your application")))),(0,o.kt)("h3",{id:"test-it-out"},"Test it out"),(0,o.kt)(r.A,{path:"samples/modify-on-send-with-ui.gif",mdxType:"Expandable"}),(0,o.kt)("h3",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../extension-points#modify-on-send"},"Modify On Send"))," extension example prompts the user to add a classificiation to the subject of each email being sent. Additionally, this extension appends a signature to the end of the message body. This can be useful to inject a disclaimer at the end of each message being sent."),(0,o.kt)("p",null,"The extension leverages the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../extension-data-api#mail-compose"},"Mail Compose data api")),", Thus, the sample web application has access to the mail's data context. The script, ",(0,o.kt)("inlineCode",{parentName:"p"},"modify-on-send/with-ui/script.js"),", handles the cross-document messaging ",(0,o.kt)("em",{parentName:"p"},"handshake")," to let Verse know that the extension is ready to receive data. When the sample web application receives a message event with the ",(0,o.kt)("inlineCode",{parentName:"p"},"verseApiType")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.message.modify.mail")," the data context is there as well. As always, it is good practice to confirm the ",(0,o.kt)("inlineCode",{parentName:"p"},"actionId")," to ensure the data you recieve is coming from the correct action; the ",(0,o.kt)("inlineCode",{parentName:"p"},"actionId")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.ext.action.modifyOnSend"),"."),(0,o.kt)("p",null,"For this tutorial, the user is presented with a simple UI that allows the user to pick from a list of classifications, or the user can choose to skip classifying the message. Once the user picks a selection, the selected classification is appended to the beginning of the original subject."),(0,o.kt)("p",null,"This extension specified a ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern")," which will restrict the modifications that can be made to the subject. There is one classification option that is not part of the acceptable pattern. If the user makes this selection, the message's subject will not be updated and the message will not be sent. If the user picks a valid classification, then the pattern check will indicate to Verse that the subject should be modified before the message is sent."),(0,o.kt)("p",null,"This extension also appends a simple sentence to the end of the mail message's body. This could be leveraged to automatically append a disclaimer statement at the end of all outgoing messages."),(0,o.kt)("p",null,"If the user selects to send the message without modifications, the message will be sent without any modifications having been made."),(0,o.kt)("p",null,"Since this is an embedded extension, the extension will not be automatically terminated after a period of time. This allows the end user ample time to interact with the UI being presented."),(0,o.kt)("h2",{id:"without-an-user-interface"},"Without an User Interface"),(0,o.kt)("p",null,"This sample application adds one extension to the ",(0,o.kt)("inlineCode",{parentName:"p"},"applications.json")," extension array, a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../extension-points#modify-on-send"},"Modify On Send"))," extension. You can use this extension to modify a message before it is sent, without presenting a UI to the end user.."),(0,o.kt)("p",null,"View this extension's source ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/no-ui"},"here")),"."),(0,o.kt)("h3",{id:"add-the-extension-1"},"Add the Extension"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    name: "ModifyOnSend",\n    title: "ModifyOnSend",\n    description:\n      "This sample demonstrates using the ModifyOnSend extension point",\n    extensions: [\n      {\n        name: "Modify on Send",\n        type: "com.ibm.verse.ext.modifyOnSend",\n        title: "Modify the contents of mail",\n        payload: {\n          url: "${extensionPath}/modify-on-send/no-ui/index.html",\n        },\n      },\n    ],\n    services: ["Verse"],\n  },\n];\n')),(0,o.kt)("h4",{id:"extension-properties-1"},"Extension Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"name"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of the extension")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"type"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The extension point (",(0,o.kt)("a",{parentName:"td",href:"../extension-points"},"List of Extension Points"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"title"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The title of the extension")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"url"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The fully-qualified URL of your application")))),(0,o.kt)("h3",{id:"test-it-out-1"},"Test it out"),(0,o.kt)(r.A,{path:"samples/modify-on-send-no-ui.gif",mdxType:"Expandable"}),(0,o.kt)("h3",{id:"how-it-works-1"},"How it Works"),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../extension-points#modify-on-send"},"Modify On Send"))," extension example modifies the subject of each email being sent without presenting any UI to the end user. Additionally, this extension appends a signature to the end of the message body. This can be useful to inject a disclaimer at the end of each message being sent."),(0,o.kt)("p",null,"The extension leverages the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../extension-data-api#mail-compose"},"Mail Compose data api")),". Thus, the sample web application has access to the mail's data context. The script, ",(0,o.kt)("inlineCode",{parentName:"p"},"modify-on-send/with-ui/script.js"),", handles the cross-document messaging ",(0,o.kt)("em",{parentName:"p"},"handshake")," to let Verse know that the extension is ready to receive data. When the sample web application receives a message event with the ",(0,o.kt)("inlineCode",{parentName:"p"},"verseApiType")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.message.modify.mail")," the data context is there as well. As always, it is good practice to confirm the ",(0,o.kt)("inlineCode",{parentName:"p"},"actionId")," to ensure the data you recieve is coming from the correct action; the ",(0,o.kt)("inlineCode",{parentName:"p"},"actionId")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.ext.action.modifyOnSend"),"."),(0,o.kt)("p",null,"For this tutorial, the extension will ignore messages being sent with the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"MODIFYONSEND"')," in the subject. If the subject does not contain ",(0,o.kt)("inlineCode",{parentName:"p"},'"MODIFYONSEND"'),", then the extension will modify the subject of the message to prepend ",(0,o.kt)("inlineCode",{parentName:"p"},'"[MODIFIED SUBJECT] "')," to the original subject."),(0,o.kt)("p",null,"This extension does not specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),". Therefore, the only restriction for the modified subject is that the modified subject must contain the original subject. This is due to the ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedSubjectMustContainOriginalSubject")," property having a default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"This extension also appends a simple sentence to the end of the mail message's body. This could be leveraged to automatically append a disclaimer statement at the end of all outgoing messages."),(0,o.kt)("p",null,"Once the extension has responded to Verse with ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.message.modify.mail")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.message.continue.send")," verseApiType (depending on whether or not the original subject contained ",(0,o.kt)("inlineCode",{parentName:"p"},"MODIFYONSEND"),"), the extension will be terminated by Verse and modifications will be handled appropriately based on the properties of the extension."))}u.isMDXComponent=!0}}]);