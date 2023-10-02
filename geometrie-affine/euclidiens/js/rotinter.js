var nameSpace4 = {};
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace4.O = nameSpace4.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace4.I = nameSpace4.board.create('point', [2, 0], {fixed: true, size: 1, name: 'I', visible: false});
nameSpace4.i=nameSpace4.board.create('line',[nameSpace4.O, nameSpace4.I], {straightFirst:false, straightLast:false, lastArrow:true, name:'i'});
nameSpace4.K=nameSpace4.board.create('circle', [nameSpace4.O, 2]);
nameSpace4.M = nameSpace4.board.create('glider', [0, 1, nameSpace4.K], {visible: true, size: 1, name: ''});
nameSpace4.u=nameSpace4.board.create('line',[nameSpace4.O, nameSpace4.M], {straightFirst:false, straightLast:false, lastArrow:true, name:'u'});

nameSpace4.alpha=nameSpace4.board.create('angle', [nameSpace4.I, nameSpace4.O, nameSpace4.M], {name:'&alpha;'})

nameSpace4.A = nameSpace4.board.create('point', [0, -3], {visible: true, size: 1, name: 'A'});
nameSpace4.B = nameSpace4.board.create('point', [-4, -3], {visible: true, size: 1, name: 'B'});
nameSpace4.C = nameSpace4.board.create('point', [-4, -8], {visible: true, size: 1, name: 'C'});
nameSpace4.D = nameSpace4.board.create('point', [-0, -8], {visible: true, size: 1, name: 'D'});

nameSpace4.R=nameSpace4.board.create('transform',[function () {return nameSpace4.alpha.Value();},nameSpace4.O],{type:'rotate'});


nameSpace4.A1 = nameSpace4.board.create('point',[nameSpace4.A,nameSpace4.R],{name:"A'", size:1, color:'blue'});
nameSpace4.B1 = nameSpace4.board.create('point',[nameSpace4.B,nameSpace4.R],{name:"B'", size:1, color:'blue'});
nameSpace4.C1 = nameSpace4.board.create('point',[nameSpace4.C,nameSpace4.R],{name:"C'", size:1, color:'blue'});
nameSpace4.D1 = nameSpace4.board.create('point',[nameSpace4.D,nameSpace4.R],{name:"D'", size:1, color:'blue'});



nameSpace4.P=nameSpace4.board.create('polygon', [nameSpace4.A,nameSpace4.B,nameSpace4.C,nameSpace4.D ]);
nameSpace4.P1=nameSpace4.board.create('polygon', [nameSpace4.A1,nameSpace4.B1,nameSpace4.C1,nameSpace4.D1 ],{color:'red'});