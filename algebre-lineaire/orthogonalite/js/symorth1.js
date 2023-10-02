/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace3 = {};
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace3.p0 = nameSpace3.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace3.p1 = nameSpace3.board.create('point', [5, 1], {visible: true, size: 1, name: 'A'});
nameSpace3.bx = function ()
{
    return -nameSpace3.p1.Y();
}
nameSpace3.by = function ()
{
    return nameSpace3.p1.X();
}

nameSpace3.p2 = nameSpace3.board.create('point', [nameSpace3.bx, nameSpace3.by], {visible: false, size: 1, name: 'B'});
nameSpace3.p3 = nameSpace3.board.create('point', [3, 5], {visible: true, size: 1, name: 'M'});


nameSpace3.d1 = nameSpace3.board.create('line', [nameSpace3.p0, nameSpace3.p1],
        {color: 'blue', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OA)"});
nameSpace3.d2 = nameSpace3.board.create('line', [nameSpace3.p0, nameSpace3.p2],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OB)", visible: false});
nameSpace3.OM = nameSpace3.board.create('line', [nameSpace3.p0, nameSpace3.p3],
        {color: 'black', straightFirst: false, straightLast: false, lastArrow: true, strokeWidth: 1, name: "OM"});
nameSpace3.par = nameSpace3.board.create('parallel', [nameSpace3.d2, nameSpace3.p3], {strokeWidth: 1});
nameSpace3.I = nameSpace3.board.create('intersection', [nameSpace3.par, nameSpace3.d1], {name: "M'", size: 1, visible: false});

nameSpace3.qx = function ()
{
    return 2 * nameSpace3.I.X() - nameSpace3.p3.X();
}
nameSpace3.qy = function ()
{
    return 2 * nameSpace3.I.Y() - nameSpace3.p3.Y();
}
nameSpace3.J = nameSpace3.board.create('point', [nameSpace3.qx, nameSpace3.qy], {name: "M'", size: 1, visible: true});
nameSpace3.OM1 = nameSpace3.board.create('line', [nameSpace3.p0, nameSpace3.J],
        {color: 'black', straightFirst: false, straightLast: false, lastArrow: true, strokeWidth: 1, name: "M'", withLabel: false, label: {position: 'rt'}});
   if(document.body.className.substring(0,2)=="fr")  
   {         nameSpace3.txt = nameSpace3.board.create('text', [-9.5, -9.5, "Symétrie orthogonale par rapport à une droite"], {fontSize: 15, color: 'green'});}
else
   {         nameSpace3.txt = nameSpace3.board.create('text', [-9.5, -9.5, "Orthogonal symmetry with mirror line"], {fontSize: 15, color: 'green'});}