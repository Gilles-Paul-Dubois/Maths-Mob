var nameSpace4 = {}
nameSpace4.xmin = -5;
nameSpace4.xmax = 5;
nameSpace4.ymin = -5;
nameSpace4.ymax = 5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false});
nameSpace4.O = nameSpace4.board.create('point', [0, 0], {name: 'O', size: 1, fixed: true, color: 'blue'});
nameSpace4.K = nameSpace4.board.create('circle', [nameSpace4.O, 4]);
nameSpace4.A = nameSpace4.board.create('glider', [1.26, 3.80, nameSpace4.K], {size: 1, name: 'A'});
nameSpace4.B = nameSpace4.board.create('glider', [-2.61, -3.03, nameSpace4.K], {size: 1, name: 'B'});
nameSpace4.C = nameSpace4.board.create('glider', [1.97, -3.48, nameSpace4.K], {size: 1, name: 'C'});
nameSpace4.T = nameSpace4.board.create('tangent', [nameSpace4.C], {color: 'brown'});
nameSpace4.B1 = nameSpace4.board.create('point', [function () {
        return -nameSpace4.B.X();
    }, function () {
        return -nameSpace4.B.Y();
    }], {name: "B'", color: 'blue', size: 1})
nameSpace4.C1 = nameSpace4.board.create('point', [function () {
        return -nameSpace4.C.X();
    }, function () {
        return -nameSpace4.C.Y();
    }], {name: "C'", color: 'blue', size: 1})
nameSpace4.BC = nameSpace4.board.create('line', [nameSpace4.B, nameSpace4.C], {color: 'black', straightLast: true});
nameSpace4.BB1 = nameSpace4.board.create('segment', [nameSpace4.B, nameSpace4.B1], {color: 'black'});
nameSpace4.CB1 = nameSpace4.board.create('segment', [nameSpace4.C, nameSpace4.B1], {color: 'black'});
nameSpace4.BC1 = nameSpace4.board.create('segment', [nameSpace4.B, nameSpace4.C1], {color: 'black'});
nameSpace4.CC1 = nameSpace4.board.create('segment', [nameSpace4.C, nameSpace4.C1], {color: 'black'});
nameSpace4.BA = nameSpace4.board.create('segment', [nameSpace4.B, nameSpace4.A], {color: 'red'});
nameSpace4.CA = nameSpace4.board.create('segment', [nameSpace4.C, nameSpace4.A], {color: 'red'});
nameSpace4.A1 = nameSpace4.board.create('point', [function () {
        return -nameSpace4.A.X();
    }, function () {
        return -nameSpace4.A.Y();
    }], {name: "A'", color: 'blue', size: 1})
nameSpace4.alpha1 = nameSpace4.board.create('angle', [nameSpace4.B, nameSpace4.A, nameSpace4.C], {name: '&alpha;'});
nameSpace4.alpha2 = nameSpace4.board.create('angle', [nameSpace4.B, nameSpace4.B1, nameSpace4.C], {name: '&alpha;'});
nameSpace4.alpha3 = nameSpace4.board.create('angle', [nameSpace4.B, nameSpace4.C1, nameSpace4.C], {name: '&alpha;'});
nameSpace4.AA1 = nameSpace4.board.create('segment', [nameSpace4.A, nameSpace4.A1], {color: 'red'});
nameSpace4.beta = nameSpace4.board.create('angle', [nameSpace4.B, nameSpace4.O, nameSpace4.C], {name: '&beta;=2&alpha;', color: 'green'});
nameSpace4.T1 = nameSpace4.board.create('glider', [4, -2.33, nameSpace4.T], {size: 1, name: '', color: 'blue'});
nameSpace4.Q = nameSpace4.board.create('glider', [4, -2.33, nameSpace4.BC], {size: 1, name: '', color: 'blue'});
nameSpace4.alpha4 = nameSpace4.board.create('angle', [nameSpace4.Q, nameSpace4.C, nameSpace4.T1], {name: '&alpha;'});