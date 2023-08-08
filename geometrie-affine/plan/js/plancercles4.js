var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slR1 = nameSpace1.board.create('slider', [[-9, 9], [-5, 9], [1, 2, 5]], {snapWidth: 0.1});
nameSpace1.O = nameSpace1.board.create('point', [-5, 0], {size: 1, name: "O", fixed:true, color:'blue'});
nameSpace1.I = nameSpace1.board.create('point', [1, 0], {size: 1, name: "O'", visible:false});
nameSpace1.Ox=nameSpace1.board.create('line',[nameSpace1.O,nameSpace1.I]);
nameSpace1.K1 = nameSpace1.board.create('circle', [nameSpace1.O, function () {
        return nameSpace1.slR1.Value();
    }]);
nameSpace1.A=nameSpace1.board.create('glider',[-4,2,nameSpace1.K1], {size:1, name:'A'});
nameSpace1.OA=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.A], {});
nameSpace1.T=nameSpace1.board.create('tangent',[nameSpace1.A, nameSpace1.K1]);
nameSpace1.O1=nameSpace1.board.create('intersection', [nameSpace1.Ox, nameSpace1.T],{size:1, name:"O'", color:'blue'});

nameSpace1.K2 = nameSpace1.board.create('circle',[nameSpace1.O1, nameSpace1.A]);

nameSpace1.P=nameSpace1.board.create('glider',[-6.5,1.5,nameSpace1.K1], {size:1, name:'P'});
nameSpace1.D=nameSpace1.board.create('line',[nameSpace1.P, nameSpace1.O], {color:'green'});

nameSpace1.Q=nameSpace1.board.create('intersection', [nameSpace1.D, nameSpace1.K1,0],{size:1, name:"Q", color:'blue'});
nameSpace1.P1=nameSpace1.board.create('intersection', [nameSpace1.D, nameSpace1.K2,1],{size:1, name:"P'", color:'blue'});
nameSpace1.Q1=nameSpace1.board.create('intersection', [nameSpace1.D, nameSpace1.K2,0],{size:1, name:"Q'", color:'blue'});
nameSpace1.J=nameSpace1.board.create('midpoint',[nameSpace1.P1, nameSpace1.Q1], {visible:false});
nameSpace1.L=nameSpace1.board.create('perpendicular', [nameSpace1.J, nameSpace1.D]);