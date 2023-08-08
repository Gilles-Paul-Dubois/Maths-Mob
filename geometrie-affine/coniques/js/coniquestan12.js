var nameSpace12 = {};
nameSpace12.xmin = -10;
nameSpace12.xmax = 10;
nameSpace12.ymin = -10;
nameSpace12.ymax = 10;
nameSpace12.board = JXG.JSXGraph.initBoard('box12', {boundingbox: [nameSpace12.xmin, nameSpace12.ymax, nameSpace12.xmax, nameSpace12.ymin], axis: true});
nameSpace12.sla = nameSpace12.board.create('slider', [[-9, -7.5], [-5, -7.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace12.slb = nameSpace12.board.create('slider', [[-9, -9], [-5, -9], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});

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
nameSpace12.F1x = function ()
{
    var a = nameSpace12.sla.Value();
    var b = nameSpace12.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace12.F1y = function ()
{
    var a = nameSpace12.sla.Value();
    var b = nameSpace12.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace12.F1 = nameSpace12.board.create('point', [nameSpace12.F1x, nameSpace12.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace12.F2x = function ()
{
    var a = nameSpace12.sla.Value();
    var b = nameSpace12.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace12.F2y = function ()
{
    var a = nameSpace12.sla.Value();
    var b = nameSpace12.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace12.F2 = nameSpace12.board.create('point', [nameSpace12.F2x, nameSpace12.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace12.grandAxe = function ()
{
    var a = nameSpace12.sla.Value();
    var b = nameSpace12.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace12.getSlopes = function ()
{
    var a = nameSpace12.sla.Value();
    var b = nameSpace12.slb.Value();
    var x0 = nameSpace12.M.X();
    var y0 = nameSpace12.M.Y();
    return solveQuad((a * a - x0 * x0), 2 * x0 * y0, (-b * b - y0 * y0));
}

nameSpace12.calqs = function ()
{
    var p1 = nameSpace12.slopes[0];
    var p2 = nameSpace12.slopes[1];
    var x0 = nameSpace12.M.X();
    var y0 = nameSpace12.M.Y();
    var q1 = y0 - p1 * x0;
    var q2 = y0 - p2 * x0;
    return [q1, q2];
}

nameSpace12.M = nameSpace12.board.create('point', [2, 3], {size: 1, name:'M<sub>0</sub>'});

nameSpace12.N1x = function ()
{

    var x0 = nameSpace12.M.X();
    return x0 + 1;
}

nameSpace12.N1y = function ()
{
    var x0 = nameSpace12.M.X();
    nameSpace12.slopes = nameSpace12.getSlopes();
    nameSpace12.qs = nameSpace12.calqs();
    var p1 = nameSpace12.slopes[0];
    var q1 = nameSpace12.qs[0];
    return p1 * (x0 + 1) + q1;
}

nameSpace12.N2x = function ()
{

    var x0 = nameSpace12.M.X();
    return x0 + 1;
}

nameSpace12.N2y = function ()
{
    var x0 = nameSpace12.M.X();
    nameSpace12.slopes = nameSpace12.getSlopes();
    nameSpace12.qs = nameSpace12.calqs();
    var p2 = nameSpace12.slopes[1];
    var q2 = nameSpace12.qs[1];
    return p2 * (x0 + 1) + q2;
}

nameSpace12.N1=nameSpace12.board.create('point', [nameSpace12.N1x, nameSpace12.N1y], {visible:false, size:1});
nameSpace12.T1=nameSpace12.board.create('line',[nameSpace12.M,nameSpace12.N1],{color:'red'});

nameSpace12.N2=nameSpace12.board.create('point', [nameSpace12.N2x, nameSpace12.N2y], {visible:false, size:1});
nameSpace12.T2=nameSpace12.board.create('line',[nameSpace12.M,nameSpace12.N2],{color:'red'});


nameSpace12.H = nameSpace12.board.create('hyperbola', [nameSpace12.F1, nameSpace12.F2, nameSpace12.grandAxe]);
nameSpace12.M1=nameSpace12.board.create('glider', [nameSpace12.H], {size:1, name:'M<sub>1</sub>'});
nameSpace12.T=nameSpace12.board.create('tangent', [nameSpace12.M1], {color:'red'});
nameSpace12.txt1 = function ()
{
    return "a=" + nameSpace12.sla.Value().toFixed(2);
}
nameSpace12.board.create('text', [-4, -7.5, nameSpace12.txt1]);

nameSpace12.txt2 = function ()
{
    return "b=" + nameSpace12.slb.Value().toFixed(2);
}
nameSpace12.board.create('text', [-4, -9, nameSpace12.txt2]);

nameSpace12.O=nameSpace12.board.create('point', [0, 0], {visible:false});
nameSpace12.A=nameSpace12.board.create('point', [function(){return nameSpace12.sla.Value();}, function(){return nameSpace12.slb.Value();}], {visible:false});
nameSpace12.B=nameSpace12.board.create('point', [function(){return -nameSpace12.sla.Value();}, function(){return nameSpace12.slb.Value();}], {visible:false});
nameSpace12.OA= nameSpace12.board.create('line', [nameSpace12.O,nameSpace12.A],{visible:true, color:'green'});
nameSpace12.OB= nameSpace12.board.create('line', [nameSpace12.O,nameSpace12.B],{visible:true, color:'green'});

