/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace3 = {}
nameSpace3.xmin = -5;
nameSpace3.xmax = 5;
nameSpace3.ymin = -5;
nameSpace3.ymax = 5;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false});

nameSpace3.A = nameSpace3.board.create('point', [3, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace3.B = nameSpace3.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace3.C = nameSpace3.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace3.AB = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace3.AC = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace3.CB = nameSpace3.board.create('line', [nameSpace3.C, nameSpace3.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace3.G1x = function ()
{
    return (nameSpace3.A.X() + nameSpace3.B.X()) / 2;
}
nameSpace3.G1y = function ()
{
    return (nameSpace3.A.Y() + nameSpace3.B.Y()) / 2;
}
nameSpace3.G1 = nameSpace3.board.create('point', [nameSpace3.G1x, nameSpace3.G1y], {fixed: true, color: 'blue', size: 1, name: 'G1', withLabel: true});
nameSpace3.G2x = function ()
{
    return (nameSpace3.A.X() + nameSpace3.C.X()) / 2;
}
nameSpace3.G2y = function ()
{
    return (nameSpace3.A.Y() + nameSpace3.C.Y()) / 2;
}
nameSpace3.G2 = nameSpace3.board.create('point', [nameSpace3.G2x, nameSpace3.G2y], {fixed: true, color: 'blue', size: 1, name: 'G2', withLabel: true});
nameSpace3.G3x = function ()
{
    return (nameSpace3.B.X() + nameSpace3.C.X()) / 2;
}
nameSpace3.G3y = function ()
{
    return (nameSpace3.B.Y() + nameSpace3.C.Y()) / 2;
}
nameSpace3.G3 = nameSpace3.board.create('point', [nameSpace3.G3x, nameSpace3.G3y], {fixed: true, color: 'blue', size: 1, name: 'G3', withLabel: true});
nameSpace3.CG1 = nameSpace3.board.create('line', [nameSpace3.C, nameSpace3.G1], {straightFirst: false, straightLast: false, color: 'brown', name: 'CG1', withLabel: false});
nameSpace3.BG2 = nameSpace3.board.create('line', [nameSpace3.B, nameSpace3.G2], {straightFirst: false, straightLast: false, color: 'brown', name: 'BG2', withLabel: false});
nameSpace3.AG3 = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.G3], {straightFirst: false, straightLast: false, color: 'brown', name: 'AG3', withLabel: false});
nameSpace3.Gx = function ()
{
    return (nameSpace3.A.X() + nameSpace3.B.X() + nameSpace3.C.X()) / 3;
}
nameSpace3.Gy = function ()
{
    return (nameSpace3.A.Y() + nameSpace3.B.Y() + nameSpace3.C.Y()) / 3;
}

nameSpace3.G = nameSpace3.board.create('point', [nameSpace3.Gx, nameSpace3.Gy], {fixed: true, color: 'blue', size: 1, name: 'G', withLabel: true});
nameSpace3.board.create('midpoint',[nameSpace3.C,nameSpace3.G], {withLabel:false, size:1, color: 'brown'});       
nameSpace3.board.create('midpoint',[nameSpace3.A,nameSpace3.G], {withLabel:false, size:1, color: 'brown'}); 
nameSpace3.board.create('midpoint',[nameSpace3.B,nameSpace3.G], {withLabel:false, size:1, color: 'brown'}); 