var nameSpace1 = {};
nameSpace1.xmin = -10; // adjust as needed
nameSpace1.xmax = +10; // adjust as needed
nameSpace1.ymin = -10; // adjust according max value of f
nameSpace1.ymax = +10; // adjust according min value of f
nameSpace1.board = null;
nameSpace1.zoom = 0;

nameSpace1.f = function (x)
{
    return Math.floor(x);
}

nameSpace1.zoomplus = function ()
{
    if (nameSpace1.zoom < 3)
    {
        nameSpace1.zoom++;
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        nameSpace1.xmin /= 2;
        nameSpace1.xmax /= 2;
        nameSpace1.ymin /= 2;
        nameSpace1.ymax /= 2;
        nameSpace1.Paint();
    }
}

nameSpace1.zoommoins = function ()
{
    if (nameSpace1.zoom <= 3 && nameSpace1.zoom > 0)
    {
        nameSpace1.zoom--;
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        nameSpace1.xmin *= 2;
        nameSpace1.xmax *= 2;
        nameSpace1.ymin *= 2;
        nameSpace1.ymax *= 2;
        nameSpace1.Paint();
    }
}
nameSpace1.Paint = function ()
{

    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    var x1,x2;
    x1=Math.floor(nameSpace1.xmin)+1;
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, x1, nameSpace1.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    var i;
    for (i = -10; i <= 10; i++)
    {
        nameSpace1.board.create('point', [i, i], {withLabel: false, size: 1, color: 'blue'});
        nameSpace1.board.create('point', [i, i - 1], {withLabel: false, size: 1, color: 'white'});
    }

}
nameSpace1.Paint();