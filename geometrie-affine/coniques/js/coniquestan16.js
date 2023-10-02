var nameSpace16 = {};
nameSpace16.xmin = -10;
nameSpace16.xmax = 10;
nameSpace16.ymin = -1;
nameSpace16.ymax = 19;
nameSpace16.board = JXG.JSXGraph.initBoard('box16', {boundingbox: [nameSpace16.xmin, nameSpace16.ymax, nameSpace16.xmax, nameSpace16.ymin], axis: true});
nameSpace16.slp = nameSpace16.board.create('slider', [[-9, 18], [-5, 18], [0.1, 1, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace16.slalpĥa = nameSpace16.board.create('slider', [[1, 18], [5, 18], [-10, 0, 10]], {snapWidth: 0.1, withLabel: false});

nameSpace16.F = nameSpace16.board.create('point', [0, function () {
        return nameSpace16.slp.Value() / 2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace16.A = nameSpace16.board.create('point', [-1, function () {
        return -nameSpace16.slp.Value() / 2;
    }], {visible: false});
nameSpace16.B = nameSpace16.board.create('point', [+1, function () {
        return -nameSpace16.slp.Value() / 2;
    }], {visible: false});
nameSpace16.D = nameSpace16.board.create('line', [nameSpace16.A, nameSpace16.B], {visible: false});
nameSpace16.P = nameSpace16.board.create('parabola', [nameSpace16.F, nameSpace16.D]);

nameSpace16.txt1 = function ()
{
    return "p=" + nameSpace16.slp.Value().toFixed(2);
}
nameSpace16.board.create('text', [-4, 18, nameSpace16.txt1]);

nameSpace16.txt2 = function ()
{
    return "&alpha;=" + nameSpace16.slalpĥa.Value().toFixed(2);
}
nameSpace16.board.create('text', [6, 18, nameSpace16.txt2]);
nameSpace16.A1x = function ()
{
    var p = nameSpace16.slp.Value();
    var alpha = nameSpace16.slalpĥa.Value();
    return p * alpha;
}
nameSpace16.A1y = function ()
{
    var p = nameSpace16.slp.Value();
    var alpha = nameSpace16.slalpĥa.Value();
    return p * alpha * alpha / 2;
}
nameSpace16.A1=nameSpace16.board.create('point',[nameSpace16.A1x,nameSpace16.A1y], {visible:false});

nameSpace16.A2x = function ()
{
    var p = nameSpace16.slp.Value();
    var alpha = nameSpace16.slalpĥa.Value();
    return p * alpha+1;
}
nameSpace16.A2y = function ()
{
    var p = nameSpace16.slp.Value();
    var alpha = nameSpace16.slalpĥa.Value();
    return p * alpha * alpha / 2+alpha;
}
nameSpace16.A2=nameSpace16.board.create('point',[nameSpace16.A2x,nameSpace16.A2y], {visible:false});

nameSpace16.T=nameSpace16.board.create('line',[nameSpace16.A1,nameSpace16.A2],{color:'red'});