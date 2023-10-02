var nameSpace3 = {};
nameSpace3.xmin = 0;
nameSpace3.xmax = 1;
nameSpace3.ymin = 0;
nameSpace3.ymax = 1;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false, showNavigation: false});
nameSpace3.O = nameSpace3.board.create('point', [0.5, 0.5], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace3.R = nameSpace3.board.create('circle', [nameSpace3.O, 0.5], {color: 'red', opacity: 0.4});
nameSpace3.M = [];

nameSpace3.plus100 = function ()
{
    var i;
    var X, Y, alpha, R;
    for (i = 0; i < 100; i++)
    {
        alpha = Math.random() * Math.PI * 2;
        R = 0.5 * Math.random();
        X = 0.5 + R * Math.cos(alpha);
        Y = 0.5 + R * Math.sin(alpha);
        nameSpace3.M[i] = nameSpace3.board.create('point', [X, Y], {withLabel: false, size: 1});

    }

}

nameSpace3.restart = function ()
{
    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false, showNavigation: false});
    nameSpace3.O = nameSpace3.board.create('point', [0.5, 0.5], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
    nameSpace3.R = nameSpace3.board.create('circle', [nameSpace3.O, 0.5], {color: 'red', opacity: 0.4});

}