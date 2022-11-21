/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nameSpace4 = {};
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace4.p0= nameSpace4.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible:false});
nameSpace4.p1 = nameSpace4.board.create('point', [5, 1], {visible: true, size: 1, name: 'A'});
bx= function ()
{
    return -nameSpace4.p1.Y();
}
by = function()
{
    return nameSpace4.p1.X();
}

nameSpace4.p2 = nameSpace4.board.create('point', [bx, by], {visible: false, size: 1, name: 'B'});
nameSpace4.p3 = nameSpace4.board.create('point', [3, 5], {visible: true, size: 1, name: 'M'});


nameSpace4.d1 = nameSpace4.board.create('line', [nameSpace4.p0, nameSpace4.p1],
        {color: 'blue', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OA)"});
nameSpace4.d2 = nameSpace4.board.create('line', [nameSpace4.p0, nameSpace4.p2],
        {color: 'green', straightFirst: true, straightLast: true, strokeWidth: 1,  name: "(OB)", visible:false});        
nameSpace4.OM = nameSpace4.board.create('line', [nameSpace4.p0, nameSpace4.p3],
        {color: 'black', straightFirst: false, straightLast: false, lastArrow:true, strokeWidth: 1,  name: "OM"});
nameSpace4.par=nameSpace4.board.create('parallel',[nameSpace4.d2,nameSpace4.p3],{strokeWidth:1});
nameSpace4.I=nameSpace4.board.create('intersection',[nameSpace4.par,nameSpace4.d1], {name:"M'", size:1, visible:false});

nameSpace4.OM1 = nameSpace4.board.create('line', [nameSpace4.p0, nameSpace4.I],
        {color: 'black', straightFirst: false, straightLast: false, lastArrow:true, strokeWidth: 1,  name: "M'", withLabel:true,label:{position:'rt'} } );