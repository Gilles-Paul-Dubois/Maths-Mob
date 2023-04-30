var nameSpace7 = {};
nameSpace7.xmin = -1; // adjust as needed
nameSpace7.xmax = +5; // adjust as needed
nameSpace7.ymin = -3; // adjust according max value of f
nameSpace7.ymax = +5; // adjust according min value of f
nameSpace7.board = null;
nameSpace7.n = 0;
nameSpace7.delta = 0;
nameSpace7.f = function (x)
{
    return 3 -2*Math.sin(x)/(x+2);
}
nameSpace7.g = function (x)
{
    return 3;
}
nameSpace7.zoomplus = function ()
{
    if (nameSpace7.n >= 3)
        return;
    else
    {
        nameSpace7.n++;
        nameSpace7.xmax *= 2;
         nameSpace7.board = JXG.JSXGraph.freeBoard(nameSpace7.board);
        nameSpace7.Paint();
    }
}
nameSpace7.zoommoins = function ()
{
    if (nameSpace7.n == 0)
        return;
    else
    {
        nameSpace7.n--;
        nameSpace7.xmax /= 2;
        nameSpace7.board = JXG.JSXGraph.freeBoard(nameSpace7.board);
        nameSpace7.Paint();
    }
}
nameSpace7.deltaval = function ()
{
    return "\u03b4=" + (nameSpace7.I2.Y() - nameSpace7.I1.Y()).toFixed(3);
}
nameSpace7.Paint = function ()
{
    nameSpace7.board = JXG.JSXGraph.initBoard('box7', {boundingbox: [nameSpace7.xmin, nameSpace7.ymax, nameSpace7.xmax, nameSpace7.ymin], axis: true});
    nameSpace7.F = nameSpace7.board.createElement('functiongraph', [nameSpace7.f, nameSpace7.xmin, nameSpace7.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace7.G = nameSpace7.board.createElement('functiongraph', [nameSpace7.g, nameSpace7.xmin, nameSpace7.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace7.A = nameSpace7.board.create('point', [3, 2], {size: 1, withLabel: false});
    nameSpace7.B = nameSpace7.board.create('point', [function () {
            return nameSpace7.A.X();
        }, 50], {size: 1, visible: false});
    nameSpace7.V = nameSpace7.board.create('line', [nameSpace7.A, nameSpace7.B], {color: 'red'});
    nameSpace7.I1 = nameSpace7.board.create('intersection', [nameSpace7.V, nameSpace7.F], {size: 1, withLabel: false, color: 'green'});
    nameSpace7.I2 = nameSpace7.board.create('intersection', [nameSpace7.V, nameSpace7.G], {size: 1, withLabel: false, color: 'blue'});
    nameSpace7.delta = nameSpace7.I2.Y() - nameSpace7.I1.Y();
    nameSpace7.board.create('text', [2, 4, nameSpace7.deltaval], {color: 'red'});

}
nameSpace7.Paint();