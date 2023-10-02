var nameSpace1 = {}
nameSpace1.xmin = -3;
nameSpace1.xmax = +12;
nameSpace1.ymin = -3;
nameSpace1.ymax = +12;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.sla = nameSpace1.board.create('slider', [[1, -1], [4, -1], [-5, 1, 5]], {snapWidth: 0.01});
nameSpace1.slb = nameSpace1.board.create('slider', [[5, -1], [8, -1], [-5, 1, 5]], {snapWidth: 0.01});
nameSpace1.txt1 = function ()
{
    return "a=" + nameSpace1.sla.Value().toFixed(2);
}
nameSpace1.board.create('text', [1, -2, nameSpace1.txt1]);
nameSpace1.txt2 = function ()
{
    return "b=" + nameSpace1.slb.Value().toFixed(2);
}
nameSpace1.board.create('text', [5, -2, nameSpace1.txt2]);

nameSpace1.A = nameSpace1.board.create('point', [0, 0], {visible: false});
nameSpace1.B = nameSpace1.board.create('point', [11, 0], {visible: false});
nameSpace1.Ox = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {visible: false});
nameSpace1.P = nameSpace1.board.create('point', [0, function () {
        return nameSpace1.slb.Value();
    }], {visible: false});
nameSpace1.Q = nameSpace1.board.create('point', [11, function () {
        return 11 * nameSpace1.sla.Value() + nameSpace1.slb.Value();
    }], {visible: false});
nameSpace1.D = nameSpace1.board.create('line', [nameSpace1.P, nameSpace1.Q], {color: 'black'});
nameSpace1.coin = function ()
{
    var delta = Math.random() * 2;
    var c = Math.random();
    if (c < 0.5)
        return delta;
    else
        return -delta;
}
nameSpace1.nuage = [];
nameSpace1.perp = [];
nameSpace1.tab = [];
nameSpace1.seg = [];
for (var i = 0; i < 12; i++)
{
    nameSpace1.nuage[i] = nameSpace1.board.create('point', [i, i + nameSpace1.coin()], {size: 1, color: 'blue', withLabel: false});
    nameSpace1.perp[i] = nameSpace1.board.create('perpendicular', [nameSpace1.nuage[i], nameSpace1.Ox], {visible: false});
    nameSpace1.tab[i] = nameSpace1.board.create('intersection', [nameSpace1.perp[i], nameSpace1.D], {color: 'black', size: 1, withLabel: false});
    nameSpace1.seg[i] = nameSpace1.board.create('segment', [nameSpace1.tab[i], nameSpace1.nuage[i]], {color: 'green'});
}

nameSpace1.sigma = function ()
{
    var s = 0;
    var u;
    var i;
    for (i = 0; i < 12; i++)
    {
        u = nameSpace1.nuage[i].Y() - nameSpace1.tab[i].Y();
        s += u * u;
    }
    return s;
}
nameSpace1.txt3 = function ()
{
    return "&Sigma;=" + nameSpace1.sigma().toFixed(2);
}
nameSpace1.board.create('text', [9, -2, nameSpace1.txt3]);

nameSpace1.Mx = function ()
{
    var s = 0;
    var i;
    for (i = 0; i < 12; i++)
    {
        s += nameSpace1.nuage[i].X();
    }
    return s / 12;
}

nameSpace1.My = function ()
{
    var s = 0;
    var i;
    for (i = 0; i < 12; i++)
    {
        s += nameSpace1.nuage[i].Y();
    }
    return s / 12;
}
nameSpace1.M = nameSpace1.board.create('point', [nameSpace1.Mx, nameSpace1.My], {size: 1, withLabel: false});

nameSpace1.covar = function ()
{
    var s = 0;
    var i;
    for (i = 0; i < 12; i++)
    {
        s += (nameSpace1.nuage[i].X() - nameSpace1.Mx()) * (nameSpace1.nuage[i].Y() - nameSpace1.My());
    }
    return s / 12;
}

nameSpace1.var = function ()
{
    var s = 0;
    var i;
    for (i = 0; i < 12; i++)
    {
        s += (nameSpace1.nuage[i].X() - nameSpace1.Mx()) * (nameSpace1.nuage[i].X() - nameSpace1.Mx());
    }
    return s / 12;
}

nameSpace1.p = function ()
{
    return nameSpace1.covar() / nameSpace1.var();
}

nameSpace1.q = function ()
{
    return nameSpace1.p() * nameSpace1.Mx() - nameSpace1.My();
}
nameSpace1.Ry = function ()
{
    return nameSpace1.q();
}
nameSpace1.R = nameSpace1.board.create('point', [0, nameSpace1.Ry], {visible: false});
nameSpace1.reg = nameSpace1.board.create('line', [nameSpace1.M, nameSpace1.R], {color: 'red'});
