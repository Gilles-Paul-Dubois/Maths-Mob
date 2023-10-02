var nameSpace1 = {};
nameSpace1.xmin = -1.5;
nameSpace1.xmax = 1.5;
nameSpace1.ymin = -1.5;
nameSpace1.ymax = 1.5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation: false});

nameSpace1.O = nameSpace1.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace1.A = nameSpace1.board.create('point', [1, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace1.R = nameSpace1.board.create('circle', [nameSpace1.O, 1], {});
nameSpace1.M=nameSpace1.board.create('glider',[0.5,1,nameSpace1.R],{size:1, name:'M'});
nameSpace1.AM=nameSpace1.board.create('segment',[nameSpace1.A, nameSpace1.M],{color:'red'});
nameSpace1.OA=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.A]);
nameSpace1.OM=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.M]);
nameSpace1.AOM=nameSpace1.board.create('angle',[nameSpace1.A, nameSpace1.O, nameSpace1.M], {name:'&alpha;'});
