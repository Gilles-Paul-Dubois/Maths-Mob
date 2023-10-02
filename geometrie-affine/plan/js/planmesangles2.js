var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.sla = nameSpace2.board.create('slider', [[-9, 9], [-5, 9], [0, 0, 360]], {snapWidth: 1});


nameSpace2.O = nameSpace2.board.create('point', [0, 0], {fixed: true, name: 'O', size: 1});
nameSpace2.A = nameSpace2.board.create('point', [7, 0], {fixed: true, name: 'A', size: 1});
nameSpace2.B = nameSpace2.board.create('point', [-7, 0], {fixed: true, name: 'B', size: 1});
nameSpace2.K = nameSpace2.board.create('circle', [nameSpace2.O, nameSpace2.A]);
nameSpace2.AB = nameSpace2.board.create('segment', [nameSpace2.A, nameSpace2.B]);
nameSpace2.Cx = function ()
{
    var a, A;
    a = nameSpace2.sla.Value();
    A = a * Math.PI / 180;
    if (a >= 180)
        return -7;
    else
        return 7 * Math.cos(A);
}

nameSpace2.Cy = function ()
{
    var a, A;
    a = nameSpace2.sla.Value();
    A = a * Math.PI / 180;
    if (a >= 180)
        return 0;
    else
        return 7 * Math.sin(A);
}

nameSpace2.Dx = function ()
{
    var a, A;
    a = nameSpace2.sla.Value();
    A = a * Math.PI / 180;
    if (a < 180)
        return -7;
    else
        return 7 * Math.cos(A);
}

nameSpace2.Dy = function ()
{
    var a, A;
    a = nameSpace2.sla.Value();
    A = a * Math.PI / 180;
    if (a < 180)
        return 0;
    else
        return 7 * Math.sin(A);
}

nameSpace2.C = nameSpace2.board.create('point', [nameSpace2.Cx, nameSpace2.Cy], {name: '', size: 1});
nameSpace2.D = nameSpace2.board.create('point', [nameSpace2.Dx, nameSpace2.Dy], {name: '', size: 1});
nameSpace2.CA = nameSpace2.board.create('segment', [nameSpace2.C, nameSpace2.A]);
nameSpace2.CB = nameSpace2.board.create('segment', [nameSpace2.C, nameSpace2.B]);
nameSpace2.DA = nameSpace2.board.create('segment', [nameSpace2.D, nameSpace2.A]);
nameSpace2.DB = nameSpace2.board.create('segment', [nameSpace2.D, nameSpace2.B]);

nameSpace2.alpha = nameSpace2.board.create('angle', [nameSpace2.B, nameSpace2.C, nameSpace2.A], {withLabel:false});
nameSpace2.beta = nameSpace2.board.create('angle', [nameSpace2.A, nameSpace2.D, nameSpace2.B],{withLabel:false});

nameSpace2.run = function ()
{
    nameSpace2.sla.moveTo([-9, 9])
    nameSpace2.sla.moveTo([-5, 9], 10000);
}
nameSpace2.run();