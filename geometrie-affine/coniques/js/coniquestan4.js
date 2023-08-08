var nameSpace4 = {};
nameSpace4.xmin = -5;
nameSpace4.xmax = 5;
nameSpace4.ymin = -5;
nameSpace4.ymax = 5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.sla = nameSpace4.board.create('slider', [[-4, -3], [-2, -3], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace4.slb = nameSpace4.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace4.F1x = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace4.F1y = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace4.F1 = nameSpace4.board.create('point', [nameSpace4.F1x, nameSpace4.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace4.F2x = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace4.F2y = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace4.F2 = nameSpace4.board.create('point', [nameSpace4.F2x, nameSpace4.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace4.grandAxe = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace4.E = nameSpace4.board.create('ellipse', [nameSpace4.F1, nameSpace4.F2, nameSpace4.grandAxe]);
nameSpace4.M=nameSpace4.board.create('glider',[nameSpace4.E], {size:1});
nameSpace4.T=nameSpace4.board.create('tangent',[nameSpace4.M],{color:'red'});
nameSpace4.txt1 = function ()
{
    return "a=" + nameSpace4.sla.Value().toFixed(2);
}
nameSpace4.board.create('text', [-1, -3, nameSpace4.txt1]);

nameSpace4.txt2 = function ()
{
    return "b=" + nameSpace4.slb.Value().toFixed(2);
}
nameSpace4.board.create('text', [-1, -4, nameSpace4.txt2]);