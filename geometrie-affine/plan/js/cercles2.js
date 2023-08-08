var nameSpace2 = {}
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.slr1 = nameSpace2.board.create('slider', [[-4, 4], [-2, 4], [1, 2, 3]], {color: 'blue'});
nameSpace2.slr2 = nameSpace2.board.create('slider', [[0, 4], [2, 4], [1, 1.5, 3]], {color: 'green'});
nameSpace2.A = nameSpace2.board.create('point', [-1, 0], {name: 'A', size: 1, snapSizeX: 0.1, snapSizeY: 0.1});
nameSpace2.K1 = nameSpace2.board.create('circle', [nameSpace2.A, function () {
        return nameSpace2.slr1.Value();
    }], {strokeColor: 'blue'});

nameSpace2.B = nameSpace2.board.create('point', [2, 0], {name: 'B', size: 1, snapSizeX: 0.1, snapSizeY: 0.1});
nameSpace2.K2 = nameSpace2.board.create('circle', [nameSpace2.B, function () {
        return nameSpace2.slr2.Value();
    }], {strokeColor: 'green'});
nameSpace2.I = nameSpace2.board.create('intersection', [nameSpace2.K1, nameSpace2.K2, 0], {size: 1, color: 'blue', fixed: true, name: 'I'});
nameSpace2.J = nameSpace2.board.create('intersection', [nameSpace2.K1, nameSpace2.K2, 1], {size: 1, color: 'blue', fixed: true, name: 'J'});
nameSpace2.AB = nameSpace2.board.create('segment', [nameSpace2.A, nameSpace2.B], {color: 'brown'});
nameSpace2.AB2 = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {color: 'brown'});
nameSpace2.IJ = nameSpace2.board.create('line', [nameSpace2.I, nameSpace2.J], {color: 'black'});
nameSpace2.H = nameSpace2.board.create('intersection', [nameSpace2.AB, nameSpace2.K1], {name: 'H', visible: false});
 nameSpace2.P1 = nameSpace2.board.create('perpendicular', [nameSpace2.AB2, nameSpace2.H], {color:'orange'});
 nameSpace2.L = nameSpace2.board.create('intersection', [nameSpace2.AB, nameSpace2.K2], {name: 'L', visible: false});
 nameSpace2.P2 = nameSpace2.board.create('perpendicular', [nameSpace2.AB2, nameSpace2.L], {color:'orange'});

nameSpace2.txt1 = function ()
{
    return "R<sub>1</sub>=" + nameSpace2.slr1.Value().toFixed(2);
}
nameSpace2.board.create('text', [-1.5, 4, nameSpace2.txt1]);

nameSpace2.txt2 = function ()
{       
    return "R<sub>2</sub>=" + nameSpace2.slr2.Value().toFixed(2);
}
nameSpace2.board.create('text', [2.5, 4, nameSpace2.txt2], {color: 'green'});
nameSpace2.txt3 = function ()
{
    return "AB=" + nameSpace2.AB.L().toFixed(2);
}
nameSpace2.board.create('text', [-1, -4, nameSpace2.txt3], {color: 'brown'});

