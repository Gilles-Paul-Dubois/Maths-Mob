var nameSpace2 = {}
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.slR = nameSpace2.board.create('slider', [[-4, 4.5], [-2, 4.5], [1, 2, 3]], {snapWidth: 0.1});
nameSpace2.O = nameSpace2.board.create('point', [-2, -1], {size: 1, name: 'O'});
nameSpace2.K = nameSpace2.board.create('circle', [nameSpace2.O, function () {
        return nameSpace2.slR.Value();
    }]);
nameSpace2.M = nameSpace2.board.create('point', [-1, 0], {size: 1, name: 'M'});
nameSpace2.A1 = nameSpace2.board.create('glider', [0, -1, nameSpace2.K], {size: 1, name: 'A'});
nameSpace2.A1M = nameSpace2.board.create('line', [nameSpace2.A1, nameSpace2.M], {color: 'green', name: 'D<sub>1</sub>', withLabel: true});
nameSpace2.A2 = nameSpace2.board.create('otherintersection', [nameSpace2.A1M, nameSpace2.K, nameSpace2.A1], {size: 1, color: 'blue', name: "A'"});
nameSpace2.TA1 = nameSpace2.board.create('tangent', [nameSpace2.A1, nameSpace2.K]);
nameSpace2.TA2 = nameSpace2.board.create('tangent', [nameSpace2.A2, nameSpace2.K]);
nameSpace2.A3 = nameSpace2.board.create('intersection', [nameSpace2.TA1, nameSpace2.TA2], {size: 1, color: 'blue', name: "A''"});

nameSpace2.B1 = nameSpace2.board.create('glider', [-1, -3, nameSpace2.K], {size: 1, name: 'B'});
nameSpace2.B1M = nameSpace2.board.create('line', [nameSpace2.B1, nameSpace2.M], {color: 'green', name: 'D<sub>2</sub>', withLabel: true});
nameSpace2.B2 = nameSpace2.board.create('otherintersection', [nameSpace2.B1M, nameSpace2.K, nameSpace2.B1], {size: 1, color: 'blue', name: "B'"});
nameSpace2.TB1 = nameSpace2.board.create('tangent', [nameSpace2.B1, nameSpace2.K]);
nameSpace2.TB2 = nameSpace2.board.create('tangent', [nameSpace2.B2, nameSpace2.K]);
nameSpace2.B3 = nameSpace2.board.create('intersection', [nameSpace2.TB1, nameSpace2.TB2], {size: 1, color: 'blue', name: "B''"});

nameSpace2.C1 = nameSpace2.board.create('glider', [-4, 0, nameSpace2.K], {size: 1, name: 'C'});
nameSpace2.C1M = nameSpace2.board.create('line', [nameSpace2.C1, nameSpace2.M], {color: 'green', name: 'D<sub>3</sub>', withLabel: true});
nameSpace2.C2 = nameSpace2.board.create('otherintersection', [nameSpace2.C1M, nameSpace2.K, nameSpace2.C1], {size: 1, color: 'blue', name: "C'"});
nameSpace2.TC1 = nameSpace2.board.create('tangent', [nameSpace2.C1, nameSpace2.K]);
nameSpace2.TC2 = nameSpace2.board.create('tangent', [nameSpace2.C2, nameSpace2.K]);
nameSpace2.C3 = nameSpace2.board.create('intersection', [nameSpace2.TC1, nameSpace2.TC2], {size: 1, color: 'blue', name: "C''"});

nameSpace2.DELTA= nameSpace2.board.create('line', [nameSpace2.A3, nameSpace2.B3], {color: 'red', name: '&Delta;', withLabel: true});
