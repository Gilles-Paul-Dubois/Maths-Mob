/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace1 = {};
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});

nameSpace1.A = nameSpace1.board.create('point', [3, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace1.B = nameSpace1.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace1.C = nameSpace1.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace1.AC = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace1.CB = nameSpace1.board.create('line', [nameSpace1.C, nameSpace1.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace1.G1x = function ()
{
    return (nameSpace1.A.X() + nameSpace1.B.X()) / 2;
}
nameSpace1.G1y = function ()
{
    return (nameSpace1.A.Y() + nameSpace1.B.Y()) / 2;
}
nameSpace1.G1 = nameSpace1.board.create('point', [nameSpace1.G1x, nameSpace1.G1y], {fixed: true, color: 'blue', size: 1, name: 'G1', withLabel: true});
nameSpace1.G2x = function ()
{
    return (nameSpace1.A.X() + nameSpace1.C.X()) / 2;
}
nameSpace1.G2y = function ()
{
    return (nameSpace1.A.Y() + nameSpace1.C.Y()) / 2;
}
nameSpace1.G2 = nameSpace1.board.create('point', [nameSpace1.G2x, nameSpace1.G2y], {fixed: true, color: 'blue', size: 1, name: 'G2', withLabel: true});
nameSpace1.G3x = function ()
{
    return (nameSpace1.B.X() + nameSpace1.C.X()) / 2;
}
nameSpace1.G3y = function ()
{
    return (nameSpace1.B.Y() + nameSpace1.C.Y()) / 2;
}
nameSpace1.G3 = nameSpace1.board.create('point', [nameSpace1.G3x, nameSpace1.G3y], {fixed: true, color: 'blue', size: 1, name: 'G3', withLabel: true});
nameSpace1.CG1 = nameSpace1.board.create('line', [nameSpace1.C, nameSpace1.G1], {straightFirst: false, straightLast: false, color: 'brown', name: 'CG1', withLabel: false});
nameSpace1.BG2 = nameSpace1.board.create('line', [nameSpace1.B, nameSpace1.G2], {straightFirst: false, straightLast: false, color: 'brown', name: 'BG2', withLabel: false});
nameSpace1.AG3 = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.G3], {straightFirst: false, straightLast: false, color: 'brown', name: 'AG3', withLabel: false});
nameSpace1.Gx = function ()
{
    return (nameSpace1.A.X() + nameSpace1.B.X() + nameSpace1.C.X()) / 3;
}
nameSpace1.Gy = function ()
{
    return (nameSpace1.A.Y() + nameSpace1.B.Y() + nameSpace1.C.Y()) / 3;
}

nameSpace1.G = nameSpace1.board.create('point', [nameSpace1.Gx, nameSpace1.Gy], {fixed: true, color: 'blue', size: 1, name: 'G', withLabel: true});
nameSpace1.board.create('midpoint',[nameSpace1.C,nameSpace1.G], {withLabel:false, size:1, color: 'brown'});       
nameSpace1.board.create('midpoint',[nameSpace1.A,nameSpace1.G], {withLabel:false, size:1, color: 'brown'}); 
nameSpace1.board.create('midpoint',[nameSpace1.B,nameSpace1.G], {withLabel:false, size:1, color: 'brown'}); 