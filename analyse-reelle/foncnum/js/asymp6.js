var nameSpace6 = {};
nameSpace6.xmin = -1; // adjust as needed
nameSpace6.xmax = +4; // adjust as needed
nameSpace6.ymin = -4; // adjust according max value of f
nameSpace6.ymax = +4; // adjust according min value of f
nameSpace6.n = 0;
nameSpace6.generic = null;

nameSpace6.f = function (x)
{
    return x * Math.cos(x);
}
nameSpace6.zoommoins = function ()
{

    if (nameSpace6.n >= 5)
        return;
    else
    {
        nameSpace6.n++;
        nameSpace6.xmax *= 2;
        nameSpace6.ymax *= 2;
        nameSpace6.ymin *= 2;
        nameSpace6.board = JXG.JSXGraph.freeBoard(nameSpace6.board);
        nameSpace6.Paint();
    }
}

nameSpace6.zoomplus = function ()
{

    if (nameSpace6.n == 0)
        return;
    else
    {
        nameSpace6.n--;
        nameSpace6.xmax /= 2;
        nameSpace6.ymax /= 2;
        nameSpace6.ymin /= 2;
        nameSpace6.board = JXG.JSXGraph.freeBoard(nameSpace6.board);
        nameSpace6.Paint();
    }
}


nameSpace6.moveForward = function (x)
{
    nameSpace6.generic.moveTo([x + 1, nameSpace6.f(x + 1)], 2000);
}
nameSpace6.Paint = function ()
{
    nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: true});
    nameSpace6.G = nameSpace6.board.createElement('functiongraph', [nameSpace6.f, 0, nameSpace6.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace6.origin = nameSpace6.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O'})
    nameSpace6.generic = nameSpace6.board.create('point', [1, nameSpace6.f(1)], {slideObject: nameSpace6.G, size: 1, name: 'M'});
    nameSpace6.OM = nameSpace6.board.create('line', [nameSpace6.origin, nameSpace6.generic], {})
    nameSpace6.B = nameSpace6.board.create('point', [2, 0], {visible: false});
    nameSpace6.alpha = nameSpace6.board.create('angle', [nameSpace6.B, nameSpace6.origin, nameSpace6.generic]);
    var u;
    for (u = 1; u <= nameSpace6.xmax - 1; u = u + Math.random()*2)
    {
        nameSpace6.moveForward(u);
    }

}
nameSpace6.Paint();
//