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

nameSpace4.A = nameSpace4.board.create('point', [3.4, 0.7], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace4.B = nameSpace4.board.create('point', [-0.7, 3.6], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace4.C = nameSpace4.board.create('point', [-3.5, -3.65], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace4.AB = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {color: 'green', name: 'AB', withLabel: false});
nameSpace4.AC = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.C], {color: 'green', name: 'AB', withLabel: false});
nameSpace4.CB = nameSpace4.board.create('line', [nameSpace4.C, nameSpace4.B], {color: 'green', name: 'AB', withLabel: false});

nameSpace4.N1 = nameSpace4.board.create('normal', [nameSpace4.AB, nameSpace4.C]);
nameSpace4.N2 = nameSpace4.board.create('normal', [nameSpace4.AC, nameSpace4.B]);
nameSpace4.N3 = nameSpace4.board.create('normal', [nameSpace4.CB, nameSpace4.A]);
nameSpace4.H = nameSpace4.board.create('intersection', [nameSpace4.N1, nameSpace4.N2], {name: 'H', size: 1, color: 'blue'});

nameSpace4.K1=nameSpace4.board.create('circumcircle',[nameSpace4.A, nameSpace4.B, nameSpace4.C], {strokeColor:'red'});

nameSpace4.I1=nameSpace4.board.create('midpoint',[nameSpace4.B, nameSpace4.C], {size:1, name:'I<sub>1</sub>', color:'blue'});
nameSpace4.I2=nameSpace4.board.create('midpoint',[nameSpace4.A, nameSpace4.C], {size:1, name:'I<sub>2</sub>', color:'blue'});
nameSpace4.I3=nameSpace4.board.create('midpoint',[nameSpace4.B, nameSpace4.A], {size:1, name:'I<sub>3</sub>', color:'blue'});

nameSpace4.K2=nameSpace4.board.create('circumcircle',[nameSpace4.I1, nameSpace4.I2, nameSpace4.I3], {strokeColor:'blue'});

nameSpace4.K1=nameSpace4.board.create('reflection',[nameSpace4.H,nameSpace4.CB],{name:'K<sub>1</sub>', size:1, color:'blue'});
nameSpace4.K2=nameSpace4.board.create('reflection',[nameSpace4.H,nameSpace4.AC],{name:'K<sub>2</sub>', size:1, color:'blue'});
nameSpace4.K3=nameSpace4.board.create('reflection',[nameSpace4.H,nameSpace4.AB],{name:'K<sub>3</sub>', size:1, color:'blue'});

//board.create('mirrorpoint',[pointToReflectAbout,pointToBeReflected]); 

nameSpace4.AI1=nameSpace4.board.create('segment', [nameSpace4.A, nameSpace4.I1], {color:'green', size:0.5});
nameSpace4.BI2=nameSpace4.board.create('segment', [nameSpace4.B, nameSpace4.I2], {color:'green'});
nameSpace4.CI3=nameSpace4.board.create('segment', [nameSpace4.C, nameSpace4.I3], {color:'green'});
nameSpace4.G=nameSpace4.board.create('intersection', [nameSpace4.AI1,nameSpace4.BI2], {color:'green', name:'G', size:1});

nameSpace4.P1=nameSpace4.board.create('perpendicular',[nameSpace4.I1, nameSpace4.CB], {visible:false});
nameSpace4.P2=nameSpace4.board.create('perpendicular',[nameSpace4.I2, nameSpace4.AC], {visible:false});
nameSpace4.Omega=nameSpace4.board.create('intersection',[nameSpace4.P1, nameSpace4.P2], {name:'&Omega;', size:1, color:'red'});

nameSpace4.A1=nameSpace4.board.create('mirrorpoint',[nameSpace4.Omega, nameSpace4.A],{name:"A<sub>1</sub>", size:1});

nameSpace4.AA1=nameSpace4.board.create('segment',[nameSpace4.A, nameSpace4.A1], {dash:1});
nameSpace4.HA1=nameSpace4.board.create('segment',[nameSpace4.H, nameSpace4.A1], {dash:1});

nameSpace4.Steiner = nameSpace4.board.create('line', [nameSpace4.Omega, nameSpace4.G], {color: 'red',  withLabel: false});
