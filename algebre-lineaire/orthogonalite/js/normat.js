/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-5, 5, 5, -5], axis: true});
var p0 = board.create('point', [0, 0], {fixed: true, visible: false});
var p1 = board.create('point', [1, 0], {fixed: true, visible: false, withLabel: false, size: 2});
var p2 = board.create('point', [0, 1], {fixed: true, visible: false, withLabel: false, size: 2});
var p3 = board.create('point', [2, 2], {withLabel: false, size: 2, snapToGrid: true, snapSizeX: 0.1, snapSizeY: 0.1});
var p4 = board.create('point', [-2, 2], {withLabel: false, size: 2, snapToGrid: true, snapSizeX: 0.1, snapSizeY: 0.1});

function p6x()
{
    return p3.X() * p5.X() + p4.X() * p5.Y();
}

function p6y()
{
    return p3.Y() * p5.X() + p4.Y() * p5.Y();
}

var li1 = board.create('line', [p0, p1],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'i', withLabel: true, label: {position: 'top'}});
var li2 = board.create('line', [p0, p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'j', withLabel: true, label: {position: 'top'}});



var li3 = board.create('line', [p0, p3],
        {color: 'green', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u', withLabel: true, label: {position: 'top'}});
var li4 = board.create('line', [p0, p4],
        {color: 'green', straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'v', withLabel: true, label: {position: 'top'}});


function c1(t)
{
    return p3.X() * Math.cos(t) + p4.X() * Math.sin(t);
}

function c2(t)
{
    return p3.Y() * Math.cos(t) + p4.Y() * Math.sin(t);
}

function norme(t)
{
    return Math.sqrt(c1(t) * c1(t) + c2(t) * c2(t));
}

function maxn()
{
    var theta, t;
    var M, T;
    M = 0, T = 0;
    var N;
    for (theta = 0; theta < 360; theta++)
    {
        t = theta * Math.PI / 180;
        N = norme(t);
        if (N > M)
        {
            T = t;
            M = N
        }
    }
    return[T, M]
}
function xmax()
{
    return c1(maxn()[0]);
}
function ymax()
{
    return c2(maxn()[0]);
}

board.create('curve', [c1, c2, 0, 2 * Math.PI],{fillColor:'yellow',fillOpacity:0.2});
p5=board.create('point',[xmax,ymax],{size:1, color:'blue', withLabel:false});
board.create('line',[p0,p5], {strokeWidth:1,straightFirst:false, straightLast:false, color:'brown'});
var sep = "&nbsp;&nbsp;&nbsp;";
txt1 = board.create('text', [-4.25, 4.5,
    function () {
        return "M<br/>"+p3.X().toFixed(2) + sep + p4.X().toFixed(2) + "<br />" + p3.Y().toFixed(2) + sep + p4.Y().toFixed(2);
    }],
        {fontSize: 15, color: 'black'});
txt2=board.create('text',[-2,4.5,
    function(){return "||M||="+maxn()[1].toFixed(2)}],
{fontSize:15, color:'brown'})   ;     
