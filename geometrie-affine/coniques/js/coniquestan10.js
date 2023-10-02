var nameSpace10 = {};
nameSpace10.xmin = -5;
nameSpace10.xmax = 5;
nameSpace10.ymin = -5;
nameSpace10.ymax = 5;
nameSpace10.board = JXG.JSXGraph.initBoard('box10', {boundingbox: [nameSpace10.xmin, nameSpace10.ymax, nameSpace10.xmax, nameSpace10.ymin], axis: true, showNavigation: false});
nameSpace10.sla = nameSpace10.board.create('slider', [[-4, -3.5], [-2, -3.5], [2, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace10.slb = nameSpace10.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 2]], {snapWidth: 0.1, withLabel: false});
nameSpace10.slt = nameSpace10.board.create('slider', [[-4, -4.5], [-2, -4.5], [-2, 0, 2]], {snapWidth: 0.1});
function cosh(x)
{
    return (Math.exp(x) + Math.exp(-x)) / 2;
}

function sinh(x)
{
    return (Math.exp(x) - Math.exp(-x)) / 2;
}
nameSpace10.F1x = function ()
{
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace10.F1y = function ()
{
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace10.F1 = nameSpace10.board.create('point', [nameSpace10.F1x, nameSpace10.F1y], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace10.F2x = function ()
{
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace10.F2y = function ()
{
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace10.F2 = nameSpace10.board.create('point', [nameSpace10.F2x, nameSpace10.F2y], {size: 1, color: 'red', name: 'F2', visible: false});
nameSpace10.grandAxe = function ()
{
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace10.H = nameSpace10.board.create('hyperbola', [nameSpace10.F1, nameSpace10.F2, nameSpace10.grandAxe]);

nameSpace10.txt1 = function ()
{
    return "a=" + nameSpace10.sla.Value().toFixed(2);
}
nameSpace10.board.create('text', [-1, -3.5, nameSpace10.txt1]);

nameSpace10.txt2 = function ()
{
    return "b=" + nameSpace10.slb.Value().toFixed(2);
}
nameSpace10.board.create('text', [-1, -4, nameSpace10.txt2]);

nameSpace10.Mx = function ()
{
    var t = nameSpace10.slt.Value();
    var a = nameSpace10.sla.Value();
    return a * cosh(t);
}
nameSpace10.My = function ()
{
    var t = nameSpace10.slt.Value();
    var b = nameSpace10.slb.Value();
    return b * sinh(t);
}

nameSpace10.Nx = function ()
{
    var t = nameSpace10.slt.Value();
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var x0 = a * cosh(t);
    var y0 = b * sinh(t);
    if (y0 == 0)
        return x0;
    else
        return x0 + 1;
}
nameSpace10.Ny = function ()
{
    var t = nameSpace10.slt.Value();
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var x0 = a * cosh(t);
    var y0 = b * sinh(t);
    if (y0 == 0)
        return y0 + 1;
    else
        return (-1 / y0) * (b * b - ((b * b) / (a * a)) * x0 * (x0 + 1));
}
nameSpace10.M = nameSpace10.board.create('point', [nameSpace10.Mx, nameSpace10.My], {size: 1, name: 'M<sub>0</sub>'});
nameSpace10.N = nameSpace10.board.create('point', [nameSpace10.Nx, nameSpace10.Ny], {size: 1, name: 'N', visible: false});
nameSpace10.T = nameSpace10.board.create('line', [nameSpace10.M, nameSpace10.N], {color: 'red'});

nameSpace10.txt3 = function ()
{
    var t = nameSpace10.slt.Value();
    var a = nameSpace10.sla.Value();
    var x0 = a * Math.cosh(t);
    return "x<sub>0</sub>=" + x0.toFixed(2);
}
nameSpace10.board.create('text', [-1, -4.5, nameSpace10.txt3]);

nameSpace10.txt4 = function ()
{
    var t = nameSpace10.slt.Value();
    var a = nameSpace10.sla.Value();
    var b = nameSpace10.slb.Value();
    var x0 = a * Math.cosh(t);
    var y0 = b * Math.sinh(t);
    var u = x0 / (a * a);
    var v = y0 / (b * b);
       if(document.body.className.substring(0,2)=="fr")  
   { var txt = "Equation de la tangente en M<sub>0</sub> :<br> ";}
else
{ var txt = "Equation of the tangent at M<sub>0</sub> :<br> ";}
    var equ = "" + u.toFixed(2) + "x" + "-" + v.toFixed(2) + "y" + "=1";
    return txt + equ;
}
nameSpace10.board.create('text', [1, -4, nameSpace10.txt4]);