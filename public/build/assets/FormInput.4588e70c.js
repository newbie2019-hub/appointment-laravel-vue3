import{i as l,e as o,j as n,A as p,k as u,B as d,v as c}from"./app.56e246d3.js";const i=["type","value","disabled"],y={__name:"FloatingInput",props:{type:{type:String,default:"text"},for:{type:[String,Number],default:null},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const t=e,s=a=>{r("update:modelValue",a.target.value)};return(a,g)=>(l(),o("input",{type:t.type,value:a.$attrs.modelValue,onInput:s,disabled:t.disabled,class:"peer ring-0 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed border-2 p-2 placeholder-transparent rounded-lg w-full border-gray-400 dark:border-gray-600 text-gray-900 bg-transparent focus:border-blue-500",placeholder:"Input Field"},null,40,i))}},f=["for"],b={key:0,class:"mt-1 text-sm text-red-500"},h={__name:"FormInput",props:{error:{type:String,value:null},label:{type:String,value:"Placeholder"},for:{type:String,value:null}},setup(e){const r=e;return(t,s)=>(l(),o("div",null,[n("div",d({class:"relative"},t.$attrs),[p(t.$slots,"default"),n("label",{for:r.for,class:"bg-white px-1 text-gray-800 left-0 -top-3 scale-75 text-base duration-200 ease-in-out absolute peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-3 peer-focus:-top-2.5 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-blue-500"},u(e.label),9,f)],16),e.error?(l(),o("p",b,u(e.error),1)):c("",!0)]))}};export{h as _,y as a};
