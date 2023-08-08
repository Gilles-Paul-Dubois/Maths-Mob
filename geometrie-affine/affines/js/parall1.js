var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.O=nameSpace1.board.create('point',[0,0], {fixed: true, color:'blue', size:1, name:'O', withLabel:false});
nameSpace1.A = nameSpace1.board.create('point', [2, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: false});
nameSpace1.P = nameSpace1.board.create('point', [2, 2], {fixed: false, color: 'red', size: 1, name: 'P', withLabel: true});
nameSpace1.Q = nameSpace1.board.create('point', [1, -1], {fixed: false, color: 'red', size: 1, name: 'Q', withLabel: true});
nameSpace1.Delta =nameSpace1.board.create('line',[nameSpace1.O,nameSpace1.A], { straightFirst:true, straightLast:true, lastArrow:false, color:'black', name:''});
nameSpace1.u =nameSpace1.board.create('line',[nameSpace1.O,nameSpace1.A], { straightFirst:false, straightLast:false, lastArrow:true, color:'blue', name:'u', withLabel:true, label:{position:'top'}});
nameSpace1.D=nameSpace1.board.create('parallel',[nameSpace1.Delta, nameSpace1.P], {color:'green'});
nameSpace1.E=nameSpace1.board.create('parallel',[nameSpace1.Delta, nameSpace1.Q], {color:'green'});