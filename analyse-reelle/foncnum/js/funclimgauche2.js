var nameSpace2 = {};
nameSpace2.xmin = -10; // adjust as needed
nameSpace2.xmax = +10; // adjust as needed
nameSpace2.ymin = -10; // adjust according max value of f
nameSpace2.ymax = +10; // adjust according min value of f
nameSpace2.board = null;
nameSpace2.zoom = 0;
nameSpace2.f = function (x)
{
    return 1/x;
}
nameSpace2.zoomplus = function ()
{
    if (nameSpace2.zoom < 3)
    {
        nameSpace2.zoom++;
        nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
        nameSpace2.xmin /= 10;
        nameSpace2.xmax /= 10;
        nameSpace2.ymin *= 10;
        nameSpace2.ymax *= 10;
        nameSpace2.Paint();
    }
}

nameSpace2.zoommoins = function ()
{
    if (nameSpace2.zoom <=3 && nameSpace2.zoom > 0)
    {
        nameSpace2.zoom--;
        nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
        nameSpace2.xmin *= 10;
        nameSpace2.xmax *= 10;
        nameSpace2.ymin /= 10;
        nameSpace2.ymax /= 10;
        nameSpace2.Paint();
    }
}
nameSpace2.Paint = function ()
{

    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'blue', strokeWidth: '4px'});

}
nameSpace2.Paint();