/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace5 = {};
nameSpace5.xmin = -5;
nameSpace5.xmax = 5;
nameSpace5.ymin = -5;
nameSpace5.ymax = 5;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: false});

nameSpace5.A = nameSpace5.board.create('point', [1.95, -0.56], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace5.B = nameSpace5.board.create('point', [-0.22, 2.31], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace5.C = nameSpace5.board.create('point', [-0.43, -1.67], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace5.AB = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace5.AC = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace5.CB = nameSpace5.board.create('line', [nameSpace5.C, nameSpace5.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace5.K11=nameSpace5.board.create('circle', [nameSpace5.B, nameSpace5.C],{visible:false});
nameSpace5.K12=nameSpace5.board.create('circle', [nameSpace5.C, nameSpace5.B],{visible:false});
nameSpace5.X=nameSpace5.board.create('intersection', [nameSpace5.K11, nameSpace5.K12,0],{name:'X', size:1, color:'blue'});
nameSpace5.BX=nameSpace5.board.create('segment',[nameSpace5.B, nameSpace5.X], {color:'green'});
nameSpace5.CX=nameSpace5.board.create('segment',[nameSpace5.C, nameSpace5.X], {color:'green'});
nameSpace5.BCX=nameSpace5.board.create('polygon',[nameSpace5.B,nameSpace5.C, nameSpace5.X]);
nameSpace5.G1x=function()
{
    return (nameSpace5.B.X()+nameSpace5.C.X()+nameSpace5.X.X())/3;
}
nameSpace5.G1y=function()
{
    return (nameSpace5.B.Y()+nameSpace5.C.Y()+nameSpace5.X.Y())/3;
}
nameSpace5.G1=nameSpace5.board.create('point',[nameSpace5.G1x, nameSpace5.G1y],{size:1, color:'blue', name:"L"})

nameSpace5.K21=nameSpace5.board.create('circle', [nameSpace5.A, nameSpace5.C],{visible:false});
nameSpace5.K22=nameSpace5.board.create('circle', [nameSpace5.C, nameSpace5.A],{visible:false});
nameSpace5.Y=nameSpace5.board.create('intersection', [nameSpace5.K21, nameSpace5.K22,1],{name:'Y', size:1, color:'blue'});
nameSpace5.AY=nameSpace5.board.create('segment',[nameSpace5.A, nameSpace5.Y], {color:'green'});
nameSpace5.CY=nameSpace5.board.create('segment',[nameSpace5.C, nameSpace5.Y], {color:'green'});
nameSpace5.ACY=nameSpace5.board.create('polygon',[nameSpace5.A,nameSpace5.C, nameSpace5.Y]);
nameSpace5.G2x=function()
{
    return (nameSpace5.A.X()+nameSpace5.C.X()+nameSpace5.Y.X())/3;
}
nameSpace5.G2y=function()
{
    return (nameSpace5.A.Y()+nameSpace5.C.Y()+nameSpace5.Y.Y())/3;
}
nameSpace5.G2=nameSpace5.board.create('point',[nameSpace5.G2x, nameSpace5.G2y],{size:1, color:'blue', name:"M"})


nameSpace5.K31=nameSpace5.board.create('circle', [nameSpace5.B, nameSpace5.A],{visible:false});
nameSpace5.K32=nameSpace5.board.create('circle', [nameSpace5.A, nameSpace5.B],{visible:false});
nameSpace5.Z=nameSpace5.board.create('intersection', [nameSpace5.K31, nameSpace5.K32,1],{name:'Z', size:1, color:'blue'});
nameSpace5.AZ=nameSpace5.board.create('segment',[nameSpace5.A, nameSpace5.Z], {color:'green'});
nameSpace5.BZ=nameSpace5.board.create('segment',[nameSpace5.B, nameSpace5.Z], {color:'green'});
nameSpace5.ABZ=nameSpace5.board.create('polygon',[nameSpace5.A,nameSpace5.B, nameSpace5.Z]);
nameSpace5.G3x=function()
{
    return (nameSpace5.B.X()+nameSpace5.A.X()+nameSpace5.Z.X())/3;
}
nameSpace5.G3y=function()
{
    return (nameSpace5.B.Y()+nameSpace5.A.Y()+nameSpace5.Z.Y())/3;
}
nameSpace5.G3=nameSpace5.board.create('point',[nameSpace5.G3x, nameSpace5.G3y],{size:1, color:'blue', name:"N"})

nameSpace5.LMN=nameSpace5.board.create('polygon',[nameSpace5.G1, nameSpace5.G2, nameSpace5.G3], {color:'red', opacity:0.3});