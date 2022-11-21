/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace7 = {};
nameSpace7.board = JXG.JSXGraph.initBoard('box7', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace7.O = nameSpace7.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});
nameSpace7.F = nameSpace7.board.create('point', [5, 5], {visible: true, size: 1, name: 'F'});
nameSpace7.G = nameSpace7.board.create('point', [-2, 5], {visible: true, size: 1, name: 'G'});
nameSpace7.d1 = nameSpace7.board.create('line', [nameSpace7.O, nameSpace7.F],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OF)"});
nameSpace7.d2 = nameSpace7.board.create('line', [nameSpace7.O, nameSpace7.G],
        {color: 'brown', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OG)"});

//nameSpace7.lambda = nameSpace7.board.create('slider', [[-3, 8], [3, 8], [-2, 1.5, 2]], { name: 'lambda', withLabel: true});
nameSpace7.p1 = nameSpace7.board.create('point', [1, 1], {visible: true, size: 1, name: 'A'});
nameSpace7.p2 = nameSpace7.board.create('point', [1, 4], {visible: true, size: 1, name: 'B'});
nameSpace7.p3 = nameSpace7.board.create('point', [2, 5], {visible: true, size: 1, name: 'C'});
nameSpace7.p4 = nameSpace7.board.create('point', [3, 4], {visible: true, size: 1, name: 'D'});
nameSpace7.p5 = nameSpace7.board.create('point', [3, 1], {visible: true, size: 1, name: 'E'});
nameSpace7.poly1 = nameSpace7.board.create('polygon', ["A", "B", "C", "D", "E"], {color: 'red'});
nameSpace7.plA = nameSpace7.board.create('parallel', [nameSpace7.d2, nameSpace7.p1], {visible: false, strokeWidth: 1});
nameSpace7.plB = nameSpace7.board.create('parallel', [nameSpace7.d2, nameSpace7.p2], {visible: false, strokeWidth: 1});
nameSpace7.plC = nameSpace7.board.create('parallel', [nameSpace7.d2, nameSpace7.p3], {visible: false, strokeWidth: 1});
nameSpace7.plD = nameSpace7.board.create('parallel', [nameSpace7.d2, nameSpace7.p4], {visible: false, strokeWidth: 1});
nameSpace7.plE = nameSpace7.board.create('parallel', [nameSpace7.d2, nameSpace7.p5], {visible: false, strokeWidth: 1});
//nameSpace7.sliderVal = function ()
//{
//    return "<center>La valeur du scalaire &lambda; est: " + nameSpace7.lambda.Value().toFixed(2) + "<\center>";
//};

nameSpace7.IA = nameSpace7.board.create('intersection', [nameSpace7.d1, nameSpace7.plA], {visible: false, size: 1, color: 'blue', name: "I"});
nameSpace7.IB = nameSpace7.board.create('intersection', [nameSpace7.d1, nameSpace7.plB], {visible: false, size: 1, color: 'blue', name: "I"});
nameSpace7.IC = nameSpace7.board.create('intersection', [nameSpace7.d1, nameSpace7.plC], {visible: false, size: 1, color: 'blue', name: "I"});
nameSpace7.ID = nameSpace7.board.create('intersection', [nameSpace7.d1, nameSpace7.plD], {visible: false, size: 1, color: 'blue', name: "I"});
nameSpace7.IE = nameSpace7.board.create('intersection', [nameSpace7.d1, nameSpace7.plE], {visible: false, size: 1, color: 'blue', name: "I"});
//nameSpace7.lambdatext = nameSpace7.board.create('text', [-3, 9, nameSpace7.sliderVal], {visible:false});
nameSpace7.qx = function (i, p)
{
    return 2 * i.X() - p.X();
}
nameSpace7.qy = function (i, p)
{
    return 2 * i.Y() - p.Y();
}

nameSpace7.q1x = function ()
{
    return nameSpace7.qx(nameSpace7.IA, nameSpace7.p1);

}

nameSpace7.q1y = function ()
{
    return nameSpace7.qy(nameSpace7.IA, nameSpace7.p1);

}
nameSpace7.q2x = function ()
{
    return nameSpace7.qx(nameSpace7.IB, nameSpace7.p2);

}

nameSpace7.q2y = function ()
{
    return nameSpace7.qy(nameSpace7.IB, nameSpace7.p2);

}
nameSpace7.q3x = function ()
{
    return nameSpace7.qx(nameSpace7.IC, nameSpace7.p3);

}

nameSpace7.q3y = function ()
{
    return nameSpace7.qy(nameSpace7.IC, nameSpace7.p3);

}

nameSpace7.q4x = function ()
{
    return nameSpace7.qx(nameSpace7.ID, nameSpace7.p4);

}

nameSpace7.q4y = function ()
{
    return nameSpace7.qy(nameSpace7.ID, nameSpace7.p4);

}
nameSpace7.q5x = function ()
{
    return nameSpace7.qx(nameSpace7.IE, nameSpace7.p5);

}

nameSpace7.q5y = function ()
{
    return nameSpace7.qy(nameSpace7.IE, nameSpace7.p5);

}

nameSpace7.q1 = nameSpace7.board.create('point', [nameSpace7.q1x, nameSpace7.q1y], {visible: true, color: 'blue', size: 1, name: "A'"});
nameSpace7.q2 = nameSpace7.board.create('point', [nameSpace7.q2x, nameSpace7.q2y], {visible: true, color: 'blue', size: 1, name: "B'"});
nameSpace7.q3 = nameSpace7.board.create('point', [nameSpace7.q3x, nameSpace7.q3y], {visible: true, color: 'blue', size: 1, name: "C'"});
nameSpace7.q4 = nameSpace7.board.create('point', [nameSpace7.q4x, nameSpace7.q4y], {visible: true, color: 'blue', size: 1, name: "D'"});
nameSpace7.q5 = nameSpace7.board.create('point', [nameSpace7.q5x, nameSpace7.q5y], {visible: true, color: 'blue', size: 1, name: "E'"});
nameSpace7.poly2 = nameSpace7.board.create('polygon', ["A'", "B'", "C'", "D'", "E'"], {color: 'blue'});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace7.txt = nameSpace7.board.create('text', [-9.5, -9.5, "Symétrie axiale par rapport à (OF) // à (OG)"], {fontSize: 15, color: 'green'});}
else
{ nameSpace7.txt = nameSpace7.board.create('text', [-9.5, -9.5, "axial symmetry relative to (OF) // to (OG)"], {fontSize: 15, color: 'green'});}