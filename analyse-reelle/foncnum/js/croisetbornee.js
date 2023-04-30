var nameSpace4 = {};
nameSpace4.xmin = -1; // adjust as needed
nameSpace4.xmax = +60; // adjust as needed
nameSpace4.ymin = -1; // adjust according max value of f
nameSpace4.ymax = +2; // adjust according min value of f
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.A=1;
nameSpace4.f = function (x)
{
    return 2-Math.pow(x+10,1/(x+8));
}

nameSpace4.plus10 = function ()
{
    nameSpace4.xmax += 10;

    nameSpace4.Paint();
}


nameSpace4.Paint = function ()
{
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
    nameSpace4.board.createElement('functiongraph', [nameSpace4.f, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace4.board.createElement('functiongraph', [function (x) {
            return nameSpace4.A;
        }, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'red', strokeWidth: '4px'});

}
nameSpace4.Paint();