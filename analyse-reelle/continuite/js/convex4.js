var nameSpace4 = {};
nameSpace4.xmin = -1; // adjust as needed
nameSpace4.xmax = +9; // adjust as needed
nameSpace4.ymin = -1; // adjust according max value of f
nameSpace4.ymax = +9; // adjust according min value of f
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.f = function (x)
{
    return x * x / 9;
}
nameSpace4.Paint = function ()
{
    nameSpace4.board.suspendUpdate();
    nameSpace4.board.createElement('functiongraph', [nameSpace4.f, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'black', strokeSize:2});
    nameSpace4.O = nameSpace4.board.create('point', [0, 0], {size: 1, withlabel: false, fixed: true, color: 'blue'});
    nameSpace4.A = nameSpace4.board.create('point', [3, 0], {size: 1, withlabel: false, fixed: true, color: 'blue'});
    nameSpace4.OA = nameSpace4.board.create('line', [nameSpace4.O, nameSpace4.A], {visible: false, straightFirst: false, straightLast: false});
    nameSpace4.a = nameSpace4.board.create('point', [1, 0], {size: 1, name: 'a', withlabel: true, slideObject: nameSpace4.OA, color: 'red'});

    nameSpace4.X = nameSpace4.board.create('point', [8, 0], {size: 1, withlabel: false, fixed: true, color: 'blue'});
    nameSpace4.B = nameSpace4.board.create('point', [5, 0], {size: 1, withlabel: false, fixed: true, color: 'blue'});
    nameSpace4.BX = nameSpace4.board.create('line', [nameSpace4.B, nameSpace4.X], {visible: false, straightFirst: false, straightLast: false});
    nameSpace4.b = nameSpace4.board.create('point', [7, 0], {size: 1, name: 'b', withlabel: true, slideObject: nameSpace4.BX, color: 'red'});

    nameSpace4.AB = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {visible: false, straightFirst: false, straightLast: false});
    nameSpace4.c = nameSpace4.board.create('point', [4, 0], {size: 1, name: 'c', withlabel: true, slideObject: nameSpace4.AB, color: 'red'});
    nameSpace4.Ma=nameSpace4.board.create('point',[function(x) {return nameSpace4.a.X();},
    function(x) {return nameSpace4.f(nameSpace4.a.X());}], {size:1, color:'green', withLabel:false});
    nameSpace4.Mb=nameSpace4.board.create('point',[function(x) {return nameSpace4.b.X();},
    function(x) {return nameSpace4.f(nameSpace4.b.X());}], {size:1, color:'green', withLabel:false});
    nameSpace4.Mc=nameSpace4.board.create('point',[function(x) {return nameSpace4.c.X();},
    function(x) {return nameSpace4.f(nameSpace4.c.X());}], {size:1, color:'green', withLabel:false});
    nameSpace4.board.unsuspendUpdate();
    nameSpace4.C1=nameSpace4.board.create('line',[nameSpace4.Ma,nameSpace4.Mb],{straightFirst:false, straightLast:false, color: 'green'});
    nameSpace4.C2=nameSpace4.board.create('line',[nameSpace4.Ma,nameSpace4.Mc],{straightFirst:false, straightLast:false, color: 'green'});
    nameSpace4.C3=nameSpace4.board.create('line',[nameSpace4.Mc,nameSpace4.Mb],{straightFirst:false, straightLast:false, color: 'green'});
    
    nameSpace4.V1=nameSpace4.board.create('line',[nameSpace4.a,nameSpace4.Ma],{straightFirst:false, straightLast:false, color: 'red'});
    nameSpace4.V2=nameSpace4.board.create('line',[nameSpace4.b,nameSpace4.Mb],{straightFirst:false, straightLast:false, color: 'red'});
    nameSpace4.V3=nameSpace4.board.create('line',[nameSpace4.c,nameSpace4.Mc],{straightFirst:false, straightLast:false, color: 'red'});
}
nameSpace4.Paint();