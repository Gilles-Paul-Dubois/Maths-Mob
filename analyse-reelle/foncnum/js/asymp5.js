var nameSpace5 = {};
nameSpace5.xmin = -1; // adjust as needed
nameSpace5.xmax = +4; // adjust as needed
nameSpace5.ymin = -1; // adjust according max value of f
nameSpace5.ymax = +4; // adjust according min value of f
nameSpace5.n = 0;


nameSpace5.f = function (x)
{
    return 2 + Math.sin(x);
}
nameSpace5.zoommoins = function ()
{

    if (nameSpace5.n >= 5)
        return;
    else
    {
        nameSpace5.n++;
        nameSpace5.xmax *= 2;
        nameSpace5.ymax *= 2;
        nameSpace5.board = JXG.JSXGraph.freeBoard(nameSpace5.board);
        nameSpace5.Paint();
    }
}

nameSpace5.zoomplus = function ()
{

    if (nameSpace5.n == 0)
        return;
    else
    {
        nameSpace5.n--;
        nameSpace5.xmax /= 2;
        nameSpace5.ymax /= 2;
        nameSpace5.board = JXG.JSXGraph.freeBoard(nameSpace5.board);
        nameSpace5.Paint();
    }
}
nameSpace5.Paint = function ()
{
    nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
    nameSpace5.G = nameSpace5.board.createElement('functiongraph', [nameSpace5.f, 0, nameSpace5.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace5.origin = nameSpace5.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O'})
    nameSpace5.generic = nameSpace5.board.create('point', [1, nameSpace5.f(1)], {slideObject: nameSpace5.G, size: 1, name: 'M'});
    nameSpace5.OM = nameSpace5.board.create('line', [nameSpace5.origin, nameSpace5.generic], {})
    nameSpace5.B = nameSpace5.board.create('point', [2, 0], {visible: false});
    nameSpace5.alpha = nameSpace5.board.create('angle', [nameSpace5.B, nameSpace5.origin, nameSpace5.generic]);
    nameSpace5.generic.moveTo([nameSpace5.xmax - 1, nameSpace5.f(nameSpace5.xmax - 1)], 10000);
}
nameSpace5.Paint();