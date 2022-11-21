/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

   if(document.body.className.substring(0,2)=="fr")  
   { var nameSpace4 = {};
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace4.p1 = nameSpace4.board.create('point', [-9, -9],{withLabel:false} );
nameSpace4.p2 = nameSpace4.board.create('point', [-5, -5],{withLabel:false});
nameSpace4.p3 = nameSpace4.board.create('point', [-5, -9],{withLabel:false});
nameSpace4.ux = function ()
{
    return nameSpace4.p2.X() - nameSpace4.p1.X();
};
nameSpace4.uy = function ()
{
    return nameSpace4.p2.Y() - nameSpace4.p1.Y();
};
nameSpace4.vx = function ()
{
    return nameSpace4.p3.X() - nameSpace4.p1.X();
};
nameSpace4.vy = function ()
{
    return nameSpace4.p3.Y() - nameSpace4.p1.Y();
};

nameSpace4.lambda = nameSpace4.board.create('slider', [[-3, 5], [3, 5], [0, 1.5, 3]], {name: 'lambda', withLabel: false});
nameSpace4.sliderVal = function ()
{
    return "<center>La valeur du scalaire &lambda; est: " + nameSpace4.lambda.Value().toFixed(2) + "<\center>";
};
nameSpace4.lambdatext = nameSpace4.board.create('text', [-5, 6, nameSpace4.sliderVal]);
nameSpace4.p4x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.ux() * nameSpace4.lambda.Value();
};
nameSpace4.p4y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.uy() * nameSpace4.lambda.Value();
};
nameSpace4.p4 = nameSpace4.board.create('point', [nameSpace4.p4x, nameSpace4.p4y], {visible: false});

nameSpace4.p5x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.vx() * nameSpace4.lambda.Value();
};
nameSpace4.p5y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.vy() * nameSpace4.lambda.Value();
};
nameSpace4.p5 = nameSpace4.board.create('point', [nameSpace4.p5x, nameSpace4.p5y], {visible: false});

nameSpace4.li1 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});

nameSpace4.li3 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p3],
        {straightFirst: false, strokeColor: 'blue', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'v',
            withLabel: true, label: {position: 'top', offsets: [0, 0], color: 'blue'}});

nameSpace4.li4 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p4],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: '&lambda;u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace4.li5 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p5],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: '&lambda;v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace4.p6x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.ux() + nameSpace4.vx();
};
nameSpace4.p6y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.uy() + nameSpace4.vy();
};
nameSpace4.p7x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.lambda.Value() * (nameSpace4.ux() + nameSpace4.vx());
};
nameSpace4.p7y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.lambda.Value() * (nameSpace4.uy() + nameSpace4.vy());
};
nameSpace4.p6 = nameSpace4.board.create('point', [nameSpace4.p6x, nameSpace4.p6y], {visible: false});
nameSpace4.li6 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p6],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u+v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace4.p7 = nameSpace4.board.create('point', [nameSpace4.p7x, nameSpace4.p7y], {visible: false});
nameSpace4.li7 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p7],
        {straightFirst: false, strokeColor: 'orange', straightLast: false, strokeWidth: 2, lastArrow: true, name: '&lambda;(u+v)',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'orange'}});
nameSpace4.li8 = nameSpace4.board.create('line', [nameSpace4.p2, nameSpace4.p6],
        {straightFirst: false, strokeColor: 'brown', dash: 2, straightLast: false, strokeWidth: 2, name: '&lambda;(u+v)',
            withLabel: false});
nameSpace4.li9 = nameSpace4.board.create('line', [nameSpace4.p3, nameSpace4.p6],
        {straightFirst: false, strokeColor: 'brown', dash: 2, straightLast: false, strokeWidth: 2, name: '&lambda;(u+v)',
            withLabel: false});
nameSpace4.li10 = nameSpace4.board.create('line', [nameSpace4.p4, nameSpace4.p7],
        {straightFirst: false, strokeColor: 'brown', dash: 2, straightLast: false, strokeWidth: 2, name: '&lambda;(u+v)',
            withLabel: false}); 
nameSpace4.li11 = nameSpace4.board.create('line', [nameSpace4.p5, nameSpace4.p7],
        {straightFirst: false, strokeColor: 'brown',dash:2, straightLast: false, strokeWidth: 2,  name: '&lambda;(u+v)',
            withLabel: false});             }
