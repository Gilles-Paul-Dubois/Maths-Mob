/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace4 = {};
nameSpace4.maxu = 5;
nameSpace4.minu = -5;
nameSpace4.n = 1;
nameSpace4.board;
nameSpace4.xdata = [];
nameSpace4.ydata = [];
nameSpace4.H = 270; //base
nameSpace4.S = 1; //purity saturation
nameSpace4.V = 0.7; //brightness
nameSpace4.Opacity = 0.5;


nameSpace4.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace4.H, nameSpace4.S, nameSpace4.V);
}

nameSpace4.caldata = function (p)
{
    var i;
    nameSpace4.xdata = [];
    nameSpace4.ydata = [];
    nameSpace4.maxu = 0;
    nameSpace4.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace4.xdata.push(i);
        nameSpace4.ydata.push(nameSpace4.u(i));
        if (nameSpace4.u(i) < nameSpace4.minu)
            nameSpace4.minu = nameSpace4.u(i);
        if (nameSpace4.u(i) > nameSpace4.maxu)
            nameSpace4.maxu = nameSpace4.u(i);

    }
    nameSpace4.maxu = Math.round(nameSpace4.maxu) + 1;
    nameSpace4.minu = Math.round(nameSpace4.minu) - 1;
}


nameSpace4.u = function (m)
{
    if (m==0)
        return 0;
    else
    return Math.pow(1+1/m,m);
}

nameSpace4.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace4.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace4.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace4.showBar(b, nameSpace4.xdata[i], nameSpace4.ydata[i], col);
}

nameSpace4.initboard = function ()
{
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-1, nameSpace4.maxu, nameSpace4.n + 1, nameSpace4.minu], axis: true});

}

nameSpace4.next = function ()
{
    nameSpace4.n++;
    nameSpace4.Paint();
}
nameSpace4.plus10 = function ()
{
    nameSpace4.n += 10;
    nameSpace4.Paint();
}

nameSpace4.restart = function ()
{
    nameSpace4.n = 1;
    nameSpace4.Paint();
}

nameSpace4.Paint = function ()
{
    nameSpace4.caldata(nameSpace4.n);
    nameSpace4.initboard();
    nameSpace4.txt = nameSpace4.board.create('text', [-1, nameSpace4.maxu * 0.9, '&nbsp;  u<sub>n</sub>=(1+1/n)<sup>n</sup>'], {fontSize: 15});
    nameSpace4.showChart(nameSpace4.board, nameSpace4.fillc(), nameSpace4.n);

}

nameSpace4.Paint();