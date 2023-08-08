var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.range1 = document.getElementById("myRange21");
nameSpace2.range1.value = 1;
nameSpace2.range2 = document.getElementById("myRange22");
nameSpace2.range2.value = 2;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.slp = nameSpace2.board.create('slider', [[-9, 9], [-5, 9], [1, 3, 3]], {snapWidth: 0.1});
nameSpace2.sle = nameSpace2.board.create('slider', [[-9, 8.5], [-5, 8.5], [0, 2, 3]], {snapWidth: 0.1});


nameSpace2.run = function (vale,valp)
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    var p, e;
    e = parseFloat(vale);
    p = parseFloat(valp);
    var a, b, c;
    if (e < 1)
    {

        a = p / (1 - e * e);
        b = Math.sqrt(a * p);
        c = Math.sqrt(a * a - b * b);
        nameSpace2.F1 = nameSpace2.board.create('point', [-c + a, 0], {size: 1, withLabel: false});
        nameSpace2.F2 = nameSpace2.board.create('point', [c + a, 0], {size: 1, withLabel: false});
        nameSpace2.board.create('ellipse', [nameSpace2.F1, nameSpace2.F2, 2 * a]);

    }
    else if (e == 1)
    {
        p = parseFloat(nameSpace2.range2.value);
        nameSpace2.F = nameSpace2.board.create('point', [p / 2, 0], {size: 1, withLabel: false});
        nameSpace2.A = nameSpace2.board.create('point', [-p / 2, -1], {visible: false});
        nameSpace2.B = nameSpace2.board.create('point', [-p / 2, +1], {visible: false});
        nameSpace2.D = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {visible: false});
        nameSpace2.board.create('parabola', [nameSpace2.F, nameSpace2.D]);
    }

    else
    {

        a = p / (e * e - 1);
        b = Math.sqrt(a * p);
        c = Math.sqrt(a * a + b * b);
        nameSpace2.F1 = nameSpace2.board.create('point', [-c - a, 0], {size: 1, withLabel: false});
        nameSpace2.F2 = nameSpace2.board.create('point', [c - a, 0], {size: 1, withLabel: false});
        nameSpace2.board.create('hyperbola', [nameSpace2.F1, nameSpace2.F2, 2 * a]);

    }
    nameSpace2.txt1 = function ()
    {
        return "p=" + p.toFixed(2);
    }
    nameSpace2.txt2 = function ()
    {
        return "e=" + e.toFixed(2);
    }
    nameSpace2.board.create('text', [-4, 9, nameSpace2.txt1]);
    nameSpace2.board.create('text', [-4, 8.5, nameSpace2.txt2]);

}
nameSpace2.run("0","2");
