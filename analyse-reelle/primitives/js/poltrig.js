var nameSpace1 = {};
nameSpace1.xmin = -3; // adjust as needed
nameSpace1.xmax = +3; // adjust as needed
nameSpace1.ymin = -3; // adjust according max value of f
nameSpace1.ymax = +3; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true,showNavigation:false});

nameSpace1.n = 1;
nameSpace1.m = 1;

nameSpace1.txta = function ()
{
    return "a=" + nameSpace1.sla.Value();
}
nameSpace1.txtn = function ()
{
    return "n=" + nameSpace1.n;
}

nameSpace1.txtm = function ()
{
    return "m=" + nameSpace1.m;
}
nameSpace1.f = function (x)
{
    return nameSpace1.sla.Value()*Math.pow(Math.sin(x), nameSpace1.m)*Math.pow(Math.cos(x),nameSpace1.n);
}

nameSpace1.nextmplus = function ()
{
    nameSpace1.m++;
    nameSpace1.Paint();
}

nameSpace1.nextmminus = function ()
{
    if (nameSpace1.m >= 1)
    {
        nameSpace1.m--;
        nameSpace1.Paint();
    }
    else
        return;
}



nameSpace1.nextnplus = function ()
{
    nameSpace1.n++;
    nameSpace1.Paint();
}

nameSpace1.nextnminus = function ()
{
    if (nameSpace1.n >= 1)
    {
        nameSpace1.n--;
        nameSpace1.Paint();
    }
    else
        return;
}

nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board); 
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true, showNavigation:false});
    nameSpace1.sla=nameSpace1.board.create('slider',[[-2.5,2.5],[-1.5,2.5,],[-2,1,2]]);
    nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.create('text', [2, -2.5, nameSpace1.txtn],{color:'red'});
    nameSpace1.board.create('text', [2, -2.25, nameSpace1.txtm],{color:'red'});
    nameSpace1.board.create('text', [2, -2.0, nameSpace1.txta],{color:'red'});
}
nameSpace1.Paint();
