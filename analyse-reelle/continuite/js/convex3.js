var nameSpace3 = {};
nameSpace3.xmin = -10; // adjust as needed
nameSpace3.xmax = +10; // adjust as needed
nameSpace3.ymin = -10; // adjust according max value of f
nameSpace3.ymax = +10; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.step = (nameSpace3.xmax - nameSpace3.xmin) / 200;
nameSpace3.interPol = [];
nameSpace3.choice = 0;

nameSpace3.f0 = function (x)
{
return x;
}

nameSpace3.f1 = function (x)
{
return x*x/3;
}
nameSpace3.f2 = function (x)
{
return -3*Math.log(12+x)+2;
}
nameSpace3.f3 = function (x)
{
return 2/(12+x)-2;
}
nameSpace3.f4 = function (x)
{
return Math.abs(x);
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
    }
}

nameSpace3.fillPol = function ()
{
    nameSpace3.interPol = [];
    var x;
    var p;
    var p0 = nameSpace3.board.create('point', [nameSpace3.xmin, nameSpace3.ymax], {visible: false});
    nameSpace3.interPol.push(p0);
    for (x = nameSpace3.xmin; x <= nameSpace3.xmax; x += nameSpace3.step)
    {
        p = nameSpace3.board.create('point', [x, nameSpace3.f(x)], {visible: false})
        nameSpace3.interPol.push(p);
    }
    var p1 = nameSpace3.board.create('point', [nameSpace3.xmax, nameSpace3.ymax], {visible: false});
    nameSpace3.interPol.push(p1);

}
nameSpace3.choicef = function ()
{
    nameSpace3.choice = (nameSpace3.choice + 1) % 5;
    nameSpace3.Paint();
}
nameSpace3.Paint = function ()
{
    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board); 
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
    nameSpace3.fillPol();
    nameSpace3.board.createElement('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace3.board.create('polygon', nameSpace3.interPol, {withLines: false, fillColor: 'blue'});
    
}
nameSpace3.Paint();