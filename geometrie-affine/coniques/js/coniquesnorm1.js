var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -1;
nameSpace1.ymax = 19;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.slp = nameSpace1.board.create('slider', [[-9, 18], [-5, 18], [0.1, 1, 4]], {snapWidth: 0.1, withLabel: false});

nameSpace1.F = nameSpace1.board.create('point', [0, function () {
        return nameSpace1.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace1.A = nameSpace1.board.create('point', [-1, function () {
        return -nameSpace1.slp.Value()/2;
    }], {visible: false});
nameSpace1.B = nameSpace1.board.create('point', [+1, function () {
        return -nameSpace1.slp.Value()/2;
    }], {visible: false});
nameSpace1.D = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {visible: false});
nameSpace1.P = nameSpace1.board.create('parabola', [nameSpace1.F, nameSpace1.D]);
nameSpace1.M=nameSpace1.board.create('glider', [nameSpace1.P], {size:1, name:'M'});
nameSpace1.T=nameSpace1.board.create('tangent',[nameSpace1.M], {color:'red'});
nameSpace1.N=nameSpace1.board.create('normal',[nameSpace1.P, nameSpace1.M], {color:'red'});
nameSpace1.txt1 = function ()
{
    return "p=" + nameSpace1.slp.Value().toFixed(2);
}
nameSpace1.board.create('text', [1, 18, nameSpace1.txt1]);



