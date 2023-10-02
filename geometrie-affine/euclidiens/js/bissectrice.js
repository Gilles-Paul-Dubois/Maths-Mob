var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
var begfirst, begsecond, begthird, begfourth, begfifth = false;
var endfirst, endsecond, endthird, endfourth, endfifth = false;

redraw();


function drawArc(board, ptA, ptB, urlCompas, thetabeg, thetafin)
{
    var S = board.create('segment', [ptA, ptB], {visible: false});
    var ratio = S.L() / 4;
    var A1 = board.create('point', [ptA.X() + 2, ptA.Y()], {visible: false});
    var C = board.create('circle', [ptA, ptB], {visible: false});
    var rot1 = board.create('transform', [thetafin, ptA], {type: 'rotate'});
    var final = board.create('point', [ptB, rot1], {visible: false});
    var rot2 = board.create('transform', [thetabeg, ptA], {type: 'rotate'});
    var initial = board.create('point', [ptB, rot2], {visible: false});
    var generic = board.create('glider', [initial.X(), initial.Y(), C], {visible: false});
    function angle()
    {
        var decal = board.create('angle', [A1, ptA, generic], {visible: false});
        return decal.Value();
    }
    var Rot = board.create('transform', [angle, ptA], {type: 'rotate'});
    compas = board.create('image', [urlCompas, [ptA.X(), ptA.Y()], [4 * ratio, 8 * ratio]]);
    Rot.bindTo(compas);
    generic.moveTo([initial.X(), initial.Y()]);
    board.create('arc', [ptA, initial, generic]);
    if (begfirst)
    {
        generic.moveTo([final.X(), final.Y()], 1000, {callback: secondStep});
        return [[initial.X(), initial.Y()], [final.X(), final.Y()]];
    }
    else if (begsecond)
    {
        generic.moveTo([final.X(), final.Y()], 1000, {callback: thirdStep});
        return [[initial.X(), initial.Y()], [final.X(), final.Y()]];
    }
    else if (begthird)
    {
        generic.moveTo([final.X(), final.Y()], 1000, {callback: fourthStep});
        return [[initial.X(), initial.Y()], [final.X(), final.Y()]];
    }
    else if (begfourth)
    {
        generic.moveTo([final.X(), final.Y()], 1000, {callback: fifthStep});
        return [[initial.X(), initial.Y()], [final.X(), final.Y()]];
    }
    else
        return [[initial.X(), initial.Y()], [final.X(), final.Y()]];

}

function redraw()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
    nameSpace1.A = nameSpace1.board.create('point', [-4, -4], {size: 1, name: 'A', fixed: true});
    nameSpace1.B = nameSpace1.board.create('point', [0, -2], {visible: false});
    nameSpace1.C = nameSpace1.board.create('point', [-2, 0], {visible: false});
    nameSpace1.D = nameSpace1.board.create('point', [2, 2], {visible: false});
    nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {straightFirst: false, straightLast: true, color: 'black'});
    nameSpace1.AC = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.C], {straightFirst: false, straightLast: true, color: 'black'});
}

function redrawarcs()
{
    if (endfirst)
    {
        var I1 = nameSpace1.board.create('point', nameSpace1.initial1, {visible: false});
        var F1 = nameSpace1.board.create('point', nameSpace1.final1, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.A, I1, F1]);
    }
    if (endsecond)
    {
        var I2 = nameSpace1.board.create('point', nameSpace1.initial2, {visible: false});
        var F2 = nameSpace1.board.create('point', nameSpace1.final2, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.A, I2, F2]);
    }
    if (endthird)
    {
        var I3 = nameSpace1.board.create('point', nameSpace1.initial3, {visible: false});
        var F3 = nameSpace1.board.create('point', nameSpace1.final3, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.B, I3, F3]);
    }
    if (endfourth)
    {
        var I4 = nameSpace1.board.create('point', nameSpace1.initial4, {visible: false});
        var F4 = nameSpace1.board.create('point', nameSpace1.final4, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.C, I4, F4]);
    }
}


function firstStep()
{
    endfirst = endsecond = endthird = endfourth = endfifth = false;
    redraw();
    start = true;
    begfirst = true;
    var X = drawArc(nameSpace1.board, nameSpace1.A, nameSpace1.B, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace1.initial1 = X[0];
    nameSpace1.final1 = X[1];
    endfirst = true
}

function secondStep()
{
    begfirst = false;
    begsecond = true;
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    redraw();
    redrawarcs();
    var X = drawArc(nameSpace1.board, nameSpace1.A, nameSpace1.C, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace1.initial2 = X[0];
    nameSpace1.final2 = X[1];
    endsecond = true;

}

function thirdStep()
{
    begsecond = false;
    begthird = true;
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    redraw();
    redrawarcs();
    var X = drawArc(nameSpace1.board, nameSpace1.B, nameSpace1.D, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace1.initial3 = X[0];
    nameSpace1.final3 = X[1];
    endthird = true;

}
function fourthStep()
{
    begthird = false;
    begfourth = true;
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    redraw();
    redrawarcs();
    var X = drawArc(nameSpace1.board, nameSpace1.C, nameSpace1.D, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace1.initial4 = X[0];
    nameSpace1.final4 = X[1];
    endfourth = true;
}

function fifthStep()
{
    begthfourth = false;
    begfifth = true;
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    redraw();
    redrawarcs();
    bringRuler(nameSpace1.board, nameSpace1.A, nameSpace1.D, "images/regle.png");
    drawLine(nameSpace1.board, nameSpace1.A, nameSpace1.D, "images/crayon.png");
}

