var nameSpace2 = {};
nameSpace2.xmin = -10; // adjust as needed
nameSpace2.xmax = +10; // adjust as needed
nameSpace2.ymin = -10; // adjust according max value of f
nameSpace2.ymax = +10; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.step = (nameSpace2.xmax - nameSpace2.xmin) / 200;
nameSpace2.interPol = [];
nameSpace2.choice = 0;

nameSpace2.f0 = function (x)
{
return Math.sin(x);
}

nameSpace2.f1 = function (x)
{
return x;
}
nameSpace2.f2 = function (x)
{
return x*x;
}
nameSpace2.f3 = function (x)
{
return -x*x;
}
nameSpace2.f4 = function (x)
{
return 1/(1+Math.abs(x));
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
    }
}

nameSpace2.fillPol = function ()
{
    nameSpace2.interPol = [];
    var x;
    var p;
    var p0 = nameSpace2.board.create('point', [nameSpace2.xmin, nameSpace2.ymax], {visible: false});
    nameSpace2.interPol.push(p0);
    for (x = nameSpace2.xmin; x <= nameSpace2.xmax; x += nameSpace2.step)
    {
        p = nameSpace2.board.create('point', [x, nameSpace2.f(x)], {visible: false})
        nameSpace2.interPol.push(p);
    }
    var p1 = nameSpace2.board.create('point', [nameSpace2.xmax, nameSpace2.ymax], {visible: false});
    nameSpace2.interPol.push(p1);

}
nameSpace2.choicef = function ()
{
    nameSpace2.choice = (nameSpace2.choice + 1) % 5;
    nameSpace2.Paint();
}
nameSpace2.Paint = function ()
{
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board); 
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    nameSpace2.fillPol();
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace2.board.create('polygon', nameSpace2.interPol, {withLines: false, fillColor: 'red'});
    
}
nameSpace2.Paint();