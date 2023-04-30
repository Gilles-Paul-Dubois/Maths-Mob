var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +4; // adjust as needed
nameSpace1.ymin = -2; // adjust according max value of f
nameSpace1.ymax = +3; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});

nameSpace1.n = 0;

nameSpace1.txt = function ()
{
    return "n=" + nameSpace1.n;
}
nameSpace1.f = function (x)
{
    return Math.pow(Math.sin(x), nameSpace1.n);
}

nameSpace1.nextplus = function ()
{
    nameSpace1.n++;
    nameSpace1.Paint();
}

nameSpace1.nextminus = function ()
{
    if (nameSpace1.n >= 1)
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
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.create('text', [0.5, 2.5, nameSpace1.txt],{color:'red'});
    
}
nameSpace1.Paint();