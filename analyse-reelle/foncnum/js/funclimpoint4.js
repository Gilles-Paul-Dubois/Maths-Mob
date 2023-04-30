var nameSpace4 = {};
nameSpace4.xmin = -10; // adjust as needed
nameSpace4.xmax = +10; // adjust as needed
nameSpace4.ymin = -2; // adjust according max value of f
nameSpace4.ymax = +2; // adjust according min value of f
nameSpace4.board = null;
nameSpace4.zoom = 0;
nameSpace4.f = function (x)
{
    return Math.sin(1 / x)/x;
}
nameSpace4.zoomplus = function ()
{
    if (nameSpace4.zoom < 1)
    {
        nameSpace4.zoom++;
        nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
        nameSpace4.xmin /= 10;
        nameSpace4.xmax /= 10;
        nameSpace4.ymin *= 100;
        nameSpace4.ymax *= 100;
        nameSpace4.Paint();
    }
}

nameSpace4.zoommoins = function ()
{
    if (nameSpace4.zoom <= 1 && nameSpace4.zoom > 0)
    {
        nameSpace4.zoom--;
        nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
        nameSpace4.xmin *= 10;
        nameSpace4.xmax *= 10;
        nameSpace4.ymin /= 100;
        nameSpace4.ymax /= 100;
        nameSpace4.Paint();
    }
}
nameSpace4.Paint = function ()
{

    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
    nameSpace4.board.createElement('functiongraph', [nameSpace4.f, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'blue', strokeWidth: '4px'});

}
nameSpace4.Paint();