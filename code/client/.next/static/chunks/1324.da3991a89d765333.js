"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1324],{71324:function(t,e,i){i.d(e,{diagram:function(){return b}});var n=i(82466),r=i(29868),s=i(47284),a=i(99894),l=i(56304);i(74548),i(41417),i(43571);var c=function(){var o=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},t=[6,8,10,11,12,14,16,17,20,21],e=[1,9],i=[1,10],n=[1,11],r=[1,12],s=[1,13],a=[1,16],l=[1,17],c={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:function(t,e,i,n,r,s,a){var l=s.length-1;switch(r){case 1:return s[l-1];case 2:case 6:case 7:this.$=[];break;case 3:s[l-1].push(s[l]),this.$=s[l-1];break;case 4:case 5:this.$=s[l];break;case 8:n.getCommonDb().setDiagramTitle(s[l].substr(6)),this.$=s[l].substr(6);break;case 9:this.$=s[l].trim(),n.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=s[l].trim(),n.getCommonDb().setAccDescription(this.$);break;case 12:n.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 15:n.addTask(s[l],0,""),this.$=s[l];break;case 16:n.addEvent(s[l].substr(2)),this.$=s[l]}},table:[{3:1,4:[1,2]},{1:[3]},o(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:e,12:i,14:n,16:r,17:s,18:14,19:15,20:a,21:l},o(t,[2,7],{1:[2,1]}),o(t,[2,3]),{9:18,11:e,12:i,14:n,16:r,17:s,18:14,19:15,20:a,21:l},o(t,[2,5]),o(t,[2,6]),o(t,[2,8]),{13:[1,19]},{15:[1,20]},o(t,[2,11]),o(t,[2,12]),o(t,[2,13]),o(t,[2,14]),o(t,[2,15]),o(t,[2,16]),o(t,[2,4]),o(t,[2,9]),o(t,[2,10])],defaultActions:{},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],n=[],r=[null],s=[],a=this.table,l="",c=0,h=0,d=s.slice.call(arguments,1),u=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);u.setInput(t,p.yy),p.yy.lexer=u,p.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var g=u.yylloc;s.push(g);var f=u.options&&u.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,x,b,_,k,w,v,S,$={};;){if(x=i[i.length-1],this.defaultActions[x]?b=this.defaultActions[x]:(null==m&&(m=function(){var t;return"number"!=typeof(t=n.pop()||u.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}()),b=a[x]&&a[x][m]),void 0===b||!b.length||!b[0]){var T="";for(k in S=[],a[x])this.terminals_[k]&&k>2&&S.push("'"+this.terminals_[k]+"'");T=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(T,{text:u.match,token:this.terminals_[m]||m,line:u.yylineno,loc:g,expected:S})}if(b[0]instanceof Array&&b.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+m);switch(b[0]){case 1:i.push(m),r.push(u.yytext),s.push(u.yylloc),i.push(b[1]),m=null,h=u.yyleng,l=u.yytext,c=u.yylineno,g=u.yylloc;break;case 2:if(w=this.productions_[b[1]][1],$.$=r[r.length-w],$._$={first_line:s[s.length-(w||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(w||1)].first_column,last_column:s[s.length-1].last_column},f&&($._$.range=[s[s.length-(w||1)].range[0],s[s.length-1].range[1]]),void 0!==(_=this.performAction.apply($,[l,h,c,p.yy,b[1],r,s].concat(d))))return _;w&&(i=i.slice(0,-1*w*2),r=r.slice(0,-1*w),s=s.slice(0,-1*w)),i.push(this.productions_[b[1]][0]),r.push($.$),s.push($._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return c.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}},Parser.prototype=c,c.Parser=Parser,new Parser}();c.parser=c;let h="",d=0,u=[],p=[],y=[],getCommonDb=()=>n.L,clear=function(){u.length=0,p.length=0,h="",y.length=0,(0,n.v)()},addSection=function(t){h=t,u.push(t)},getSections=function(){return u},getTasks=function(){let t=compileTasks(),e=0;for(;!t&&e<100;)t=compileTasks(),e++;return p.push(...y),p},addTask=function(t,e,i){let n={id:d++,section:h,type:h,task:t,score:e||0,events:i?[i]:[]};y.push(n)},addEvent=function(t){let e=y.find(t=>t.id===d-1);e.events.push(t)},addTaskOrg=function(t){let e={section:h,type:h,description:t,task:t,classes:[]};p.push(e)},compileTasks=function(){let t=!0;for(let[e,i]of y.entries())y[e].processed,t=t&&i.processed;return t},g=Object.freeze(Object.defineProperty({__proto__:null,addEvent,addSection,addTask,addTaskOrg,clear,default:{clear,getCommonDb,addSection,getSections,getTasks,addTask,addTaskOrg,addEvent},getCommonDb,getSections,getTasks},Symbol.toStringTag,{value:"Module"})),drawRect=function(t,e){let i=t.append("rect");return i.attr("x",e.x),i.attr("y",e.y),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("width",e.width),i.attr("height",e.height),i.attr("rx",e.rx),i.attr("ry",e.ry),void 0!==e.class&&i.attr("class",e.class),i},drawFace=function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),n=t.append("g");return n.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),n.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){let i=(0,r.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(n):e.score<3?function(t){let i=(0,r.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(n):function(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(n),i},drawText=function(t,e){let i=e.text.replace(/<br\s*\/?>/gi," "),n=t.append("text");n.attr("x",e.x),n.attr("y",e.y),n.attr("class","legend"),n.style("text-anchor",e.anchor),void 0!==e.class&&n.attr("class",e.class);let r=n.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(i),n},f=-1,getNoteRect=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},m=function(){function byText(t,e,i,n,r,s,a,l){let c=e.append("text").attr("x",i+r/2).attr("y",n+s/2+5).style("font-color",l).style("text-anchor","middle").text(t);_setTextAttrs(c,a)}function byTspan(t,e,i,n,r,s,a,l,c){let{taskFontSize:h,taskFontFamily:d}=l,u=t.split(/<br\s*\/?>/gi);for(let t=0;t<u.length;t++){let l=t*h-h*(u.length-1)/2,p=e.append("text").attr("x",i+r/2).attr("y",n).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",d);p.append("tspan").attr("x",i+r/2).attr("dy",l).text(u[t]),p.attr("y",n+s/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),_setTextAttrs(p,a)}}function byFo(t,e,i,n,r,s,a,l){let c=e.append("switch"),h=c.append("foreignObject").attr("x",i).attr("y",n).attr("width",r).attr("height",s).attr("position","fixed"),d=h.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),byTspan(t,c,i,n,r,s,a,l),_setTextAttrs(d,a)}function _setTextAttrs(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return function(t){return"fo"===t.textPlacement?byFo:"old"===t.textPlacement?byText:byTspan}}();function wrap(t,e){t.each(function(){var t,i=(0,r.Ys)(this),n=i.text().split(/(\s+|<br>)/).reverse(),s=[],a=i.attr("y"),l=parseFloat(i.attr("dy")),c=i.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",l+"em");for(let r=0;r<n.length;r++)t=n[n.length-1-r],s.push(t),c.text(s.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(s.pop(),c.text(s.join(" ").trim()),s="<br>"===t?[""]:[t],c=i.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))})}let defaultBkg=function(t,e,i){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${-e.height+10} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+i).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},x={drawRect,drawCircle:function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},drawSection:function(t,e,i){let n=t.append("g"),r=getNoteRect();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=i.width,r.height=i.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,drawRect(n,r),m(i)(e.text,n,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},i,e.colour)},drawText,drawLabel:function(t,e){var i,n;let r=t.append("polygon");r.attr("points",(i=e.x)+","+(n=e.y)+" "+(i+50)+","+n+" "+(i+50)+","+(n+20-7)+" "+(i+50-8.4)+","+(n+20)+" "+i+","+(n+20)),r.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,drawText(t,e)},drawTask:function(t,e,i){let n=e.x+i.width/2,r=t.append("g");f++,r.append("line").attr("id","task"+f).attr("x1",n).attr("y1",e.y).attr("x2",n).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),drawFace(r,{cx:n,cy:300+(5-e.score)*30,score:e.score});let s=getNoteRect();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width,s.height=i.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,drawRect(r,s),e.x,m(i)(e.task,r,s.x,s.y,s.width,s.height,{class:"task"},i,e.colour)},drawBackgroundRect:function(t,e){let i=drawRect(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"});i.lower()},getTextObj:function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},getNoteRect,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},drawNode:function(t,e,i,n){let r=i%12-1,s=t.append("g");e.section=r,s.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+r);let a=s.append("g"),l=s.append("g"),c=l.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(wrap,e.width),h=c.node().getBBox(),d=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return e.height=h.height+.55*d+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,l.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),defaultBkg(a,e,r),e},getVirtualNodeHeight:function(t,e,i){let n=t.append("g"),r=n.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(wrap,e.width),s=r.node().getBBox(),a=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return n.remove(),s.height+.55*a+e.padding}},drawTasks=function(t,e,i,r,s,a,l,c,h,d,u){var p;for(let c of e){let e={descr:c.task,section:i,number:i,width:150,padding:20,maxHeight:a};n.l.debug("taskNode",e);let y=t.append("g").attr("class","taskWrapper"),g=x.drawNode(y,e,i,l),f=g.height;if(n.l.debug("taskHeight after draw",f),y.attr("transform",`translate(${r}, ${s})`),a=Math.max(a,f),c.events){let e=t.append("g").attr("class","lineWrapper");s+=100,drawEvents(t,c.events,i,r,s,l),s-=100,e.append("line").attr("x1",r+95).attr("y1",s+a).attr("x2",r+95).attr("y2",s+a+(u?a:d)+h+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}r+=200,u&&!(null==(p=l.timeline)?void 0:p.disableMulticolor)&&i++}},drawEvents=function(t,e,i,r,s,a){let l=0,c=s;for(let c of(s+=100,e)){let e={descr:c,section:i,number:i,width:150,padding:20,maxHeight:50};n.l.debug("eventNode",e);let h=t.append("g").attr("class","eventWrapper"),d=x.drawNode(h,e,i,a),u=d.height;l+=u,h.attr("transform",`translate(${r}, ${s})`),s=s+10+u}return s=c,l},genSections=t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,s.Z)(t["lineColor"+e])?t["lineColor"+e]=(0,a.Z)(t["lineColor"+e],20):t["lineColor"+e]=(0,l.Z)(t["lineColor"+e],20);for(let i=0;i<t.THEME_COLOR_LIMIT;i++){let n=""+(17-3*i);e+=`
    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} path  {
      fill: ${t["cScale"+i]};
    }
    .section-${i-1} text {
     fill: ${t["cScaleLabel"+i]};
    }
    .node-icon-${i-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+i]};
    }
    .section-edge-${i-1}{
      stroke: ${t["cScale"+i]};
    }
    .edge-depth-${i-1}{
      stroke-width: ${n};
    }
    .section-${i-1} line {
      stroke: ${t["cScaleInv"+i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel"+i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return e},b={db:g,renderer:{setConf:()=>{},draw:function(t,e,i,s){var a,l;let c;let h=(0,n.c)(),d=h.leftMargin??50;n.l.debug("timeline",s.db);let u=h.securityLevel;"sandbox"===u&&(c=(0,r.Ys)("#i"+e));let p="sandbox"===u?(0,r.Ys)(c.nodes()[0].contentDocument.body):(0,r.Ys)("body"),y=p.select("#"+e);y.append("g");let g=s.db.getTasks(),f=s.db.getCommonDb().getDiagramTitle();n.l.debug("task",g),x.initGraphics(y);let m=s.db.getSections();n.l.debug("sections",m);let b=0,_=0,k=0,w=0,v=50+d,S=50;w=50;let $=0,T=!0;m.forEach(function(t){let e={number:$,descr:t,section:$,width:150,padding:20,maxHeight:b},i=x.getVirtualNodeHeight(y,e,h);n.l.debug("sectionHeight before draw",i),b=Math.max(b,i+20)});let E=0,I=0;for(let[t,e]of(n.l.debug("tasks.length",g.length),g.entries())){let i={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:_},r=x.getVirtualNodeHeight(y,i,h);n.l.debug("taskHeight before draw",r),_=Math.max(_,r+20),E=Math.max(E,e.events.length);let s=0;for(let t=0;t<e.events.length;t++){let i=e.events[t],n={descr:i,section:e.section,number:e.section,width:150,padding:20,maxHeight:50};s+=x.getVirtualNodeHeight(y,n,h)}I=Math.max(I,s)}n.l.debug("maxSectionHeight before draw",b),n.l.debug("maxTaskHeight before draw",_),m&&m.length>0?m.forEach(t=>{let e=g.filter(e=>e.section===t),i={number:$,descr:t,section:$,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:b};n.l.debug("sectionNode",i);let r=y.append("g"),s=x.drawNode(r,i,$,h);n.l.debug("sectionNode output",s),r.attr("transform",`translate(${v}, ${w})`),S+=b+50,e.length>0&&drawTasks(y,e,$,v,S,_,h,E,I,b,!1),v+=200*Math.max(e.length,1),S=w,$++}):(T=!1,drawTasks(y,g,$,v,S,_,h,E,I,b,!0));let N=y.node().getBBox();n.l.debug("bounds",N),f&&y.append("text").text(f).attr("x",N.width/2-d).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),k=T?b+_+150:_+100;let A=y.append("g").attr("class","lineWrapper");A.append("line").attr("x1",d).attr("y1",k).attr("x2",N.width+3*d).attr("y2",k).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,n.o)(void 0,y,(null==(a=h.timeline)?void 0:a.padding)??50,(null==(l=h.timeline)?void 0:l.useMaxWidth)??!1)}},parser:c,styles:t=>`
  .edge {
    stroke-width: 3;
  }
  ${genSections(t)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`}}}]);