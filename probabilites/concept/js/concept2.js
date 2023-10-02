var nameSpace1 = {};
nameSpace1.xmin = -1;
nameSpace1.xmax = 2;
nameSpace1.ymin = -1;
nameSpace1.ymax = 2;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.O=nameSpace1.board.create('point',[0.5,0.5],{visible:true, name:'O', size:1, color:'blue', fixed:true});
nameSpace1.R=nameSpace1.board.create('circle',[nameSpace1.O, 0.3],{color:'red', opacity:0.4});
nameSpace1.A=nameSpace1.board.create('point',[0,0],{visible:false});
nameSpace1.B=nameSpace1.board.create('point',[0,1],{visible:false});
nameSpace1.C=nameSpace1.board.create('point',[1,1],{visible:false});
nameSpace1.D=nameSpace1.board.create('point',[1,0],{visible:false});
nameSpace1.K=nameSpace1.board.create('polygon',[nameSpace1.A, nameSpace1.B, nameSpace1.C, nameSpace1.D]);
nameSpace1.M=nameSpace1.board.create('point',[function (){return Math.random();},function (){return Math.random();}],{name:'M', size:1});
nameSpace1.OM=nameSpace1.board.create('segment', [nameSpace1.O, nameSpace1.M]);
nameSpace1.txt1=function()
{
    return "x="+nameSpace1.M.X();
}
nameSpace1.board.create('text',[1,1.5,nameSpace1.txt1]);
nameSpace1.txt2=function()
{
    return "y="+nameSpace1.M.Y();
}
nameSpace1.board.create('text',[1,1.25,nameSpace1.txt2]);

nameSpace1.txt3=function()
{
    var d=nameSpace1.OM.L();
    if (d<=0.3)
           if(document.body.className.substring(0,2)=="fr")  
   { return "succès";}
else
{ return "success";}
    else
          if(document.body.className.substring(0,2)=="fr")  
   {  return "échec";}
else
{  return "failure";}    
}
nameSpace1.board.create('text',[0.5,-0.5,nameSpace1.txt3],{color:'red'});