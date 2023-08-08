var nameSpace4 = {};
nameSpace4.xmin = -10;
nameSpace4.xmax = 10;
nameSpace4.ymin = -10;
nameSpace4.ymax = 10;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false});
nameSpace4.slR = nameSpace4.board.create('slider', [[-9, -8.5], [-5, -8.5], [3, 4, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace4.txt1 = function ()
{
    return "R=" + nameSpace4.slR.Value().toFixed(2);
}
nameSpace4.board.create('text', [-4, -8.5, nameSpace4.txt1]);
nameSpace4.O=nameSpace4.board.create('point',[0,0], {fixed:true, size:1, name:'O'});
nameSpace4.K1=nameSpace4.board.create('circle', [nameSpace4.O, function(){return nameSpace4.slR.Value();}]);
nameSpace4.A=nameSpace4.board.create('point',[5,5], {size:1});
nameSpace4.OA=nameSpace4.board.create('segment',[nameSpace4.O, nameSpace4.A]);
nameSpace4.D=nameSpace4.board.create('line',[nameSpace4.O, nameSpace4.A]);
nameSpace4.I=nameSpace4.board.create('midpoint', [nameSpace4.OA], {size:1, name:'I'});
nameSpace4.K2=nameSpace4.board.create('circle',[nameSpace4.I,nameSpace4.O]);
nameSpace4.C0=nameSpace4.board.create('intersection',[nameSpace4.K1,nameSpace4.K2,0], {size:1, name:"C"});
nameSpace4.C1=nameSpace4.board.create('intersection',[nameSpace4.K1,nameSpace4.K2,1], {size:1, name:"C'"});
nameSpace4.P=nameSpace4.board.create('line',[nameSpace4.C0, nameSpace4.C1], {color:'red'});
nameSpace4.T1=nameSpace4.board.create('line',[nameSpace4.A, nameSpace4.C0], {color:'brown'});
nameSpace4.T2=nameSpace4.board.create('line',[nameSpace4.A, nameSpace4.C1], {color:'brown'});

nameSpace4.B=nameSpace4.board.create('point',[7,-5], {size:1});
nameSpace4.OB=nameSpace4.board.create('segment',[nameSpace4.O, nameSpace4.B]);
nameSpace4.E=nameSpace4.board.create('line',[nameSpace4.O, nameSpace4.B]);
nameSpace4.J=nameSpace4.board.create('midpoint', [nameSpace4.OB], {size:1, name:'J'});
nameSpace4.K3=nameSpace4.board.create('circle',[nameSpace4.J,nameSpace4.O]);
nameSpace4.D0=nameSpace4.board.create('intersection',[nameSpace4.K1,nameSpace4.K3,0], {size:1, name:"D"});
nameSpace4.D1=nameSpace4.board.create('intersection',[nameSpace4.K1,nameSpace4.K3,1], {size:1, name:"D'"});
nameSpace4.P2=nameSpace4.board.create('line',[nameSpace4.D0, nameSpace4.D1], {color:'red'});
nameSpace4.S1=nameSpace4.board.create('line',[nameSpace4.B, nameSpace4.D0], {color:'brown'});
nameSpace4.S2=nameSpace4.board.create('line',[nameSpace4.B, nameSpace4.D1], {color:'brown'});

nameSpace4.Delta=nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {color:'green'});
nameSpace4.Pole =nameSpace4.board.create('intersection', [nameSpace4.P, nameSpace4.P2], {color:'green', name:'P'});
nameSpace4.Axe=nameSpace4.board.create('line', [nameSpace4.O, nameSpace4.Pole], {color:'green'});
