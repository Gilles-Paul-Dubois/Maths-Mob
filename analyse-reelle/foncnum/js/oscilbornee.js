var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +60; // adjust as needed
nameSpace2.ymin = -5; // adjust according max value of f
nameSpace2.ymax = +5; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.A = 2;
nameSpace2.B = -1;
nameSpace2.f = function (x)
{
    return 0.5 + Math.sin(x) * Math.cos(0.1 * x);
}

nameSpace2.plus10 = function ()
{
    nameSpace2.xmax += 10;

    nameSpace2.Paint();
}



nameSpace2.Paint = function ()
{
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace2.board.createElement('functiongraph', [function (x) {
            return nameSpace2.A;
        }, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace2.board.createElement('functiongraph', [function (x) {
            return nameSpace2.B;
        }, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'red', strokeWidth: '4px'});

}
nameSpace2.Paint();