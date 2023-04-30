/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace1 = {};
nameSpace1.maxu = 5;
nameSpace1.minu = -5;
nameSpace1.n = 1;
nameSpace1.board;
nameSpace1.xdata = [];
nameSpace1.ydata = [];
nameSpace1.H = 180; //base
nameSpace1.S = 1; //purity saturation
nameSpace1.V = 0.7; //brightness
nameSpace1.Opacity = 0.5;


nameSpace1.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace1.H, nameSpace1.S, nameSpace1.V);
}

nameSpace1.caldata = function (p)
{
    var i;
    nameSpace1.xdata = [];
    nameSpace1.ydata = [];
    nameSpace1.maxu = 0;
    nameSpace1.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace1.xdata.push(i);
        nameSpace1.ydata.push(nameSpace1.u(i));
        if (nameSpace1.u(i) < nameSpace1.minu)
            nameSpace1.minu = nameSpace1.u(i);
        if (nameSpace1.u(i) > nameSpace1.maxu)
            nameSpace1.maxu = nameSpace1.u(i);

    }
    nameSpace1.maxu = Math.round(nameSpace1.maxu) + 1;
    nameSpace1.minu = Math.round(nameSpace1.minu) - 1;
}


nameSpace1.u = function (m)
{
    return Math.sin(m);
}

nameSpace1.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace1.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace1.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace1.showBar(b, nameSpace1.xdata[i], nameSpace1.ydata[i], col);
}

nameSpace1.initboard = function ()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-1, nameSpace1.maxu, nameSpace1.n + 1, nameSpace1.minu], axis: true});

}

nameSpace1.next = function ()
{
    nameSpace1.n++;
    nameSpace1.Paint();
}
nameSpace1.plus10 = function ()
{
    nameSpace1.n += 10;
    nameSpace1.Paint();
}

nameSpace1.restart = function ()
{
    nameSpace1.n = 1;
    nameSpace1.Paint();
}

nameSpace1.Paint = function ()
{
    nameSpace1.caldata(nameSpace1.n);
    nameSpace1.initboard();
    nameSpace1.txt = nameSpace1.board.create('text', [-1, nameSpace1.maxu * 0.9, '&nbsp;  u<sub>n</sub>=sin(n)'], {fontSize: 15});
    nameSpace1.showChart(nameSpace1.board, nameSpace1.fillc(), nameSpace1.n);

}

nameSpace1.Paint();