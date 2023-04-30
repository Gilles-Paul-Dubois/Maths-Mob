var nameSpace4 = {};
nameSpace4.xmin = -1; // adjust as needed
nameSpace4.xmax = +4; // adjust as needed
nameSpace4.ymin = -1; // adjust according max value of f
nameSpace4.ymax = +4; // adjust according min value of f
nameSpace4.n = 0;


nameSpace4.f = function (x)
{
    return x + 1 / x;
}
nameSpace4.zoommoins = function ()
{

    if (nameSpace4.n >= 3)
        return;
    else
    {
        nameSpace4.n++;
        nameSpace4.xmax *= 2;
        nameSpace4.ymax *= 2;
        nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
        nameSpace4.Paint();
    }
}

nameSpace4.zoomplus = function ()
{

    if (nameSpace4.n == 0)
        return;
    else
    {
        nameSpace4.n--;
        nameSpace4.xmax /= 2;
        nameSpace4.ymax /= 2;
        nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
        nameSpace4.Paint();
    }
}
nameSpace4.Paint = function ()
{
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
    nameSpace4.G = nameSpace4.board.createElement('functiongraph', [nameSpace4.f, 0, nameSpace4.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace4.origin = nameSpace4.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O'})
    nameSpace4.generic = nameSpace4.board.create('point', [1, nameSpace4.f(1)], {slideObject: nameSpace4.G, size: 1, name: 'M'});
    nameSpace4.OM = nameSpace4.board.create('line', [nameSpace4.origin, nameSpace4.generic], {})
    nameSpace4.B=nameSpace4.board.create('point',[2,0], {visible:false});
    nameSpace4.alpha=nameSpace4.board.create('angle',[nameSpace4.B, nameSpace4.origin,nameSpace4.generic]);
    nameSpace4.generic.moveTo([nameSpace4.xmax-1, nameSpace4.f(nameSpace4.xmax-1)], 10000);
}
nameSpace4.Paint();