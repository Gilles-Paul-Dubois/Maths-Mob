var nameSpace2 = {};
nameSpace2.xmin = -5; // adjust as needed
nameSpace2.xmax = +5; // adjust as needed
nameSpace2.ymin = -5; // adjust according max value of f
nameSpace2.ymax = +5; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.choice = 0;
nameSpace2.start = nameSpace2.xmin;
nameSpace2.end = nameSpace2.xmax;
nameSpace2.x = nameSpace2.start;
nameSpace2.step = 0.2;
nameSpace2.animated = true;
//nameSpace2.turtle1 = nameSpace2.board.create('turtle1', [nameSpace2.x, nameSpace2.f(nameSpace2.x)]);
//nameSpace2.turtle1.hideTurtle();


nameSpace2.f0 = function (x)
{
    return Math.cos(x);
}
nameSpace2.f1 = function (x)
{
    return 0.2 * x * x;
}
nameSpace2.f2 = function (x)
{
    return 5 / (1 + x * x);
}
nameSpace2.f3 = function (x)
{
    return 0.01 * x * x * x + 0.05 * x * x - x;
}
nameSpace2.f4 = function (x)
{
    return 4 / (2 + Math.sin(x));
}
nameSpace2.f5 = function (x)
{
    return Math.exp(0.4 * x);
}

nameSpace2.df0 = function (x)
{
    return -Math.sin(x);
}
nameSpace2.df1 = function (x)
{
    return 0.4 * x;
}
nameSpace2.df2 = function (x)
{
    return (-10 * x) / ((1 + x * x) * (1 + x * x));
}
nameSpace2.df3 = function (x)
{
    return 0.03 * x * x + 0.1 * x - 1;
}
nameSpace2.df4 = function (x)
{
    return (-4 * Math.cos(x)) / ((2 + Math.sin(x)) * (2 + Math.sin(x)));
}
nameSpace2.df5 = function (x)
{
    return 0.4 * Math.exp(0.4 * x);
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
        case 4:
            return nameSpace2.f4(x);
        case 5:
            return nameSpace2.f5(x);
    }
}

nameSpace2.df = function (x)
{
    switch (nameSpace2.choice)
    {
        case 0:
            return nameSpace2.df0(x);
        case 1:
            return nameSpace2.df1(x);
        case 2:
            return nameSpace2.df2(x);
        case 3:
            return nameSpace2.df3(x);
        case 4:
            return nameSpace2.df4(x);
        case 5:
            return nameSpace2.df5(x);
    }
}
nameSpace2.next = function ()
{
    nameSpace2.choice = (nameSpace2.choice + 1) % 6;
    nameSpace2.go();
}

nameSpace2.approx = function (i, x)
{
    var a, b;
    a = nameSpace2.df(i);
    b = nameSpace2.f(i) - a * i;
    return a * x + b;
}

nameSpace2.showtan = function (i)
{
    nameSpace2.board.create('point', [i, nameSpace2.f(i)], {fixed: true, size: 1});
    var A = nameSpace2.board.create('point', [i - 0.25, nameSpace2.approx(i, i - 0.25)], {visible: false});
    var B = nameSpace2.board.create('point', [i + 0.25, nameSpace2.approx(i, i + 0.25)], {visible: false});
    nameSpace2.board.create('segment', [A, B], {color: 'red'});


}
nameSpace2.moveForward = function () {
    if (nameSpace2.animated)
    {
        nameSpace2.board.removeObject(nameSpace2.generic);
        nameSpace2.x += nameSpace2.step;
        if (nameSpace2.x >= nameSpace2.end) {
            nameSpace2.turtle1.moveTo([nameSpace2.x, nameSpace2.f(nameSpace2.x)]);
            nameSpace2.turtle2.moveTo([nameSpace2.x, nameSpace2.df(nameSpace2.x)]);
            nameSpace2.generic = nameSpace2.board.create('point', [nameSpace2.x, nameSpace2.f(nameSpace2.x)], {size: 1, withLabel: false});
            return;
        }
        nameSpace2.turtle1.moveTo([nameSpace2.x, nameSpace2.f(nameSpace2.x)]);
        nameSpace2.generic = nameSpace2.board.create('point', [nameSpace2.x, nameSpace2.f(nameSpace2.x)], {size: 1, withLabel: false})
        nameSpace2.turtle2.moveTo([nameSpace2.x, nameSpace2.df(nameSpace2.x)]);
        nameSpace2.A = nameSpace2.board.create('point', [nameSpace2.x + 0.5, nameSpace2.approx(nameSpace2.x, nameSpace2.x + 0.5)], {visible: false});

        nameSpace2.board.create('line', [nameSpace2.generic, nameSpace2.A], {color: 'red', straightFirst:false, straightLast:false,lastArrow:true});
    }
    setTimeout(nameSpace2.moveForward, 200); // delay by 200 ms
};
nameSpace2.pause = function ()
{
    nameSpace2.animated = !nameSpace2.animated;
}
nameSpace2.go = function ()
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true, showNavigation: false});
    nameSpace2.x = nameSpace2.start;
    nameSpace2.turtle1 = nameSpace2.board.create('turtle', [nameSpace2.x, nameSpace2.f(nameSpace2.x)], {strokeColor: 'green'});
    nameSpace2.turtle1.hideTurtle();
    nameSpace2.turtle2 = nameSpace2.board.create('turtle', [nameSpace2.x, nameSpace2.df(nameSpace2.x)], {strokeColor: 'blue'});
    nameSpace2.turtle2.hideTurtle();
    nameSpace2.animated = true;
    nameSpace2.moveForward();
}
nameSpace2.go();
//nameSpace2.Paint = function ()
//{
//    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board); 
//    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
//    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'green'});
//    nameSpace2.board.createElement('functiongraph', [nameSpace2.df, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'blue'});
//    var i;
//    for (i=-4; i<=4;i++)
//        nameSpace2.showtan(i);
//    
//}
//nameSpace2.Paint();