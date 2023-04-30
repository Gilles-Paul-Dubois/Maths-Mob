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

nameSpace1.solve = function (f, a, b)
{
    var i, c;
    for (i = 0; i <= 9; i++)
    {
        c = (a * f(b) - b * f(a)) / (f(b) - f(a));
        if (f(a) * f(c) < 0)
            b = c;
        else
            a = c;
    }
    return c;
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.curve1 = nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.A = nameSpace1.board.create('point', [0, -2], {visible: false});
    nameSpace1.B = nameSpace1.board.create('point', [0, 1.75], {visible: false});
    nameSpace1.AB = nameSpace1.board.create('segment', [nameSpace1.A, nameSpace1.B], {visible: false});
    nameSpace1.M = nameSpace1.board.create('glider', [nameSpace1.AB], {size: 2, withLabel: false});
    nameSpace1.N = nameSpace1.board.create('point', [1, function () {
            return nameSpace1.M.Y();
        }], {visible: false});
    nameSpace1.MN = nameSpace1.board.create('line', [nameSpace1.M, nameSpace1.N], {color: 'red'});
    var g = function (x)
    {
        return nameSpace1.f(x) - nameSpace1.M.Y();
    }
    nameSpace1.P0 = nameSpace1.board.create('point', [function (x) {
            return nameSpace1.solve(g, -5, -3);
        }, 0], {size: 1, name: 'a', withLabel: true, color: 'blue'});
    nameSpace1.P1 = nameSpace1.board.create('point', [function (x) {
            return nameSpace1.solve(g, -3, +1);
        }, 0], {size: 1, name: 'b', withLabel: true, color: 'blue'})
    nameSpace1.P2 = nameSpace1.board.create('point', [function (x) {
            return nameSpace1.solve(g, 1, 4);
        }, 0], {size: 1, name: 'c', withLabel: true, color: 'blue'})

    nameSpace1.I0 = nameSpace1.board.create('point', [function () {
            return nameSpace1.P0.X();
        }, function () {
            return nameSpace1.f(nameSpace1.P0.X());
        }], {size:1, color:'blue',withLabel:false});
    nameSpace1.I1 = nameSpace1.board.create('point', [function () {
            return nameSpace1.P1.X();
        }, function () {
            return nameSpace1.f(nameSpace1.P1.X());
        }], {size:1, color:'blue',withLabel:false});
    nameSpace1.I2 = nameSpace1.board.create('point', [function () {
            return nameSpace1.P2.X();
        }, function () {
            return nameSpace1.f(nameSpace1.P2.X());
        }], {size:1, color:'blue',withLabel:false});    

    nameSpace1.board.unsuspendUpdate();
    nameSpace1.S0=nameSpace1.board.create('segment',[nameSpace1.P0,nameSpace1.I0], {color:'blue'});
    nameSpace1.S1=nameSpace1.board.create('segment',[nameSpace1.P1,nameSpace1.I1], {color:'blue'});
    nameSpace1.S2=nameSpace1.board.create('segment',[nameSpace1.P2,nameSpace1.I2], {color:'blue'});
    nameSpace1.MAX=nameSpace1.board.create('point',[-3,nameSpace1.f(-3)], {size:1, color:'brown', withLabel:false , fixed:true})
    nameSpace1.MIN=nameSpace1.board.create('point',[1,nameSpace1.f(1)], {size:1, color:'brown', withLabel:false , fixed:true})
}
nameSpace1.Paint();