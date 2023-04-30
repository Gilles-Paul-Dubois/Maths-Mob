/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace1 = {};
nameSpace1.xmin = -320; // adjust as needed
nameSpace1.xmax = +320; // adjust as needed
nameSpace1.ymin = -160; // adjust according max value of f
nameSpace1.ymax = +160; // adjust according min value of f
nameSpace1.board = null;

nameSpace1.f = function (x)
{
    return x * x / 800 - 100;
}

nameSpace1.Cx = function ()
{
    return nameSpace1.generic.X();
}
nameSpace1.Cy = function ()
{
    return nameSpace1.generic.Y();
}


nameSpace1.Paint = function ()
{
    if (nameSpace1.board !==null)
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false, showNavigation: false});
    nameSpace1.A = nameSpace1.board.create('point', [-300, nameSpace1.f(-300)], {size: 1, color: 'red'});
    nameSpace1.B = nameSpace1.board.create('point', [250, nameSpace1.f(250)], {size: 1, color: 'red'});
    nameSpace1.C = nameSpace1.board.create('point', [0, nameSpace1.f(0)], {size: 1, color: 'red'});
    nameSpace1.curve = nameSpace1.board.create('functiongraph', [nameSpace1.f], {visible: false});
    nameSpace1.droite = nameSpace1.board.create('functiongraph', [function () {
            return -50;
        }], {visible: true, color: 'red'});
    nameSpace1.generic = nameSpace1.board.create('point', [-320, nameSpace1.f(-320)], {slideObject: nameSpace1.curve, visible: false});
    nameSpace1.curve2 = nameSpace1.board.create('functiongraph', [nameSpace1.f, -320, nameSpace1.Cx], {visible: true});
    nameSpace1.crayon = nameSpace1.board.create('image', ['images/crayon.png', [nameSpace1.Cx, nameSpace1.Cy], [50, 60]]);
    nameSpace1.generic.moveTo([320, nameSpace1.f(320)], 10000);
    nameSpace1.I1 = nameSpace1.board.create('intersection', [nameSpace1.droite, nameSpace1.curve2, 0], {size: 1, color: 'green'});
    nameSpace1.I1 = nameSpace1.board.create('intersection', [nameSpace1.droite, nameSpace1.curve2, 1], {size: 1, color: 'green'});
}

nameSpace1.Paint();
