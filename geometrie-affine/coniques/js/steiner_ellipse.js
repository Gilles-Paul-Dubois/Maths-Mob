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

nameSpace5.A1=nameSpace5.board.create('midpoint',[nameSpace5.B, nameSpace5.C], {size:1, name:"I", color:'blue'});
nameSpace5.B1=nameSpace5.board.create('midpoint',[nameSpace5.A, nameSpace5.C], {size:1, name:"J", color:'blue'});
nameSpace5.C1=nameSpace5.board.create('midpoint',[nameSpace5.B, nameSpace5.A], {size:1, name:"K", color:'blue'});

nameSpace5.M1=nameSpace5.board.create('segment',[nameSpace5.A, nameSpace5.A1], {color:'blue'});
nameSpace5.M2=nameSpace5.board.create('segment',[nameSpace5.B, nameSpace5.B1], {color:'blue'});
nameSpace5.M3=nameSpace5.board.create('segment',[nameSpace5.C, nameSpace5.C1], {color:'blue'});

nameSpace5.O= nameSpace5.board.create('intersection', [nameSpace5.M1, nameSpace5.M2],{name:'O', size:1, color:'blue'});
nameSpace5.A2=nameSpace5.board.create('midpoint',[nameSpace5.A, nameSpace5.O], {size:1, name:"L"});
nameSpace5.B2=nameSpace5.board.create('midpoint',[nameSpace5.B, nameSpace5.O], {size:1, name:"M"});
nameSpace5.C2=nameSpace5.board.create('midpoint',[nameSpace5.C, nameSpace5.O], {size:1, name:"N"});

//var con = brd6.create('conic',[A,B,C,D,E]);
nameSpace5.board.create('conic',[nameSpace5.A1, nameSpace5.B1,nameSpace5.C1,nameSpace5.A2,nameSpace5.B2 ])