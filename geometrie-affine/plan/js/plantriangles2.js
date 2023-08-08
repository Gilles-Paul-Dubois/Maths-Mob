/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace5 = {};
nameSpace5.xmin = -5;
nameSpace5.xmax = 5;
nameSpace5.ymin = -5;
nameSpace5.ymax = 5;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: false});

nameSpace5.A = nameSpace5.board.create('point', [1.95, -0.56], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace5.B = nameSpace5.board.create('point', [-0.36, 3.9], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace5.C = nameSpace5.board.create('point', [-3.6, -3.7], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace5.AB = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace5.AC = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace5.CB = nameSpace5.board.create('line', [nameSpace5.C, nameSpace5.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace5.Ax = nameSpace5.board.create('bisector', [nameSpace5.B, nameSpace5.A, nameSpace5.C]);
nameSpace5.Bx = nameSpace5.board.create('bisector', [nameSpace5.C, nameSpace5.B, nameSpace5.A]);
nameSpace5.Cx = nameSpace5.board.create('bisector', [nameSpace5.B, nameSpace5.C, nameSpace5.A]);
nameSpace5.A1=nameSpace5.board.create('midpoint',[nameSpace5.B, nameSpace5.C], {size:1, name:"A'", color:'blue'});
nameSpace5.B1=nameSpace5.board.create('midpoint',[nameSpace5.A, nameSpace5.C], {size:1, name:"B'", color:'blue'});
nameSpace5.C1=nameSpace5.board.create('midpoint',[nameSpace5.B, nameSpace5.A], {size:1, name:"C'", color:'blue'});

nameSpace5.M1=nameSpace5.board.create('segment',[nameSpace5.A, nameSpace5.A1], {color:'blue'});
nameSpace5.M2=nameSpace5.board.create('segment',[nameSpace5.B, nameSpace5.B1], {color:'blue'});
nameSpace5.M3=nameSpace5.board.create('segment',[nameSpace5.C, nameSpace5.C1], {color:'blue'});

//board.create('reflection',[point,line]); 
nameSpace5.N1=nameSpace5.board.create('reflection',[nameSpace5.A1, nameSpace5.Ax], {visible:false});
nameSpace5.S1 = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.N1], {straightFirst: false, straightLast: false, color: 'red', withLabel: false});
nameSpace5.N2=nameSpace5.board.create('reflection',[nameSpace5.B1, nameSpace5.Bx], {visible:false});
nameSpace5.S2 = nameSpace5.board.create('line', [nameSpace5.B, nameSpace5.N2], {straightFirst: false, straightLast: false, color: 'red', withLabel: false});
nameSpace5.N3=nameSpace5.board.create('reflection',[nameSpace5.C1, nameSpace5.Cx], {visible:false});
nameSpace5.S3 = nameSpace5.board.create('line', [nameSpace5.C, nameSpace5.N3], {straightFirst: false, straightLast: false, color: 'red', withLabel: false});
