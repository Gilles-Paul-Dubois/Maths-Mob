var nameSpace2 = {};
nameSpace2.xmin = -1.5; // adjust as needed
nameSpace2.xmax = +1.5; // adjust as needed
nameSpace2.ymin = -1.5; // adjust according max value of f
nameSpace2.ymax = +1.5; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true, showNavigation: false});

nameSpace2.n = 1;

nameSpace2.txt = function ()
{
    return "n=" + nameSpace2.n;
}
nameSpace2.f = function (x)
{
    var S = 0
    var i, j;
    var u = 1;
    for (i = 1; i <= nameSpace2.n; i++)
    {
        u *= x;
        if (i % 2 == 0)
            continue;
        else
        {
            j = (i - 1) / 2;
            if (j % 2 == 1)
                S -= u / i
            else
                S += u / i
        }

    }
    return S;
}
nameSpace2.g = function (x)
{
    return Math.atan(x);
}

nameSpace2.nextplus = function ()
{
    nameSpace2.n+=2;
    nameSpace2.Paint();
}

nameSpace2.nextminus = function ()
{
    if (nameSpace2.n >= 3)
    {
        nameSpace2.n-=2;
        nameSpace2.Paint();
    }
    else
        return;
}

nameSpace2.Paint = function ()
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true, showNavigation: false});
    nameSpace2.board.create('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace2.board.create('functiongraph', [nameSpace2.g, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace2.board.create('text', [1, -1, nameSpace2.txt], {color: 'red'});

}
nameSpace2.Paint();