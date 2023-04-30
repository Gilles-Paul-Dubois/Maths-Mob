var nameSpace3 = {};
nameSpace3.xmin = -1; // adjust as needed
nameSpace3.xmax = +9; // adjust as needed
nameSpace3.ymin = -1; // adjust according max value of f
nameSpace3.ymax = +9; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.f = function (x)
{
    return Math.sin(x) * 3 + 3;
}

nameSpace3.g = function (x)
{
    return Math.sqrt(10 * x);
}
nameSpace3.Paint = function ()
{
    nameSpace3.board.suspendUpdate();
    nameSpace3.board.createElement('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace3.slider1 = nameSpace3.board.create('slider', [[0, 8], [3, 8], [0, 1, 2]], {snapWidth: 0.1, name: 'a', withLabel: true});
 /*   nameSpace3.board.create('text', [4, 8, function () {
            num = nameSpace3.slider1.Value();
            return '<center>Valeur de a : ' + num.toFixed(2) + '</center>'
        }]);
*/        
    nameSpace3.slider2 = nameSpace3.board.create('slider', [[0, 7.5], [3, 7.5], [5, 6, 8]], {snapWidth: 0.1, name: 'b', withLabel: true});
 /*   nameSpace3.board.create('text', [4, 7.5, function () {
            num = nameSpace3.slider2.Value();
            return '<center>Valeur de b : ' + num.toFixed(2) + '</center>'
        }]);
*/        
    nameSpace3.A = nameSpace3.board.create('point', [function () {
            return nameSpace3.slider1.Value();
        }, 0], {size: 1, withLabel: true, color: 'blue', name: 'a'});
    nameSpace3.A1 = nameSpace3.board.create('point', [function () {
            return nameSpace3.slider1.Value();
        },
        function () {
            return nameSpace3.f(nameSpace3.slider1.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace3.A2 = nameSpace3.board.create('point', [0,
        function () {
            return nameSpace3.f(nameSpace3.slider1.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace3.board.unsuspendUpdate();
    nameSpace3.AA1 = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.A1], {straightFirst: false, straightLast: false});
    nameSpace3.A1A2 = nameSpace3.board.create('line', [nameSpace3.A1, nameSpace3.A2], {straightFirst: false, straightLast: false});

    nameSpace3.B = nameSpace3.board.create('point', [function () {
            return nameSpace3.slider2.Value();
        }, 0], {size: 1, name: 'b', withLabel: true, color: 'blue'});
    nameSpace3.B1 = nameSpace3.board.create('point', [function () {
            return nameSpace3.slider2.Value();
        },
        function () {
            return nameSpace3.f(nameSpace3.slider2.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace3.B2 = nameSpace3.board.create('point', [0,
        function () {
            return nameSpace3.f(nameSpace3.slider2.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace3.board.unsuspendUpdate();
    nameSpace3.BB1 = nameSpace3.board.create('line', [nameSpace3.B, nameSpace3.B1], {straightFirst: false, straightLast: false});
    nameSpace3.B1B2 = nameSpace3.board.create('line', [nameSpace3.B1, nameSpace3.B2], {straightFirst: false, straightLast: false});
    nameSpace3.A2B2 = nameSpace3.board.create('line', [nameSpace3.A2, nameSpace3.B2], {straightFirst: false, straightLast: false});
    nameSpace3.M = nameSpace3.board.create('point', [0, (nameSpace3.A2.Y() + nameSpace3.B2.Y()) / 2], {name: 'm', size: 1, slideObject: nameSpace3.A2B2});
    nameSpace3.N = nameSpace3.board.create('point', [function () {
            return nameSpace3.g(nameSpace3.M.Y());
        }, function () {
            return nameSpace3.M.Y();
        }], {size: 1, name: 'N', withLabel: false, color: 'blue', visible: false});
    //nameSpace3.MN = nameSpace3.board.create('line', [nameSpace3.M, nameSpace3.N], {straightFirst: false, straightLast: true});
    nameSpace3.MN = nameSpace3.board.create('functiongraph', [function() {return nameSpace3.M.Y();}, function (){ return nameSpace3.A.X();}, function(){ return nameSpace3.B.X();}]);
    nameSpace3.curve = nameSpace3.board.createElement('functiongraph', [nameSpace3.f, function () {
            return nameSpace3.A.X();
        }, function () {
            return nameSpace3.B.X();
        }], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace3.I1 = nameSpace3.board.create('intersection', [nameSpace3.curve, nameSpace3.MN, 0], {size: 1, withLabel: false});
    nameSpace3.I2 = nameSpace3.board.create('intersection', [nameSpace3.curve, nameSpace3.MN, 1], {size: 1, withLabel: false});
    nameSpace3.I3 = nameSpace3.board.create('intersection', [nameSpace3.curve, nameSpace3.MN, 2], {size: 1, withLabel: false});
    nameSpace3.D=nameSpace3.board.create('line',[nameSpace3.M,nameSpace3.N]);
}
nameSpace3.Paint();