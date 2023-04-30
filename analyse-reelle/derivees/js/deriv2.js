var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +13; // adjust as needed
nameSpace2.ymin = -800; // adjust according max value of f
nameSpace2.ymax = +30; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.O = nameSpace2.board.create('point', [0, 0], {visible: false});
nameSpace2.cursor = nameSpace2.board.create('slider', [[1, -700], [3, -700], [0.2, 0.5, 1]]);


nameSpace2.animated = true;

nameSpace2.f = function (x)
{
    return -0.5 * 9.81 * x * x;
}


nameSpace2.start = 0;
nameSpace2.end = 12;
nameSpace2.x = nameSpace2.start;
nameSpace2.step = 0.2;
nameSpace2.turtle = nameSpace2.board.create('turtle', [nameSpace2.x, nameSpace2.f(nameSpace2.x)]);
nameSpace2.turtle.hideTurtle();

nameSpace2.moveForward = function () {

    var intwidth = nameSpace2.cursor.Value();
    if (nameSpace2.animated)
    {
        nameSpace2.board.removeObject(nameSpace2.generic);
        nameSpace2.board.removeObject(nameSpace2.N);
        nameSpace2.board.removeObject(nameSpace2.NM);
        nameSpace2.x += nameSpace2.step;
        if (nameSpace2.x >= nameSpace2.end) {
            nameSpace2.turtle.moveTo([nameSpace2.x, nameSpace2.f(nameSpace2.x)]);
            nameSpace2.generic = nameSpace2.board.create('point', [nameSpace2.x, nameSpace2.f(nameSpace2.x)], {size: 1, withLabel: false});
            if (nameSpace2.x >= intwidth)
            {
                nameSpace2.N = nameSpace2.board.create('point', [nameSpace2.x - intwidth, nameSpace2.f(nameSpace2.x - intwidth)], {size: 1, withLabel: false});
                nameSpace2.NM = nameSpace2.board.create('line', [nameSpace2.N, nameSpace2.generic], {straightFirst: false, straightLast: false, color: 'red'});
            }
            return;
        }
        nameSpace2.turtle.moveTo([nameSpace2.x, nameSpace2.f(nameSpace2.x)]);
        nameSpace2.generic = nameSpace2.board.create('point', [nameSpace2.x, nameSpace2.f(nameSpace2.x)], {size: 1, withLabel: false})
        if (nameSpace2.x >= intwidth)
        {
            nameSpace2.N = nameSpace2.board.create('point', [nameSpace2.x - intwidth, nameSpace2.f(nameSpace2.x - intwidth)], {size: 1, withLabel: false});
            nameSpace2.NM = nameSpace2.board.create('line', [nameSpace2.N, nameSpace2.generic], {straightFirst: false, straightLast: false, color: 'red'});
        }
    }
    setTimeout(nameSpace2.moveForward, 200); // delay by 200 ms
};

nameSpace2.pause = function ()
{
    nameSpace2.animated = !nameSpace2.animated;

}
nameSpace2.time = function ()
{
    return "t=" + nameSpace2.x.toFixed(2);
}

nameSpace2.position = function ()
{
    return "x=" + nameSpace2.f(nameSpace2.x).toFixed(0)
}

nameSpace2.avspeed = function ()
{
    var s;
    var intwidth = nameSpace2.cursor.Value();
    if (nameSpace2.x > intwidth) {

        s = (nameSpace2.f(nameSpace2.x) - nameSpace2.f(nameSpace2.x - intwidth)) / intwidth;
        return "v<sub>m</sub>=" + s.toFixed(2);
    }
    else
        return "";
}

nameSpace2.delta = function ()
{
    return "&delta;t=" + nameSpace2.cursor.Value().toFixed(2);
}
nameSpace2.go = function ()
{

    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true, showNavigation: false});
    nameSpace2.cursor = nameSpace2.board.create('slider', [[1, -700], [3, -700], [0.2, 0.5, 1]]);
    nameSpace2.O = nameSpace2.board.create('point', [0, 0], {visible: false});
    nameSpace2.x = nameSpace2.start;
    nameSpace2.turtle = nameSpace2.board.create('turtle', [nameSpace2.x, nameSpace2.f(nameSpace2.x)], {strokeColor: 'green'});
    nameSpace2.turtle.hideTurtle();
    nameSpace2.animated = true;
    nameSpace2.board.create('text', [10, -100, nameSpace2.time]);
    nameSpace2.board.create('text', [10, -130, nameSpace2.position]);
    nameSpace2.board.create('text', [10, -160, nameSpace2.avspeed]);
    nameSpace2.board.create('text', [10, -190, nameSpace2.delta]);
    nameSpace2.moveForward();
}

 