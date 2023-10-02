/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace6 = {};
nameSpace6.xmin = -5;
nameSpace6.xmax = 5;
nameSpace6.ymin = -5;
nameSpace6.ymax = 5;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: false});

nameSpace6.A = nameSpace6.board.create('point', [1.95, -0.56], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace6.B = nameSpace6.board.create('point', [-0.22, 2.31], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace6.C = nameSpace6.board.create('point', [-0.43, -1.67], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace6.AB = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace6.AC = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace6.CB = nameSpace6.board.create('line', [nameSpace6.C, nameSpace6.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace6.K11=nameSpace6.board.create('circle', [nameSpace6.B, nameSpace6.C],{visible:false});
nameSpace6.K12=nameSpace6.board.create('circle', [nameSpace6.C, nameSpace6.B],{visible:false});
nameSpace6.X=nameSpace6.board.create('intersection', [nameSpace6.K11, nameSpace6.K12,0],{name:'X', size:1, color:'blue'});
nameSpace6.BX=nameSpace6.board.create('segment',[nameSpace6.B, nameSpace6.X], {color:'green'});
nameSpace6.CX=nameSpace6.board.create('segment',[nameSpace6.C, nameSpace6.X], {color:'green'});
nameSpace6.BCX=nameSpace6.board.create('polygon',[nameSpace6.B,nameSpace6.C, nameSpace6.X]);
nameSpace6.G1x=function()
{
    return (nameSpace6.B.X()+nameSpace6.C.X()+nameSpace6.X.X())/3;
}
nameSpace6.G1y=function()
{
    return (nameSpace6.B.Y()+nameSpace6.C.Y()+nameSpace6.X.Y())/3;
}
nameSpace6.G1=nameSpace6.board.create('point',[nameSpace6.G1x, nameSpace6.G1y],{size:1, color:'blue', name:"L"})

nameSpace6.K21=nameSpace6.board.create('circle', [nameSpace6.A, nameSpace6.C],{visible:false});
nameSpace6.K22=nameSpace6.board.create('circle', [nameSpace6.C, nameSpace6.A],{visible:false});
nameSpace6.Y=nameSpace6.board.create('intersection', [nameSpace6.K21, nameSpace6.K22,1],{name:'Y', size:1, color:'blue'});
nameSpace6.AY=nameSpace6.board.create('segment',[nameSpace6.A, nameSpace6.Y], {color:'green'});
nameSpace6.CY=nameSpace6.board.create('segment',[nameSpace6.C, nameSpace6.Y], {color:'green'});
nameSpace6.ACY=nameSpace6.board.create('polygon',[nameSpace6.A,nameSpace6.C, nameSpace6.Y]);
nameSpace6.G2x=function()
{
    return (nameSpace6.A.X()+nameSpace6.C.X()+nameSpace6.Y.X())/3;
}
nameSpace6.G2y=function()
{
    return (nameSpace6.A.Y()+nameSpace6.C.Y()+nameSpace6.Y.Y())/3;
}
nameSpace6.G2=nameSpace6.board.create('point',[nameSpace6.G2x, nameSpace6.G2y],{size:1, color:'blue', name:"M"})


nameSpace6.K31=nameSpace6.board.create('circle', [nameSpace6.B, nameSpace6.A],{visible:false});
nameSpace6.K32=nameSpace6.board.create('circle', [nameSpace6.A, nameSpace6.B],{visible:false});
nameSpace6.Z=nameSpace6.board.create('intersection', [nameSpace6.K31, nameSpace6.K32,1],{name:'Z', size:1, color:'blue'});
nameSpace6.AZ=nameSpace6.board.create('segment',[nameSpace6.A, nameSpace6.Z], {color:'green'});
nameSpace6.BZ=nameSpace6.board.create('segment',[nameSpace6.B, nameSpace6.Z], {color:'green'});
nameSpace6.ABZ=nameSpace6.board.create('polygon',[nameSpace6.A,nameSpace6.B, nameSpace6.Z]);
nameSpace6.G3x=function()
{
    return (nameSpace6.B.X()+nameSpace6.A.X()+nameSpace6.Z.X())/3;
}
nameSpace6.G3y=function()
{
    return (nameSpace6.B.Y()+nameSpace6.A.Y()+nameSpace6.Z.Y())/3;
}
nameSpace6.G3=nameSpace6.board.create('point',[nameSpace6.G3x, nameSpace6.G3y],{size:1, color:'blue', name:"N"})

nameSpace6.LMN=nameSpace6.board.create('polygon',[nameSpace6.G1, nameSpace6.G2, nameSpace6.G3], {color:'red', opacity:0.3});