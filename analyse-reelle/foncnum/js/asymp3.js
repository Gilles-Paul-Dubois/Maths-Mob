var nameSpace3 = {};
nameSpace3.xmin = -1; // adjust as needed
nameSpace3.xmax = +5; // adjust as needed
nameSpace3.ymin = -3; // adjust according max value of f
nameSpace3.ymax = +5; // adjust according min value of f
nameSpace3.board = null;
nameSpace3.n = 0;
nameSpace3.delta = 0;
nameSpace3.f = function (x)
{
    return x;
}
nameSpace3.g = function (x)
{
    return x+1/(x+1);
}
nameSpace3.zoomplus = function ()
{
    if (nameSpace3.n >= 3)
        return;
    else
    {
        nameSpace3.n++;
        nameSpace3.xmax *= 2;
        nameSpace3.ymax *= 2;
         nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
        nameSpace3.Paint();
    }
}
nameSpace3.zoommoins = function ()
{
    if (nameSpace3.n == 0)
        return;
    else
    {
        nameSpace3.n--;
        nameSpace3.xmax /= 2;
        nameSpace3.ymax /= 2;
        nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
        nameSpace3.Paint();
    }
}
nameSpace3.deltaval = function ()
{
    return "\u03b4=" + (nameSpace3.I2.Y() - nameSpace3.I1.Y()).toFixed(3);
}
nameSpace3.Paint = function ()
{
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
    nameSpace3.F = nameSpace3.board.createElement('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace3.G = nameSpace3.board.createElement('functiongraph', [nameSpace3.g, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace3.A = nameSpace3.board.create('point', [3, 2], {size: 1, withLabel: false});
    nameSpace3.B = nameSpace3.board.create('point', [function () {
            return nameSpace3.A.X();
        }, 50], {size: 1, visible: false});
    nameSpace3.V = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.B], {color: 'red'});
    nameSpace3.I1 = nameSpace3.board.create('intersection', [nameSpace3.V, nameSpace3.F], {size: 1, withLabel: false, color: 'green'});
    nameSpace3.I2 = nameSpace3.board.create('intersection', [nameSpace3.V, nameSpace3.G], {size: 1, withLabel: false, color: 'blue'});
    nameSpace3.delta = nameSpace3.I2.Y() - nameSpace3.I1.Y();
    nameSpace3.board.create('text', [2, nameSpace3.ymax-2, nameSpace3.deltaval], {color: 'red'});

}
nameSpace3.Paint();