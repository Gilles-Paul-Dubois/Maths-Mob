/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis: true});
var p0 = board.create('point', [0, 0], {fixed: true, visible: false});
var p1 = board.create('point', [1, 0], {fixed: true, visible: false, withLabel: false, size: 2});
var p2 = board.create('point', [0, 1], {fixed: true, visible: false, withLabel: false, size: 2});
var p3 = board.create('point', [1, 1], {withLabel: false, size: 2, snapToGrid:true,snapSizeX:0.1, snapSizeY:0.1});
var p4 = board.create('point', [-2, 2], {withLabel: false, size: 2, snapToGrid:true, snapSizeX:0.1, snapSizeY:0.1});
var p5 = board.create('point', [3, 1], {name: 'M', withLabel: true, size: 2});
function p6x()
{
    return p3.X() * p5.X() + p4.X() * p5.Y();
}

function p6y()
{
    return p3.Y() * p5.X() + p4.Y() * p5.Y();
}
var p6 = board.create('point', [p6x, p6y], {color:'black',name: "M'", size:2})
var li1 = board.create('line', [p0, p1],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'i', withLabel: true, label: {position: 'top'}});
var li2 = board.create('line', [p0, p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'j', withLabel: true, label: {position: 'top'}});



var li3 = board.create('line', [p0, p3],
        {color: 'green', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u', withLabel: true, label: {position: 'top'}});
var li4 = board.create('line', [p0, p4],
        {color: 'green', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'v', withLabel: true, label: {position: 'top'}});


var li5 = board.create('line', [p0, p5],
        {color: 'black', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'OM', withLabel: false, label: {position: 'top'}});
var li6 = board.create('line', [p0, p6],
        {color: 'black', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: "OM'", withLabel: false, label: {position: 'top'}});


var sep = "&nbsp;&nbsp;&nbsp;";
txt1 = board.create('text', [-9.5, 9,
    function () {
        return p3.X().toFixed(2) + sep + p4.X().toFixed(2) + "<br />" + p3.Y().toFixed(2) + sep + p4.Y().toFixed(2);
    }],
        {fontSize: 15, color: 'black'});
