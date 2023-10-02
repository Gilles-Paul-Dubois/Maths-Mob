/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace4 = {};
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace4.p0 = nameSpace4.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace4.p1 = nameSpace4.board.create('point', [5, 1], {visible: true, size: 1, name: 'U', withLabel: false});
nameSpace4.bx = function ()
{
    return -nameSpace4.p1.Y();
}
nameSpace4.by = function ()
{
    return nameSpace4.p1.X();
}

nameSpace4.p2 = nameSpace4.board.create('point', [nameSpace4.bx, nameSpace4.by], {visible: false, size: 1, name: 'V'});
nameSpace4.d1 = nameSpace4.board.create('line', [nameSpace4.p0, nameSpace4.p1],
        {color: 'blue', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OU)"});
nameSpace4.d2 = nameSpace4.board.create('line', [nameSpace4.p0, nameSpace4.p2],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1, name: "(OV)", visible: false});


nameSpace4.p3 = nameSpace4.board.create('point', [1, 1], {visible: true, size: 1, name: 'A'});
nameSpace4.par3 = nameSpace4.board.create('parallel', [nameSpace4.d2, nameSpace4.p3], {strokeWidth: 1, visible: false});
nameSpace4.I3 = nameSpace4.board.create('intersection', [nameSpace4.par3, nameSpace4.d1], {name: "IA", size: 1, visible: false});
nameSpace4.q3x = function ()
{
    return 2 * nameSpace4.I3.X() - nameSpace4.p3.X();
}
nameSpace4.q3y = function ()
{
    return 2 * nameSpace4.I3.Y() - nameSpace4.p3.Y();
}
nameSpace4.q3 = nameSpace4.board.create('point', [nameSpace4.q3x, nameSpace4.q3y], {color:'blue',name: "A'", size: 1, visible: true});


nameSpace4.p4 = nameSpace4.board.create('point', [1, 4], {visible: true, size: 1, name: 'B'});
nameSpace4.par4 = nameSpace4.board.create('parallel', [nameSpace4.d2, nameSpace4.p4], {strokeWidth: 1, visible: false});
nameSpace4.I4 = nameSpace4.board.create('intersection', [nameSpace4.par4, nameSpace4.d1], {name: "IB", size: 1, visible: false});
nameSpace4.q4x = function ()
{
    return 2 * nameSpace4.I4.X() - nameSpace4.p4.X();
}
nameSpace4.q4y = function ()
{
    return 2 * nameSpace4.I4.Y() - nameSpace4.p4.Y();
}
nameSpace4.q4 = nameSpace4.board.create('point', [nameSpace4.q4x, nameSpace4.q4y], {color:'blue',name: "B'", size: 1, visible: true});

nameSpace4.p5 = nameSpace4.board.create('point', [2, 5], {visible: true, size: 1, name: 'C'});
nameSpace4.par5 = nameSpace4.board.create('parallel', [nameSpace4.d2, nameSpace4.p5], {strokeWidth: 1, visible: false});
nameSpace4.I5 = nameSpace4.board.create('intersection', [nameSpace4.par5, nameSpace4.d1], {name: "IC", size: 1, visible: false});
nameSpace4.q5x = function ()
{
    return 2 * nameSpace4.I5.X() - nameSpace4.p5.X();
}
nameSpace4.q5y = function ()
{
    return 2 * nameSpace4.I5.Y() - nameSpace4.p5.Y();
}
nameSpace4.q5 = nameSpace4.board.create('point', [nameSpace4.q5x, nameSpace4.q5y], {color:'blue',name: "C'", size: 1, visible: true});

nameSpace4.p6 = nameSpace4.board.create('point', [3, 4], {visible: true, size: 1, name: 'D'});
nameSpace4.par6 = nameSpace4.board.create('parallel', [nameSpace4.d2, nameSpace4.p6], {strokeWidth: 1, visible: false});
nameSpace4.I6 = nameSpace4.board.create('intersection', [nameSpace4.par6, nameSpace4.d1], {name: "ID", size: 1, visible: false});
nameSpace4.q6x = function ()
{
    return 2 * nameSpace4.I6.X() - nameSpace4.p6.X();
}
nameSpace4.q6y = function ()
{
    return 2 * nameSpace4.I6.Y() - nameSpace4.p6.Y();
}
nameSpace4.q6 = nameSpace4.board.create('point', [nameSpace4.q6x, nameSpace4.q6y], {color:'blue',name: "D'", size: 1, visible: true});

nameSpace4.p7 = nameSpace4.board.create('point', [3, 1], {visible: true, size: 1, name: 'E'});
nameSpace4.par7 = nameSpace4.board.create('parallel', [nameSpace4.d2, nameSpace4.p7], {strokeWidth: 1, visible: false});
nameSpace4.I7 = nameSpace4.board.create('intersection', [nameSpace4.par7, nameSpace4.d1], {name: "IE", size: 1, visible: false});
nameSpace4.q7x = function ()
{
    return 2 * nameSpace4.I7.X() - nameSpace4.p7.X();
}
nameSpace4.q7y = function ()
{
    return 2 * nameSpace4.I7.Y() - nameSpace4.p7.Y();
}
nameSpace4.q7 = nameSpace4.board.create('point', [nameSpace4.q7x, nameSpace4.q7y], {color:'blue',name: "E'", size: 1, visible: true});

nameSpace4.poly1 = nameSpace4.board.create('polygon',["A","B","C","D","E"], {color:'red'});
nameSpace4.poly2 = nameSpace4.board.create('polygon',["A'","B'","C'","D'","E'"], {color:'blue'});

   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace4.txt = nameSpace4.board.create('text', [-9.5, -9.5, "Symétrie orthogonale par rapport à une droite"], {fontSize: 15, color: 'green'});}
else
   { nameSpace4.txt = nameSpace4.board.create('text', [-9.5, -9.5, "Orthogonal symmetry with mirror line"], {fontSize: 15, color: 'green'});}