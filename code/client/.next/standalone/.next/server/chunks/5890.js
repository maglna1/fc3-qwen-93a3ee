"use strict";exports.id=5890,exports.ids=[5890],exports.modules={15890:(t,e,a)=>{a.d(e,{diagram:()=>g});var r=a(81155),i=a(85182),n=a(49500),d=a(60741),o=a(39222);a(12905),a(83689),a(46535),a(82059);let l=0,getClassTitleString=function(t){let e=t.id;return t.type&&(e+="<"+(0,o.x)(t.type)+">"),e},addTspan=function(t,e,a,r){let{displayText:i,cssStyle:n}=e.getDisplayDetails(),d=t.append("tspan").attr("x",r.padding).text(i);""!==n&&d.attr("style",e.cssStyle),a||d.attr("dy",r.textHeight)},s={getClassTitleString,drawClass:function(t,e,a,r){let i,n,d,l;o.l.debug("Rendering class ",e,a);let s=e.id,p={id:s,label:e.id,width:0,height:0},g=t.append("g").attr("id",r.db.lookUpDomId(s)).attr("class","classGroup");i=e.link?g.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):g.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let h=!0;e.annotations.forEach(function(t){let e=i.append("tspan").text("\xab"+t+"\xbb");h||e.attr("dy",a.textHeight),h=!1});let c=getClassTitleString(e),f=i.append("tspan").text(c).attr("class","title");h||f.attr("dy",a.textHeight);let x=i.node().getBBox().height;if(e.members.length>0){n=g.append("line").attr("x1",0).attr("y1",a.padding+x+a.dividerMargin/2).attr("y2",a.padding+x+a.dividerMargin/2);let t=g.append("text").attr("x",a.padding).attr("y",x+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");h=!0,e.members.forEach(function(e){addTspan(t,e,h,a),h=!1}),d=t.node().getBBox()}if(e.methods.length>0){l=g.append("line").attr("x1",0).attr("y1",a.padding+x+a.dividerMargin+d.height).attr("y2",a.padding+x+a.dividerMargin+d.height);let t=g.append("text").attr("x",a.padding).attr("y",x+2*a.dividerMargin+d.height+a.textHeight).attr("fill","white").attr("class","classText");h=!0,e.methods.forEach(function(e){addTspan(t,e,h,a),h=!1})}let y=g.node().getBBox();var u=" ";e.cssClasses.length>0&&(u+=e.cssClasses.join(" "));let b=g.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",y.width+2*a.padding).attr("height",y.height+a.padding+.5*a.dividerMargin).attr("class",u),m=b.node().getBBox().width;return i.node().childNodes.forEach(function(t){t.setAttribute("x",(m-t.getBBox().width)/2)}),e.tooltip&&i.insert("title").text(e.tooltip),n&&n.attr("x2",m),l&&l.attr("x2",m),p.width=m,p.height=y.height+a.padding+.5*a.dividerMargin,p},drawEdge:function(t,e,a,r,n){let d,s,p,g,h,c;let getRelationType=function(t){switch(t){case n.db.relationType.AGGREGATION:return"aggregation";case n.db.relationType.EXTENSION:return"extension";case n.db.relationType.COMPOSITION:return"composition";case n.db.relationType.DEPENDENCY:return"dependency";case n.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let f=e.points,x=(0,i.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(i.$0Z),y=t.append("path").attr("d",x(f)).attr("id","edge"+l).attr("class","relation"),u="";r.arrowMarkerAbsolute&&(u=(u=(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&y.attr("class","relation dashed-line"),10==a.relation.lineType&&y.attr("class","relation dotted-line"),"none"!==a.relation.type1&&y.attr("marker-start","url("+u+"#"+getRelationType(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&y.attr("marker-end","url("+u+"#"+getRelationType(a.relation.type2)+"End)");let b=e.points.length,m=o.u.calcLabelPosition(e.points);if(d=m.x,s=m.y,b%2!=0&&b>1){let t=o.u.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=o.u.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[b-1]);o.l.debug("cardinality_1_point "+JSON.stringify(t)),o.l.debug("cardinality_2_point "+JSON.stringify(r)),p=t.x,g=t.y,h=r.x,c=r.y}if(void 0!==a.title){let e=t.append("g").attr("class","classLabel"),i=e.append("text").attr("class","label").attr("x",d).attr("y",s).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=i;let n=i.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-r.padding/2).attr("y",n.y-r.padding/2).attr("width",n.width+r.padding).attr("height",n.height+r.padding)}if(o.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type1").attr("x",p).attr("y",g).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type2").attr("x",h).attr("y",c).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}l++},drawNote:function(t,e,a,r){o.l.debug("Rendering note ",e,a);let i=e.id,n={id:i,text:e.text,width:0,height:0},d=t.append("g").attr("id",i).attr("class","classGroup"),l=d.append("text").attr("y",a.textHeight+a.padding).attr("x",0),s=JSON.parse(`"${e.text}"`).split("\n");s.forEach(function(t){o.l.debug(`Adding line: ${t}`),l.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)});let p=d.node().getBBox(),g=d.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin),h=g.node().getBBox().width;return l.node().childNodes.forEach(function(t){t.setAttribute("x",(h-t.getBBox().width)/2)}),n.width=h,n.height=p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin,n}},p={},getGraphId=function(t){let e=Object.entries(p).find(e=>e[1].label===t);if(e)return e[0]},insertMarkers=function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},g={parser:r.p,db:r.d,renderer:{draw:function(t,e,a,r){let l;let g=(0,o.c)().class;p={},o.l.info("Rendering diagram "+t);let h=(0,o.c)().securityLevel;"sandbox"===h&&(l=(0,i.Ys)("#i"+e));let c="sandbox"===h?(0,i.Ys)(l.nodes()[0].contentDocument.body):(0,i.Ys)("body"),f=c.select(`[id='${e}']`);insertMarkers(f);let x=new d.k({multigraph:!0});x.setGraph({isMultiGraph:!0}),x.setDefaultEdgeLabel(function(){return{}});let y=r.db.getClasses(),u=Object.keys(y);for(let t of u){let e=y[t],a=s.drawClass(f,e,g,r);p[a.id]=a,x.setNode(a.id,a),o.l.info("Org height: "+a.height)}let b=r.db.getRelations();b.forEach(function(t){o.l.info("tjoho"+getGraphId(t.id1)+getGraphId(t.id2)+JSON.stringify(t)),x.setEdge(getGraphId(t.id1),getGraphId(t.id2),{relation:t},t.title||"DEFAULT")});let m=r.db.getNotes();m.forEach(function(t){o.l.debug(`Adding note: ${JSON.stringify(t)}`);let e=s.drawNote(f,t,g,r);p[e.id]=e,x.setNode(e.id,e),t.class&&t.class in y&&x.setEdge(t.id,getGraphId(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,n.bK)(x),x.nodes().forEach(function(t){void 0!==t&&void 0!==x.node(t)&&(o.l.debug("Node "+t+": "+JSON.stringify(x.node(t))),c.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(x.node(t).x-x.node(t).width/2)+","+(x.node(t).y-x.node(t).height/2)+" )"))}),x.edges().forEach(function(t){void 0!==t&&void 0!==x.edge(t)&&(o.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(x.edge(t))),s.drawEdge(f,x.edge(t),x.edge(t).relation,g,r))});let w=f.node().getBBox(),k=w.width+40,T=w.height+40;(0,o.i)(f,T,k,g.useMaxWidth);let E=`${w.x-20} ${w.y-20} ${k} ${T}`;o.l.debug(`viewBox ${E}`),f.attr("viewBox",E)}},styles:r.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}}};