var nameSpace14 = {};
nameSpace14.xmin = -5;
nameSpace14.xmax = 5;
nameSpace14.ymin = -5;
nameSpace14.ymax = 5;
nameSpace14.board = JXG.JSXGraph.initBoard('box14', {boundingbox: [nameSpace14.xmin, nameSpace14.ymax, nameSpace14.xmax, nameSpace14.ymin], axis: true});
nameSpace14.sla = nameSpace14.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace14.slb = nameSpace14.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace14.slp = nameSpace14.board.create('slider', [[1, -4], [3, -4], [-10, 0, 10]], {snapWidth: 0.1, withLabel: false});
nameSpace14.F1x = function ()
{
    var a = nameSpace14.sla.Value();
    var b = nameSpace14.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace14.F1y = function ()
{
    var a = nameSpace14.sla.Value();
    var b = nameSpace14.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace14.F1 = nameSpace14.board.create('point', [nameSpace14.F1x, nameSpace14.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace14.F2x = function ()
{
    var a = nameSpace14.sla.Value();
    var b = nameSpace14.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace14.F2y = function ()
{
    var a = nameSpace14.sla.Value();
    var b = nameSpace14.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace14.F2 = nameSpace14.board.create('point', [nameSpace14.F2x, nameSpace14.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace14.grandAxe = function ()
{
    var a = nameSpace14.sla.Value();
    var b = nameSpace14.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace14.E = nameSpace14.board.create('ellipse', [nameSpace14.F1, nameSpace14.F2, nameSpace14.grandAxe]);

nameSpace14.txt1 = function ()
{
    return "a=" + nameSpace14.sla.Value().toFixed(2);
}
nameSpace14.board.create('text', [-1, -3.5, nameSpace14.txt1]);

nameSpace14.txt2 = function ()
{
    return "b=" + nameSpace14.slb.Value().toFixed(2);
}
nameSpace14.board.create('text', [-1, -4, nameSpace14.txt2]);

nameSpace14.txt3 = function ()
{
    return "p=" + nameSpace14.slp.Value().toFixed(2);
}
nameSpace14.board.create('text', [3.5, -4, nameSpace14.txt3]);

nameSpace14.A1y=function ()
{
    var a= nameSpace14.sla.Value();
    var b= nameSpace14.slb.Value();
    var p= nameSpace14.slp.Value();
    return Math.sqrt(a*a*p*p+b*b);
}

nameSpace14.B1y=function ()
{
    var a= nameSpace14.sla.Value();
    var b= nameSpace14.slb.Value();
    var p= nameSpace14.slp.Value();
    return p+Math.sqrt(a*a*p*p+b*b);
}
nameSpace14.A1=nameSpace14.board.create('point',[0,nameSpace14.A1y], {visible:false});
nameSpace14.B1=nameSpace14.board.create('point',[1,nameSpace14.B1y], {visible:false});
nameSpace14.T1=nameSpace14.board.create('line',[nameSpace14.A1,nameSpace14.B1], {color:'red'});

nameSpace14.A2y=function ()
{
    var a= nameSpace14.sla.Value();
    var b= nameSpace14.slb.Value();
    var p= nameSpace14.slp.Value();
    return -Math.sqrt(a*a*p*p+b*b);
}

nameSpace14.B2y=function ()
{
    var a= nameSpace14.sla.Value();
    var b= nameSpace14.slb.Value();
    var p= nameSpace14.slp.Value();
    return p-Math.sqrt(a*a*p*p+b*b);
}
nameSpace14.A2=nameSpace14.board.create('point',[0,nameSpace14.A2y], {visible:false});
nameSpace14.B2=nameSpace14.board.create('point',[1,nameSpace14.B2y], {visible:false});
nameSpace14.T2=nameSpace14.board.create('line',[nameSpace14.A2,nameSpace14.B2], {color:'red'});