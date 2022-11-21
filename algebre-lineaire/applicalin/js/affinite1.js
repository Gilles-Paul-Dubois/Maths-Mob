/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace6 = {};
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace6.O = nameSpace6.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});
nameSpace6.lambda = nameSpace6.board.create('slider', [[-3, 8], [3, 8], [-2, 1.5, 2]], {name: 'lambda', withLabel: false});

   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace6.sliderVal = function ()
{
    return "<center>La valeur du scalaire &lambda; est: " + nameSpace6.lambda.Value().toFixed(2) + "<\center>";
};}
else

   { nameSpace6.sliderVal = function ()
{
    return "<center>The value ofscalar &lambda; is: " + nameSpace6.lambda.Value().toFixed(2) + "<\center>";
};}

nameSpace6.lambdatext = nameSpace6.board.create('text', [-3, 9, nameSpace6.sliderVal]);


nameSpace6.p1 = nameSpace6.board.create('point', [0, 3], {visible: true, size: 1, name: 'M'});
nameSpace6.p2 = nameSpace6.board.create('point', [5, 5], {visible: true, size: 1, name: 'A'});
nameSpace6.p3 = nameSpace6.board.create('point', [-2, 5], {visible: true, size: 1, name: 'B'});
nameSpace6.d1 = nameSpace6.board.create('line', [nameSpace6.O, nameSpace6.p2],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});
nameSpace6.d2 = nameSpace6.board.create('line', [nameSpace6.O, nameSpace6.p3],
        {color: 'brown', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});        

nameSpace6.pl1 = nameSpace6.board.create('parallel', [nameSpace6.d2, nameSpace6.p1], {strokeWidth:1});


nameSpace6.I = nameSpace6.board.create('intersection', [nameSpace6.d1, nameSpace6.pl1],{visible: false,size:1, color:'blue', name:"I"});
nameSpace6.pJx=function()
{
    return nameSpace6.I.X()+nameSpace6.lambda.Value()*(nameSpace6.p1.X()-nameSpace6.I.X());
}
nameSpace6.pJy=function()
{
    return nameSpace6.I.Y()+nameSpace6.lambda.Value()*(nameSpace6.p1.Y()-nameSpace6.I.Y());
}

nameSpace6.J=nameSpace6.board.create ('point',[nameSpace6.pJx,nameSpace6.pJy], {size:1,color:'blue', name:"M'" })
nameSpace6.li1 = nameSpace6.board.create('line', [nameSpace6.O, nameSpace6.p1],
        {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
nameSpace6.li2 = nameSpace6.board.create('line', [nameSpace6.O, nameSpace6.J],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace6.txt = nameSpace6.board.create('text', [-9.5, -9.5, "Affinité de rapport &lambda; relativement à (OA) // à (OB)"], {fontSize: 15, color:'green'});}
else
 { nameSpace6.txt = nameSpace6.board.create('text', [-9.5, -9.5, "Vector affinity with ratio &lambda; relative to (OA) // to (OB)"], {fontSize: 15, color:'green'});}