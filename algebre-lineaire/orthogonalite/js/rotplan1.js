/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace1 = {};
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});
nameSpace1.alpha = nameSpace1.board.create('slider', [[-9, 8], [0, 8], [0, 90, 360]], {name: 'alpha', withLabel: false, snapWidth: 1});
nameSpace1.p1 = nameSpace1.board.create('point', [0, 3], {visible: true, size: 1, name: 'M'});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace1.sliderVal = function ()
{
    return "<center>La valeur de l'angle &alpha; est: " + nameSpace1.alpha.Value().toFixed(2) + " degrés"+"<\center>";
};}
else
  { nameSpace1.sliderVal = function ()
{
    return "<center>the value of 'angle &alpha; is: " + nameSpace1.alpha.Value().toFixed(2) + " degrees"+ "<\center>";
};}
nameSpace1.alphatext = nameSpace1.board.create('text', [-9, 9, nameSpace1.sliderVal]);
nameSpace1.px = function (a, b)
{
    var angle = nameSpace1.alpha.Value() * Math.PI / 180;
    return a * Math.cos(angle) - b * Math.sin(angle);


}
nameSpace1.py = function (a, b)
{
    var angle = nameSpace1.alpha.Value() * Math.PI / 180;
    return a * Math.sin(angle) + b * Math.cos(angle);
}

nameSpace1.p2x = function()
{
    return nameSpace1.px(nameSpace1.p1.X(),nameSpace1.p1.Y());
}
nameSpace1.p2y = function()
{
    return nameSpace1.py(nameSpace1.p1.X(),nameSpace1.p1.Y());
}

nameSpace1.li1 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.p1],
        {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
nameSpace1.p2 = nameSpace1.board.create('point', [nameSpace1.p2x, nameSpace1.p2y], {visible: true, color: 'blue', size: 1, name: "M'"});
nameSpace1.li2 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.p2],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM'",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
nameSpace1.MOM1 = nameSpace1.board.create('angle', [nameSpace1.p1, nameSpace1.O, nameSpace1.p2])

nameSpace1.ci = nameSpace1.board.createElement('circle', ["O", "M"], {strokeColor: '#00ff00', strokeWidth: 1});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, "Rotation d'angle &alpha;"], {fontSize: 15, color: 'green'});}
else
 { nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, "Plane rotation with angle &alpha;"], {fontSize: 15, color: 'green'});}