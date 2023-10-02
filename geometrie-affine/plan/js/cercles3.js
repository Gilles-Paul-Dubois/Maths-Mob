var nameSpace3 = {}
nameSpace3.xmin = -5;
nameSpace3.xmax = 5;
nameSpace3.ymin = -5;
nameSpace3.ymax = 5;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.slr = nameSpace3.board.create('slider', [[-4, 4], [-2, 4], [1, 2, 3]]);
nameSpace3.A = nameSpace3.board.create('point', [0, 0], {name: 'A', size: 1});
nameSpace3.K = nameSpace3.board.create('circle', [nameSpace3.A, function () {
        return nameSpace3.slr.Value();
    }]);
nameSpace3.M = nameSpace3.board.create('glider', [nameSpace3.K], {size: 1, name: 'M'})
nameSpace3.T = nameSpace3.board.create('tangent', [nameSpace3.M], {color: 'brown'});
nameSpace3.txt1 = function ()
{
    return "R=" + nameSpace3.slr.Value().toFixed(2);
}
nameSpace3.board.create('text', [-1, 4, nameSpace3.txt1]);
nameSpace3.txt2 = function ()
{
    var a = nameSpace3.A.X();
    var b = nameSpace3.A.Y();
    var r = nameSpace3.slr.Value();
    var c = a * a + b * b - r * r;
    var alpha = "";
    if (a != 0)
    {
        alpha = alpha + (-2 * a).toFixed(2);
        alpha = alpha + "x";
    }
    var beta = "";
    if (b != 0)
    {
        beta = beta + (-2 * b).toFixed(2);
        beta = beta + "y";
    }
    var gamma = "";
    if (c != 0)
        gamma = (c >= 0) ? ("+" + c.toFixed(2)) : ("" + c.toFixed(2));
    var sign1;
    if (a < 0)
        sign1 = "x<sup>2</sup>+";
    else
        sign1 = "x<sup>2</sup>";
    var sign2;
    if (b < 0)
        sign2 = "+y<sup>2</sup>+";
    else
        sign2 = "+y<sup>2</sup>";
    return  sign1 + alpha + sign2 + beta + gamma + "=0";
}

nameSpace3.board.create('text', [-4, -4, nameSpace3.txt2], {color: 'blue'});

nameSpace3.txt3 = function ()
{
    var a = nameSpace3.A.X();
    var b = nameSpace3.A.Y();
    var r = nameSpace3.slr.Value();
    var x0 = nameSpace3.M.X();
    var y0 = nameSpace3.M.Y();
    var c = a * a + b * b - r * r - a * x0 - b * y0;
    var alpha = "";
    if (x0-a != 0)
    {
        alpha = alpha + (x0-a).toFixed(2);
        alpha = alpha + "x";
    }
    var beta = "";
    if (y0-b != 0)
    {
        beta = beta + (y0-b).toFixed(2);
        beta = beta + "y";
    }
    if (y0-b > 0)
        beta = "+" + beta;
    var gamma = "";
    if (c != 0)
        gamma = (c >= 0) ? ("+" + c.toFixed(2)) : ("" + c.toFixed(2));

    return  alpha + beta + gamma + "=0";
}
nameSpace3.board.create('text', [1, -4, nameSpace3.txt3], {color: 'brown'});