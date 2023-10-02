/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace5 = {};
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace5.O = nameSpace5.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});

nameSpace5.p1 = nameSpace5.board.create('point', [0, 3], {visible: true, size: 1, name: 'M'});
nameSpace5.p2 = nameSpace5.board.create('point', [5, 5], {visible: true, size: 1, name: 'A'});
nameSpace5.p3 = nameSpace5.board.create('point', [-2, 5], {visible: true, size: 1, name: 'B'});
nameSpace5.d1 = nameSpace5.board.create('line', [nameSpace5.O, nameSpace5.p2],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});
nameSpace5.d2 = nameSpace5.board.create('line', [nameSpace5.O, nameSpace5.p3],
        {color: 'brown', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});        

nameSpace5.pl1 = nameSpace5.board.create('parallel', [nameSpace5.d2, nameSpace5.p1], {strokeWidth:1});


nameSpace5.I = nameSpace5.board.create('intersection', [nameSpace5.d1, nameSpace5.pl1],{visible: false,size:1, color:'blue', name:"I"});
nameSpace5.pJx=function()
{
    return 2*nameSpace5.I.X()-nameSpace5.p1.X();
}
nameSpace5.pJy=function()
{
    return 2*nameSpace5.I.Y()-nameSpace5.p1.Y();
}

nameSpace5.J=nameSpace5.board.create ('point',[nameSpace5.pJx,nameSpace5.pJy], {size:1,color:'blue', name:"M'" })
nameSpace5.li1 = nameSpace5.board.create('line', [nameSpace5.O, nameSpace5.p1],
        {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
nameSpace5.li2 = nameSpace5.board.create('line', [nameSpace5.O, nameSpace5.J],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace5.txt = nameSpace5.board.create('text', [-9.5, -9.5, "symétrie relative à une droite (OA) // à une autre (OB)"], {fontSize: 15, color:'green'});}
else
{ nameSpace5.txt = nameSpace5.board.create('text', [-9.5, -9.5, "symmetry with axis line (OA) // to another line (OB)"], {fontSize: 15, color:'green'});}