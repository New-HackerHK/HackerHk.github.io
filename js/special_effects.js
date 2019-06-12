

ns=(document.layers)?1:0;
Clrs=new Array('ff0000','00ff00','ffffff','ff00ff','ffa500','ffff00','00ff00','ffffff','ff00ff')
var amount=8
var step=0.3;
var currStep=0;
var Ypos=0;
var Xpos=0;
if (ns){
for (i=0; i < amount; i++)
document.write('<LAYER NAME="n'+i+'" LEFT=0 TOP=0 BGCOLOR=#FFFFFF CLIP="0,0,2,2"></LAYER>');
window.captureEvents(Event.MOUSEMOVE);
function nMouse(evnt){
Ypos = evnt.pageY;
Xpos = evnt.pageX;
}
window.onMouseMove=nMouse;
}
else{
document.write('<div style="position:absolute;top:0px;left:0px">');
document.write('<div style="position:relative">');
for (i=0; i < amount; i++)
document.write('<div id="me" style="position:absolute;top:0px;left:0px;width:2px;height:2px;font-size:2px;background:#00aaff"></div>');
document.write('</div></div>');
function iMouse(){
Ypos=event.y+document.body.scrollTop;
Xpos=event.x+document.body.scrollLeft;
}
document.onmousemove = iMouse;
}
function Comet(){
for (i=0; i < amount; i++){
var randCol=Math.floor(Math.random()*Clrs.length);
var layer=(document.layers)?document.layers['n'+i]:me[i].style;
layer.top =Ypos+60*Math.sin((currStep + i*3.1)/4)*Math.cos(currStep/10);
layer.left=Xpos+60*Math.cos((currStep + i*3.1)/4);
if (ns) layer.bgColor=Clrs[randCol];else layer.background=Clrs[randCol];
}
currStep+=step;
setTimeout("Comet()",10);
}
window.onload=Comet;
