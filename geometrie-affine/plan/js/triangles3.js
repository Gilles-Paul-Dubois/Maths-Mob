/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace3 = {};
nameSpace3.xmin = -5;
nameSpace3.xmax = 5;
nameSpace3.ymin = -5;
nameSpace3.ymax = 5;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false});

nameSpace3.A = nameSpace3.board.create('point', [3, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace3.B = nameSpace3.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace3.C = nameSpace3.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace3.AB = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace3.AC = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace3.CB = nameSpace3.board.create('line', [nameSpace3.C, nameSpace3.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace3.N1 = nameSpace3.board.create('normal', [nameSpace3.AB, nameSpace3.C]);
nameSpace3.N2 = nameSpace3.board.create('normal', [nameSpace3.AC, nameSpace3.B]);
nameSpace3.N3 = nameSpace3.board.create('normal', [nameSpace3.CB, nameSpace3.A]);
nameSpace3.H=nameSpace3.board.create('intersection',[nameSpace3.N1, nameSpace3.N2], {name:'H', size:1, color:'blue'});