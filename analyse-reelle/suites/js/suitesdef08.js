/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace8 = {};
nameSpace8.maxu = 5;
nameSpace8.minu = -5;
nameSpace8.n = 1;
nameSpace8.board;
nameSpace8.xdata = [];
nameSpace8.ydata = [];
nameSpace8.H = 300; //base
nameSpace8.S = 1; //purity saturation
nameSpace8.V = 0.7; //brightness
nameSpace8.Opacity = 0.5;


nameSpace8.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace8.H, nameSpace8.S, nameSpace8.V);
}

nameSpace8.caldata = function (p)
{
    var i;
    nameSpace8.xdata = [];
    nameSpace8.ydata = [];
    nameSpace8.maxu = 0;
    nameSpace8.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace8.xdata.push(i);
        nameSpace8.ydata.push(nameSpace8.u(i));
        if (nameSpace8.u(i) < nameSpace8.minu)
            nameSpace8.minu = nameSpace8.u(i);
        if (nameSpace8.u(i) > nameSpace8.maxu)
            nameSpace8.maxu = nameSpace8.u(i);

    }
    nameSpace8.maxu = Math.round(nameSpace8.maxu) + 1;
    nameSpace8.minu = Math.round(nameSpace8.minu) - 1;
}


nameSpace8.u = function (m)
{

    var u0 = 1;
    var u1 = 1;
    var u2;
    var j;
    if (m == 0 || m == 1)
        return 1;
    else
    {
        for (j = 2; j <= m; j++)
        {
            u2 = u0;
            u0 = u1;
            u1 = u1 + u2;
        }
        return u1;

    }
}

nameSpace8.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace8.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace8.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace8.showBar(b, nameSpace8.xdata[i], nameSpace8.ydata[i], col);
}

nameSpace8.initboard = function ()
{
    nameSpace8.board = JXG.JSXGraph.initBoard('box8', {boundingbox: [-1, nameSpace8.maxu, nameSpace8.n + 1, nameSpace8.minu], axis: true});

}

nameSpace8.next = function ()
{
    nameSpace8.n++;
    nameSpace8.Paint();
}
nameSpace8.plus10 = function ()
{
    nameSpace8.n += 10;
    nameSpace8.Paint();
}

nameSpace8.restart = function ()
{
    nameSpace8.n = 1;
    nameSpace8.Paint();
}

nameSpace8.Paint = function ()
{
    nameSpace8.caldata(nameSpace8.n);
    nameSpace8.initboard();
    nameSpace8.txt = nameSpace8.board.create('text', [-1, nameSpace8.maxu * 0.9, '&nbsp;&nbsp;&nbsp;&nbsp; Fibonacci'], {fontSize: 15});
    nameSpace8.showChart(nameSpace8.board, nameSpace8.fillc(), nameSpace8.n);

}

nameSpace8.Paint();