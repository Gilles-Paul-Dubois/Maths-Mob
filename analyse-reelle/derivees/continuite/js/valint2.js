var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +9; // adjust as needed
nameSpace2.ymin = -1; // adjust according max value of f
nameSpace2.ymax = +9; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.f = function (x)
{
    return x * x / 10;
}

nameSpace2.g = function (x)
{
    return Math.sqrt(10 * x);
}
nameSpace2.Paint = function ()
{
    nameSpace2.board.suspendUpdate();
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace2.slider1 = nameSpace2.board.create('slider', [[0, 8], [3, 8], [0, 2, 4]], {snapWidth: 0.1, name: 'a', withLabel: true});
    nameSpace2.slider2 = nameSpace2.board.create('slider', [[0, 7.5], [3, 7.5], [5, 6, 8]], {snapWidth: 0.1, name: 'b', withLabel: true});
    nameSpace2.A = nameSpace2.board.create('point', [function () {
            return nameSpace2.slider1.Value();
        }, 0], {size: 1, withLabel: true, color: 'blue', name: 'a'});
    nameSpace2.A1 = nameSpace2.board.create('point', [function () {
            return nameSpace2.slider1.Value();
        },
        function () {
            return nameSpace2.f(nameSpace2.slider1.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace2.A2 = nameSpace2.board.create('point', [0,
        function () {
            return nameSpace2.f(nameSpace2.slider1.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace2.board.unsuspendUpdate();
    nameSpace2.AA1 = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.A1], {straightFirst: false, straightLast: false});
    nameSpace2.A1A2 = nameSpace2.board.create('line', [nameSpace2.A1, nameSpace2.A2], {straightFirst: false, straightLast: false});

    nameSpace2.B = nameSpace2.board.create('point', [function () {
            return nameSpace2.slider2.Value();
        }, 0], {size: 1, name: 'b', withLabel: true, color: 'blue'});
    nameSpace2.B1 = nameSpace2.board.create('point', [function () {
            return nameSpace2.slider2.Value();
        },
        function () {
            return nameSpace2.f(nameSpace2.slider2.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace2.B2 = nameSpace2.board.create('point', [0,
        function () {
            return nameSpace2.f(nameSpace2.slider2.Value());
        }], {size: 1, withLabel: false, color: 'blue'});
    nameSpace2.board.unsuspendUpdate();
    nameSpace2.BB1 = nameSpace2.board.create('line', [nameSpace2.B, nameSpace2.B1], {straightFirst: false, straightLast: false});
    nameSpace2.B1B2 = nameSpace2.board.create('line', [nameSpace2.B1, nameSpace2.B2], {straightFirst: false, straightLast: false});
    nameSpace2.A2B2 = nameSpace2.board.create('line', [nameSpace2.A2, nameSpace2.B2], {straightFirst: false, straightLast: false});
    nameSpace2.M = nameSpace2.board.create('point', [0, 2], {name: 'm', size: 1, slideObject: nameSpace2.A2B2});
    nameSpace2.N = nameSpace2.board.create('point', [function () {
            return nameSpace2.g(nameSpace2.M.Y());
        }, function () {
            return nameSpace2.M.Y();
        }], {size: 1, name: 'N', withLabel: false, color: 'blue'});
    nameSpace2.MN = nameSpace2.board.create('line', [nameSpace2.M, nameSpace2.N], {straightFirst: false, straightLast: false});
    nameSpace2.P = nameSpace2.board.create('point', [function () {
            return nameSpace2.N.X();
        }, 0], {size: 1, name: 'P', name:'c',withLabel: true, color: 'blue'});
    nameSpace2.NP = nameSpace2.board.create('line', [nameSpace2.N, nameSpace2.P], {straightFirst: false, straightLast: false});
   nameSpace2.board.create('text', [0.5, 7, function () {
            num = nameSpace2.M.Y();
   if(document.body.className.substring(0,2)=="fr")  
   {             return '<center>Valeur de m : ' + num.toFixed(2) + '</center>'}
else
 {             return '<center>Value of m : ' + num.toFixed(2) + '</center>'}
        }], {color:'red'});
	nameSpace2.board.create('text', [3, 7, function () {
            num = nameSpace2.P.X();
 
   if(document.body.className.substring(0,2)=="fr")  
   {             return '<center>Valeur de c : ' + num.toFixed(2) + '</center>'}
else
   {             return '<center>Value of c : ' + num.toFixed(2) + '</center>'}
        }], {color:'red'});    
}
nameSpace2.Paint();