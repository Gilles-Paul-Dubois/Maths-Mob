var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.A = nameSpace2.board.create('point', [3,-0.5],{size:1});
nameSpace2.B = nameSpace2.board.create('point', [-3,-3],{size:1});
nameSpace2.AB=nameSpace2.board.create('line',[nameSpace2.A,nameSpace2.B],{color:'brown'});
nameSpace2.C2=nameSpace2.board.create('midpoint',[nameSpace2.A,nameSpace2.B], {size:1, name:"C''", color:'blue'});
nameSpace2.C=nameSpace2.board.create('point',[-1,2], {size:1});
nameSpace2.AC=nameSpace2.board.create('line',[nameSpace2.A,nameSpace2.C],{color:'brown'});
nameSpace2.BC=nameSpace2.board.create('line',[nameSpace2.B,nameSpace2.C],{color:'brown'});
nameSpace2.A2=nameSpace2.board.create('midpoint',[nameSpace2.B,nameSpace2.C], {size:1, name:"A''", color:'blue'});
nameSpace2.B2=nameSpace2.board.create('midpoint',[nameSpace2.A,nameSpace2.C], {size:1, name:"B''", color:'blue'});

nameSpace2.X = nameSpace2.board.create('point', [-6,-7],{size:1, name:'X'});
nameSpace2.Y = nameSpace2.board.create('point', [6,-7],{size:1, name:'Y'});
nameSpace2.XY=nameSpace2.board.create('line',[nameSpace2.X,nameSpace2.Y],{color:'green'});

nameSpace2.A1=nameSpace2.board.create('perpendicularpoint',[nameSpace2.XY,nameSpace2.A],{size:1, color:'green',name:"A'"}); 
nameSpace2.B1=nameSpace2.board.create('perpendicularpoint',[nameSpace2.XY,nameSpace2.B],{size:1, color:'green',name:"B'"}); 
nameSpace2.C1=nameSpace2.board.create('perpendicularpoint',[nameSpace2.XY,nameSpace2.C],{size:1, color:'green',name:"C'"}); 

nameSpace2.AA1=nameSpace2.board.create('segment',[nameSpace2.A, nameSpace2.A1], {dash:1, color:'black'});
nameSpace2.BB1=nameSpace2.board.create('segment',[nameSpace2.B, nameSpace2.B1], {dash:1, color:'black'});
nameSpace2.CC1=nameSpace2.board.create('segment',[nameSpace2.C, nameSpace2.C1], {dash:1, color:'black'});

nameSpace2.P1=nameSpace2.board.create('perpendicular',[nameSpace2.A1, nameSpace2.BC], {color:'blue'});
nameSpace2.P2=nameSpace2.board.create('perpendicular',[nameSpace2.B1, nameSpace2.AC], {color:'blue'});
nameSpace2.P3=nameSpace2.board.create('perpendicular',[nameSpace2.C1, nameSpace2.AB], {color:'blue'});

nameSpace2.K1=nameSpace2.board.create('circle',[nameSpace2.A2, nameSpace2.B1], {dash:1, strokeColor:'orange'});
nameSpace2.K2=nameSpace2.board.create('circle',[nameSpace2.B2, nameSpace2.A1], {dash:1, strokeColor:'orange'});
nameSpace2.K3=nameSpace2.board.create('circle',[nameSpace2.C2, nameSpace2.A1], {dash:1, strokeColor:'orange'});