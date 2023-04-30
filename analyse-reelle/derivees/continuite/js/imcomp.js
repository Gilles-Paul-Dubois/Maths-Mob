var nameSpace2 = {};
nameSpace2.choice = 0;
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +9; // adjust as needed
nameSpace2.ymin = -1; // adjust according max value of f
nameSpace2.ymax = +9; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});

nameSpace2.slider1 = nameSpace2.board.create('slider', [[0, 8], [3, 8], [0, 1, 3]], {snapWidth: 0.1, name: 'a', withLabel: true});
nameSpace2.slider2 = nameSpace2.board.create('slider', [[0, 7.5], [3, 7.5], [4, 6, 8]], {snapWidth: 0.1, name: 'b', withLabel: true});
nameSpace2.f0 = function (x)
{
    return (x * x / 10) * Math.sin(x) + 2;
}
nameSpace2.f1 = function (x)
{
    return -0.10 * (x - 4) * (x - 4) + 4;
}

nameSpace2.f2 = function (x)
{
    return 2 * Math.sin(x * Math.PI / 4) + 4;
}

nameSpace2.f3 = function (x)
{
    return 0.05 * ((x - 4) * (x - 4) * (x - 4) - 8 * (x - 4)) + 4;
}

nameSpace2.f = function (x)
{
    switch (nameSpace2.choice)
    {
        case 0:
            return nameSpace2.f0(x);
        case 1:
            return nameSpace2.f1(x);
        case 2:
            return nameSpace2.f2(x);
        case 3:
            return nameSpace2.f3(x);

    }
}

nameSpace2.next = function ()
{
    nameSpace2.choice = (nameSpace2.choice + 1) % 4;
    nameSpace2.Paint();
}

nameSpace2.detMax = function ()
{
    var a = nameSpace2.slider1.Value();
    var b = nameSpace2.slider2.Value();
    var x;
    var M = nameSpace2.f(a);
    var y = a;
    var u;
    for (x = a; x <= b; x += 0.01)
    {
        u = nameSpace2.f(x)
        if (u > M)
        {
            M = u;
            y = x
        }
    }
    return [y, M];

}

nameSpace2.detMin = function ()
{
    var a = nameSpace2.slider1.Value();
    var b = nameSpace2.slider2.Value();
    var x;
    var M = nameSpace2.f(a);
    var y = a;
    var u;
    for (x = a; x <= b; x += 0.01)
    {
        u = nameSpace2.f(x)
        if (u < M)
        {
            M = u;
            y = x
        }
    }
    return [y, M];

}

nameSpace2.Paint = function ()
{

    nameSpace2.board.suspendUpdate();
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});

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
    
    nameSpace2.M1=nameSpace2.board.create('point',[function(){return nameSpace2.detMax()[0];},function(){return nameSpace2.detMax()[1];}],{size:1, color:'red', withLabel:false, fixed:true})
    nameSpace2.M2=nameSpace2.board.create('point',[function(){return nameSpace2.detMin()[0];},function(){return nameSpace2.detMin()[1];}],{size:1, color:'brown', withLabel:false, fixed:true})
    
    nameSpace2.board.unsuspendUpdate();
}
nameSpace2.Paint();