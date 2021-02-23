var e=Object.assign;import{a as t,ac as s,d as o,u as l,c as a,r as n,o as r,f as i,F as c,aZ as u,m as d,p,q as f,t as g,s as h,g as b,h as w,cD as C,aj as k,aV as m,ak as v,j as D,ab as x,cE as y,l as $,cx as O,D as B,bv as P,bs as _,w as F,aP as T,i as j,cF as S,aa as L,cG as H,cH as V}from"./index.8a947221.js";import{D as A}from"./index.82f40d30.js";import{a as N,_ as q}from"./ScrollContainer.7c8aaa6b.js";import{A as E}from"./ArrowLeftOutlined.5c44f118.js";import{i as I}from"./isEqual.222c6e0f.js";const{t:M}=t(),R={confirmLoading:s.bool,showCancelBtn:s.bool.def(!0),cancelButtonProps:Object,cancelText:s.string.def(M("common.cancelText")),showOkBtn:s.bool.def(!0),okButtonProps:Object,okText:s.string.def(M("common.okText")),okType:s.string.def("primary"),showFooter:s.bool,footerHeight:{type:[String,Number],default:60}},z=e({isDetail:s.bool,title:s.string.def(""),loadingText:s.string,showDetailBack:s.bool.def(!0),visible:s.bool,loading:s.bool,maskClosable:s.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:s.bool,destroyOnClose:s.bool},R);var G=o({name:"BasicDrawerFooter",props:e(e({},R),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:s}=l("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:s,handleClose:function(){t("close")},getStyle:a((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});G.render=function(e,t,s,o,l,a){const b=n("a-button");return e.showFooter||e.$slots.footer?(r(),i("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?u(e.$slots,"footer",{key:1}):(r(),i(c,{key:0},[u(e.$slots,"insertFooter"),e.showCancelBtn?(r(),i(b,d({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:p((()=>[f(g(e.cancelText),1)])),_:1},16,["onClick"])):h("",!0),u(e.$slots,"centerFooter"),e.showOkBtn?(r(),i(b,d({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:p((()=>[f(g(e.okText),1)])),_:1},16,["type","onClick","loading"])):h("",!0),u(e.$slots,"appendFooter")],64))],6)):h("",!0)};var W=o({name:"BasicDrawerHeader",components:{BasicTitle:N,ArrowLeftOutlined:E},props:{isDetail:s.bool,showDetailBack:s.bool,title:s.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:s}=l("basic-drawer-header");return{prefixCls:s,handleClose:function(){t("close")}}}});const Z={key:1};W.render=function(e,t,s,o,l,a){const c=n("BasicTitle"),d=n("ArrowLeftOutlined");return e.isDetail?(r(),i("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[b("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(r(),i("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[b(d,{class:`${e.prefixCls}__back`},null,8,["class"])])):h("",!0),e.title?(r(),i("span",Z,g(e.title),1)):h("",!0)],2),b("span",{class:`${e.prefixCls}__toolbar`},[u(e.$slots,"titleToolbar")],2)],2)):(r(),i(c,{key:0,class:e.prefixCls},{default:p((()=>[u(e.$slots,"title"),f(" "+g(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var J=o({components:{Drawer:A,ScrollContainer:q,DrawerFooter:G,DrawerHeader:W},inheritAttrs:!1,props:z,emits:["visible-change","ok","close","register"],setup(s,{emit:o}){const n=w(!1),r=C(),i=w(null),{t:c}=t(),{prefixVar:u,prefixCls:d}=l("basic-drawer"),p={setDrawerProps:function(e){i.value=y(D(i)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible)},emitVisible:void 0},f=v();f&&o("register",p,f.uid);const g=a((()=>y($(s),D(i)))),h=a((()=>{const t=e(e(e({placement:"right"},D(r)),D(g)),{visible:D(n)});t.title=void 0;const{isDetail:s,width:o,wrapClassName:l,getContainer:a}=t;if(s){o||(t.width="100%");const e=`${d}__detail`;t.wrapClassName=l?`${l} ${e}`:e,a||(t.getContainer=`.${u}-layout-content`)}return t})),b=a((()=>e(e({},r),D(h)))),P=a((()=>{const{footerHeight:e,showFooter:t}=D(h);return t&&e?O(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),_=a((()=>({position:"relative",height:`calc(100% - ${D(P)})`}))),F=a((()=>{var e;return!!(null==(e=D(h))?void 0:e.loading)}));return k((()=>{n.value=s.visible})),m((()=>n.value),(e=>{B((()=>{var t;o("visible-change",e),f&&(null==(t=p.emitVisible)||t.call(p,e,f.uid))}))})),{onClose:async function(e){const{closeFunc:t}=D(h);if(o("close",e),t&&x(t)){const e=await t();n.value=!e}else n.value=!1},t:c,prefixCls:d,getMergeProps:g,getScrollContentStyle:_,getProps:h,getLoading:F,getBindValues:b,getFooterHeight:P,handleOk:function(){o("ok")}}}});J.render=function(e,t,s,o,l,a){const c=n("DrawerHeader"),f=n("ScrollContainer"),g=n("DrawerFooter"),h=n("Drawer"),w=P("loading");return r(),i(h,d({class:e.prefixCls,onClose:e.onClose},e.getBindValues),_({default:p((()=>[F(b(f,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:p((()=>[u(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[w,e.getLoading]]),b(g,d(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),_({_:2},[T(Object.keys(e.$slots),(t=>({name:t,fn:p((s=>[u(e.$slots,t,s)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?void 0:{name:"title",fn:p((()=>[b(c,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:p((()=>[u(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const K=j({}),Q=j({});function U(){S();const e=w(null),t=w(!1),s=w("");const o=()=>{const t=D(e);return t||V("useDrawer instance is undefined!"),t};return[function(o,l){L((()=>{e.value=null,t.value=null,K[D(s)]=null})),D(t)&&H()&&o===D(e)||(s.value=l,e.value=o,t.value=!0,o.emitVisible=(e,t)=>{Q[t]=e})},{setDrawerProps:e=>{var t;null==(t=o())||t.setDrawerProps(e)},getVisible:a((()=>Q[~~D(s)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=o())||a.setDrawerProps({visible:e}),!t)return;if(l)return K[D(s)]=null,void(K[D(s)]=t);I($(K[D(s)]),t)||(K[D(s)]=t)}}]}const X=e=>{const t=w(null),s=v(),o=w("");s||V("useDrawerInner instance is undefined!");const l=()=>{const e=D(t);if(e)return e;V("useDrawerInner instance is undefined!")};return k((()=>{const t=K[D(o)];t&&e&&x(e)&&B((()=>{e(t)}))})),[(e,l)=>{L((()=>{t.value=null})),o.value=l,t.value=e,null==s||s.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:a((()=>Q[~~D(o)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]};export{J as _,X as a,U as u};