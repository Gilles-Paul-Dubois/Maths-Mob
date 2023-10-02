var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.sla = nameSpace1.board.create('slider', [[-9, 9], [-5, 9], [0, 0, 360]], {snapWidth: 1});


nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, name: 'O', size: 1});
nameSpace1.A = nameSpace1.board.create('point', [7, 0], {fixed: true, name: 'A', size: 1});
nameSpace1.B = nameSpace1.board.create('point', [-7, 0], {fixed: true, name: 'B', size: 1});
nameSpace1.K = nameSpace1.board.create('circle', [nameSpace1.O, nameSpace1.A]);
nameSpace1.AB = nameSpace1.board.create('segment', [nameSpace1.A, nameSpace1.B]);
nameSpace1.Cx = function ()
{
    var a, A;
    a = nameSpace1.sla.Value();
    A = a * Math.PI / 180;
    if (a >= 180)
        return -7;
    else
        return 7 * Math.cos(A);
}

nameSpace1.Cy = function ()
{
    var a, A;
    a = nameSpace1.sla.Value();
    A = a * Math.PI / 180;
    if (a >= 180)
        return 0;
    else
        return 7 * Math.sin(A);
}

nameSpace1.Dx = function ()
{
    var a, A;
    a = nameSpace1.sla.Value();
    A = a * Math.PI / 180;
    if (a < 180)
        return -7;
    else
        return 7 * Math.cos(A);
}

nameSpace1.Dy = function ()
{
    var a, A;
    a = nameSpace1.sla.Value();
    A = a * Math.PI / 180;
    if (a < 180)
        return 0;
    else
        return 7 * Math.sin(A);
}

nameSpace1.C = nameSpace1.board.create('point', [nameSpace1.Cx, nameSpace1.Cy], {name: '', size: 1});
nameSpace1.D = nameSpace1.board.create('point', [nameSpace1.Dx, nameSpace1.Dy], {name: '', size: 1});
nameSpace1.CA = nameSpace1.board.create('segment', [nameSpace1.C, nameSpace1.A]);
nameSpace1.CB = nameSpace1.board.create('segment', [nameSpace1.C, nameSpace1.B]);
nameSpace1.DA = nameSpace1.board.create('segment', [nameSpace1.D, nameSpace1.A]);
nameSpace1.DB = nameSpace1.board.create('segment', [nameSpace1.D, nameSpace1.B]);

nameSpace1.alpha = nameSpace1.board.create('angle', [nameSpace1.B, nameSpace1.C, nameSpace1.A], {withLabel:false});
nameSpace1.beta = nameSpace1.board.create('angle', [nameSpace1.A, nameSpace1.D, nameSpace1.B],{withLabel:false});

nameSpace1.run = function ()
{
    nameSpace1.sla.moveTo([-9, 9])
    nameSpace1.sla.moveTo([-5, 9], 10000);
}
nameSpace1.run();