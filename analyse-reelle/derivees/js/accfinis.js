var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});

nameSpace1.f = function (x)
{
    var a = 1 / 8;
    var b = 3 / 8;
    var c = -9 / 8;
    var d = -28 / 8 + 2;
    return a * x * x * x + b * x * x + c * x + d;
}

nameSpace1.df = function (x)
{
    var a = 1 / 8;
    var b = 3 / 8;
    var c = -9 / 8;
    var d = -28 / 8 + 2;
    return 3 * a * x * x + 2 * b * x + c;
}

nameSpace1.coeffdir = function ()
{
    return (nameSpace1.N.Y() - nameSpace1.M.Y()) / (nameSpace1.N.X() - nameSpace1.M.X());
}

nameSpace1.solve = function ()
{
    var error = 0.01;
    var step = 0.01;
    var x, y;
    var m = nameSpace1.M.X();
    var n = nameSpace1.N.X();
    for (x = m; x <= n; x += step)
    {
        y = nameSpace1.df(x);
        if (Math.abs(y - nameSpace1.X.Y()) < error)
            return x;
    }
}
nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.A1 = nameSpace1.board.create('point', [-4, 0], {visible: false});
    nameSpace1.A2 = nameSpace1.board.create('point', [-0.5, 0], {visible: false});
    nameSpace1.A1A2 = nameSpace1.board.create('segment', [nameSpace1.A1, nameSpace1.A2], {visible: false});
    nameSpace1.A = nameSpace1.board.create('glider', [nameSpace1.A1A2], {name: 'a', size: 1, color: 'red'});
    nameSpace1.M = nameSpace1.board.create('point', [function () {
            return nameSpace1.A.X();
        }, function () {
            return nameSpace1.f(nameSpace1.A.X());
        }], {size: 1, color: 'blue', withLabel: false});
    nameSpace1.board.create('segment', [nameSpace1.A, nameSpace1.M], {color: 'blue'});

    nameSpace1.B1 = nameSpace1.board.create('point', [1, 0], {visible: false});
    nameSpace1.B2 = nameSpace1.board.create('point', [3.5, 0], {visible: false});
    nameSpace1.B1B2 = nameSpace1.board.create('segment', [nameSpace1.B1, nameSpace1.B2], {visible: false});
    nameSpace1.B = nameSpace1.board.create('glider', [nameSpace1.B1B2], {name: 'b', size: 1, color: 'red'});
    nameSpace1.N = nameSpace1.board.create('point', [function () {
            return nameSpace1.B.X();
        }, function () {
            return nameSpace1.f(nameSpace1.B.X());
        }], {size: 1, color: 'blue', withLabel: false});
    nameSpace1.board.create('segment', [nameSpace1.B, nameSpace1.N], {color: 'blue'});

    nameSpace1.MN=nameSpace1.board.create('segment', [nameSpace1.M, nameSpace1.N], {color: 'blue'});

    nameSpace1.X = nameSpace1.board.create('point', [0, nameSpace1.coeffdir], {visible: false});
    var x=nameSpace1.solve();
    nameSpace1.P=nameSpace1.board.create('point',[function(){return nameSpace1.solve();},function(){return nameSpace1.f(nameSpace1.solve());}],{color:'brown',size:1});
    nameSpace1.T=nameSpace1.board.create('parallel',[nameSpace1.MN,nameSpace1.P]);
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();