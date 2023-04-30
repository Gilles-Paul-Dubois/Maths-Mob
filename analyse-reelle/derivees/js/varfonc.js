var nameSpace1 = {};
nameSpace1.xmin = -10; // adjust as needed
nameSpace1.xmax = +10; // adjust as needed
nameSpace1.ymin = -10; // adjust according max value of f
nameSpace1.ymax = +10; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.start = nameSpace1.xmin;
nameSpace1.end = nameSpace1.xmax;
nameSpace1.x = nameSpace1.start;
nameSpace1.step = 0.1;
nameSpace1.animated = true;

nameSpace1.f = function (x)
{
    return Math.abs(x) * Math.sin(x);
}
nameSpace1.df = function (x)
{
    if (x >= 0)
        return Math.sin(x) + x * Math.cos(x);
    else
        return -Math.sin(x) - x * Math.cos(x);
}

nameSpace1.approx = function (i, x)
{
    var a, b;
    a = nameSpace1.df(i);
    b = nameSpace1.f(i) - a * i;
    return a * x + b;
}

nameSpace1.showtan = function (i)
{
    nameSpace1.board.create('point', [i, nameSpace1.f(i)], {fixed: true, size: 1, withLabel: false});
    var A = nameSpace1.board.create('point', [i - 0.5, nameSpace1.approx(i, i - 0.5)], {visible: false});
    var B = nameSpace1.board.create('point', [i + 0.5, nameSpace1.approx(i, i + 0.5)], {visible: false});
    nameSpace1.board.create('segment', [A, B], {color: 'red'});


}
nameSpace1.checknul = function (x)
{
    if (Math.abs(x + 7.978) < nameSpace1.step)
        nameSpace1.showtan(-7.978);
    if (Math.abs(x + 4.913) < nameSpace1.step)
        nameSpace1.showtan(-4.913);
    if (Math.abs(x + 2.029) < nameSpace1.step)
        nameSpace1.showtan(-2.029);
    if (Math.abs(x) < nameSpace1.step)
        nameSpace1.showtan(0);
    if (Math.abs(x - 7.978) < nameSpace1.step)
        nameSpace1.showtan(7.978);
    if (Math.abs(x - 4.913) < nameSpace1.step)
        nameSpace1.showtan(4.913);
    if (Math.abs(x - 2.029) < nameSpace1.step)
        nameSpace1.showtan(2.029);
}


nameSpace1.moveForward = function () {
    if (nameSpace1.animated)
    {
        nameSpace1.board.removeObject(nameSpace1.generic);
        nameSpace1.x += nameSpace1.step;
        if (nameSpace1.x >= nameSpace1.end) {
            nameSpace1.turtle1.moveTo([nameSpace1.x, nameSpace1.f(nameSpace1.x)]);
            nameSpace1.generic = nameSpace1.board.create('point', [nameSpace1.x, nameSpace1.f(nameSpace1.x)], {size: 1, withLabel: false});
            return;
        }
        nameSpace1.turtle1.moveTo([nameSpace1.x, nameSpace1.f(nameSpace1.x)]);
        nameSpace1.generic = nameSpace1.board.create('point', [nameSpace1.x, nameSpace1.f(nameSpace1.x)], {size: 1, withLabel: false})
        nameSpace1.A = nameSpace1.board.create('point', [nameSpace1.x + 0.5, nameSpace1.approx(nameSpace1.x, nameSpace1.x + 0.5)], {visible: false});
        nameSpace1.board.create('line', [nameSpace1.generic, nameSpace1.A], {color: 'red', straightFirst: false, straightLast: false, lastArrow: true});
        nameSpace1.checknul(nameSpace1.x);
    }
    setTimeout(nameSpace1.moveForward, 200); // delay by 200 ms
};
nameSpace1.pause = function ()
{
    nameSpace1.animated = !nameSpace1.animated;
}
nameSpace1.go = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation: false});
    nameSpace1.x = nameSpace1.start;
    nameSpace1.turtle1 = nameSpace1.board.create('turtle', [nameSpace1.x, nameSpace1.f(nameSpace1.x)], {strokeColor: 'green'});
    nameSpace1.turtle1.hideTurtle();
    nameSpace1.turtle2 = nameSpace1.board.create('turtle', [nameSpace1.x, nameSpace1.df(nameSpace1.x)], {strokeColor: 'blue'});
    nameSpace1.turtle2.hideTurtle();
    nameSpace1.animated = true;
    nameSpace1.moveForward();

}
nameSpace1.go();