else
   { var nameSpace4 = {};
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-10, 10, 10, -10], axis: false});
nameSpace4.p1 = nameSpace4.board.create('point', [-9, -9],{withLabel:false} );
nameSpace4.p2 = nameSpace4.board.create('point', [-5, -5],{withLabel:false});
nameSpace4.p3 = nameSpace4.board.create('point', [-5, -9],{withLabel:false});
nameSpace4.ux = function ()
{
    return nameSpace4.p2.X() - nameSpace4.p1.X();
};
nameSpace4.uy = function ()
{
    return nameSpace4.p2.Y() - nameSpace4.p1.Y();
};
nameSpace4.vx = function ()
{
    return nameSpace4.p3.X() - nameSpace4.p1.X();
};
nameSpace4.vy = function ()
{
    return nameSpace4.p3.Y() - nameSpace4.p1.Y();
};

nameSpace4.lambda = nameSpace4.board.create('slider', [[-3, 5], [3, 5], [0, 1.5, 3]], {name: 'lambda', withLabel: false});
nameSpace4.sliderVal = function ()
{
    return "<center>The value of scalar &lambda; is: " + nameSpace4.lambda.Value().toFixed(2) + "<\center>";
};
nameSpace4.lambdatext = nameSpace4.board.create('text', [-5, 6, nameSpace4.sliderVal]);
nameSpace4.p4x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.ux() * nameSpace4.lambda.Value();
};
nameSpace4.p4y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.uy() * nameSpace4.lambda.Value();
};
nameSpace4.p4 = nameSpace4.board.create('point', [nameSpace4.p4x, nameSpace4.p4y], {visible: false});

nameSpace4.p5x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.vx() * nameSpace4.lambda.Value();
};
nameSpace4.p5y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.vy() * nameSpace4.lambda.Value();
};
nameSpace4.p5 = nameSpace4.board.create('point', [nameSpace4.p5x, nameSpace4.p5y], {visible: false});

nameSpace4.li1 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'blue'}});

nameSpace4.li3 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p3],
        {straightFirst: false, strokeColor: 'blue', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'v',
            withLabel: true, label: {position: 'top', offsets: [0, 0], color: 'blue'}});

nameSpace4.li4 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p4],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: '&lambda;u',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace4.li5 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p5],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: '&lambda;v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace4.p6x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.ux() + nameSpace4.vx();
};
nameSpace4.p6y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.uy() + nameSpace4.vy();
};
nameSpace4.p7x = function ()
{
    return nameSpace4.p1.X() + nameSpace4.lambda.Value() * (nameSpace4.ux() + nameSpace4.vx());
};
nameSpace4.p7y = function ()
{
    return nameSpace4.p1.Y() + nameSpace4.lambda.Value() * (nameSpace4.uy() + nameSpace4.vy());
};
nameSpace4.p6 = nameSpace4.board.create('point', [nameSpace4.p6x, nameSpace4.p6y], {visible: false});
nameSpace4.li6 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p6],
        {straightFirst: false, strokeColor: 'green', straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u+v',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'green'}});
nameSpace4.p7 = nameSpace4.board.create('point', [nameSpace4.p7x, nameSpace4.p7y], {visible: false});
nameSpace4.li7 = nameSpace4.board.create('line', [nameSpace4.p1, nameSpace4.p7],
        {straightFirst: false, strokeColor: 'orange', straightLast: false, strokeWidth: 2, lastArrow: true, name: '&lambda;(u+v)',
            withLabel: true, label: {position: 'top', offsets: [0, 10], color: 'orange'}});
nameSpace4.li8 = nameSpace4.board.create('line', [nameSpace4.p2, nameSpace4.p6],
        {straightFirst: false, strokeColor: 'brown', dash: 2, straightLast: false, strokeWidth: 2, name: '&lambda;(u+v)',
            withLabel: false});
nameSpace4.li9 = nameSpace4.board.create('line', [nameSpace4.p3, nameSpace4.p6],
        {straightFirst: false, strokeColor: 'brown', dash: 2, straightLast: false, strokeWidth: 2, name: '&lambda;(u+v)',
            withLabel: false});
nameSpace4.li10 = nameSpace4.board.create('line', [nameSpace4.p4, nameSpace4.p7],
        {straightFirst: false, strokeColor: 'brown', dash: 2, straightLast: false, strokeWidth: 2, name: '&lambda;(u+v)',
            withLabel: false}); 
nameSpace4.li11 = nameSpace4.board.create('line', [nameSpace4.p5, nameSpace4.p7],
        {straightFirst: false, strokeColor: 'brown',dash:2, straightLast: false, strokeWidth: 2,  name: '&lambda;(u+v)',
            withLabel: false});             }