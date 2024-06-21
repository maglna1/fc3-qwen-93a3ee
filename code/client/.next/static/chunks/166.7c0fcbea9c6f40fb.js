"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{60166:function(t,e,i){i.d(e,{diagram:function(){return p}});var s=i(82466),n=i(29868);i(74548),i(41417),i(43571);var r=function(){var o=function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},t=[1,3],e=[1,4],i=[1,5],s=[1,6],n=[1,10,12,14,16,18,19,20,21,22],r=[2,4],l=[1,5,10,12,14,16,18,19,20,21,22],a=[20,21,22],c=[2,7],h=[1,12],u=[1,13],y=[1,14],p=[1,15],g=[1,16],d=[1,17],_={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,s,n,r,l){var a=r.length-1;switch(n){case 3:s.setShowData(!0);break;case 6:this.$=r[a-1];break;case 8:s.addSection(r[a-1],s.cleanupValue(r[a]));break;case 9:this.$=r[a].trim(),s.setDiagramTitle(this.$);break;case 10:this.$=r[a].trim(),s.setAccTitle(this.$);break;case 11:case 12:this.$=r[a].trim(),s.setAccDescription(this.$);break;case 13:s.addSection(r[a].substr(8)),this.$=r[a].substr(8)}},table:[{3:1,4:2,5:t,20:e,21:i,22:s},{1:[3]},{3:7,4:2,5:t,20:e,21:i,22:s},o(n,r,{6:8,7:[1,9]}),o(l,[2,14]),o(l,[2,15]),o(l,[2,16]),{1:[2,1]},o(a,c,{8:10,9:11,1:[2,2],10:h,12:u,14:y,16:p,18:g,19:d}),o(n,r,{6:18}),o(n,[2,5]),{4:19,20:e,21:i,22:s},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},o(a,[2,12]),o(a,[2,13]),o(a,c,{8:10,9:11,1:[2,3],10:h,12:u,14:y,16:p,18:g,19:d}),o(n,[2,6]),o(a,[2,8]),o(a,[2,9]),o(a,[2,10]),o(a,[2,11])],defaultActions:{7:[2,1]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],s=[],n=[null],r=[],l=this.table,a="",c=0,h=0,u=r.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(p.yy[g]=this.yy[g]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var d=y.yylloc;r.push(d);var _=y.options&&y.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var f,m,k,b,x,v,S,w,$={};;){if(m=i[i.length-1],this.defaultActions[m]?k=this.defaultActions[m]:(null==f&&(f=function(){var t;return"number"!=typeof(t=s.pop()||y.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}()),k=l[m]&&l[m][f]),void 0===k||!k.length||!k[0]){var E="";for(x in w=[],l[m])this.terminals_[x]&&x>2&&w.push("'"+this.terminals_[x]+"'");E=y.showPosition?"Parse error on line "+(c+1)+":\n"+y.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(E,{text:y.match,token:this.terminals_[f]||f,line:y.yylineno,loc:d,expected:w})}if(k[0]instanceof Array&&k.length>1)throw Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(k[0]){case 1:i.push(f),n.push(y.yytext),r.push(y.yylloc),i.push(k[1]),f=null,h=y.yyleng,a=y.yytext,c=y.yylineno,d=y.yylloc;break;case 2:if(v=this.productions_[k[1]][1],$.$=n[n.length-v],$._$={first_line:r[r.length-(v||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(v||1)].first_column,last_column:r[r.length-1].last_column},_&&($._$.range=[r[r.length-(v||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply($,[a,h,c,p.yy,k[1],n,r].concat(u))))return b;v&&(i=i.slice(0,-1*v*2),n=n.slice(0,-1*v),r=r.slice(0,-1*v)),i.push(this.productions_[k[1]][0]),n.push($.$),r.push($._$),S=l[i[i.length-2]][i[i.length-1]],i.push(S);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return _.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in n)this[r]=n[r];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,n=this._currentRules(),r=0;r<n.length;r++)if((i=this._input.match(this.rules[n[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,s){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 20;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:case 15:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}},Parser.prototype=_,_.Parser=Parser,new Parser}();r.parser=r;let l=s.B.pie,a={sections:{},showData:!1},c=a.sections,h=a.showData,u=structuredClone(l),y={getConfig:()=>structuredClone(u),clear:()=>{c=structuredClone(a.sections),h=a.showData,(0,s.v)()},setDiagramTitle:s.q,getDiagramTitle:s.t,setAccTitle:s.s,getAccTitle:s.g,setAccDescription:s.b,getAccDescription:s.a,addSection:(t,e)=>{void 0===c[t=(0,s.d)(t,(0,s.c)())]&&(c[t]=e,s.l.debug(`added new section: ${t}, with value: ${e}`))},getSections:()=>c,cleanupValue:t=>(":"===t.substring(0,1)&&(t=t.substring(1).trim()),Number(t.trim())),setShowData:t=>{h=t},getShowData:()=>h},createPieArcs=t=>{let e=Object.entries(t).map(t=>({label:t[0],value:t[1]})).sort((t,e)=>e.value-t.value),i=(0,n.ve8)().value(t=>t.value);return i(e)},p={parser:r,db:y,renderer:{draw:(t,e,i,r)=>{s.l.debug("rendering pie chart\n"+t);let l=r.db,a=(0,s.c)(),c=(0,s.C)(l.getConfig(),a.pie),h=(0,s.A)(e),u=h.append("g"),y=l.getSections();u.attr("transform","translate(225,225)");let{themeVariables:p}=a,[g]=(0,s.D)(p.pieOuterStrokeWidth);g??(g=2);let d=c.textPosition,_=(0,n.Nb1)().innerRadius(0).outerRadius(185),f=(0,n.Nb1)().innerRadius(185*d).outerRadius(185*d);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+g/2).attr("class","pieOuterCircle");let m=createPieArcs(y),k=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],b=(0,n.PKp)(k);u.selectAll("mySlices").data(m).enter().append("path").attr("d",_).attr("fill",t=>b(t.data.label)).attr("class","pieCircle");let x=0;Object.keys(y).forEach(t=>{x+=y[t]}),u.selectAll("mySlices").data(m).enter().append("text").text(t=>(t.data.value/x*100).toFixed(0)+"%").attr("transform",t=>"translate("+f.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let v=u.selectAll(".legend").data(b.domain()).enter().append("g").attr("class","legend").attr("transform",(t,e)=>{let i=22*b.domain().length/2;return"translate(216,"+(22*e-i)+")"});v.append("rect").attr("width",18).attr("height",18).style("fill",b).style("stroke",b),v.data(m).append("text").attr("x",22).attr("y",14).text(t=>{let{label:e,value:i}=t.data;return l.getShowData()?`${e} [${i}]`:e});let S=Math.max(...v.selectAll("text").nodes().map(t=>(null==t?void 0:t.getBoundingClientRect().width)??0)),w=512+S;h.attr("viewBox",`0 0 ${w} 450`),(0,s.i)(h,450,w,c.useMaxWidth)}},styles:t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`}}}]);