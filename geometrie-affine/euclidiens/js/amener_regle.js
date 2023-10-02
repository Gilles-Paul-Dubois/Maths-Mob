var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
var first, second, third, fourth, fifth = false;

function redraw()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
    nameSpace1.A = nameSpace1.board.create('point', [-2, -2], {size: 1, name: 'A', fixed: true});
    nameSpace1.B = nameSpace1.board.create('point', [2, 2], {size: 1, name: 'B', fixed: true});
    nameSpace1.AB = nameSpace1.board.create('segment', [nameSpace1.A, nameSpace1.B], {color: 'red'});
}
redraw();

function redrawarcs()
{
    if (first)
    {
        var I1 = nameSpace1.board.create('point', nameSpace1.initial1, {visible: false});
        var F1 = nameSpace1.board.create('point', nameSpace1.final1, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.A, I1, F1]);
    }
    if (second)
    {
        var I2 = nameSpace1.board.create('point', nameSpace1.initial2, {visible: false});
        var F2 = nameSpace1.board.create('point', nameSpace1.final2, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.B, I2, F2]);
    }
    if (third)
    {
        var I3 = nameSpace1.board.create('point', nameSpace1.initial3, {visible: false});
        var F3 = nameSpace1.board.create('point', nameSpace1.final3, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.A, I3, F3]);
    }
    if (fourth)
    {
        var I4 = nameSpace1.board.create('point', nameSpace1.initial4, {visible: false});
        var F4 = nameSpace1.board.create('point', nameSpace1.final4, {visible: false});
        nameSpace1.board.create('arc', [nameSpace1.B, I4, F4]);
    }
}

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
    var generic = board.create('point', [initial.X(), initial.Y()], {slideObject: C, visible: false});
    function angle()
    {
        var decal = board.create('angle', [A1, ptA, generic], {visible: false});
        return decal.Value();
        if (Math.abs(generic.X() - final.X()) <= 0.1)
            nameSpace1.finished = true;
    }
    var Rot = board.create('transform', [angle, ptA], {type: 'rotate'});
    compas = board.create('image', [urlCompas, [ptA.X(), ptA.Y()], [4 * ratio, 8 * ratio]]);
    Rot.bindTo(compas);
    board.create('arc', [ptA, initial, generic]);
    board.update();
    generic.moveTo([final.X(), final.Y()], 1000);
    return [[initial.X(), initial.Y()], [final.X(), final.Y()]];

}

function firstStep()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    redraw();
    var X = drawArc(nameSpace1.board, nameSpace1.A, nameSpace1.B, "images/compas.png", Math.PI / 4, 3 * Math.PI / 4);
    nameSpace1.initial1 = X[0];
    nameSpace1.final1 = X[1];
    first = true;
}
function secondStep()
{

    if (first)
    {
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        redraw();
        redrawarcs();
        var X = drawArc(nameSpace1.board, nameSpace1.B, nameSpace1.A, "images/compas.png", -3 * Math.PI / 4, -Math.PI / 4);
        nameSpace1.initial2 = X[0];
        nameSpace1.final2 = X[1];
        second = true;
    } else
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Commencez par l'étape 1");}
else
{ window.alert("Begin with step 1");}
}

function thirdStep()
{
    if (second)
    {
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        redraw();
        redrawarcs();
        var X = drawArc(nameSpace1.board, nameSpace1.A, nameSpace1.B, "images/compas.png", -3 * Math.PI / 4, -Math.PI / 4);
        nameSpace1.initial3 = X[0];
        nameSpace1.final3 = X[1];
        third = true;
    }
    else
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Deuxième étape d'abord");}
else
{ window.alert("Second step first");}
}

function fourthStep()
{
    if (third)
    {
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        redraw();
        redrawarcs();
        var X = drawArc(nameSpace1.board, nameSpace1.B, nameSpace1.A, "images/compas.png", Math.PI / 4, 3 * Math.PI / 4);
        nameSpace1.initial4 = X[0];
        nameSpace1.final4 = X[1];
        fourth = true;
    }
    else
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Troisième étape d'abord");}
else
{ window.alert("Third step first");}
}

function fifthStep()
{
    if (fourth)
    {
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
        redraw();
        redrawarcs();
        var I1 = nameSpace1.board.create('point', nameSpace1.initial1, {visible: false});
        var F1 = nameSpace1.board.create('point', nameSpace1.final1, {visible: false});
        var I2 = nameSpace1.board.create('point', nameSpace1.initial2, {visible: false});
        var F2 = nameSpace1.board.create('point', nameSpace1.final2, {visible: false});
        var I3 = nameSpace1.board.create('point', nameSpace1.initial3, {visible: false});
        var F3 = nameSpace1.board.create('point', nameSpace1.final3, {visible: false});
        var I4 = nameSpace1.board.create('point', nameSpace1.initial4, {visible: false});
        var F4 = nameSpace1.board.create('point', nameSpace1.final4, {visible: false});
        var ARC1 = nameSpace1.board.create('arc', [nameSpace1.A, I1, F1]);
        var ARC2 = nameSpace1.board.create('arc', [nameSpace1.B, I2, F2]);
        var ARC3 = nameSpace1.board.create('arc', [nameSpace1.A, I3, F3]);
        var ARC4 = nameSpace1.board.create('arc', [nameSpace1.B, I4, F4]);
        var I1 = nameSpace1.board.create('intersection', [ARC1, ARC2], {name: 'C', size: 1});
        var I2 = nameSpace1.board.create('intersection', [ARC3, ARC4], {name: 'D', size: 1});
        bringRuler(nameSpace1.board, I1, I2, "images/regle.png");
        drawLine(nameSpace1.board, I1, I2, "images/crayon.png");
        first=second=third=fourth=fifth=false;
    }
    else
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Quatrième étape d'abord");}
else
   { window.alert("Fourth step first");}
}
