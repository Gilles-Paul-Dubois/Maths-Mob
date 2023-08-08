/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace3 = {};
nameSpace3.xmin = -320; // adjust as needed
nameSpace3.xmax = +320; // adjust as needed
nameSpace3.ymin = -120; // adjust according max value of f
nameSpace3.ymax = +280; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false, showNavigation: false});
nameSpace3.a = 240;
nameSpace3.c = 160;
nameSpace3.b = 80 * Math.sqrt(5);


nameSpace3.Mx = function ()
{
    var x = nameSpace3.slx.Value();
    return nameSpace3.a * Math.cos(Math.PI - x * Math.PI / 180);
}
nameSpace3.My = function ()
{
    var x = nameSpace3.slx.Value();
    return nameSpace3.b * Math.sin(Math.PI - x * Math.PI / 180);
}

nameSpace3.f = function (x)
{
    return nameSpace3.b * Math.sqrt(1 - x * x / (nameSpace3.a * nameSpace3.a));
}
nameSpace3.Again = function ()
{
    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false, showNavigation: false});
    nameSpace3.Paint();

}
nameSpace3.Paint = function ()
{
    nameSpace3.slx = nameSpace3.board.create('slider', [[-600, 300], [-500, 300], [0, 0, 180]], {visible: false, color: 'white'});
    nameSpace3.F1 = nameSpace3.board.create('point', [nameSpace3.c, 0], {size: 1, fixed: true, withLabel: false, visible:false});
    nameSpace3.F2 = nameSpace3.board.create('point', [-nameSpace3.c, 0], {size: 1, fixed: true, withLabel: false, visible:false});
    nameSpace3.clou1 = nameSpace3.board.create('image', ['images/clou_noeud.gif', [nameSpace3.F1.X()-20, 0], [40, 40]]);
    nameSpace3.clou2 = nameSpace3.board.create('image', ['images/clou_noeud.gif', [nameSpace3.F2.X()-20, 0], [40, 40]]);
    nameSpace3.M = nameSpace3.board.create('point', [nameSpace3.Mx, nameSpace3.My], {name: 'M', visible: false});
    nameSpace3.MF1 = nameSpace3.board.create('segment', [nameSpace3.M, nameSpace3.F1], {color:'grey'});
    nameSpace3.MF2 = nameSpace3.board.create('segment', [nameSpace3.M, nameSpace3.F2], {color:'grey'});
    nameSpace3.E = nameSpace3.board.create('ellipse', [nameSpace3.F1, nameSpace3.F2, 2 * nameSpace3.a, 0, nameSpace3.slx.Value() * Math.PI / 180]);
    nameSpace3.crayon = nameSpace3.board.create('image', ['images/crayon.png', [nameSpace3.Mx, nameSpace3.My], [50, 60]]);
    nameSpace3.C = nameSpace3.board.create('functiongraph', [nameSpace3.f, -240, nameSpace3.Mx], {visible: true});
    nameSpace3.slx.moveTo([-200, 300], 10000);
}

nameSpace3.Paint();
