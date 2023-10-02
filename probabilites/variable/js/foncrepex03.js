var nameSpace3 = {};
nameSpace3.xmin = -1.5;
nameSpace3.xmax = 1.5;
nameSpace3.ymin = -1.5;
nameSpace3.ymax = 1.5;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true, showNavigation: false});

nameSpace3.O = nameSpace3.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace3.A = nameSpace3.board.create('point', [1, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace3.R = nameSpace3.board.create('circle', [nameSpace3.O, 1], {});
nameSpace3.M=nameSpace3.board.create('glider',[0.5,1,nameSpace3.R],{size:1, name:'M'});
nameSpace3.AM=nameSpace3.board.create('segment',[nameSpace3.A, nameSpace3.M],{color:'red'});
nameSpace3.OA=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.A]);
nameSpace3.OM=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.M]);
nameSpace3.AOM=nameSpace3.board.create('angle',[nameSpace3.A, nameSpace3.O, nameSpace3.M], {name:'&alpha;'});
nameSpace3.I=nameSpace3.board.create('midpoint',[nameSpace3.A, nameSpace3.M],{name:'I', size:1, color:'blue'});
nameSpace3.OI=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.I]);
