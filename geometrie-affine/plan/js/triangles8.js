/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace8 = {};
nameSpace8.xmin = -5;
nameSpace8.xmax = 5;
nameSpace8.ymin = -5;
nameSpace8.ymax = 5;
nameSpace8.board = JXG.JSXGraph.initBoard('box8', {boundingbox: [nameSpace8.xmin, nameSpace8.ymax, nameSpace8.xmax, nameSpace8.ymin], axis: false});

nameSpace8.A = nameSpace8.board.create('point', [3, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace8.B = nameSpace8.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace8.C = nameSpace8.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace8.AB = nameSpace8.board.create('line', [nameSpace8.A, nameSpace8.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace8.AC = nameSpace8.board.create('line', [nameSpace8.A, nameSpace8.C], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace8.CB = nameSpace8.board.create('line', [nameSpace8.C, nameSpace8.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace8.G1x = function ()
{
    return (nameSpace8.A.X() + nameSpace8.B.X()) / 2;
}
nameSpace8.G1y = function ()
{
    return (nameSpace8.A.Y() + nameSpace8.B.Y()) / 2;
}
nameSpace8.G1 = nameSpace8.board.create('point', [nameSpace8.G1x, nameSpace8.G1y], {visible: false});
nameSpace8.G2x = function ()
{
    return (nameSpace8.A.X() + nameSpace8.C.X()) / 2;
}
nameSpace8.G2y = function ()
{
    return (nameSpace8.A.Y() + nameSpace8.C.Y()) / 2;
}
nameSpace8.G2 = nameSpace8.board.create('point', [nameSpace8.G2x, nameSpace8.G2y], {visible: false});
nameSpace8.G3x = function ()
{
    return (nameSpace8.B.X() + nameSpace8.C.X()) / 2;
}
nameSpace8.G3y = function ()
{
    return (nameSpace8.B.Y() + nameSpace8.C.Y()) / 2;
}
nameSpace8.G3 = nameSpace8.board.create('point', [nameSpace8.G3x, nameSpace8.G3y], {visible: false});

nameSpace8.N1 = nameSpace8.board.create('normal', [nameSpace8.AB, nameSpace8.G1], {visible: false});
nameSpace8.N2 = nameSpace8.board.create('normal', [nameSpace8.AC, nameSpace8.G2], {visible: false});
nameSpace8.N1 = nameSpace8.board.create('normal', [nameSpace8.CB, nameSpace8.G3], {visible: false});
nameSpace8.J = nameSpace8.board.create('intersection', [nameSpace8.N1, nameSpace8.N2], {name: 'J', size: 1, color: 'blue'});
nameSpace8.KR = nameSpace8.board.create('circle', [nameSpace8.J, nameSpace8.A], {strokeColor:'brown'});

nameSpace8.P = nameSpace8.board.create('glider', [ 2.72,-1.17,nameSpace8.KR], {size: 1, name: 'P'});

nameSpace8.M = nameSpace8.board.create('perpendicularpoint', [nameSpace8.P, nameSpace8.AB], {size:1, color:'blue', name:'M'});
nameSpace8.L = nameSpace8.board.create('perpendicularpoint', [nameSpace8.P, nameSpace8.AC], {size:1, color:'blue', name:'L'});
nameSpace8.K = nameSpace8.board.create('perpendicularpoint', [nameSpace8.P, nameSpace8.CB], {size:1, color:'blue', name:'K'});



nameSpace8.KM=nameSpace8.board.create('line', [nameSpace8.K, nameSpace8.M], {color:'red'});

nameSpace8.M1x=function()
{
    return 2*nameSpace8.M.X()-nameSpace8.P.X();
}
nameSpace8.M1y=function()
{
    return 2*nameSpace8.M.Y()-nameSpace8.P.Y();
}
nameSpace8.M1=nameSpace8.board.create('point',[nameSpace8.M1x, nameSpace8.M1y], {size:1, color:'blue', name:"M'"});

nameSpace8.L1x=function()
{
    return 2*nameSpace8.L.X()-nameSpace8.P.X();
}
nameSpace8.L1y=function()
{
    return 2*nameSpace8.L.Y()-nameSpace8.P.Y();
}
nameSpace8.L1=nameSpace8.board.create('point',[nameSpace8.L1x, nameSpace8.L1y], {size:1, color:'blue', name:"L'"});

nameSpace8.K1x=function()
{
    return 2*nameSpace8.K.X()-nameSpace8.P.X();
}
nameSpace8.K1y=function()
{
    return 2*nameSpace8.K.Y()-nameSpace8.P.Y();
}
nameSpace8.K1=nameSpace8.board.create('point',[nameSpace8.K1x, nameSpace8.K1y], {size:1, color:'blue', name:"K'"});

nameSpace8.board.create('line', [nameSpace8.K1, nameSpace8.L1]);

nameSpace8.PM=nameSpace8.board.create('segment', [nameSpace8.P, nameSpace8.M1], {color:'black', dash:1});
nameSpace8.PL=nameSpace8.board.create('segment', [nameSpace8.P, nameSpace8.L1], {color:'black', dash:1});
nameSpace8.PK=nameSpace8.board.create('segment', [nameSpace8.P, nameSpace8.K1], {color:'black', dash:1});