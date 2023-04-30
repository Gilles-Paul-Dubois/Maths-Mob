var nameSpace3 = {};
nameSpace3.xmin = -5; // adjust as needed
nameSpace3.xmax = +5; // adjust as needed
nameSpace3.ymin = -5; // adjust according max value of f
nameSpace3.ymax = +5; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.choice = 0;
nameSpace3.start = nameSpace3.xmin;
nameSpace3.end = nameSpace3.xmax;
nameSpace3.x = nameSpace3.start;
nameSpace3.step = 0.05;
nameSpace3.sens = 0.03;
nameSpace3.animated = true;
nameSpace3.last = -5;

nameSpace3.f0 = function (x)
{
    return Math.cos(x);
}
nameSpace3.f1 = function (x)
{
    return 0.2 * x * x;
}
nameSpace3.f2 = function (x)
{
    return 4 / (1 + x * x);
}
nameSpace3.f3 = function (x)
{
    return 0.01 * x * x * x + 0.05 * x * x - x;
}
nameSpace3.f4 = function (x)
{
    return 4 / (2 + Math.sin(x));
}
nameSpace3.f5 = function (x)
{
    return Math.exp(0.4 * x);
}
nameSpace3.f6 = function (x)
{
    if (x > 0)
        return x * x / 5;
    else
        return -x * x / 5;
}

nameSpace3.df0 = function (x)
{
    return -Math.sin(x);
}
nameSpace3.df1 = function (x)
{
    return 0.4 * x;
}
nameSpace3.df2 = function (x)
{
    return (-8 * x) / ((1 + x * x) * (1 + x * x));
}
nameSpace3.df3 = function (x)
{
    return 0.03 * x * x + 0.1 * x - 1;
}
nameSpace3.df4 = function (x)
{
    if (Math.abs(x + Math.PI / 2) <= nameSpace3.sens)
        return 0;
    if (Math.abs(x - 3 * Math.PI / 2) <= nameSpace3.sens)
        return 0;
    return (-4 * Math.cos(x)) / ((2 + Math.sin(x)) * (2 + Math.sin(x)));
}
nameSpace3.df5 = function (x)
{
    return 0.4 * Math.exp(0.4 * x);
}

nameSpace3.df6 = function (x)
{
    if (x > 0)
        return 2 * x / 5;
    else
        return -2 * x / 5;
}

nameSpace3.f = function (x)
{
    switch (nameSpace3.choice)
    {
        case 0:
            return nameSpace3.f0(x);
        case 1:
            return nameSpace3.f1(x);
        case 2:
            return nameSpace3.f2(x);
        case 3:
            return nameSpace3.f3(x);
        case 4:
            return nameSpace3.f4(x);
        case 5:
            return nameSpace3.f5(x);
        case 6:
            return nameSpace3.f6(x);
    }
}

nameSpace3.df = function (x)
{
    switch (nameSpace3.choice)
    {
        case 0:
            return nameSpace3.df0(x);
        case 1:
            return nameSpace3.df1(x);
        case 2:
            return nameSpace3.df2(x);
        case 3:
            return nameSpace3.df3(x);
        case 4:
            return nameSpace3.df4(x);
        case 5:
            return nameSpace3.df5(x);
        case 6:
            return nameSpace3.df6(x);
    }
}
nameSpace3.next = function ()
{
    nameSpace3.choice = (nameSpace3.choice + 1) % 7;
    nameSpace3.go();
}

nameSpace3.approx = function (i, x)
{
    var a, b;
    a = nameSpace3.df(i);
    b = nameSpace3.f(i) - a * i;
    return a * x + b;
}

nameSpace3.showtan = function (i)
{
    nameSpace3.board.create('point', [i, nameSpace3.f(i)], {fixed: true, size: 1});
    var A = nameSpace3.board.create('point', [i - 0.25, nameSpace3.approx(i, i - 0.25)], {visible: false});
    var B = nameSpace3.board.create('point', [i + 0.25, nameSpace3.approx(i, i + 0.25)], {visible: false});
    nameSpace3.board.create('segment', [A, B], {color: 'red'});


}
nameSpace3.moveForward = function () {
    if (nameSpace3.animated)
    {
        nameSpace3.board.removeObject(nameSpace3.generic);
        nameSpace3.x += nameSpace3.step;
        if (nameSpace3.x >= nameSpace3.end) {
            nameSpace3.turtle1.moveTo([nameSpace3.x, nameSpace3.f(nameSpace3.x)]);
            nameSpace3.turtle2.moveTo([nameSpace3.x, nameSpace3.df(nameSpace3.x)]);
            nameSpace3.generic = nameSpace3.board.create('point', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {size: 1, withLabel: false});
            if ((Math.abs(nameSpace3.df(nameSpace3.x)) <= nameSpace3.sens) && (nameSpace3.x - nameSpace3.last) >= 5 * nameSpace3.step)
            {
                nameSpace3.S = nameSpace3.board.create('point', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {size: 1, withLabel: false});
                nameSpace3.last = nameSpace3.x;
            }
            return;
        }
        nameSpace3.turtle1.moveTo([nameSpace3.x, nameSpace3.f(nameSpace3.x)]);
        nameSpace3.generic = nameSpace3.board.create('point', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {size: 1, withLabel: false})
        nameSpace3.turtle2.moveTo([nameSpace3.x, nameSpace3.df(nameSpace3.x)]);
        nameSpace3.A = nameSpace3.board.create('point', [nameSpace3.x + 0.5, nameSpace3.approx(nameSpace3.x, nameSpace3.x + 0.5)], {visible: false});
        if ((Math.abs(nameSpace3.df(nameSpace3.x)) <= nameSpace3.sens) && (nameSpace3.x - nameSpace3.last) >= 6 * nameSpace3.step)
        {
            nameSpace3.S = nameSpace3.board.create('point', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {size: 1, withLabel: false});
            nameSpace3.P = nameSpace3.board.create('point', [nameSpace3.x, 0], {size: 1, withLabel: false});
            nameSpace3.SP = nameSpace3.board.create('segment', [nameSpace3.S, nameSpace3.P], {color: 'red'});
            nameSpace3.last = nameSpace3.x;
        }
        nameSpace3.board.create('line', [nameSpace3.generic, nameSpace3.A], {color: 'red', straightFirst: false, straightLast: false, lastArrow: true});
    }
    setTimeout(nameSpace3.moveForward, 50); // delay by 50 ms
};
nameSpace3.pause = function ()
{
    nameSpace3.animated = !nameSpace3.animated;
}
nameSpace3.go = function ()
{
    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true, showNavigation: false});
    nameSpace3.x = nameSpace3.start;
    nameSpace3.last = nameSpace3.start;
    nameSpace3.turtle1 = nameSpace3.board.create('turtle', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {strokeColor: 'green'});
    nameSpace3.turtle1.hideTurtle();
    nameSpace3.turtle2 = nameSpace3.board.create('turtle', [nameSpace3.x, nameSpace3.df(nameSpace3.x)], {strokeColor: 'blue'});
    nameSpace3.turtle2.hideTurtle();
    nameSpace3.animated = true;
    nameSpace3.moveForward();
}
nameSpace3.go();
