var nameSpace4 = {};
nameSpace4.xmin = -1;
nameSpace4.xmax = 1;
nameSpace4.ymin = -1;
nameSpace4.ymax = 1;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false, showNavigation: false});
nameSpace4.O = nameSpace4.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace4.R = nameSpace4.board.create('circle', [nameSpace4.O, 1], {color: 'red', opacity: 0.4});
nameSpace4.M = [];

nameSpace4.plus100 = function ()
{
    var i;
    var X, Y, alpha, R;
    for (i = 0; i < 100; i++)
    {
        alpha = Math.random() * Math.PI * 2;
        R = Math.random();
        X = Math.sqrt(R) * Math.cos(alpha);
        Y = Math.sqrt(R) * Math.sin(alpha);
        nameSpace4.M[i] = nameSpace4.board.create('point', [X, Y], {withLabel: false, size: 1});

    }

}

nameSpace4.restart = function ()
{
    nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false, showNavigation: false});
    nameSpace4.O = nameSpace4.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
    nameSpace4.R = nameSpace4.board.create('circle', [nameSpace4.O, 1], {color: 'red', opacity: 0.4});

}