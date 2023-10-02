var nameSpace2 = {};
nameSpace2.xmin = -1.5;
nameSpace2.xmax = 1.5;
nameSpace2.ymin = -1.5;
nameSpace2.ymax = 1.5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true, showNavigation: false});

nameSpace2.O = nameSpace2.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace2.A = nameSpace2.board.create('point', [1, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace2.A1 = nameSpace2.board.create('point', [-1, 0], {visible: true, name: "A'", size: 1, color: 'blue', fixed: true});
nameSpace2.R = nameSpace2.board.create('circle', [nameSpace2.O, 1], {});
nameSpace2.OA=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.A]);
nameSpace2.M=nameSpace2.board.create('glider',[0.5,1,nameSpace2.OA],{size:1, name:'M'});
nameSpace2.P=nameSpace2.board.create('perpendicular',[nameSpace2.M, nameSpace2.OA]);
nameSpace2.B=nameSpace2.board.create('intersection',[nameSpace2.P, nameSpace2.R,0], {size:1, color:'blue', name:'B'});
nameSpace2.C=nameSpace2.board.create('intersection',[nameSpace2.P, nameSpace2.R,1], {size:1, color:'blue', name:'C'});
nameSpace2.OB=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.B]);
nameSpace2.OC=nameSpace2.board.create('segment',[nameSpace2.O, nameSpace2.C]);
nameSpace2.AC=nameSpace2.board.create('segment',[nameSpace2.A, nameSpace2.C]);
nameSpace2.A1C=nameSpace2.board.create('segment',[nameSpace2.A1, nameSpace2.C]);

