var nameSpace3 = {};
nameSpace3.xmin = -1.5;
nameSpace3.xmax = 1.5;
nameSpace3.ymin = -1.5;
nameSpace3.ymax = 1.5;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true, showNavigation: false});

nameSpace3.O = nameSpace3.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace3.A = nameSpace3.board.create('point', [1, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace3.A1 = nameSpace3.board.create('point', [-1, 0], {visible: true, name: "A'", size: 1, color: 'blue', fixed: true});
nameSpace3.R = nameSpace3.board.create('circle', [nameSpace3.O, 1], {});
nameSpace3.OA=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.A]);
nameSpace3.M=nameSpace3.board.create('glider',[0.5,1,nameSpace3.OA],{size:1, name:'M'});
nameSpace3.P=nameSpace3.board.create('perpendicular',[nameSpace3.M, nameSpace3.OA]);
nameSpace3.B=nameSpace3.board.create('intersection',[nameSpace3.P, nameSpace3.R,0], {size:1, color:'blue', name:'B'});
nameSpace3.C=nameSpace3.board.create('intersection',[nameSpace3.P, nameSpace3.R,1], {size:1, color:'blue', name:'C'});
nameSpace3.OB=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.B]);
nameSpace3.OC=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.C]);
nameSpace3.AC=nameSpace3.board.create('segment',[nameSpace3.A, nameSpace3.C]);
nameSpace3.A1C=nameSpace3.board.create('segment',[nameSpace3.A1, nameSpace3.C]);

