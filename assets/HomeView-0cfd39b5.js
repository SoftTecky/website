import{_ as f,o as i,d as u,e as t,t as c,a as v,r as _,n as x,q as S,w as $,f as m,v as h,s as y,h as P,F as w,x as g,y as D,G as O}from"./index-3b260fdb.js";const T={class:"card mb-3"},V={class:"card-header"},I=["src"],E={class:"card-title"},k={class:"card-body"},B={class:"card-subtitle"},N={class:"text-muted"},L={class:"card-text"},M={class:"text-muted"},A={class:"card-text"},F={__name:"PostView",props:["post"],setup(r){const s=r;return(l,e)=>(i(),u("div",T,[t("div",V,[t("img",{class:"card-img-left",src:s.post.user.avatar},null,8,I),t("h5",E,c(s.post.title),1)]),t("div",k,[t("p",B,[t("small",N,c(s.post.user.name)+" "+c(s.post.user.lastname1)+" "+c(s.post.user.lastname2),1)]),t("p",L,[t("small",M,c(s.post.date),1)]),t("p",A,c(s.post.description),1)])]))}},G=f(F,[["__scopeId","data-v-4cf63e57"]]),Q={class:"card mb-3"},R={class:"card-body"},U=t("h5",{class:"card-title"},"Escribe una publicacion nueva",-1),q=["onSubmit"],H={class:"mb-3"},W=t("label",{for:"post-title",class:"form-label"},"Titulo",-1),j={class:"mb-3"},z=t("label",{for:"post-description",class:"form-label"},"Descripcion",-1),C=t("button",{type:"submit",class:"btn btn-primary"},"Publicar",-1),J={__name:"PostWritter",props:["onpost"],setup(r){const s=r,l=v(),e=_(""),o=_(""),a=_(new Date().toISOString()),n=x(S);n.onDone(()=>{e.value="",o.value="",a.value=new Date().toISOString(),s.onpost(),alert("Post creado")});const b=()=>{a.value=new Date().toISOString(),n.mutate({title:e.value,description:o.value,date:a.value,user_id:l.getId})};return(X,d)=>(i(),u("div",Q,[t("div",R,[U,t("form",{onSubmit:$(b,["prevent"])},[t("div",H,[W,m(t("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),type:"text",class:"form-control",id:"post-title",placeholder:"Titulo de la publicacion"},null,512),[[h,e.value]])]),t("div",j,[z,m(t("textarea",{"onUpdate:modelValue":d[1]||(d[1]=p=>o.value=p),class:"form-control",id:"post-description",rows:"3",placeholder:"Descripcion de la publicacion"},null,512),[[h,o.value]])]),C],40,q)])]))}},K={class:"p-1 py-3 col-12 col-md-8 col-lg-6 col-xl-5"},Z={__name:"HomeView",setup(r){v();const s=y(O),l=_([]);s.onResult(o=>{var a;l.value=(a=o.data)==null?void 0:a.posts});const e=()=>{s.refetch()};return(o,a)=>(i(),u("div",K,[P(J,{onpost:e}),(i(!0),u(w,null,g(l.value,n=>(i(),D(G,{key:n.post_id,post:n},null,8,["post"]))),128))]))}};export{Z as default};