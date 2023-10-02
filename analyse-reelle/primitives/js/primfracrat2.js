var nameSpace2={};
nameSpace2.xmin=-5; // adjust as needed
nameSpace2.xmax=+5; // adjust as needed
nameSpace2.ymin=-5; // adjust according max value of f
nameSpace2.ymax=+5; // adjust according min value of f
nameSpace2.board= JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin,nameSpace2.ymax, nameSpace2.xmax,nameSpace2.ymin], axis: true, showNavigation:false});
nameSpace2.slA=nameSpace2.board.create('slider', [[-4.5,4.5],[-3,4.5],[-4,3,+4]]);
//nameSpace2.slB=nameSpace2.board.create('slider', [[-4.5,4],[-3,4],[-4,1,+4]]);
nameSpace2.slr=nameSpace2.board.create('slider', [[-4.5,3.5],[-3,3.5],[1,1,5]],{snapWidth:1});
nameSpace2.slb=nameSpace2.board.create('slider', [[-4.5,3],[-3,3],[-2,1,+2]]);
nameSpace2.slc=nameSpace2.board.create('slider', [[-4.5,2.5],[-3,2.5],[2,3,5]]);
nameSpace2.txtA= function()
{
    return "A="+nameSpace2.slA.Value().toFixed(2);
}

//nameSpace2.txtB= function()
//{
//    return "B="+nameSpace2.slB.Value().toFixed(2);
//}


nameSpace2.txtr= function()
{
    return "r="+nameSpace2.slr.Value();
}

nameSpace2.txtb= function()
{
    return "b="+nameSpace2.slb.Value().toFixed(2);
}

nameSpace2.txtc= function()
{
    return "c="+nameSpace2.slc.Value().toFixed(2);
}

nameSpace2.f = function (x)
{
    return nameSpace2.slA.Value()/Math.pow(x*x+x*nameSpace2.slb.Value()+nameSpace2.slc.Value(),nameSpace2.slr.Value());
}
nameSpace2.Paint=function()
{   nameSpace2.board.suspendUpdate();
    nameSpace2.board.create('functiongraph', [nameSpace2.f,nameSpace2.xmin,nameSpace2.xmax],{strokeColor:'green'});
//    nameSpace2.A=nameSpace2.board.create('point', [function (x){return nameSpace2.slb.Value();},0],{visible:false});
//    nameSpace2.B=nameSpace2.board.create('point', [function (x){return nameSpace2.slb.Value();},1],{visible:false});
//    nameSpace2.AB=nameSpace2.board.create('line',[nameSpace2.A, nameSpace2.B]);
    nameSpace2.board.create('text',[-2,4.5,nameSpace2.txtA],{color:'red'});
    //nameSpace2.board.create('text',[-2,4,nameSpace2.txtB],{color:'red'});
    nameSpace2.board.create('text',[-2,3.5,nameSpace2.txtr],{color:'red'});
    nameSpace2.board.create('text',[-2,3,nameSpace2.txtb],{color:'red'});
    nameSpace2.board.create('text',[-2,2.5,nameSpace2.txtc],{color:'red'});
    nameSpace2.board.unsuspendUpdate();
}
nameSpace2.Paint();