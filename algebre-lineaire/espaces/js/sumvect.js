/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace1 = {};
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace1.p1 = nameSpace1.board.create('point', [1, 1]);
nameSpace1.p2 = nameSpace1.board.create('point', [5, 5]);
nameSpace1.p3 = nameSpace1.board.create('point', [-1, -1]);
nameSpace1.p4 = nameSpace1.board.create('point', [-2, 2]);
nameSpace1.ux = function ()
{
    return nameSpace1.p2.X() - nameSpace1.p1.X();
};
nameSpace1.uy = function ()
{
    return nameSpace1.p2.Y() - nameSpace1.p1.Y();
};
nameSpace1.vx = function ()
{
    return nameSpace1.p4.X() - nameSpace1.p3.X();
};
nameSpace1.vy = function ()
{
    return nameSpace1.p4.Y() - nameSpace1.p3.Y();
};
nameSpace1.q1 = nameSpace1.board.create('point', [0, -5], {fixed: true, visible: true});
nameSpace1.q2x = function ()
{
    return nameSpace1.q1.X() + nameSpace1.ux();
};
nameSpace1.q2y = function ()
{
    return nameSpace1.q1.Y() + nameSpace1.uy();
};
nameSpace1.q2 = nameSpace1.board.create('point', [nameSpace1.q2x, nameSpace1.q2y], {visible: false});
nameSpace1.q4x = function ()
{
    return nameSpace1.q1.X() + nameSpace1.vx();
};
nameSpace1.q4y = function ()
{
    return nameSpace1.q1.Y() + nameSpace1.vy();
};
nameSpace1.q4 = nameSpace1.board.create('point', [nameSpace1.q4x, nameSpace1.q4y], {visible: false});
nameSpace1.q5x = function ()
{
    return nameSpace1.q1.X() + nameSpace1.ux() + nameSpace1.vx();
};
nameSpace1.q5y = function ()
{
    return nameSpace1.q1.Y() + nameSpace1.uy() + nameSpace1.vy();
};

nameSpace1.q5 = nameSpace1.board.create('point', [nameSpace1.q5x, nameSpace1.q5y], {visible: false});



if(document.body.className.substring(0,2)=="fr")
nameSpace1.li1 = nameSpace1.board.create('line', [nameSpace1.p1, nameSpace1.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
            else 
            nameSpace1.li1 = nameSpace1.board.create('line', [nameSpace1.p1, nameSpace1.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
            
 if(document.body.className.substring(0,2)=="fr")           
nameSpace1.li2 = nameSpace1.board.create('line', [nameSpace1.p3, nameSpace1.p4],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
            else 
nameSpace1.li2 = nameSpace1.board.create('line', [nameSpace1.p3, nameSpace1.p4],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
            
   if(document.body.className.substring(0,2)=="fr")                       
nameSpace1.li3 = nameSpace1.board.create('line', [nameSpace1.q1, nameSpace1.q2],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
            else 
nameSpace1.li3 = nameSpace1.board.create('line', [nameSpace1.q1, nameSpace1.q2],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
 if(document.body.className.substring(0,2)=="fr")                      
nameSpace1.li4 = nameSpace1.board.create('line', [nameSpace1.q1, nameSpace1.q4],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
else 
nameSpace1.li4 = nameSpace1.board.create('line', [nameSpace1.q1, nameSpace1.q4],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}}); 
if(document.body.className.substring(0,2)=="fr")                        
nameSpace1.li5 = nameSpace1.board.create('line', [nameSpace1.q1, nameSpace1.q5],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u+v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
            else 
nameSpace1.li5 = nameSpace1.board.create('line', [nameSpace1.q1, nameSpace1.q5],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector u+v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
                        
nameSpace1.li6 = nameSpace1.board.create('line', [nameSpace1.q2, nameSpace1.q5],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u',
            withLabel: false, });
nameSpace1.li7 = nameSpace1.board.create('line', [nameSpace1.q4, nameSpace1.q5],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur v',
            withLabel: false});           