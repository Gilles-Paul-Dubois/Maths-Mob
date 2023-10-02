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

nameSpace3.A = nameSpace3.board.create('point', [3.4, 0.7], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace3.B = nameSpace3.board.create('point', [-0.7, 3.6], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace3.C = nameSpace3.board.create('point', [-3.5, -3.65], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace3.AB = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.B], {color: 'green', name: 'AB', withLabel: false});
nameSpace3.AC = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.C], {color: 'green', name: 'AB', withLabel: false});
nameSpace3.CB = nameSpace3.board.create('line', [nameSpace3.C, nameSpace3.B], {color: 'green', name: 'AB', withLabel: false});

nameSpace3.N1 = nameSpace3.board.create('normal', [nameSpace3.AB, nameSpace3.C]);
nameSpace3.N2 = nameSpace3.board.create('normal', [nameSpace3.AC, nameSpace3.B]);
nameSpace3.N3 = nameSpace3.board.create('normal', [nameSpace3.CB, nameSpace3.A]);
nameSpace3.H = nameSpace3.board.create('intersection', [nameSpace3.N1, nameSpace3.N2], {name: 'H', size: 1, color: 'blue'});

nameSpace3.K1=nameSpace3.board.create('circumcircle',[nameSpace3.A, nameSpace3.B, nameSpace3.C], {strokeColor:'red'});

nameSpace3.I1=nameSpace3.board.create('midpoint',[nameSpace3.B, nameSpace3.C], {size:1, name:'I<sub>1</sub>', color:'blue'});
nameSpace3.I2=nameSpace3.board.create('midpoint',[nameSpace3.A, nameSpace3.C], {size:1, name:'I<sub>2</sub>', color:'blue'});
nameSpace3.I3=nameSpace3.board.create('midpoint',[nameSpace3.B, nameSpace3.A], {size:1, name:'I<sub>3</sub>', color:'blue'});

nameSpace3.K2=nameSpace3.board.create('circumcircle',[nameSpace3.I1, nameSpace3.I2, nameSpace3.I3], {strokeColor:'blue'});

nameSpace3.K1=nameSpace3.board.create('reflection',[nameSpace3.H,nameSpace3.CB],{name:'K<sub>1</sub>', size:1, color:'blue'});
nameSpace3.K2=nameSpace3.board.create('reflection',[nameSpace3.H,nameSpace3.AC],{name:'K<sub>2</sub>', size:1, color:'blue'});
nameSpace3.K3=nameSpace3.board.create('reflection',[nameSpace3.H,nameSpace3.AB],{name:'K<sub>3</sub>', size:1, color:'blue'});

//board.create('mirrorpoint',[pointToReflectAbout,pointToBeReflected]); 

nameSpace3.AI1=nameSpace3.board.create('segment', [nameSpace3.A, nameSpace3.I1], {color:'green', size:0.5});
nameSpace3.BI2=nameSpace3.board.create('segment', [nameSpace3.B, nameSpace3.I2], {color:'green'});
nameSpace3.CI3=nameSpace3.board.create('segment', [nameSpace3.C, nameSpace3.I3], {color:'green'});
nameSpace3.G=nameSpace3.board.create('intersection', [nameSpace3.AI1,nameSpace3.BI2], {color:'green', name:'G', size:1});

nameSpace3.P1=nameSpace3.board.create('perpendicular',[nameSpace3.I1, nameSpace3.CB], {visible:false});
nameSpace3.P2=nameSpace3.board.create('perpendicular',[nameSpace3.I2, nameSpace3.AC], {visible:false});
nameSpace3.Omega=nameSpace3.board.create('intersection',[nameSpace3.P1, nameSpace3.P2], {name:'&Omega;', size:1, color:'red'});

nameSpace3.A1=nameSpace3.board.create('mirrorpoint',[nameSpace3.Omega, nameSpace3.A],{name:"A<sub>1</sub>", size:1});

nameSpace3.AA1=nameSpace3.board.create('segment',[nameSpace3.A, nameSpace3.A1], {dash:1});
nameSpace3.HA1=nameSpace3.board.create('segment',[nameSpace3.H, nameSpace3.A1], {dash:1});

nameSpace3.Steiner = nameSpace3.board.create('line', [nameSpace3.Omega, nameSpace3.G], {color: 'red',  withLabel: false});
