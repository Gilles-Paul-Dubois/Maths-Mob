/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace4 = {};
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace4.O = nameSpace4.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: true});

nameSpace4.p1 = nameSpace4.board.create('point', [0, 3], {visible: true, size: 1, name: 'M'});
nameSpace4.p2 = nameSpace4.board.create('point', [5, 5], {visible: true, size: 1, name: 'A'});
nameSpace4.p3 = nameSpace4.board.create('point', [-2, 5], {visible: true, size: 1, name: 'B'});
nameSpace4.d1 = nameSpace4.board.create('line', [nameSpace4.O, nameSpace4.p2],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});
nameSpace4.d2 = nameSpace4.board.create('line', [nameSpace4.O, nameSpace4.p3],
        {color: 'brown', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});        

nameSpace4.pl1 = nameSpace4.board.create('parallel', [nameSpace4.d2, nameSpace4.p1], {strokeWidth:1});

nameSpace4.I = nameSpace4.board.create('intersection', [nameSpace4.d1, nameSpace4.pl1],{size:1, color:'blue', name:"M'"});
nameSpace4.li1 = nameSpace4.board.create('line', [nameSpace4.O, nameSpace4.p1],
        {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
nameSpace4.li2 = nameSpace4.board.create('line', [nameSpace4.O, nameSpace4.I],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace4.txt = nameSpace4.board.create('text', [-9.5, -9.5, "projection sur une droite (OA) // à une autre (OB)"], {fontSize: 15, color:'green'});}
else
 { nameSpace4.txt = nameSpace4.board.create('text', [-9.5, -9.5, "projection on a line (OA) // to another (OB)"], {fontSize: 15, color:'green'});}