var nameSpace1 = {};
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.sla = nameSpace1.board.create('slider', [[1, -4], [3, -4], [1, 3, 4]], {snapWidth: 0.1});
nameSpace1.slb = nameSpace1.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1});
nameSpace1.slt = nameSpace1.board.create('slider', [[-4, 4], [-2, 4], [0, 0, 6.28]], {snapWidth: 0.1});
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {visible: false});
nameSpace1.I = nameSpace1.board.create('point', [1, 0], {visible: false});

nameSpace1.F1x = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace1.F1y = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace1.F1 = nameSpace1.board.create('point', [nameSpace1.F1x, nameSpace1.F1y], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace1.F2x = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace1.F2y = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace1.F2 = nameSpace1.board.create('point', [nameSpace1.F2x, nameSpace1.F2y], {size: 1, color: 'red', name: 'F2', visible: false});
nameSpace1.grandAxe = function ()
{
    var a = nameSpace1.sla.Value();
    var b = nameSpace1.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace1.E = nameSpace1.board.create('ellipse', [nameSpace1.F1, nameSpace1.F2, nameSpace1.grandAxe]);
nameSpace1.xN= function ()
{
return nameSpace1.sla.Value()*Math.cos(nameSpace1.slt.Value());
}

nameSpace1.yN= function ()
{
return nameSpace1.slb.Value()*Math.sin(nameSpace1.slt.Value());
}
nameSpace1.N=nameSpace1.board.create('point',[nameSpace1.xN,nameSpace1.yN],{size: 1, color: 'blue', name: 'M'});
nameSpace1.ON = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.N], {straightFirst: false});
nameSpace1.txt1 = function ()
{
    return "a";
}
nameSpace1.board.create('text', [4, -4, nameSpace1.txt1]);

nameSpace1.txt2 = function ()
{
    return "b";
}
nameSpace1.board.create('text', [-1, -4, nameSpace1.txt2]);

nameSpace1.txt3= function ()
{ return "t";}

nameSpace1.board.create('text',[-4.5,4, nameSpace1.txt3]);
nameSpace1.Ax = function ()
{
    return nameSpace1.N.X();
}

nameSpace1.Ay = function ()
{
    var a = nameSpace1.sla.Value();
    var x = nameSpace1.N.X();
    if (nameSpace1.N.Y() >= 0)
        return Math.sqrt(a * a - x * x);
    else
        return -Math.sqrt(a * a - x * x);
}

nameSpace1.Bx = function ()
{
    var b = nameSpace1.slb.Value();
    var y = nameSpace1.N.Y();
    if (nameSpace1.N.X() >= 0)
        return Math.sqrt(b * b - y * y);
    else
        return -Math.sqrt(b * b - y * y);
}

nameSpace1.By = function ()
{
    return nameSpace1.N.Y();




}

nameSpace1.C1 = nameSpace1.board.create('circle', [nameSpace1.O, function () {
        return nameSpace1.sla.Value();
    }], {strokeColor: 'red'});
nameSpace1.C2 = nameSpace1.board.create('circle', [nameSpace1.O, function () {
        return nameSpace1.slb.Value();
    }], {strokeColor: 'red'});
nameSpace1.A = nameSpace1.board.create('point', [nameSpace1.Ax, nameSpace1.Ay], {size: 1, name: 'A'});
nameSpace1.B = nameSpace1.board.create('point', [nameSpace1.Bx, nameSpace1.By], {size: 1, name: 'B'});

nameSpace1.OA= nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.A], {straightFirst: false, color:'green'});
nameSpace1.MA=nameSpace1.board.create('segment', [nameSpace1.N, nameSpace1.A], {color:'green'});
nameSpace1.MB=nameSpace1.board.create('segment', [nameSpace1.N, nameSpace1.B], {color:'green'});
nameSpace1.t=nameSpace1.board.create('angle',[nameSpace1.I, nameSpace1.O, nameSpace1.A], {name:'t'})