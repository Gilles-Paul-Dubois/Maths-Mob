var nameSpace1 = {};
nameSpace1.xmin = -2; // adjust as needed
nameSpace1.xmax = +2; // adjust as needed
nameSpace1.ymin = -1; // adjust according max value of f
nameSpace1.ymax = +3; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.n = 0;


nameSpace1.txt1 = function ()
{
    return "n=" + nameSpace1.n;
}

nameSpace1.f = function (x)
{
    return Math.exp(x);
}

nameSpace1.g = function (x)
{
    var S = 1;
    var u = 1;
    var f = 1
    for (var i = 1; i <= nameSpace1.n; i++)
    {
        u = u * x;
        f = f * i;
        S += u / f;
    }
    return S;
}
nameSpace1.nplus = function ()
{
    nameSpace1.n++;
    nameSpace1.Paint();
}

nameSpace1.nminus = function ()
{
    if (nameSpace1.n >= 1)
    {
        nameSpace1.n--;
        nameSpace1.Paint();
    }
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate(nameSpace1.txt);
    nameSpace1.board.removeObject(nameSpace1.txt)
    nameSpace1.graph1 = nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'blue'});
    nameSpace1.graph2 = nameSpace1.board.create('functiongraph', [nameSpace1.g, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.txt=nameSpace1.board.create('text', [-1.5, -0.5, nameSpace1.txt1]);
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();