var nameSpace6 = {};
nameSpace6.xmin = -10;
nameSpace6.xmax = 10;
nameSpace6.ymin = -10;
nameSpace6.ymax = 10;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: true});
nameSpace6.sla = nameSpace6.board.create('slider', [[-9, -8], [-5, -8], [3, 4, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace6.slb = nameSpace6.board.create('slider', [[-9, -9], [-5, -9], [1, 2, 3]], {snapWidth: 0.1, withLabel: false});
nameSpace6.F1x = function ()
{
    var a = nameSpace6.sla.Value();
    var b = nameSpace6.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace6.F1y = function ()
{
    var a = nameSpace6.sla.Value();
    var b = nameSpace6.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace6.F1 = nameSpace6.board.create('point', [nameSpace6.F1x, nameSpace6.F1y], {size: 1, color: 'red', name: 'F', visible:true});

nameSpace6.F2x = function ()
{
    var a = nameSpace6.sla.Value();
    var b = nameSpace6.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace6.F2y = function ()
{
    var a = nameSpace6.sla.Value();
    var b = nameSpace6.slb.Value();
    var d = a * a + b * b;
    var c = Math.sqrt(d)
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace6.F2 = nameSpace6.board.create('point', [nameSpace6.F2x, nameSpace6.F2y], {size: 1, color: 'red', name: "F'", visible:true});
nameSpace6.grandAxe = function ()
{
    var a = nameSpace6.sla.Value();
    var b = nameSpace6.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace6.H = nameSpace6.board.create('hyperbola', [nameSpace6.F1, nameSpace6.F2, nameSpace6.grandAxe]);
nameSpace6.M=nameSpace6.board.create('glider', [5,1,nameSpace6.H], {size:1, name:'M'});
nameSpace6.MF1=nameSpace6.board.create('line', [nameSpace6.M, nameSpace6.F1],{color:'brown'});
nameSpace6.MF2=nameSpace6.board.create('line', [nameSpace6.M, nameSpace6.F2],{color:'brown'});
nameSpace6.T=nameSpace6.board.create('tangent', [nameSpace6.M],{color:'red'});
nameSpace6.N=nameSpace6.board.create('perpendicular',[nameSpace6.T,nameSpace6.M],{color:'red'});
nameSpace6.txt1 = function ()
{
    return "a=" + nameSpace6.sla.Value().toFixed(2);
}
nameSpace6.board.create('text', [-4, -8, nameSpace6.txt1]);

nameSpace6.txt2 = function ()
{
    return "b=" + nameSpace6.slb.Value().toFixed(2);
}
nameSpace6.board.create('text', [-4, -9, nameSpace6.txt2]);

nameSpace6.O=nameSpace6.board.create('point', [0, 0], {visible:false});
nameSpace6.A=nameSpace6.board.create('point', [function(){return nameSpace6.sla.Value();}, function(){return nameSpace6.slb.Value();}], {visible:false});
nameSpace6.B=nameSpace6.board.create('point', [function(){return -nameSpace6.sla.Value();}, function(){return nameSpace6.slb.Value();}], {visible:false});
nameSpace6.OA= nameSpace6.board.create('line', [nameSpace6.O,nameSpace6.A],{visible:true, color:'green'});
nameSpace6.OB= nameSpace6.board.create('line', [nameSpace6.O,nameSpace6.B],{visible:true, color:'green'});
