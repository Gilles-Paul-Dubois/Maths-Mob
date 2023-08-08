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

nameSpace5.A = nameSpace5.board.create('point', [2.3, 0.4], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace5.B = nameSpace5.board.create('point', [0, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace5.C = nameSpace5.board.create('point', [-1, -0.4], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace5.AB = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace5.AC = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.C], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace5.CB = nameSpace5.board.create('line', [nameSpace5.C, nameSpace5.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace5.BAS=nameSpace5.board.create('bisectorlines',[nameSpace5.AB, nameSpace5.AC]);
nameSpace5.BBS=nameSpace5.board.create('bisectorlines',[nameSpace5.AB, nameSpace5.CB]);
nameSpace5.BCS=nameSpace5.board.create('bisectorlines',[nameSpace5.CB, nameSpace5.AC]);
nameSpace5.BAS0=nameSpace5.BAS.line2;
nameSpace5.BAS1=nameSpace5.BAS.line1;
nameSpace5.BBS0=nameSpace5.BBS.line2;
nameSpace5.BBS1=nameSpace5.BBS.line1;
nameSpace5.I=nameSpace5.board.create('intersection',[nameSpace5.BAS0,nameSpace5.BBS0], {name:'I', size:1, color:'blue'});
nameSpace5.H=nameSpace5.board.create('perpendicularpoint',[nameSpace5.AB, nameSpace5.I], {visible:false});
nameSpace5.K=nameSpace5.board.create('circle', [nameSpace5.I, nameSpace5.H], {strokeSize:1}); 

nameSpace5.I1=nameSpace5.board.create('intersection',[nameSpace5.BAS0,nameSpace5.BBS1], {name:'I<sub>1</sub>', size:1, color:'blue'});
nameSpace5.H1=nameSpace5.board.create('perpendicularpoint',[nameSpace5.AB, nameSpace5.I1], {visible:false});
nameSpace5.K1=nameSpace5.board.create('circle', [nameSpace5.I1, nameSpace5.H1], {strokeSize:1}); 

nameSpace5.I2=nameSpace5.board.create('intersection',[nameSpace5.BAS1,nameSpace5.BBS0], {name:'I<sub>2</sub>', size:1, color:'blue'});
nameSpace5.H2=nameSpace5.board.create('perpendicularpoint',[nameSpace5.AB, nameSpace5.I2], {visible:false});
nameSpace5.K2=nameSpace5.board.create('circle', [nameSpace5.I2, nameSpace5.H2], {strokeSize:1}); 

nameSpace5.I3=nameSpace5.board.create('intersection',[nameSpace5.BAS1,nameSpace5.BBS1], {name:'I<sub>3</sub>', size:1, color:'blue'});
nameSpace5.H3=nameSpace5.board.create('perpendicularpoint',[nameSpace5.AB, nameSpace5.I3], {visible:false});
nameSpace5.K3=nameSpace5.board.create('circle', [nameSpace5.I3, nameSpace5.H3], {strokeSize:1}); 