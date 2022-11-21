/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace1 = {};
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});

nameSpace1.p1 = nameSpace1.board.create('point', [0, 3], {visible: true, size: 1, name: 'M'});


nameSpace1.p2x = function ()
{
    return -nameSpace1.p1.X() ;


}
nameSpace1.p2y = function ()
{
    return -nameSpace1.p1.Y() ;
}
nameSpace1.li1 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.p1],
        {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
nameSpace1.p2 = nameSpace1.board.create('point', [nameSpace1.p2x, nameSpace1.p2y], {visible: true, color: 'blue', size: 1, name: "M'"});
nameSpace1.li2 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.p2],
        {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM'",
            withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, "Symétrie centrale"], {fontSize: 15, color: 'green'});}
else
{ nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, "Central symmetry"], {fontSize: 15, color: 'green'});}