import{r as l,N as r,o,b as s,j as i,z as c}from"./app.00439c91.js";const d=["value"],g={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup(t){const e=l(null);return r(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(a,u)=>(o(),s("input",{class:"border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:t.modelValue,onInput:u[0]||(u[0]=n=>a.$emit("update:modelValue",n.target.value)),ref_key:"input",ref:e},null,40,d))}},m={class:"block font-medium text-sm text-gray-700"},p={key:0},_={key:1},v={__name:"Label",props:["value"],setup(t){return(e,a)=>(o(),s("label",m,[t.value?(o(),s("span",p,i(t.value),1)):(o(),s("span",_,[c(e.$slots,"default")]))]))}};export{v as _,g as a};