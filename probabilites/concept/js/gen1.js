var nameSpace1 = {};
nameSpace1.xmin = 0;
nameSpace1.xmax = 1;
nameSpace1.ymin = 0;
nameSpace1.ymax = 1;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false, showNavigation: false});
//nameSpace1.O = nameSpace1.board.create('point', [0.5, 0.5], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
//nameSpace1.R = nameSpace1.board.create('circle', [nameSpace1.O, 0.5], {color: 'red', opacity: 0.4});
nameSpace1.M = [];

nameSpace1.plus100 = function ()
{
    var i;
    for (i = 0; i < 100; i++)
    {
        nameSpace1.M[i] = nameSpace1.board.create('point', [Math.random(), Math.random()], {withLabel: false, size: 1});

    }

}

nameSpace1.restart = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false,showNavigation: false});


}