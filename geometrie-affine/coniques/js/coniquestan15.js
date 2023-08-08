var nameSpace15 = {};
nameSpace15.xmin = -10;
nameSpace15.xmax = 10;
nameSpace15.ymin = -10;
nameSpace15.ymax = 10;
nameSpace15.board = JXG.JSXGraph.initBoard('box15', {boundingbox: [nameSpace15.xmin, nameSpace15.ymax, nameSpace15.xmax, nameSpace15.ymin], axis: true, showNavigation:false});
nameSpace15.sla = nameSpace15.board.create('slider', [[-9, -7.5], [-5, -7.5], [3, 4, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace15.slb = nameSpace15.board.create('slider', [[-9, -9], [-5, -9], [1, 2, 3]], {snapWidth: 0.1, withLabel: false});
nameSpace15.slp = nameSpace15.board.create('slider', [[1, -9], [5, -9], [-10, 2, 10]], {snapWidth: 0.1, withLabel: false});

nameSpace15.F1x = function ()
{
    var a = nameSpace15.sla.Value();
    var b = nameSpace15.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace15.F1y = function ()
{
    var a = nameSpace15.sla.Value();
    var b = nameSpace15.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace15.F1 = nameSpace15.board.create('point', [nameSpace15.F1x, nameSpace15.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace15.F2x = function ()
{
    var a = nameSpace15.sla.Value();
    var b = nameSpace15.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace15.F2y = function ()
{
    var a = nameSpace15.sla.Value();
    var b = nameSpace15.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace15.F2 = nameSpace15.board.create('point', [nameSpace15.F2x, nameSpace15.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace15.grandAxe = function ()
{
    var a = nameSpace15.sla.Value();
    var b = nameSpace15.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace15.H = nameSpace15.board.create('hyperbola', [nameSpace15.F1, nameSpace15.F2, nameSpace15.grandAxe]);

nameSpace15.txt1 = function ()
{
    return "a=" + nameSpace15.sla.Value().toFixed(2);
}
nameSpace15.board.create('text', [-4, -7.5, nameSpace15.txt1]);

nameSpace15.txt2 = function ()
{
    return "b=" + nameSpace15.slb.Value().toFixed(2);
}
nameSpace15.board.create('text', [-4, -9, nameSpace15.txt2]);

nameSpace15.txt3 = function ()
{
    return "p=" + nameSpace15.slp.Value().toFixed(2);
}
nameSpace15.board.create('text', [6, -9, nameSpace15.txt3]);

nameSpace15.O=nameSpace15.board.create('point', [0, 0], {visible:false});
nameSpace15.A=nameSpace15.board.create('point', [function(){return nameSpace15.sla.Value();}, function(){return nameSpace15.slb.Value();}], {visible:false});
nameSpace15.B=nameSpace15.board.create('point', [function(){return -nameSpace15.sla.Value();}, function(){return nameSpace15.slb.Value();}], {visible:false});
nameSpace15.OA= nameSpace15.board.create('line', [nameSpace15.O,nameSpace15.A],{visible:true, color:'green'});
nameSpace15.OB= nameSpace15.board.create('line', [nameSpace15.O,nameSpace15.B],{visible:true, color:'green'});

nameSpace15.A1y=function ()
{
    var a= nameSpace15.sla.Value();
    var b= nameSpace15.slb.Value();
    var p= nameSpace15.slp.Value();
    return Math.sqrt(a*a*p*p-b*b);
}

nameSpace15.B1y=function ()
{
    var a= nameSpace15.sla.Value();
    var b= nameSpace15.slb.Value();
    var p= nameSpace15.slp.Value();
    return p+Math.sqrt(a*a*p*p-b*b);
}
nameSpace15.A1=nameSpace15.board.create('point',[0,nameSpace15.A1y], {visible:false});
nameSpace15.B1=nameSpace15.board.create('point',[1,nameSpace15.B1y], {visible:false});
nameSpace15.T1=nameSpace15.board.create('line',[nameSpace15.A1,nameSpace15.B1], {color:'red'});

nameSpace15.A2y=function ()
{
    var a= nameSpace15.sla.Value();
    var b= nameSpace15.slb.Value();
    var p= nameSpace15.slp.Value();
    return -Math.sqrt(a*a*p*p-b*b);
}

nameSpace15.B2y=function ()
{
    var a= nameSpace15.sla.Value();
    var b= nameSpace15.slb.Value();
    var p= nameSpace15.slp.Value();
    return p-Math.sqrt(a*a*p*p-b*b);
}
nameSpace15.A2=nameSpace15.board.create('point',[0,nameSpace15.A2y], {visible:false});
nameSpace15.B2=nameSpace15.board.create('point',[1,nameSpace15.B2y], {visible:false});
nameSpace15.T2=nameSpace15.board.create('line',[nameSpace15.A2,nameSpace15.B2], {color:'red'});