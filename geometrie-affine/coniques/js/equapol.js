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


nameSpace2.run = function (vp,ve)
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    nameSpace2.O = nameSpace2.board.create('point', [0, 0], {visible: false});
    nameSpace2.I = nameSpace2.board.create('point', [1, 0], {visible: false});
    var p, e;
    e = parseFloat(ve);
    p = parseFloat(vp);
    var a, b, c;
    if (e < 1)
    {

        a = p / (1 - e * e);
        b = Math.sqrt(a * p);
        c = Math.sqrt(a * a - b * b);
        nameSpace2.F1 = nameSpace2.board.create('point', [-2 * c, 0], {size: 1, withLabel: false, visible:false});
        nameSpace2.F2 = nameSpace2.board.create('point', [0, 0], {size: 1, withLabel: false, visible:false});
        nameSpace2.E = nameSpace2.board.create('ellipse', [nameSpace2.F1, nameSpace2.F2, 2 * a]);
        nameSpace2.M = nameSpace2.board.create('glider', [a - c, 0, nameSpace2.E], {size: 1, name: 'M'});
        nameSpace2.OM = nameSpace2.board.create('segment', [nameSpace2.O, nameSpace2.M]);
        nameSpace2.theta = nameSpace2.board.create('angle', [nameSpace2.I, nameSpace2.O, nameSpace2.M], {name: '&theta;'});

    }
    else if (e == 1)
    {
        
        nameSpace2.F = nameSpace2.board.create('point', [0, 0], {size: 1, withLabel: false, visible:false});
        nameSpace2.A = nameSpace2.board.create('point', [-p, -1], {visible: false});
        nameSpace2.B = nameSpace2.board.create('point', [-p, +1], {visible: false});
        nameSpace2.D = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {visible: false});
        nameSpace2.P = nameSpace2.board.create('parabola', [nameSpace2.F, nameSpace2.D]);
        nameSpace2.M = nameSpace2.board.create('glider', [-p, 0, nameSpace2.P], {size: 1, name: 'M'});
        nameSpace2.OM = nameSpace2.board.create('segment', [nameSpace2.O, nameSpace2.M]);
        nameSpace2.theta = nameSpace2.board.create('angle', [nameSpace2.I, nameSpace2.O, nameSpace2.M], {name: '&theta;'});
    }

    else
    {

        a = p / (e * e - 1);
        b = Math.sqrt(a * p);
        c = Math.sqrt(a * a + b * b);
        nameSpace2.F1 = nameSpace2.board.create('point', [-2 * c, 0], {size: 1, withLabel: false, visible:false});
        nameSpace2.F2 = nameSpace2.board.create('point', [0, 0], {size: 1, withLabel: false, visible:false});
        nameSpace2.H = nameSpace2.board.create('hyperbola', [nameSpace2.F1, nameSpace2.F2, 2 * a]);
        nameSpace2.M = nameSpace2.board.create('glider', [c - a, 0, nameSpace2.H], {size: 1, name: 'M'});
        nameSpace2.OM = nameSpace2.board.create('segment', [nameSpace2.O, nameSpace2.M]);
        nameSpace2.theta = nameSpace2.board.create('angle', [nameSpace2.I, nameSpace2.O, nameSpace2.M], {name: '&theta;'});

    }
    nameSpace2.txt1 = function ()
    {
        return "p=" + p.toFixed(2);
    }
    nameSpace2.txt2 = function ()
    {
        return "e=" + e.toFixed(2);
    }

    nameSpace2.txt3 = function ()
    {
        return "&rho;=" + nameSpace2.OM.L().toFixed(2);
    }

    nameSpace2.txt4 = function ()
    {
        return "&theta;=" + nameSpace2.theta.Value().toFixed(2);
    }
    nameSpace2.board.create('text', [-4, 9, nameSpace2.txt1]);
    nameSpace2.board.create('text', [-4, 8, nameSpace2.txt2]);
    nameSpace2.board.create('text', [2, 9, nameSpace2.txt3]);
    nameSpace2.board.create('text', [2, 8, nameSpace2.txt4]);

}
nameSpace2.run('2','1.5');


