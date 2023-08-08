var nameSpace6 = {};
nameSpace6.xmin = -10;
nameSpace6.xmax = 10;
nameSpace6.ymin = -1;
nameSpace6.ymax = 19;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: true});
nameSpace6.slp = nameSpace6.board.create('slider', [[-9, 18], [-5, 18], [0.1, 1, 4]], {snapWidth: 0.1});

nameSpace6.F = nameSpace6.board.create('point', [0, function () {
        return nameSpace6.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace6.A = nameSpace6.board.create('point', [-1, function () {
        return -nameSpace6.slp.Value()/2;
    }], {visible: false});
nameSpace6.B = nameSpace6.board.create('point', [+1, function () {
        return -nameSpace6.slp.Value()/2;
    }], {visible: false});
nameSpace6.D = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.B], {visible: false});
nameSpace6.P = nameSpace6.board.create('parabola', [nameSpace6.F, nameSpace6.D]);
nameSpace6.M=nameSpace6.board.create('glider', [nameSpace6.P], {size:1, name:'M'});
nameSpace6.T=nameSpace6.board.create('tangent',[nameSpace6.M], {color:'red'});
nameSpace6.txt1 = function ()
{
    return "p=" + nameSpace6.slp.Value().toFixed(2);
}
nameSpace6.board.create('text', [1, 18, nameSpace6.txt1]);

