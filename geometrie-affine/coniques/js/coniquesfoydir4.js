var nameSpace4 = {};
nameSpace4.xmin = -5;
nameSpace4.xmax = 5;
nameSpace4.ymin = -5;
nameSpace4.ymax = 5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.sla = nameSpace4.board.create('slider', [[-4, -3], [-2, -3], [3, 4, 5]], {snapWidth: 0.1});
nameSpace4.slb = nameSpace4.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 3]], {snapWidth: 0.1});
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

nameSpace4.F1 = nameSpace4.board.create('point', [nameSpace4.F1x, nameSpace4.F1y], {size: 1, color: 'red', name: 'F', visible: true});
nameSpace4.M = nameSpace4.board.create('point', [nameSpace4.F1x, 1], {size: 1, color: 'red', name: 'M', visible: false});
nameSpace4.F1M = nameSpace4.board.create('line', [nameSpace4.F1, nameSpace4.M]);
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

nameSpace4.F2 = nameSpace4.board.create('point', [nameSpace4.F2x, nameSpace4.F2y], {size: 1, color: 'red', name: "F'", visible: true});
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
nameSpace4.Ax = function ()
{
    return nameSpace4.F1.X();
}

nameSpace4.Ay = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    var c2 = a * a - b * b;
    return b * Math.sqrt(1 - c2 / (a * a));
}
nameSpace4.A=nameSpace4.board.create('point', [nameSpace4.Ax, nameSpace4.Ay], {size: 1, name: 'A'});

nameSpace4.Bx = function ()
{
    return nameSpace4.F1.X();
}

nameSpace4.By = function ()
{
    var a = nameSpace4.sla.Value();
    var b = nameSpace4.slb.Value();
    var c2 = a * a - b * b;
    return -b * Math.sqrt(1 - c2 / (a * a));
}
nameSpace4.B=nameSpace4.board.create('point', [nameSpace4.Bx, nameSpace4.By], {size: 1, name: 'B'});
nameSpace4.AB=nameSpace4.board.create('segment',[nameSpace4.A, nameSpace4.B]);
nameSpace4.txt1 = function ()
{
    return "a";
}
nameSpace4.board.create('text', [-1, -3, nameSpace4.txt1]);

nameSpace4.txt2 = function ()
{
    return "b" ;
}
nameSpace4.board.create('text', [-1, -4, nameSpace4.txt2]);

nameSpace4.txt3=function ()
{
    return "AB=2p=2b<sup>2</sup>/a="+nameSpace4.AB.L().toFixed(2);
}
nameSpace4.board.create('text', [1, -4, nameSpace4.txt3]);