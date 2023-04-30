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
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false, showNavigation: false});
   
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
    nameSpace1.curve = nameSpace1.board.create('functiongraph', [nameSpace1.f], {visible: false});
    nameSpace1.generic = nameSpace1.board.create('point', [-320, nameSpace1.f(-320)], {slideObject: nameSpace1.curve, visible: false});
    nameSpace1.curve2 = nameSpace1.board.create('functiongraph', [nameSpace1.f, -320, nameSpace1.Cx], {visible: true});
    nameSpace1.crayon = nameSpace1.board.create('image', ['images/crayon.png', [nameSpace1.Cx, nameSpace1.Cy], [50, 60]]);
    nameSpace1.generic.moveTo([320, nameSpace1.f(320)], 10000);
}

nameSpace1.Paint();
