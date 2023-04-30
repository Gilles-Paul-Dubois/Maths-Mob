var nameSpace3 = {};
nameSpace3.xmin = -1; // adjust as needed
nameSpace3.xmax = +60; // adjust as needed
nameSpace3.ymin = -60; // adjust according max value of f
nameSpace3.ymax = +60; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});

nameSpace3.f = function (x)
{
    return 0.5 + x * Math.sin(x) * Math.cos(0.1 * x);
}

nameSpace3.plus10 = function ()
{
    nameSpace3.xmax += 10;
    nameSpace3.ymax += 10;
    nameSpace3.ymin -= 10;
    nameSpace3.Paint();
}


nameSpace3.Paint = function ()
{
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
    nameSpace3.board.createElement('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});


}
nameSpace3.Paint();