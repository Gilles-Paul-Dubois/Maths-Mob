var nameSpace4 = {};
nameSpace4.xmin = -5; // adjust as needed
nameSpace4.xmax = +5; // adjust as needed
nameSpace4.ymin = -5; // adjust according max value of f
nameSpace4.ymax = +5; // adjust according min value of f
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.choice = 0;


nameSpace4.choicef = function ()
{
    nameSpace4.choice = (nameSpace4.choice + 1) % 5;
    nameSpace4.Paint();
}
nameSpace4.f = function (x)
{
    switch (nameSpace4.choice) {
        case 0:
            return (x < 0) ? 0 : 3 * Math.sin(2 * x);
        case 1:
            return (x < 0) ? 0 : x - 1;
        case 2:
            return  (x < 0) ? 0 : 0.4 * x * x - 2;
        case 3:
            return (x < 0) ? 0 : 0.1 * Math.exp(x) - 1;
        default:
            return (x < 0) ? 0 : 4 / (1 + x * x) - 2;
    }
}

nameSpace4.txt1 = function ()
{
    if (nameSpace4.int.curveRight.X() < 0)
        return "I(x)=0";

    return "I(x)=" + nameSpace4.int.Value().toFixed(2);
}
nameSpace4.Paint = function ()
{
    nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
    nameSpace4.graph = nameSpace4.board.create('functiongraph', [nameSpace4.f, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'green'});
    nameSpace4.int = nameSpace4.board.create('integral', [[0, 3], nameSpace4.graph],
            {color: 'purple', fillOpacity: 0.2, curveRight: {visible: true, name: 'x', withLabel: true}, curveLeft: {visible: false}});
    nameSpace4.board.create('text', [-4, 4, nameSpace4.txt1]);

}
nameSpace4.Paint();