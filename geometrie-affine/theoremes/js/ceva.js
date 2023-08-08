var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});

nameSpace1.A = nameSpace1.board.create('point', [-0.5, 2], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace1.B = nameSpace1.board.create('point', [-1, -1], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace1.C = nameSpace1.board.create('point', [2, -1], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace1.AC = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.C], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace1.BC = nameSpace1.board.create('line', [nameSpace1.B, nameSpace1.C], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace1.D = nameSpace1.board.create('point', [0, -1], {slideObject: nameSpace1.BC, fixed: false, color: 'red', size: 1, name: 'D', withLabel: true});
nameSpace1.E = nameSpace1.board.create('point', [1, 0], {slideObject: nameSpace1.AC, fixed: false, color: 'red', size: 1, name: 'E', withLabel: true});
nameSpace1.F = nameSpace1.board.create('point', [-1, 0], {slideObject: nameSpace1.AB, fixed: false, color: 'red', size: 1, name: 'F', withLabel: true});

nameSpace1.AD = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.D], {straightFirst: true, straightLast: true, color: 'blue', name: 'AD', withLabel: false});
nameSpace1.BE = nameSpace1.board.create('line', [nameSpace1.B, nameSpace1.E], {straightFirst: true, straightLast: true, color: 'blue', name: 'BE', withLabel: false});
nameSpace1.CF = nameSpace1.board.create('line', [nameSpace1.C, nameSpace1.F], {straightFirst: true, straightLast: true, color: 'blue', name: 'CF', withLabel: false});
nameSpace1.txt1 = function ()
{
    var n1 = nameSpace1.B.X() - nameSpace1.D.X();
    var d1 = nameSpace1.C.X() - nameSpace1.D.X();
    var r1 = n1 / d1;
    var n2 = nameSpace1.C.X() - nameSpace1.E.X();
    var d2 = nameSpace1.A.X() - nameSpace1.E.X();
    var r2 = n2 / d2;
    var n3 = nameSpace1.A.X() - nameSpace1.F.X();
    var d3 = nameSpace1.B.X() - nameSpace1.F.X();
    var r3 = n3 / d3;
    var r = r1 * r2 * r3;
    return "m=" + r.toFixed(2);

}
nameSpace1.board.create('text', [4, 4.5, nameSpace1.txt1]);