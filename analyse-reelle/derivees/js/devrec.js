var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.f = function (x)
{
    return x * x * x / 25;
}

nameSpace1.g = function (x)
{
    if (x >= 0)
        return Math.pow(25 * x, 1 / 3);
    else
        return -Math.pow(-25 * x, 1 / 3);

}

nameSpace1.px = function ()
{
    return nameSpace1.M0.X() + 1;
}

nameSpace1.py = function ()
{
    var u = nameSpace1.M0.X();
    return 3*u*u/25+nameSpace1.f(u);
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
nameSpace1.txt1 = function ()
{
    return "h=" + (nameSpace1.M.X() - nameSpace1.M0.X()).toFixed(2);
}

nameSpace1.txt2 = function ()
{
    return "pente sécante=" + nameSpace1.psec().toFixed(2);
}
nameSpace1.txt3 = function ()
{
    return "pente tangente=" + nameSpace1.ptan().toFixed(2);
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.O = nameSpace1.board.create('point', [0, 0], {visible: false});
    nameSpace1.D = nameSpace1.board.create('point', [1, 1], {visible: false});
    nameSpace1.Delta = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.D], {color: 'brown'})
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.g, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'blue'});
    nameSpace1.A = nameSpace1.board.create('point', [-3, 0], {visible: false});
    nameSpace1.B = nameSpace1.board.create('point', [3, 0], {visible: false});
    nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {straightFirst: false, straightLast: false, visible: false});
    nameSpace1.M0 = nameSpace1.board.create('point', [2, 0], {slideObject: nameSpace1.AB, size: 1, name: 'x<sub>0</sub>', withLabel: true});
    nameSpace1.M1 = nameSpace1.board.create('point', [function f() {
            return nameSpace1.M0.X() - 2;
        }, 0], {visible: false});
    nameSpace1.M2 = nameSpace1.board.create('point', [function f() {
            return nameSpace1.M0.X() + 2;
        }, 0], {visible: false});
    nameSpace1.M1M2 = nameSpace1.board.create('line', [nameSpace1.M1, nameSpace1.M2], {straightFirst: false, straightLast: false, visible: false});
    nameSpace1.M = nameSpace1.board.create('point', [3, 0], {slideObject: nameSpace1.M1M2, size: 1, name: 'x<sub>0</sub>+h', withLabel: true});
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
    nameSpace1.M0N0 = nameSpace1.board.create('line', [nameSpace1.M0, nameSpace1.N0], {straightFirst: false, straightLast: false, visible: true, color:'black'});
    nameSpace1.MN = nameSpace1.board.create('line', [nameSpace1.M, nameSpace1.N], {straightFirst: false, straightLast: false, visible: true, color:'black'});
    nameSpace1.N0N = nameSpace1.board.create('line', [nameSpace1.N0, nameSpace1.N], {straightFirst: true, straightLast: true, visible: true, color:'black'});
    nameSpace1.P = nameSpace1.board.create('point', [nameSpace1.px, nameSpace1.py], {visible: false});
    nameSpace1.SP = nameSpace1.board.create('point', [nameSpace1.py, nameSpace1.px], {visible: false});
    nameSpace1.T = nameSpace1.board.create('line', [nameSpace1.N0, nameSpace1.P], {color: 'red'});
    
    nameSpace1.SM0=nameSpace1.board.create('point',[function (){return nameSpace1.M0.Y()},function (){return nameSpace1.M0.X()}],{size:1, color:'red', withLabel:false});
    nameSpace1.SN0=nameSpace1.board.create('point',[function (){return nameSpace1.N0.Y()},function (){return nameSpace1.N0.X()}],{size:1, color:'red', withLabel:false});
    nameSpace1.SM=nameSpace1.board.create('point',[function (){return nameSpace1.M.Y()},function (){return nameSpace1.M.X()}],{size:1, color:'red', withLabel:false});
    nameSpace1.SN=nameSpace1.board.create('point',[function (){return nameSpace1.N.Y()},function (){return nameSpace1.N.X()}],{size:1, color:'red', withLabel:false});
nameSpace1.SM0SN0 = nameSpace1.board.create('line', [nameSpace1.SM0, nameSpace1.SN0], {straightFirst: false, straightLast: false, visible: true, color:'black'});    
nameSpace1.SMSN = nameSpace1.board.create('line', [nameSpace1.SM, nameSpace1.SN], {straightFirst: false, straightLast: false, visible: true, color:'black'});
nameSpace1.SN0SN = nameSpace1.board.create('line', [nameSpace1.SN0, nameSpace1.SN], {straightFirst: true, straightLast: true, visible: true, color:'black'});
nameSpace1.ST = nameSpace1.board.create('line', [nameSpace1.SN0, nameSpace1.SP], {color: 'red'});
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();