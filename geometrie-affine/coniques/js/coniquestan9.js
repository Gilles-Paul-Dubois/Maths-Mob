var nameSpace9 = {};
nameSpace9.xmin = -5;
nameSpace9.xmax = 5;
nameSpace9.ymin = -5;
nameSpace9.ymax = 5;
nameSpace9.board = JXG.JSXGraph.initBoard('box9', {boundingbox: [nameSpace9.xmin, nameSpace9.ymax, nameSpace9.xmax, nameSpace9.ymin], axis: true, showNavigation:false});
nameSpace9.sla = nameSpace9.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace9.slb = nameSpace9.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace9.slt = nameSpace9.board.create('slider', [[-4, -4.5], [-2, -4.5], [0, 45, 360]], {snapWidth: 1});
nameSpace9.F1x = function ()
{
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace9.F1y = function ()
{
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace9.F1 = nameSpace9.board.create('point', [nameSpace9.F1x, nameSpace9.F1y], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace9.F2x = function ()
{
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace9.F2y = function ()
{
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace9.F2 = nameSpace9.board.create('point', [nameSpace9.F2x, nameSpace9.F2y], {size: 1, color: 'red', name: 'F2', visible: false});
nameSpace9.grandAxe = function ()
{
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace9.E = nameSpace9.board.create('ellipse', [nameSpace9.F1, nameSpace9.F2, nameSpace9.grandAxe]);

nameSpace9.txt1 = function ()
{
    return "a=" + nameSpace9.sla.Value().toFixed(2);
}
nameSpace9.board.create('text', [-1, -3.5, nameSpace9.txt1]);

nameSpace9.txt2 = function ()
{
    return "b=" + nameSpace9.slb.Value().toFixed(2);
}
nameSpace9.board.create('text', [-1, -4, nameSpace9.txt2]);

nameSpace9.Mx = function ()
{
    var t = nameSpace9.slt.Value();
    var a = nameSpace9.sla.Value();
    return a * Math.cos(t * Math.PI / 180);
}
nameSpace9.My = function ()
{
    var t = nameSpace9.slt.Value();
    var b = nameSpace9.slb.Value();
    return b * Math.sin(t * Math.PI / 180);
}

nameSpace9.Nx = function ()
{
    var t = nameSpace9.slt.Value();
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var x0 = a * Math.cos(t * Math.PI / 180);
    var y0 = b * Math.sin(t * Math.PI / 180);
    if (t%180==0)
        return x0 ;
    else
        return x0+1;
}
nameSpace9.Ny = function ()
{
    var t = nameSpace9.slt.Value();
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var x0 = a * Math.cos(t * Math.PI / 180);
    var y0 = b * Math.sin(t * Math.PI / 180);
    if (t%180==0)
        return y0 + 1;
    else
        return (1 / y0) * (b * b - ((b * b) / (a * a)) * x0 * (x0 + 1));
}
nameSpace9.M = nameSpace9.board.create('point', [nameSpace9.Mx, nameSpace9.My], {size: 1, name: 'M<sub>0</sub>'});
nameSpace9.N = nameSpace9.board.create('point', [nameSpace9.Nx, nameSpace9.Ny], {size: 1, name: 'N', visible:false});
nameSpace9.T=nameSpace9.board.create('line',[nameSpace9.M,nameSpace9.N], {color:'red'});
nameSpace9.txt3 = function ()
{    var t = nameSpace9.slt.Value();
    var a = nameSpace9.sla.Value();
    //var b = nameSpace9.slb.Value();
    var x0 = a * Math.cos(t * Math.PI / 180);
    //var y0 = b * Math.sin(t * Math.PI / 180);
    return "x<sub>0</sub>=" + x0.toFixed(2);
}
nameSpace9.board.create('text', [-1, -4.5, nameSpace9.txt3]);

nameSpace9.txt4 = function ()
{    var t = nameSpace9.slt.Value();
    var a = nameSpace9.sla.Value();
    var b = nameSpace9.slb.Value();
    var x0 = a * Math.cos(t * Math.PI / 180);
    var y0 = b * Math.sin(t * Math.PI / 180);
    var u=x0/(a*a);
    var v=y0/(b*b);
   if(document.body.className.substring(0,2)=="fr")  
   {     var txt="Equation de la tangente en M<sub>0</sub> : ";}
else
 {     var txt="Equation of the tangent at M<sub>0</sub> : ";}
    var equ = ""+u.toFixed(2)+"x"+"+"+v.toFixed(2)+"y"+"=1";
    return txt+equ;
}
nameSpace9.board.create('text', [1, -4, nameSpace9.txt4]);