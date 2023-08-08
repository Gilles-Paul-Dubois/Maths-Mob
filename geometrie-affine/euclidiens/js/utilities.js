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
