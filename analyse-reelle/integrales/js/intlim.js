var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +2; // adjust as needed
nameSpace1.ymin = -1; // adjust according max value of f
nameSpace1.ymax = +2; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.n = 1;

nameSpace1.nplus = function ()
{
    if (nameSpace1.n <= 9)
    {
        nameSpace1.n++;
        nameSpace1.ymax=nameSpace1.n+1;
        nameSpace1.Paint();
    }
}

nameSpace1.nminus = function ()
{
    if (nameSpace1.n >=2)
    {
        nameSpace1.n--;
        nameSpace1.ymax=nameSpace1.n+1;
        nameSpace1.Paint();
    }
}

nameSpace1.f = function (x)
{
    if (x < 0)
        return 0;
    if (x > (1 / nameSpace1.n))
        return 0;
    return nameSpace1.n;
}
nameSpace1.Paint = function ()
{
    nameSpace1.board=JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.graph=nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'red'});
    nameSpace1.integral = nameSpace1.board.create('integral', [[0, 1/nameSpace1.n], nameSpace1.graph], {color: 'green', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});


}
nameSpace1.Paint();