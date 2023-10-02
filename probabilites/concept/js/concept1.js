var nameSpace1 = {};
nameSpace1.xmin = -1;
nameSpace1.xmax = 2;
nameSpace1.ymin = -1;
nameSpace1.ymax = 2;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.A=nameSpace1.board.create('point',[0,0],{visible:false});
nameSpace1.B=nameSpace1.board.create('point',[0,1],{visible:false});
nameSpace1.C=nameSpace1.board.create('point',[1,1],{visible:false});
nameSpace1.D=nameSpace1.board.create('point',[1,0],{visible:false});
nameSpace1.K=nameSpace1.board.create('polygon',[nameSpace1.A, nameSpace1.B, nameSpace1.C, nameSpace1.D]);
nameSpace1.M=nameSpace1.board.create('point',[function (){return Math.random();},function (){return Math.random();}],{name:'M', size:1});
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