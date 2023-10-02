var nameSpace4 = {};
nameSpace4.xmin = -1.5;
nameSpace4.xmax = 1.5;
nameSpace4.ymin = -1.5;
nameSpace4.ymax = 1.5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true, showNavigation: false});

nameSpace4.O = nameSpace4.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace4.A = nameSpace4.board.create('point', [1, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace4.R = nameSpace4.board.create('circle', [nameSpace4.O, 1], {});
nameSpace4.M=nameSpace4.board.create('glider',[0.5,1,nameSpace4.R],{size:1, name:'M'});
nameSpace4.AM=nameSpace4.board.create('segment',[nameSpace4.A, nameSpace4.M],{color:'red'});
nameSpace4.OA=nameSpace4.board.create('segment',[nameSpace4.O, nameSpace4.A]);
nameSpace4.OM=nameSpace4.board.create('segment',[nameSpace4.O, nameSpace4.M]);
nameSpace4.AOM=nameSpace4.board.create('angle',[nameSpace4.A, nameSpace4.O, nameSpace4.M], {name:'&alpha;'});
nameSpace4.I=nameSpace4.board.create('midpoint',[nameSpace4.A, nameSpace4.M],{name:'I', size:1, color:'blue'});
nameSpace4.OI=nameSpace4.board.create('segment',[nameSpace4.O, nameSpace4.I]);
