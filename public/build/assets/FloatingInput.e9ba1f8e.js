import{i as o,e as d}from"./app.c91643f5.js";const n=["type","value","disabled"],s={__name:"FloatingInput",props:{type:{type:String,default:"text"},for:{type:[String,Number],default:null},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:l}){const t=a,r=e=>{l("update:modelValue",e.target.value)};return(e,p)=>(o(),d("input",{type:t.type,value:e.$attrs.modelValue,onInput:r,disabled:t.disabled,class:"peer ring-0 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed border-1 py-2 px-3 placeholder-transparent rounded-lg w-full border-gray-400 dark:border-gray-600 text-gray-900 bg-transparent focus:border-blue-500",placeholder:"Input Field"},null,40,n))}};export{s as _};
