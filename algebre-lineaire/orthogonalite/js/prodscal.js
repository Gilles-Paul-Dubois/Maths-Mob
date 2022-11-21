/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace5 = {};
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace5.p0 = nameSpace5.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace5.p1 = nameSpace5.board.create('point', [5, 1], {visible: true, size: 1, name: 'A', withLabel:false});
nameSpace5.p2 = nameSpace5.board.create('point', [3, 3], {visible: true, size: 1, name: 'B', withLabel:false});


nameSpace5.OA = nameSpace5.board.create('line', [nameSpace5.p0, nameSpace5.p1],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "u", withLabel:true,label:{position:'top'}});
nameSpace5.OB = nameSpace5.board.create('line', [nameSpace5.p0, nameSpace5.p2],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "v", withLabel:true, label:{position:'top'}});

function prodscal()
{
    return nameSpace5.p1.X() * nameSpace5.p2.X() + nameSpace5.p1.Y() * nameSpace5.p2.Y();
}
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace5.txt1 = nameSpace5.board.create('text', [-9.5, 9,
    function () {
        return "produit scalaire : u.v=" + prodscal().toFixed(2);
    }],
        {fontSize: 15, color: 'black'});}
else
  { nameSpace5.txt1 = nameSpace5.board.create('text', [-9.5, 9,
    function () {
        return "dot product : u.v=" + prodscal().toFixed(2);
    }],
        {fontSize: 15, color: 'black'});}
a = nameSpace5.board.create('angle', [nameSpace5.p1, nameSpace5.p0, nameSpace5.p2],{radius:1});

function mesa ()
{ return 180*JXG.Math.Geometry.angle (nameSpace5.p1, nameSpace5.p0, nameSpace5.p2)/Math.PI};
console.log (""+mesa());
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace5.txt2 = nameSpace5.board.create('text', [-9.5, 8.5,
    function () {
        return "angle(u,v) en degrés =" + mesa().toFixed(2);
    }],
        {fontSize: 15, color: 'black'});}
else
   { nameSpace5.txt2 = nameSpace5.board.create('text', [-9.5, 8.5,
    function () {
        return "angle(u,v) in degrees =" + mesa().toFixed(2);
    }],
        {fontSize: 15, color: 'black'});}
