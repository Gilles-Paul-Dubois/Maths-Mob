var nameSpace5 = {};
nameSpace5.xmin = -5;
nameSpace5.xmax = 5;
nameSpace5.ymin = -5;
nameSpace5.ymax = 5;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.sla = nameSpace5.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace5.slb = nameSpace5.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});

nameSpace5.M1=nameSpace5.board.create('point',[4,4],{size:1, name:"M<sub>1</sub>"});
nameSpace5.F1x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace5.F1y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
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
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace5.F2y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
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
nameSpace5.E = nameSpace5.board.create('ellipse', [nameSpace5.F1, nameSpace5.F2, nameSpace5.grandAxe]);

nameSpace5.txt1 = function ()
{
    return "a=" + nameSpace5.sla.Value().toFixed(2);
}
nameSpace5.board.create('text', [-1, -3.5, nameSpace5.txt1]);

nameSpace5.txt2 = function ()
{
    return "b=" + nameSpace5.slb.Value().toFixed(2);
}
nameSpace5.board.create('text', [-1, -4, nameSpace5.txt2]);

nameSpace5.B1y=function()
{
       var b = nameSpace5.slb.Value();
       var y1=nameSpace5.M1.Y();
       return b*b/y1;
}
nameSpace5.B1=nameSpace5.board.create('point',[0,nameSpace5.B1y], {visible:false});

nameSpace5.B2x=function()
{
       var a = nameSpace5.sla.Value();
       var x1=nameSpace5.M1.X();
       return a*a/x1;
}
nameSpace5.B2=nameSpace5.board.create('point',[nameSpace5.B2x,0], {visible:false});

nameSpace5.P=nameSpace5.board.create('line',[nameSpace5.B1, nameSpace5.B2], {color:'red'});

nameSpace5.I0=nameSpace5.board.create('intersection', [nameSpace5.E, nameSpace5.P,0], {size:1, name:''});
nameSpace5.I1=nameSpace5.board.create('intersection', [nameSpace5.E, nameSpace5.P,1], {size:1, name:''});
nameSpace5.board.create('line',[nameSpace5.M1, nameSpace5.I0], {color:'brown'});
nameSpace5.board.create('line',[nameSpace5.M1, nameSpace5.I1], {color:'brown'});
