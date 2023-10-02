/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   if(document.body.className.substring(0,2)=="fr")  
   { 
var nameSpace2 = {};
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace2.p1 = nameSpace2.board.create('point', [-4, 1]);
nameSpace2.p2 = nameSpace2.board.create('point', [3.5, 4]);
nameSpace2.p3 = nameSpace2.board.create('point', [-4.3, -9]);
nameSpace2.p4 = nameSpace2.board.create('point', [-4.3, -0.7]);
nameSpace2.p5 = nameSpace2.board.create('point', [-4.3, 5]);
nameSpace2.p6 = nameSpace2.board.create('point', [-8.6, 6.8]);
nameSpace2.ux = function ()
{
    return nameSpace2.p2.X() - nameSpace2.p1.X();
};
nameSpace2.uy = function ()
{
    return nameSpace2.p2.Y() - nameSpace2.p1.Y();
};
nameSpace2.vx = function ()
{
    return nameSpace2.p4.X() - nameSpace2.p3.X();
};
nameSpace2.vy = function ()
{
    return nameSpace2.p4.Y() - nameSpace2.p3.Y();
};

nameSpace2.wx = function ()
{
    return nameSpace2.p6.X() - nameSpace2.p5.X();
};
nameSpace2.wy = function ()
{
    return nameSpace2.p6.Y() - nameSpace2.p5.Y();
};
nameSpace2.q1 = nameSpace2.board.create('point', [0, -5], {fixed: true, visible: true});
nameSpace2.q2x = function ()
{
    return nameSpace2.q1.X() + nameSpace2.ux();
};
nameSpace2.q2y = function ()
{
    return nameSpace2.q1.Y() + nameSpace2.uy();
};
nameSpace2.q2 = nameSpace2.board.create('point', [nameSpace2.q2x, nameSpace2.q2y], {visible: false});
nameSpace2.q3x = function ()
{
    return nameSpace2.q1.X() + nameSpace2.ux()+nameSpace2.vx();
};
nameSpace2.q3y = function ()
{
    return nameSpace2.q1.Y() + nameSpace2.uy()+nameSpace2.vy();
};
nameSpace2.q3 = nameSpace2.board.create('point', [nameSpace2.q3x, nameSpace2.q3y], {visible: false});
nameSpace2.q4x = function ()
{
    return nameSpace2.q1.X() + nameSpace2.ux()+ nameSpace2.vx()+nameSpace2.wx();
};
nameSpace2.q4y = function ()
{
    return nameSpace2.q1.Y() + nameSpace2.uy()+ nameSpace2.vy()+nameSpace2.wy();
};
nameSpace2.q4 = nameSpace2.board.create('point', [nameSpace2.q4x, nameSpace2.q4y], {visible: false});

nameSpace2.li1 = nameSpace2.board.create('line', [nameSpace2.p1, nameSpace2.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
nameSpace2.li2 = nameSpace2.board.create('line', [nameSpace2.p3, nameSpace2.p4],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
nameSpace2.li3 = nameSpace2.board.create('line', [nameSpace2.p5, nameSpace2.p6],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur w',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});



nameSpace2.li4 = nameSpace2.board.create('line', [nameSpace2.q1, nameSpace2.q2],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace2.li5 = nameSpace2.board.create('line', [nameSpace2.q2, nameSpace2.q3],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace2.li6 = nameSpace2.board.create('line', [nameSpace2.q3, nameSpace2.q4],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur w',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});        
nameSpace2.li7 = nameSpace2.board.create('line', [nameSpace2.q1, nameSpace2.q3],
        {straightFirst: false, strokeColor: 'orange', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u+v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'orange'}});
nameSpace2.li8 = nameSpace2.board.create('line', [nameSpace2.q1, nameSpace2.q4],
        {straightFirst: false, strokeColor: 'purple', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u+v+w',
            withLabel: true,label: {position: 'top', offsets: [0, 10], color: 'purple'} });
nameSpace2.li9 = nameSpace2.board.create('line', [nameSpace2.q2, nameSpace2.q4],
        {straightFirst: false, strokeColor: 'orange', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur v+w',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'orange'}}); 
            
}
else 

   { 
var nameSpace2 = {};
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace2.p1 = nameSpace2.board.create('point', [-4, 1]);
nameSpace2.p2 = nameSpace2.board.create('point', [3.5, 4]);
nameSpace2.p3 = nameSpace2.board.create('point', [-4.3, -9]);
nameSpace2.p4 = nameSpace2.board.create('point', [-4.3, -0.7]);
nameSpace2.p5 = nameSpace2.board.create('point', [-4.3, 5]);
nameSpace2.p6 = nameSpace2.board.create('point', [-8.6, 6.8]);
nameSpace2.ux = function ()
{
    return nameSpace2.p2.X() - nameSpace2.p1.X();
};
nameSpace2.uy = function ()
{
    return nameSpace2.p2.Y() - nameSpace2.p1.Y();
};
nameSpace2.vx = function ()
{
    return nameSpace2.p4.X() - nameSpace2.p3.X();
};
nameSpace2.vy = function ()
{
    return nameSpace2.p4.Y() - nameSpace2.p3.Y();
};

nameSpace2.wx = function ()
{
    return nameSpace2.p6.X() - nameSpace2.p5.X();
};
nameSpace2.wy = function ()
{
    return nameSpace2.p6.Y() - nameSpace2.p5.Y();
};
nameSpace2.q1 = nameSpace2.board.create('point', [0, -5], {fixed: true, visible: true});
nameSpace2.q2x = function ()
{
    return nameSpace2.q1.X() + nameSpace2.ux();
};
nameSpace2.q2y = function ()
{
    return nameSpace2.q1.Y() + nameSpace2.uy();
};
nameSpace2.q2 = nameSpace2.board.create('point', [nameSpace2.q2x, nameSpace2.q2y], {visible: false});
nameSpace2.q3x = function ()
{
    return nameSpace2.q1.X() + nameSpace2.ux()+nameSpace2.vx();
};
nameSpace2.q3y = function ()
{
    return nameSpace2.q1.Y() + nameSpace2.uy()+nameSpace2.vy();
};
nameSpace2.q3 = nameSpace2.board.create('point', [nameSpace2.q3x, nameSpace2.q3y], {visible: false});
nameSpace2.q4x = function ()
{
    return nameSpace2.q1.X() + nameSpace2.ux()+ nameSpace2.vx()+nameSpace2.wx();
};
nameSpace2.q4y = function ()
{
    return nameSpace2.q1.Y() + nameSpace2.uy()+ nameSpace2.vy()+nameSpace2.wy();
};
nameSpace2.q4 = nameSpace2.board.create('point', [nameSpace2.q4x, nameSpace2.q4y], {visible: false});

nameSpace2.li1 = nameSpace2.board.create('line', [nameSpace2.p1, nameSpace2.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
nameSpace2.li2 = nameSpace2.board.create('line', [nameSpace2.p3, nameSpace2.p4],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
nameSpace2.li3 = nameSpace2.board.create('line', [nameSpace2.p5, nameSpace2.p6],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector w',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});



nameSpace2.li4 = nameSpace2.board.create('line', [nameSpace2.q1, nameSpace2.q2],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace2.li5 = nameSpace2.board.create('line', [nameSpace2.q2, nameSpace2.q3],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace2.li6 = nameSpace2.board.create('line', [nameSpace2.q3, nameSpace2.q4],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector w',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});        
nameSpace2.li7 = nameSpace2.board.create('line', [nameSpace2.q1, nameSpace2.q3],
        {straightFirst: false, strokeColor: 'orange', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector u+v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'orange'}});
nameSpace2.li8 = nameSpace2.board.create('line', [nameSpace2.q1, nameSpace2.q4],
        {straightFirst: false, strokeColor: 'purple', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector u+v+w',
            withLabel: true,label: {position: 'top', offsets: [0, 10], color: 'purple'} });
nameSpace2.li9 = nameSpace2.board.create('line', [nameSpace2.q2, nameSpace2.q4],
        {straightFirst: false, strokeColor: 'orange', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'vector v+w',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'orange'}}); 
            
}
                      