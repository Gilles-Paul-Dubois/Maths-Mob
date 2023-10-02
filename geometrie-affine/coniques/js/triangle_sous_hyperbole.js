var nameSpace1={};
nameSpace1.xmin=-10; // adjust as needed
nameSpace1.xmax=+10; // adjust as needed
nameSpace1.ymin=-10; // adjust according max value of f
nameSpace1.ymax=+10; // adjust according min value of f
nameSpace1.board= JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin,nameSpace1.ymax, nameSpace1.xmax,nameSpace1.ymin], axis: true});
nameSpace1.sla=nameSpace1.board.create('slider',[[-9,9], [-6,9],[0.5,1,4]]);
nameSpace1.O=nameSpace1.board.create('point',[0,0], {size:1, color:'blue', name:'O', fixed:true});
nameSpace1.f = function (x)
{
    return nameSpace1.sla.Value()/x;
}

nameSpace1.H=nameSpace1.board.create('functiongraph', [nameSpace1.f,nameSpace1.xmin,nameSpace1.xmax],{strokeColor:'green'});
nameSpace1.M=nameSpace1.board.create('glider',[1,1,nameSpace1.H], {size:1, name:'M'});

nameSpace1.Ax=function()
{
    var X,Y;
    X=nameSpace1.M.X();
    Y=nameSpace1.M.Y();
    var a=nameSpace1.sla.Value();
    return (Y*X*X+a*X)/a;
}
nameSpace1.A=nameSpace1.board.create('point',[nameSpace1.Ax,0], {size:1, color:'blue', name:'A'});

nameSpace1.By=function()
{
    var X,Y;
    X=nameSpace1.M.X();
    Y=nameSpace1.M.Y();
    var a=nameSpace1.sla.Value();
    return Y+a/X;
}
nameSpace1.B=nameSpace1.board.create('point',[0,nameSpace1.By], {size:1, color:'blue', name:'B'});
nameSpace1.T=nameSpace1.board.create('polygon',[nameSpace1.A, nameSpace1.O, nameSpace1.B]);
nameSpace1.OA=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.A], {visible:false});
nameSpace1.OB=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.B], {visible:false});

nameSpace1.txt1=function()
{
    return "OA="+nameSpace1.OA.L().toFixed(2);
}
nameSpace1.board.create('text',[1,9, nameSpace1.txt1]);

nameSpace1.txt2=function()
{
    return "OB="+nameSpace1.OB.L().toFixed(2);
}
nameSpace1.board.create('text',[3,9, nameSpace1.txt2]);

nameSpace1.txt3=function()
{
    return "S(OAB)="+(nameSpace1.OA.L()*nameSpace1.OB.L()/2).toFixed(2);
}
nameSpace1.board.create('text',[5,9, nameSpace1.txt3]);