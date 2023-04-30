var nameSpace3 = {};
nameSpace3.xmin = -10; // adjust as needed
nameSpace3.xmax = +10; // adjust as needed
nameSpace3.ymin = -2; // adjust according max value of f
nameSpace3.ymax = +2; // adjust according min value of f
nameSpace3.board = null;
nameSpace3.zoom = 0;
nameSpace3.f = function (x)
{
    return Math.sin(1/x);
}
nameSpace3.zoomplus = function ()
{
    if (nameSpace3.zoom < 3)
    {
        nameSpace3.zoom++;
        nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
        nameSpace3.xmin /= 10;
        nameSpace3.xmax /= 10;
         nameSpace3.Paint();
    }
}

nameSpace3.zoommoins = function ()
{
    if (nameSpace3.zoom <=3 && nameSpace3.zoom > 0)
    {
        nameSpace3.zoom--;
        nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
        nameSpace3.xmin *= 10;
        nameSpace3.xmax *= 10;
        nameSpace3.Paint();
    }
}
nameSpace3.Paint = function ()
{

    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
    nameSpace3.board.createElement('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'blue', strokeWidth: '4px'});

}
nameSpace3.Paint();