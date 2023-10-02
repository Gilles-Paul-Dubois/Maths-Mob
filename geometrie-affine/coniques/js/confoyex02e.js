var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.F1 = nameSpace2.board.create('point', [-4, 0], {size: 1, color: 'blue', fixed: true, name: "F'"});
nameSpace2.F = nameSpace2.board.create('point', [3, 0], {size: 1, color: 'blue', fixed: true, name: "F"});
nameSpace2.sla = nameSpace2.board.create('slider', [[-9, 9], [-6, 9], [4, 5, 6]]);
nameSpace2.R = function ()
{
    return 2 * nameSpace2.sla.Value();
}
nameSpace2.K = nameSpace2.board.create('circle', [nameSpace2.F1, nameSpace2.R], {strokeColor: 'red'});
nameSpace2.E = nameSpace2.board.create('ellipse', [nameSpace2.F1, nameSpace2.F, nameSpace2.R], {strokeColor: 'green'});

nameSpace2.M = nameSpace2.board.create('glider', [3, 3, nameSpace2.E], {size: 1, name: "M"});


nameSpace2.FM = nameSpace2.board.create('segment', [nameSpace2.F, nameSpace2.M], {color: 'black'});
nameSpace2.K2 = nameSpace2.board.create('circle', [nameSpace2.M, nameSpace2.F]);


nameSpace2.F1M = nameSpace2.board.create('line', [nameSpace2.F1, nameSpace2.M], {color: 'black'});
