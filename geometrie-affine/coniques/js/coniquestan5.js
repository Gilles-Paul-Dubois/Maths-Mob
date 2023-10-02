var nameSpace5 = {};
nameSpace5.xmin = -10;
nameSpace5.xmax = 10;
nameSpace5.ymin = -10;
nameSpace5.ymax = 10;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.sla = nameSpace5.board.create('slider', [[-9, -7.5], [-5, -7.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace5.slb = nameSpace5.board.create('slider', [[-9, -9], [-5, -9], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace5.F1x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace5.F1y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace5.F1 = nameSpace5.board.create('point', [nameSpace5.F1x, nameSpace5.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace5.F2x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace5.F2y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace5.F2 = nameSpace5.board.create('point', [nameSpace5.F2x, nameSpace5.F2y], {size: 1, color: 'red', name: 'F2', visible:false});
nameSpace5.grandAxe = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace5.H = nameSpace5.board.create('hyperbola', [nameSpace5.F1, nameSpace5.F2, nameSpace5.grandAxe]);
nameSpace5.M=nameSpace5.board.create('glider', [nameSpace5.H], {size:1, name:'M'});
nameSpace5.T=nameSpace5.board.create('tangent', [nameSpace5.M]);
nameSpace5.txt1 = function ()
{
    return "a=" + nameSpace5.sla.Value().toFixed(2);
}
nameSpace5.board.create('text', [-4, -7.5, nameSpace5.txt1]);

nameSpace5.txt2 = function ()
{
    return "b=" + nameSpace5.slb.Value().toFixed(2);
}
nameSpace5.board.create('text', [-4, -9, nameSpace5.txt2]);

nameSpace5.O=nameSpace5.board.create('point', [0, 0], {visible:false});
nameSpace5.A=nameSpace5.board.create('point', [function(){return nameSpace5.sla.Value();}, function(){return nameSpace5.slb.Value();}], {visible:false});
nameSpace5.B=nameSpace5.board.create('point', [function(){return -nameSpace5.sla.Value();}, function(){return nameSpace5.slb.Value();}], {visible:false});
nameSpace5.OA= nameSpace5.board.create('line', [nameSpace5.O,nameSpace5.A],{visible:true, color:'red'});
nameSpace5.OB= nameSpace5.board.create('line', [nameSpace5.O,nameSpace5.B],{visible:true, color:'red'});