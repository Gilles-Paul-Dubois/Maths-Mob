var nameSpace3 = {};
nameSpace3.xmin = -10;
nameSpace3.xmax = 10;
nameSpace3.ymin = -1;
nameSpace3.ymax = 19;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.slp = nameSpace3.board.create('slider', [[-9, 18], [-5, 18], [0.1, 1, 4]], {snapWidth: 0.1});

nameSpace3.F = nameSpace3.board.create('point', [0, function () {
        return nameSpace3.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace3.A = nameSpace3.board.create('point', [-1, function () {
        return -nameSpace3.slp.Value()/2;
    }], {visible: false});
nameSpace3.B = nameSpace3.board.create('point', [+1, function () {
        return -nameSpace3.slp.Value()/2;
    }], {visible: false});
nameSpace3.D = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.B], {visible: false});
nameSpace3.P = nameSpace3.board.create('parabola', [nameSpace3.F, nameSpace3.D]);

nameSpace3.txt1 = function ()
{
    return "p=" + nameSpace3.slp.Value().toFixed(2);
}
nameSpace3.board.create('text', [1, 18, nameSpace3.txt1]);

