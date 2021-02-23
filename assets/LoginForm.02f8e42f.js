import{g as e,m as t,I as a,d as r,B as o,a as l,u as s,h as n,i,c,j as u,k as d,l as m,n as f,r as g,o as p,f as b,w as y,v,p as h,q as j,t as w,F as S}from"./index.8a947221.js";import{C as F}from"./index.aad67b3f.js";import{F as C}from"./index.f1773ae9.js";import"./index.b59597c9.js";import{I as x}from"./index.2c4e33f6.js";import{D as _}from"./index.6704907b.js";import{C as O,R as L}from"./index.4c43253e.js";import{_ as k,u as I,a as E,L as D,b as P}from"./LoginFormTitle.88573d9b.js";import{G as R}from"./GithubFilled.92007cf8.js";import{W as T,A}from"./WechatFilled.187c871a.js";import"./vendor.3b1829c7.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./findIndex.07496caf.js";import"./isEqual.563532de.js";import"./identity.e5918e80.js";import"./toString.861a9ae4.js";import"./_baseProperty.0fd6dbfc.js";import"./toInteger.a25ecc80.js";import"./responsiveObserve.c545f1cc.js";import"./SearchOutlined.b19280fd.js";import"./EyeOutlined.3f7d1401.js";var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"}}]},name:"google-circle",theme:"filled"};function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var B=function(r,o){var l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){G(e,t,a[t])}))}return e}({},r,o.attrs);return e(a,t(l,{icon:z}),null)};B.displayName="GoogleCircleFilled",B.inheritAttrs=!1;var M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"}}]},name:"twitter-circle",theme:"filled"};function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var W=function(r,o){var l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){N(e,t,a[t])}))}return e}({},r,o.attrs);return e(a,t(l,{icon:M}),null)};W.displayName="TwitterCircleFilled",W.inheritAttrs=!1;var U=r({name:"LoginForm",components:{[O.name]:O,[L.name]:L,Checkbox:F,Button:o,Form:C,FormItem:C.Item,Input:x,Divider:_,LoginFormTitle:k,InputPassword:x.Password,GithubFilled:R,WechatFilled:T,AlipayCircleFilled:A,GoogleCircleFilled:B,TwitterCircleFilled:W},setup(){const{t:e}=l(),{notification:t}=f(),{prefixCls:a}=s("login"),{setLoginState:r,getLoginState:o}=I(),{getFormRules:g}=E(),p=n(null),b=n(!1),y=n(!1),v=i({account:"vben",password:"123456"}),{validForm:h}=P(p),j=c((()=>u(o)===D.LOGIN));return{t:e,prefixCls:a,formRef:p,formData:v,getFormRules:g,rememberMe:y,handleLogin:async function(){const a=await h();if(a)try{b.value=!0;const r=await d.login(m({password:a.password,username:a.account}));r&&t.success({message:e("sys.login.loginSuccessTitle"),description:`${e("sys.login.loginSuccessDesc")}: ${r.realName}`,duration:3})}finally{b.value=!1}},loading:b,setLoginState:r,LoginStateEnum:D,getShow:j}}});U.render=function(t,a,r,o,l,s){const n=g("LoginFormTitle"),i=g("Input"),c=g("FormItem"),u=g("InputPassword"),d=g("Checkbox"),m=g("ACol"),f=g("Button"),F=g("ARow"),C=g("Divider"),x=g("GithubFilled"),_=g("WechatFilled"),O=g("AlipayCircleFilled"),L=g("GoogleCircleFilled"),k=g("TwitterCircleFilled"),I=g("Form");return p(),b(S,null,[y(e(n,{class:"enter-x"},null,512),[[v,t.getShow]]),y(e(I,{class:"p-4 enter-x",model:t.formData,rules:t.getFormRules,ref:"formRef"},{default:h((()=>[e(c,{name:"account",class:"enter-x"},{default:h((()=>[e(i,{size:"large",value:t.formData.account,"onUpdate:value":a[1]||(a[1]=e=>t.formData.account=e),placeholder:t.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),e(c,{name:"password",class:"enter-x"},{default:h((()=>[e(u,{size:"large",visibilityToggle:"",value:t.formData.password,"onUpdate:value":a[2]||(a[2]=e=>t.formData.password=e),placeholder:t.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),e(F,{class:"enter-x"},{default:h((()=>[e(m,{span:12},{default:h((()=>[e(c,null,{default:h((()=>[e(d,{checked:t.rememberMe,"onUpdate:checked":a[3]||(a[3]=e=>t.rememberMe=e),size:"small"},{default:h((()=>[j(w(t.t("sys.login.rememberMe")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),e(m,{span:12},{default:h((()=>[e(c,{style:{"text-align":"right"}},{default:h((()=>[e(f,{type:"link",size:"small",onClick:a[4]||(a[4]=e=>t.setLoginState(t.LoginStateEnum.RESET_PASSWORD))},{default:h((()=>[j(w(t.t("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),e(c,{class:"enter-x"},{default:h((()=>[e(f,{type:"primary",size:"large",block:"",onClick:t.handleLogin,loading:t.loading},{default:h((()=>[j(w(t.t("sys.login.loginButton")),1)])),_:1},8,["onClick","loading"])])),_:1}),e(F,{class:"enter-x"},{default:h((()=>[e(m,{span:7},{default:h((()=>[e(f,{block:"",onClick:a[5]||(a[5]=e=>t.setLoginState(t.LoginStateEnum.MOBILE))},{default:h((()=>[j(w(t.t("sys.login.mobileSignInFormTitle")),1)])),_:1})])),_:1}),e(m,{span:8,offset:1},{default:h((()=>[e(f,{block:"",onClick:a[6]||(a[6]=e=>t.setLoginState(t.LoginStateEnum.QR_CODE))},{default:h((()=>[j(w(t.t("sys.login.qrSignInFormTitle")),1)])),_:1})])),_:1}),e(m,{span:7,offset:1},{default:h((()=>[e(f,{block:"",onClick:a[7]||(a[7]=e=>t.setLoginState(t.LoginStateEnum.REGISTER))},{default:h((()=>[j(w(t.t("sys.login.registerButton")),1)])),_:1})])),_:1})])),_:1}),e(C,{class:"enter-x"},{default:h((()=>[j(w(t.t("sys.login.otherSignIn")),1)])),_:1}),e("div",{class:["flex justify-evenly enter-x",`${t.prefixCls}-sign-in-way`]},[e(x),e(_),e(O),e(L),e(k)],2)])),_:1},8,["model","rules"]),[[v,t.getShow]])],64)};export default U;