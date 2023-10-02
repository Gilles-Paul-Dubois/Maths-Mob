/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace2 = {};
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});

nameSpace2.A = nameSpace2.board.create('point', [3, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace2.B = nameSpace2.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace2.C = nameSpace2.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace2.AB = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace2.AC = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace2.CB = nameSpace2.board.create('line', [nameSpace2.C, nameSpace2.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace2.G1x = function ()
{
    return (nameSpace2.A.X() + nameSpace2.B.X()) / 2;
}
nameSpace2.G1y = function ()
{
    return (nameSpace2.A.Y() + nameSpace2.B.Y()) / 2;
}
nameSpace2.G1 = nameSpace2.board.create('point', [nameSpace2.G1x, nameSpace2.G1y], {fixed: true, color: 'blue', size: 1, name: "C'", withLabel: true});
nameSpace2.G2x = function ()
{
    return (nameSpace2.A.X() + nameSpace2.C.X()) / 2;
}
nameSpace2.G2y = function ()
{
    return (nameSpace2.A.Y() + nameSpace2.C.Y()) / 2;
}
nameSpace2.G2 = nameSpace2.board.create('point', [nameSpace2.G2x, nameSpace2.G2y], {fixed: true, color: 'blue', size: 1, name: "B'", withLabel: true});
nameSpace2.G3x = function ()
{
    return (nameSpace2.B.X() + nameSpace2.C.X()) / 2;
}
nameSpace2.G3y = function ()
{
    return (nameSpace2.B.Y() + nameSpace2.C.Y()) / 2;
}
nameSpace2.G3 = nameSpace2.board.create('point', [nameSpace2.G3x, nameSpace2.G3y], {fixed: true, color: 'blue', size: 1, name: "A'", withLabel: true});

nameSpace2.N1 = nameSpace2.board.create('normal', [nameSpace2.AB, nameSpace2.G1]);
nameSpace2.N2 = nameSpace2.board.create('normal', [nameSpace2.AC, nameSpace2.G2]);
nameSpace2.N1 = nameSpace2.board.create('normal', [nameSpace2.CB, nameSpace2.G3]);
nameSpace2.J=nameSpace2.board.create('intersection',[nameSpace2.N1, nameSpace2.N2], {name:'J', size:1, color:'blue'});
nameSpace2.K=nameSpace2.board.create('circle', [nameSpace2.J, nameSpace2.A]);
