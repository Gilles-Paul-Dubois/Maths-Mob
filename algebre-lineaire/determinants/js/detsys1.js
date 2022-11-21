/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis: true});
var p0 = board.create('point', [0, 0], {fixed: true, visible: false});

var p3 = board.create('point', [3, 0], {withLabel: false, size: 2, snapToGrid:true,snapSizeX:0.1, snapSizeY:0.1});
var p4 = board.create('point', [-2, 2], {withLabel: false, size: 2, snapToGrid:true, snapSizeX:0.1, snapSizeY:0.1});
function p5x ()
{
    return p3.X()+p4.X();
}
function p5y()
{
    return p3.Y()+p4.Y();
}
var p5 = board.create('point',[p5x,p5y],{visible:false})
var para=board.create('polygon',[p0,p3,p5,p4]);



var li3 = board.create('line', [p0, p3],
        {color: 'green', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u', withLabel: true, label: {position: 'top'}});
var li4 = board.create('line', [p0, p4],
        {color: 'green', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'v', withLabel: true, label: {position: 'top'}});


function detuv()
{
    return p3.X()*p4.Y()-p3.Y()*p4.X();
}


var sep = "&nbsp;&nbsp;&nbsp;";
txt1 = board.create('text', [-9.5, 9,
    function () {
        return "Det(u,v)="+detuv().toFixed(2) ;
    }],
        {fontSize: 15, color: 'black'});
