"use strict";exports.id=4824,exports.ids=[4824],exports.modules={4824:(t,e,r)=>{r.d(e,{a:()=>insertMarkers$1,b:()=>clear$1,c:()=>createLabel$1,d:()=>clear,e:()=>insertNode,f:()=>insertEdgeLabel,g:()=>getSubGraphTitleMargins,h:()=>insertEdge,i:()=>intersectRect$1,j:()=>positionEdgeLabel,k:()=>getLineFunctionsWithOffset,l:()=>labelHelper,m:()=>addEdgeMarkers,p:()=>positionNode,s:()=>setNodeElem,u:()=>updateNodeBounds});var a=r(39222),i=r(85182),l=r(11082);let n={extension:(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",r+"_"+e+"-extensionStart").attr("class","marker extension "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-compositionStart").attr("class","marker composition "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",r+"_"+e+"-lollipopEnd").attr("class","marker lollipop "+e).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},insertMarkers$1=(t,e,r,a)=>{e.forEach(e=>{n[e](t,r,a)})},createLabel$1=(t,e,r,l)=>{let n=t||"";if("object"==typeof n&&(n=n[0]),(0,a.m)((0,a.c)().flowchart.htmlLabels)){n=n.replace(/\\n|\n/g,"<br />"),a.l.debug("vertexText"+n);let t={isNode:l,label:(0,a.M)(n).replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),labelStyle:e.replace("fill:","color:")};return function(t){var e;let r=(0,i.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=r.append("xhtml:div"),l=t.label,n=t.isNode?"nodeLabel":"edgeLabel";return a.html('<span class="'+n+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+l+"</span>"),(e=t.labelStyle)&&a.attr("style",e),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}(t)}{let t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));for(let e of"string"==typeof n?n.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(n)?n:[]){let a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},labelHelper=async(t,e,r,n)=>{let s,d,o;let h=e.useHtmlLabels||(0,a.m)((0,a.c)().flowchart.htmlLabels);s=r||"node default";let c=t.insert("g").attr("class",s).attr("id",e.domId||e.id),p=c.insert("g").attr("class","label").attr("style",e.labelStyle);d=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];let y=p.node(),g=(o="markdown"===e.labelType?(0,l.a)(p,(0,a.d)((0,a.M)(d),(0,a.c)()),{useHtmlLabels:h,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):y.appendChild(createLabel$1((0,a.d)((0,a.M)(d),(0,a.c)()),e.labelStyle,!1,n))).getBBox(),u=e.padding/2;if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=o.children[0],e=(0,i.Ys)(o),r=t.getElementsByTagName("img");if(r){let t=""===d.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map(e=>new Promise(r=>{function setupImage(){if(e.style.display="flex",e.style.flexDirection="column",t){let t=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize,r=5*parseInt(t,10)+"px";e.style.minWidth=r,e.style.maxWidth=r}else e.style.width="100%";r(e)}setTimeout(()=>{e.complete&&setupImage()}),e.addEventListener("error",setupImage),e.addEventListener("load",setupImage)})))}g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}return h?p.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"):p.attr("transform","translate(0, "+-g.height/2+")"),e.centerLabel&&p.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"),p.insert("rect",":first-child"),{shapeSvg:c,bbox:g,halfPadding:u,label:p}},updateNodeBounds=(t,e)=>{let r=e.node().getBBox();t.width=r.width,t.height=r.height};function insertPolygonShape(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function intersectEllipse(t,e,r,a){var i=t.x,l=t.y,n=i-a.x,s=l-a.y,d=Math.sqrt(e*e*s*s+r*r*n*n),o=Math.abs(e*r*n/d);a.x<i&&(o=-o);var h=Math.abs(e*r*s/d);return a.y<l&&(h=-h),{x:i+o,y:l+h}}let intersectRect$1=(t,e)=>{var r,a,i=t.x,l=t.y,n=e.x-i,s=e.y-l,d=t.width/2,o=t.height/2;return Math.abs(s)*d>Math.abs(n)*o?(s<0&&(o=-o),r=0===s?0:o*n/s,a=o):(n<0&&(d=-d),r=d,a=0===n?0:d*s/n),{x:i+r,y:l+a}},s={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return intersectEllipse(t,e,e,r)},ellipse:intersectEllipse,polygon:function(t,e,r){var a=t.x,i=t.y,l=[],n=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach(function(t){n=Math.min(n,t.x),s=Math.min(s,t.y)}):(n=Math.min(n,e.x),s=Math.min(s,e.y));for(var d=a-t.width/2-n,o=i-t.height/2-s,h=0;h<e.length;h++){var c=e[h],p=e[h<e.length-1?h+1:0],y=function(t,e,r,a){var i,l,n,s,d,o,h,c,p,y,g,u,x;if(i=e.y-t.y,n=t.x-e.x,d=e.x*t.y-t.x*e.y,p=i*r.x+n*r.y+d,y=i*a.x+n*a.y+d,(0===p||0===y||!(p*y>0))&&(l=a.y-r.y,s=r.x-a.x,o=a.x*r.y-r.x*a.y,h=l*t.x+s*t.y+o,c=l*e.x+s*e.y+o,!(0!==h&&0!==c&&h*c>0)&&0!=(g=i*s-l*n)))return u=Math.abs(g/2),{x:(x=n*o-s*d)<0?(x-u)/g:(x+u)/g,y:(x=l*d-i*o)<0?(x-u)/g:(x+u)/g}}(t,r,{x:d+c.x,y:o+c.y},{x:d+p.x,y:o+p.y});y&&l.push(y)}return l.length?(l.length>1&&l.sort(function(t,e){var a=t.x-r.x,i=t.y-r.y,l=Math.sqrt(a*a+i*i),n=e.x-r.x,s=e.y-r.y,d=Math.sqrt(n*n+s*s);return l<d?-1:l===d?0:1}),l[0]):t},rect:intersectRect$1},note=async(t,e)=>{let r=e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels;r||(e.centerLabel=!0);let{shapeSvg:i,bbox:l,halfPadding:n}=await labelHelper(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);let d=i.insert("rect",":first-child");return d.attr("rx",e.rx).attr("ry",e.ry).attr("x",-l.width/2-n).attr("y",-l.height/2-n).attr("width",l.width+e.padding).attr("height",l.height+e.padding),updateNodeBounds(e,d),e.intersect=function(t){return s.rect(e,t)},i},expandAndDeduplicateDirections=t=>{let e=new Set;for(let r of t)switch(r){case"x":e.add("right"),e.add("left");break;case"y":e.add("up"),e.add("down");break;default:e.add(r)}return e},getArrowPoints=(t,e,r)=>{let a=expandAndDeduplicateDirections(t),i=e.height+2*r.padding,l=i/2,n=e.width+2*l+r.padding,s=r.padding/2;return a.has("right")&&a.has("left")&&a.has("up")&&a.has("down")?[{x:0,y:0},{x:l,y:0},{x:n/2,y:2*s},{x:n-l,y:0},{x:n,y:0},{x:n,y:-i/3},{x:n+2*s,y:-i/2},{x:n,y:-2*i/3},{x:n,y:-i},{x:n-l,y:-i},{x:n/2,y:-i-2*s},{x:l,y:-i},{x:0,y:-i},{x:0,y:-2*i/3},{x:-2*s,y:-i/2},{x:0,y:-i/3}]:a.has("right")&&a.has("left")&&a.has("up")?[{x:l,y:0},{x:n-l,y:0},{x:n,y:-i/2},{x:n-l,y:-i},{x:l,y:-i},{x:0,y:-i/2}]:a.has("right")&&a.has("left")&&a.has("down")?[{x:0,y:0},{x:l,y:-i},{x:n-l,y:-i},{x:n,y:0}]:a.has("right")&&a.has("up")&&a.has("down")?[{x:0,y:0},{x:n,y:-l},{x:n,y:-i+l},{x:0,y:-i}]:a.has("left")&&a.has("up")&&a.has("down")?[{x:n,y:0},{x:0,y:-l},{x:0,y:-i+l},{x:n,y:-i}]:a.has("right")&&a.has("left")?[{x:l,y:0},{x:l,y:-s},{x:n-l,y:-s},{x:n-l,y:0},{x:n,y:-i/2},{x:n-l,y:-i},{x:n-l,y:-i+s},{x:l,y:-i+s},{x:l,y:-i},{x:0,y:-i/2}]:a.has("up")&&a.has("down")?[{x:n/2,y:0},{x:0,y:-s},{x:l,y:-s},{x:l,y:-i+s},{x:0,y:-i+s},{x:n/2,y:-i},{x:n,y:-i+s},{x:n-l,y:-i+s},{x:n-l,y:-s},{x:n,y:-s}]:a.has("right")&&a.has("up")?[{x:0,y:0},{x:n,y:-l},{x:0,y:-i}]:a.has("right")&&a.has("down")?[{x:0,y:0},{x:n,y:0},{x:0,y:-i}]:a.has("left")&&a.has("up")?[{x:n,y:0},{x:0,y:-l},{x:n,y:-i}]:a.has("left")&&a.has("down")?[{x:n,y:0},{x:0,y:0},{x:n,y:-i}]:a.has("right")?[{x:l,y:-s},{x:l,y:-s},{x:n-l,y:-s},{x:n-l,y:0},{x:n,y:-i/2},{x:n-l,y:-i},{x:n-l,y:-i+s},{x:l,y:-i+s},{x:l,y:-i+s}]:a.has("left")?[{x:l,y:0},{x:l,y:-s},{x:n-l,y:-s},{x:n-l,y:-i+s},{x:l,y:-i+s},{x:l,y:-i},{x:0,y:-i/2}]:a.has("up")?[{x:l,y:-s},{x:l,y:-i+s},{x:0,y:-i+s},{x:n/2,y:-i},{x:n,y:-i+s},{x:n-l,y:-i+s},{x:n-l,y:-s}]:a.has("down")?[{x:n/2,y:0},{x:0,y:-s},{x:l,y:-s},{x:l,y:-i+s},{x:n-l,y:-i+s},{x:n-l,y:-s},{x:n,y:-s}]:[{x:0,y:0}]},formatClass=t=>t?" "+t:"",getClassesFromNode=(t,e)=>`${e||"node default"}${formatClass(t.classes)} ${formatClass(t.class)}`,question=async(t,e)=>{let{shapeSvg:r,bbox:i}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),l=i.width+e.padding,n=i.height+e.padding,d=l+n,o=[{x:d/2,y:0},{x:d,y:-d/2},{x:d/2,y:-d},{x:0,y:-d/2}];a.l.info("Question main (Circle)");let h=insertPolygonShape(r,d,d,o);return h.attr("style",e.style),updateNodeBounds(e,h),e.intersect=function(t){return a.l.warn("Intersect called"),s.polygon(e,o,t)},r},hexagon=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.height+e.padding,l=i/4,n=a.width+2*l+e.padding,d=[{x:l,y:0},{x:n-l,y:0},{x:n,y:-i/2},{x:n-l,y:-i},{x:l,y:-i},{x:0,y:-i/2}],o=insertPolygonShape(r,n,i,d);return o.attr("style",e.style),updateNodeBounds(e,o),e.intersect=function(t){return s.polygon(e,d,t)},r},block_arrow=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.height+2*e.padding,l=i/2,n=a.width+2*l+e.padding,d=getArrowPoints(e.directions,a,e),o=insertPolygonShape(r,n,i,d);return o.attr("style",e.style),updateNodeBounds(e,o),e.intersect=function(t){return s.polygon(e,d,t)},r},rect_left_inv_arrow=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:-l/2,y:0},{x:i,y:0},{x:i,y:-l},{x:-l/2,y:-l},{x:0,y:-l/2}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),e.width=i+l,e.height=l,e.intersect=function(t){return s.polygon(e,n,t)},r},lean_right=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:-2*l/6,y:0},{x:i-l/6,y:0},{x:i+2*l/6,y:-l},{x:l/6,y:-l}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),updateNodeBounds(e,d),e.intersect=function(t){return s.polygon(e,n,t)},r},lean_left=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:2*l/6,y:0},{x:i+l/6,y:0},{x:i-2*l/6,y:-l},{x:-l/6,y:-l}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),updateNodeBounds(e,d),e.intersect=function(t){return s.polygon(e,n,t)},r},trapezoid=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:-2*l/6,y:0},{x:i+2*l/6,y:0},{x:i-l/6,y:-l},{x:l/6,y:-l}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),updateNodeBounds(e,d),e.intersect=function(t){return s.polygon(e,n,t)},r},inv_trapezoid=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:l/6,y:0},{x:i-l/6,y:0},{x:i+2*l/6,y:-l},{x:-2*l/6,y:-l}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),updateNodeBounds(e,d),e.intersect=function(t){return s.polygon(e,n,t)},r},rect_right_inv_arrow=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:0,y:0},{x:i+l/2,y:0},{x:i,y:-l/2},{x:i+l/2,y:-l},{x:0,y:-l}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),updateNodeBounds(e,d),e.intersect=function(t){return s.polygon(e,n,t)},r},cylinder=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=i/2,n=l/(2.5+i/50),d=a.height+n+e.padding,o="M 0,"+n+" a "+l+","+n+" 0,0,0 "+i+" 0 a "+l+","+n+" 0,0,0 "+-i+" 0 l 0,"+d+" a "+l+","+n+" 0,0,0 "+i+" 0 l 0,"+-d,h=r.attr("label-offset-y",n).insert("path",":first-child").attr("style",e.style).attr("d",o).attr("transform","translate("+-i/2+","+-(d/2+n)+")");return updateNodeBounds(e,h),e.intersect=function(t){let r=s.rect(e,t),a=r.x-e.x;if(0!=l&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-n)){let i=n*n*(1-a*a/(l*l));0!=i&&(i=Math.sqrt(i)),i=n-i,t.y-e.y>0&&(i=-i),r.y+=i}return r},r},rect=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:l}=await labelHelper(t,e,"node "+e.classes+" "+e.class,!0),n=r.insert("rect",":first-child"),d=e.positioned?e.width:i.width+e.padding,o=e.positioned?e.height:i.height+e.padding,h=e.positioned?-d/2:-i.width/2-l,c=e.positioned?-o/2:-i.height/2-l;if(n.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",h).attr("y",c).attr("width",d).attr("height",o),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(applyNodePropertyBorders(n,e.props.borders,d,o),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return updateNodeBounds(e,n),e.intersect=function(t){return s.rect(e,t)},r},composite=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:l}=await labelHelper(t,e,"node "+e.classes,!0),n=r.insert("rect",":first-child"),d=e.positioned?e.width:i.width+e.padding,o=e.positioned?e.height:i.height+e.padding,h=e.positioned?-d/2:-i.width/2-l,c=e.positioned?-o/2:-i.height/2-l;if(n.attr("class","basic cluster composite label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",h).attr("y",c).attr("width",d).attr("height",o),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(applyNodePropertyBorders(n,e.props.borders,d,o),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return updateNodeBounds(e,n),e.intersect=function(t){return s.rect(e,t)},r},labelRect=async(t,e)=>{let{shapeSvg:r}=await labelHelper(t,e,"label",!0);a.l.trace("Classes = ",e.class);let i=r.insert("rect",":first-child");if(i.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(applyNodePropertyBorders(i,e.props.borders,0,0),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return updateNodeBounds(e,i),e.intersect=function(t){return s.rect(e,t)},r};function applyNodePropertyBorders(t,e,r,i){let l=[],addBorder=t=>{l.push(t,0)},skipBorder=t=>{l.push(0,t)};e.includes("t")?(a.l.debug("add top border"),addBorder(r)):skipBorder(r),e.includes("r")?(a.l.debug("add right border"),addBorder(i)):skipBorder(i),e.includes("b")?(a.l.debug("add bottom border"),addBorder(r)):skipBorder(r),e.includes("l")?(a.l.debug("add left border"),addBorder(i)):skipBorder(i),t.attr("stroke-dasharray",l.join(" "))}let stadium=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.height+e.padding,l=a.width+i/4+e.padding,n=r.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-l/2).attr("y",-i/2).attr("width",l).attr("height",i);return updateNodeBounds(e,n),e.intersect=function(t){return s.rect(e,t)},r},circle=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:l}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),n=r.insert("circle",":first-child");return n.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+l).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("Circle main"),updateNodeBounds(e,n),e.intersect=function(t){return a.l.info("Circle intersect",e,i.width/2+l,t),s.circle(e,i.width/2+l,t)},r},doublecircle=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:l}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),n=r.insert("g",":first-child"),d=n.insert("circle"),o=n.insert("circle");return n.attr("class",e.class),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+l+5).attr("width",i.width+e.padding+10).attr("height",i.height+e.padding+10),o.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+l).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("DoubleCircle main"),updateNodeBounds(e,d),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,i.width/2+l+5,t),s.circle(e,i.width/2+l+5,t)},r},subroutine=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,getClassesFromNode(e,void 0),!0),i=a.width+e.padding,l=a.height+e.padding,n=[{x:0,y:0},{x:i,y:0},{x:i,y:-l},{x:0,y:-l},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-l},{x:-8,y:-l},{x:-8,y:0}],d=insertPolygonShape(r,i,l,n);return d.attr("style",e.style),updateNodeBounds(e,d),e.intersect=function(t){return s.polygon(e,n,t)},r},forkJoin=(t,e,r)=>{let a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),i=70,l=10;"LR"===r&&(i=10,l=70);let n=a.append("rect").attr("x",-1*i/2).attr("y",-1*l/2).attr("width",i).attr("height",l).attr("class","fork-join");return updateNodeBounds(e,n),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return s.rect(e,t)},a},d={rhombus:question,composite,question,rect,labelRect,rectWithTitle:(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";let l=t.insert("g").attr("class",r).attr("id",e.domId||e.id),n=l.insert("rect",":first-child"),d=l.insert("line"),o=l.insert("g").attr("class","label"),h=e.labelText.flat?e.labelText.flat():e.labelText,c="";c="object"==typeof h?h[0]:h,a.l.info("Label text abc79",c,h,"object"==typeof h);let p=o.node().appendChild(createLabel$1(c,e.labelStyle,!0,!0)),y={width:0,height:0};if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=p.children[0],e=(0,i.Ys)(p);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}a.l.info("Text 2",h);let g=h.slice(1,h.length),u=p.getBBox(),x=o.node().appendChild(createLabel$1(g.join?g.join("<br/>"):g,e.labelStyle,!0,!0));if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=x.children[0],e=(0,i.Ys)(x);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}let f=e.padding/2;return(0,i.Ys)(x).attr("transform","translate( "+(y.width>u.width?0:(u.width-y.width)/2)+", "+(u.height+f+5)+")"),(0,i.Ys)(p).attr("transform","translate( "+(y.width<u.width?0:-(u.width-y.width)/2)+", 0)"),y=o.node().getBBox(),o.attr("transform","translate("+-y.width/2+", "+(-y.height/2-f+3)+")"),n.attr("class","outer title-state").attr("x",-y.width/2-f).attr("y",-y.height/2-f).attr("width",y.width+e.padding).attr("height",y.height+e.padding),d.attr("class","divider").attr("x1",-y.width/2-f).attr("x2",y.width/2+f).attr("y1",-y.height/2-f+u.height+f).attr("y2",-y.height/2-f+u.height+f),updateNodeBounds(e,n),e.intersect=function(t){return s.rect(e,t)},l},choice:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(t){return t.x+","+t.y}).join(" "));return a.attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return s.circle(e,14,t)},r},circle,doublecircle,stadium,hexagon,block_arrow,rect_left_inv_arrow,lean_right,lean_left,trapezoid,inv_trapezoid,rect_right_inv_arrow,cylinder,start:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),updateNodeBounds(e,a),e.intersect=function(t){return s.circle(e,7,t)},r},end:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),updateNodeBounds(e,i),e.intersect=function(t){return s.circle(e,7,t)},r},note:note,subroutine,fork:forkJoin,join:forkJoin,class_box:(t,e)=>{let r;let l=e.padding/2;r=e.classes?"node "+e.classes:"node default";let n=t.insert("g").attr("class",r).attr("id",e.domId||e.id),d=n.insert("rect",":first-child"),o=n.insert("line"),h=n.insert("line"),c=0,p=4,y=n.insert("g").attr("class","label"),g=0,u=e.classData.annotations&&e.classData.annotations[0],x=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",f=y.node().appendChild(createLabel$1(x,e.labelStyle,!0,!0)),w=f.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=f.children[0],e=(0,i.Ys)(f);w=t.getBoundingClientRect(),e.attr("width",w.width),e.attr("height",w.height)}e.classData.annotations[0]&&(p+=w.height+4,c+=w.width);let b=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?b+="&lt;"+e.classData.type+"&gt;":b+="<"+e.classData.type+">");let m=y.node().appendChild(createLabel$1(b,e.labelStyle,!0,!0));(0,i.Ys)(m).attr("class","classTitle");let k=m.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=m.children[0],e=(0,i.Ys)(m);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}p+=k.height+4,k.width>c&&(c=k.width);let L=[];e.classData.members.forEach(t=>{let r=t.getDisplayDetails(),l=r.displayText;(0,a.c)().flowchart.htmlLabels&&(l=l.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let n=y.node().appendChild(createLabel$1(l,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),s=n.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=n.children[0],e=(0,i.Ys)(n);s=t.getBoundingClientRect(),e.attr("width",s.width),e.attr("height",s.height)}s.width>c&&(c=s.width),p+=s.height+4,L.push(n)}),p+=8;let B=[];if(e.classData.methods.forEach(t=>{let r=t.getDisplayDetails(),l=r.displayText;(0,a.c)().flowchart.htmlLabels&&(l=l.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let n=y.node().appendChild(createLabel$1(l,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),s=n.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=n.children[0],e=(0,i.Ys)(n);s=t.getBoundingClientRect(),e.attr("width",s.width),e.attr("height",s.height)}s.width>c&&(c=s.width),p+=s.height+4,B.push(n)}),p+=8,u){let t=(c-w.width)/2;(0,i.Ys)(f).attr("transform","translate( "+(-1*c/2+t)+", "+-1*p/2+")"),g=w.height+4}let v=(c-k.width)/2;return(0,i.Ys)(m).attr("transform","translate( "+(-1*c/2+v)+", "+(-1*p/2+g)+")"),g+=k.height+4,o.attr("class","divider").attr("x1",-c/2-l).attr("x2",c/2+l).attr("y1",-p/2-l+8+g).attr("y2",-p/2-l+8+g),g+=8,L.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-c/2+", "+(-1*p/2+g+4)+")");let e=null==t?void 0:t.getBBox();g+=((null==e?void 0:e.height)??0)+4}),g+=8,h.attr("class","divider").attr("x1",-c/2-l).attr("x2",c/2+l).attr("y1",-p/2-l+8+g).attr("y2",-p/2-l+8+g),g+=8,B.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-c/2+", "+(-1*p/2+g)+")");let e=null==t?void 0:t.getBBox();g+=((null==e?void 0:e.height)??0)+4}),d.attr("style",e.style).attr("class","outer title-state").attr("x",-c/2-l).attr("y",-(p/2)-l).attr("width",c+e.padding).attr("height",p+e.padding),updateNodeBounds(e,d),e.intersect=function(t){return s.rect(e,t)},n}},o={},insertNode=async(t,e,r)=>{let i,l;if(e.link){let n;"sandbox"===(0,a.c)().securityLevel?n="_top":e.linkTarget&&(n=e.linkTarget||"_blank"),i=t.insert("svg:a").attr("xlink:href",e.link).attr("target",n),l=await d[e.shape](i,e,r)}else i=l=await d[e.shape](t,e,r);return e.tooltip&&l.attr("title",e.tooltip),e.class&&l.attr("class","node default "+e.class),i.attr("data-node","true"),i.attr("data-id",e.id),o[e.id]=i,e.haveCallback&&o[e.id].attr("class",o[e.id].attr("class")+" clickable"),i},setNodeElem=(t,e)=>{o[e.id]=t},clear$1=()=>{o={}},positionNode=t=>{let e=o[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");let r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},getSubGraphTitleMargins=({flowchart:t})=>{var e,r;let a=(null==(e=null==t?void 0:t.subGraphTitleMargin)?void 0:e.top)??0,i=(null==(r=null==t?void 0:t.subGraphTitleMargin)?void 0:r.bottom)??0;return{subGraphTitleTopMargin:a,subGraphTitleBottomMargin:i,subGraphTitleTotalMargin:a+i}},h={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function calculateDeltaAndAngle(t,e){if(void 0===t||void 0===e)return{angle:0,deltaX:0,deltaY:0};t=pointTransformer(t),e=pointTransformer(e);let[r,a]=[t.x,t.y],[i,l]=[e.x,e.y],n=i-r,s=l-a;return{angle:Math.atan(s/n),deltaX:n,deltaY:s}}let pointTransformer=t=>Array.isArray(t)?{x:t[0],y:t[1]}:t,getLineFunctionsWithOffset=t=>({x:function(e,r,a){let i=0;if(0===r&&Object.hasOwn(h,t.arrowTypeStart)){let{angle:e,deltaX:r}=calculateDeltaAndAngle(a[0],a[1]);i=h[t.arrowTypeStart]*Math.cos(e)*(r>=0?1:-1)}else if(r===a.length-1&&Object.hasOwn(h,t.arrowTypeEnd)){let{angle:e,deltaX:r}=calculateDeltaAndAngle(a[a.length-1],a[a.length-2]);i=h[t.arrowTypeEnd]*Math.cos(e)*(r>=0?1:-1)}return pointTransformer(e).x+i},y:function(e,r,a){let i=0;if(0===r&&Object.hasOwn(h,t.arrowTypeStart)){let{angle:e,deltaY:r}=calculateDeltaAndAngle(a[0],a[1]);i=h[t.arrowTypeStart]*Math.abs(Math.sin(e))*(r>=0?1:-1)}else if(r===a.length-1&&Object.hasOwn(h,t.arrowTypeEnd)){let{angle:e,deltaY:r}=calculateDeltaAndAngle(a[a.length-1],a[a.length-2]);i=h[t.arrowTypeEnd]*Math.abs(Math.sin(e))*(r>=0?1:-1)}return pointTransformer(e).y+i}}),addEdgeMarkers=(t,e,r,a,i)=>{e.arrowTypeStart&&addEdgeMarker(t,"start",e.arrowTypeStart,r,a,i),e.arrowTypeEnd&&addEdgeMarker(t,"end",e.arrowTypeEnd,r,a,i)},c={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},addEdgeMarker=(t,e,r,i,l,n)=>{let s=c[r];if(!s){a.l.warn(`Unknown arrow type: ${r}`);return}let d="start"===e?"Start":"End";t.attr(`marker-${e}`,`url(${i}#${l}_${n}-${s}${d})`)},p={},y={},clear=()=>{p={},y={}},insertEdgeLabel=(t,e)=>{let r;let n=(0,a.m)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,l.a)(t,e.label,{style:e.labelStyle,useHtmlLabels:n,addSvgBackground:!0}):createLabel$1(e.label,e.labelStyle),d=t.insert("g").attr("class","edgeLabel"),o=d.insert("g").attr("class","label");o.node().appendChild(s);let h=s.getBBox();if(n){let t=s.children[0],e=(0,i.Ys)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(o.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),p[e.id]=d,e.width=h.width,e.height=h.height,e.startLabelLeft){let a=createLabel$1(e.startLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),l=i.insert("g").attr("class","inner");r=l.node().appendChild(a);let n=a.getBBox();l.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),y[e.id]||(y[e.id]={}),y[e.id].startLeft=i,setTerminalWidth(r,e.startLabelLeft)}if(e.startLabelRight){let a=createLabel$1(e.startLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),l=i.insert("g").attr("class","inner");r=i.node().appendChild(a),l.node().appendChild(a);let n=a.getBBox();l.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),y[e.id]||(y[e.id]={}),y[e.id].startRight=i,setTerminalWidth(r,e.startLabelRight)}if(e.endLabelLeft){let a=createLabel$1(e.endLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),l=i.insert("g").attr("class","inner");r=l.node().appendChild(a);let n=a.getBBox();l.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),i.node().appendChild(a),y[e.id]||(y[e.id]={}),y[e.id].endLeft=i,setTerminalWidth(r,e.endLabelLeft)}if(e.endLabelRight){let a=createLabel$1(e.endLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),l=i.insert("g").attr("class","inner");r=l.node().appendChild(a);let n=a.getBBox();l.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),i.node().appendChild(a),y[e.id]||(y[e.id]={}),y[e.id].endRight=i,setTerminalWidth(r,e.endLabelRight)}return s};function setTerminalWidth(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}let positionEdgeLabel=(t,e)=>{a.l.debug("Moving label abc88 ",t.id,t.label,p[t.id],e);let r=e.updatedPath?e.updatedPath:e.originalPath,i=(0,a.c)(),{subGraphTitleTotalMargin:l}=getSubGraphTitleMargins(i);if(t.label){let i=p[t.id],n=t.x,s=t.y;if(r){let i=a.u.calcLabelPosition(r);a.l.debug("Moving label "+t.label+" from (",n,",",s,") to (",i.x,",",i.y,") abc88"),e.updatedPath&&(n=i.x,s=i.y)}i.attr("transform",`translate(${n}, ${s+l/2})`)}if(t.startLabelLeft){let e=y[t.id].startLeft,i=t.x,l=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);i=e.x,l=e.y}e.attr("transform",`translate(${i}, ${l})`)}if(t.startLabelRight){let e=y[t.id].startRight,i=t.x,l=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);i=e.x,l=e.y}e.attr("transform",`translate(${i}, ${l})`)}if(t.endLabelLeft){let e=y[t.id].endLeft,i=t.x,l=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);i=e.x,l=e.y}e.attr("transform",`translate(${i}, ${l})`)}if(t.endLabelRight){let e=y[t.id].endRight,i=t.x,l=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);i=e.x,l=e.y}e.attr("transform",`translate(${i}, ${l})`)}},outsideNode=(t,e)=>{let r=t.x,a=t.y,i=Math.abs(e.x-r),l=Math.abs(e.y-a),n=t.width/2,s=t.height/2;return i>=n||l>=s},intersection=(t,e,r)=>{a.l.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);let i=t.x,l=t.y,n=Math.abs(i-r.x),s=t.width/2,d=r.x<e.x?s-n:s+n,o=t.height/2,h=Math.abs(e.y-r.y),c=Math.abs(e.x-r.x);if(Math.abs(l-e.y)*s>Math.abs(i-e.x)*o){let t=r.y<e.y?e.y-o-l:l-o-e.y;d=c*t/h;let i={x:r.x<e.x?r.x+d:r.x-c+d,y:r.y<e.y?r.y+h-t:r.y-h+t};return 0===d&&(i.x=e.x,i.y=e.y),0===c&&(i.x=e.x),0===h&&(i.y=e.y),a.l.debug(`abc89 topp/bott calc, Q ${h}, q ${t}, R ${c}, r ${d}`,i),i}{let t=h*(d=r.x<e.x?e.x-s-i:i-s-e.x)/c,l=r.x<e.x?r.x+c-d:r.x-c+d,n=r.y<e.y?r.y+t:r.y-t;return a.l.debug(`sides calc abc89, Q ${h}, q ${t}, R ${c}, r ${d}`,{_x:l,_y:n}),0===d&&(l=e.x,n=e.y),0===c&&(l=e.x),0===h&&(n=e.y),{x:l,y:n}}},cutPathAtIntersect=(t,e)=>{a.l.debug("abc88 cutPathAtIntersect",t,e);let r=[],i=t[0],l=!1;return t.forEach(t=>{if(outsideNode(e,t)||l)i=t,l||r.push(t);else{let a=intersection(e,i,t),n=!1;r.forEach(t=>{n=n||t.x===a.x&&t.y===a.y}),r.some(t=>t.x===a.x&&t.y===a.y)||r.push(a),l=!0}}),r},insertEdge=function(t,e,r,l,n,s,d){let o,h=r.points;a.l.debug("abc88 InsertEdge: edge=",r,"e=",e);let c=!1,p=s.node(e.v);var y=s.node(e.w);(null==y?void 0:y.intersect)&&(null==p?void 0:p.intersect)&&((h=h.slice(1,r.points.length-1)).unshift(p.intersect(h[0])),h.push(y.intersect(h[h.length-1]))),r.toCluster&&(a.l.debug("to cluster abc88",l[r.toCluster]),h=cutPathAtIntersect(r.points,l[r.toCluster].node),c=!0),r.fromCluster&&(a.l.debug("from cluster abc88",l[r.fromCluster]),h=cutPathAtIntersect(h.reverse(),l[r.fromCluster].node).reverse(),c=!0);let g=h.filter(t=>!Number.isNaN(t.y)),u=i.$0Z;r.curve&&("graph"===n||"flowchart"===n)&&(u=r.curve);let{x,y:f}=getLineFunctionsWithOffset(r),w=(0,i.jvg)().x(x).y(f).curve(u);switch(r.thickness){case"normal":o="edge-thickness-normal";break;case"thick":case"invisible":o="edge-thickness-thick";break;default:o=""}switch(r.pattern){case"solid":o+=" edge-pattern-solid";break;case"dotted":o+=" edge-pattern-dotted";break;case"dashed":o+=" edge-pattern-dashed"}let b=t.append("path").attr("d",w(g)).attr("id",r.id).attr("class"," "+o+(r.classes?" "+r.classes:"")).attr("style",r.style),m="";((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(m=(m=(m=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),addEdgeMarkers(b,r,m,d,n);let k={};return c&&(k.updatedPath=h),k.originalPath=r.points,k}}};