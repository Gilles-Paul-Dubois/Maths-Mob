var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});

nameSpace1.choice = 0;
nameSpace1.f = function (x)
{
    switch (nameSpace1.choice)
    {
        case 0:
            return nameSpace1.f0(x);
        case 1:
            return nameSpace1.f1(x);
        case 2:
            return nameSpace1.f2(x);
        case 3:
            return nameSpace1.f3(x);

    }
}
nameSpace1.rf = function (x)
{
    switch (nameSpace1.choice)
    {
        case 0:
            return nameSpace1.rf0(x);
        case 1:
            return nameSpace1.rf1(x);
        case 2:
            return nameSpace1.rf2(x);
        case 3:
            return nameSpace1.rf3(x);

    }
}


nameSpace1.f0 = function (x)
{
    return x + 1;
}

nameSpace1.rf0 = function (x)
{
    return x - 1;
}


nameSpace1.f1 = function (x)
{
    return 0.1 * x * x * x;
}

nameSpace1.rf1 = function (x)
{
    if (x >= 0)
        return Math.pow(10 * x, 1 / 3);
    else
        return -Math.pow(-10 * x, 1 / 3);
}
nameSpace1.f2 = function (x)
{
    return 5 * Math.sin(x * Math.PI / 12);
}

nameSpace1.rf2 = function (x)
{
    return (12 / Math.PI) * Math.asin(x / 5);
}


nameSpace1.f3 = function (x)
{
    return Math.tan(x * Math.PI / 12);
}

nameSpace1.rf3 = function (x)
{
    return (12 / Math.PI) * Math.atan(x);
}

nameSpace1.next = function ()
{
    nameSpace1.choice = (nameSpace1.choice + 1) % 4;
    nameSpace1.Paint();
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.O = nameSpace1.board.create('point', [0, 0], {visible: false});
    nameSpace1.A = nameSpace1.board.create('point', [1, 1], {visible: false});
    nameSpace1.D = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.A]);
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.rf, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();