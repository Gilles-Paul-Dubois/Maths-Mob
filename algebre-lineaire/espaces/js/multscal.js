/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

   if(document.body.className.substring(0,2)=="fr")  
   { var nameSpace3 = {};
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace3.p1 = nameSpace3.board.create('point', [1, 1]);
nameSpace3.p2 = nameSpace3.board.create('point', [5, 5]);

nameSpace3.ux = function ()
{
    return nameSpace3.p2.X() - nameSpace3.p1.X();
};
nameSpace3.uy = function ()
{
    return nameSpace3.p2.Y() - nameSpace3.p1.Y();
};

nameSpace3.q1 = nameSpace3.board.create('point', [0, -3], {fixed: true, visible: false});
nameSpace3.q2x = function ()
{
    return nameSpace3.q1.X() + nameSpace3.ux();
};
nameSpace3.q2y = function ()
{
    return nameSpace3.q1.Y() + nameSpace3.uy();
};
nameSpace3.q2 = nameSpace3.board.create('point', [nameSpace3.q2x, nameSpace3.q2y], {visible: false});
nameSpace3.lambda=nameSpace3.board.create('slider',[[-3,5],[3,5],[-3,1,3]],{name:'lambda',withLabel:false}); 
nameSpace3.sliderVal=function()
{return "<center>La valeur du scalaire &lambda; est: "+nameSpace3.lambda.Value().toFixed(2)+"<\center>";
 };
nameSpace3.lambdatext=nameSpace3.board.create('text',[-5,6,nameSpace3.sliderVal]);
nameSpace3.q3x = function ()
{
    return nameSpace3.q1.X() + nameSpace3.ux()*nameSpace3.lambda.Value();
};
nameSpace3.q3y = function ()
{
    return nameSpace3.q1.Y() + nameSpace3.uy()*nameSpace3.lambda.Value();
};
nameSpace3.q3 = nameSpace3.board.create('point', [nameSpace3.q3x, nameSpace3.q3y], {visible: false});

nameSpace3.li1 = nameSpace3.board.create('line', [nameSpace3.p1, nameSpace3.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});

nameSpace3.li3 = nameSpace3.board.create('line', [nameSpace3.q1, nameSpace3.q3],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur &lambda;u',
             withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
}
else
  { var nameSpace3 = {};
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace3.p1 = nameSpace3.board.create('point', [1, 1]);
nameSpace3.p2 = nameSpace3.board.create('point', [5, 5]);

nameSpace3.ux = function ()
{
    return nameSpace3.p2.X() - nameSpace3.p1.X();
};
nameSpace3.uy = function ()
{
    return nameSpace3.p2.Y() - nameSpace3.p1.Y();
};

nameSpace3.q1 = nameSpace3.board.create('point', [0, -3], {fixed: true, visible: false});
nameSpace3.q2x = function ()
{
    return nameSpace3.q1.X() + nameSpace3.ux();
};
nameSpace3.q2y = function ()
{
    return nameSpace3.q1.Y() + nameSpace3.uy();
};
nameSpace3.q2 = nameSpace3.board.create('point', [nameSpace3.q2x, nameSpace3.q2y], {visible: false});
nameSpace3.lambda=nameSpace3.board.create('slider',[[-3,5],[3,5],[-3,1,3]],{name:'lambda',withLabel:false}); 
nameSpace3.sliderVal=function()
{return "<center>The value of scalar &lambda; is: "+nameSpace3.lambda.Value().toFixed(2)+"<\center>";
 };
nameSpace3.lambdatext=nameSpace3.board.create('text',[-5,6,nameSpace3.sliderVal]);
nameSpace3.q3x = function ()
{
    return nameSpace3.q1.X() + nameSpace3.ux()*nameSpace3.lambda.Value();
};
nameSpace3.q3y = function ()
{
    return nameSpace3.q1.Y() + nameSpace3.uy()*nameSpace3.lambda.Value();
};
nameSpace3.q3 = nameSpace3.board.create('point', [nameSpace3.q3x, nameSpace3.q3y], {visible: false});

nameSpace3.li1 = nameSpace3.board.create('line', [nameSpace3.p1, nameSpace3.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});

nameSpace3.li3 = nameSpace3.board.create('line', [nameSpace3.q1, nameSpace3.q3],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector &lambda;u',
             withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
}