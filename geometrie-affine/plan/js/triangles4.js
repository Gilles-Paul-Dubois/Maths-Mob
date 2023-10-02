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

nameSpace4.A = nameSpace4.board.create('point', [3.3, 1], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace4.B = nameSpace4.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace4.C = nameSpace4.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace4.AB = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace4.AC = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace4.CB = nameSpace4.board.create('line', [nameSpace4.C, nameSpace4.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace4.H1 = nameSpace4.board.create('normal', [nameSpace4.AB, nameSpace4.C]);
nameSpace4.H2 = nameSpace4.board.create('normal', [nameSpace4.AC, nameSpace4.B]);
nameSpace4.H3 = nameSpace4.board.create('normal', [nameSpace4.CB, nameSpace4.A]);
nameSpace4.H=nameSpace4.board.create('intersection',[nameSpace4.H1, nameSpace4.H2], {name:'H', size:1, color:'blue'});

nameSpace4.G1 = nameSpace4.board.create('midpoint', [nameSpace4.A, nameSpace4.B], {fixed: true, color: 'blue', size: 1, name: "C'", withLabel: true});
nameSpace4.G2 = nameSpace4.board.create('midpoint', [nameSpace4.A, nameSpace4.C], {fixed: true, color: 'blue', size: 1, name: "B'", withLabel: true});
nameSpace4.G3 = nameSpace4.board.create('midpoint', [nameSpace4.C, nameSpace4.B], {fixed: true, color: 'blue', size: 1, name: "A'", withLabel: true});

nameSpace4.CG1 = nameSpace4.board.create('line', [nameSpace4.C, nameSpace4.G1], {straightFirst: false, straightLast: false, color: 'brown', name: 'CG1', withLabel: false});
nameSpace4.BG2 = nameSpace4.board.create('line', [nameSpace4.B, nameSpace4.G2], {straightFirst: false, straightLast: false, color: 'brown', name: 'BG2', withLabel: false});
nameSpace4.AG3 = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.G3], {straightFirst: false, straightLast: false, color: 'brown', name: 'AG3', withLabel: false});

nameSpace4.G=nameSpace4.board.create('intersection', [nameSpace4.BG2, nameSpace4.AG3], {size:1, color:'blue', name: 'G'});

nameSpace4.N1 = nameSpace4.board.create('normal', [nameSpace4.AB, nameSpace4.G1]);
nameSpace4.N2 = nameSpace4.board.create('normal', [nameSpace4.AC, nameSpace4.G2]);
nameSpace4.N1 = nameSpace4.board.create('normal', [nameSpace4.CB, nameSpace4.G3]);
nameSpace4.J=nameSpace4.board.create('intersection',[nameSpace4.N1, nameSpace4.N2], {name:'J', size:1, color:'blue'});

nameSpace4.EU=nameSpace4.board.create('line', [nameSpace4.G, nameSpace4.H], {color:'red'});