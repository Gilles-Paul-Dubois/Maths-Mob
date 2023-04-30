/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace2 = {};
nameSpace2.xmin = -320; // adjust as needed
nameSpace2.xmax = +320; // adjust as needed
nameSpace2.ymin = -160; // adjust according max value of f
nameSpace2.ymax = +160; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false, showNavigation: false});

nameSpace2.f = function (x)
{
    if (x < 0)
        return x * x / 800 - 100;
    else
        return x * x / 800 - 50;
}

nameSpace2.Cx = function ()
{
    return nameSpace2.generic.X();
}
nameSpace2.Cy = function ()
{
    return nameSpace2.generic.Y();
}


nameSpace2.Paint = function ()
{
    nameSpace2.curve = nameSpace2.board.create('functiongraph', [nameSpace2.f], {visible: false});
    nameSpace2.generic = nameSpace2.board.create('point', [-320, nameSpace2.f(-320)], {slideObject: nameSpace2.curve, visible: false});
    nameSpace2.curve2 = nameSpace2.board.create('functiongraph', [nameSpace2.f, -320, nameSpace2.Cx], {visible: true});
    nameSpace2.crayon = nameSpace2.board.create('image', ['images/crayon.png', [nameSpace2.Cx, nameSpace2.Cy], [50, 60]]);
    nameSpace2.generic.moveTo([320, nameSpace2.f(320)], 10000);
}

nameSpace2.Paint();
