var nameSpace5 = {};
nameSpace5.xmin = -5;
nameSpace5.xmax = 5;
nameSpace5.ymin = -5;
nameSpace5.ymax = 5;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.sla = nameSpace5.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace5.slb = nameSpace5.board.create('slider', [[-4, -4], [-2, -4], [1, 1.4, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace5.F1x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace5.F1y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace5.F1 = nameSpace5.board.create('point', [nameSpace5.F1x, nameSpace5.F1y], {size: 1, color: 'blue', name: 'F', visible: true});

nameSpace5.F2x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace5.F2y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace5.F2 = nameSpace5.board.create('point', [nameSpace5.F2x, nameSpace5.F2y], {size: 1, color: 'blue', name: "F'", visible: true});
nameSpace5.grandAxe = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace5.E = nameSpace5.board.create('ellipse', [nameSpace5.F1, nameSpace5.F2, nameSpace5.grandAxe], {strokeColor: 'red'});
nameSpace5.M = nameSpace5.board.create('glider', [2.08, 1.44, nameSpace5.E], {size: 1, name: 'M'});
nameSpace5.N = nameSpace5.board.create('normal', [nameSpace5.E, nameSpace5.M], {color: 'red', name: '', withLabel: true});
nameSpace5.F1F2 = nameSpace5.board.create('line', [nameSpace5.F1, nameSpace5.F2], {visible: false});
nameSpace5.C1 = nameSpace5.board.create('intersection', [nameSpace5.F1F2, nameSpace5.N], {size: 1, name: 'C', color: 'blue'});
nameSpace5.Oy = nameSpace5.board.create('perpendicular', [[0, 0], nameSpace5.F1F2], {visible: false});
nameSpace5.C2 = nameSpace5.board.create('intersection', [nameSpace5.Oy, nameSpace5.N], {size: 1, name: "C'", color: 'blue'});
nameSpace5.I = nameSpace5.board.create('midpoint', [nameSpace5.C1, nameSpace5.C2], {size: 1, color: 'blue', name: 'N'});
nameSpace5.txt1 = function ()
{
    return "a=" + nameSpace5.sla.Value().toFixed(2);
}
nameSpace5.board.create('text', [-1, -3.5, nameSpace5.txt1]);

nameSpace5.txt2 = function ()
{
    return "b=" + nameSpace5.slb.Value().toFixed(2);
}
nameSpace5.board.create('text', [-1, -4, nameSpace5.txt2]);
nameSpace5.G1y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var A = (a * a - b * b) / (2 * a);
    var B = (b * b - a * a) / (2 * b);
    var C = Math.sqrt(B * B - A * A);
    return C;
}
nameSpace5.G2y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var A = (a * a - b * b) / (2 * a);
    var B = (b * b - a * a) / (2 * b);
    var C = Math.sqrt(B * B - A * A);
    return -C;
}
nameSpace5.G1 = nameSpace5.board.create('point', [0, nameSpace5.G1y], {visible: false});
nameSpace5.G2 = nameSpace5.board.create('point', [0, nameSpace5.G2y], {visible: false});
nameSpace5.ga = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    return ((a * a - b * b) / b);
}

nameSpace5.G = nameSpace5.board.create('ellipse', [nameSpace5.G1, nameSpace5.G2, nameSpace5.ga], {strokeColor: 'blue'});
