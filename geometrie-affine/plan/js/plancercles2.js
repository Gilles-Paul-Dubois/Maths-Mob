var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slR1 = nameSpace1.board.create('slider', [[-9, 9], [-5, 9], [1, 2, 3]], {snapWidth: 0.1});
nameSpace1.slR2 = nameSpace1.board.create('slider', [[-9, 8.5], [-5, 8.5], [3, 4, 5]], {snapWidth: 0.1});

nameSpace1.O1 = nameSpace1.board.create('point', [-2, -2], {size: 1, name: "O"});
nameSpace1.O2 = nameSpace1.board.create('point', [3, 3], {size: 1, name: "O'"});
nameSpace1.K1 = nameSpace1.board.create('circle', [nameSpace1.O1, function () {
        return nameSpace1.slR1.Value();
    }]);
nameSpace1.K2 = nameSpace1.board.create('circle', [nameSpace1.O2, function () {
        return nameSpace1.slR2.Value();
    }]);
nameSpace1.Axe=nameSpace1.board.create('line',[nameSpace1.O1, nameSpace1.O2]);
nameSpace1.M=nameSpace1.board.create('midpoint', [nameSpace1.O1, nameSpace1.O2], {size:1, color:'blue', name:'I'});
nameSpace1.O1O2=nameSpace1.board.create('segment',[nameSpace1.O1,nameSpace1.O2]);
nameSpace1.rayon= function()
{
    var R1=nameSpace1.slR1.Value();
    var R2=nameSpace1.slR2.Value();
    var d=nameSpace1.O1O2.L();
    var v= Math.abs(R1*R1-R2*R2)/(2*d);
    return v;
    
}

nameSpace1.K3=nameSpace1.board.create('circle',[nameSpace1.M,nameSpace1.rayon],{visible: false,dash:1});

nameSpace1.K=nameSpace1.board.create('intersection',[nameSpace1.Axe, nameSpace1.K3,1],{size:1, color:'blue',name:'K'});
nameSpace1.AxeRad=nameSpace1.board.create('perpendicular',[nameSpace1.K, nameSpace1.Axe], {color:'red'});

nameSpace1.P1 = nameSpace1.board.create('perpendicular', [nameSpace1.O1, nameSpace1.O1O2],{ visible:false});
nameSpace1.A1 = nameSpace1.board.create('intersection', [nameSpace1.P1, nameSpace1.K1, 0], {size: 1, name: 'A', color: 'green', visible:false});
nameSpace1.B1 = nameSpace1.board.create('intersection', [nameSpace1.P1, nameSpace1.K1, 1], {size: 1, name: 'B', color: 'green', visible:false});

nameSpace1.P2 = nameSpace1.board.create('perpendicular', [nameSpace1.O2, nameSpace1.O1O2], {visible:false});
nameSpace1.A2 = nameSpace1.board.create('intersection', [nameSpace1.P2, nameSpace1.K2, 0], {size: 1, name: "A'", color: 'green', visible:false});
nameSpace1.B2 = nameSpace1.board.create('intersection', [nameSpace1.P2, nameSpace1.K2, 1], {size: 1, name: "B'", color: 'green', visible:false});

nameSpace1.A1A2 = nameSpace1.board.create('line', [nameSpace1.A1, nameSpace1.A2],{ visible:false});
nameSpace1.B1B2 = nameSpace1.board.create('line', [nameSpace1.B1, nameSpace1.B2],{ visible:false});
nameSpace1.A1B2 = nameSpace1.board.create('line', [nameSpace1.A1, nameSpace1.B2],{ visible:false});
nameSpace1.B1A2 = nameSpace1.board.create('line', [nameSpace1.B1, nameSpace1.A2],{ visible:false});
nameSpace1.J = nameSpace1.board.create('intersection', [nameSpace1.A1A2, nameSpace1.B1B2], {name: "J", size: 1, color: 'green', visible:false});
nameSpace1.I = nameSpace1.board.create('intersection', [nameSpace1.A1B2, nameSpace1.B1A2], {name: "I", size: 1, color: 'green', visible:false});

nameSpace1.Omega1 = nameSpace1.board.create('midpoint', [nameSpace1.O1, nameSpace1.J], {size: 1, name: '&Omega;', color: 'green', visible:false});
nameSpace1.Omega2 = nameSpace1.board.create('midpoint', [nameSpace1.O1, nameSpace1.I], {size: 1, name: "&Omega;'", color: 'green', visible:false});

nameSpace1.K3= nameSpace1.board.create('circle', [nameSpace1.Omega1, nameSpace1.O1], {dash:1, visible:false});
nameSpace1.K4= nameSpace1.board.create('circle', [nameSpace1.Omega2, nameSpace1.O1], {dash:1, visible:false});

nameSpace1.C1=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K3,0], {size:1, color:'green', name:'', visible:false});
nameSpace1.C2=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K3,1], {size:1, color:'green', name:'', visible:false});
nameSpace1.T1=nameSpace1.board.create('line',[nameSpace1.J, nameSpace1.C1], {color:'green'});
nameSpace1.T2=nameSpace1.board.create('line',[nameSpace1.J, nameSpace1.C2], {color:'green'});

nameSpace1.C3=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K4,0], {size:1, color:'green', name:'', visible:false});
nameSpace1.C4=nameSpace1.board.create('intersection',[nameSpace1.K1, nameSpace1.K4,1], {size:1, color:'green', name:'', visible:false});
nameSpace1.T3=nameSpace1.board.create('line',[nameSpace1.I, nameSpace1.C3], {color:'green'});
nameSpace1.T4=nameSpace1.board.create('line',[nameSpace1.I, nameSpace1.C4], {color:'green'});