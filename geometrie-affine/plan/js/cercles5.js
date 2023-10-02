var nameSpace5 = {}
nameSpace5.xmin = -3;
nameSpace5.xmax = 7;
nameSpace5.ymin = -3;
nameSpace5.ymax = 7;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.slr = nameSpace5.board.create('slider', [[-2, 6], [0, 6], [1, 2, 3]]);
nameSpace5.O = nameSpace5.board.create('point', [0, 0], {name: 'O', size: 1});
nameSpace5.K = nameSpace5.board.create('circle', [nameSpace5.O, function () {
        return nameSpace5.slr.Value();
    }]);
nameSpace5.A = nameSpace5.board.create('point', [4, 4], {name: 'A', size: 1});
nameSpace5.AO = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.O], {color: 'black'});
nameSpace5.E = nameSpace5.board.create('intersection', [nameSpace5.K, nameSpace5.AO, 1], {name: 'E', size: 1, color: 'blue'});
nameSpace5.F = nameSpace5.board.create('intersection', [nameSpace5.K, nameSpace5.AO, 0], {name: 'F', size: 1, color: 'blue'});
nameSpace5.G = nameSpace5.board.create('midpoint', [nameSpace5.O, nameSpace5.A], {visible: false});
nameSpace5.K2 = nameSpace5.board.create('circle', [nameSpace5.G, nameSpace5.O], {visible: false});
nameSpace5.T = nameSpace5.board.create('intersection', [nameSpace5.K2, nameSpace5.K, 0], {name: 'T', size: 1, color: 'blue'});
nameSpace5.AT = nameSpace5.board.create('segment', [nameSpace5.A, nameSpace5.T], {color: 'brown'});
nameSpace5.B = nameSpace5.board.create('glider', [2, 0, nameSpace5.K], {size: 1, name: 'B'});
nameSpace5.AB = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B], {color: 'black'});
nameSpace5.AC3 = nameSpace5.board.create('segment', [nameSpace5.A, nameSpace5.B], {visible: false});
nameSpace5.C0 = nameSpace5.board.create('intersection', [nameSpace5.AB, nameSpace5.K, 0], {visible: false});
nameSpace5.C1 = nameSpace5.board.create('intersection', [nameSpace5.AB, nameSpace5.K, 1], {visible: false});
function Cx()
{
    var d = nameSpace5.AT.L();
    var d1 = nameSpace5.AC3.L();
    if (d1 < d)
        return nameSpace5.C0.X();
    else
        return nameSpace5.C1.X();
}
function Cy()
{
    var d = nameSpace5.AT.L();
    var d1 = nameSpace5.AC3.L();
    if (d1 < d)
        return nameSpace5.C0.Y();
    else
        return nameSpace5.C1.Y();
}
nameSpace5.C = nameSpace5.board.create('point', [Cx, Cy], {size: 1, color: 'blue', name: 'C'});
nameSpace5.AC = nameSpace5.board.create('segment', [nameSpace5.A, nameSpace5.C], {visible: false});
nameSpace5.EB = nameSpace5.board.create('segment', [nameSpace5.E, nameSpace5.B], {color:'green'});
nameSpace5.FC = nameSpace5.board.create('segment', [nameSpace5.F, nameSpace5.C], {color:'green'});
nameSpace5.AE = nameSpace5.board.create('segment', [nameSpace5.A, nameSpace5.E], {visible:false});
nameSpace5.AF = nameSpace5.board.create('segment', [nameSpace5.A, nameSpace5.F], {visible:false});

nameSpace5.txt1 = function ()
{
    return "R=" + nameSpace5.slr.Value().toFixed(2);
}
nameSpace5.board.create('text', [1, 6, nameSpace5.txt1]);

nameSpace5.txt2 = function ()
{
    var d = nameSpace5.AT.L();
    var d2 = d * d;
    var result = "AT=" + d.toFixed(2);
    result = result + " &nbsp;AT<sup>2</sup>=" + d2.toFixed(2);
    return result;
}

nameSpace5.board.create('text', [-2, 5, nameSpace5.txt2], {color:'blue'});
nameSpace5.txt3 = function ()
{
    var d1 = nameSpace5.AC3.L();
    var d2 = nameSpace5.AC.L();
    var result = "AB=" + d1.toFixed(2);
    result = result + " &nbsp;AC=" + d2.toFixed(2);
    result = result + " &nbsp;AB&times;AC=" + (d1*d2).toFixed(2);
    return result;
}
nameSpace5.board.create('text', [-2, 4, nameSpace5.txt3], {color:'green'});

nameSpace5.txt4 = function ()
{
    var d1 = nameSpace5.AE.L();
    var d2 = nameSpace5.AF.L();
    var result = "AE=" + d1.toFixed(2);
    result = result + " &nbsp;AF=" + d2.toFixed(2);
    result = result + " &nbsp;AE&times;AF=" + (d1*d2).toFixed(2);
    return result;
}
nameSpace5.board.create('text', [-2, 4.5, nameSpace5.txt4], {color:'red'});