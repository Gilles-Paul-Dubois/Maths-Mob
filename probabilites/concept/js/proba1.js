var nameSpace1 = {};
nameSpace1.maxu = 3;
nameSpace1.minu = -1;
nameSpace1.n = 5;
nameSpace1.board;
nameSpace1.xdata = [0, 1, 2, 3, 4, 5];
nameSpace1.ydata = [0, 0, 0, 0, 0, 0];
nameSpace1.H = 180; //base
nameSpace1.S = 1; //purity saturation
nameSpace1.V = 0.7; //brightness
nameSpace1.Opacity = 0.5;


nameSpace1.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace1.H, nameSpace1.S, nameSpace1.V);
}


nameSpace1.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x, 0], {visible: false});
    var p2 = b.create('point', [x, y], {visible: false});
    var p3 = b.create('point', [x + 1, y], {visible: false});
    var p4 = b.create('point', [x + 1, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace1.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})
    b.create('text',[x+0.3, y/2,'face '+(x+1)]); 
}

nameSpace1.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace1.showBar(b, nameSpace1.xdata[i], nameSpace1.ydata[i], col);
}

nameSpace1.initboard = function ()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [0, nameSpace1.maxu, nameSpace1.n + 1, nameSpace1.minu], axis: true, ticks:false});

}

nameSpace1.plus1000 = function ()
{
    var i;
    var r;
    for (i = 0; i < 1000; i++)
    {
        r = Math.random();
        if (r < 1 / 6)
            nameSpace1.ydata[0]++;
        else if (r < 2 / 6)
            nameSpace1.ydata[1]++;
        else if (r < 3 / 6)
            nameSpace1.ydata[2]++;
        else if (r < 4 / 6)
            nameSpace1.ydata[3]++;
        else if (r < 5 / 6)
            nameSpace1.ydata[4]++;
        else
            nameSpace1.ydata[5]++;
    }
    nameSpace1.maxu = 0;
    nameSpace1.minu = -20;
    for (i = 0; i < 6; i++)
    {
        if (nameSpace1.ydata[i] > nameSpace1.maxu)
            nameSpace1.maxu = nameSpace1.ydata[i];

    }
    nameSpace1.maxu += 20;
    nameSpace1.Paint();
}

nameSpace1.restart = function ()
{
    nameSpace1.maxu = 3;
    nameSpace1.minu = -1;
    var i;
    for (i = 0; i < 6; i++)
        nameSpace1.ydata[i] = 0;
    nameSpace1.Paint();
}

nameSpace1.Paint = function ()
{
    //nameSpace1.caldata(nameSpace1.n);
    nameSpace1.initboard();
    nameSpace1.showChart(nameSpace1.board, nameSpace1.fillc(), nameSpace1.n);

}

nameSpace1.Paint();
