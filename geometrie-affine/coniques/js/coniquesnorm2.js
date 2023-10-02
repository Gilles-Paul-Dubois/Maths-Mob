var nameSpace2 = {};
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.sla = nameSpace2.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace2.slb = nameSpace2.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace2.F1x = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace2.F1y = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace2.F1 = nameSpace2.board.create('point', [nameSpace2.F1x, nameSpace2.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace2.F2x = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace2.F2y = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace2.F2 = nameSpace2.board.create('point', [nameSpace2.F2x, nameSpace2.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace2.grandAxe = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace2.E = nameSpace2.board.create('ellipse', [nameSpace2.F1, nameSpace2.F2, nameSpace2.grandAxe]);
nameSpace2.M=nameSpace2.board.create('glider',[nameSpace2.E], {size:1, name:'M'});
nameSpace2.T=nameSpace2.board.create('tangent',[nameSpace2.M],{color:'red'});
nameSpace2.N=nameSpace2.board.create('normal',[nameSpace2.E,nameSpace2.M],{color:'red'});
nameSpace2.txt1 = function ()
{
    return "a=" + nameSpace2.sla.Value().toFixed(2);
}
nameSpace2.board.create('text', [-1, -3.5, nameSpace2.txt1]);

nameSpace2.txt2 = function ()
{
    return "b=" + nameSpace2.slb.Value().toFixed(2);
}
nameSpace2.board.create('text', [-1, -4, nameSpace2.txt2]);
