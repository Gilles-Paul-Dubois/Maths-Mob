var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slR = nameSpace1.board.create('slider', [[-4, 4.5], [-2, 4.5], [1, 2, 3]], {snapWidth: 0.1});
nameSpace1.O = nameSpace1.board.create('point', [-2, -1], {size: 1, name: 'O'});
nameSpace1.K = nameSpace1.board.create('circle', [nameSpace1.O, function () {
        return nameSpace1.slR.Value();
    }]);
nameSpace1.M = nameSpace1.board.create('point', [-1, 0], {size: 1, name: 'M'});
nameSpace1.A1 = nameSpace1.board.create('glider', [0, -1, nameSpace1.K], {size: 1, name: 'A'});
nameSpace1.A1M = nameSpace1.board.create('line', [nameSpace1.A1, nameSpace1.M], {color: 'green', name: 'D<sub>1</sub>', withLabel: true});
nameSpace1.A2 = nameSpace1.board.create('otherintersection', [nameSpace1.A1M, nameSpace1.K, nameSpace1.A1], {size: 1, color: 'blue', name: "A'"});
nameSpace1.TA1 = nameSpace1.board.create('tangent', [nameSpace1.A1, nameSpace1.K]);
nameSpace1.TA2 = nameSpace1.board.create('tangent', [nameSpace1.A2, nameSpace1.K]);
nameSpace1.A3 = nameSpace1.board.create('intersection', [nameSpace1.TA1, nameSpace1.TA2], {size: 1, color: 'blue', name: "A''"});

nameSpace1.B1 = nameSpace1.board.create('glider', [-1, -3, nameSpace1.K], {size: 1, name: 'B'});
nameSpace1.B1M = nameSpace1.board.create('line', [nameSpace1.B1, nameSpace1.M], {color: 'green', name: 'D<sub>2</sub>', withLabel: true});
nameSpace1.B2 = nameSpace1.board.create('otherintersection', [nameSpace1.B1M, nameSpace1.K, nameSpace1.B1], {size: 1, color: 'blue', name: "B'"});
nameSpace1.TB1 = nameSpace1.board.create('tangent', [nameSpace1.B1, nameSpace1.K]);
nameSpace1.TB2 = nameSpace1.board.create('tangent', [nameSpace1.B2, nameSpace1.K]);
nameSpace1.B3 = nameSpace1.board.create('intersection', [nameSpace1.TB1, nameSpace1.TB2], {size: 1, color: 'blue', name: "B''"});

nameSpace1.C1 = nameSpace1.board.create('glider', [-4, 0, nameSpace1.K], {size: 1, name: 'C'});
nameSpace1.C1M = nameSpace1.board.create('line', [nameSpace1.C1, nameSpace1.M], {color: 'green', name: 'D<sub>3</sub>', withLabel: true});
nameSpace1.C2 = nameSpace1.board.create('otherintersection', [nameSpace1.C1M, nameSpace1.K, nameSpace1.C1], {size: 1, color: 'blue', name: "C'"});
nameSpace1.TC1 = nameSpace1.board.create('tangent', [nameSpace1.C1, nameSpace1.K]);
nameSpace1.TC2 = nameSpace1.board.create('tangent', [nameSpace1.C2, nameSpace1.K]);
nameSpace1.C3 = nameSpace1.board.create('intersection', [nameSpace1.TC1, nameSpace1.TC2], {size: 1, color: 'blue', name: "C''"});

nameSpace1.DELTA= nameSpace1.board.create('line', [nameSpace1.A3, nameSpace1.B3], {color: 'red', name: '&Delta;', withLabel: true});
