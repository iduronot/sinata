(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5655],{78362:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admins/manajemen-akun",function(){return n(49803)}])},49803:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return S}});var l=n(85893),i=n(7624),s=n(89906),t=n(87357),r=n(90629),d=n(18979),o=n(80437),m=n(16628),c=n(26447),u=n(15861),x=n(93946),j=n(40476),h=n(11057),p=n(18972),Z=n(67294),b=n(53348),g=n(48533),f=n(41664),k=n.n(f),N=n(50961),v=n(95344),w=n(63445),A=n(73170),y=n(83608),_=n(50594),C=n(41733),P=n(66818),F=n(44510),R=n(92197),E=n(75561);function S(){let e=["ID","Nama Lengkap","Username","Alamat Email","No Identitas","Unit/Fakultas","Role","Kontak","Aksi"],[a,n]=Z.useState(N),f=a.slice().reverse().map(e=>e),[S,V]=Z.useState(!1),[M,z]=Z.useState(0),T=e=>{V(!0),z(e)},U=e=>{e.stopPropagation()},I=()=>V(!1),[H,O]=Z.useState(!1);return(0,l.jsxs)(t.Z,{className:"bg-grey",children:[(0,l.jsx)(i.Z,{title:"Manajemen Akun Pengguna - Sinata"}),(0,l.jsxs)(s.Z,{listMenu:b.listMenuAdmin,children:[(0,l.jsx)(g.Z,{pageHeader:"Manajemen Akun Pengguna",currentPage:"Manajemen Akun"}),(0,l.jsxs)(r.Z,{className:"shadow-md xs:p-4 md:p-6",children:[0===f.length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{variant:"rounded",width:210,height:25,className:"mb-6"}),(0,l.jsx)(v.Z,{headers:e})]}):(0,l.jsx)(w.Z,{headers:e,columns:[{id:1,label:"id"},{id:2,label:"name"},{id:3,label:"username"},{id:4,label:"email"},{id:5,label:"no_identitas"},{id:6,label:"unit"},{id:7,label:"role"},{id:8,label:"kontak"}],rows:f,status:!1,actionOnClick:T}),(0,l.jsx)(o.Z,{open:S,onClose:I,BackdropProps:{onClick:U},children:(0,l.jsx)(m.Z,{in:S,children:(0,l.jsxs)(t.Z,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]",children:[(0,l.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",className:"sticky py-2 px-6 bg-gray-100 rounded-t-md",children:[(0,l.jsx)(u.Z,{variant:"subtitle1",component:"h2",className:"font-bold",children:"Manajemen Akun Pengguna"}),(0,l.jsx)(x.Z,{onClick:I,"aria-label":"close",size:"small",className:"hover:text-primary",children:(0,l.jsx)(_.Z,{fontSize:"small"})})]}),(0,l.jsxs)(t.Z,{sx:{mt:2},className:"max-h-[80vh] overflow-y-auto pb-4 px-6",children:[f.filter(e=>e.id===M).map(e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z,{name:"id",label:"ID User",defaultValue:e.id,disabled:!0}),!1==H&&null!=e.img_profil?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.Z,{className:"mb-2 text-sm",children:"Foto Profil"}),(0,l.jsxs)(c.Z,{direction:"row",spacing:1,justifyContent:"space-between",alignItems:"center",className:"mb-4",children:[(0,l.jsx)(k(),{href:"/",target:"_blank",children:(0,l.jsx)(u.Z,{className:"text-sm hover:text-primary hover:underline hover:underline-offset-2 transition",children:e.img_profil})}),(0,l.jsx)(h.Z,{size:"small",disableElevation:!0,className:"rounded-md capitalize py-1 px-3",onClick:()=>O(!0),children:"Change File"})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R.Z,{name:"img_profil",label:"Foto Profil",allowMultiple:!1,acceptedFileTypes:["image/png","image/jpeg"],labelFileTypeNotAllowed:"Hanya file JPEG dan PNG yang diijinkan"}),(0,l.jsx)(c.Z,{direction:"row-reverse",className:"-mt-2 mb-4",children:(0,l.jsx)(h.Z,{size:"small",disableElevation:!0,className:"rounded-md capitalize py-1 px-3",onClick:()=>O(!1),children:"Cancel"})})]}),(0,l.jsxs)(c.Z,{direction:"row",spacing:1,className:"mb-2",children:[(0,l.jsx)(A.Z,{name:"username",label:"Username",defaultValue:e.username}),(0,l.jsx)(A.Z,{name:"name",label:"Nama Lengkap",defaultValue:e.name})]}),(0,l.jsx)(A.Z,{type:"email",name:"email",label:"Alamat Email",defaultValue:e.email}),(0,l.jsx)(A.Z,{name:"no_identitas",label:"No Identitas",defaultValue:e.no_identitas}),(0,l.jsx)(A.Z,{name:"unit",label:"Unit/Fakultas",defaultValue:e.unit}),(0,l.jsxs)(E.Z,{name:"role",label:"Role Akun",defaultValue:e.role,children:[(0,l.jsx)(p.Z,{value:"user",children:"User"}),(0,l.jsx)(p.Z,{value:"super admin",children:"Super Admin"}),(0,l.jsx)(p.Z,{value:"admin role 1",children:"Admin Role 1"}),(0,l.jsx)(p.Z,{value:"admin role 2",children:"Admin Role 2"}),(0,l.jsx)(p.Z,{value:"admin role 3",children:"Admin Role 3"}),(0,l.jsx)(p.Z,{value:"admin role 4",children:"Admin Role 4"}),(0,l.jsx)(p.Z,{value:"admin role 5",children:"Admin Role 5"}),(0,l.jsx)(p.Z,{value:"admin role 6",children:"Admin Role 6"}),(0,l.jsx)(p.Z,{value:"admin role 7",children:"Admin Role 7"}),(0,l.jsx)(p.Z,{value:"admin role 8",children:"Admin Role 8"}),(0,l.jsx)(p.Z,{value:"admin role 9",children:"Admin Role 9"})]}),(0,l.jsx)(A.Z,{type:"tel",name:"kontak",label:"Kontak",defaultValue:e.kontak})]})),(0,l.jsxs)(c.Z,{direction:"row",justifyContent:"flex-end",spacing:1,marginBottom:1,marginTop:4,children:[(0,l.jsx)(y.Z,{variant:"outlined",color:"error",icon:(0,l.jsx)(C.Z,{className:"-mr-1"}),children:"Hapus"}),(0,l.jsx)(y.Z,{variant:"contained",icon:(0,l.jsx)(F.Z,{className:"-mr-1"}),onClick:I,children:"Tutup"}),(0,l.jsx)(y.Z,{variant:"contained",color:"success",icon:(0,l.jsx)(P.Z,{className:"-mr-1"}),children:"Simpan"})]})]})]})})})]})]})]})}}},function(e){e.O(0,[7719,4202,9047,3259,8294,9190,9424,9890,8685,3943,6751,9774,2888,179],function(){return e(e.s=78362)}),_N_E=e.O()}]);