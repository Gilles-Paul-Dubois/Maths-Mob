/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace1={}
nameSpace1.xmin=-5;
nameSpace1.xmax=5;
nameSpace1.ymin=-5;
nameSpace1.ymax=5;
nameSpace1.board = JXG.JSXGraph.initBoard('box', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax,nameSpace1.ymin], axis: false});

nameSpace1.O=nameSpace1.board.create('point',[0,0], {fixed: true, color:'blue', size:1, name:'O', withLabel:false});
nameSpace1.A=nameSpace1.board.create('point',[2,0], {fixed: false, color:'red', size:1, name:'A', withLabel:false});
nameSpace1.u =nameSpace1.board.create('line',[nameSpace1.O,nameSpace1.A], { straightFirst:false, straightLast:false, lastArrow:true, color:'blue', name:'u', withLabel:true, label:{position:'top'}});
nameSpace1.B=nameSpace1.board.create('point',[0,2], {fixed: false, color:'red', size:1, name:'A', withLabel:false});
nameSpace1.v =nameSpace1.board.create('line',[nameSpace1.O,nameSpace1.B], {straightFirst:false, straightLast:false, lastArrow:true, color:'green', name:'v', withLabel:true, label:{position:'top'}});

nameSpace1.Cx=function()
{
    return nameSpace1.A.X()+nameSpace1.B.X();
}
nameSpace1.Cy=function()
{
    return nameSpace1.A.Y()+nameSpace1.B.Y();
}

nameSpace1.C=nameSpace1.board.create('point',[nameSpace1.Cx,nameSpace1.Cy], {fixed: true, color:'blue', size:1, name:'C', withLabel:false});
nameSpace1.w =nameSpace1.board.create('line',[nameSpace1.O,nameSpace1.C], { straightFirst:false, straightLast:false, lastArrow:true, color:'brown', name:'w', withLabel:true, label:{position:'top'}});
nameSpace1.P=nameSpace1.board.create('point',[-4,-4], {fixed: false, color:'red', size:1, name:'P', withLabel:true});

nameSpace1.Qx=function()
{
    return nameSpace1.P.X()+nameSpace1.A.X();
}
nameSpace1.Qy=function()
{
    return nameSpace1.P.Y()+nameSpace1.A.Y();
}
nameSpace1.Q=nameSpace1.board.create('point',[nameSpace1.Qx,nameSpace1.Qy], {fixed: true, color:'blue', size:1, name:'Q', withLabel:true});
nameSpace1.PQ =nameSpace1.board.create('line',[nameSpace1.P,nameSpace1.Q], { straightFirst:false, straightLast:false, lastArrow:true, color:'blue', withLabel:false});

nameSpace1.Rx=function()
{
    return nameSpace1.P.X()+nameSpace1.B.X();
}
nameSpace1.Ry=function()
{
    return nameSpace1.P.Y()+nameSpace1.B.Y();
}
nameSpace1.R=nameSpace1.board.create('point',[nameSpace1.Rx,nameSpace1.Ry], {fixed: true, color:'blue', size:1, name:'R', withLabel:true});
nameSpace1.PQ =nameSpace1.board.create('line',[nameSpace1.P,nameSpace1.R], { straightFirst:false, straightLast:false, lastArrow:true, color:'green', withLabel:false});

nameSpace1.Sx=function()
{
    return nameSpace1.P.X()+nameSpace1.C.X();
}
nameSpace1.Sy=function()
{
    return nameSpace1.P.Y()+nameSpace1.C.Y();
}

nameSpace1.S=nameSpace1.board.create('point',[nameSpace1.Sx,nameSpace1.Sy], {fixed: true, color:'blue', size:1, name:'S', withLabel:true});
nameSpace1.PS =nameSpace1.board.create('line',[nameSpace1.P,nameSpace1.S], { straightFirst:false, straightLast:false, lastArrow:true, color:'brown', name:'w'});