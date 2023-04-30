var nameSpace1 = {};
nameSpace1.xmin = -10; // adjust as needed
nameSpace1.xmax = +10; // adjust as needed
nameSpace1.ymin = -10; // adjust according max value of f
nameSpace1.ymax = +10; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation: false});
nameSpace1.choicea = nameSpace1.board.create('slider', [[-9, 9], [-7, 9], [-4, -2, -1]]);
nameSpace1.choiceb = nameSpace1.board.create('slider', [[-6, 9], [-4, 9], [1, 3, 4]]);
nameSpace1.choicef = 0;
nameSpace1.choiceg = 0;

nameSpace1.f0 = function (x)
{
    return x * x / 4 - 3;
}

nameSpace1.f1 = function (x)
{
    return  x + 1;
}
nameSpace1.f2 = function (x)
{
    return 3 * Math.sin(x);
}
nameSpace1.f3 = function (x)
{
    return 3 * Math.cos(x);
}
nameSpace1.f4 = function (x)
{
    return 4 / (x * x + 1);
}

nameSpace1.df0 = function (x)
{
    return x / 2;
}

nameSpace1.df1 = function (x)
{
    return  1;
}
nameSpace1.df2 = function (x)
{
    return 3 * Math.cos(x);
}
nameSpace1.df3 = function (x)
{
    return -3 * Math.sin(x);
}
nameSpace1.df4 = function (x)
{
    return (-8 * x) / ((x * x + 1) * (x * x + 1));
}

nameSpace1.formulef = function ()
{
    switch (nameSpace1.choicef)
    {
        case 0:
            return "f(x)=x<sup>2</sup>/4-3";
        case 1:
            return "f(x)=x+1";
        case 2:
            return "f(x)=3sin(x)";
        case 3:
            return "f(x)=3cos(x)";
        case 4:
            return "f(x)=4/(x<sup>2</sup>+1)";
    }
}

nameSpace1.f = function (x)
{
    switch (nameSpace1.choicef)
    {
        case 0:
            return nameSpace1.f0(x);
        case 1:
            return nameSpace1.f1(x);
        case 2:
            return nameSpace1.f2(x);
        case 3:
            return nameSpace1.f3(x);
        case 4:
            return nameSpace1.f4(x);

    }
}

nameSpace1.df = function (x)
{
    switch (nameSpace1.choicef)
    {
        case 0:
            return nameSpace1.df0(x);
        case 1:
            return nameSpace1.df1(x);
        case 2:
            return nameSpace1.df2(x);
        case 3:
            return nameSpace1.df3(x);
        case 4:
            return nameSpace1.df4(x);

    }
}
nameSpace1.g0 = function (x)
{
    return x * x * x / 30 + x;
}
nameSpace1.g1 = function (x)
{
    return  Math.sin(x) + 2 * x;
}
nameSpace1.g2 = function (x)
{
    return 4 / (2 + Math.sin(x));
}
nameSpace1.g3 = function (x)
{
    return  3 * Math.tan(x / 5);
}
nameSpace1.g4 = function (x)
{
    return 8 / (x + 6);
}

nameSpace1.dg0 = function (x)
{
    return  x * x / 10 + 1;
}
nameSpace1.dg1 = function (x)
{
    return  Math.cos(x) + 2;
}
nameSpace1.dg2 = function (x)
{
    return (-4 * Math.cos(x)) / ((2 + Math.sin(x)) * (2 + Math.sin(x)));
}
nameSpace1.dg3 = function (x)
{
    return  (3 / 5) / (Math.cos(x / 5) * Math.cos(x / 5));
}
nameSpace1.dg4 = function (x)
{
    return -8 / ((x + 6) * (x + 6));
}
nameSpace1.dg = function (x)
{
    switch (nameSpace1.choiceg)
    {
        case 0:
            return nameSpace1.dg0(x);
        case 1:
            return nameSpace1.dg1(x);
        case 2:
            return nameSpace1.dg2(x);
        case 3:
            return nameSpace1.dg3(x);
        case 4:
            return nameSpace1.dg4(x);

    }
}


nameSpace1.quotder = function (x)
{
    return nameSpace1.df(x) / nameSpace1.dg(x);
}

nameSpace1.formuleg = function ()
{
    switch (nameSpace1.choiceg)
    {
        case 0:
            return "g(x)=x<sup>3</sup>/30 +x";
        case 1:
            return "g(x)=sin(x)+2x";
        case 2:
            return "g(x)=4/(2+sin(x))";
        case 3:
            return "g(x)=3tan(x/5)";
        case 4:
            return "g(x)=8/(x+6)";
    }
}
nameSpace1.g = function (x)
{
    switch (nameSpace1.choiceg)
    {
        case 0:
            return nameSpace1.g0(x);
        case 1:
            return nameSpace1.g1(x);
        case 2:
            return nameSpace1.g2(x);
        case 3:
            return nameSpace1.g3(x);
        case 4:
            return nameSpace1.g4(x);

    }
}

