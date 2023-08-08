var nameSpace1 = {};
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.O=nameSpace1.board.create('point',[0,0], {visible:false});
nameSpace1.I=nameSpace1.board.create('point',[1,0], {visible:false});
nameSpace1.J=nameSpace1.board.create('point',[0,1], {visible:false});
nameSpace1.i=nameSpace1.board.create('line',[nameSpace1.O, nameSpace1.I],{straightFirst:false, straightLast:false, lastArrow:true, name:'i', withLabel:true, label:{position:'middle'}});
nameSpace1.j=nameSpace1.board.create('line',[nameSpace1.O, nameSpace1.J],{straightFirst:false, straightLast:false, lastArrow:true, name:'j', withLabel:true, label:{position:'middle'}});
nameSpace1.M=nameSpace1.board.create('point',[-2,3],{name:'M', size:1});
nameSpace1.u=nameSpace1.board.create('line',[nameSpace1.O, nameSpace1.M],{straightFirst:false, straightLast:false, lastArrow:true, name:'u', withLabel:false, label:{position:'middle'}});
nameSpace1.OM=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.M], {visible:false});
nameSpace1.theta=nameSpace1.board.create('angle',[nameSpace1.I, nameSpace1.O, nameSpace1.M], {name:'&theta;'});
nameSpace1.txt1=function()
{
    return "x="+nameSpace1.M.X().toFixed(2)+" y="+nameSpace1.M.Y().toFixed(2);
}
nameSpace1.txt2=function()
{
    return "&rho;="+nameSpace1.OM.L().toFixed(2)+" &theta;="+nameSpace1.theta.Value().toFixed(2)+" rd";
}
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace1.board.create('text',[-4.5,4.5,'Coordonnées cartésiennes de M']);}
else
{ nameSpace1.board.create('text',[-4.5,4.5,'Cartesian coordinates of M']);}
nameSpace1.board.create ('text',[-4.5,4, nameSpace1.txt1]);
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace1.board.create('text',[1,4.5,'Coordonnées polaires de M']);}
else
   { nameSpace1.board.create('text',[1,4.5,'Polar coordinates of M']);}
nameSpace1.board.create ('text',[1,4, nameSpace1.txt2]);
