import{X as s,Y as e,Z as o,$ as r}from"./entry-c57c220d.mjs";class t{constructor(a){this.router=a}async goTo(a){await e({hash:"#"+a.name}),a.goTo()}screenByName(a){return o.find(r,{name:a})}}const i=()=>new t(s());export{i as u};
