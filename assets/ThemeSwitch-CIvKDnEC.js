import{o as t,c as s,a as l,_ as i,r as m,e as p,h as v,i as r,n as c,u}from"./index-BaWAoFCT.js";const _={xmlns:"http://www.w3.org/2000/svg",fill:"#1C274C",viewBox:"0 0 24 24"};function f(n,e){return t(),s("svg",_,e[0]||(e[0]=[l("path",{d:"M2 12C2 6.477 6.477 2 12 2c.463 0 .54.693.143.933a6.5 6.5 0 1 0 8.924 8.924c.24-.396.933-.32.933.143 0 1.138-.19 2.231-.54 3.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.54A10 10 0 0 1 2 12M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zM8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432c.125.049.223.148.272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274z"},null,-1),l("path",{d:"M16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"},null,-1)]))}const w={render:f},M={xmlns:"http://www.w3.org/2000/svg",fill:"#1C274C",viewBox:"0 0 24 24"};function k(n,e){return t(),s("svg",M,e[0]||(e[0]=[l("path",{"fill-rule":"evenodd",d:"M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75","clip-rule":"evenodd"},null,-1),l("path",{d:"M6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z"},null,-1),l("path",{"fill-rule":"evenodd",d:"M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75","clip-rule":"evenodd"},null,-1)]))}const g={render:k},x={__name:"ThemeSwitch",setup(n){const e=m(!1),o=p(()=>e.value?"dark":"light"),h=()=>{const a=document.querySelector("html");e.value?a.setAttribute("data-theme","light"):a.setAttribute("data-theme","dark"),e.value=!e.value};return v(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)").matches;e.value=a,document.querySelector("html").setAttribute("data-theme",a?"dark":"light")}),(a,d)=>(t(),s("button",{class:"theme_switcher",onClick:h},[e.value?(t(),r(u(g),{key:0,class:c(o.value)},null,8,["class"])):(t(),r(u(w),{key:1,class:c(o.value)},null,8,["class"]))]))}},H=i(x,[["__scopeId","data-v-0d5d7528"]]);export{H as default};
