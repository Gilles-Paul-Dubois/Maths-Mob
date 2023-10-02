var nameSpace2 = {}
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false
    });

nameSpace2.M1=nameSpace2.board.create('point', [-4,3],{visible:false});
nameSpace2.M2=nameSpace2.board.create('point', [4,2],{visible:false});
nameSpace2.D1=nameSpace2.board.create('line',[nameSpace2.M1, nameSpace2.M2]);

nameSpace2.N1=nameSpace2.board.create('point', [-4,-3],{visible:false});
nameSpace2.N2=nameSpace2.board.create('point', [5,-1],{visible:false});
nameSpace2.D2=nameSpace2.board.create('line',[nameSpace2.N1, nameSpace2.N2]);

nameSpace2.A=nameSpace2.board.create('point', [-4,3],{slideObject:nameSpace2.D1,size:1, name:'A'});
nameSpace2.B=nameSpace2.board.create('point', [0,2.5],{slideObject:nameSpace2.D1,size:1, name:'B'});
nameSpace2.C=nameSpace2.board.create('point', [4,2],{slideObject:nameSpace2.D1,size:1, name:'C'});

nameSpace2.A1=nameSpace2.board.create('point', [-4,-3],{slideObject:nameSpace2.D2,size:1, name:"A'"});
nameSpace2.B1=nameSpace2.board.create('point', [0,-2],{slideObject:nameSpace2.D2,size:1, name:"B'"});
nameSpace2.C1=nameSpace2.board.create('point', [4,-1.22],{slideObject:nameSpace2.D2,size:1, name:"C'"});

nameSpace2.AB1=nameSpace2.board.create('line',[nameSpace2.A, nameSpace2.B1],{color:'brown'} );
nameSpace2.BA1=nameSpace2.board.create('line',[nameSpace2.B, nameSpace2.A1],{color:'brown'} );
nameSpace2.M= nameSpace2.board.create('intersection',[nameSpace2.AB1,nameSpace2.BA1],{size:1, color:'blue', name:"M"});

nameSpace2.BC1=nameSpace2.board.create('line',[nameSpace2.B, nameSpace2.C1],{color:'brown'} );
nameSpace2.CB1=nameSpace2.board.create('line',[nameSpace2.C, nameSpace2.B1],{color:'brown'} );
nameSpace2.N= nameSpace2.board.create('intersection',[nameSpace2.CB1,nameSpace2.BC1],{size:1, color:'blue', name:"N"});

nameSpace2.AC1=nameSpace2.board.create('line',[nameSpace2.A, nameSpace2.C1],{color:'brown'} );
nameSpace2.CA1=nameSpace2.board.create('line',[nameSpace2.C, nameSpace2.A1],{color:'brown'} );
nameSpace2.P= nameSpace2.board.create('intersection',[nameSpace2.CA1,nameSpace2.AC1],{size:1, color:'blue', name:"P"});

nameSpace2.MN=nameSpace2.board.create('line',[nameSpace2.M, nameSpace2.N],{color:'red'});;
