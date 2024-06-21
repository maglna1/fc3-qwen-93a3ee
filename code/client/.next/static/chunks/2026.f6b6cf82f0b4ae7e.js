"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2026],{42026:function(t,e,n){n.d(e,{diagram:function(){return k}});var i=n(82466),r=n(29868);function min(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n>e||void 0===n&&e>=e)&&(n=e);else{let i=-1;for(let r of t)null!=(r=e(r,++i,t))&&(n>r||void 0===n&&r>=r)&&(n=r)}return n}function targetDepth(t){return t.target.depth}function justify(t,e){return t.sourceLinks.length?t.depth:e-1}function sum(t,e){let n=0;if(void 0===e)for(let e of t)(e=+e)&&(n+=e);else{let i=-1;for(let r of t)(r=+e(r,++i,t))&&(n+=r)}return n}function max(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n<e||void 0===n&&e>=e)&&(n=e);else{let i=-1;for(let r of t)null!=(r=e(r,++i,t))&&(n<r||void 0===n&&r>=r)&&(n=r)}return n}function constant(t){return function(){return t}}function ascendingSourceBreadth(t,e){return ascendingBreadth(t.source,e.source)||t.index-e.index}function ascendingTargetBreadth(t,e){return ascendingBreadth(t.target,e.target)||t.index-e.index}function ascendingBreadth(t,e){return t.y0-e.y0}function value(t){return t.value}function defaultId(t){return t.index}function defaultNodes(t){return t.nodes}function defaultLinks(t){return t.links}function find(t,e){let n=t.get(e);if(!n)throw Error("missing: "+e);return n}function computeLinkBreadths({nodes:t}){for(let e of t){let t=e.y0,n=t;for(let n of e.sourceLinks)n.y0=t+n.width/2,t+=n.width;for(let t of e.targetLinks)t.y1=n+t.width/2,n+=t.width}}var s=Math.PI,l=2*s,a=l-1e-6;function Path(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function path(){return new Path}Path.prototype=path.prototype={constructor:Path,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(t,e,n,i,r,s){this._+="C"+ +t+","+ +e+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(t,e,n,i,r){t=+t,e=+e,n=+n,i=+i,r=+r;var l=this._x1,a=this._y1,h=n-t,c=i-e,u=l-t,f=a-e,y=u*u+f*f;if(r<0)throw Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(y>1e-6){if(Math.abs(f*h-c*u)>1e-6&&r){var d=n-l,p=i-a,g=h*h+c*c,_=Math.sqrt(g),k=Math.sqrt(y),m=r*Math.tan((s-Math.acos((g+y-(d*d+p*p))/(2*_*k)))/2),x=m/k,v=m/_;Math.abs(x-1)>1e-6&&(this._+="L"+(t+x*u)+","+(e+x*f)),this._+="A"+r+","+r+",0,0,"+ +(f*d>u*p)+","+(this._x1=t+v*h)+","+(this._y1=e+v*c)}else this._+="L"+(this._x1=t)+","+(this._y1=e)}},arc:function(t,e,n,i,r,h){t=+t,e=+e,n=+n,h=!!h;var c=n*Math.cos(i),u=n*Math.sin(i),f=t+c,y=e+u,d=1^h,p=h?i-r:r-i;if(n<0)throw Error("negative radius: "+n);null===this._x1?this._+="M"+f+","+y:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-y)>1e-6)&&(this._+="L"+f+","+y),n&&(p<0&&(p=p%l+l),p>a?this._+="A"+n+","+n+",0,1,"+d+","+(t-c)+","+(e-u)+"A"+n+","+n+",0,1,"+d+","+(this._x1=f)+","+(this._y1=y):p>1e-6&&(this._+="A"+n+","+n+",0,"+ +(p>=s)+","+d+","+(this._x1=t+n*Math.cos(r))+","+(this._y1=e+n*Math.sin(r))))},rect:function(t,e,n,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}};var h=Array.prototype.slice;function src_constant(t){return function(){return t}}function point_x(t){return t[0]}function point_y(t){return t[1]}function linkSource(t){return t.source}function linkTarget(t){return t.target}function curveHorizontal(t,e,n,i,r){t.moveTo(e,n),t.bezierCurveTo(e=(e+i)/2,n,e,r,i,r)}function horizontalSource(t){return[t.source.x1,t.y0]}function horizontalTarget(t){return[t.target.x0,t.y1]}n(74548),n(41417),n(43571);var c=function(){var o=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},t=[1,9],e=[1,10],n=[1,5,10,12],i={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(t,e,n,i,r,s,l){var a=s.length-1;switch(r){case 7:let h=i.findOrCreateNode(s[a-4].trim().replaceAll('""','"')),c=i.findOrCreateNode(s[a-2].trim().replaceAll('""','"')),u=parseFloat(s[a].trim());i.addLink(h,c,u);break;case 8:case 9:case 11:this.$=s[a];break;case 10:this.$=s[a-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:t,20:e},{1:[2,6],7:11,10:[1,12]},o(e,[2,4],{9:13,5:[1,14]}),{12:[1,15]},o(n,[2,8]),o(n,[2,9]),{19:[1,16]},o(n,[2,11]),{1:[2,1]},{1:[2,5]},o(e,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:t,20:e},{15:18,16:7,17:8,18:t,20:e},{18:[1,19]},o(e,[2,3]),{12:[1,20]},o(n,[2,10]),{15:21,16:7,17:8,18:t,20:e},o([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var n=Error(t);throw n.hash=e,n}},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],l=this.table,a="",h=0,c=0,u=s.slice.call(arguments,1),f=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);f.setInput(t,y.yy),y.yy.lexer=f,y.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var p=f.yylloc;s.push(p);var g=f.options&&f.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,k,m,x,v,b,S,E,w={};;){if(k=n[n.length-1],this.defaultActions[k]?m=this.defaultActions[k]:(null==_&&(_=function(){var t;return"number"!=typeof(t=i.pop()||f.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}()),m=l[k]&&l[k][_]),void 0===m||!m.length||!m[0]){var L="";for(v in E=[],l[k])this.terminals_[v]&&v>2&&E.push("'"+this.terminals_[v]+"'");L=f.showPosition?"Parse error on line "+(h+1)+":\n"+f.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(L,{text:f.match,token:this.terminals_[_]||_,line:f.yylineno,loc:p,expected:E})}if(m[0]instanceof Array&&m.length>1)throw Error("Parse Error: multiple actions possible at state: "+k+", token: "+_);switch(m[0]){case 1:n.push(_),r.push(f.yytext),s.push(f.yylloc),n.push(m[1]),_=null,c=f.yyleng,a=f.yytext,h=f.yylineno,p=f.yylloc;break;case 2:if(b=this.productions_[m[1]][1],w.$=r[r.length-b],w._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},g&&(w._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(x=this.performAction.apply(w,[a,c,h,y.yy,m[1],r,s].concat(u))))return x;b&&(n=n.slice(0,-1*b*2),r=r.slice(0,-1*b),s=s.slice(0,-1*b)),n.push(this.productions_[m[1]][0]),r.push(w.$),s.push(w._$),S=l[n[n.length-2]][n[n.length-1]],n.push(S);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return i.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,n,i,r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}},Parser.prototype=i,i.Parser=Parser,new Parser}();c.parser=c;let u=[],f=[],y={};let SankeyLink=class SankeyLink{constructor(t,e,n=0){this.source=t,this.target=e,this.value=n}};let SankeyNode=class SankeyNode{constructor(t){this.ID=t}};let d={nodesMap:y,getConfig:()=>(0,i.c)().sankey,getNodes:()=>f,getLinks:()=>u,getGraph:()=>({nodes:f.map(t=>({id:t.ID})),links:u.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),addLink:(t,e,n)=>{u.push(new SankeyLink(t,e,n))},findOrCreateNode:t=>(y[t=i.e.sanitizeText(t,(0,i.c)())]||(y[t]=new SankeyNode(t),f.push(y[t])),y[t]),getAccTitle:i.g,setAccTitle:i.s,getAccDescription:i.a,setAccDescription:i.b,getDiagramTitle:i.t,setDiagramTitle:i.q,clear:()=>{u=[],f=[],y={},(0,i.v)()}},p=class _Uid2{static next(t){return new _Uid2(t+ ++_Uid2.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}};p.count=0;let g={left:function(t){return t.depth},right:function(t,e){return e-1-t.height},center:function(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?min(t.sourceLinks,targetDepth)-1:0},justify:justify},prepareTextForParsing=t=>{let e=t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim();return e},_=c.parse.bind(c);c.parse=t=>_(prepareTextForParsing(t));let k={parser:c,db:d,renderer:{draw:function(t,e,n,s){let l,a;let{securityLevel:c,sankey:u}=(0,i.c)(),f=i.K.sankey;"sandbox"===c&&(l=(0,r.Ys)("#i"+e));let y="sandbox"===c?(0,r.Ys)(l.nodes()[0].contentDocument.body):(0,r.Ys)("body"),d="sandbox"===c?y.select(`[id="${e}"]`):(0,r.Ys)(`[id="${e}"]`),_=(null==u?void 0:u.width)??f.width,k=(null==u?void 0:u.height)??f.width,m=(null==u?void 0:u.useMaxWidth)??f.useMaxWidth,x=(null==u?void 0:u.nodeAlignment)??f.nodeAlignment,v=(null==u?void 0:u.prefix)??f.prefix,b=(null==u?void 0:u.suffix)??f.suffix,S=(null==u?void 0:u.showValues)??f.showValues,E=s.db.getGraph(),w=g[x],L=(function(){let t,e,n=0,i=0,r=1,s=1,l=24,a=8,h,c=defaultId,u=justify,f=defaultNodes,y=defaultLinks,d=6;function sankey(){let p={nodes:f.apply(null,arguments),links:y.apply(null,arguments)};return function({nodes:t,links:n}){for(let[e,n]of t.entries())n.index=e,n.sourceLinks=[],n.targetLinks=[];let i=new Map(t.map((e,n)=>[c(e,n,t),e]));for(let[t,e]of n.entries()){e.index=t;let{source:n,target:r}=e;"object"!=typeof n&&(n=e.source=find(i,n)),"object"!=typeof r&&(r=e.target=find(i,r)),n.sourceLinks.push(e),r.targetLinks.push(e)}if(null!=e)for(let{sourceLinks:n,targetLinks:i}of t)n.sort(e),i.sort(e)}(p),function({nodes:t}){for(let e of t)e.value=void 0===e.fixedValue?Math.max(sum(e.sourceLinks,value),sum(e.targetLinks,value)):e.fixedValue}(p),function({nodes:t}){let e=t.length,n=new Set(t),i=new Set,r=0;for(;n.size;){for(let t of n)for(let{target:e}of(t.depth=r,t.sourceLinks))i.add(e);if(++r>e)throw Error("circular link");n=i,i=new Set}}(p),function({nodes:t}){let e=t.length,n=new Set(t),i=new Set,r=0;for(;n.size;){for(let t of n)for(let{source:e}of(t.height=r,t.targetLinks))i.add(e);if(++r>e)throw Error("circular link");n=i,i=new Set}}(p),function(c){let f=function({nodes:e}){let i=max(e,t=>t.depth)+1,s=(r-n-l)/(i-1),a=Array(i);for(let t of e){let e=Math.max(0,Math.min(i-1,Math.floor(u.call(null,t,i))));t.layer=e,t.x0=n+e*s,t.x1=t.x0+l,a[e]?a[e].push(t):a[e]=[t]}if(t)for(let e of a)e.sort(t);return a}(c);h=Math.min(a,(s-i)/(max(f,t=>t.length)-1)),function(t){let n=min(t,t=>(s-i-(t.length-1)*h)/sum(t,value));for(let r of t){let t=i;for(let e of r)for(let i of(e.y0=t,e.y1=t+e.value*n,t=e.y1+h,e.sourceLinks))i.width=i.value*n;t=(s-t+h)/(r.length+1);for(let e=0;e<r.length;++e){let n=r[e];n.y0+=t*(e+1),n.y1+=t*(e+1)}(function(t){if(void 0===e)for(let{sourceLinks:e,targetLinks:n}of t)e.sort(ascendingTargetBreadth),n.sort(ascendingSourceBreadth)})(r)}}(f);for(let e=0;e<d;++e){let n=Math.pow(.99,e),i=Math.max(1-n,(e+1)/d);(function(e,n,i){for(let r=e.length,s=r-2;s>=0;--s){let r=e[s];for(let t of r){let e=0,i=0;for(let{target:n,value:r}of t.sourceLinks){let s=r*(n.layer-t.layer);e+=function(t,e){let n=e.y0-(e.targetLinks.length-1)*h/2;for(let{source:i,width:r}of e.targetLinks){if(i===t)break;n+=r+h}for(let{target:i,width:r}of t.sourceLinks){if(i===e)break;n-=r}return n}(t,n)*s,i+=s}if(!(i>0))continue;let r=(e/i-t.y0)*n;t.y0+=r,t.y1+=r,reorderNodeLinks(t)}void 0===t&&r.sort(ascendingBreadth),resolveCollisions(r,i)}})(f,n,i),function(e,n,i){for(let r=1,s=e.length;r<s;++r){let s=e[r];for(let t of s){let e=0,i=0;for(let{source:n,value:r}of t.targetLinks){let s=r*(t.layer-n.layer);e+=function(t,e){let n=t.y0-(t.sourceLinks.length-1)*h/2;for(let{target:i,width:r}of t.sourceLinks){if(i===e)break;n+=r+h}for(let{source:i,width:r}of e.targetLinks){if(i===t)break;n-=r}return n}(n,t)*s,i+=s}if(!(i>0))continue;let r=(e/i-t.y0)*n;t.y0+=r,t.y1+=r,reorderNodeLinks(t)}void 0===t&&s.sort(ascendingBreadth),resolveCollisions(s,i)}}(f,n,i)}}(p),computeLinkBreadths(p),p}function resolveCollisions(t,e){let n=t.length>>1,r=t[n];resolveCollisionsBottomToTop(t,r.y0-h,n-1,e),resolveCollisionsTopToBottom(t,r.y1+h,n+1,e),resolveCollisionsBottomToTop(t,s,t.length-1,e),resolveCollisionsTopToBottom(t,i,0,e)}function resolveCollisionsTopToBottom(t,e,n,i){for(;n<t.length;++n){let r=t[n],s=(e-r.y0)*i;s>1e-6&&(r.y0+=s,r.y1+=s),e=r.y1+h}}function resolveCollisionsBottomToTop(t,e,n,i){for(;n>=0;--n){let r=t[n],s=(r.y1-e)*i;s>1e-6&&(r.y0-=s,r.y1-=s),e=r.y0-h}}function reorderNodeLinks({sourceLinks:t,targetLinks:n}){if(void 0===e){for(let{source:{sourceLinks:t}}of n)t.sort(ascendingTargetBreadth);for(let{target:{targetLinks:e}}of t)e.sort(ascendingSourceBreadth)}}return sankey.update=function(t){return computeLinkBreadths(t),t},sankey.nodeId=function(t){return arguments.length?(c="function"==typeof t?t:constant(t),sankey):c},sankey.nodeAlign=function(t){return arguments.length?(u="function"==typeof t?t:constant(t),sankey):u},sankey.nodeSort=function(e){return arguments.length?(t=e,sankey):t},sankey.nodeWidth=function(t){return arguments.length?(l=+t,sankey):l},sankey.nodePadding=function(t){return arguments.length?(a=h=+t,sankey):a},sankey.nodes=function(t){return arguments.length?(f="function"==typeof t?t:constant(t),sankey):f},sankey.links=function(t){return arguments.length?(y="function"==typeof t?t:constant(t),sankey):y},sankey.linkSort=function(t){return arguments.length?(e=t,sankey):e},sankey.size=function(t){return arguments.length?(n=i=0,r=+t[0],s=+t[1],sankey):[r-n,s-i]},sankey.extent=function(t){return arguments.length?(n=+t[0][0],r=+t[1][0],i=+t[0][1],s=+t[1][1],sankey):[[n,i],[r,s]]},sankey.iterations=function(t){return arguments.length?(d=+t,sankey):d},sankey})().nodeId(t=>t.id).nodeWidth(10).nodePadding(10+(S?15:0)).nodeAlign(w).extent([[0,0],[_,k]]);L(E);let T=(0,r.PKp)(r.K2I);d.append("g").attr("class","nodes").selectAll(".node").data(E.nodes).join("g").attr("class","node").attr("id",t=>(t.uid=p.next("node-")).id).attr("transform",function(t){return"translate("+t.x0+","+t.y0+")"}).attr("x",t=>t.x0).attr("y",t=>t.y0).append("rect").attr("height",t=>t.y1-t.y0).attr("width",t=>t.x1-t.x0).attr("fill",t=>T(t.id)),d.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(E.nodes).join("text").attr("x",t=>t.x0<_/2?t.x1+6:t.x0-6).attr("y",t=>(t.y1+t.y0)/2).attr("dy",`${S?"0":"0.35"}em`).attr("text-anchor",t=>t.x0<_/2?"start":"end").text(({id:t,value:e})=>S?`${t}
${v}${Math.round(100*e)/100}${b}`:t);let A=d.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(E.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),M=(null==u?void 0:u.linkColor)||"gradient";if("gradient"===M){let t=A.append("linearGradient").attr("id",t=>(t.uid=p.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",t=>t.source.x1).attr("x2",t=>t.target.x0);t.append("stop").attr("offset","0%").attr("stop-color",t=>T(t.source.id)),t.append("stop").attr("offset","100%").attr("stop-color",t=>T(t.target.id))}switch(M){case"gradient":a=t=>t.uid;break;case"source":a=t=>T(t.source.id);break;case"target":a=t=>T(t.target.id);break;default:a=M}A.append("path").attr("d",(function(t){var e=linkSource,n=linkTarget,i=point_x,r=point_y,s=null;function link(){var l,a=h.call(arguments),c=e.apply(this,a),u=n.apply(this,a);if(s||(s=l=path()),t(s,+i.apply(this,(a[0]=c,a)),+r.apply(this,a),+i.apply(this,(a[0]=u,a)),+r.apply(this,a)),l)return s=null,l+""||null}return link.source=function(t){return arguments.length?(e=t,link):e},link.target=function(t){return arguments.length?(n=t,link):n},link.x=function(t){return arguments.length?(i="function"==typeof t?t:src_constant(+t),link):i},link.y=function(t){return arguments.length?(r="function"==typeof t?t:src_constant(+t),link):r},link.context=function(t){return arguments.length?(s=null==t?null:t,link):s},link})(curveHorizontal).source(horizontalSource).target(horizontalTarget)).attr("stroke",a).attr("stroke-width",t=>Math.max(1,t.width)),(0,i.o)(void 0,d,0,m)}}}}}]);