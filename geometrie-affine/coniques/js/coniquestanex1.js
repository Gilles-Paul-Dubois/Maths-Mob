var nameSpace11 = {};
nameSpace11.xmin = -5;
nameSpace11.xmax = 5;
nameSpace11.ymin = -5;
nameSpace11.ymax = 5;
nameSpace11.board = JXG.JSXGraph.initBoard('box11', {boundingbox: [nameSpace11.xmin, nameSpace11.ymax, nameSpace11.xmax, nameSpace11.ymin], axis: true});
nameSpace11.sla = nameSpace11.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 2, 3]], {snapWidth: 0.1, withLabel: false});
nameSpace11.slb = nameSpace11.board.create('slider', [[-4, -4], [-2, -4], [1, 1, 3]], {snapWidth: 0.1, withLabel: false});

nameSpace11.R = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    return Math.sqrt(a * a + b * b);
}
nameSpace11.O=nameSpace11.board.create('point',[0,0], {name:'O',size:1, color:'blue', fixed:true});

nameSpace11.K=nameSpace11.board.create('circle',[nameSpace11.O, nameSpace11.R],{strokeColor:'green'});
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

nameSpace11.F1x = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace11.F1y = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace11.F1 = nameSpace11.board.create('point', [nameSpace11.F1x, nameSpace11.F1y], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace11.F2x = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace11.F2y = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace11.F2 = nameSpace11.board.create('point', [nameSpace11.F2x, nameSpace11.F2y], {size: 1, color: 'red', name: 'F2', visible: false});
nameSpace11.grandAxe = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace11.E = nameSpace11.board.create('ellipse', [nameSpace11.F1, nameSpace11.F2, nameSpace11.grandAxe]);
nameSpace11.M = nameSpace11.board.create('glider', [2, 3, nameSpace11.K], {size: 1, name: 'M'});

nameSpace11.getSlopes = function ()
{
    var a = nameSpace11.sla.Value();
    var b = nameSpace11.slb.Value();
    var x0 = nameSpace11.M.X();
    var y0 = nameSpace11.M.Y();
    return solveQuad((a * a - x0 * x0), 2 * x0 * y0, (b * b - y0 * y0));
}

nameSpace11.calqs = function ()
{
    var p1 = nameSpace11.slopes[0];
    var p2 = nameSpace11.slopes[1];
    var x0 = nameSpace11.M.X();
    var y0 = nameSpace11.M.Y();
    var q1 = y0 - p1 * x0;
    var q2 = y0 - p2 * x0;
    return [q1, q2];

}

nameSpace11.N1x = function ()
{

    var x0 = nameSpace11.M.X();
    return x0 + 1;
}

nameSpace11.N1y = function ()
{
    var x0 = nameSpace11.M.X();
    nameSpace11.slopes = nameSpace11.getSlopes();
    nameSpace11.qs = nameSpace11.calqs();
    var p1 = nameSpace11.slopes[0];
    var q1 = nameSpace11.qs[0];
    return p1 * (x0 + 1) + q1;
}

nameSpace11.N2x = function ()
{

    var x0 = nameSpace11.M.X();
    return x0 + 1;
}

nameSpace11.N2y = function ()
{
    var x0 = nameSpace11.M.X();
    nameSpace11.slopes = nameSpace11.getSlopes();
    nameSpace11.qs = nameSpace11.calqs();
    var p2 = nameSpace11.slopes[1];
    var q2 = nameSpace11.qs[1];
    return p2 * (x0 + 1) + q2;
}

nameSpace11.N1 = nameSpace11.board.create('point', [nameSpace11.N1x, nameSpace11.N1y], {visible: false, size: 1});
nameSpace11.T1 = nameSpace11.board.create('line', [nameSpace11.M, nameSpace11.N1], {color: 'red'});

nameSpace11.N2 = nameSpace11.board.create('point', [nameSpace11.N2x, nameSpace11.N2y], {visible: false, size: 1});
nameSpace11.T2 = nameSpace11.board.create('line', [nameSpace11.M, nameSpace11.N2], {color: 'red'});


nameSpace11.txt1 = function ()
{
    return "a=" + nameSpace11.sla.Value().toFixed(2);
}
nameSpace11.board.create('text', [-1, -3.5, nameSpace11.txt1]);

nameSpace11.txt2 = function ()
{
    return "b=" + nameSpace11.slb.Value().toFixed(2);
}
nameSpace11.board.create('text', [-1, -4, nameSpace11.txt2]);