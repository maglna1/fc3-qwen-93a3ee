"use strict";exports.id=180,exports.ids=[180],exports.modules={30499:(e,t,l)=>{l.d(t,{a:()=>addHtmlLabel});var r=l(79586);function addHtmlLabel(e,t){var l=e.append("foreignObject").attr("width","100000"),a=l.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}r.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var i=a.node().getBoundingClientRect();return l.attr("width",i.width).attr("height",i.height),l}},79586:(e,t,l)=>{l.d(t,{$p:()=>applyClass,O1:()=>edgeToId,WR:()=>applyTransition,bF:()=>isSubgraph,bg:()=>applyStyle});var r=l(78593),a=l(89432);function isSubgraph(e,t){return!!e.children(t).length}function edgeToId(e){return escapeId(e.v)+":"+escapeId(e.w)+":"+escapeId(e.name)}var o=/:/g;function escapeId(e){return e?String(e).replace(o,"\\:"):""}function applyStyle(e,t){t&&e.attr("style",t)}function applyClass(e,t,l){t&&e.attr("class",t).attr("class",l+" "+e.attr("class"))}function applyTransition(e,t){var l=t.graph();if(r.Z(l)){var o=l.transition;if(a.Z(o))return o(e)}return e}},87829:(e,t,l)=>{l.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=l(65381),a=l(73209);let __WEBPACK_DEFAULT_EXPORT__=(e,t)=>r.Z.lang.round(a.Z.parse(e)[t])},60180:(e,t,l)=>{l.d(t,{a:()=>flowStyles,f:()=>p});var r=l(60741),a=l(85182),o=l(39222),i=l(89605),n=l(30499),s=l(87829),d=l(40384);let c={},addVertices=async function(e,t,l,r,a,i){let s=r.select(`[id="${l}"]`),d=Object.keys(e);for(let l of d){let r;let d=e[l],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let p=(0,o.k)(d.styles),b=void 0!==d.text?d.text:d.id;if(o.l.info("vertex",d,d.labelType),"markdown"===d.labelType)o.l.info("vertex",d,d.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){let e={label:b};(r=(0,n.a)(s,e).node()).parentNode.removeChild(r)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));let t=b.split(o.e.lineBreakRegex);for(let l of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=l,e.appendChild(t)}r=e}let w=0,g="";switch(d.type){case"round":w=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}let u=await (0,o.r)(b,(0,o.c)());t.setNode(d.id,{labelStyle:p.labelStyle,shape:g,labelText:u,labelType:d.labelType,rx:w,ry:w,class:c,style:p.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:i.db.getTooltip(d.id)||"",domId:i.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:p.labelStyle,labelType:d.labelType,shape:g,labelText:u,rx:w,ry:w,class:c,style:p.style,id:d.id,domId:i.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,o.c)().flowchart.padding})}},addEdges=async function(e,t,l){let r,i;o.l.info("abc78 edges = ",e);let n=0,s={};if(void 0!==e.defaultStyle){let t=(0,o.k)(e.defaultStyle);r=t.style,i=t.labelStyle}for(let l of e){n++;let d="L-"+l.start+"-"+l.end;void 0===s[d]?s[d]=0:s[d]++,o.l.info("abc78 new entry",d,s[d]);let p=d+"-"+s[d];o.l.info("abc78 new link id to be used is",d,p,s[d]);let b="LS-"+l.start,w="LE-"+l.end,g={style:"",labelStyle:""};switch(g.minlen=l.length||1,"arrow_open"===l.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",l.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let u="",f="";switch(l.stroke){case"normal":u="fill:none;",void 0!==r&&(u=r),void 0!==i&&(f=i),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==l.style){let e=(0,o.k)(l.style);u=e.style,f=e.labelStyle}g.style=g.style+=u,g.labelStyle=g.labelStyle+=f,void 0!==l.interpolate?g.curve=(0,o.n)(l.interpolate,a.c_6):void 0!==e.defaultInterpolate?g.curve=(0,o.n)(e.defaultInterpolate,a.c_6):g.curve=(0,o.n)(c.curve,a.c_6),void 0===l.text?void 0!==l.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=l.labelType,g.label=await (0,o.r)(l.text.replace(o.e.lineBreakRegex,"\n"),(0,o.c)()),void 0===l.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=p,g.classes="flowchart-link "+b+" "+w,t.setEdge(l.start,l.end,g,n)}},draw=async function(e,t,l,n){let s,d;o.l.info("Drawing flowchart");let c=n.db.getDirection();void 0===c&&(c="TD");let{securityLevel:p,flowchart:b}=(0,o.c)(),w=b.nodeSpacing||50,g=b.rankSpacing||50;"sandbox"===p&&(s=(0,a.Ys)("#i"+t));let u="sandbox"===p?(0,a.Ys)(s.nodes()[0].contentDocument.body):(0,a.Ys)("body"),f="sandbox"===p?s.nodes()[0].contentDocument:document,h=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:w,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),y=n.db.getSubGraphs();o.l.info("Subgraphs - ",y);for(let e=y.length-1;e>=0;e--)d=y[e],o.l.info("Subgraph - ",d),n.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let k=n.db.getVertices(),x=n.db.getEdges();o.l.info("Edges",x);let v=0;for(v=y.length-1;v>=0;v--){d=y[v],(0,a.td_)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)o.l.info("Setting up subgraphs",d.nodes[e],d.id),h.setParent(d.nodes[e],d.id)}await addVertices(k,h,t,u,f,n),await addEdges(x,h);let m=u.select(`[id="${t}"]`),S=u.select("#"+t+" g");if(await (0,i.r)(S,h,["point","circle","cross"],"flowchart",t),o.u.insertTitle(m,"flowchartTitleText",b.titleTopMargin,n.db.getDiagramTitle()),(0,o.o)(h,m,b.diagramPadding,b.useMaxWidth),n.db.indexNodes("subGraph"+v),!b.htmlLabels){let e=f.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),l=f.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("rx",0),l.setAttribute("ry",0),l.setAttribute("width",e.width),l.setAttribute("height",e.height),t.insertBefore(l,t.firstChild)}}let _=Object.keys(k);_.forEach(function(e){let l=k[e];if(l.link){let r=(0,a.Ys)("#"+t+' [id="'+e+'"]');if(r){let e=f.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",l.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",l.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===p?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):l.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",l.linkTarget);let t=r.insert(function(){return e},":first-child"),a=r.select(".label-container");a&&t.append(function(){return a.node()});let o=r.select(".label");o&&t.append(function(){return o.node()})}}})},p={setConf:function(e){let t=Object.keys(e);for(let l of t)c[l]=e[l]},addVertices,addEdges,getClasses:function(e,t){return t.db.getClasses()},draw},fade=(e,t)=>{let l=s.Z,r=l(e,"r"),a=l(e,"g"),o=l(e,"b");return d.Z(r,a,o,t)},flowStyles=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`}};