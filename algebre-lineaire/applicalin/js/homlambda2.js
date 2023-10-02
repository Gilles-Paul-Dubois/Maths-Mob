/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace3 = {};
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace3.O = nameSpace3.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});
nameSpace3.lambda = nameSpace3.board.create('slider', [[-3, 8], [3, 8], [-2, 1.5, 2]], {name: 'lambda', withLabel: false});
nameSpace3.p1 = nameSpace3.board.create('point', [1, 1], {visible: true, size: 1, name: 'A'});
nameSpace3.p2 = nameSpace3.board.create('point', [1, 4], {visible: true, size: 1, name: 'B'});
nameSpace3.p3 = nameSpace3.board.create('point', [2, 5], {visible: true, size: 1, name: 'C'});
nameSpace3.p4 = nameSpace3.board.create('point', [3, 4], {visible: true, size: 1, name: 'D'});
nameSpace3.p5 = nameSpace3.board.create('point', [3, 1], {visible: true, size: 1, name: 'E'});
nameSpace3.poly1 = nameSpace3.board.create('polygon',["A","B","C","D","E"], {color:'red'});


   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace3.sliderVal = function ()
{
    return "<center>La valeur du scalaire &lambda; est: " + nameSpace3.lambda.Value().toFixed(2) + "<\center>";
};}
else
   { nameSpace3.sliderVal = function ()
{
    return "<center>The value of scalare &lambda; is: " + nameSpace3.lambda.Value().toFixed(2) + "<\center>";
};}

nameSpace3.lambdatext = nameSpace3.board.create('text', [-3, 9, nameSpace3.sliderVal]);
nameSpace3.qx = function (p)
{
    return p.X() * nameSpace3.lambda.Value();


}
nameSpace3.qy = function (p)
{
    return p.Y() * nameSpace3.lambda.Value();
}

nameSpace3.q1x= function ()
{
    return nameSpace3.qx(nameSpace3.p1);
    
}

nameSpace3.q1y= function ()
{
    return nameSpace3.qy(nameSpace3.p1);
    
}
nameSpace3.q2x= function ()
{
    return nameSpace3.qx(nameSpace3.p2);
    
}

nameSpace3.q2y= function ()
{
    return nameSpace3.qy(nameSpace3.p2);
    
}
nameSpace3.q3x= function ()
{
    return nameSpace3.qx(nameSpace3.p3);
    
}

nameSpace3.q3y= function ()
{
    return nameSpace3.qy(nameSpace3.p3);
    
}

nameSpace3.q4x= function ()
{
    return nameSpace3.qx(nameSpace3.p4);
    
}

nameSpace3.q4y= function ()
{
    return nameSpace3.qy(nameSpace3.p4);
    
}

nameSpace3.q5x= function ()
{
    return nameSpace3.qx(nameSpace3.p5);
    
}

nameSpace3.q5y= function ()
{
    return nameSpace3.qy(nameSpace3.p5);
    
}
nameSpace3.q1 = nameSpace3.board.create('point', [nameSpace3.q1x, nameSpace3.q1y], {visible: true, color: 'blue',  size: 1, name: "A'"});
nameSpace3.q2 = nameSpace3.board.create('point', [nameSpace3.q2x, nameSpace3.q2y], {visible: true, color: 'blue',  size: 1, name: "B'"});
nameSpace3.q3 = nameSpace3.board.create('point', [nameSpace3.q3x, nameSpace3.q3y], {visible: true, color: 'blue',  size: 1, name: "C'"});
nameSpace3.q4 = nameSpace3.board.create('point', [nameSpace3.q4x, nameSpace3.q4y], {visible: true, color: 'blue',  size: 1, name: "D'"});
nameSpace3.q5 = nameSpace3.board.create('point', [nameSpace3.q5x, nameSpace3.q5y], {visible: true, color: 'blue',  size: 1, name: "E'"});
nameSpace3.poly2 = nameSpace3.board.create('polygon',["A'","B'","C'","D'","E'"],{color:'blue'});


   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace3.txt = nameSpace3.board.create('text', [-9.5, -9.5, "homothétie vectorielle de rapport &lambda;"], {fontSize: 15, color:'green'});}
else
 { nameSpace3.txt = nameSpace3.board.create('text', [-9.5, -9.5, "homothecy of ratio &lambda;"], {fontSize: 15, color:'green'});}