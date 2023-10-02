var nameSpace14 = {};
nameSpace14.xmin = -10;
nameSpace14.xmax = 10;
nameSpace14.ymin = -3;
nameSpace14.ymax = 17;
nameSpace14.board = JXG.JSXGraph.initBoard('box14', {boundingbox: [nameSpace14.xmin, nameSpace14.ymax, nameSpace14.xmax, nameSpace14.ymin], axis: true});
nameSpace14.slp = nameSpace14.board.create('slider', [[-9, 16], [-5, 16], [1, 3, 4]], {snapWidth: 0.1});
function solveQuad(a, b, c)
{
    var delta = b * b - 4 * a * c;
    if(Math.abs(delta) <=0.05)
        delta=0;
    if (a == 0)
        return [];
    if (delta < 0)
        return [];
    else if (delta == 0)
        return [(-b / (2 * a))];
    else
        return [(-b - Math.sqrt(delta)) / (2 * a), (-b + Math.sqrt(delta)) / (2 * a)]
}
nameSpace14.F = nameSpace14.board.create('point', [0, function () {
        return nameSpace14.slp.Value() / 2;
    }], {size: 1, color: 'blue', name: 'F', visible: true});

nameSpace14.G = nameSpace14.board.create('point', [0, function () {
        return -nameSpace14.slp.Value() / 2;
    }], {size: 1, color: 'blue', name: 'F', visible: false});
nameSpace14.FG = nameSpace14.board.create('line', [nameSpace14.F, nameSpace14.G], {visible: false});
nameSpace14.D = nameSpace14.board.create('perpendicular', [nameSpace14.G, nameSpace14.FG], {name: 'D', withLabel: true});

nameSpace14.A = nameSpace14.board.create('point', [-1, function () {
        return -nameSpace14.slp.Value() / 2;
    }], {visible: false});
nameSpace14.B = nameSpace14.board.create('point', [+1, function () {
        return -nameSpace14.slp.Value() / 2;
    }], {visible: false});
nameSpace14.D = nameSpace14.board.create('line', [nameSpace14.A, nameSpace14.B], {visible: false});
nameSpace14.P = nameSpace14.board.create('parabola', [nameSpace14.F, nameSpace14.D]);
//nameSpace14.M1 = nameSpace14.board.create('glider', [nameSpace14.P], {size: 1, name: 'M<sub>1</sub>'});
//nameSpace14.T = nameSpace14.board.create('tangent', [nameSpace14.M1], {color: 'red'});
nameSpace14.txt1 = function ()
{
    return "p=" + nameSpace14.slp.Value().toFixed(2);
}
nameSpace14.board.create('text', [1, 18, nameSpace14.txt1]);

nameSpace14.M = nameSpace14.board.create('glider', [2.35, -1.5, nameSpace14.D], {size: 1, name: 'M'});

nameSpace14.getSlopes = function ()
{
    var p = nameSpace14.slp.Value();
    var x0 = nameSpace14.M.X();
    var y0 = nameSpace14.M.Y();
    return solveQuad(p, -2 * x0, 2 * y0);
}
nameSpace14.calqs = function ()
{
    var p1 = nameSpace14.slopes[0];
    var p2 = nameSpace14.slopes[1];
    var x0 = nameSpace14.M.X();
    var y0 = nameSpace14.M.Y();
    var q1 = y0 - p1 * x0;
    var q2 = y0 - p2 * x0;
    return [q1, q2];
}

nameSpace14.N1x = function ()
{

    var x0 = nameSpace14.M.X();
    return x0 + 1;
}

nameSpace14.N1y = function ()
{
    var x0 = nameSpace14.M.X();
    nameSpace14.slopes = nameSpace14.getSlopes();
    nameSpace14.qs = nameSpace14.calqs();
    var p1 = nameSpace14.slopes[0];
    var q1 = nameSpace14.qs[0];
    return p1 * (x0 + 1) + q1;
}

nameSpace14.N2x = function ()
{

    var x0 = nameSpace14.M.X();
    return x0 + 1;
}

nameSpace14.N2y = function ()
{
    var x0 = nameSpace14.M.X();
    nameSpace14.slopes = nameSpace14.getSlopes();
    nameSpace14.qs = nameSpace14.calqs();
    var p2 = nameSpace14.slopes[1];
    var q2 = nameSpace14.qs[1];
    return p2 * (x0 + 1) + q2;
}

nameSpace14.N3x = function ()
{
    var x0 = nameSpace14.M.X();
    nameSpace14.slopes = nameSpace14.getSlopes();
    nameSpace14.qs = nameSpace14.calqs();
    var p1 = nameSpace14.slopes[0];
    var q1 = nameSpace14.qs[0];
    var p=nameSpace14.slp.Value();
    var coords=solveQuad(1/(2*p),-p1,-q1);
    return coords[0];
}

nameSpace14.N3y=function()
{
    var x=nameSpace14.N3x();
    var p=nameSpace14.slp.Value();
    return (x*x)/(2*p)
}

nameSpace14.N4x = function ()
{
    var x0 = nameSpace14.M.X();
    nameSpace14.slopes = nameSpace14.getSlopes();
    nameSpace14.qs = nameSpace14.calqs();
    var p1 = nameSpace14.slopes[1];
    var q1 = nameSpace14.qs[1];
    var p=nameSpace14.slp.Value();
    var coords=solveQuad(1/(2*p),-p1,-q1);
    return coords[0];
}

nameSpace14.N4y=function()
{
    var x=nameSpace14.N4x();
    var p=nameSpace14.slp.Value();
    return (x*x)/(2*p)
}


nameSpace14.N3 = nameSpace14.board.create('point', [nameSpace14.N3x, nameSpace14.N3y], {visible: true, size: 1, name:'A', color:'blue'});
nameSpace14.N4 = nameSpace14.board.create('point', [nameSpace14.N4x, nameSpace14.N4y], {visible: true, size: 1, name:'B', color:'blue'});
nameSpace14.AB=nameSpace14.board.create('line',[nameSpace14.N3, nameSpace14.N4],{color:'green', name:'Polaire', withLabel:false});
nameSpace14.alpha=nameSpace14.board.create('angle',[nameSpace14.N4, nameSpace14.M, nameSpace14.N3]);

nameSpace14.I=nameSpace14.board.create('midpoint',[nameSpace14.N3, nameSpace14.N4], {color:'blue', size:1, name:'I'});
nameSpace14.K=nameSpace14.board.create('circle',[nameSpace14.I, nameSpace14.M]);
nameSpace14.N1 = nameSpace14.board.create('point', [nameSpace14.N1x, nameSpace14.N1y], {visible: false, size: 1});
nameSpace14.T1 = nameSpace14.board.create('line', [nameSpace14.M, nameSpace14.N1], {color: 'red'});

nameSpace14.N2 = nameSpace14.board.create('point', [nameSpace14.N2x, nameSpace14.N2y], {visible: false, size: 1});
nameSpace14.T2 = nameSpace14.board.create('line', [nameSpace14.M, nameSpace14.N2], {color: 'red'});


nameSpace14.MF = nameSpace14.board.create('line', [nameSpace14.M, nameSpace14.F], {color: 'brown'});

nameSpace14.R=nameSpace14.board.create('intersection',[nameSpace14.MF,nameSpace14.P,0],{size:1, color:'blue', name:'R'})
nameSpace14.S=nameSpace14.board.create('intersection',[nameSpace14.MF,nameSpace14.P,1],{size:1, color:'blue', name:'S'})
