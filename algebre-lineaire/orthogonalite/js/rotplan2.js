/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace2 = {};
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace2.O = nameSpace2.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true, visible:false});
nameSpace2.alpha = nameSpace2.board.create('slider', [[-9, 8], [0, 8], [0, 90, 360]], {name: 'alpha', withLabel: false, snapWidth: 1});
nameSpace2.p1 = nameSpace2.board.create('point', [1, 1], {visible: true, size: 1, name: 'A'});
nameSpace2.p2 = nameSpace2.board.create('point', [1, 4], {visible: true, size: 1, name: 'B'});
nameSpace2.p3 = nameSpace2.board.create('point', [2, 5], {visible: true, size: 1, name: 'C'});
nameSpace2.p4 = nameSpace2.board.create('point', [3, 4], {visible: true, size: 1, name: 'D'});
nameSpace2.p5 = nameSpace2.board.create('point', [3, 1], {visible: true, size: 1, name: 'E'});
nameSpace2.poly1 = nameSpace2.board.create('polygon',["A","B","C","D","E"], {color:'red'});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace2.sliderVal = function ()
{
    return "<center>La valeur de l'angle &alpha; est: " + nameSpace2.alpha.Value().toFixed(2) +" degrés"+ "<\center>";
};}
else
   { nameSpace2.sliderVal = function ()
{
    return "<center>The value of angle &alpha; is: " + nameSpace2.alpha.Value().toFixed(2)+" degrees" + "<\center>";
};}
nameSpace2.alphatext = nameSpace2.board.create('text', [-9, 9, nameSpace2.sliderVal]);
nameSpace2.qx = function (a, b)
{
    var angle = nameSpace2.alpha.Value() * Math.PI / 180;
    return a * Math.cos(angle) - b * Math.sin(angle);


}
nameSpace2.qy = function (a, b)
{
    var angle = nameSpace2.alpha.Value() * Math.PI / 180;
    return a * Math.sin(angle) + b * Math.cos(angle);
}

nameSpace2.q1x = function()
{
    return nameSpace2.qx(nameSpace2.p1.X(),nameSpace2.p1.Y());
}
nameSpace2.q1y = function()
{
    return nameSpace2.qy(nameSpace2.p1.X(),nameSpace2.p1.Y());
}

nameSpace2.q2x = function()
{
    return nameSpace2.qx(nameSpace2.p2.X(),nameSpace2.p2.Y());
}
nameSpace2.q2y = function()
{
    return nameSpace2.qy(nameSpace2.p2.X(),nameSpace2.p2.Y());
}

nameSpace2.q3x = function()
{
    return nameSpace2.qx(nameSpace2.p3.X(),nameSpace2.p3.Y());
}
nameSpace2.q3y = function()
{
    return nameSpace2.qy(nameSpace2.p3.X(),nameSpace2.p3.Y());
}
nameSpace2.q4x = function()
{
    return nameSpace2.qx(nameSpace2.p4.X(),nameSpace2.p4.Y());
}
nameSpace2.q4y = function()
{
    return nameSpace2.qy(nameSpace2.p4.X(),nameSpace2.p4.Y());
}

nameSpace2.q5x = function()
{
    return nameSpace2.qx(nameSpace2.p5.X(),nameSpace2.p5.Y());
}
nameSpace2.q5y = function()
{
    return nameSpace2.qy(nameSpace2.p5.X(),nameSpace2.p5.Y());
}
nameSpace2.q1= nameSpace2.board.create('point', [nameSpace2.q1x, nameSpace2.q1y], {visible: true, color: 'blue', size: 1, name: "A'"});
nameSpace2.q2= nameSpace2.board.create('point', [nameSpace2.q2x, nameSpace2.q2y], {visible: true, color: 'blue', size: 1, name: "B'"});
nameSpace2.q3= nameSpace2.board.create('point', [nameSpace2.q3x, nameSpace2.q3y], {visible: true, color: 'blue', size: 1, name: "C'"});
nameSpace2.q4= nameSpace2.board.create('point', [nameSpace2.q4x, nameSpace2.q4y], {visible: true, color: 'blue', size: 1, name: "D'"});
nameSpace2.q5= nameSpace2.board.create('point', [nameSpace2.q5x, nameSpace2.q5y], {visible: true, color: 'blue', size: 1, name: "E'"});

nameSpace2.poly2 = nameSpace2.board.create('polygon',["A'","B'","C'","D'","E'"],{color:'blue'});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace2.txt = nameSpace2.board.create('text', [-9.5, -9.5, "Rotation d'angle &alpha;"], {fontSize: 15, color: 'green'});}
else
   { nameSpace2.txt = nameSpace2.board.create('text', [-9.5, -9.5, "Rotation with angle &alpha;"], {fontSize: 15, color: 'green'});}