var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -1; // adjust according max value of f
nameSpace1.ymax = +9; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.f = function (x)
{
    return 0.4 * x * x;
}

nameSpace1.px = function ()
{
    return nameSpace1.M0.X() + 1;
}

nameSpace1.py = function ()
{
    var u = nameSpace1.M0.X();
    return nameSpace1.f(u) + 0.8 * u;
}

nameSpace1.ptan = function ()
{
    return 0.8 * nameSpace1.M0.X();
}

nameSpace1.psec = function ()
{
    var u0, u1, v0, v1;
    u0 = nameSpace1.N0.X();
    u1 = nameSpace1.N.X();
    v0 = nameSpace1.f(u0);
    v1 = nameSpace1.f(u1);
    if (u0 == u1)
        return nameSpace1.ptan();
    else
        return (v1 - v0) / (u1 - u0);

}
nameSpace1.txt1=function ()
{
    return "h="+(nameSpace1.M.X()-nameSpace1.M0.X()).toFixed(2);
}

nameSpace1.txt2=function ()
{
    return "pente sécante="+nameSpace1.psec().toFixed(2);
}
nameSpace1.txt3=function ()
{
    return "pente tangente="+nameSpace1.ptan().toFixed(2);
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.A = nameSpace1.board.create('point', [-3, 0], {visible: false});
    nameSpace1.B = nameSpace1.board.create('point', [3, 0], {visible: false});
    nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {straightFirst: false, straightLast: false, visible: false});
    nameSpace1.M0 = nameSpace1.board.create('point', [2, 0], {slideObject: nameSpace1.AB, size: 1, name: 'x<sub>0</sub>',withLabel: true});
    nameSpace1.M1 = nameSpace1.board.create('point', [function f() {
            return nameSpace1.M0.X() - 2;
        }, 0], {visible: false});
    nameSpace1.M2 = nameSpace1.board.create('point', [function f() {
            return nameSpace1.M0.X() + 2;
        }, 0], {visible: false});
    nameSpace1.M1M2 = nameSpace1.board.create('line', [nameSpace1.M1, nameSpace1.M2], {straightFirst: false, straightLast: false, visible: false});
    nameSpace1.M = nameSpace1.board.create('point', [3, 0], {slideObject: nameSpace1.M1M2, size: 1, name: 'x<sub>0</sub>+h',withLabel: true});
    nameSpace1.N0 = nameSpace1.board.create('point', [function () {
            return nameSpace1.M0.X();
        }, function () {
            return nameSpace1.f(nameSpace1.M0.X());
        }], {size: 1, withLabel: false})
    nameSpace1.N = nameSpace1.board.create('point', [function () {
            return nameSpace1.M.X();
        }, function () {
            return nameSpace1.f(nameSpace1.M.X());
        }], {size: 1, withLabel: false})
    nameSpace1.M0N0 = nameSpace1.board.create('line', [nameSpace1.M0, nameSpace1.N0], {straightFirst: false, straightLast: false, visible: true});
    nameSpace1.M0N0 = nameSpace1.board.create('line', [nameSpace1.M, nameSpace1.N], {straightFirst: false, straightLast: false, visible: true});
    nameSpace1.N0N = nameSpace1.board.create('line', [nameSpace1.N0, nameSpace1.N], {straightFirst: true, straightLast: true, visible: true});
    nameSpace1.P = nameSpace1.board.create('point', [nameSpace1.px, nameSpace1.py], {visible: false});
    nameSpace1.T = nameSpace1.board.create('line', [nameSpace1.N0, nameSpace1.P], {color: 'red'})
    nameSpace1.board.create('text',[1,8,nameSpace1.txt1]);
    nameSpace1.board.create('text',[1,7.5,nameSpace1.txt2], {color:'blue'});
    nameSpace1.board.create('text',[1,7,nameSpace1.txt3], {color:'red'});
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();