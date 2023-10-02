/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis: false});
var p1 = board.create('point', [1, 1]);
var p2 = board.create('point', [5, 5]);
if(document.body.className.substring(0,2)=="fr")
var li1 = board.create('line', [p1, p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vecteur V', withLabel: true,label: {position: 'top'}});
        else
        var li1 = board.create('line', [p1, p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'Vector V', withLabel: true,label: {position: 'top'}});
var perp1 = board.create('perpendicular', [li1, p1]);
var perp2 = board.create('perpendicular', [li1, p2]);
var p3 = board.create('point', [p1.X(), p1.Y() + 3], {visible: false});
var pl1 = board.create('parallel', [li1, p3], {name: 'Direction', withLabel: true});
var p4 = board.create('point', [1, function () {
        return p1.Y() - 3
    }], {visible: false});
function absp4()
{
    return p4.X() + 0.5 * (p2.X() - p1.X());
}
function ordp4()
{
    return p4.Y() + 0.5 * (p2.Y() - p1.Y());
}
var p5 = board.create('point', [absp4, ordp4], {visible: false});
if(document.body.className.substring(0,2)=="fr")
var sens = board.create('line', [p4, p5], {lastArrow: true, straightFirst: false, straightLast: false, name: 'Sens', withLabel: true, label: {position: 'top'}});
else 
var sens = board.create('line', [p4, p5], {lastArrow: true, straightFirst: false, straightLast: false, name: 'Sense', withLabel: true, label: {position: 'top'}});
var i1 = board.create('intersection', [pl1, perp1], {visible: false});
var i2 = board.create('intersection', [pl1, perp2], {visible: false});
if(document.body.className.substring(0,2)=="fr")
var module = board.create('line', [i1, i2], {straightFirst: false, straightLast: false, lastArrow: true, firstArrow: true, name: 'Intensité', withLabel: true, label: {position: 'top'},strokeColor: 'green'});
else 
var module = board.create('line', [i1, i2], {straightFirst: false, straightLast: false, lastArrow: true, firstArrow: true, name: 'Intensity', withLabel: true, label: {position: 'top'},strokeColor: 'green'});