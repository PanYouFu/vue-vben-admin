import{d as t,a_ as s,dg as i,dh as e,r as o,o as a,f as l,g as d,F as r,aP as m,t as n,q as p,br as c}from"./index.8a947221.js";import{L as u}from"./index.c7769756.js";import"./index.6f85517b.js";import"./index.81c9b1dc.js";import"./index.b59597c9.js";import{T as f}from"./index.36897cf3.js";/* empty css              */import{d as j}from"./ScrollContainer.7c8aaa6b.js";import{t as b}from"./data.aa527d47.js";import{E as _}from"./EllipsisOutlined.0ca49394.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.b19280fd.js";import"./toString.861a9ae4.js";import"./isArray.e55f5dd2.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./identity.e5918e80.js";import"./_baseSlice.6f42b8d2.js";import"./CheckOutlined.af985792.js";import"./DownOutlined.e3879b2b.js";import"./LeftOutlined.081aa009.js";import"./RightOutlined.d3306906.js";import"./DoubleLeftOutlined.6a700560.js";import"./DoubleRightOutlined.9ab318aa.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.02b8894f.js";import"./domUtils.e0b91801.js";import"./useTimeout.4ab89dd3.js";import"./useScrollTo.a0f2ab62.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:f,Tooltip:s,EllipsisOutlined:_},setup:()=>({todoList:b})});const O=c("data-v-579679d3");i("data-v-579679d3");const v=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),x={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},g={class:"todo-list__item-desc"},C=d("br",null,null,-1),h=p(" 待审批 "),I={class:"todo-list__all"},y=p(" 查看更多 ");e();const E=O(((t,s,i,e,c,u)=>{const f=o("ListItemMeta"),j=o("Tag"),b=o("a-button"),_=o("ListItem"),L=o("List"),E=o("EllipsisOutlined"),S=o("Tooltip"),k=o("CollapseContainer");return a(),l(k,{class:"todo-list",title:"待办事项",canExpan:!1},{title:O((()=>[v])),default:O((()=>[d(L,null,{default:O((()=>[(a(!0),l(r,null,m(t.todoList,(t=>(a(),l(_,{key:t.id,class:"todo-list__item"},{default:O((()=>[d(f,null,{title:O((()=>[d("div",null,[d("span",x,n(t.title),1),d("span",T,n(t.memo),1)])])),description:O((()=>[d("div",g,[p(" 提交人："+n(t.sbmter)+" ",1),C,p(" 提交时间："+n(t.sbmtTime),1)])])),_:2},1024),d(b,{type:"link"},{default:O((()=>[d(j,{color:"blue"},{default:O((()=>[h])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",I,[d(S,{placement:"topRight"},{title:O((()=>[y])),default:O((()=>[d(E)])),_:1})])])),_:1})}));L.render=E,L.__scopeId="data-v-579679d3";export default L;