import{a as i,o as s,c as o,b as a,t as r,g,n as d,F as p,e as h,f as m}from"./app.39bfc91e.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const b={name:"ResumeSection",props:["options"]},f={class:"resume-section-head__title"},$={key:0,class:"resume-section-head__time"},k={key:3};function v(e,S,t,z,B,R){const l=i("resume-section",!0),c=i("resume-paragraph"),_=i("resume-bullet");return s(),o("div",{class:"resume-section",style:d({marginTop:e.$dimensions.padding_small})},[a("div",{class:"resume-section-head",style:d({fontSize:e.$dimensions.size_subtitle,lineHeight:e.$dimensions.lheight_subtitle,paddingLeft:e.$dimensions.padding_small,borderTopWidth:e.$dimensions.size_border,borderBottomWidth:e.$dimensions.size_border})},[a("span",f,r(t.options.title),1),t.options.time?(s(),o("span",$,r(t.options.time),1)):g("",!0)],4),a("div",{class:"resume-section-body",style:d({paddingLeft:e.$dimensions.padding_small,paddingRight:e.$dimensions.padding_small})},[(s(!0),o(p,null,h(t.options.children,(n,u)=>(s(),o(p,{key:u},[n.$type=="section"?(s(),m(l,{key:0,options:n},null,8,["options"])):n.$type=="paragraph"?(s(),m(c,{key:1,options:n},null,8,["options"])):n.$type=="bullet"?(s(),m(_,{key:2,options:n},null,8,["options"])):(s(),o("span",k,r(n),1))],64))),128))],4)],4)}var C=y(b,[["render",v]]);export{C as default};