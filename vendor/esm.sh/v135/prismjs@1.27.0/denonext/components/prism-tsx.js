/* esm.sh - esbuild bundle(prismjs@1.27.0/components/prism-tsx) denonext production */
var x=Object.create;var u=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty;var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),v=(e,t)=>{for(var a in t)u(e,a,{get:t[a],enumerable:!0})},r=(e,t,a,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let g of c(t))!i.call(e,g)&&g!==a&&u(e,g,{get:()=>t[g],enumerable:!(p=f(t,g))||p.enumerable});return e},n=(e,t,a)=>(r(e,t,"default"),a&&r(a,t,"default")),s=(e,t,a)=>(a=e!=null?x(_(e)):{},r(t||!e||!e.__esModule?u(a,"default",{value:e,enumerable:!0}):a,e));var o=y(()=>{(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var a=e.languages.tsx.tag;a.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+a.pattern.source+")",a.pattern.flags),a.lookbehind=!0})(Prism)});var l={};v(l,{default:()=>j});var b=s(o());n(l,s(o()));var{default:d,...h}=b,j=d!==void 0?d:h;export{j as default};
//# sourceMappingURL=prism-tsx.js.map