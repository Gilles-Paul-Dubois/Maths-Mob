var nameSpace2={};
nameSpace2.xmin=-10; // adjust as needed
nameSpace2.xmax=+10; // adjust as needed
nameSpace2.ymin=-10; // adjust according max value of f
nameSpace2.ymax=+10; // adjust according min value of f
nameSpace2.board= JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin,nameSpace2.ymax, nameSpace2.xmax,nameSpace2.ymin], axis: true});
nameSpace2.sla=nameSpace2.board.create('slider',[[-9,9], [-6,9],[0.5,1,4]]);
nameSpace2.O=nameSpace2.board.create('point',[0,0], {size:1, color:'blue', name:'O', fixed:true});
nameSpace2.f = function (x)
{
    return nameSpace2.sla.Value()/x;
}

nameSpace2.H=nameSpace2.board.create('functiongraph', [nameSpace2.f,nameSpace2.xmin,nameSpace2.xmax],{strokeColor:'green'});
nameSpace2.M=nameSpace2.board.create('glider',[1,1,nameSpace2.H], {size:1, name:'M'});

nameSpace2.Ax=function()
{
    var X,Y;
    X=nameSpace2.M.X();
    Y=nameSpace2.M.Y();
    var a=nameSpace2.sla.Value();
    return (Y*X*X+a*X)/a;
}
nameSpace2.A=nameSpace2.board.create('point',[nameSpace2.Ax,0], {size:1, color:'blue', name:'A'});

nameSpace2.By=function()
{
    var X,Y;
    X=nameSpace2.M.X();
    Y=nameSpace2.M.Y();
    var a=nameSpace2.sla.Value();
    return Y+a/X;
}
nameSpace2.B=nameSpace2.board.create('point',[0,nameSpace2.By], {size:1, color:'blue', name:'B'});
nameSpace2.T=nameSpace2.board.create('polygon',[nameSpace2.A, nameSpace2.O, nameSpace2.B]);
nameSpace2.OA=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.A], {visible:false});
nameSpace2.OB=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.B], {visible:false});

nameSpace2.txt1=function()
{
    return "OA="+nameSpace2.OA.L().toFixed(2);
}
nameSpace2.board.create('text',[1,9, nameSpace2.txt1]);

nameSpace2.txt2=function()
{
    return "OB="+nameSpace2.OB.L().toFixed(2);
}
nameSpace2.board.create('text',[3,9, nameSpace2.txt2]);

nameSpace2.txt3=function()
{
    return "S(OAB)="+(nameSpace2.OA.L()*nameSpace2.OB.L()/2).toFixed(2);
}
nameSpace2.board.create('text',[5,9, nameSpace2.txt3]);