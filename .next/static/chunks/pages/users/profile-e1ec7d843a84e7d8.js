(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4529],{79874:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/profile",function(){return n(11903)}])},73594:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});var i=n(85893);n(67294);var t=n(11057);function s(e){let{children:a,...n}=e;return(0,i.jsx)(t.Z,{size:"small",...n,disableElevation:!0,className:"rounded-md capitalize mb-4 py-1 px-3",children:a})}},46546:function(e,a,n){"use strict";n.d(a,{Z:function(){return o}});var i=n(85893),t=n(68239),s=n(65940),r=n(40044);n(67294);let l=(0,t.Z)({components:{MuiTab:{styleOverrides:{root:e=>{let{theme:a}=e;return a.unstable_sx({"&:hover":{opacity:1},minHeight:44,textTransform:"initial"})}}}}});function o(e){let{...a}=e;return(0,i.jsx)(s.Z,{theme:l,children:(0,i.jsx)(r.Z,{disableRipple:!0,...a,className:"text-xs xs:w-[160px] xl:w-[180px]"})})}},74902:function(e,a,n){"use strict";n.d(a,{Z:function(){return d}});var i=n(85893);n(67294);var t=n(68239),s=n(65940),r=n(87357),l=n(88409);let o=(0,t.Z)({components:{MuiTabs:{styleOverrides:{root:e=>{let{theme:a}=e;return a.unstable_sx({backgroundColor:"#f3f4f6",borderRadius:3,minHeight:44,"& .Mui-selected":{color:"#0ea5e8"}})},flexContainer:{display:"inline-flex",position:"relative",zIndex:1},indicator:{top:3,bottom:3,right:3,height:"auto",background:"none","&:after":{content:'""',display:"block",position:"absolute",top:0,left:4,right:4,bottom:0,borderRadius:8,backgroundColor:"#fff",color:"red",boxShadow:"0 4px 12px 0 rgba(0,0,0,0.16)"}},scrollButtons:e=>{let{theme:a}=e;return a.unstable_sx({[a.breakpoints.up("lg")]:{display:"none"},"&.Mui-disabled":{width:0},overflow:"hidden",transition:"width 0.5s"})}}}}});function d(e){let{value:a,children:n,...t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{theme:o,children:(0,i.jsx)(r.Z,{className:"xs:w-full lg:w-fit",children:(0,i.jsx)(l.Z,{value:a,variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,...t,children:n})})})})}},92083:function(e,a,n){"use strict";n.d(a,{Z:function(){return c}});var i=n(85893),t=n(77931),s=n(87109),r=n(93946),l=n(22961),o=n(72450),d=n(67294);function c(e){let{icon:a,...n}=e,[c,m]=d.useState(!1),u=()=>m(e=>!e),f=e=>{e.preventDefault()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{fullWidth:!0,...n,type:c?"text":"password",InputProps:{startAdornment:(0,i.jsx)(s.Z,{position:"start",children:a}),endAdornment:(0,i.jsx)(s.Z,{position:"end",children:(0,i.jsx)(r.Z,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:f,edge:"end",children:c?(0,i.jsx)(o.Z,{}):(0,i.jsx)(l.Z,{})})})},variant:"outlined",size:"small",inputProps:{style:{fontSize:14}},className:"mb-4",sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#0ea5e9"}},"& .Mui-disabled":{"&:hover fieldset":{borderColor:"#bfc0c2"},backgroundColor:"#fafafa"}}})})}},38111:function(e,a,n){"use strict";n.d(a,{Z:function(){return w}});var i=n(85893),t=n(67294),s=n(26447),r=n(69661),l=n(15861),o=n(67720),d=n(72882),c=n(7906),m=n(295),u=n(53816),f=n(53252),x=n(80437),h=n(87357),p=n(93946),b=n(81458);function j(e){let{value:a}=e,[n,s]=t.useState(a);return(0,i.jsx)(h.Z,{sx:{width:"100%"},children:(0,i.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(h.Z,{sx:{width:"100%",mr:1},children:(0,i.jsx)(b.Z,{variant:"determinate",sx:{height:8,borderRadius:"10px",opacity:"0.75",":hover":{height:9,opacity:"0.85"}},...e})}),(0,i.jsx)(h.Z,{sx:{minWidth:35},children:(0,i.jsx)(l.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})})}var g=n(73594),Z=n(41664),k=n.n(Z),y=n(50594),v=n(92083);function w(e){let{data:a}=e,[n,b]=t.useState(!1),Z=()=>b(!0),w=()=>b(!1);return(0,i.jsx)(i.Fragment,{children:a.filter(e=>3===e.id).map(e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{direction:"column",className:"grid place-items-center m-4",children:[(0,i.jsx)(r.Z,{alt:"Gary Doe",src:"/images/avatar/avatar-4.jpg",sx:{width:150,height:150}}),(0,i.jsx)(l.Z,{variant:"body1",className:"text-dark mt-4 font-bold",children:e.name}),(0,i.jsx)(l.Z,{variant:"body2",className:"text-dark mb-4",children:e.username}),(0,i.jsx)(l.Z,{variant:"body2",className:"text-dark",children:"Lengkapi Profil"}),(0,i.jsx)(j,{value:70})]}),(0,i.jsx)(o.Z,{}),(0,i.jsxs)(s.Z,{direction:"column",className:"grid place-items-center m-4",children:[(0,i.jsx)(l.Z,{variant:"body1",className:"text-dark font-bold",children:"Role Akun"}),(0,i.jsx)(l.Z,{variant:"body2",className:"text-dark",children:"user"==e.role?"User":"Admin"})]}),(0,i.jsx)(o.Z,{}),(0,i.jsxs)(s.Z,{direction:"column",className:"m-4",children:[(0,i.jsx)(l.Z,{variant:"body1",className:"text-dark font-bold mb-2",children:"Informasi Akun"}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(c.Z,{sx:{minWidth:250,"& td":{border:0,paddingY:1}},size:"small",padding:"none",children:(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(f.Z,{className:"font-bold",children:"Alamat Email"}),(0,i.jsx)(f.Z,{children:e.email})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(f.Z,{className:"font-bold",children:"No. Identitas"}),(0,i.jsx)(f.Z,{children:e.no_identitas})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(f.Z,{className:"font-bold",children:"Unit/ Fakultas"}),(0,i.jsx)(f.Z,{children:e.unit})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(f.Z,{className:"font-bold",children:"Kontak"}),(0,i.jsx)(f.Z,{children:e.kontak})]})]})})})]}),(0,i.jsxs)(s.Z,{direction:"row",spacing:1,className:"flex justify-center mt-8",children:[(0,i.jsx)(g.Z,{variant:"contained",color:"primary",onClick:Z,children:"Ubah Kata Sandi"}),(0,i.jsx)(k(),{href:"/sign-in",children:(0,i.jsx)(g.Z,{variant:"outlined",color:"primary",children:"Sign Out"})})]}),(0,i.jsx)(x.Z,{open:n,onClose:w,children:(0,i.jsxs)(h.Z,{className:"absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[500px] min-h-[250px] outline-0 rounded-md overflow-y-auto",children:[(0,i.jsxs)(s.Z,{direction:"row",spacing:2,className:"py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10",children:[(0,i.jsx)(l.Z,{variant:"subtitle1",className:"text-dark font-bold",children:"Ubah Kata Sandi"}),(0,i.jsx)(p.Z,{onClick:w,"aria-label":"Close",className:"absolute right-1 -translate-y-1",children:(0,i.jsx)(y.Z,{fontSize:"small"})})]}),(0,i.jsxs)(s.Z,{className:"pb-4 pt-6 z-20 xs:px-6 md:px-8",children:[(0,i.jsx)(v.Z,{name:"old_password",label:"Kata Sandi Lama",placeholder:"Masukkan kata sandi Anda yang lama"}),(0,i.jsx)(v.Z,{name:"new_password",label:"Kata Sandi Baru",placeholder:"Masukkan kata sandi Anda yang baru",helperText:"Pastikan kata sandi Anda lebih dari 8 karakter",className:"-pt-4"}),(0,i.jsx)(v.Z,{label:"Konfirmasi Kata Sandi",placeholder:"Konfirmasi kata sandi Anda yang baru"}),(0,i.jsxs)(s.Z,{direction:"row-reverse",spacing:1,marginTop:2,children:[(0,i.jsx)(g.Z,{variant:"contained",color:"primary",children:"Simpan"}),(0,i.jsx)(g.Z,{variant:"outlined",color:"primary",onClick:w,children:"Batal"})]})]})]})})]}))})}},11903:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return K}});var i=n(85893),t=n(87357),s=n(26447),r=n(90629),l=n(67294),o=n(7624),d=n(48533),c=n(38111),m=JSON.parse('[{"id":1,"username":"rhalfpenny0","email":"rhalfpenny0@geocities.com","name":"Rosabel Halfpenny","password":"Rt4EcSvJF","no_identitas":"7644144129","unit":"Greenholt and Sons","token":"60f27ee83191e20e79caa160155b1d34eaad7189","role":2,"kontak":"+84 501 228 1843","img_profil":"http://dummyimage.com/250x250.png/ff4444/ffffff"},{"id":2,"username":"jhugnin1","email":"jhugnin1@miibeian.gov.cn","name":"Jillian Hugnin","password":"hqVexzPg3","no_identitas":"6993481855","unit":"Dach, Jones and Barrows","token":"9b6988d77499aba28d2778138f5185b3b4679b96","role":3,"kontak":"+380 165 583 5873","img_profil":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"},{"id":3,"username":"succelli2","email":"succelli2@ft.com","name":"Suzy Uccelli","password":"GqW9HG","no_identitas":"7183119548","unit":"Cronin Group","token":"233a565f10f255bcc7984e4282d8679d3e203e4e","role":1,"kontak":"+86 207 197 6560","img_profil":"http://dummyimage.com/250x250.png/cc0000/ffffff"},{"id":4,"username":"gharvard3","email":"gharvard3@t.co","name":"Granthem Harvard","password":"udPJWL8DUoHp","no_identitas":"0809089408","unit":"Mills LLC","token":"068f5b258a173dfc41b98fd7b23da86fb19ab198","role":3,"kontak":"+86 121 293 3588","img_profil":"http://dummyimage.com/250x250.png/cc0000/ffffff"},{"id":5,"username":"spocke4","email":"spocke4@purevolume.com","name":"Shanda Pocke","password":"3rze4yxpwC","no_identitas":"1206671831","unit":"Hermann-Hoeger","token":"49f2983317fcbd4fb472bb64a8d9dbf91d2797f7","role":2,"kontak":"+7 695 543 9545","img_profil":"http://dummyimage.com/250x250.png/ff4444/ffffff"},{"id":6,"username":"byorath5","email":"byorath5@creativecommons.org","name":"Benoite Yorath","password":"gqsCXz7NfSSn","no_identitas":"9272807883","unit":"Mosciski-Ratke","token":"17c7309b0fe86d76f8567d6f9f47b6485308cfdb","role":3,"kontak":"+48 510 396 5000","img_profil":"http://dummyimage.com/250x250.png/ff4444/ffffff"},{"id":7,"username":"hhenaughan6","email":"hhenaughan6@mashable.com","name":"Hansiain Henaughan","password":"j0QEAo","no_identitas":"0317376314","unit":"King-Cruickshank","token":"b94e5248927370de3256c5af94c48a579ebc0cbd","role":2,"kontak":"+385 597 934 2626","img_profil":"http://dummyimage.com/250x250.png/cc0000/ffffff"},{"id":8,"username":"econdy7","email":"econdy7@bloomberg.com","name":"Evangeline Condy","password":"hklTwqEkPN","no_identitas":"3354196459","unit":"Hintz, Price and Thompson","token":"c4f3972b7412291852bc9b1353d15b860683dade","role":2,"kontak":"+351 891 898 3126","img_profil":"http://dummyimage.com/250x250.png/cc0000/ffffff"},{"id":9,"username":"lduchasteau8","email":"lduchasteau8@blogs.com","name":"Latisha Duchasteau","password":"OR9ZlDmfI","no_identitas":"3021861865","unit":"Mosciski and Sons","token":"18d3a4586c40e81d6a99b33bd764c284ad379048","role":3,"kontak":"+57 376 708 7033","img_profil":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"},{"id":10,"username":"cfarnaby9","email":"cfarnaby9@jiathis.com","name":"Coleen Farnaby","password":"6QvjLp5ToRg","no_identitas":"3085207678","unit":"Kuvalis, Brekke and Kling","token":"f6e0cdd8676dbf98da912ce63d858a21eb278dc0","role":1,"kontak":"+234 260 236 3664","img_profil":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"}]'),u=n(74902),f=n(46546),x=n(45670),h=n(55050),p=n(81705),b=n(73594),j=n(41664),g=n.n(j),Z=n(16035),k=n(19953),y=n(64368),v=n(11057),w=n(56863),N=n(45111),_=n(23926),S=n(96514),C=n(17417),z=n(18972),A=n(84118),P=n(11163);function M(e){let{options:a,redirect:n}=e,{push:t}=(0,P.useRouter)(),[s,o]=l.useState(!1),d=l.useRef(null),[c,m]=l.useState(0),[u,f]=l.useState(0),x=()=>{c===u?t("".concat(n[u])):console.log("kamu")},h=(e,a)=>{m(a),f(a),o(!1)},p=()=>{o(e=>!e)},b=e=>{d.current&&d.current.contains(e.target)||o(!1)};return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsxs)(w.Z,{variant:"contained",ref:d,"aria-label":"split button",size:"small",disableElevation:!0,children:[(0,i.jsx)(v.Z,{onClick:x,className:"rounded-l-md capitalize mb-4 py-1 px-3",children:a[c]}),(0,i.jsx)(v.Z,{size:"small","aria-controls":s?"split-button-menu":void 0,"aria-expanded":s?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:p,className:"rounded-r-md capitalize mb-4",children:(0,i.jsx)(N.Z,{})})]}),(0,i.jsx)(C.Z,{sx:{zIndex:1},open:s,anchorEl:d.current,role:void 0,transition:!0,disablePortal:!0,children:e=>{let{TransitionProps:n,placement:t}=e;return(0,i.jsx)(S.Z,{...n,style:{transformOrigin:"bottom"===t?"center top":"center bottom"},children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(_.Z,{onClickAway:b,children:(0,i.jsx)(A.Z,{id:"split-button-menu",autoFocusItem:!0,children:a.map((e,a)=>(0,i.jsx)(z.Z,{selected:a===c,onClick:e=>h(e,a),children:e},e))})})})})}})]})}function H(){let[e,a]=l.useState("1"),n=(e,n)=>{a(n)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(x.ZP,{value:e,children:[(0,i.jsx)(t.Z,{className:"flex justify-center",children:(0,i.jsxs)(u.Z,{onChange:n,value:e,children:[(0,i.jsx)(f.Z,{label:"Riwayat Kegiatan",value:"1"}),(0,i.jsx)(f.Z,{label:"Riwayat Ajuan",value:"2"})]})}),(0,i.jsxs)(s.Z,{className:"-mx-6",children:[(0,i.jsxs)(h.Z,{value:"1",children:[(0,i.jsx)(s.Z,{direction:"row-reverse",children:(0,i.jsx)(g(),{href:"/users/tambah-kegiatan",children:(0,i.jsx)(b.Z,{variant:"contained",color:"primary",children:"Tambah Kegiatan"})})}),(0,i.jsx)(p.Z,{rows:k})]}),(0,i.jsxs)(h.Z,{value:"2",children:[(0,i.jsx)(s.Z,{direction:"row-reverse",children:(0,i.jsx)(M,{options:["Ajukan Layanan Humas","Ajukan Layanan Publikasi","Ajukan Layanan Media"],redirect:["/users/layanan-humas","/users/layanan-publikasi","/users/layanan-media"]})}),(0,i.jsx)(Z.Z,{rows:y})]})]})]})})}var R=n(89906),E=n(33177);function K(){return(0,i.jsxs)(t.Z,{className:"bg-grey",children:[(0,i.jsx)(o.Z,{title:"Profil Akun - Sinata"}),(0,i.jsxs)(R.Z,{listMenu:E.listMenuUser,children:[(0,i.jsx)(d.Z,{pageHeader:"Profil Akun",currentPage:"Profil Akun"}),(0,i.jsxs)(s.Z,{direction:{xs:"column",md:"row"},spacing:2,children:[(0,i.jsx)(r.Z,{className:"shadow-md px-6 py-4 md:max-w-[300px] lg:max-w-[350px] h-fit",children:(0,i.jsx)(c.Z,{data:m})}),(0,i.jsx)(r.Z,{className:"shadow-md px-6 py-4 w-full",children:(0,i.jsx)(H,{})})]})]})]})}}},function(e){e.O(0,[7719,4202,9047,3259,8294,9190,9424,9890,7417,7013,4031,8685,4573,9774,2888,179],function(){return e(e.s=79874)}),_N_E=e.O()}]);