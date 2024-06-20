(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4416)}])},4416:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return V}});var t=s(5893),o=s(9008),i=s.n(o),n=s(7294),r=s(9603),l=s(9417),c=()=>{let[e,a]=(0,n.useState)({name:"",email:"",message:"",disabled:!1}),s=e=>{let{name:s,value:t}=e.target;a(e=>({...e,[s]:t}))};return(0,t.jsx)("div",{className:"card shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,t.jsxs)("form",{onSubmit:s=>{s.preventDefault(),window.open("mailto:ronis@rx.dev.br?subject=".concat(e.name," - ").concat(e.email,"&body=").concat(e.message)),a(e=>({...e,disabled:!0}))},className:"card-body",children:[(0,t.jsx)("h2",{className:"card-title",children:"Contato"}),(0,t.jsxs)("div",{className:"form-control",children:[(0,t.jsx)("label",{className:"label",children:(0,t.jsx)("span",{className:"label-text",children:"Nome"})}),(0,t.jsx)("input",{type:"text",name:"name",placeholder:"Seu nome",value:e.name,onChange:s,className:"input input-bordered"})]}),(0,t.jsxs)("div",{className:"form-control",children:[(0,t.jsx)("label",{className:"label",children:(0,t.jsx)("span",{className:"label-text",children:"E-mail"})}),(0,t.jsx)("input",{type:"email",name:"email",placeholder:"seu@email.com",value:e.email,onChange:s,className:"input input-bordered"})]}),(0,t.jsxs)("div",{className:"form-control",children:[(0,t.jsx)("label",{className:"label",children:(0,t.jsx)("span",{className:"label-text",children:"Mensagem"})}),(0,t.jsx)("textarea",{name:"message",value:e.message,onChange:s,className:"textarea textarea-bordered",placeholder:"Digite sua mensagem aqui..."})]}),(0,t.jsx)("div",{className:"form-control mt-6",children:(0,t.jsxs)("button",{type:"submit",className:"btn btn-primary",disabled:e.disabled,children:[(0,t.jsx)(r.G,{icon:l.FU$,size:"lg"}),(0,t.jsx)("span",{children:"Enviar"})]})})]})})};let d={name:"Valdir Ronis do Nascimento Silva",nickname:"Ronis Xogum",title:"Desenvolvedor Full-Stack",location:"Fortaleza, Cear\xe1, Brasil",contact:{email:"ronis@rx.dev.br",linkedin:"https://www.linkedin.com/in/rxpt/",github:"https://www.github.com/rxpt"}};var m=()=>(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"hero min-h-screen",style:{backgroundImage:"url(https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"},children:[(0,t.jsx)("div",{className:"hero-overlay bg-opacity-60"}),(0,t.jsxs)("div",{className:"hero-content flex-col lg:flex-row",children:[(0,t.jsxs)("div",{className:"text-center lg:text-right text-neutral-content max-w-md",children:[(0,t.jsx)("h1",{className:"mb-5 text-5xl font-bold",children:d.name}),(0,t.jsx)("h2",{className:"mb-5 text-2xl",children:d.title}),(0,t.jsxs)("p",{className:"mb-5 text-sm",children:[d.location," ",(0,t.jsx)(r.G,{icon:l.opg})]})]}),(0,t.jsx)(c,{})]})]})}),u=e=>{let{title:a,color:s="neutral",children:o}=e;return(0,t.jsxs)("section",{className:"mb-6",children:[(0,t.jsx)("h2",{className:"divider divider-".concat(s," text-4xl italic font-bold my-6 py-6 text-").concat(s),children:a}),o]})},p=s(6486),x=s.n(p);let h=function(e,a){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=x().flatMap(e,a);return s?x().uniq(t).sort():x().uniq(t)};var v=e=>{let{data:a,name:s,onClick:o}=e,i=h(a,s,!0),[r,l]=(0,n.useState)("All"),c=e=>{l(e),o(a.filter(a=>"All"===e||a[s].includes(e)))},d=e=>e===r,m=(e,a)=>(0,t.jsx)("button",{className:"btn btn-xs ".concat(d(e)&&"btn-active"," btn-outline btn-primary"),onClick:()=>c(e),children:a||e},e);return(0,t.jsxs)("div",{className:"flex justify-center mb-6 flex-wrap gap-1",children:[m("All","Tudo"),i.map(e=>m(e))]})},b=s(1512),j=s(6691),g=s(3620);let f=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMM yyyy";return(0,b.WU)(new Date(e),a,{locale:g.F})},N=e=>{let a=!e.end||(0,j.A)(new Date(e.end)),s=e.currentText||"Atual",t=f(e.start),o=a?s:f(e.end);return"".concat(t," - ").concat(o)},w=[{role:"Desenvolvedor Full-Stack Freelancer",company:"Freelancer",period:{start:"07-01-2020"},location:"Hibrido (Fortaleza, CE)",achievements:["Projetou e implementou sistemas e bancos de dados de alta complexidade, garantindo desempenho e escalabilidade.","Desenvolveu aplicativos m\xf3veis e web de ponta a ponta utilizando PHP, MySQL, React Native, JavaScript (Node.js) e MongoDB.","Gerenciou projetos de forma aut\xf4noma, mantendo comunica\xe7\xe3o eficaz com clientes para entrega de solu\xe7\xf5es personalizadas."],technologies:["PHP","MySQL","React Native","JavaScript","MongoDB","Hardware","Redes","HTML","CSS"]},{role:"Desenvolvedor Full-Stack",company:"Plante Amor/Murau",period:{start:"03-01-2020",end:"07-01-2020"},location:"S\xe3o Jos\xe9 do Rio Preto, SP",achievements:["Revitalizou a interface de loja virtual utilizando VTEX, melhorando a experi\xeancia do usu\xe1rio e a funcionalidade do site.","Desenvolveu um aplicativo de vendas mobile totalmente integrado com sistemas TOTVS (ERP) e VTEX, utilizando React Native e MongoDB.","Conduziu todas as fases do projeto, desde a concep\xe7\xe3o at\xe9 os testes finais, demonstrando lideran\xe7a t\xe9cnica e habilidades de gerenciamento."],technologies:["VTEX","React Native","MongoDB","TOTVS","HTML","CSS","JavaScript"]},{role:"Desenvolvedor Full-Stack",company:"Grupo Biagi/Boxsupreme.com.br",period:{start:"09-01-2019",end:"02-01-2020"},location:"S\xe3o Jos\xe9 do Rio Preto, SP",achievements:["Liderou a migra\xe7\xe3o do sistema de vendas de ASP para PHP e MariaDB em ambiente AWS EC2, modernizando a infraestrutura tecnol\xf3gica.","Manteve e aprimorou o sistema de gerenciamento de tempo da loja Boxsupreme, melhorando a efici\xeancia operacional."],technologies:["ASP","PHP","MariaDB","AWS EC2","Hardware","HTML","CSS","JavaScript"]},{role:"Assistente de TI",company:"Ra\xedzes Solu\xe7\xf5es",period:{start:"04-01-2019",end:"08-01-2019"},location:"S\xe3o Jos\xe9 do Rio Preto, SP",achievements:["Assegurou a opera\xe7\xe3o cont\xednua do site de e-commerce e desenvolveu APIs robustas utilizando PHP e MySQL.","Desenvolveu um aplicativo m\xf3vel com React Native, expandindo a presen\xe7a digital da empresa.","Realizou a configura\xe7\xe3o de Outlook e a manuten\xe7\xe3o de computadores, otimizando a infraestrutura de TI."],technologies:["PHP","MySQL","React Native","Hardware","Redes","HTML","CSS","JavaScript"]},{role:"Suporte T\xe9cnico",company:"Freelancer",period:{start:"12-01-2008",end:"03-01-2019"},location:"Hibrido (Fortaleza, CE)",achievements:["Forneceu suporte t\xe9cnico especializado para supermercados e lojas, resolvendo quest\xf5es complexas de hardware e software.","Desenvolveu aplicativos personalizados, ampliando a automa\xe7\xe3o e efici\xeancia dos processos dos clientes."],technologies:["Hardware","Redes","HTML","CSS","JavaScript","PostgreSQL","MySQL"]},{role:"Analista de Dados",company:"Hipermercadinho Local",period:{start:"10-01-2007",end:"11-01-2008"},location:"Fortaleza, CE",achievements:["Gerenciou um banco de dados extenso com mais de 100.000 produtos, garantindo a integridade e atualiza\xe7\xe3o das informa\xe7\xf5es.","Executou a entrada de notas fiscais e o cadastro de novos produtos no sistema SysPDV, otimizando o fluxo de trabalho.","Respons\xe1vel pela manuten\xe7\xe3o dos pontos de venda e demais computadores, assegurando o bom funcionamento dos equipamentos.","Gerenciou planilhas de pagamentos e funcion\xe1rios, mantendo a organiza\xe7\xe3o e precis\xe3o das informa\xe7\xf5es financeiras e administrativas."],technologies:["SysPDV","Excel","PostgreSQL","Hardware","Redes"]}];var S=e=>{let{timeline:a,orientation:s="vertical"}=e;return(0,t.jsx)("ul",{className:"timeline max-md:timeline-compact timeline-".concat(s),children:a.map((e,s)=>(0,t.jsxs)("li",{className:"timeline-item",children:[0!==s&&(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"timeline-middle",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}),(0,t.jsxs)("div",{className:"timeline-".concat(s%2==0?"start":"end"," timeline-box"),children:[(0,t.jsx)("div",{className:"text-lg",children:e.title}),(0,t.jsx)("div",{className:"font-mono italic",children:e.subtitle}),e.content&&(0,t.jsx)("div",{children:e.content}),e.date&&(0,t.jsx)("div",{className:"font-mono italic",children:e.date})]}),s!==a.length-1&&(0,t.jsx)("hr",{})]},s))})},y=()=>{let[e,a]=(0,n.useState)(w);return(0,t.jsxs)(u,{title:"Experi\xeancia",children:[(0,t.jsx)(v,{name:"technologies",data:w,onClick:a}),(0,t.jsx)(S,{timeline:e.map(e=>({title:e.role,subtitle:"".concat(e.company," em ").concat(e.location),date:N({...e.period,currentText:"presente"}),content:(0,t.jsx)("ul",{className:"list-inside list-disc py-2",children:e.achievements.map((e,a)=>(0,t.jsx)("li",{children:e},a))})}))})]})},A=s(1664),M=s.n(A);let P=[{title:"Harpa Crist\xe3 para Android",description:"Desenvolvido com React Native, este aplicativo oferece uma experi\xeancia moderna e intuitiva para acessar todos os 640 hinos da Harpa Crist\xe3.",technologies:["React Native","JavaScript","TypeScript","MMKV"],link:"https://github.com/rxpt/harpa-crista-app"},{title:"Random Numbers with Exclusions",description:"A Random Numbers with Exclusions \xe9 uma fun\xe7\xe3o em JavaScript que gera n\xfameros aleat\xf3rios inteiros dentro de um intervalo definido. Ela oferece flexibilidade para especificar um intervalo m\xednimo e m\xe1ximo, excluir n\xfameros espec\xedficos ou intervalos do resultado e lidar com casos em que o valor m\xe1ximo n\xe3o \xe9 fornecido ou \xe9 fornecido como um objeto de op\xe7\xf5es. Com esta fun\xe7\xe3o, voc\xea pode facilmente obter n\xfameros aleat\xf3rios personalizados para suas necessidades, seja em jogos, simula\xe7\xf5es ou outras aplica\xe7\xf5es que exigem aleatoriedade.",technologies:["JavaScript"],link:"https://github.com/rxpt/random-numbers"},{title:"str-async-replace",description:"A str-Async-Replace simplifica a substitui\xe7\xe3o ass\xedncrona de strings em JavaScript. Essa classe oferece m\xe9todos flex\xedveis para substituir partes de uma string por valores ass\xedncronos, como resultados de Promises ou fun\xe7\xf5es ass\xedncronas. Ela \xe9 ideal para Desenvolvedores que precisam realizar substitui\xe7\xf5es de strings com valores que dependem de opera\xe7\xf5es ass\xedncronas, como em aplica\xe7\xf5es que buscam dados de APIs externas ou processam informa\xe7\xf5es de forma ass\xedncrona.",technologies:["JavaScript","TypeScript"],link:"https://github.com/rxpt/str-async-replace"}];var E=()=>{let[e,a]=(0,n.useState)(P);return(0,t.jsxs)(u,{title:"Projetos",children:[(0,t.jsx)(v,{name:"technologies",data:P,onClick:a}),(0,t.jsxs)("div",{className:"mockup-browser bg-base-300",children:[(0,t.jsx)("div",{className:"mockup-browser-toolbar",children:(0,t.jsx)("div",{className:"input",children:d.contact.github})}),(0,t.jsx)("div",{className:"p-4 bg-base-200",children:e.map((e,a)=>(0,t.jsx)("div",{id:"project".concat(a),className:"m-5",children:(0,t.jsx)("div",{className:"card shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("h2",{className:"card-title",children:e.title}),(0,t.jsx)(M(),{href:e.link,target:"_blank",rel:"noreferrer",className:"btn btn-sm btn-neutral",children:"Ver projeto"})]}),(0,t.jsx)("div",{className:"card-actions",children:e.technologies.map((e,a)=>(0,t.jsx)("div",{className:"badge badge-outline badge-secondary",children:e},a))})]})})},a))})]})]})};let k=[{name:"Jerry Adriano",from:"Hipermercadinho Local",text:"O trabalho do Ronis \xe9 excelente, ele \xe9 muito dedicado e atencioso. Recomendo!"},{name:"Aglayrton Juli\xe3o",from:"Professor",text:"O Ronis \xe9 um excelente aluno, muito dedicado e esfor\xe7ado. Ele tem um futuro brilhante!"},{name:"Jovita Maria",from:"M\xe3e",text:"Meu filho \xe9 muito inteligente e esfor\xe7ado. Ele \xe9 um orgulho para a fam\xedlia!"},{name:d.nickname,from:":)",text:"❤️"}],z=e=>{let{name:a,from:s,children:o,position:i="start"}=e;return(0,t.jsxs)("div",{className:"chat chat-".concat(i," pb-6"),children:[(0,t.jsx)("div",{className:"chat-image avatar placeholder",children:(0,t.jsx)("div",{className:"bg-neutral text-neutral-content rounded-full w-8",children:(0,t.jsxs)("span",{className:"text-xs uppercase",children:[a.split(" ")[0][0],a.split(" ")[1][0]]})})}),(0,t.jsxs)("div",{className:"chat-header",children:[a," ",(0,t.jsx)("time",{className:"text-xs opacity-50",children:s})]}),(0,t.jsx)("div",{className:"chat-bubble",children:o})]})};var C=()=>(0,t.jsx)(u,{title:"Depoimentos",children:(0,t.jsx)("div",{className:"mockup-window bg-base-300",children:(0,t.jsx)("div",{className:"p-6 bg-base-200",children:k.map((e,a)=>(0,t.jsx)(z,{name:e.name,from:e.from,position:a%2==0?"start":"end",children:e.text},a))})})});let R=[{institution:"UNIASSELVI",degree:"Tecn\xf3logo em An\xe1lise e Desenvolvimento de Sistemas",period:{start:"02-01-2024",end:"07-01-2026"},observations:"Cursando 2\xba per\xedodo (previsto para t\xe9rmino em 2026)"},{institution:"Escola da Nuvem",degree:"Certifica\xe7\xe3o em Computa\xe7\xe3o em Nuvem",period:{start:"05-01-2024",end:"08-01-2024"}},{institution:"Autodidata",degree:"Desenvolvimento Web",period:{start:"08-01-1996"},observations:"Estudo cont\xednuo"}];var D=()=>(0,t.jsx)(u,{title:"Educa\xe7\xe3o",children:(0,t.jsx)(S,{timeline:R.map(e=>({title:e.degree,subtitle:e.institution,date:N({...e.period,currentText:e.observations})}))})});let H=[{name:"Java: Aplicando a Orienta\xe7\xe3o a Objetos",institution:"Alura",date:"04-01-2024",url:"https://cursos.alura.com.br/certificate/90c1c8d2-28b4-426e-8bd3-04149ca20f15?lang"},{name:"Forma\xe7\xe3o Empreendedorismo, Agilidade e Protagonismo",institution:"Alura",date:"04-01-2024",url:"https://cursos.alura.com.br/degree/certificate/9ea22cbb-6567-4fbd-8442-842869255c4e?lang"}];var T=()=>(0,t.jsx)(u,{title:"Cursos e Certifica\xe7\xf5es",children:(0,t.jsx)(S,{timeline:H.map(e=>({title:e.name,subtitle:"".concat(f(e.date)," - ").concat(e.institution),content:e.url?(0,t.jsx)(M(),{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-outline btn-primary mt-3",children:"Ver certificado"}):null}))})}),J=s(3024),L=()=>(0,t.jsxs)("footer",{className:"footer items-center p-4 bg-neutral text-neutral-content",children:[(0,t.jsxs)("aside",{className:"items-center grid-flow-col",children:[(0,t.jsx)(r.G,{icon:l.dT$,size:"2x"}),(0,t.jsx)("p",{children:"Vamos criar algo incr\xedvel juntos! Entre em contato."})]}),(0,t.jsx)("nav",{className:"grid-flow-col gap-4 md:place-self-center md:justify-self-end",children:Object.keys(d.contact).map(e=>{let a="email"===e,s={email:l.FU$,linkedin:J.D9H,github:J.zhw};return s[e]?(0,t.jsx)(M(),{href:"".concat(a?"mailto:":"").concat(d.contact[e]),className:"btn btn-square btn-ghost",children:(0,t.jsx)(r.G,{icon:s[e],size:"2x"})},e):null})})]}),F=()=>(0,t.jsx)("div",{className:"fixed top-4 right-4 z-50",children:(0,t.jsxs)("label",{className:"swap swap-rotate",children:[(0,t.jsx)("input",{type:"checkbox",className:"theme-controller",value:"light"}),(0,t.jsx)("svg",{className:"swap-off fill-current w-10 h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})}),(0,t.jsx)("svg",{className:"swap-on fill-current w-10 h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})})]})}),V=()=>(0,t.jsxs)("div",{children:[(0,t.jsx)(i(),{children:(0,t.jsxs)("title",{children:[d.name," - ",d.title," em ",d.location]})}),(0,t.jsx)(m,{}),(0,t.jsxs)("main",{className:"container px-4 mx-auto",children:[(0,t.jsx)(y,{}),(0,t.jsx)(D,{}),(0,t.jsx)(T,{}),(0,t.jsx)(E,{}),(0,t.jsx)(C,{})]}),(0,t.jsx)(F,{}),(0,t.jsx)(L,{})]})}},function(e){e.O(0,[976,948,662,119,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);