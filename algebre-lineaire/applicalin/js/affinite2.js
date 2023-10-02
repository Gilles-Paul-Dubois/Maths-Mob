/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace8 = {};
nameSpace8.board = JXG.JSXGraph.initBoard('box8', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace8.O = nameSpace8.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});
nameSpace8.F = nameSpace8.board.create('point', [8, 1], {visible: true, size: 1, name: 'F'});
nameSpace8.G = nameSpace8.board.create('point', [-2, 5], {visible: true, size: 1, name: 'G'});
nameSpace8.d1 = nameSpace8.board.create('line', [nameSpace8.O, nameSpace8.F],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OF)"});
nameSpace8.d2 = nameSpace8.board.create('line', [nameSpace8.O, nameSpace8.G],
        {color: 'brown', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OG)"});

nameSpace8.lambda = nameSpace8.board.create('slider', [[-3, 8], [3, 8], [-2, -0.8, 2]], { name: 'lambda', withLabel:false});
nameSpace8.p1 = nameSpace8.board.create('point', [1, 1], {visible: true, size: 1, name: 'A'});
nameSpace8.p2 = nameSpace8.board.create('point', [1, 4], {visible: true, size: 1, name: 'B'});
nameSpace8.p3 = nameSpace8.board.create('point', [2, 5], {visible: true, size: 1, name: 'C'});
nameSpace8.p4 = nameSpace8.board.create('point', [3, 4], {visible: true, size: 1, name: 'D'});
nameSpace8.p5 = nameSpace8.board.create('point', [3, 1], {visible: true, size: 1, name: 'E'});
nameSpace8.poly1 = nameSpace8.board.create('polygon', ["A", "B", "C", "D", "E"], {color: 'red'});
nameSpace8.plA = nameSpace8.board.create('parallel', [nameSpace8.d2, nameSpace8.p1], {visible: false, strokeWidth: 1});
nameSpace8.plB = nameSpace8.board.create('parallel', [nameSpace8.d2, nameSpace8.p2], {visible: false, strokeWidth: 1});
nameSpace8.plC = nameSpace8.board.create('parallel', [nameSpace8.d2, nameSpace8.p3], {visible: false, strokeWidth: 1});
nameSpace8.plD = nameSpace8.board.create('parallel', [nameSpace8.d2, nameSpace8.p4], {visible: false, strokeWidth: 1});
nameSpace8.plE = nameSpace8.board.create('parallel', [nameSpace8.d2, nameSpace8.p5], {visible: false, strokeWidth: 1});


   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace8.sliderVal = function ()
{
    return "<center>La valeur du scalaire &lambda; est: " + nameSpace8.lambda.Value().toFixed(2) + "<\center>";
};}
else
   { nameSpace8.sliderVal = function ()
{
    return "<center>The value of the scalar &lambda; is: " + nameSpace8.lambda.Value().toFixed(2) + "<\center>";
};}
nameSpace8.IA = nameSpace8.board.create('intersection', [nameSpace8.d1, nameSpace8.plA], {visible: false, size: 1, color: 'blue', name: "IA"});
nameSpace8.IB = nameSpace8.board.create('intersection', [nameSpace8.d1, nameSpace8.plB], {visible: false, size: 1, color: 'blue', name: "IB"});
nameSpace8.IC = nameSpace8.board.create('intersection', [nameSpace8.d1, nameSpace8.plC], {visible: false, size: 1, color: 'blue', name: "IC"});
nameSpace8.ID = nameSpace8.board.create('intersection', [nameSpace8.d1, nameSpace8.plD], {visible: false, size: 1, color: 'blue', name: "ID"});
nameSpace8.IE = nameSpace8.board.create('intersection', [nameSpace8.d1, nameSpace8.plE], {visible: false, size: 1, color: 'blue', name: "IE"});
nameSpace8.lambdatext = nameSpace8.board.create('text', [-3, 9, nameSpace8.sliderVal], {visible:true});
nameSpace8.qx = function (i, p)
{
  return i.X()+nameSpace8.lambda.Value()*(p.X()-i.X());
}
nameSpace8.qy = function (i, p)
{
   return  i.Y()+nameSpace8.lambda.Value()*(p.Y()-i.Y());
}

nameSpace8.q1x = function ()
{
    return nameSpace8.qx(nameSpace8.IA, nameSpace8.p1);

}

nameSpace8.q1y = function ()
{
    return nameSpace8.qy(nameSpace8.IA, nameSpace8.p1);

}
nameSpace8.q2x = function ()
{
    return nameSpace8.qx(nameSpace8.IB, nameSpace8.p2);

}

nameSpace8.q2y = function ()
{
    return nameSpace8.qy(nameSpace8.IB, nameSpace8.p2);

}
nameSpace8.q3x = function ()
{
    return nameSpace8.qx(nameSpace8.IC, nameSpace8.p3);

}

nameSpace8.q3y = function ()
{
    return nameSpace8.qy(nameSpace8.IC, nameSpace8.p3);

}

nameSpace8.q4x = function ()
{
    return nameSpace8.qx(nameSpace8.ID, nameSpace8.p4);

}

nameSpace8.q4y = function ()
{
    return nameSpace8.qy(nameSpace8.ID, nameSpace8.p4);

}
nameSpace8.q5x = function ()
{
    return nameSpace8.qx(nameSpace8.IE, nameSpace8.p5);

}

nameSpace8.q5y = function ()
{
    return nameSpace8.qy(nameSpace8.IE, nameSpace8.p5);

}

nameSpace8.q1 = nameSpace8.board.create('point', [nameSpace8.q1x, nameSpace8.q1y], {visible: true, color: 'blue', size: 1, name: "A'"});
nameSpace8.q2 = nameSpace8.board.create('point', [nameSpace8.q2x, nameSpace8.q2y], {visible: true, color: 'blue', size: 1, name: "B'"});
nameSpace8.q3 = nameSpace8.board.create('point', [nameSpace8.q3x, nameSpace8.q3y], {visible: true, color: 'blue', size: 1, name: "C'"});
nameSpace8.q4 = nameSpace8.board.create('point', [nameSpace8.q4x, nameSpace8.q4y], {visible: true, color: 'blue', size: 1, name: "D'"});
nameSpace8.q5 = nameSpace8.board.create('point', [nameSpace8.q5x, nameSpace8.q5y], {visible: true, color: 'blue', size: 1, name: "E'"});
nameSpace8.poly2 = nameSpace8.board.create('polygon', ["A'", "B'", "C'", "D'", "E'"], {color: 'blue'});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace8.txt = nameSpace8.board.create('text', [-9.5, -9.5, "Affinité de rapport &lambda;  par rapport à (OF) // à (OG)"], {fontSize: 15, color: 'green'});}
else
{ nameSpace8.txt = nameSpace8.board.create('text', [-9.5, -9.5, "Vector affinity with ratio &lambda;  relative to (OF) // to (OG)"], {fontSize: 15, color: 'green'});}