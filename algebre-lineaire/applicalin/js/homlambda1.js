/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace2 = {};
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace2.O = nameSpace2.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});
nameSpace2.lambda = nameSpace2.board.create('slider', [[-3, 8], [3, 8], [-2, 1.5, 2]], {name: 'lambda', withLabel: false});
nameSpace2.p1 = nameSpace2.board.create('point', [0, 3], {visible: true, size: 1, name: 'M'});


   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace2.sliderVal = function ()
{
    return "<center>La valeur du scalaire &lambda; est: " + nameSpace2.lambda.Value().toFixed(2) + "<\center>";
};
}
else
  { nameSpace2.sliderVal = function ()
{
    return "<center>The value of scalar &lambda; is: " + nameSpace2.lambda.Value().toFixed(2) + "<\center>";
};
}
nameSpace2.lambdatext = nameSpace2.board.create('text', [-3, 9, nameSpace2.sliderVal]);
nameSpace2.p2x = function ()
{
    return nameSpace2.p1.X() * nameSpace2.lambda.Value();


}
nameSpace2.p2y = function ()
{
    return nameSpace2.p1.Y() * nameSpace2.lambda.Value();
}
nameSpace2.li1 = nameSpace2.board.create('line', [nameSpace2.O, nameSpace2.p1],
        {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
nameSpace2.p2 = nameSpace2.board.create('point', [nameSpace2.p2x, nameSpace2.p2y], {visible: true, color: 'blue',  size: 1, name: "M'"});
nameSpace2.li2 = nameSpace2.board.create('line', [nameSpace2.O, nameSpace2.p2],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM'",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'blue'}});


   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace2.txt = nameSpace2.board.create('text', [-9.5, -9.5, "homothétie vectorielle de rapport &lambda;"], {fontSize: 15, color:'green'});}
else
{ nameSpace2.txt = nameSpace2.board.create('text', [-9.5, -9.5, "homothecy of ratio &lambda;"], {fontSize: 15, color:'green'});}