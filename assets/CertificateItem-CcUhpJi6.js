import{_ as u,u as f,o as i,c as o,a as r,t as c,b as l,w as v,v as C,d,e as y}from"./index-uNuJ3sOS.js";import{d as h}from"./fileHandlingFunctions-CRZpaiQj.js";const I={class:"cert_item"},b={key:0},k={class:"row"},w={class:"cert_content"},B=["name","id","placeholder","required","aria-invalid"],g={key:0},q={class:"cert_download"},x=["disabled"],$={key:0,class:"caption"},N={__name:"CertificateItem",props:{cert:{type:Object,required:!0}},setup(e){const a=f(),s=e;function n(){return a.checkAriaInvalidCertContent(a.getCertById(s.cert.id).content,s.cert.type)}return(V,t)=>(i(),o("div",I,[r("h3",null,c(e.cert.title),1),e.cert.required?(i(),o("p",b,t[2]||(t[2]=[r("em",null,"This field is required to merge complete chain.",-1)]))):l("",!0),r("div",k,[r("div",w,[v(r("textarea",{class:"monospaced","onUpdate:modelValue":t[0]||(t[0]=m=>d(a).getCertById(e.cert.id).content=m),name:e.cert.name,id:e.cert.id,rows:"4",placeholder:e.cert.placeholder,required:e.cert.required,"aria-invalid":n()},null,8,B),[[C,d(a).getCertById(e.cert.id).content]]),n()===!0?(i(),o("small",g,"Please enter valid data.")):l("",!0)]),r("div",q,[r("button",{onClick:t[1]||(t[1]=m=>d(h)(d(a).getCertById(e.cert.id).content,`${d(a).domainName}.${e.cert.name}`,e.cert.format)),disabled:n()===!0||n()===void 0}," Download in ."+c(e.cert.format)+" format ",9,x),n()===!1?(i(),o("div",$,[t[3]||(t[3]=y(" Filename: ")),t[4]||(t[4]=r("br",null,null,-1)),r("code",null,c(`${d(a).domainName}.${e.cert.name}.${e.cert.format}`),1)])):l("",!0)])])]))}},F=u(N,[["__scopeId","data-v-0c67e4d1"]]);export{F as default};