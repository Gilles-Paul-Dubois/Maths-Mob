/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace4 = {}
nameSpace4.xmin = -5;
nameSpace4.xmax = 5;
nameSpace4.ymin = -5;
nameSpace4.ymax = 5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false});

nameSpace4.A = nameSpace4.board.create('point', [3, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace4.B = nameSpace4.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace4.C = nameSpace4.board.create('point', [-2, -2], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace4.D = nameSpace4.board.create('point', [4, -2], {fixed: false, color: 'red', size: 1, name: 'D', withLabel: true});
nameSpace4.AB = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {straightFirst: false, straightLast: false, color: 'green',  withLabel: false});
nameSpace4.AC = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.C], {straightFirst: false, straightLast: false, color: 'brown', withLabel: false});
nameSpace4.CB = nameSpace4.board.create('line', [nameSpace4.C, nameSpace4.B], {straightFirst: false, straightLast: false, color: 'green',  withLabel: false});
nameSpace4.DB = nameSpace4.board.create('line', [nameSpace4.D, nameSpace4.B], {straightFirst: false, straightLast: false, color: 'brown',  withLabel: false});
nameSpace4.CD = nameSpace4.board.create('line', [nameSpace4.C, nameSpace4.D], {straightFirst: false, straightLast: false, color: 'green', withLabel: false});
nameSpace4.AD = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.D], {straightFirst: false, straightLast: false, color: 'green',  withLabel: false});

nameSpace4.MAB=nameSpace4.board.create('midpoint',[nameSpace4.AB], {size:1, color:'brown', fixed:true, withLabel:false});
nameSpace4.MCD=nameSpace4.board.create('midpoint',[nameSpace4.CD], {size:1, color:'brown', fixed:true, withLabel:false});
nameSpace4.MCB=nameSpace4.board.create('midpoint',[nameSpace4.CB], {size:1, color:'brown', fixed:true, withLabel:false});
nameSpace4.MAD=nameSpace4.board.create('midpoint',[nameSpace4.AD], {size:1, color:'brown', fixed:true, withLabel:false});
nameSpace4.MAC=nameSpace4.board.create('midpoint',[nameSpace4.AC], {size:1, color:'brown', fixed:true, withLabel:false});
nameSpace4.MDB=nameSpace4.board.create('midpoint',[nameSpace4.DB], {size:1, color:'brown', fixed:true, withLabel:false});

nameSpace4.Med1=nameSpace4.board.create('line', [nameSpace4.MAB, nameSpace4.MCD], {straightFirst: false, straightLast: false, color: 'blue',  withLabel: false});
nameSpace4.Med2=nameSpace4.board.create('line', [nameSpace4.MCB, nameSpace4.MAD], {straightFirst: false, straightLast: false, color: 'blue',  withLabel: false});
nameSpace4.MtoM = nameSpace4.board.create('line', [nameSpace4.MAC, nameSpace4.MDB], {straightFirst: false, straightLast: false, color: 'red',  withLabel: false});

nameSpace4.G=nameSpace4.board.create('midpoint',[nameSpace4.MtoM], {size:1, color:'black', fixed:true, withLabel:true, name:'G'});