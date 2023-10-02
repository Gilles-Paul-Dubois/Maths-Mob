var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.F1 = nameSpace1.board.create('point', [-4, 0], {size: 1, color: 'blue', fixed: true, name: "F'"});
nameSpace1.F = nameSpace1.board.create('point', [3, 0], {size: 1, color: 'blue', fixed: true, name: "F"});
nameSpace1.sla = nameSpace1.board.create('slider', [[-9, 9], [-6, 9], [4, 5, 6]]);
nameSpace1.R = function ()
{
    return 2 * nameSpace1.sla.Value();
}
nameSpace1.K = nameSpace1.board.create('circle', [nameSpace1.F1, nameSpace1.R], {strokeColor: 'red'});
nameSpace1.E = nameSpace1.board.create('ellipse', [nameSpace1.F1, nameSpace1.F, nameSpace1.R], {strokeColor: 'green'});

nameSpace1.M = nameSpace1.board.create('glider', [3, 3, nameSpace1.E], {size: 1, name: "M"});


nameSpace1.FM = nameSpace1.board.create('segment', [nameSpace1.F, nameSpace1.M], {color: 'black'});
nameSpace1.K2 = nameSpace1.board.create('circle', [nameSpace1.M, nameSpace1.F]);


nameSpace1.F1M = nameSpace1.board.create('line', [nameSpace1.F1, nameSpace1.M], {color: 'black'});
