/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace3 = {};
nameSpace3.maxu = 5;
nameSpace3.minu = -5;
nameSpace3.n = 1;
nameSpace3.board;
nameSpace3.xdata = [];
nameSpace3.ydata = [];
nameSpace3.H = 90; //base
nameSpace3.S = 1; //purity saturation
nameSpace3.V = 0.7; //brightness
nameSpace3.Opacity = 0.5;


nameSpace3.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace3.H, nameSpace3.S, nameSpace3.V);
}

nameSpace3.caldata = function (p)
{
    var i;
    nameSpace3.xdata = [];
    nameSpace3.ydata = [];
    nameSpace3.maxu = 0;
    nameSpace3.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace3.xdata.push(i);
        nameSpace3.ydata.push(nameSpace3.u(i));
        if (nameSpace3.u(i) < nameSpace3.minu)
            nameSpace3.minu = nameSpace3.u(i);
        if (nameSpace3.u(i) > nameSpace3.maxu)
            nameSpace3.maxu = nameSpace3.u(i);

    }
    nameSpace3.maxu = Math.round(nameSpace3.maxu) + 1;
    nameSpace3.minu = Math.round(nameSpace3.minu) - 1;
}


nameSpace3.u = function (m)
{ 
    return m*Math.sin(m);
}

nameSpace3.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace3.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace3.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace3.showBar(b, nameSpace3.xdata[i], nameSpace3.ydata[i], col);
}

nameSpace3.initboard = function ()
{
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-1, nameSpace3.maxu, nameSpace3.n + 1, nameSpace3.minu], axis: true});

}

nameSpace3.next = function ()
{
    nameSpace3.n++;
    nameSpace3.Paint();
}
nameSpace3.plus10 = function ()
{
    nameSpace3.n += 10;
    nameSpace3.Paint();
}

nameSpace3.restart = function ()
{
    nameSpace3.n = 1;
    nameSpace3.Paint();
}

nameSpace3.Paint = function ()
{
    nameSpace3.caldata(nameSpace3.n);
    nameSpace3.initboard();
    nameSpace3.txt = nameSpace3.board.create('text', [-1, nameSpace3.maxu * 0.9, '&nbsp;  u<sub>n</sub>=n.sin(n)'], {fontSize: 15});
    nameSpace3.showChart(nameSpace3.board, nameSpace3.fillc(), nameSpace3.n);

}

nameSpace3.Paint();