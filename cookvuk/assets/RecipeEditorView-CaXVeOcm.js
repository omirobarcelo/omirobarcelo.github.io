import{d as h,r as a,e as y,b as R,o as S,c as w,a as e,t as f,i as V,j as i,v as n,g as x,k as E,p as T,h as I,l as D,_ as U}from"./index-Dh1EO7pr.js";import{c as l}from"./cookbook-entry.store-DyoxPnd6.js";const d=c=>(T("data-v-8325bfb1"),c=c(),I(),c),q={class:"layout-container"},N={class:"page"},B={class:"mb-3"},C={class:"mb-3"},M=d(()=>e("label",{for:"date",class:"label"},"Date",-1)),j={class:"mb-3"},A=d(()=>e("label",{for:"name",class:"label"},"Recipe Name",-1)),O={class:"mb-3"},W=d(()=>e("label",{for:"cookingTime",class:"label"},"Cooking Time (minutes)",-1)),z={class:"mb-3"},F=d(()=>e("label",{for:"ingredients",class:"label"},"Ingredients",-1)),G={class:"mb-3"},H=d(()=>e("label",{for:"steps",class:"label"},"Steps",-1)),J={type:"submit",class:"btn primary"},K=h({__name:"RecipeEditorView",setup(c){const b=x(),k=E(),_=a(new Date().toISOString().split("T")[0]),r=a(""),u=a(null),p=a(""),m=a(""),v=y(()=>!!b.params.id);R(async()=>{if(v.value){const o=b.params.id;(l.cookbookEntry==null||l.cookbookEntry.id!==o)&&await l.load(o);const s=l.cookbookEntry;if(s!=null){const t=s.history[0].recipe;r.value=t.name,u.value=t.cookingTime,p.value=t.ingredients,m.value=t.steps}}});const g=()=>{const o={date:new Date(_.value),recipe:{name:r.value,cookingTime:u.value,ingredients:p.value,steps:m.value}};(v.value?l.addVersion(o):D.addRecipe(o)).then(()=>k.push({name:"home"}))};return(o,s)=>(S(),w("div",q,[e("main",N,[e("h1",B,f(v.value?"Add Note":"Write New Recipe"),1),e("form",{onSubmit:V(g,["prevent"])},[e("div",C,[M,i(e("input",{type:"date",id:"date","onUpdate:modelValue":s[0]||(s[0]=t=>_.value=t),class:"input"},null,512),[[n,_.value]])]),e("div",j,[A,i(e("input",{type:"text",id:"name","onUpdate:modelValue":s[1]||(s[1]=t=>r.value=t),class:"input",required:""},null,512),[[n,r.value]])]),e("div",O,[W,i(e("input",{type:"number",id:"cookingTime","onUpdate:modelValue":s[2]||(s[2]=t=>u.value=t),class:"input",required:""},null,512),[[n,u.value]])]),e("div",z,[F,i(e("textarea",{id:"ingredients","onUpdate:modelValue":s[3]||(s[3]=t=>p.value=t),class:"textarea",required:""},null,512),[[n,p.value]])]),e("div",G,[H,i(e("textarea",{id:"steps","onUpdate:modelValue":s[4]||(s[4]=t=>m.value=t),class:"textarea",required:""},null,512),[[n,m.value]])]),e("button",J,f(v.value?"Save Recipe":"Create Recipe"),1)],32)])]))}}),Q=U(K,[["__scopeId","data-v-8325bfb1"]]);export{Q as default};