var nameSpace3 = {};
nameSpace3.xmin = 0;
nameSpace3.xmax = 1;
nameSpace3.ymin = 0;
nameSpace3.ymax = 1;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.O = nameSpace3.board.create('point', [0.5, 0.5], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
nameSpace3.R = nameSpace3.board.create('circle', [nameSpace3.O, 0.5], {color: 'red', opacity: 0.4});
nameSpace3.A = nameSpace3.board.create('point', [0, 0], {visible: false});
nameSpace3.B = nameSpace3.board.create('point', [0, 1], {visible: false});
nameSpace3.C = nameSpace3.board.create('point', [1, 1], {visible: false});
nameSpace3.D = nameSpace3.board.create('point', [1, 0], {visible: false});
nameSpace3.K = nameSpace3.board.create('polygon', [nameSpace3.A, nameSpace3.B, nameSpace3.C, nameSpace3.D]);
nameSpace3.M = [];
nameSpace3.total = 0;
nameSpace3.succes = 0;
nameSpace3.zonetexte = document.getElementById("text3");

nameSpace3.plus100 = function ()
{
    var i;
    for (i = 0; i < 100; i++)
    {
        nameSpace3.M[i] = nameSpace3.board.create('point', [Math.random(), Math.random()], {withLabel: false, size: 1});
        nameSpace3.OM = nameSpace3.board.create('segment', [nameSpace3.O, nameSpace3.M[i]], {visible: false});
        nameSpace3.total++;
        var d = nameSpace3.OM.L();
        if (d <= 0.5)
            nameSpace3.succes++;

    }
    nameSpace3.prostat = nameSpace3.succes / nameSpace3.total;
    nameSpace3.zonetexte.value = nameSpace3.prostat.toFixed(5).toString();
}