var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.A = nameSpace1.board.create('point', [3,-0.5],{size:1});
nameSpace1.B = nameSpace1.board.create('point', [-3,-3],{size:1});
nameSpace1.AB=nameSpace1.board.create('line',[nameSpace1.A,nameSpace1.B],{color:'brown'});
nameSpace1.C2=nameSpace1.board.create('midpoint',[nameSpace1.A,nameSpace1.B], {size:1, name:"C''", color:'blue'});
nameSpace1.C=nameSpace1.board.create('point',[-1,2], {size:1});
nameSpace1.AC=nameSpace1.board.create('line',[nameSpace1.A,nameSpace1.C],{color:'brown'});
nameSpace1.BC=nameSpace1.board.create('line',[nameSpace1.B,nameSpace1.C],{color:'brown'});
nameSpace1.A2=nameSpace1.board.create('midpoint',[nameSpace1.B,nameSpace1.C], {size:1, name:"A''", color:'blue'});
nameSpace1.B2=nameSpace1.board.create('midpoint',[nameSpace1.A,nameSpace1.C], {size:1, name:"B''", color:'blue'});

nameSpace1.X = nameSpace1.board.create('point', [-6,-7],{size:1, name:'X'});
nameSpace1.Y = nameSpace1.board.create('point', [6,-7],{size:1, name:'Y'});
nameSpace1.XY=nameSpace1.board.create('line',[nameSpace1.X,nameSpace1.Y],{color:'green'});

nameSpace1.A1=nameSpace1.board.create('perpendicularpoint',[nameSpace1.XY,nameSpace1.A],{size:1, color:'green',name:"A'"}); 
nameSpace1.B1=nameSpace1.board.create('perpendicularpoint',[nameSpace1.XY,nameSpace1.B],{size:1, color:'green',name:"B'"}); 
nameSpace1.C1=nameSpace1.board.create('perpendicularpoint',[nameSpace1.XY,nameSpace1.C],{size:1, color:'green',name:"C'"}); 

nameSpace1.AA1=nameSpace1.board.create('segment',[nameSpace1.A, nameSpace1.A1], {dash:1, color:'black'});
nameSpace1.BB1=nameSpace1.board.create('segment',[nameSpace1.B, nameSpace1.B1], {dash:1, color:'black'});
nameSpace1.CC1=nameSpace1.board.create('segment',[nameSpace1.C, nameSpace1.C1], {dash:1, color:'black'});

nameSpace1.P1=nameSpace1.board.create('perpendicular',[nameSpace1.A1, nameSpace1.BC], {color:'blue'});
nameSpace1.P2=nameSpace1.board.create('perpendicular',[nameSpace1.B1, nameSpace1.AC], {color:'blue'});
nameSpace1.P3=nameSpace1.board.create('perpendicular',[nameSpace1.C1, nameSpace1.AB], {color:'blue'});

nameSpace1.K1=nameSpace1.board.create('circle',[nameSpace1.A2, nameSpace1.B1], {dash:1, strokeColor:'orange'});
nameSpace1.K2=nameSpace1.board.create('circle',[nameSpace1.B2, nameSpace1.A1], {dash:1, strokeColor:'orange'});
nameSpace1.K3=nameSpace1.board.create('circle',[nameSpace1.C2, nameSpace1.A1], {dash:1, strokeColor:'orange'});