import{p as i,D as v,a5 as d}from"./iframe.0129ec0e.js";var s=i,f=v,g=d,m=RangeError,e=String.fromCharCode,n=String.fromCodePoint,u=f([].join),C=!!n&&n.length!=1;s({target:"String",stat:!0,arity:1,forced:C},{fromCodePoint:function(h){for(var t=[],a=arguments.length,o=0,r;a>o;){if(r=+arguments[o++],g(r,1114111)!==r)throw m(r+" is not a valid code point");t[o]=r<65536?e(r):e(((r-=65536)>>10)+55296,r%1024+56320)}return u(t,"")}});
//# sourceMappingURL=es.string.from-code-point.bde893f7.js.map