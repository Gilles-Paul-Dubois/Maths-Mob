/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace6 = {};
nameSpace6.xmin = -5;
nameSpace6.xmax = 5;
nameSpace6.ymin = -5;
nameSpace6.ymax = 5;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: false});

nameSpace6.A = nameSpace6.board.create('point', [1.95, -0.56], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace6.B = nameSpace6.board.create('point', [-0.36, 3.9], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace6.C = nameSpace6.board.create('point', [-3.6, -3.7], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace6.AB = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace6.AC = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace6.CB = nameSpace6.board.create('line', [nameSpace6.C, nameSpace6.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace6.Ax = nameSpace6.board.create('bisector', [nameSpace6.B, nameSpace6.A, nameSpace6.C]);
nameSpace6.Bx = nameSpace6.board.create('bisector', [nameSpace6.C, nameSpace6.B, nameSpace6.A]);
nameSpace6.Cx = nameSpace6.board.create('bisector', [nameSpace6.B, nameSpace6.C, nameSpace6.A]);
nameSpace6.A1=nameSpace6.board.create('midpoint',[nameSpace6.B, nameSpace6.C], {size:1, name:"A'", color:'blue'});
nameSpace6.B1=nameSpace6.board.create('midpoint',[nameSpace6.A, nameSpace6.C], {size:1, name:"B'", color:'blue'});
nameSpace6.C1=nameSpace6.board.create('midpoint',[nameSpace6.B, nameSpace6.A], {size:1, name:"C'", color:'blue'});

nameSpace6.M1=nameSpace6.board.create('segment',[nameSpace6.A, nameSpace6.A1], {color:'blue'});
nameSpace6.M2=nameSpace6.board.create('segment',[nameSpace6.B, nameSpace6.B1], {color:'blue'});
nameSpace6.M3=nameSpace6.board.create('segment',[nameSpace6.C, nameSpace6.C1], {color:'blue'});

//board.create('reflection',[point,line]); 
nameSpace6.N1=nameSpace6.board.create('reflection',[nameSpace6.A1, nameSpace6.Ax], {visible:false});
nameSpace6.S1 = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.N1], {straightFirst: false, straightLast: false, color: 'red', withLabel: false});
nameSpace6.N2=nameSpace6.board.create('reflection',[nameSpace6.B1, nameSpace6.Bx], {visible:false});
nameSpace6.S2 = nameSpace6.board.create('line', [nameSpace6.B, nameSpace6.N2], {straightFirst: false, straightLast: false, color: 'red', withLabel: false});
nameSpace6.N3=nameSpace6.board.create('reflection',[nameSpace6.C1, nameSpace6.Cx], {visible:false});
nameSpace6.S3 = nameSpace6.board.create('line', [nameSpace6.C, nameSpace6.N3], {straightFirst: false, straightLast: false, color: 'red', withLabel: false});
