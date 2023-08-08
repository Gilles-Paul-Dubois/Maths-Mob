var nameSpace13 = {};
nameSpace13.xmin = -10;
nameSpace13.xmax = 10;
nameSpace13.ymin = -3;
nameSpace13.ymax = 17;
nameSpace13.board = JXG.JSXGraph.initBoard('box13', {boundingbox: [nameSpace13.xmin, nameSpace13.ymax, nameSpace13.xmax, nameSpace13.ymin], axis: true});
nameSpace13.slp = nameSpace13.board.create('slider', [[-9, 16], [-5, 16], [0.1, 1, 4]], {snapWidth: 0.1});
function solveQuad(a, b, c)
{
    var delta = b * b - 4 * a * c;
    if (a == 0)
        return [];
    if (delta < 0)
        return [];
    else if (delta == 0)
        return [(-b / (2 * a))];
    else
        return [(-b - Math.sqrt(delta)) / (2 * a), (-b + Math.sqrt(delta)) / (2 * a)]
}
nameSpace13.F = nameSpace13.board.create('point', [0, function () {
        return nameSpace13.slp.Value() / 2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace13.A = nameSpace13.board.create('point', [-1, function () {
        return -nameSpace13.slp.Value() / 2;
    }], {visible: false});
nameSpace13.B = nameSpace13.board.create('point', [+1, function () {
        return -nameSpace13.slp.Value() / 2;
    }], {visible: false});
nameSpace13.D = nameSpace13.board.create('line', [nameSpace13.A, nameSpace13.B], {visible: false});
nameSpace13.P = nameSpace13.board.create('parabola', [nameSpace13.F, nameSpace13.D]);
nameSpace13.M1 = nameSpace13.board.create('glider', [nameSpace13.P], {size: 1, name: 'M<sub>1</sub>'});
nameSpace13.T = nameSpace13.board.create('tangent', [nameSpace13.M1], {color: 'red'});
nameSpace13.txt1 = function ()
{
    return "p=" + nameSpace13.slp.Value().toFixed(2);
}
nameSpace13.board.create('text', [1, 18, nameSpace13.txt1]);

nameSpace13.M = nameSpace13.board.create('point', [5, 5], {size: 1, name: 'M<sub>0</sub>'});

nameSpace13.getSlopes = function ()
{
    var p = nameSpace13.slp.Value();
    var x0 = nameSpace13.M.X();
    var y0 = nameSpace13.M.Y();
    return solveQuad(p, -2 * x0, 2 * y0);
}
nameSpace13.calqs = function ()
{
    var p1 = nameSpace13.slopes[0];
    var p2 = nameSpace13.slopes[1];
    var x0 = nameSpace13.M.X();
    var y0 = nameSpace13.M.Y();
    var q1 = y0 - p1 * x0;
    var q2 = y0 - p2 * x0;
    return [q1, q2];
}

nameSpace13.N1x = function ()
{

    var x0 = nameSpace13.M.X();
    return x0 + 1;
}

nameSpace13.N1y = function ()
{
    var x0 = nameSpace13.M.X();
    nameSpace13.slopes = nameSpace13.getSlopes();
    nameSpace13.qs = nameSpace13.calqs();
    var p1 = nameSpace13.slopes[0];
    var q1 = nameSpace13.qs[0];
    return p1 * (x0 + 1) + q1;
}

nameSpace13.N2x = function ()
{

    var x0 = nameSpace13.M.X();
    return x0 + 1;
}

nameSpace13.N2y = function ()
{
    var x0 = nameSpace13.M.X();
    nameSpace13.slopes = nameSpace13.getSlopes();
    nameSpace13.qs = nameSpace13.calqs();
    var p2 = nameSpace13.slopes[1];
    var q2 = nameSpace13.qs[1];
    return p2 * (x0 + 1) + q2;
}

nameSpace13.N1 = nameSpace13.board.create('point', [nameSpace13.N1x, nameSpace13.N1y], {visible: false, size: 1});
nameSpace13.T1 = nameSpace13.board.create('line', [nameSpace13.M, nameSpace13.N1], {color: 'red'});

nameSpace13.N2 = nameSpace13.board.create('point', [nameSpace13.N2x, nameSpace13.N2y], {visible: false, size: 1});
nameSpace13.T2 = nameSpace13.board.create('line', [nameSpace13.M, nameSpace13.N2], {color: 'red'});





