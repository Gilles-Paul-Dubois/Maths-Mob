var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.choice = 0;

nameSpace1.f0 = function (x)
{
    return Math.cos(x);
}
nameSpace1.f1 = function (x)
{
    return 0.2 * x * x;
}
nameSpace1.f2 = function (x)
{
    return 5 / (1 + x * x);
}
nameSpace1.f3 = function (x)
{
    return 0.01 * x * x * x + 0.05 * x * x - x;
}
nameSpace1.f4 = function (x)
{
    return 4 / (2 + Math.sin(x));
}
nameSpace1.f5 = function (x)
{
    return Math.exp(0.4 * x);
}

nameSpace1.df0 = function (x)
{
    return -Math.sin(x);
}
nameSpace1.df1 = function (x)
{
    return 0.4* x;
}
nameSpace1.df2 = function (x)
{
    return (-10*x)/((1+x*x)*(1+x*x));
}
nameSpace1.df3 = function (x)
{
    return 0.03*x*x+0.1*x-1;
}
nameSpace1.df4 = function (x)
{
    return (-4*Math.cos(x))/((2+Math.sin(x))*(2+Math.sin(x)));
}
nameSpace1.df5 = function (x)
{
    return 0.4*Math.exp(0.4*x);
}


nameSpace1.f = function (x)
{
    switch (nameSpace1.choice)
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
        case 5:
            return nameSpace1.f5(x);
    }
}

nameSpace1.df = function (x)
{
    switch (nameSpace1.choice)
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
        case 5:
            return nameSpace1.df5(x);
    }
}
nameSpace1.next=function()
{
    nameSpace1.choice=(nameSpace1.choice+1)%6;
    nameSpace1.Paint();
}

nameSpace1.approx=function(i,x)
{
    var a,b;
    a=nameSpace1.df(i);
    b=nameSpace1.f(i)-a*i;
    return a*x+b;
}

nameSpace1.showtan= function(i)
{
    nameSpace1.board.create('point',[i, nameSpace1.f(i)], {fixed:true, size:1});
    var A=nameSpace1.board.create('point',[i-0.25, nameSpace1.approx(i,i-0.25)], {visible:false});
    var B=nameSpace1.board.create('point',[i+0.25, nameSpace1.approx(i,i+0.25)], {visible:false});
    nameSpace1.board.create('segment',[A,B], {color:'red'});
    
    
}

nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board); 
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.df, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'blue'});
    var i;
    for (i=-4; i<=4;i++)
        nameSpace1.showtan(i);
    
}
nameSpace1.Paint();