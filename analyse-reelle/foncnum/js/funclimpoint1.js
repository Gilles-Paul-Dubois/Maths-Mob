var nameSpace1 = {};
nameSpace1.xmin = -10; // adjust as needed
nameSpace1.xmax = +10; // adjust as needed
nameSpace1.ymin = -10; // adjust according max value of f
nameSpace1.ymax = +10; // adjust according min value of f
nameSpace1.board = null;
nameSpace1.zoom = 0;
nameSpace1.f = function (x)
{
    return x * Math.sin(1 / x);
}
nameSpace1.zoomplus = function ()
{
    if (nameSpace1.zoom < 3)
    {
        nameSpace1.zoom++;
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        nameSpace1.xmin /= 10;
        nameSpace1.xmax /= 10;
        nameSpace1.ymin /= 10;
        nameSpace1.ymax /= 10;
        nameSpace1.Paint();
    }
}

nameSpace1.zoommoins = function ()
{
    if (nameSpace1.zoom <=3 && nameSpace1.zoom > 0)
    {
        nameSpace1.zoom--;
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        nameSpace1.xmin *= 10;
        nameSpace1.xmax *= 10;
        nameSpace1.ymin *= 10;
        nameSpace1.ymax *= 10;
        nameSpace1.Paint();
    }
}
nameSpace1.Paint = function ()
{

    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'blue', strokeWidth: '4px'});

}
nameSpace1.Paint();