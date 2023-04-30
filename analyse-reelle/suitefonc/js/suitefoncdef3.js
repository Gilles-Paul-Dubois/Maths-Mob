var nameSpace3 = {};
nameSpace3.xmin = -10; // adjust as needed
nameSpace3.xmax = +10; // adjust as needed
nameSpace3.ymin = -10; // adjust according max value of f
nameSpace3.ymax = +10; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});

nameSpace3.n = 0;

nameSpace3.txt = function ()
{
    return "n=" + nameSpace3.n;
}
nameSpace3.f = function (x)
{
    var S=1;
    var i;
    var fac=1;
    var pow=1;
    for(i=1; i<=nameSpace3.n;i++)
    {   fac*=i;
        pow*=x
        S+=pow/fac;
    }
    return S;
}

nameSpace3.nextplus = function ()
{
    nameSpace3.n++;
    nameSpace3.Paint();
}

nameSpace3.nextminus = function ()
{
    if (nameSpace3.n >= 1)
    {
        nameSpace3.n--;
        nameSpace3.Paint();
    }
    else
        return;
}

nameSpace3.Paint = function ()
{
    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board); 
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
    nameSpace3.board.createElement('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace3.board.create('text', [-9, 9, nameSpace3.txt],{color:'red'});
    
}
nameSpace3.Paint();