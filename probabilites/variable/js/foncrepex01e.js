var nameSpace2 = {};
nameSpace2.xmin = -1.5;
nameSpace2.xmax = 1.5;
nameSpace2.ymin = -1.5;
nameSpace2.ymax = 1.5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true, showNavigation: false});

nameSpace2.O = nameSpace2.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace2.A = nameSpace2.board.create('point', [1, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace2.R = nameSpace2.board.create('circle', [nameSpace2.O, 1], {});
nameSpace2.M=nameSpace2.board.create('glider',[0.5,1,nameSpace2.R],{size:1, name:'M'});
nameSpace2.AM=nameSpace2.board.create('segment',[nameSpace2.A, nameSpace2.M],{color:'red'});
nameSpace2.OA=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.A]);
nameSpace2.OM=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.M]);
nameSpace2.AOM=nameSpace2.board.create('angle',[nameSpace2.A, nameSpace2.O, nameSpace2.M], {name:'&alpha;'});
