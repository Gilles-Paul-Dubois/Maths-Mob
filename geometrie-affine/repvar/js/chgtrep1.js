var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});

nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace1.I = nameSpace1.board.create('point', [1, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace1.J = nameSpace1.board.create('point', [0, 1], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace1.i = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.I], {straightFirst: false, straightLast: false, lastArrow: true, color: 'blue', name: 'i', withLabel: true, label: {position: 'top'}});
nameSpace1.j = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.J], {straightFirst: false, straightLast: false, lastArrow: true, color: 'blue', name: 'j', withLabel: true, label: {position: 'top'}});
nameSpace1.U = nameSpace1.board.create('point', [1, 1], {fixed: false, size: 1, name: 'U', visible: true, withLabel: false});
nameSpace1.D1 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.U], {straightFirst: true, straightLast: true, lastArrow: true, color: 'black', name: 'D1', withLabel: false, label: {position: 'top'}});
nameSpace1.u = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.U], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'u', withLabel: true, label: {position: 'top'}});
nameSpace1.V = nameSpace1.board.create('point', [-1, 1], {fixed: false, size: 1, name: 'V', visible: true, withLabel: false});
nameSpace1.D2 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.V], {straightFirst: true, straightLast: true, lastArrow: true, color: 'black', name: 'D1', withLabel: false, label: {position: 'top'}});
nameSpace1.v = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.V], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'v', withLabel: true, label: {position: 'top'}});
nameSpace1.Omega = nameSpace1.board.create('point', [1, -2], {fixed: false, size: 1, name: '&Omega;', visible: true, withLabel: true});
nameSpace1.U1x = function ()
{
    return nameSpace1.Omega.X() + nameSpace1.U.X();
}
nameSpace1.U1y = function ()
{
    return nameSpace1.Omega.Y() + nameSpace1.U.Y();

}
nameSpace1.U1 = nameSpace1.board.create('point', [nameSpace1.U1x, nameSpace1.U1y], {fixed: true, size: 1, name: 'U1', visible: false});
nameSpace1.D3 = nameSpace1.board.create('line', [nameSpace1.Omega, nameSpace1.U1], {straightFirst: true, straightLast: true, lastArrow: true, color: 'black', name: 'D1', withLabel: false, label: {position: 'top'}});
nameSpace1.u1 = nameSpace1.board.create('line', [nameSpace1.Omega, nameSpace1.U1], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'u', withLabel: true, label: {position: 'top'}});

nameSpace1.V1x = function ()
{
    return nameSpace1.Omega.X() + nameSpace1.V.X();
}
nameSpace1.V1y = function ()
{
    return nameSpace1.Omega.Y() + nameSpace1.V.Y();

}
nameSpace1.V1 = nameSpace1.board.create('point', [nameSpace1.V1x, nameSpace1.V1y], {fixed: true, size: 1, name: 'V1', visible: false});
nameSpace1.D4 = nameSpace1.board.create('line', [nameSpace1.Omega, nameSpace1.V1], {straightFirst: true, straightLast: true, lastArrow: true, color: 'black', name: 'D1', withLabel: false, label: {position: 'top'}});
nameSpace1.v1 = nameSpace1.board.create('line', [nameSpace1.Omega, nameSpace1.V1], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'v', withLabel: true, label: {position: 'top'}});
nameSpace1.M = nameSpace1.board.create('point', [2, 3], {fixed: false, color: 'green', size: 1, name: 'M', visible: true, withLabel: true});
nameSpace1.D5 = nameSpace1.board.create('parallel', [nameSpace1.D3, nameSpace1.M], {color: 'green', dash: 1});
nameSpace1.D6 = nameSpace1.board.create('parallel', [nameSpace1.D4, nameSpace1.M], {color: 'green', dash: 1});

nameSpace1.OM = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.M], {straightFirst: false, straightLast: false, lastArrow: true, color: 'brown', name: 'OM', withLabel: false, label: {position: 'top'}});
nameSpace1.WM = nameSpace1.board.create('line', [nameSpace1.Omega, nameSpace1.M], {straightFirst: false, straightLast: false, lastArrow: true, color: 'brown', name: 'WM', withLabel: false, label: {position: 'top'}});

nameSpace1.calcoord1 = function (x, y)
{
    var ux = nameSpace1.U.X();
    var uy = nameSpace1.U.Y();
    var vx = nameSpace1.V.X();
    var vy = nameSpace1.V.Y();
    var D = ux * vy - uy * vx;
    var X = vy * x / D - vx * y / D;
    var Y = -uy * x / D + ux * y / D;
    return [X, Y];

}

nameSpace1.calcoord2 = function (x, y)
{
    var ox = nameSpace1.Omega.X();
    var oy = nameSpace1.Omega.Y();
    return [x - ox, y - oy];
}

nameSpace1.calcoord3 = function (x, y)
{
    var ox = nameSpace1.Omega.X();
    var oy = nameSpace1.Omega.Y();
    var oX = nameSpace1.calcoord1(ox, oy)[0];
    var oY = nameSpace1.calcoord1(ox, oy)[1];
    var X= nameSpace1.calcoord1(x,y)[0];
    var Y= nameSpace1.calcoord1(x,y)[1];
    return [X-oX,Y-oY];
}


nameSpace1.txt1 = function ()
{
    return "M(" + nameSpace1.M.X().toFixed(2) + "," + nameSpace1.M.Y().toFixed(2) + ")";
}


nameSpace1.txt2 = function ()
{
    var x, y;
    x = nameSpace1.calcoord1(nameSpace1.M.X(), nameSpace1.M.Y())[0];
    y = nameSpace1.calcoord1(nameSpace1.M.X(), nameSpace1.M.Y())[1];
    return "M(" + x.toFixed(2) + "," + y.toFixed(2) + ")";

}

nameSpace1.txt3 = function ()
{
    var x, y;
    x = nameSpace1.M.X()-nameSpace1.Omega.X();
    y = nameSpace1.M.Y()-nameSpace1.Omega.Y();
    return "M(" + x.toFixed(2) + "," + y.toFixed(2) + ")";

}

nameSpace1.txt4=function()
{
   var x, y;
    x = nameSpace1.calcoord3(nameSpace1.M.X(), nameSpace1.M.Y())[0];
    y = nameSpace1.calcoord3(nameSpace1.M.X(), nameSpace1.M.Y())[1]; 
    return "M(" + x.toFixed(2) + "," + y.toFixed(2) + ")";
}

nameSpace1.board.create('text', [-4, 4.5, nameSpace1.txt1], {color: 'blue'});
nameSpace1.board.create('text', [-4, 4, nameSpace1.txt2], {color: 'red'});
nameSpace1.board.create('text', [-4, -4, nameSpace1.txt3], {color: 'green'});
nameSpace1.board.create('text', [-4, -4.5, nameSpace1.txt4], {color: 'brown'});