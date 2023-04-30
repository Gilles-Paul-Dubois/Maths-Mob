var nameSpace3={};
nameSpace3.xmin=-5; // adjust as needed
nameSpace3.xmax=+5; // adjust as needed
nameSpace3.ymin=-5; // adjust according max value of f
nameSpace3.ymax=+5; // adjust according min value of f
nameSpace3.board= JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin,nameSpace3.ymax, nameSpace3.xmax,nameSpace3.ymin], axis: true, showNavigation:false});
nameSpace3.slA=nameSpace3.board.create('slider', [[-4.5,4.5],[-3,4.5],[-4,3,+4]]);
nameSpace3.slB=nameSpace3.board.create('slider', [[-4.5,4],[-3,4],[-4,1,+4]]);
nameSpace3.slr=nameSpace3.board.create('slider', [[-4.5,3.5],[-3,3.5],[1,1,5]],{snapWidth:1});
nameSpace3.slb=nameSpace3.board.create('slider', [[-4.5,3],[-3,3],[-2,1,+2]]);
nameSpace3.slc=nameSpace3.board.create('slider', [[-4.5,2.5],[-3,2.5],[2,3,5]]);
nameSpace3.txtA= function()
{
    return "A="+nameSpace3.slA.Value().toFixed(2);
}

nameSpace3.txtB= function()
{
    return "B="+nameSpace3.slB.Value().toFixed(2);
}


nameSpace3.txtr= function()
{
    return "r="+nameSpace3.slr.Value();
}

nameSpace3.txtb= function()
{
    return "b="+nameSpace3.slb.Value().toFixed(2);
}

nameSpace3.txtc= function()
{
    return "c="+nameSpace3.slc.Value().toFixed(2);
}

nameSpace3.f = function (x)
{
    return (x*nameSpace3.slA.Value()+nameSpace3.slB.Value())/Math.pow(x*x+x*nameSpace3.slb.Value()+nameSpace3.slc.Value(),nameSpace3.slr.Value());
}
nameSpace3.Paint=function()
{   nameSpace3.board.suspendUpdate();
    nameSpace3.board.create('functiongraph', [nameSpace3.f,nameSpace3.xmin,nameSpace3.xmax],{strokeColor:'green'});
//    nameSpace3.A=nameSpace3.board.create('point', [function (x){return nameSpace3.slb.Value();},0],{visible:false});
//    nameSpace3.B=nameSpace3.board.create('point', [function (x){return nameSpace3.slb.Value();},1],{visible:false});
//    nameSpace3.AB=nameSpace3.board.create('line',[nameSpace3.A, nameSpace3.B]);
    nameSpace3.board.create('text',[-2,4.5,nameSpace3.txtA],{color:'red'});
    nameSpace3.board.create('text',[-2,4,nameSpace3.txtB],{color:'red'});
    nameSpace3.board.create('text',[-2,3.5,nameSpace3.txtr],{color:'red'});
    nameSpace3.board.create('text',[-2,3,nameSpace3.txtb],{color:'red'});
    nameSpace3.board.create('text',[-2,2.5,nameSpace3.txtc],{color:'red'});
    nameSpace3.board.unsuspendUpdate();
}
nameSpace3.Paint();