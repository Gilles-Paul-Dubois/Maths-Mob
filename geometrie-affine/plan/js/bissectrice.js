var nameSpace9 = {}
nameSpace9.xmin = -5;
nameSpace9.xmax = 5;
nameSpace9.ymin = -5;
nameSpace9.ymax = 5;
var begfirst, begsecond, begthird, begfourth, begfifth = false;
var endfirst, endsecond, endthird, endfourth, endfifth = false;

redraw();

function bringRuler(board, ptA, ptB, urlRuler)
{
    var C = board.create('point', [ptA.X() + 2, ptA.Y()], {visible: false});
    var alpha = board.create('angle', [C, ptA, ptB], {visible: false});
    var a = alpha.Value();
    var midPointSegment = board.create('point', [(ptA.X() + ptB.X()) / 2, (ptA.Y() + ptB.Y()) / 2], {visible: false});
    var midPointRulerUpper = board.create('point', [0, -4], {visible: false});
    var ruler = board.create('image', [urlRuler, [-5, -5], [10, 1]]);
    var numLeftRight = midPointSegment.X() - midPointRulerUpper.X();
    var numUpDown = midPointSegment.Y() - midPointRulerUpper.Y();
    var Trans = board.create('transform', [numLeftRight, numUpDown], {type: 'translate'});
    Trans.bindTo(ruler);
    var Rot = board.create('transform', [a, midPointSegment], {type: 'rotate'});
    Rot.bindTo(ruler);
    board.update();

}

function drawLine(board, ptA, ptB, urlPencil)

{
    function Cx()
    {
        return generic.X();
    }

    function Cy()
    {
        return generic.Y();
    }
    var AB = board.create('line', [ptA, ptB], {visible: false});
    var generic = board.create('point', [ptA.X(), ptA.Y()], {slideObject: AB, visible: false});
    crayon = board.create('image', [urlPencil, [Cx, Cy], [3, 3]]);
    board.create('segment', [ptA, generic], {visible: true});
    generic.moveTo([ptB.X(), ptB.Y()], 5000);

}

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
    nameSpace9.board = JXG.JSXGraph.initBoard('box9', {boundingbox: [nameSpace9.xmin, nameSpace9.ymax, nameSpace9.xmax, nameSpace9.ymin], axis: false});
    nameSpace9.A = nameSpace9.board.create('point', [-4, -4], {size: 1, name: 'A', fixed: true});
    nameSpace9.B = nameSpace9.board.create('point', [0, -2], {visible: false});
    nameSpace9.C = nameSpace9.board.create('point', [-2, 0], {visible: false});
    nameSpace9.D = nameSpace9.board.create('point', [2, 2], {visible: false});
    nameSpace9.AB = nameSpace9.board.create('line', [nameSpace9.A, nameSpace9.B], {straightFirst: false, straightLast: true, color: 'black'});
    nameSpace9.AC = nameSpace9.board.create('line', [nameSpace9.A, nameSpace9.C], {straightFirst: false, straightLast: true, color: 'black'});
}
function redrawarcs()
{
    if (endfirst)
    {
        var I1 = nameSpace9.board.create('point', nameSpace9.initial1, {visible: false});
        var F1 = nameSpace9.board.create('point', nameSpace9.final1, {visible: false});
        nameSpace9.board.create('arc', [nameSpace9.A, I1, F1]);
    }
    if (endsecond)
    {
        var I2 = nameSpace9.board.create('point', nameSpace9.initial2, {visible: false});
        var F2 = nameSpace9.board.create('point', nameSpace9.final2, {visible: false});
        nameSpace9.board.create('arc', [nameSpace9.A, I2, F2]);
    }
    if (endthird)
    {
        var I3 = nameSpace9.board.create('point', nameSpace9.initial3, {visible: false});
        var F3 = nameSpace9.board.create('point', nameSpace9.final3, {visible: false});
        nameSpace9.board.create('arc', [nameSpace9.B, I3, F3]);
    }
    if (endfourth)
    {
        var I4 = nameSpace9.board.create('point', nameSpace9.initial4, {visible: false});
        var F4 = nameSpace9.board.create('point', nameSpace9.final4, {visible: false});
        nameSpace9.board.create('arc', [nameSpace9.C, I4, F4]);
    }
}


function firstStep()
{
    endfirst = endsecond = endthird = endfourth = endfifth = false;
    redraw();
    start = true;
    begfirst = true;
    var X = drawArc(nameSpace9.board, nameSpace9.A, nameSpace9.B, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace9.initial1 = X[0];
    nameSpace9.final1 = X[1];
    endfirst = true
}

function secondStep()
{
    begfirst = false;
    begsecond = true;
    nameSpace9.board = JXG.JSXGraph.freeBoard(nameSpace9.board);
    redraw();
    redrawarcs();
    var X = drawArc(nameSpace9.board, nameSpace9.A, nameSpace9.C, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace9.initial2 = X[0];
    nameSpace9.final2 = X[1];
    endsecond = true;

}

function thirdStep()
{
    begsecond = false;
    begthird = true;
    nameSpace9.board = JXG.JSXGraph.freeBoard(nameSpace9.board);
    redraw();
    redrawarcs();
    var X = drawArc(nameSpace9.board, nameSpace9.B, nameSpace9.D, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace9.initial3 = X[0];
    nameSpace9.final3 = X[1];
    endthird = true;

}
function fourthStep()
{
    begthird = false;
    begfourth = true;
    nameSpace9.board = JXG.JSXGraph.freeBoard(nameSpace9.board);
    redraw();
    redrawarcs();
    var X = drawArc(nameSpace9.board, nameSpace9.C, nameSpace9.D, "images/compas.png", -Math.PI / 24, Math.PI / 24);
    nameSpace9.initial4 = X[0];
    nameSpace9.final4 = X[1];
    endfourth = true;
}

function fifthStep()
{
    begthfourth = false;
    begfifth = true;
    nameSpace9.board = JXG.JSXGraph.freeBoard(nameSpace9.board);
    redraw();
    redrawarcs();
    bringRuler(nameSpace9.board, nameSpace9.A, nameSpace9.D, "images/regle.png");
    drawLine(nameSpace9.board, nameSpace9.A, nameSpace9.D, "images/crayon.png");
}

