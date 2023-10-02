var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.F1 = nameSpace1.board.create('point', [-5, 0], {size: 1, color: 'blue', fixed: true, name: "F'"});
nameSpace1.F = nameSpace1.board.create('point', [5, 0], {size: 1, color: 'blue', fixed: true, name: "F"});
nameSpace1.sla = nameSpace1.board.create('slider', [[-9, 9], [-6, 9], [2, 3, 4]]);
nameSpace1.R = function ()
{
    return 2 * nameSpace1.sla.Value();
}
nameSpace1.K = nameSpace1.board.create('circle', [nameSpace1.F1, nameSpace1.R], {strokeColor: 'red'});
nameSpace1.H = nameSpace1.board.create('hyperbola', [nameSpace1.F1, nameSpace1.F, nameSpace1.R], {strokeColor: 'green'});

nameSpace1.M1 = nameSpace1.board.create('glider', [5, 5, nameSpace1.H], {size: 1, name: "M<sub>1</sub>"});
nameSpace1.M2 = nameSpace1.board.create('glider', [-5, 5, nameSpace1.H], {size: 1, name: "M<sub>2</sub>"});

nameSpace1.FM1 = nameSpace1.board.create('segment', [nameSpace1.F, nameSpace1.M1], {color: 'black'});
nameSpace1.K2 = nameSpace1.board.create('circle', [nameSpace1.M1, nameSpace1.F]);

nameSpace1.FM2 = nameSpace1.board.create('segment', [nameSpace1.F, nameSpace1.M2], {color: 'black'});
nameSpace1.K3 = nameSpace1.board.create('circle', [nameSpace1.M2, nameSpace1.F]);

nameSpace1.F1M2 = nameSpace1.board.create('line', [nameSpace1.F1, nameSpace1.M2], {color: 'black'});
nameSpace1.F1M1 = nameSpace1.board.create('line', [nameSpace1.F1, nameSpace1.M1], {color: 'black'});