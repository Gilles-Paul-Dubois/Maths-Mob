/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-1, 4, 4, -2], axis: true});

var A = board.create('point', [0, -1], {size: 1, fixed: true, color: 'blue'})
var B = board.create('point', [3, 3], {size: 1, fixed: true, color: 'blue'})
var D1 = board.create('line', [[0, 0], [1, 0]], {});
var D1 = board.create('line', [[0, 1], [1, 1]], {});
var S = board.create('segment', [[0, 0], [3, 0]], {visible: false});
var X = board.create('point', [0, 0], {slideObject: S, size: 1, name: 'X'});
var Y = board.create('point', [function () {
        return X.X();
    }, 1], {size: 1, name: 'Y'});
var S1 = board.create('segment', [A, X], {color: 'green'});
var S2 = board.create('segment', [X, Y], {color: 'green'});
var S3 = board.create('segment', [Y, B], {color: 'green'});
function txt1()
{
var d1= Math.sqrt((A.X()-X.X())*(A.X()-X.X())+(A.Y()-X.Y())*(A.Y()-X.Y()));
var d2= Math.sqrt((Y.X()-B.X())*(Y.X()-B.X())+(Y.Y()-B.Y())*(Y.Y()-B.Y()));
return "D="+(d1+d2+1);
}
board.create('text',[2,-1,txt1]);