nameSpace1.selectf = function ()
{
    nameSpace1.choicef = (nameSpace1.choicef + 1) % 5;
    nameSpace1.Paint();
}

nameSpace1.selectg = function ()
{
    nameSpace1.choiceg = (nameSpace1.choiceg + 1) % 5;
    nameSpace1.Paint();
}
nameSpace1.solve = function (p)
{
    var step = 0.01;
    var error = 0.02;
    var x, y;
    for (x = nameSpace1.choicea.Value(); x <= nameSpace1.choiceb.Value(); x += step)
    {
        y = nameSpace1.quotder(x);
        if (Math.abs(y - p) < error)
            return x;
    }
}
nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation: false});
    nameSpace1.choicea = nameSpace1.board.create('slider', [[-9, 9], [-7, 9], [-4, -2, -1]]);
    nameSpace1.choiceb = nameSpace1.board.create('slider', [[-6, 9], [-4, 9], [1, 3, 4]]);
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.create('curve', [function (t) {
            return nameSpace1.f(t);
        }, function (t) {
            return nameSpace1.g(t)
        }, function () {
            return nameSpace1.choicea.Value();
        }, function () {
            return nameSpace1.choiceb.Value();
        }], {strokeSize: 1});

    nameSpace1.xstart = nameSpace1.board.create('point', [function () {
            return nameSpace1.f(nameSpace1.choicea.Value());
        }, 0], {name: 'f(a)', size: 1});
    nameSpace1.ystart = nameSpace1.board.create('point', [0, function () {
            return nameSpace1.g(nameSpace1.choicea.Value());
        }], {name: 'g(a)', size: 1});
    nameSpace1.start = nameSpace1.board.create('point', [function () {
            return nameSpace1.xstart.X();
        }, function () {
            return nameSpace1.ystart.Y();
        }], {size: 1, withLabel: false});
    nameSpace1.board.create('segment', [nameSpace1.xstart, nameSpace1.start], {color: 'black'});
    nameSpace1.board.create('segment', [nameSpace1.ystart, nameSpace1.start], {color: 'black'});

    nameSpace1.xfinish = nameSpace1.board.create('point', [function () {
            return nameSpace1.f(nameSpace1.choiceb.Value());
        }, 0], {name: 'f(b)', size: 1});
    nameSpace1.yfinish = nameSpace1.board.create('point', [0, function () {
            return nameSpace1.g(nameSpace1.choiceb.Value());
        }], {name: 'g(b)', size: 1});
    nameSpace1.finish = nameSpace1.board.create('point', [function () {
            return nameSpace1.xfinish.X();
        }, function () {
            return nameSpace1.yfinish.Y();
        }], {size: 1, withLabel: false});
    nameSpace1.board.create('segment', [nameSpace1.xfinish, nameSpace1.finish], {color: 'black'});
    nameSpace1.board.create('segment', [nameSpace1.yfinish, nameSpace1.finish], {color: 'black'});
    nameSpace1.txt1 = nameSpace1.board.create('text', [1, 9, function () {
            return "a=" + nameSpace1.choicea.Value().toFixed(2);
        }]);
    nameSpace1.sec=nameSpace1.board.create('segment', [nameSpace1.start, nameSpace1.finish], {color: 'brown', strokeSize: 1});
    nameSpace1.txt2 = nameSpace1.board.create('text', [3, 9, function () {
            return "b=" + nameSpace1.choiceb.Value().toFixed(2);
        }]);
    nameSpace1.txt3 = nameSpace1.board.create('text', [-9, -9, nameSpace1.formulef]);
    nameSpace1.txt4 = nameSpace1.board.create('text', [6, -9, nameSpace1.formuleg]);
    nameSpace1.dummy = nameSpace1.board.create('point', [0, function () {
            return (nameSpace1.finish.X() - nameSpace1.start.X()) / (nameSpace1.finish.Y() - nameSpace1.start.Y());
        }],{visible:false})
    nameSpace1.X = nameSpace1.board.create('point', [function () {
            return nameSpace1.f(nameSpace1.solve(nameSpace1.dummy.Y()));
        }, function () {
            return nameSpace1.g(nameSpace1.solve(nameSpace1.dummy.Y()));
        }],{size:1})
    nameSpace1.T=nameSpace1.board.create('parallel',[nameSpace1.sec,nameSpace1.X], {color:'brown'});
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();