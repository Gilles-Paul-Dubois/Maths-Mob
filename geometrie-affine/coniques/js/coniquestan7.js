var nameSpace7 = {};
nameSpace7.xmin = -5; // adjust as needed
nameSpace7.xmax = +5; // adjust as needed
nameSpace7.ymin = -1; // adjust according max value of f
nameSpace7.ymax = +9; // adjust according min value of f
nameSpace7.board = JXG.JSXGraph.initBoard('box7', {boundingbox: [nameSpace7.xmin, nameSpace7.ymax, nameSpace7.xmax, nameSpace7.ymin], axis: true});
nameSpace7.f = function (x)
{
    return 0.4 * x * x;
}

nameSpace7.px = function ()
{
    return nameSpace7.M0.X() + 1;
}

nameSpace7.py = function ()
{
    var u = nameSpace7.M0.X();
    return nameSpace7.f(u) + 0.8 * u;
}

nameSpace7.ptan = function ()
{
    return 0.8 * nameSpace7.M0.X();
}

nameSpace7.psec = function ()
{
    var u0, u1, v0, v1;
    u0 = nameSpace7.N0.X();
    u1 = nameSpace7.N.X();
    v0 = nameSpace7.f(u0);
    v1 = nameSpace7.f(u1);
    if (u0 == u1)
        return nameSpace7.ptan();
    else
        return (v1 - v0) / (u1 - u0);

}
nameSpace7.txt1=function ()
{
    return "h="+(nameSpace7.M.X()-nameSpace7.M0.X()).toFixed(2);
}

nameSpace7.txt2=function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pente sécante ="+nameSpace7.psec().toFixed(2);}
else
{ return "slope of secant ="+nameSpace7.psec().toFixed(2);}
}
nameSpace7.txt3=function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pente tangente ="+nameSpace7.ptan().toFixed(2);}
else
 { return "slope of tangent ="+nameSpace7.ptan().toFixed(2);}
}

nameSpace7.Paint = function ()
{
    nameSpace7.board.suspendUpdate();
    nameSpace7.board.createElement('functiongraph', [nameSpace7.f, nameSpace7.xmin, nameSpace7.xmax], {strokeColor: 'green'});
    nameSpace7.A = nameSpace7.board.create('point', [-3, 0], {visible: false});
    nameSpace7.B = nameSpace7.board.create('point', [3, 0], {visible: false});
    nameSpace7.AB = nameSpace7.board.create('line', [nameSpace7.A, nameSpace7.B], {straightFirst: false, straightLast: false, visible: false});
    nameSpace7.M0 = nameSpace7.board.create('point', [2, 0], {slideObject: nameSpace7.AB, size: 1, name: 'x<sub>0</sub>',withLabel: true});
    nameSpace7.M1 = nameSpace7.board.create('point', [function f() {
            return nameSpace7.M0.X() - 2;
        }, 0], {visible: false});
    nameSpace7.M2 = nameSpace7.board.create('point', [function f() {
            return nameSpace7.M0.X() + 2;
        }, 0], {visible: false});
    nameSpace7.M1M2 = nameSpace7.board.create('line', [nameSpace7.M1, nameSpace7.M2], {straightFirst: false, straightLast: false, visible: false});
    nameSpace7.M = nameSpace7.board.create('point', [3, 0], {slideObject: nameSpace7.M1M2, size: 1, name: 'x<sub>0</sub>+h',withLabel: true});
    nameSpace7.N0 = nameSpace7.board.create('point', [function () {
            return nameSpace7.M0.X();
        }, function () {
            return nameSpace7.f(nameSpace7.M0.X());
        }], {size: 1, withLabel: false})
    nameSpace7.N = nameSpace7.board.create('point', [function () {
            return nameSpace7.M.X();
        }, function () {
            return nameSpace7.f(nameSpace7.M.X());
        }], {size: 1, withLabel: false})
    nameSpace7.M0N0 = nameSpace7.board.create('line', [nameSpace7.M0, nameSpace7.N0], {straightFirst: false, straightLast: false, visible: true});
    nameSpace7.M0N0 = nameSpace7.board.create('line', [nameSpace7.M, nameSpace7.N], {straightFirst: false, straightLast: false, visible: true});
    nameSpace7.N0N = nameSpace7.board.create('line', [nameSpace7.N0, nameSpace7.N], {straightFirst: true, straightLast: true, visible: true});
    nameSpace7.P = nameSpace7.board.create('point', [nameSpace7.px, nameSpace7.py], {visible: false});
    nameSpace7.T = nameSpace7.board.create('line', [nameSpace7.N0, nameSpace7.P], {color: 'red'})
    nameSpace7.board.create('text',[1,8,nameSpace7.txt1]);
    nameSpace7.board.create('text',[1,7.5,nameSpace7.txt2], {color:'blue'});
    nameSpace7.board.create('text',[1,7,nameSpace7.txt3], {color:'red'});
    nameSpace7.board.unsuspendUpdate();
}
nameSpace7.Paint();


