import{o,c as a,t as r,n as i}from"./app.f4f90635.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={name:"ResumeBullet",props:["options"],computed:{marginBottom(){return this.options.margin?this.$dimensions.margin_paragraph:0},hasLink(){return/http[s]?:\/\/[^\s|<|>]+/.test(this.options.content)},htmlContent(){let e=this.options.content+"",n=e.match(/http[s]?:\/\/[^\s|<|>]+/g);return n&&n.forEach(t=>{e=e.replace(t,`<a href="${t}" title="${t}">${t}</a>`)}),e}}},m=["data-style"],c=["innerHTML"],_={key:1};function u(e,n,t,h,d,s){return o(),a("div",{class:"resume-bullet",style:i({marginBottom:s.marginBottom,fontSize:e.$dimensions.size_paragraph}),"data-style":t.options.style},[s.hasLink?(o(),a("span",{key:0,innerHTML:s.htmlContent},null,8,c)):(o(),a("span",_,r(t.options.content),1))],12,m)}var y=l(p,[["render",u]]);export{y as default};
