(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{630:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(9204)}])},9370:function(e,t,n){"use strict";var r=n(4246);n(7378);var a=n(9894),i=n.n(a),o=n(8038),s=n.n(o);t.Z=e=>{let{children:t,title:n="This is the default title"}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{children:[(0,r.jsx)(i(),{href:"/",children:"Home"})," | ",(0,r.jsx)(i(),{href:"/about",children:"About"})," |"," ",(0,r.jsx)(i(),{href:"/initial-props",children:"With Initial Props"})," |"," ",(0,r.jsx)(i(),{href:"/login",children:"Login"})]})}),t,(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("span",{children:"I'm here to stay (Footer)"})]})]})}},9204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(4246),a=n(7378),i=n(4707),o=n.n(i),s=n(9370),l=e=>{let{columns:t,apiUrl:n,token:i}=e,[o,s]=(0,a.useState)([]),[l,c]=(0,a.useState)([]),[d,h]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[x,_]=(0,a.useState)(10),[j,g]=(0,a.useState)(!0),[f,m]=(0,a.useState)(null);(0,a.useEffect)(()=>{(async()=>{try{g(!0);let e=await fetch(n,{headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"}});if(!e.ok)throw Error("Failed to fetch data");let t=await e.json();if(Array.isArray(t.data))s(t.data),c(t.data);else throw Error("API response data is not an array")}catch(e){m(e.message)}finally{g(!1)}})()},[n]),(0,a.useEffect)(()=>{let e=o;d&&(e=o.filter(e=>{var t;return u?null===(t=e[u])||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase()):Object.values(e).some(e=>null==e?void 0:e.toString().toLowerCase().includes(d.toLowerCase()))})),c(e)},[d,u,o]);let v=-1===x?l:l.slice(0,x);return j?(0,r.jsx)("p",{children:"Loading..."}):f?(0,r.jsxs)("p",{children:["Error: ",f]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,r.jsx)("input",{type:"text",placeholder:"Search...",value:d,onChange:e=>h(e.target.value),style:{marginRight:"10px"}}),(0,r.jsxs)("select",{value:u,onChange:e=>p(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"",children:"All"}),t.map(e=>(0,r.jsx)("option",{value:e.key,children:e.header},e.key))]}),(0,r.jsxs)("select",{value:x,onChange:e=>_(Number(e.target.value)),children:[(0,r.jsx)("option",{value:10,children:"10"}),(0,r.jsx)("option",{value:20,children:"20"}),(0,r.jsx)("option",{value:50,children:"50"}),(0,r.jsx)("option",{value:100,children:"100"}),(0,r.jsx)("option",{value:200,children:"200"}),(0,r.jsx)("option",{value:-1,children:"All"})]})]}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t.map(e=>(0,r.jsx)("th",{children:e.header},e.key))})}),(0,r.jsx)("tbody",{children:v.map((e,n)=>(0,r.jsx)("tr",{children:t.map(t=>(0,r.jsx)("td",{children:e[t.key]},t.key))},n))})]})]})},c=n(6677),d=n(6665);let h="";var u=()=>{let{authState:e,isAuthenticated:t}=(0,d.a)(),n=(0,c.useRouter)();return((0,a.useEffect)(()=>{t||n.push("/login")},[t,n]),t)?(h=e.token,console.log(e.token),console.log("authState : "+h),(0,r.jsx)("div",{className:o().container,children:(0,r.jsxs)(s.Z,{title:"Dashboard | Next.js + TypeScript + Electron Example",children:[(0,r.jsx)("h1",{children:"Dashboard"}),(0,r.jsx)("p",{children:"This is the Dashboard page"}),(0,r.jsx)(l,{columns:[{key:"gpro_id",header:"ID"},{key:"gpro_name",header:"Name"},{key:"gpri_company_name",header:"Company"},{key:"sku_external",header:"SKU External"},{key:"sku_internal",header:"SKU Internal"},{key:"sku_barcode",header:"SKU Barcode"}],apiUrl:"https://apigateway-cms.aha.id/cms/master_data/list_master_product?page=1&limit=&search=&sort=product_name asc",token:e.token})]})})):(0,r.jsx)("p",{children:"Loading..."})}},4707:function(e){e.exports={container:"Login_container__DPp2Z",main:"Login_main__3PNdJ",loginBox:"Login_loginBox__KZSS_",title:"Login_title__S9Xbe",form:"Login_form__F7zp_",input:"Login_input__GbcAp",button:"Login_button__BuBqT",forgotPassword:"Login_forgotPassword__t6XU7",error:"Login_error__2xYo0"}},6677:function(e,t,n){e.exports=n(2293)}},function(e){e.O(0,[683,888,774,179],function(){return e(e.s=630)}),_N_E=e.O()}]);