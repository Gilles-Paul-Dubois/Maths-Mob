var nameSpace2 = {}
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false
    });


nameSpace2.S=nameSpace2.board.create('point',[-4,4], {fixed: true, size:1, name:'S', color: 'blue'});
nameSpace2.A=nameSpace2.board.create('point',[-2,3.2], {fixed: false, size:1, name:'A'});
nameSpace2.B=nameSpace2.board.create('point',[-3,1.85], {fixed: false, size:1, name:'B'});
nameSpace2.C=nameSpace2.board.create('point',[-0.5,1.95], {fixed: false, size:1, name:'C'});
nameSpace2.SA=nameSpace2.board.create('line',[nameSpace2.S,nameSpace2.A], {color:'green'});
nameSpace2.SB=nameSpace2.board.create('line',[nameSpace2.S,nameSpace2.B], {color:'green'});
nameSpace2.SC=nameSpace2.board.create('line',[nameSpace2.S,nameSpace2.C], {color:'green'});

nameSpace2.A1=nameSpace2.board.create('point',[0.54,2.14], {slideObject: nameSpace2.SA, fixed: false, size:1, name:"A'"});
nameSpace2.B1=nameSpace2.board.create('point',[-2.48,0.74], {slideObject: nameSpace2.SB, fixed: false, size:1, name:"B'"});
nameSpace2.C1=nameSpace2.board.create('point',[0.57,1.36], {slideObject: nameSpace2.SC, fixed: false, size:1, name:"C'"});

nameSpace2.AB=nameSpace2.board.create('line',[nameSpace2.A, nameSpace2.B], {color:'red', straightFirst:true, straightLast:true});
nameSpace2.AC=nameSpace2.board.create('line',[nameSpace2.A, nameSpace2.C], {color:'red', straightFirst:true, straightLast:true});
nameSpace2.BC=nameSpace2.board.create('line',[nameSpace2.B, nameSpace2.C], {color:'red', straightFirst:true, straightLast:true});
//
nameSpace2.A1B1=nameSpace2.board.create('line',[nameSpace2.A1, nameSpace2.B1], {color:'red', straightFirst:true, straightLast:true});
nameSpace2.A1C1=nameSpace2.board.create('line',[nameSpace2.A1, nameSpace2.C1], {color:'red', straightFirst:true, straightLast:true});
nameSpace2.B1C1=nameSpace2.board.create('line',[nameSpace2.B1, nameSpace2.C1], {color:'red', straightFirst:true, straightLast:true});

nameSpace2.U=nameSpace2.board.create('intersection',[nameSpace2.AB, nameSpace2.A1B1],{color:'blue', size:1, name:'U'});
nameSpace2.V=nameSpace2.board.create('intersection',[nameSpace2.AC, nameSpace2.A1C1],{color:'blue', size:1, name:'V'});
nameSpace2.W=nameSpace2.board.create('intersection',[nameSpace2.BC, nameSpace2.B1C1],{color:'blue', size:1, name:'W'});

nameSpace2.UV=nameSpace2.board.create('line',[nameSpace2.U, nameSpace2.V], {color:'blue', straightFirst:true, straightLast:true});

nameSpace2.ABC=nameSpace2.board.create('polygon',[nameSpace2.A, nameSpace2.B, nameSpace2.C]);
nameSpace2.A1B1C1=nameSpace2.board.create('polygon',[nameSpace2.A1, nameSpace2.B1, nameSpace2.C1], {color:'yellow'});