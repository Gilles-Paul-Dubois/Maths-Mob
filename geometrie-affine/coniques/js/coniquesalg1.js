var nameSpace1 = {};
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.sla = nameSpace1.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1});
nameSpace1.slb = nameSpace1.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1});
nameSpace1.F1x = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace1.F1y = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace1.F1 = nameSpace1.board.create('point', [nameSpace1.F1x, nameSpace1.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace1.F2x = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace1.F2y = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace1.F2 = nameSpace1.board.create('point', [nameSpace1.F2x, nameSpace1.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace1.grandAxe = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace1.E = nameSpace1.board.create('ellipse', [nameSpace1.F1, nameSpace1.F2, nameSpace1.grandAxe]);

nameSpace1.txt1 = function ()
{
    return "a=" + nameSpace1.sla.Value().toFixed(2);
}
nameSpace1.board.create('text', [-1, -3.5, nameSpace1.txt1]);

nameSpace1.txt2 = function ()
{
    return "b=" + nameSpace1.slb.Value().toFixed(2);
}
nameSpace1.board.create('text', [-1, -4, nameSpace1.txt2]);