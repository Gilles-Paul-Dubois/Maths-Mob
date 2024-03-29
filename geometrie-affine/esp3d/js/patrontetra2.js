var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.A = nameSpace2.board.create('point', [1,1],{size:1});
nameSpace2.B = nameSpace2.board.create('point', [-3,-3],{size:1});
nameSpace2.AB=nameSpace2.board.create('line',[nameSpace2.A,nameSpace2.B]);
nameSpace2.I=nameSpace2.board.create('midpoint',[nameSpace2.A,nameSpace2.B], {size:1, name:'I', color:'blue'});
nameSpace2.K1=nameSpace2.board.create('circle', [nameSpace2.I, nameSpace2.A]);
nameSpace2.C=nameSpace2.board.create('glider',[-1,2,nameSpace2.K1], {size:1});
nameSpace2.AC=nameSpace2.board.create('line',[nameSpace2.A,nameSpace2.C]);
nameSpace2.D1=nameSpace2.board.create('glider',[-5.5,0,nameSpace2.AC], {size:1, name:"D'"});
nameSpace2.K2=nameSpace2.board.create('circle', [nameSpace2.C, nameSpace2.D1]);
nameSpace2.P1=nameSpace2.board.create('perpendicular', [nameSpace2.A, nameSpace2.AC]);
nameSpace2.D2=nameSpace2.board.create('intersection',[nameSpace2.P1, nameSpace2.K2,0],{size:1, name:"D''", color:'blue'});
nameSpace2.K3=nameSpace2.board.create('circle', [nameSpace2.B, nameSpace2.D1]);
nameSpace2.P2=nameSpace2.board.create('perpendicular', [nameSpace2.A, nameSpace2.AB]);
nameSpace2.D3=nameSpace2.board.create('intersection',[nameSpace2.P2, nameSpace2.K3,1],{size:1, name:"D'''", color:'blue'});

nameSpace2.T1=nameSpace2.board.create('polygon',[nameSpace2.A,nameSpace2.B, nameSpace2.C]);
nameSpace2.T2=nameSpace2.board.create('polygon',[nameSpace2.B,nameSpace2.C, nameSpace2.D1],{color:'red', opacity:0.3});
nameSpace2.T3=nameSpace2.board.create('polygon',[nameSpace2.A,nameSpace2.C, nameSpace2.D2],{color:'blue', opacity:0.3});
nameSpace2.T4=nameSpace2.board.create('polygon',[nameSpace2.A,nameSpace2.B, nameSpace2.D3],{color:'yellow', opacity:0.3});