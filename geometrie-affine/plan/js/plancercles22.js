var nameSoace2 = {};
nameSoace2.xmin = -10;
nameSoace2.xmax = 10;
nameSoace2.ymin = -10;
nameSoace2.ymax = 10;
nameSoace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSoace2.xmin, nameSoace2.ymax, nameSoace2.xmax, nameSoace2.ymin], axis: false});
nameSoace2.slR1 = nameSoace2.board.create('slider', [[-9, 9], [-5, 9], [1, 2, 3]], {snapWidth: 0.1});
nameSoace2.slR2 = nameSoace2.board.create('slider', [[-9, 8.5], [-5, 8.5], [3, 4, 5]], {snapWidth: 0.1});

nameSoace2.O1 = nameSoace2.board.create('point', [-2, -2], {size: 1, name: "O"});
nameSoace2.O2 = nameSoace2.board.create('point', [3, 3], {size: 1, name: "O'"});
nameSoace2.K1 = nameSoace2.board.create('circle', [nameSoace2.O1, function () {
        return nameSoace2.slR1.Value();
    }]);
nameSoace2.K2 = nameSoace2.board.create('circle', [nameSoace2.O2, function () {
        return nameSoace2.slR2.Value();
    }]);
nameSoace2.Axe=nameSoace2.board.create('line',[nameSoace2.O1, nameSoace2.O2]);
nameSoace2.M=nameSoace2.board.create('midpoint', [nameSoace2.O1, nameSoace2.O2], {size:1, color:'blue', name:'I'});
nameSoace2.O1O2=nameSoace2.board.create('segment',[nameSoace2.O1,nameSoace2.O2]);
nameSoace2.rayon= function()
{
    var R1=nameSoace2.slR1.Value();
    var R2=nameSoace2.slR2.Value();
    var d=nameSoace2.O1O2.L();
    var v= Math.abs(R1*R1-R2*R2)/(2*d);
    return v;
    
}

nameSoace2.K3=nameSoace2.board.create('circle',[nameSoace2.M,nameSoace2.rayon],{visible: false,dash:1});

nameSoace2.K=nameSoace2.board.create('intersection',[nameSoace2.Axe, nameSoace2.K3,1],{size:1, color:'blue',name:'K'});
nameSoace2.AxeRad=nameSoace2.board.create('perpendicular',[nameSoace2.K, nameSoace2.Axe], {color:'red'});

nameSoace2.P1 = nameSoace2.board.create('perpendicular', [nameSoace2.O1, nameSoace2.O1O2],{ visible:false});
nameSoace2.A1 = nameSoace2.board.create('intersection', [nameSoace2.P1, nameSoace2.K1, 0], {size: 1, name: 'A', color: 'green', visible:false});
nameSoace2.B1 = nameSoace2.board.create('intersection', [nameSoace2.P1, nameSoace2.K1, 1], {size: 1, name: 'B', color: 'green', visible:false});

nameSoace2.P2 = nameSoace2.board.create('perpendicular', [nameSoace2.O2, nameSoace2.O1O2], {visible:false});
nameSoace2.A2 = nameSoace2.board.create('intersection', [nameSoace2.P2, nameSoace2.K2, 0], {size: 1, name: "A'", color: 'green', visible:false});
nameSoace2.B2 = nameSoace2.board.create('intersection', [nameSoace2.P2, nameSoace2.K2, 1], {size: 1, name: "B'", color: 'green', visible:false});

nameSoace2.A1A2 = nameSoace2.board.create('line', [nameSoace2.A1, nameSoace2.A2],{ visible:false});
nameSoace2.B1B2 = nameSoace2.board.create('line', [nameSoace2.B1, nameSoace2.B2],{ visible:false});
nameSoace2.A1B2 = nameSoace2.board.create('line', [nameSoace2.A1, nameSoace2.B2],{ visible:false});
nameSoace2.B1A2 = nameSoace2.board.create('line', [nameSoace2.B1, nameSoace2.A2],{ visible:false});
nameSoace2.J = nameSoace2.board.create('intersection', [nameSoace2.A1A2, nameSoace2.B1B2], {name: "J", size: 1, color: 'green', visible:false});
nameSoace2.I = nameSoace2.board.create('intersection', [nameSoace2.A1B2, nameSoace2.B1A2], {name: "I", size: 1, color: 'green', visible:false});

nameSoace2.Omega1 = nameSoace2.board.create('midpoint', [nameSoace2.O1, nameSoace2.J], {size: 1, name: '&Omega;', color: 'green', visible:false});
nameSoace2.Omega2 = nameSoace2.board.create('midpoint', [nameSoace2.O1, nameSoace2.I], {size: 1, name: "&Omega;'", color: 'green', visible:false});

nameSoace2.K3= nameSoace2.board.create('circle', [nameSoace2.Omega1, nameSoace2.O1], {dash:1, visible:false});
nameSoace2.K4= nameSoace2.board.create('circle', [nameSoace2.Omega2, nameSoace2.O1], {dash:1, visible:false});

nameSoace2.C1=nameSoace2.board.create('intersection',[nameSoace2.K1, nameSoace2.K3,0], {size:1, color:'green', name:'', visible:false});
nameSoace2.C2=nameSoace2.board.create('intersection',[nameSoace2.K1, nameSoace2.K3,1], {size:1, color:'green', name:'', visible:false});
nameSoace2.T1=nameSoace2.board.create('line',[nameSoace2.J, nameSoace2.C1], {color:'green'});
nameSoace2.T2=nameSoace2.board.create('line',[nameSoace2.J, nameSoace2.C2], {color:'green'});

nameSoace2.C3=nameSoace2.board.create('intersection',[nameSoace2.K1, nameSoace2.K4,0], {size:1, color:'green', name:'', visible:false});
nameSoace2.C4=nameSoace2.board.create('intersection',[nameSoace2.K1, nameSoace2.K4,1], {size:1, color:'green', name:'', visible:false});
nameSoace2.T3=nameSoace2.board.create('line',[nameSoace2.I, nameSoace2.C3], {color:'green'});
nameSoace2.T4=nameSoace2.board.create('line',[nameSoace2.I, nameSoace2.C4], {color:'green'});