var nameSpace5 = {};
nameSpace5.xmin = -10;
nameSpace5.xmax = 10;
nameSpace5.ymin = -1;
nameSpace5.ymax = 19;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.slp = nameSpace5.board.create('slider', [[-9, 18], [-5, 18], [1, 3, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace5.O=nameSpace5.board.create('point', [0,0], {visible:false});
nameSpace5.F = nameSpace5.board.create('point', [0, function () {
        return nameSpace5.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F', visible: true});
nameSpace5.OF=nameSpace5.board.create('line',[nameSpace5.O, nameSpace5.F], {visible:false});
nameSpace5.A = nameSpace5.board.create('point', [-1, function () {
        return -nameSpace5.slp.Value()/2;
    }], {visible: false});
nameSpace5.B = nameSpace5.board.create('point', [+1, function () {
        return -nameSpace5.slp.Value()/2;
    }], {visible: false});
nameSpace5.D = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B], {visible: false});

nameSpace5.P = nameSpace5.board.create('parabola', [nameSpace5.F, nameSpace5.D]);
nameSpace5.M=nameSpace5.board.create('glider', [5,0,nameSpace5.P], {size:1, name:'M'});
nameSpace5.T=nameSpace5.board.create('tangent',[nameSpace5.M], {color:'red'});
nameSpace5.N=nameSpace5.board.create('normal',[nameSpace5.P, nameSpace5.M], {color:'red'});
nameSpace5.Delta = nameSpace5.board.create('perpendicular', [nameSpace5.D, nameSpace5.M], {visible: true, color:'brown'});
nameSpace5.FM=nameSpace5.board.create('line',[nameSpace5.F, nameSpace5.M], {color:'brown'});
nameSpace5.G=nameSpace5.board.create('intersection',[nameSpace5.OF, nameSpace5.N], {size:1,name:'G',visible:false});
nameSpace5.H=nameSpace5.board.create('point',[function(){return nameSpace5.M.X();}, 19], {name:'H',size:1, visible: false});
nameSpace5.alpha1=nameSpace5.board.create('angle', [nameSpace5.G, nameSpace5.M, nameSpace5.F], {name:'&alpha;'});
nameSpace5.alpha2=nameSpace5.board.create('angle', [nameSpace5.H, nameSpace5.M, nameSpace5.G], {name:'&alpha;'});
nameSpace5.txt1 = function ()
{
    return "p=" + nameSpace5.slp.Value().toFixed(2);
}
nameSpace5.board.create('text', [1, 18, nameSpace5.txt1]);



