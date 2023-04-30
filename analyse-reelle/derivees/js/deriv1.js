var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +13; // adjust as needed
nameSpace1.ymin = -800; // adjust according max value of f
nameSpace1.ymax = +30; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {visible: false});
nameSpace1.animated = true;

nameSpace1.f = function (x)
{
    return -0.5 * 9.81 * x * x;
}


nameSpace1.start = 0;
nameSpace1.end = 12;
nameSpace1.x = nameSpace1.start;
nameSpace1.step = 0.2;
nameSpace1.turtle = nameSpace1.board.create('turtle', [nameSpace1.x, nameSpace1.f(nameSpace1.x)]);
nameSpace1.turtle.hideTurtle();

nameSpace1.moveForward = function () {
    if (nameSpace1.animated)
    {
        nameSpace1.board.removeObject(nameSpace1.generic);
        nameSpace1.board.removeObject(nameSpace1.OM);
        nameSpace1.x += nameSpace1.step;
        if (nameSpace1.x >= nameSpace1.end) {
            nameSpace1.turtle.moveTo([nameSpace1.x, nameSpace1.f(nameSpace1.x)]);
            nameSpace1.generic = nameSpace1.board.create('point', [nameSpace1.x, nameSpace1.f(nameSpace1.x)], {size: 1, withLabel: false});
            nameSpace1.OM = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.generic], {straightFirst: false, straightLast: false, color: 'red'});
            return;
        }
        nameSpace1.turtle.moveTo([nameSpace1.x, nameSpace1.f(nameSpace1.x)]);
        nameSpace1.generic = nameSpace1.board.create('point', [nameSpace1.x, nameSpace1.f(nameSpace1.x)], {size: 1, withLabel: false})
        nameSpace1.OM = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.generic], {straightFirst: false, straightLast: false, color: 'red'})
    }
    setTimeout(nameSpace1.moveForward, 200); // delay by 200 ms
};

nameSpace1.pause = function ()
{
    nameSpace1.animated = !nameSpace1.animated;
}
nameSpace1.time=function()
{
    return "t="+nameSpace1.x.toFixed(2);
}

nameSpace1.position=function()
{
    return "x="+nameSpace1.f(nameSpace1.x).toFixed(0)
}

nameSpace1.avspeed=function()
{
    var s;
    if (nameSpace1.x==0)
        s=0;
    else
        s=nameSpace1.f(nameSpace1.x)/nameSpace1.x;
    return "v<sub>m</sub>="+s.toFixed(2);
}
nameSpace1.go = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation:false});
    nameSpace1.O = nameSpace1.board.create('point', [0, 0], {visible: false});
    nameSpace1.x = nameSpace1.start;
    nameSpace1.turtle = nameSpace1.board.create('turtle', [nameSpace1.x, nameSpace1.f(nameSpace1.x)], {strokeColor: 'green'});
    nameSpace1.turtle.hideTurtle();
    nameSpace1.animated = true;
    nameSpace1.board.create('text',[10,-100, nameSpace1.time]);
    nameSpace1.board.create('text',[10,-130, nameSpace1.position]);
    nameSpace1.board.create('text',[10,-160, nameSpace1.avspeed]);
    nameSpace1.moveForward();
}

 