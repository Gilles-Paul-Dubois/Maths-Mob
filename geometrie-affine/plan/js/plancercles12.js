var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.slR1 = nameSpace2.board.create('slider', [[-9, 9], [-5, 9], [1, 2, 4]], {snapWidth: 0.1});
nameSpace2.slR2 = nameSpace2.board.create('slider', [[-9, 8.5], [-5, 8.5], [1, 4, 5]], {snapWidth: 0.1});

nameSpace2.O1 = nameSpace2.board.create('point', [-2, -2], {size: 1, name: "O"});
nameSpace2.O2 = nameSpace2.board.create('point', [3, 3], {size: 1, name: "O'"});
nameSpace2.K1 = nameSpace2.board.create('circle', [nameSpace2.O1, function () {
        return nameSpace2.slR1.Value();
    }]);
nameSpace2.K2 = nameSpace2.board.create('circle', [nameSpace2.O2, function () {
        return nameSpace2.slR2.Value();
    }]);
nameSpace2.O1O2 = nameSpace2.board.create('line', [nameSpace2.O1, nameSpace2.O2]);
nameSpace2.P1 = nameSpace2.board.create('perpendicular', [nameSpace2.O1, nameSpace2.O1O2]);
nameSpace2.A1 = nameSpace2.board.create('intersection', [nameSpace2.P1, nameSpace2.K1, 0], {size: 1, name: 'A', color: 'green'});
nameSpace2.B1 = nameSpace2.board.create('intersection', [nameSpace2.P1, nameSpace2.K1, 1], {size: 1, name: 'B', color: 'green'});

nameSpace2.P2 = nameSpace2.board.create('perpendicular', [nameSpace2.O2, nameSpace2.O1O2]);
nameSpace2.A2 = nameSpace2.board.create('intersection', [nameSpace2.P2, nameSpace2.K2, 0], {size: 1, name: "A'", color: 'green'});
nameSpace2.B2 = nameSpace2.board.create('intersection', [nameSpace2.P2, nameSpace2.K2, 1], {size: 1, name: "B'", color: 'green'});

nameSpace2.A1A2 = nameSpace2.board.create('line', [nameSpace2.A1, nameSpace2.A2]);
nameSpace2.B1B2 = nameSpace2.board.create('line', [nameSpace2.B1, nameSpace2.B2]);

nameSpace2.A1B2 = nameSpace2.board.create('line', [nameSpace2.A1, nameSpace2.B2]);
nameSpace2.B1A2 = nameSpace2.board.create('line', [nameSpace2.B1, nameSpace2.A2]);
nameSpace2.J = nameSpace2.board.create('intersection', [nameSpace2.A1A2, nameSpace2.B1B2], {name: "J", size: 1, color: 'green'});
nameSpace2.I = nameSpace2.board.create('intersection', [nameSpace2.A1B2, nameSpace2.B1A2], {name: "I", size: 1, color: 'green'});

nameSpace2.Omega1 = nameSpace2.board.create('midpoint', [nameSpace2.O1, nameSpace2.J], {size: 1, name: '&Omega;', color: 'green'});
nameSpace2.Omega2 = nameSpace2.board.create('midpoint', [nameSpace2.O1, nameSpace2.I], {size: 1, name: "&Omega;'", color: 'green'});

nameSpace2.K3= nameSpace2.board.create('circle', [nameSpace2.Omega1, nameSpace2.O1], {dash:1});
nameSpace2.K4= nameSpace2.board.create('circle', [nameSpace2.Omega2, nameSpace2.O1], {dash:1});

nameSpace2.C1=nameSpace2.board.create('intersection',[nameSpace2.K1, nameSpace2.K3,0], {size:1, color:'green', name:''});
nameSpace2.C2=nameSpace2.board.create('intersection',[nameSpace2.K1, nameSpace2.K3,1], {size:1, color:'green', name:''});
nameSpace2.T1=nameSpace2.board.create('line',[nameSpace2.J, nameSpace2.C1], {color:'red'});
nameSpace2.T2=nameSpace2.board.create('line',[nameSpace2.J, nameSpace2.C2], {color:'red'});

nameSpace2.C3=nameSpace2.board.create('intersection',[nameSpace2.K1, nameSpace2.K4,0], {size:1, color:'green', name:''});
nameSpace2.C4=nameSpace2.board.create('intersection',[nameSpace2.K1, nameSpace2.K4,1], {size:1, color:'green', name:''});
nameSpace2.T3=nameSpace2.board.create('line',[nameSpace2.I, nameSpace2.C3], {color:'red'});
nameSpace2.T4=nameSpace2.board.create('line',[nameSpace2.I, nameSpace2.C4], {color:'red'});
