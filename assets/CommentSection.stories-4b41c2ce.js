import{j as e}from"./jsx-runtime-ccada58e.js";import{r}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const _=s=>r.createElement("svg",{viewBox:"0 0 11 3",xmlns:"http://www.w3.org/2000/svg",...s},r.createElement("path",{d:"M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",fill:"currentColor"})),k=s=>r.createElement("svg",{viewBox:"0 0 11 11",xmlns:"http://www.w3.org/2000/svg",...s},r.createElement("path",{d:"M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",fill:"currentColor"})),I=s=>r.createElement("svg",{viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg",...s},r.createElement("path",{d:"M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z",fill:"#5357B6"}));function y({className:s="",onClick:o}){return e.jsxs("button",{onClick:o,className:`flex select-none items-center space-x-1 rounded p-2 focus:bg-[hsl(239,57%,95%)] focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.2)] ${s}`,children:[e.jsx(I,{className:"w-3 text-[hsl(238,40%,52%)]"}),e.jsx("span",{className:"text-sm font-semibold text-[hsl(238,40%,52%)]",children:"Reply"})]})}function q({score:s}){return e.jsxs("div",{className:"flex select-none items-center space-x-2 space-y-0 rounded-md bg-[hsl(223,19%,93%)] p-2 md:flex-col md:space-x-0 md:space-y-1",children:[e.jsx("button",{className:"p-1 text-[hsl(239,57%,85%)] focus:text-[hsl(238,40%,52%)] focus:outline-none",children:e.jsx(k,{className:"h-3 w-3"})}),e.jsx("span",{className:"px-1 text-[hsl(238,40%,52%)]",children:s}),e.jsx("button",{className:"p-1 text-[hsl(239,57%,85%)] focus:text-[hsl(238,40%,52%)] focus:outline-none",children:e.jsx(_,{className:"h-3 w-3 "})})]})}function c({user:s,score:o,content:n,createdAt:m,currentUser:u,currentUserImg:t,replyingTo:a,isOwner:d=!1}){const h=r.useRef(null),[N,C]=r.useState(""),[p,S]=r.useState(!1),f=()=>{S(!p)};return r.useLayoutEffect(()=>{var w;const i=(w=h.current)==null?void 0:w.querySelector('textarea[name="reply-textarea"]');i&&(i.focus(),i.setSelectionRange(-1,-1))},[p]),e.jsxs("div",{ref:h,className:"space-y-3",children:[e.jsxs("div",{className:"flex flex-col-reverse items-start rounded-lg bg-white p-5 md:flex-row md:space-x-5",children:[e.jsxs("div",{className:"mt-3 flex w-full justify-between md:mt-0 md:w-auto",children:[e.jsx(q,{score:o}),!d&&e.jsx(y,{className:"md:hidden",onClick:f})]}),e.jsxs("div",{className:"flex flex-col space-y-3",children:[e.jsxs("div",{className:"flex content-between",children:[e.jsxs("div",{className:"flex grow select-none items-center space-x-4",children:[e.jsx("img",{className:"w-6",src:s.image,alt:`${s.username}'s profile`}),e.jsxs("span",{className:"select-all text-sm font-bold text-gray-700",children:[s.username,d&&e.jsx("span",{className:"ml-2 rounded bg-[hsl(238,40%,52%)] px-1 py-[0.1rem] text-xs text-white",children:"you"})]}),e.jsx("span",{className:"text-sm text-[hsl(211,10%,45%)]",children:m})]}),!d&&e.jsx(y,{className:"hidden md:flex",onClick:f})]}),e.jsxs("p",{className:"text-sm text-[hsl(211,10%,45%)]",children:[e.jsxs("span",{className:"mr-1 font-semibold text-[hsl(238,40%,52%)]",children:["@",a]}),n]})]})]}),p&&e.jsxs("div",{className:"flex flex-row items-start space-x-3 rounded-lg bg-white p-4",children:[e.jsx("img",{className:"w-6",src:t,alt:`${u}'s profile`}),e.jsxs("div",{className:"flex grow flex-col items-start gap-3 md:flex-row",children:[e.jsx("textarea",{placeholder:"Add a comment",className:"w-full grow rounded-lg border border-[hsl(211,10%,45%)] border-opacity-20 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]",rows:3,value:`@${s.username} `+N,onChange:i=>C(i.target.value.substring(`@${s.username} `.length)),name:"reply-textarea"}),e.jsx("button",{className:" select-none rounded bg-[hsl(238,40%,52%)] px-3 py-2 text-sm uppercase text-white focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]",children:"Submit"})]})]})]})}try{c.displayName="CommentCard",c.__docgenInfo={description:"",displayName:"CommentCard",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"{ image: string; username: string; }"}},score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"string"}},isOwner:{defaultValue:{value:"false"},description:"",name:"isOwner",required:!1,type:{name:"boolean"}},currentUser:{defaultValue:null,description:"",name:"currentUser",required:!0,type:{name:"string"}},currentUserImg:{defaultValue:null,description:"",name:"currentUserImg",required:!0,type:{name:"string"}},replyingTo:{defaultValue:null,description:"",name:"replyingTo",required:!1,type:{name:"string"}},onReplyClicked:{defaultValue:null,description:"",name:"onReplyClicked",required:!1,type:{name:"((commentId: string) => void)"}},onScoreChange:{defaultValue:null,description:"",name:"onScoreChange",required:!1,type:{name:'((commentId: string, scoreChangeType: "increment" | "decrement") => void)'}}}}}catch{}const A={"font-rubik":"_font-rubik_qolry_13"};function x({currentUser:s,currentUserImg:o,comments:n}){const[m,u]=r.useState("");return e.jsxs("section",{className:`max-w-[40rem] space-y-3 ${A["font-rubik"]}`,children:[e.jsx("div",{className:"flex flex-col space-y-3",children:n.map(t=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(c,{id:t.id,user:{image:"https://alqa-holic.github.io/random-frontend-components/"+t.user.image,username:t.user.username},score:t.score,createdAt:t.createdAt,content:t.content,isOwner:t.user.username===s,currentUser:s,currentUserImg:o}),t.replies.length>0&&e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mx-3 my-1 border border-[hsl(211,10%,45%)] border-opacity-20 md:mx-8"}),e.jsx("div",{className:"flex flex-col space-y-3",children:t.replies.map(a=>e.jsx(c,{id:a.id,user:{image:"https://alqa-holic.github.io/random-frontend-components/"+a.user.image,username:a.user.username},score:a.score,createdAt:a.createdAt,content:a.content,isOwner:a.user.username===s,replyingTo:a.replyingTo,currentUser:s,currentUserImg:o},a.id))})]})]},t.id))}),e.jsxs("div",{className:"flex flex-row items-start space-x-3 rounded-lg bg-white p-4",children:[e.jsx("img",{className:"w-6",src:o,alt:`${s}'s profile`}),e.jsxs("div",{className:"flex grow flex-col items-start gap-3 md:flex-row",children:[e.jsx("textarea",{placeholder:"Add a comment",className:"w-full grow rounded-lg border border-[hsl(211,10%,45%)] border-opacity-20 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]",rows:3,value:m,onChange:t=>u(t.target.value)}),e.jsx("button",{className:" select-none rounded bg-[hsla(238,40%,52%)] px-3 py-2 text-sm uppercase text-white focus:outline-none focus:ring-1 focus:ring-[hsla(238,40%,52%,0.5)]",children:"Submit"})]})]})]})}try{x.displayName="CommentSection",x.__docgenInfo={description:"",displayName:"CommentSection",props:{currentUserImg:{defaultValue:null,description:"",name:"currentUserImg",required:!0,type:{name:"string"}},currentUser:{defaultValue:null,description:"",name:"currentUser",required:!0,type:{name:"string"}},comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"{ id: string; user: { image: string; username: string; }; score: number; content: string; createdAt: string; replies: { id: string; user: { image: string; username: string; }; score: number; content: string; createdAt: string; replyingTo: string; }[]; }[]"}}}}}catch{}const V={image:{png:"images/comment-section/avatars/image-juliusomo.png",webp:"images/comment-section/avatars/image-juliusomo.webp"},username:"juliusomo"},T=[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:{png:"images/comment-section/avatars/image-amyrobson.png",webp:"images/comment-section/avatars/image-amyrobson.webp"},username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:{png:"images/comment-section/avatars/image-maxblagun.png",webp:"images/comment-section/avatars/image-maxblagun.webp"},username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:{png:"images/comment-section/avatars/image-ramsesmiron.png",webp:"images/comment-section/avatars/image-ramsesmiron.webp"},username:"ramsesmiron"}},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:{png:"images/comment-section/avatars/image-juliusomo.png",webp:"images/comment-section/avatars/image-juliusomo.webp"},username:"juliusomo"}}]}],g={currentUser:V,comments:T},B={title:"Challenge/CommentSection",component:x,argTypes:{},parameters:{layout:"centered",backgrounds:{default:"gray_bg",values:[{name:"gray_bg",value:"hsl(212,45%,89%)"}]},viewport:{viewports:{desktop:{name:"Desktop",styles:{width:"1440px",height:"800px"}},mobile:{name:"Mobile",styles:{width:"375px",height:"800px"}}}}}},R=s=>{let o=[];return s.replies.length>0&&(o=s.replies.map(n=>({content:n.content,createdAt:n.createdAt,id:n.id.toString(),score:n.score,user:{image:n.user.image.png,username:n.user.username},replyingTo:n.replyingTo}))),{content:s.content,createdAt:s.createdAt,id:s.id.toString(),score:s.score,user:{image:s.user.image.png,username:s.user.username},replies:o}},l={args:{currentUser:g.currentUser.username,currentUserImg:g.currentUser.image.png,comments:g.comments.map(R)}};var b,v,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    currentUser: sampleData.currentUser.username,
    currentUserImg: sampleData.currentUser.image.png,
    comments: sampleData.comments.map(mapCommentData)
  }
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const H=["Default"];export{l as Default,H as __namedExportsOrder,B as default};
//# sourceMappingURL=CommentSection.stories-4b41c2ce.js.map