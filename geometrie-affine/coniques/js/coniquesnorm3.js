var nameSpace3 = {};
nameSpace3.xmin = -10;
nameSpace3.xmax = 10;
nameSpace3.ymin = -10;
nameSpace3.ymax = 10;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.sla = nameSpace3.board.create('slider', [[-9, -8], [-5, -8], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace3.slb = nameSpace3.board.create('slider', [[-9, -9], [-5, -9], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace3.F1x = function ()
{
    var a = nameSpace3.sla.Value();
    var b = nameSpace3.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace3.F1y = function ()
{
    var a = nameSpace3.sla.Value();
    var b = nameSpace3.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace3.F1 = nameSpace3.board.create('point', [nameSpace3.F1x, nameSpace3.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace3.F2x = function ()
{
    var a = nameSpace3.sla.Value();
    var b = nameSpace3.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace3.F2y = function ()
{
    var a = nameSpace3.sla.Value();
    var b = nameSpace3.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace3.F2 = nameSpace3.board.create('point', [nameSpace3.F2x, nameSpace3.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace3.grandAxe = function ()
{
    var a = nameSpace3.sla.Value();
    var b = nameSpace3.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace3.H = nameSpace3.board.create('hyperbola', [nameSpace3.F1, nameSpace3.F2, nameSpace3.grandAxe]);
nameSpace3.M=nameSpace3.board.create('glider', [nameSpace3.H], {size:1, name:'M'});
nameSpace3.T=nameSpace3.board.create('tangent', [nameSpace3.M],{color:'red'});
nameSpace3.N=nameSpace3.board.create('perpendicular',[nameSpace3.T,nameSpace3.M],{color:'red'});
nameSpace3.txt1 = function ()
{
    return "a=" + nameSpace3.sla.Value().toFixed(2);
}
nameSpace3.board.create('text', [-4, -8, nameSpace3.txt1]);

nameSpace3.txt2 = function ()
{
    return "b=" + nameSpace3.slb.Value().toFixed(2);
}
nameSpace3.board.create('text', [-4, -9, nameSpace3.txt2]);

nameSpace3.O=nameSpace3.board.create('point', [0, 0], {visible:false});
nameSpace3.A=nameSpace3.board.create('point', [function(){return nameSpace3.sla.Value();}, function(){return nameSpace3.slb.Value();}], {visible:false});
nameSpace3.B=nameSpace3.board.create('point', [function(){return -nameSpace3.sla.Value();}, function(){return nameSpace3.slb.Value();}], {visible:false});
nameSpace3.OA= nameSpace3.board.create('line', [nameSpace3.O,nameSpace3.A],{visible:true, color:'green'});
nameSpace3.OB= nameSpace3.board.create('line', [nameSpace3.O,nameSpace3.B],{visible:true, color:'green'});
