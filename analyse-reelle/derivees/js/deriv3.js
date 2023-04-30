var nameSpace3 = {};
nameSpace3.xmin = -1; // adjust as needed
nameSpace3.xmax = +13; // adjust as needed
nameSpace3.ymin = -800; // adjust according max value of f
nameSpace3.ymax = +30; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.O = nameSpace3.board.create('point', [0, 0], {visible: false});

nameSpace3.animated = true;

nameSpace3.f = function (x)
{
    return -0.5 * 9.81 * x * x;
}


nameSpace3.start = 0;
nameSpace3.end = 12;
nameSpace3.x = nameSpace3.start;
nameSpace3.step = 0.2;
nameSpace3.turtle = nameSpace3.board.create('turtle', [nameSpace3.x, nameSpace3.f(nameSpace3.x)]);
nameSpace3.turtle.hideTurtle();

nameSpace3.moveForward = function () {

    var u, v;
    if (nameSpace3.animated)
    {
        nameSpace3.board.removeObject(nameSpace3.generic);
        nameSpace3.board.removeObject(nameSpace3.N);
        nameSpace3.board.removeObject(nameSpace3.NM);
        nameSpace3.x += nameSpace3.step;
        if (nameSpace3.x >= nameSpace3.end) {
            nameSpace3.turtle.moveTo([nameSpace3.x, nameSpace3.f(nameSpace3.x)]);
            nameSpace3.generic = nameSpace3.board.create('point', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {size: 1, withLabel: false});
            u = nameSpace3.x;
            v = nameSpace3.f(u);
            nameSpace3.N = nameSpace3.board.create('point', [u+1, v - 9.81*u ], {size: 1, withLabel: false, visible:false});
            nameSpace3.NM = nameSpace3.board.create('line', [nameSpace3.N, nameSpace3.generic], {straightFirst: false, straightLast: false, color: 'red'});

            return;
        }
        nameSpace3.turtle.moveTo([nameSpace3.x, nameSpace3.f(nameSpace3.x)]);
        nameSpace3.generic = nameSpace3.board.create('point', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {size: 1, withLabel: false})
        u = nameSpace3.x;
        v = nameSpace3.f(u);
        nameSpace3.N = nameSpace3.board.create('point', [u+1, v - 9.81*u ], {size: 1, withLabel: false, visible:false});
        nameSpace3.NM = nameSpace3.board.create('line', [nameSpace3.N, nameSpace3.generic], {straightFirst: true, straightLast: true, color: 'red'});

    }
    setTimeout(nameSpace3.moveForward, 200); // delay by 200 ms
};

nameSpace3.pause = function ()
{
    nameSpace3.animated = !nameSpace3.animated;

}
nameSpace3.time = function ()
{
    return "t=" + nameSpace3.x.toFixed(2);
}

nameSpace3.position = function ()
{
    return "x=" + nameSpace3.f(nameSpace3.x).toFixed(0)
}

nameSpace3.instantspeed = function ()
{

        return "v="+(-9.81*nameSpace3.x).toFixed(2);
}


nameSpace3.go = function ()
{

    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true, showNavigation: false});
    nameSpace3.O = nameSpace3.board.create('point', [0, 0], {visible: false});
    nameSpace3.x = nameSpace3.start;
    nameSpace3.turtle = nameSpace3.board.create('turtle', [nameSpace3.x, nameSpace3.f(nameSpace3.x)], {strokeColor: 'green'});
    nameSpace3.turtle.hideTurtle();
    nameSpace3.animated = true;
    nameSpace3.board.create('text', [10, -100, nameSpace3.time]);
    nameSpace3.board.create('text', [10, -130, nameSpace3.position]);
    nameSpace3.board.create('text', [10, -160, nameSpace3.instantspeed]);
    
    nameSpace3.moveForward();
}

 