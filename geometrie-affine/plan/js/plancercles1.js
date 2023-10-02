var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slR1 = nameSpace1.board.create('slider', [[-9, 9], [-5, 9], [1, 2, 4]], {snapWidth: 0.1});
nameSpace1.slR2 = nameSpace1.board.create('slider', [[-9, 8.5], [-5, 8.5], [1, 4, 5]], {snapWidth: 0.1});

nameSpace1.O1 = nameSpace1.board.create('point', [-2, -2], {size: 1, name: "O"});
nameSpace1.O2 = nameSpace1.board.create('point', [3, 3], {size: 1, name: "O'"});
nameSpace1.K1 = nameSpace1.board.create('circle', [nameSpace1.O1, function () {
        return nameSpace1.slR1.Value();
    }]);
nameSpace1.K2 = nameSpace1.board.create('circle', [nameSpace1.O2, function () {
        return nameSpace1.slR2.Value();
    }]);
nameSpace1.O1O2 = nameSpace1.board.create('line', [nameSpace1.O1, nameSpace1.O2]);
nameSpace1.P1 = nameSpace1.board.create('perpendicular', [nameSpace1.O1, nameSpace1.O1O2]);
nameSpace1.A1 = nameSpace1.board.create('intersection', [nameSpace1.P1, nameSpace1.K1, 0], {size: 1, name: 'A', color: 'green'});
nameSpace1.B1 = nameSpace1.board.create('intersection', [nameSpace1.P1, nameSpace1.K1, 1], {size: 1, name: 'B', color: 'green'});

nameSpace1.P2 = nameSpace1.board.create('perpendicular', [nameSpace1.O2, nameSpace1.O1O2]);
nameSpace1.A2 = nameSpace1.board.create('intersection', [nameSpace1.P2, nameSpace1.K2, 0], {size: 1, name: "A'", color: 'green'});
nameSpace1.B2 = nameSpace1.board.create('intersection', [nameSpace1.P2, nameSpace1.K2, 1], {size: 1, name: "B'", color: 'green'});

nameSpace1.A1A2 = nameSpace1.board.create('line', [nameSpace1.A1, nameSpace1.A2]);
nameSpace1.B1B2 = nameSpace1.board.create('line', [nameSpace1.B1, nameSpace1.B2]);

nameSpace1.A1B2 = nameSpace1.board.create('line', [nameSpace1.A1, nameSpace1.B2]);
nameSpace1.B1A2 = nameSpace1.board.create('line', [nameSpace1.B1, nameSpace1.A2]);
nameSpace1.J = nameSpace1.board.create('intersection', [nameSpace1.A1A2, nameSpace1.B1B2], {name: "J", size: 1, color: 'green'});
nameSpace1.I = nameSpace1.board.create('intersection', [nameSpace1.A1B2, nameSpace1.B1A2], {name: "I", size: 1, color: 'green'});

nameSpace1.Omega1 = nameSpace1.board.create('midpoint', [nameSpace1.O1, nameSpace1.J], {size: 1, name: '&Omega;', color: 'green'});
nameSpace1.Omega2 = nameSpace1.board.create('midpoint', [nameSpace1.O1, nameSpace1.I], {size: 1, name: "&Omega;'", color: 'green'});

nameSpace1.K3= nameSpace1.board.create('circle', [nameSpace1.Omega1, nameSpace1.O1], {dash:1});
nameSpace1.K4= nameSpace1.board.create('circle', [nameSpace1.Omega2, nameSpace1.O1], {dash:1});

nameSpace1.C1=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K3,0], {size:1, color:'green', name:''});
nameSpace1.C2=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K3,1], {size:1, color:'green', name:''});
nameSpace1.T1=nameSpace1.board.create('line',[nameSpace1.J, nameSpace1.C1], {color:'red'});
nameSpace1.T2=nameSpace1.board.create('line',[nameSpace1.J, nameSpace1.C2], {color:'red'});

nameSpace1.C3=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K4,0], {size:1, color:'green', name:''});
nameSpace1.C4=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K4,1], {size:1, color:'green', name:''});
nameSpace1.T3=nameSpace1.board.create('line',[nameSpace1.I, nameSpace1.C3], {color:'red'});
nameSpace1.T4=nameSpace1.board.create('line',[nameSpace1.I, nameSpace1.C4], {color:'red'});
