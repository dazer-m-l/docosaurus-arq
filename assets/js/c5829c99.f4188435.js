"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3743],{9942:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Observer/Observer-intro","title":"Patr\xf3n Observer","description":"---","source":"@site/docs/01-Observer/01-Observer-intro.md","sourceDirName":"01-Observer","slug":"/Observer/Observer-intro","permalink":"/docosaurus-arq/docs/Observer/Observer-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/dazer-m-l/docosaurus-arq/tree/main/docs/docs/01-Observer/01-Observer-intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Patr\xf3n Observer","permalink":"/docosaurus-arq/docs/category/patr\xf3n-observer"},"next":{"title":"Caracter\xedsticas del Patr\xf3n Observer","permalink":"/docosaurus-arq/docs/Observer/Observer-Caracteristicas"}}');var o=s(4848),a=s(8453);const t={},i="Patr\xf3n Observer",c={},d=[{value:"Representaci\xf3n gr\xe1fica",id:"representaci\xf3n-gr\xe1fica",level:2},{value:"Componentes del patr\xf3n Observer",id:"componentes-del-patr\xf3n-observer",level:2}];function l(e){const r={h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"patr\xf3n-observer",children:"Patr\xf3n Observer"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsxs)(r.p,{children:["El ",(0,o.jsx)(r.strong,{children:"Patr\xf3n Observer"})," es uno de los patrones de dise\xf1o m\xe1s conocidos y utilizados. Este patr\xf3n sigue el principio de ",(0,o.jsx)(r.strong,{children:"desacoplamiento"}),' entre los objetos, es decir, reduce las dependencias directas entre los objetos. En lugar de que un objeto interact\xfae directamente con otros, se establece una relaci\xf3n de "notificaci\xf3n", donde un objeto (llamado sujeto u observable) notifica a otros objetos (llamados observadores) de cualquier cambio que ocurra, sin necesidad de que los observadores pregunten constantemente por esa informaci\xf3n.']}),"\n",(0,o.jsx)(r.h2,{id:"representaci\xf3n-gr\xe1fica",children:"Representaci\xf3n gr\xe1fica"}),"\n",(0,o.jsx)(r.p,{children:"El diagrama UML del patr\xf3n Observer se ve as\xed:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:"https://refactoring.guru/images/patterns/diagrams/observer/structure.png",alt:"Diagrama UML del patr\xf3n Observer"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"componentes-del-patr\xf3n-observer",children:"Componentes del patr\xf3n Observer"}),"\n",(0,o.jsx)(r.p,{children:"Para comprender mejor c\xf3mo funciona el patr\xf3n Observer, es importante conocer sus componentes clave:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["El ",(0,o.jsx)(r.strong,{children:"sujeto observable"})," es el objeto que mantiene una lista de observadores y notifica a estos observadores cuando cambia su estado. Puede haber varios sujetos observables en una aplicaci\xf3n, y cada uno puede tener su propia lista de observadores."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Los ",(0,o.jsx)(r.strong,{children:"observadores"})," son objetos que desean ser notificados cuando cambia el estado del sujeto observable. Cada observador implementa una interfaz o clase abstracta que define un m\xe9todo de actualizaci\xf3n. Este m\xe9todo se llama autom\xe1ticamente cuando el sujeto observable notifica un cambio."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.p,{children:"Este patr\xf3n es ideal en situaciones donde el cambio de estado de un objeto requiere que varios otros objetos sean informados y actualizados autom\xe1ticamente, sin necesidad de que esos objetos conozcan la existencia o detalles internos unos de otros."}),"\n",(0,o.jsx)(r.p,{children:"Un ejemplo cl\xe1sico de este patr\xf3n es un sistema de notificaci\xf3n en aplicaciones, como una aplicaci\xf3n de clima en donde los usuarios desean recibir notificaciones cuando el pron\xf3stico cambie."}),"\n",(0,o.jsx)(r.hr,{})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>i});var n=s(6540);const o={},a=n.createContext(o);function t(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);