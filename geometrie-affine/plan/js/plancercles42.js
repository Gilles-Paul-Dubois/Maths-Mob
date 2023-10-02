var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.slR1 = nameSpace2.board.create('slider', [[-9, 9], [-5, 9], [1, 2, 5]], {snapWidth: 0.1});
nameSpace2.O = nameSpace2.board.create('point', [-5, 0], {size: 1, name: "O", fixed:true, color:'blue'});
nameSpace2.I = nameSpace2.board.create('point', [1, 0], {size: 1, name: "O'", visible:false});
nameSpace2.Ox=nameSpace2.board.create('line',[nameSpace2.O,nameSpace2.I]);
nameSpace2.K1 = nameSpace2.board.create('circle', [nameSpace2.O, function () {
        return nameSpace2.slR1.Value();
    }]);
nameSpace2.A=nameSpace2.board.create('glider',[-4,2,nameSpace2.K1], {size:1, name:'A'});
nameSpace2.OA=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.A], {});
nameSpace2.T=nameSpace2.board.create('tangent',[nameSpace2.A, nameSpace2.K1]);
nameSpace2.O1=nameSpace2.board.create('intersection', [nameSpace2.Ox, nameSpace2.T],{size:1, name:"O'", color:'blue'});

nameSpace2.K2 = nameSpace2.board.create('circle',[nameSpace2.O1, nameSpace2.A]);

nameSpace2.P=nameSpace2.board.create('glider',[-6.5,1.5,nameSpace2.K1], {size:1, name:'P'});
nameSpace2.D=nameSpace2.board.create('line',[nameSpace2.P, nameSpace2.O], {color:'green'});

nameSpace2.Q=nameSpace2.board.create('intersection', [nameSpace2.D, nameSpace2.K1,0],{size:1, name:"Q", color:'blue'});
nameSpace2.P1=nameSpace2.board.create('intersection', [nameSpace2.D, nameSpace2.K2,1],{size:1, name:"P'", color:'blue'});
nameSpace2.Q1=nameSpace2.board.create('intersection', [nameSpace2.D, nameSpace2.K2,0],{size:1, name:"Q'", color:'blue'});
nameSpace2.J=nameSpace2.board.create('midpoint',[nameSpace2.P1, nameSpace2.Q1], {visible:false});
nameSpace2.L=nameSpace2.board.create('perpendicular', [nameSpace2.J, nameSpace2.D]);