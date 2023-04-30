var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +3; // adjust as needed
nameSpace1.ymin = -1; // adjust according max value of f
nameSpace1.ymax = +3; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.a = 1;
nameSpace1.b = 2;
nameSpace1.c=(nameSpace1.a+nameSpace1.b)/2;

nameSpace1.f = function (x)
{
    return x * x / 2 - 1;
}

nameSpace1.Ax = function ()
{
    return nameSpace1.a;
}

nameSpace1.Bx = function ()
{
    return nameSpace1.b;
}
nameSpace1.Cx = function ()
{
    return (nameSpace1.a + nameSpace1.b) / 2;
}

nameSpace1.next=function()
{
    if (nameSpace1.f(nameSpace1.a)*nameSpace1.f(nameSpace1.c)<0)
    {
        nameSpace1.b=nameSpace1.c;
    }
    else
    {
       nameSpace1.a=nameSpace1.c;        
    }
    nameSpace1.c=(nameSpace1.a+nameSpace1.b)/2;
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.Paint();
}

nameSpace1.restart=function()
{
    nameSpace1.a=1;
    nameSpace1.b=2;
    nameSpace1.c=1.5;
    nameSpace1.Paint();
}

nameSpace1.toPrint=function()
{
    return "f(c)="+nameSpace1.f(nameSpace1.c).toFixed(5);
}

nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.curve = nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace1.A = nameSpace1.board.create('point', [nameSpace1.Ax, 0], {size: 1, visible :false});
    nameSpace1.B = nameSpace1.board.create('point', [nameSpace1.Bx, 0], {size: 1, visible:false});
    nameSpace1.C = nameSpace1.board.create('point', [nameSpace1.Cx, 0], {size: 1, visible:false});
    nameSpace1.A1 = nameSpace1.board.create('point', [nameSpace1.Ax, nameSpace1.f(nameSpace1.a)], {size: 1, visible: false});
    nameSpace1.B1 = nameSpace1.board.create('point', [nameSpace1.Bx, nameSpace1.f(nameSpace1.b)], {size: 1, visible: false});
    nameSpace1.C1 = nameSpace1.board.create('point', [nameSpace1.Cx, nameSpace1.f(nameSpace1.c)], {size: 1, visible: false});
    nameSpace1.DA=nameSpace1.board.create('line',[nameSpace1.A,nameSpace1.A1], {straightFirst:false,straightLast:false});
    nameSpace1.DB=nameSpace1.board.create('line',[nameSpace1.B,nameSpace1.B1], {straightFirst:false,straightLast:false});
    nameSpace1.DC=nameSpace1.board.create('line',[nameSpace1.C,nameSpace1.C1], {straightFirst:false,straightLast:false});
   nameSpace1.board.create('text',[1,2.5,nameSpace1.toPrint]);
}
nameSpace1.Paint();