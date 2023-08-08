var nameSpace1 = {};
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.sla = nameSpace1.board.create('slider', [[-4, -3.5], [-2, -3.5], [3, 3.5, 5]], {snapWidth: 0.1});
nameSpace1.slc = nameSpace1.board.create('slider', [[-4, -4], [-2, -4], [0, 2, 3]], {snapWidth: 0.1});
nameSpace1.F1x = function ()
{
    return nameSpace1.slc.Value();

}

nameSpace1.F1y = function ()
{
    return 0;
}

nameSpace1.F1 = nameSpace1.board.create('point', [nameSpace1.F1x, nameSpace1.F1y], {size: 1, color: 'red', name: 'F', visible: true});

nameSpace1.F2x = function ()
{
    return -nameSpace1.slc.Value();
}

nameSpace1.F2y = function ()
{
    return 0;
}

nameSpace1.F2 = nameSpace1.board.create('point', [nameSpace1.F2x, nameSpace1.F2y], {size: 1, color: 'red', name: "F'", visible: true});
nameSpace1.grandAxe = function ()
{
    return 2 * nameSpace1.sla.Value();
}
nameSpace1.E = nameSpace1.board.create('ellipse', [nameSpace1.F1, nameSpace1.F2, nameSpace1.grandAxe]);

nameSpace1.M = nameSpace1.board.create('glider', [nameSpace1.E], {size: 1, name:'M'});
nameSpace1.MF1 = nameSpace1.board.create('segment', [nameSpace1.M, nameSpace1.F1]);
nameSpace1.MF2 = nameSpace1.board.create('segment', [nameSpace1.M, nameSpace1.F2]);
nameSpace1.txt1 = function ()
{
    return "a=" + nameSpace1.sla.Value().toFixed(2) + "&nbsp;&nbsp;&nbsp;&nbsp; 2a=" + 2 * nameSpace1.sla.Value().toFixed(2);
}
nameSpace1.board.create('text', [-1, -3.5, nameSpace1.txt1]);

nameSpace1.txt2 = function ()
{
    return "c=" + nameSpace1.slc.Value().toFixed(2);
}
nameSpace1.board.create('text', [-1, -4, nameSpace1.txt2]);

nameSpace1.txt3 = function ()
{
    return "MF=" + nameSpace1.MF1.L().toFixed(2);
}
nameSpace1.board.create('text', [2, -3.5, nameSpace1.txt3]);
nameSpace1.txt4= function ()
{
    return "MF'=" + nameSpace1.MF2.L().toFixed(2);
}
nameSpace1.board.create('text', [2, -4, nameSpace1.txt4]);