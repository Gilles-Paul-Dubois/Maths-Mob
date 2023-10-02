var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});

nameSpace1.M1=nameSpace1.board.create('point', [-4,3],{visible:false});
nameSpace1.M2=nameSpace1.board.create('point', [4,2],{visible:false});
nameSpace1.D1=nameSpace1.board.create('line',[nameSpace1.M1, nameSpace1.M2]);

nameSpace1.N1=nameSpace1.board.create('point', [-4,-3],{visible:false});
nameSpace1.N2=nameSpace1.board.create('point', [5,-1],{visible:false});
nameSpace1.D2=nameSpace1.board.create('line',[nameSpace1.N1, nameSpace1.N2]);

nameSpace1.A=nameSpace1.board.create('point', [-4,3],{slideObject:nameSpace1.D1,size:1, name:'A'});
nameSpace1.B=nameSpace1.board.create('point', [0,2.5],{slideObject:nameSpace1.D1,size:1, name:'B'});
nameSpace1.C=nameSpace1.board.create('point', [4,2],{slideObject:nameSpace1.D1,size:1, name:'C'});

nameSpace1.A1=nameSpace1.board.create('point', [4,-1.22],{slideObject:nameSpace1.D2,size:1, name:"A'"});
nameSpace1.BA1=nameSpace1.board.create('line',[nameSpace1.B, nameSpace1.A1],{color:'brown'} );
nameSpace1.PA= nameSpace1.board.create('parallel',[nameSpace1.BA1, nameSpace1.A], {color:'brown'});
nameSpace1.B1= nameSpace1.board.create('intersection',[nameSpace1.D2,nameSpace1.PA],{size:1, color:'blue', name:"B'"});

nameSpace1.CB1=nameSpace1.board.create('line',[nameSpace1.C, nameSpace1.B1],{color:'brown'} );
nameSpace1.PB= nameSpace1.board.create('parallel',[nameSpace1.CB1, nameSpace1.B], {color:'brown'});
nameSpace1.C1= nameSpace1.board.create('intersection',[nameSpace1.D2,nameSpace1.PB],{size:1, color:'blue', name:"C'"});

nameSpace1.AC1=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.C1],{color:'red'} );
nameSpace1.CA1=nameSpace1.board.create('line',[nameSpace1.C, nameSpace1.A1],{color:'red'} );
