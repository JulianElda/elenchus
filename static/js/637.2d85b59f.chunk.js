"use strict";(self.webpackChunkelenchus=self.webpackChunkelenchus||[]).push([[637],{1637:function(e,n,t){t.r(n),t.d(n,{BoxList:function(){return N},BoxListItem:function(){return x},BoxListItemDropdown:function(){return l},BoxListItemIcon:function(){return u},BoxListNoboxes:function(){return m},BoxListNoresult:function(){return f},BoxListResolver:function(){return c},BoxListSearcher:function(){return p},BoxListSortSelect:function(){return j},boxListSearcherFunction:function(){return h},boxListSorterFunction:function(){return b},default:function(){return v}});var r=t(7313),o=t(5554),i=t(5078),s=t(6417);function c(){var e=(0,o.I0)(),n=(0,o.v9)(i.k7),t=(0,o.v9)(i.ub);return(0,r.useEffect)((function(){t||e((0,i.XI)())}),[e,t]),t?(0,s.jsx)(N,{boxes:n}):(0,s.jsx)("p",{children:"loading boxes..."})}var a=t(2870);function l(e){return(0,s.jsxs)("span",{className:"dropdown box-list-item-dropdown",onClick:function(e){e.stopPropagation()},children:[(0,s.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"box-list-item-dropdown-"+e.id,"data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,s.jsx)(a.Z,{type:"GENERAL",icon:"MENU"})}),(0,s.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"box-list-item-dropdown-"+e.id,children:[(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:"dropdown-item",children:"Action"})}),(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:"dropdown-item",children:"Action 2"})})]})]})}function u(e){return(0,s.jsx)("span",{className:"box-list-item-icon",children:(0,s.jsx)(a.Z,{type:"BOX",icon:e.icon})})}var d=t(7890);function x(e){var n=(0,d.s0)();return(0,s.jsxs)("li",{className:"h-12 cursor-pointer p-4 bg-white",onClick:function(){n("/box/"+e.id)},children:[(0,s.jsx)(u,{icon:e.type}),(0,s.jsx)("label",{className:"ml-2 box-list-item-name cursor-pointer",children:e.name})]})}function m(){return(0,s.jsx)("div",{className:"alert alert-secondary",role:"alert",children:"No items"})}function f(){return(0,s.jsx)("div",{className:"alert alert-secondary",role:"alert",children:"No search result"})}var p=(0,r.memo)((function(e){return(0,s.jsx)("input",{type:"text",className:"form-control",id:"box-list-searcher",placeholder:"Search",onChange:function(n){return t=n.target.value,void e.onChangeSearch(t);var t}})}));function h(e){return function(n){return(n.name+""+n.description).toLowerCase().indexOf(e.toLowerCase())>=0}}var j=(0,r.memo)((function(e){var n=function(n){e.onChangeSort(n)};return(0,s.jsxs)("select",{className:"form-select","aria-label":"Sort",children:[(0,s.jsx)("option",{value:"name",onClick:function(e){return n("name")},children:"Name"}),(0,s.jsx)("option",{value:"type",onClick:function(e){return n("type")},children:"Type"})]})}));function b(e){return function(n,t){return n[e].toLowerCase()<t[e].toLowerCase()?-1:n[e].toLowerCase()>t[e].toLowerCase()?1:0}}function N(e){return 0===e.boxes.length?(0,s.jsx)(m,{}):(0,s.jsxs)(r.StrictMode,{children:[(0,s.jsx)("nav",{className:"flex my-4","aria-label":"breadcrumb",children:(0,s.jsx)("ol",{className:"flex items-center space-x-4",children:(0,s.jsx)("li",{className:"cursor-pointer font-mono",children:(0,s.jsx)("span",{className:"text-gray-800",children:"/ home"})})})}),(0,s.jsx)("ul",{className:"divide-y shadow",children:e.boxes.slice().sort(b("name")).map((function(e){return(0,s.jsx)(x,{id:e.id,name:e.name,type:e.type},e.id)}))})]})}var v=c},2870:function(e,n,t){t.d(n,{Z:function(){return L}});var r=t(5250),o=t(499),i=t(2793),s=t(4162),c=t(8288),a=t(7772),l=t(8553),u=t(2898),d=t(8045),x=t(9911),m=t(7243),f=t(5538),p=t(1813),h=t(7484),j=t(7932),b=t(7790),N=t(1969),v=t(6417),w={FILE:{dir:b.Pk,gen:j.gM,pdf:h.gS,doc:p.Mf,ppt:f.WO,xls:m.ic,zip:x.gA,vid:d.hv,img:u.Oi,aud:l.FM,src:a.w4,txt:c.nf,note:s.Yk},BOX:{FILE:i.Pk,DATAROOM:i.Pk,TEMPORARY:i.Pk},GENERAL:{MENU:o.Uw,SEARCH:r.Y$}};function L(e){return e.type&&e.icon?(0,v.jsx)(N.G,{icon:w[e.type][e.icon],size:"lg"}):(0,v.jsx)(v.Fragment,{})}}}]);