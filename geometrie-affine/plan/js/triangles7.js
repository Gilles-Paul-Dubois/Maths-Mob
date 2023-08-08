/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace7 = {};
nameSpace7.xmin = -5;
nameSpace7.xmax = 5;
nameSpace7.ymin = -5;
nameSpace7.ymax = 5;
nameSpace7.board = JXG.JSXGraph.initBoard('box7', {boundingbox: [nameSpace7.xmin, nameSpace7.ymax, nameSpace7.xmax, nameSpace7.ymin], axis: false});

nameSpace7.A = nameSpace7.board.create('point', [3.5, -1.3], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace7.B = nameSpace7.board.create('point', [-0.6, 3], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace7.C = nameSpace7.board.create('point', [-4, -3.5], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace7.AB = nameSpace7.board.create('line', [nameSpace7.A, nameSpace7.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace7.AC = nameSpace7.board.create('line', [nameSpace7.A, nameSpace7.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace7.CB = nameSpace7.board.create('line', [nameSpace7.C, nameSpace7.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});

nameSpace7.H1 = nameSpace7.board.create('normal', [nameSpace7.AB, nameSpace7.C]);
nameSpace7.H2 = nameSpace7.board.create('normal', [nameSpace7.AC, nameSpace7.B]);
nameSpace7.H3 = nameSpace7.board.create('normal', [nameSpace7.CB, nameSpace7.A]);
nameSpace7.H=nameSpace7.board.create('intersection',[nameSpace7.H1, nameSpace7.H2], {name:'H', size:1, color:'blue'});

nameSpace7.G1 = nameSpace7.board.create('midpoint', [nameSpace7.A, nameSpace7.B], {fixed: true, color: 'blue', size: 1, name: "C'", withLabel: true});
nameSpace7.G2 = nameSpace7.board.create('midpoint', [nameSpace7.A, nameSpace7.C], {fixed: true, color: 'blue', size: 1, name: "B'", withLabel: true});
nameSpace7.G3 = nameSpace7.board.create('midpoint', [nameSpace7.C, nameSpace7.B], {fixed: true, color: 'blue', size: 1, name: "A'", withLabel: true});

nameSpace7.G1G2=nameSpace7.board.create('segment', [nameSpace7.G1,nameSpace7.G2], {visible:false});
nameSpace7.G1G3=nameSpace7.board.create('segment', [nameSpace7.G1,nameSpace7.G3], {visible:false});
nameSpace7.G2G3=nameSpace7.board.create('segment', [nameSpace7.G2,nameSpace7.G3], {visible:false});
nameSpace7.M1=nameSpace7.board.create('midpoint',[nameSpace7.G1G2],{visible:false});
nameSpace7.P1=nameSpace7.board.create( 'normal', [nameSpace7.G1G2,nameSpace7.M1],{visible:false});
nameSpace7.M2=nameSpace7.board.create('midpoint',[nameSpace7.G1G3],{visible:false});
nameSpace7.P2=nameSpace7.board.create( 'normal', [nameSpace7.G1G3,nameSpace7.M2],{visible:false});
nameSpace7.W=nameSpace7.board.create('intersection',[nameSpace7.P1, nameSpace7.P2], {size:1, name:'&Omega;'});

nameSpace7.K=nameSpace7.board.create('circle', [nameSpace7.W, nameSpace7.G1]);
nameSpace7.board.create('intersection',[nameSpace7.H1, nameSpace7.AB], {size:1, color:'blue', withLabel:false});
nameSpace7.board.create('intersection',[nameSpace7.H2, nameSpace7.AC], {size:1, color:'blue', withLabel:false});
nameSpace7.board.create('intersection',[nameSpace7.H3, nameSpace7.CB], {size:1, color:'blue', withLabel:false})
nameSpace7.AH=nameSpace7.board.create('segment',[nameSpace7.A, nameSpace7.H], {visible:false});
nameSpace7.BH=nameSpace7.board.create('segment',[nameSpace7.B, nameSpace7.H], {visible:false});
nameSpace7.CH=nameSpace7.board.create('segment',[nameSpace7.C, nameSpace7.H], {visible:false});


nameSpace7.board.create('intersection', [nameSpace7.AH,nameSpace7.K,1], {withLabel:false, size:1, color:'blue'});
nameSpace7.board.create('intersection', [nameSpace7.BH,nameSpace7.K,1], {withLabel:false, size:1, color:'blue'});
nameSpace7.board.create('intersection', [nameSpace7.CH,nameSpace7.K,1], {withLabel:false, size:1, color:'blue'});