var nameSpace2 = {};
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.sla = nameSpace2.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 2, 3]], {snapWidth: 0.1});
nameSpace2.slc = nameSpace2.board.create('slider', [[-4, -4], [-2, -4], [3, 2.5, 4]], {snapWidth: 0.1});
nameSpace2.F1x = function ()
{
    return nameSpace2.slc.Value();

}

nameSpace2.F1y = function ()
{
    return 0;
}

nameSpace2.F1 = nameSpace2.board.create('point', [nameSpace2.F1x, nameSpace2.F1y], {size: 1, color: 'red', name: 'F', visible: true});

nameSpace2.F2x = function ()
{
    return -nameSpace2.slc.Value();
}

nameSpace2.F2y = function ()
{
    return 0;
}

nameSpace2.F2 = nameSpace2.board.create('point', [nameSpace2.F2x, nameSpace2.F2y], {size: 1, color: 'red', name: "F'", visible: true});
nameSpace2.grandAxe = function ()
{
    return 2 * nameSpace2.sla.Value();
}
nameSpace2.H = nameSpace2.board.create('hyperbola', [nameSpace2.F1, nameSpace2.F2, nameSpace2.grandAxe]);

nameSpace2.M = nameSpace2.board.create('glider', [nameSpace2.H], {size: 1, name:'M'});
nameSpace2.MF1 = nameSpace2.board.create('segment', [nameSpace2.M, nameSpace2.F1]);
nameSpace2.MF2 = nameSpace2.board.create('segment', [nameSpace2.M, nameSpace2.F2]);
nameSpace2.txt1 = function ()
{
    return "a=" + nameSpace2.sla.Value().toFixed(2) + "&nbsp;&nbsp;&nbsp;&nbsp; 2a=" + 2 * nameSpace2.sla.Value().toFixed(2);
}
nameSpace2.board.create('text', [-1, -3.5, nameSpace2.txt1]);

nameSpace2.txt2 = function ()
{
    return "c=" + nameSpace2.slc.Value().toFixed(2);
}
nameSpace2.board.create('text', [-1, -4, nameSpace2.txt2]);

nameSpace2.txt3 = function ()
{
    return "MF=" + nameSpace2.MF1.L().toFixed(2);
}
nameSpace2.board.create('text', [2, -3.5, nameSpace2.txt3]);
nameSpace2.txt4= function ()
{
    return "MF'=" + nameSpace2.MF2.L().toFixed(2);
}
nameSpace2.board.create('text', [2, -4, nameSpace2.txt4]);