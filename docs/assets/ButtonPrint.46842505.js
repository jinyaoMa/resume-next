import{o as n,c as s,r as l,n as i}from"./app.fe5e2ee9.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const d={name:"ButtonPrint",props:["blackNwhite"],computed:{customStyle(){return this.blackNwhite?{borderColor:this.$colors.text,color:this.$colors.text,backgroundColor:this.$colors.text_o}:{borderColor:this.$colors.secondary,color:this.$colors.text_o,backgroundColor:this.$colors.secondary}}},methods:{printme(){window.onbeforeprint=()=>{document.querySelector(":root").classList.remove("dark"),this.blackNwhite&&document.body.classList.add("blackNwhite"),document.body.style.display="flex",document.body.style.minHeight="100vh",document.body.innerHTML=document.querySelector(".resume").innerHTML},window.onafterprint=()=>{window.location.reload()},window.print()}}};function a(o,t,u,m,p,e){return n(),s("button",{class:"button-print",onClick:t[0]||(t[0]=(...r)=>e.printme&&e.printme(...r)),style:i(e.customStyle)},[l(o.$slots,"default")],4)}var b=c(d,[["render",a]]);export{b as default};