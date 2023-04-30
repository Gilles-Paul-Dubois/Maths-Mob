var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +9; // adjust as needed
nameSpace1.ymin = -3; // adjust according max value of f
nameSpace1.ymax = +17; // adjust according min value of f
nameSpace1.board = null;
nameSpace1.n = 0;
nameSpace1.delta = 0;
nameSpace1.f = function (x)
{
    return x * x / 4;
}
nameSpace1.g = function (x)
{
    return x * x / 4 + 20 / ((x + 2) * (x + 2));
}
nameSpace1.zoomplus = function ()
{
    if (nameSpace1.n >= 3)
        return;
    else
    {
        nameSpace1.n++;
        nameSpace1.xmax *= 2;
        nameSpace1.ymax *= 4;
        nameSpace1.ymin *= 2;
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        nameSpace1.Paint();
    }
}
nameSpace1.zoommoins = function ()
{
    if (nameSpace1.n == 0)
        return;
    else
    {
        nameSpace1.n--;
        nameSpace1.xmax /= 2;
        nameSpace1.ymax /= 4;
        nameSpace1.ymin /= 2;
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        nameSpace1.Paint();
    }
}
nameSpace1.deltaval = function ()
{
    return "\u03b4=" + (nameSpace1.I2.Y() - nameSpace1.I1.Y()).toFixed(3);
}
nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.F = nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.G = nameSpace1.board.createElement('functiongraph', [nameSpace1.g, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace1.A = nameSpace1.board.create('point', [5, 10], {size: 1, withLabel: false});
    nameSpace1.B = nameSpace1.board.create('point', [function () {
            return nameSpace1.A.X();
        }, 50], {size: 1, visible: false});
    nameSpace1.V = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {color: 'red'});
    nameSpace1.I1 = nameSpace1.board.create('intersection', [nameSpace1.V, nameSpace1.F], {size: 1, withLabel: false, color: 'green'});
    nameSpace1.I2 = nameSpace1.board.create('intersection', [nameSpace1.V, nameSpace1.G], {size: 1, withLabel: false, color: 'blue'});
    nameSpace1.delta = nameSpace1.I2.Y() - nameSpace1.I1.Y();
    nameSpace1.board.create('text', [2, nameSpace1.ymax - nameSpace1.n * 10 - 1, nameSpace1.deltaval], {color: 'red'});

}
nameSpace1.Paint();