var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.n = 2;
nameSpace1.points = [];

nameSpace1.txt1 = function ()
{
    return "n=" + nameSpace1.n;
}


nameSpace1.txt2 = function ()
{
    return "L=" + nameSpace1.callength().toFixed(4);
}
nameSpace1.f = function (x)
{
    return -0.18 * x * x * x + 2 * x;
}
nameSpace1.nplus = function ()
{
    if (nameSpace1.n <= 128)
    {
        nameSpace1.n *= 2;
        nameSpace1.Paint();
    }
}

nameSpace1.nminus = function ()
{
    if (nameSpace1.n >= 4)
    {
        nameSpace1.n /= 2;
        nameSpace1.Paint();
    }
}

nameSpace1.fillPoints = function ()
{
    nameSpace1.points = [];
    var r = 8 / nameSpace1.n;
    for (var i = 0; i <= nameSpace1.n; i++)
        nameSpace1.points.push([-4 + i * r, nameSpace1.f(-4 + i * r)]);
}

nameSpace1.drawPolygon = function ()
{
    var i, x, y;
    for (i = 0; i < nameSpace1.n; i++)
    {
        x = nameSpace1.points[i];
        y = nameSpace1.points[i + 1];
        nameSpace1.board.create('line', [x, y], {straightFirst: false, straightLast: false, color: 'red'});
    }

}
nameSpace1.callength = function ()
{
    var i, x, y, S, d;
    S = 0;
    for (i = 0; i < nameSpace1.n; i++)
    {
        x = nameSpace1.points[i];
        y = nameSpace1.points[i + 1];
        d = (x[0] - y[0]) * (x[0] - y[0]) + (x[1] - y[1]) * (x[1] - y[1]);
        S += Math.sqrt(d);
    }
    return S;
}

nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.board.create('functiongraph', [nameSpace1.f, -4, +4], {strokeColor: 'green'});
    nameSpace1.fillPoints();
    nameSpace1.board.create('text', [-4, -4, nameSpace1.txt1]);
    nameSpace1.board.create('text', [-3, -4, nameSpace1.txt2]);
    nameSpace1.drawPolygon();

}
nameSpace1.Paint();