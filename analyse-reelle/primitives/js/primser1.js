var nameSpace1 = {};
nameSpace1.xmin = -1.5; // adjust as needed
nameSpace1.xmax = +1.5; // adjust as needed
nameSpace1.ymin = -3; // adjust according max value of f
nameSpace1.ymax = +3; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation:false});

nameSpace1.n = 1;

nameSpace1.txt = function ()
{
    return "n=" + nameSpace1.n;
}
nameSpace1.f = function (x)
{
    var S = 0
    var i;
    var u = 1;
    for (i = 1; i <= nameSpace1.n; i++)
    {
        u *= x;
        if (i % 2 == 1)
            S+=u/i;
        else
            S-=u/i;
    }
    return S;
}
nameSpace1.g = function (x)
{
 return Math.log(1+x);
}

nameSpace1.nextplus = function ()
{
    nameSpace1.n++;
    nameSpace1.Paint();
}

nameSpace1.nextminus = function ()
{
    if (nameSpace1.n >= 2)
    {
        nameSpace1.n--;
        nameSpace1.Paint();
    }
    else
        return;
}

nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation:false});
    nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.create('functiongraph', [nameSpace1.g, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace1.board.create('text', [1, -2.5, nameSpace1.txt], {color: 'red'});

}
nameSpace1.Paint();