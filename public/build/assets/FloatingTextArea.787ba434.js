import{i as a,e as l}from"./app.c75b8574.js";const o=["value"],d={__name:"FloatingTextArea",props:{type:{type:String,default:"text"},for:{type:[String,Number],default:null}},emits:["update:modelValue"],setup(n,{emit:t}){const r=e=>{t("update:modelValue",e.target.value)};return(e,u)=>(a(),l("textarea",{value:e.$attrs.modelValue,onInput:r,class:"peer ring-0 outline-none border-2 p-2 placeholder-transparent rounded-lg w-full border-gray-500 dark:border-gray-600 text-gray-900 bg-transparent focus:border-blue-500",placeholder:"Input Field"},null,40,o))}};export{d as _};
