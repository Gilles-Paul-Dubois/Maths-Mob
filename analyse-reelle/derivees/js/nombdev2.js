var nameSpace2 = {};
nameSpace2.xmin = -5; // adjust as needed
nameSpace2.xmax = +5; // adjust as needed
nameSpace2.ymin = -1; // adjust according max value of f
nameSpace2.ymax = +9; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.f = function (x)
{
    return 0.4 * x * x;
}

nameSpace2.px = function ()
{
    return nameSpace2.M0.X() + 1;
}

nameSpace2.py = function ()
{
    var u = nameSpace2.M0.X();
    return nameSpace2.f(u) + 0.8 * u;
}

nameSpace2.ptan = function ()
{
    return 0.8 * nameSpace2.M0.X();
}

nameSpace2.deltasurh = function ()
{
    var u0, u1, v0, v1;
    u0 = nameSpace2.N0.X();
    u1 = nameSpace2.N.X();
    v0 = nameSpace2.f(u0);
    v1 = nameSpace2.f(u1);
    return v1-v0-nameSpace2.ptan()*(u1-u0);

}
nameSpace2.txt1=function ()
{
    return "h="+(nameSpace2.M.X()-nameSpace2.M0.X()).toFixed(3);
}

nameSpace2.txt2=function ()
{
    return "&delta;(h)/h="+nameSpace2.deltasurh().toFixed(3);
}


nameSpace2.Paint = function ()
{
    nameSpace2.board.suspendUpdate();
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'green'});
    nameSpace2.A = nameSpace2.board.create('point', [-3, 0], {visible: false});
    nameSpace2.B = nameSpace2.board.create('point', [3, 0], {visible: false});
    nameSpace2.AB = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {straightFirst: false, straightLast: false, visible: false});
    nameSpace2.M0 = nameSpace2.board.create('point', [2, 0], {slideObject: nameSpace2.AB, size: 1, name: 'x<sub>0</sub>',withLabel: true});
    nameSpace2.M1 = nameSpace2.board.create('point', [function f() {
            return nameSpace2.M0.X() - 2;
        }, 0], {visible: false});
    nameSpace2.M2 = nameSpace2.board.create('point', [function f() {
            return nameSpace2.M0.X() + 2;
        }, 0], {visible: false});
    nameSpace2.M1M2 = nameSpace2.board.create('line', [nameSpace2.M1, nameSpace2.M2], {straightFirst: false, straightLast: false, visible: false});
    nameSpace2.M = nameSpace2.board.create('point', [3, 0], {slideObject: nameSpace2.M1M2, size: 1, name: 'x<sub>0</sub>+h',withLabel: true});
    nameSpace2.N0 = nameSpace2.board.create('point', [function () {
            return nameSpace2.M0.X();
        }, function () {
            return nameSpace2.f(nameSpace2.M0.X());
        }], {size: 1, withLabel: false})
    nameSpace2.N = nameSpace2.board.create('point', [function () {
            return nameSpace2.M.X();
        }, function () {
            return nameSpace2.f(nameSpace2.M.X());
        }], {size: 1, withLabel: false})
    nameSpace2.M0N0 = nameSpace2.board.create('line', [nameSpace2.M0, nameSpace2.N0], {straightFirst: false, straightLast: false, visible: true});
    nameSpace2.M0N0 = nameSpace2.board.create('line', [nameSpace2.M, nameSpace2.N], {straightFirst: false, straightLast: false, visible: true});
    nameSpace2.N0N = nameSpace2.board.create('line', [nameSpace2.N0, nameSpace2.N], {straightFirst: true, straightLast: true, visible: true});
    nameSpace2.P = nameSpace2.board.create('point', [nameSpace2.px, nameSpace2.py], {visible: false});
    nameSpace2.T = nameSpace2.board.create('line', [nameSpace2.N0, nameSpace2.P], {color: 'red'})
    nameSpace2.board.create('text',[1,8,nameSpace2.txt1]);
    nameSpace2.board.create('text',[1,7.5,nameSpace2.txt2], {color:'black'});
    
    nameSpace2.board.unsuspendUpdate();
}
nameSpace2.Paint();