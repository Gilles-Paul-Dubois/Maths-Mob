var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +4; // adjust as needed
nameSpace2.ymin = -2; // adjust according max value of f
nameSpace2.ymax = +3; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});

nameSpace2.n = 1;

nameSpace2.txt = function ()
{
    return "n=" + nameSpace2.n;
}
nameSpace2.f = function (x)
{
    return 3*Math.sin(x)/ nameSpace2.n;
}

nameSpace2.nextplus = function ()
{
    nameSpace2.n++;
    nameSpace2.Paint();
}

nameSpace2.nextminus = function ()
{
    if (nameSpace2.n >= 1)
    {
        nameSpace2.n--;
        nameSpace2.Paint();
    }
    else
        return;
}

nameSpace2.Paint = function ()
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board); 
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace2.board.create('text', [0.5, 2.5, nameSpace2.txt],{color:'red'});
    
}
nameSpace2.Paint();