/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace4 = {};
nameSpace4.xmin = -320; // adjust as needed
nameSpace4.xmax = +320; // adjust as needed
nameSpace4.ymin = -320; // adjust according max value of f
nameSpace4.ymax = +320; // adjust according min value of f
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false, showNavigation: false});
nameSpace4.a = 80;
nameSpace4.c = 100;
nameSpace4.b = 60;


function cosh(x)
{
    return (Math.exp(x) + Math.exp(-x)) / 2;
}
function sinh(x)
{
    return (Math.exp(x) - Math.exp(-x)) / 2;
}
nameSpace4.Mx = function ()
{
    var x = nameSpace4.slx.Value();
    return nameSpace4.a * cosh(x);
}
nameSpace4.My = function ()
{
    var x = nameSpace4.slx.Value();
    return nameSpace4.b * sinh(x);
}

nameSpace4.f = function (x)
{
    return nameSpace4.b * Math.sqrt(1 - x * x / (nameSpace4.a * nameSpace4.a));
}
nameSpace4.Again = function ()
{
    nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false, showNavigation: false});
    nameSpace4.Paint();

}

nameSpace4.calR = function ()
{
    var x1, y1, x2, y2;
    x1 = nameSpace4.F1.X();
    y1 = nameSpace4.F1.Y();
    x2 = nameSpace4.D.X();
    y2 = nameSpace4.D.Y();
    var d = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    return Math.sqrt(d);
}
nameSpace4.Paint = function ()
{
    nameSpace4.slx = nameSpace4.board.create('slider', [[-600, 300], [-500, 300], [2, 2, -2]], {visible: false, color: 'white'});
    nameSpace4.D = nameSpace4.board.create('point', [nameSpace4.a * cosh(2), nameSpace4.b * sinh(2)], {size: 1, color: 'blue', fixed: 'true', withLabel: false});
    nameSpace4.A = nameSpace4.board.create('point', [nameSpace4.a * cosh(-2), nameSpace4.b * sinh(-2)], {size: 1, color: 'blue', fixed: 'true', withLabel: false});
    nameSpace4.F1 = nameSpace4.board.create('point', [nameSpace4.c, 0], {size: 4, fixed: true, withLabel: false, visible: true});
    nameSpace4.F2 = nameSpace4.board.create('point', [-nameSpace4.c, 0], {size: 1, fixed: true, withLabel: false, visible: false});
    nameSpace4.R = nameSpace4.calR();
    nameSpace4.K = nameSpace4.board.create('circle', [nameSpace4.F1, nameSpace4.R], {visible:false});
    nameSpace4.clou2 = nameSpace4.board.create('image', ['images/clou_noeud.gif', [nameSpace4.F2.X() - 20, 0], [40, 40]]);
    nameSpace4.M = nameSpace4.board.create('point', [nameSpace4.Mx, nameSpace4.My], {name: 'M', visible: false});
    nameSpace4.MF1 = nameSpace4.board.create('segment', [nameSpace4.M, nameSpace4.F1], {color: 'grey', dash:1});
    nameSpace4.L = nameSpace4.board.create('line', [nameSpace4.M, nameSpace4.F1], {visible:false});
    nameSpace4.N=nameSpace4.board.create('intersection', [nameSpace4.K,nameSpace4.L,1],{size:4, withLabel:false});
    nameSpace4.MF2 = nameSpace4.board.create('segment', [nameSpace4.M, nameSpace4.F2], {color: 'black'});
    nameSpace4.MN = nameSpace4.board.create('segment', [nameSpace4.M, nameSpace4.N], {color: 'black'});
    nameSpace4.clou1 = nameSpace4.board.create('image', ['images/clou_noeud.gif', [function(){return nameSpace4.N.X()-20;}, function(){return nameSpace4.N.Y();}], [40, 40]]);
    nameSpace4.ruler = nameSpace4.board.create('segment', [nameSpace4.F1, nameSpace4.N], {color: 'brown', strokeWidth:15, opacity:0.4});
    nameSpace4.crayon = nameSpace4.board.create('image', ['images/crayon.png', [nameSpace4.Mx, nameSpace4.My], [50, 60]]);
    nameSpace4.C = nameSpace4.board.create('curve', [function (t) {
            return nameSpace4.a * cosh(t);
        }, function (t) {
            return nameSpace4.b * sinh(t);
        }, 2, function () {
            return nameSpace4.slx.Value();
        }], {visible: true});
    nameSpace4.slx.moveTo([-200, 300], 20000);
}

nameSpace4.Paint();
