var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +5; // adjust as needed
nameSpace2.ymin = -3; // adjust according max value of f
nameSpace2.ymax = +5; // adjust according min value of f
nameSpace2.board = null;
nameSpace2.n = 0;
nameSpace2.delta = 0;
nameSpace2.f = function (x)
{
    return 3 -1/(x+2);
}
nameSpace2.g = function (x)
{
    return 3;
}
nameSpace2.zoomplus = function ()
{
    if (nameSpace2.n >= 3)
        return;
    else
    {
        nameSpace2.n++;
        nameSpace2.xmax *= 2;
         nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
        nameSpace2.Paint();
    }
}
nameSpace2.zoommoins = function ()
{
    if (nameSpace2.n == 0)
        return;
    else
    {
        nameSpace2.n--;
        nameSpace2.xmax /= 2;
        nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
        nameSpace2.Paint();
    }
}
nameSpace2.deltaval = function ()
{
    return "\u03b4=" + (nameSpace2.I2.Y() - nameSpace2.I1.Y()).toFixed(3);
}
nameSpace2.Paint = function ()
{
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    nameSpace2.F = nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace2.G = nameSpace2.board.createElement('functiongraph', [nameSpace2.g, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace2.A = nameSpace2.board.create('point', [3, 2], {size: 1, withLabel: false});
    nameSpace2.B = nameSpace2.board.create('point', [function () {
            return nameSpace2.A.X();
        }, 50], {size: 1, visible: false});
    nameSpace2.V = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {color: 'red'});
    nameSpace2.I1 = nameSpace2.board.create('intersection', [nameSpace2.V, nameSpace2.F], {size: 1, withLabel: false, color: 'green'});
    nameSpace2.I2 = nameSpace2.board.create('intersection', [nameSpace2.V, nameSpace2.G], {size: 1, withLabel: false, color: 'blue'});
    nameSpace2.delta = nameSpace2.I2.Y() - nameSpace2.I1.Y();
    nameSpace2.board.create('text', [2, 4, nameSpace2.deltaval], {color: 'red'});

}
nameSpace2.Paint();