var nameSpace1={};
nameSpace1.xmin=-5; // adjust as needed
nameSpace1.xmax=+5; // adjust as needed
nameSpace1.ymin=-5; // adjust according max value of f
nameSpace1.ymax=+5; // adjust according min value of f
nameSpace1.board= JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin,nameSpace1.ymax, nameSpace1.xmax,nameSpace1.ymin], axis: true, showNavigation:false});
nameSpace1.slA=nameSpace1.board.create('slider', [[-4.5,4.5],[-3,4.5],[-2,1,+2]]);
nameSpace1.slr=nameSpace1.board.create('slider', [[-4.5,4],[-3,4],[1,1,5]],{snapWidth:1});
nameSpace1.sla=nameSpace1.board.create('slider', [[-4.5,3.5],[-3,3.5],[-2,1,+2]]);
nameSpace1.txtA= function()
{
    return "A="+nameSpace1.slA.Value().toFixed(2);
}

nameSpace1.txtr= function()
{
    return "r="+nameSpace1.slr.Value();
}

nameSpace1.txta= function()
{
    return "a="+nameSpace1.sla.Value().toFixed(2);
}

nameSpace1.f = function (x)
{
    return nameSpace1.slA.Value()/Math.pow(x-nameSpace1.sla.Value(),nameSpace1.slr.Value());
}
nameSpace1.Paint=function()
{   nameSpace1.board.suspendUpdate();
    nameSpace1.board.create('functiongraph', [nameSpace1.f,nameSpace1.xmin,nameSpace1.xmax],{strokeColor:'green'});
    nameSpace1.A=nameSpace1.board.create('point', [function (x){return nameSpace1.sla.Value();},0],{visible:false});
    nameSpace1.B=nameSpace1.board.create('point', [function (x){return nameSpace1.sla.Value();},1],{visible:false});
    nameSpace1.AB=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.B]);
    nameSpace1.board.create('text',[-2,4.5,nameSpace1.txtA],{color:'red'});
    nameSpace1.board.create('text',[-2,4,nameSpace1.txtr],{color:'red'});
    nameSpace1.board.create('text',[-2,3.5,nameSpace1.txta],{color:'red'});
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();