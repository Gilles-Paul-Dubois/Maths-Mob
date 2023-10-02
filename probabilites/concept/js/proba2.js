var nameSpace2 = {};
nameSpace2.maxu = 3;
nameSpace2.minu = -1;
nameSpace2.n = 4;
nameSpace2.board;
nameSpace2.xdata = [0, 1, 2, 3, 4];
nameSpace2.ydata = [0, 0, 0, 0, 0];
nameSpace2.H = 60; //base
nameSpace2.S = 1; //purity saturation
nameSpace2.V = 0.7; //brightness
nameSpace2.Opacity = 0.5;


nameSpace2.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace2.H, nameSpace2.S, nameSpace2.V);
}


nameSpace2.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x, 0], {visible: false});
    var p2 = b.create('point', [x, y], {visible: false});
    var p3 = b.create('point', [x + 1, y], {visible: false});
    var p4 = b.create('point', [x + 1, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace2.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})
    b.create('text',[x+0.3, y/2,'face '+(x+1)]); 
}

nameSpace2.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace2.showBar(b, nameSpace2.xdata[i], nameSpace2.ydata[i], col);
}

nameSpace2.initboard = function ()
{
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [0, nameSpace2.maxu, nameSpace2.n + 1, nameSpace2.minu], axis: true, ticks:false});

}

nameSpace2.plus1000 = function ()
{
    var i;
    var r;
    for (i = 0; i < 1000; i++)
    {
        r = Math.random();
        if (r < 1 / 6)
            nameSpace2.ydata[0]++;
        else if (r < 2 / 6)
            nameSpace2.ydata[1]++;
        else if (r < 3 / 6)
            nameSpace2.ydata[2]++;
        else if (r < 4 / 6)
            nameSpace2.ydata[3]++;
        else if (r < 5 / 6)
            nameSpace2.ydata[4]++;
        else
            nameSpace2.ydata[0]++;
    }
    nameSpace2.maxu = 0;
    nameSpace2.minu = -20;
    for (i = 0; i < 5; i++)
    {
        if (nameSpace2.ydata[i] > nameSpace2.maxu)
            nameSpace2.maxu = nameSpace2.ydata[i];

    }
    nameSpace2.maxu += 20;
    nameSpace2.Paint();
}

nameSpace2.restart = function ()
{
    nameSpace2.maxu = 3;
    nameSpace2.minu = -1;
    var i;
    for (i = 0; i < 5; i++)
        nameSpace2.ydata[i] = 0;
    nameSpace2.Paint();
}

nameSpace2.Paint = function ()
{
    //nameSpace2.caldata(nameSpace2.n);
    nameSpace2.initboard();
    nameSpace2.showChart(nameSpace2.board, nameSpace2.fillc(), nameSpace2.n);

}

nameSpace2.Paint();
