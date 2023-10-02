var nameSpace2 = {};
nameSpace2.xmin = 0;
nameSpace2.xmax = 1;
nameSpace2.ymin = 0;
nameSpace2.ymax = 1;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false, showNavigation: false});
nameSpace2.O = nameSpace2.board.create('point', [0.5, 0.5], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace2.R = nameSpace2.board.create('circle', [nameSpace2.O, 0.5], {color: 'red', opacity: 0.4});
nameSpace2.M = [];

nameSpace2.plus100 = function ()
{
    var i;
    var X, Y, C;
    for (i = 0; i < 100; i++)
    {
        X = Math.random();
        if (Math.random() < 0.5)
            C = -1;
        else
            C = 1;
        Y = 0.5 + C * Math.sqrt(0.25 - (X - 0.5) * (X - 0.5)) * Math.random();
        nameSpace2.M[i] = nameSpace2.board.create('point', [X, Y], {withLabel: false, size: 1});

    }

}

nameSpace2.restart = function ()
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false, showNavigation: false});
    nameSpace2.O = nameSpace2.board.create('point', [0.5, 0.5], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
    nameSpace2.R = nameSpace2.board.create('circle', [nameSpace2.O, 0.5], {color: 'red', opacity: 0.4});

}