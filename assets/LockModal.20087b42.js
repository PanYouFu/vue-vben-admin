import{d as e,a as s,u as i,c as r,du as t,k as o,r as a,o as d,f as m,p as n,g as p,t as l,q as c,m as j}from"./index.8a947221.js";import{_ as f,b as u}from"./useModal.b05e4604.js";import{f as b}from"./BasicForm.205370b0.js";import{u as x}from"./useForm.5e8ab938.js";import{h as g}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./useTimeout.4ab89dd3.js";import"./useWindowSizeFn.0acae6c2.js";import"./ScrollContainer.7c8aaa6b.js";import"./index.02b8894f.js";import"./domUtils.e0b91801.js";import"./RightOutlined.d3306906.js";/* empty css              */import"./useScrollTo.a0f2ab62.js";import"./FullscreenOutlined.88a165f5.js";import"./isEqual.222c6e0f.js";import"./_baseIsEqual.97cc6b34.js";import"./index.f1773ae9.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./index.b59597c9.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.07496caf.js";import"./isEqual.563532de.js";import"./identity.e5918e80.js";import"./toString.861a9ae4.js";import"./_baseProperty.0fd6dbfc.js";import"./toInteger.a25ecc80.js";import"./index.4c43253e.js";import"./index.2c4e33f6.js";import"./SearchOutlined.b19280fd.js";import"./EyeOutlined.3f7d1401.js";import"./index.6f85517b.js";import"./_baseSlice.6f42b8d2.js";import"./CheckOutlined.af985792.js";import"./DownOutlined.e3879b2b.js";import"./index.aad67b3f.js";import"./index.36897cf3.js";import"./index.c47a44f7.js";import"./UpOutlined.66b37b38.js";import"./index.c8ff2abb.js";import"./RedoOutlined.58d0f99d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./Tree.00294558.js";import"./util.2d6868a4.js";import"./useFormItem.cfc17307.js";import"./get.b2e237e3.js";import"./uuid.03279e2e.js";import"./index.831f8df6.js";import"./DeleteOutlined.ce0659f5.js";import"./index.a5da0e53.js";import"./index.6704907b.js";import"./Dropdown.16737c14.js";import"./index.cdde649d.js";import"./LeftOutlined.081aa009.js";import"./download.93ef06c4.js";import"./uniqBy.5d345c52.js";var h=e({name:"LockModal",components:{BasicModal:f,BasicForm:b},setup(){const{t:e}=s(),{prefixCls:a}=i("header-lock-modal"),d=r((()=>{var e;return null==(e=o.getUserInfoState)?void 0:e.realName})),[m,{closeModal:n}]=u(),[p,{validateFields:l,resetFields:c}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:a,getRealName:d,register:m,registerForm:p,handleLock:async function(){const e=(await l()).password;n(),t.commitLockInfoState({isLock:!0,pwd:e}),await c()},headerImg:g}}});h.render=function(e,s,i,r,t,o){const f=a("BasicForm"),u=a("a-button"),b=a("BasicModal");return d(),m(b,j({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:n((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),p("p",{class:`${e.prefixCls}__header-name`},l(e.getRealName),3)],2),p(f,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(u,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:n((()=>[c(l(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default h;