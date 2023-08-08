/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace4 = {};
nameSpace4.xmin = -5;
nameSpace4.xmax = 5;
nameSpace4.ymin = -5;
nameSpace4.ymax = 5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false});

nameSpace4.A = nameSpace4.board.create('point', [2.33, 0.84], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace4.B = nameSpace4.board.create('point', [-0.26, 2.41], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace4.C = nameSpace4.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace4.AB = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {color: 'green', name: 'AB', withLabel: false});
nameSpace4.AC = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.C], {color: 'green', name: 'AB', withLabel: false});
nameSpace4.CB = nameSpace4.board.create('line', [nameSpace4.C, nameSpace4.B], {color: 'green', name: 'AB', withLabel: false});

nameSpace4.N1 = nameSpace4.board.create('normal', [nameSpace4.AB, nameSpace4.C]);
nameSpace4.N2 = nameSpace4.board.create('normal', [nameSpace4.AC, nameSpace4.B]);
nameSpace4.N3 = nameSpace4.board.create('normal', [nameSpace4.CB, nameSpace4.A]);
nameSpace4.H = nameSpace4.board.create('intersection', [nameSpace4.N1, nameSpace4.N2], {name: 'H', size: 1, color: 'blue'});

nameSpace4.A1 = nameSpace4.board.create('intersection', [nameSpace4.N3, nameSpace4.CB], {size: 1, name: "A'", color: 'blue'});
nameSpace4.B1 = nameSpace4.board.create('intersection', [nameSpace4.N2, nameSpace4.AC], {size: 1, name: "B'", color: 'blue'});
nameSpace4.C1 = nameSpace4.board.create('intersection', [nameSpace4.N1, nameSpace4.AB], {size: 1, name: "C'", color: 'blue'});

nameSpace4.A1B1 = nameSpace4.board.create('line', [nameSpace4.A1, nameSpace4.B1], {color: 'brown', withLabel: false});
nameSpace4.A1C1 = nameSpace4.board.create('line', [nameSpace4.A1, nameSpace4.C1], {color: 'brown', withLabel: false});
nameSpace4.C1B1 = nameSpace4.board.create('line', [nameSpace4.C1, nameSpace4.B1], {color: 'brown', withLabel: false});

nameSpace4.R = nameSpace4.board.create('intersection', [nameSpace4.A1B1, nameSpace4.AB], {size: 1, name: "R", color: 'blue'});
nameSpace4.P = nameSpace4.board.create('intersection', [nameSpace4.C1B1, nameSpace4.CB], {size: 1, name: "P", color: 'blue'});
nameSpace4.Q = nameSpace4.board.create('intersection', [nameSpace4.A1C1, nameSpace4.AC], {size: 1, name: "Q", color: 'blue'});

nameSpace4.PQ = nameSpace4.board.create('line', [nameSpace4.P, nameSpace4.Q], {color: 'red', withLabel: false});

nameSpace4.ABC=nameSpace4.board.create('polygon',[nameSpace4.A, nameSpace4.B, nameSpace4.C]);
nameSpace4.A1B1C1=nameSpace4.board.create('polygon',[nameSpace4.A1, nameSpace4.B1, nameSpace4.C1], {color: 'red', opacity:0.3});

nameSpace4.K1=nameSpace4.board.create ('circumcircle',[nameSpace4.A, nameSpace4.B, nameSpace4.C]);
nameSpace4.K2=nameSpace4.board.create ('circumcircle',[nameSpace4.A1, nameSpace4.B1, nameSpace4.C1]);