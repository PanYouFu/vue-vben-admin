import{_ as s}from"./ScrollContainer.7c8aaa6b.js";import{_ as o}from"./index.ee861045.js";import{d as r,h as t,j as l,dg as a,dh as e,r as i,o as n,f as c,g as d,F as p,aP as m,t as u,br as f,q as j}from"./index.8a947221.js";import"./index.02b8894f.js";import"./domUtils.e0b91801.js";import"./RightOutlined.d3306906.js";/* empty css              */import"./useTimeout.4ab89dd3.js";import"./useScrollTo.a0f2ab62.js";import"./index.2698f41d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./isEqual.563532de.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./toInteger.a25ecc80.js";import"./DownOutlined.e3879b2b.js";import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./transButton.249d7b30.js";import"./ArrowLeftOutlined.5c44f118.js";import"./vendor.3b1829c7.js";var b=r({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=t(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=f("data-v-331a2139");a("data-v-331a2139");const _={class:"my-4"},C=j(" 滚动到100px位置 "),g=j(" 滚动到800px位置 "),v=j(" 滚动到顶部 "),T=j(" 滚动到底部 "),y={class:"scroll-wrap"},k={class:"p-3"};e();const w=x(((s,o,r,t,l,a)=>{const e=i("a-button"),f=i("ScrollContainer"),j=i("PageWrapper");return n(),c(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[g])),_:1}),d(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[T])),_:1})]),d("div",y,[d(f,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(n(),c(p,null,m(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},u(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=w,b.__scopeId="data-v-331a2139";export default b;