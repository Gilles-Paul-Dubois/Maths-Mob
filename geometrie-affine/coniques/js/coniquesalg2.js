var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.sla = nameSpace2.board.create('slider', [[-9, -7.5], [-5, -7.5], [1, 3, 4]], {snapWidth: 0.1});
nameSpace2.slb = nameSpace2.board.create('slider', [[-9, -9], [-5, -9], [1, 2, 4]], {snapWidth: 0.1});
nameSpace2.F1x = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace2.F1y = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
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
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace2.F2y = function ()
{
    var a = nameSpace2.sla.Value();
    var b = nameSpace2.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
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
nameSpace2.H = nameSpace2.board.create('hyperbola', [nameSpace2.F1, nameSpace2.F2, nameSpace2.grandAxe]);

nameSpace2.txt1 = function ()
{
    return "a";
}
nameSpace2.board.create('text', [-3, -7.5, nameSpace2.txt1]);

nameSpace2.txt2 = function ()
{
    return "b";
}
nameSpace2.board.create('text', [-3, -9, nameSpace2.txt2]);

nameSpace2.O=nameSpace2.board.create('point', [0, 0], {visible:false});
nameSpace2.A=nameSpace2.board.create('point', [function(){return nameSpace2.sla.Value();}, function(){return nameSpace2.slb.Value();}], {visible:false});
nameSpace2.B=nameSpace2.board.create('point', [function(){return -nameSpace2.sla.Value();}, function(){return nameSpace2.slb.Value();}], {visible:false});
nameSpace2.OA= nameSpace2.board.create('line', [nameSpace2.O,nameSpace2.A],{visible:true, color:'red'});
nameSpace2.OB= nameSpace2.board.create('line', [nameSpace2.O,nameSpace2.B],{visible:true, color:'red'});