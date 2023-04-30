/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace6 = {};
nameSpace6.maxu = 5;
nameSpace6.minu = -5;
nameSpace6.n = 1;
nameSpace6.board;
nameSpace6.xdata = [];
nameSpace6.ydata = [];
nameSpace6.H = 135; //base
nameSpace6.S = 1; //purity saturation
nameSpace6.V = 0.7; //brightness
nameSpace6.Opacity = 0.5;


nameSpace6.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace6.H, nameSpace6.S, nameSpace6.V);
}

nameSpace6.caldata = function (p)
{
    var i;
    nameSpace6.xdata = [];
    nameSpace6.ydata = [];
    nameSpace6.maxu = 0;
    nameSpace6.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace6.xdata.push(i);
        nameSpace6.ydata.push(nameSpace6.u(i));
        if (nameSpace6.u(i) < nameSpace6.minu)
            nameSpace6.minu = nameSpace6.u(i);
        if (nameSpace6.u(i) > nameSpace6.maxu)
            nameSpace6.maxu = nameSpace6.u(i);

    }
    nameSpace6.maxu = Math.round(nameSpace6.maxu) + 1;
    nameSpace6.minu = Math.round(nameSpace6.minu) - 1;
}


nameSpace6.u = function (m)
{
    if(m==0)
        return 1;
    else
    {var j,s;
        s=1;
        for(j=1;j<=m;j++)
        s=Math.sqrt(2+s);
    return s;
    }
}

nameSpace6.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace6.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace6.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace6.showBar(b, nameSpace6.xdata[i], nameSpace6.ydata[i], col);
}

nameSpace6.initboard = function ()
{
    nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [-1, nameSpace6.maxu, nameSpace6.n + 1, nameSpace6.minu], axis: true});

}

nameSpace6.next = function ()
{
    nameSpace6.n++;
    nameSpace6.Paint();
}
nameSpace6.plus10 = function ()
{
    nameSpace6.n += 10;
    nameSpace6.Paint();
}

nameSpace6.restart = function ()
{
    nameSpace6.n = 1;
    nameSpace6.Paint();
}

nameSpace6.Paint = function ()
{
    nameSpace6.caldata(nameSpace6.n);
    nameSpace6.initboard();
    nameSpace6.txt = nameSpace6.board.create('text', [-1, nameSpace6.maxu * 0.9, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; u<sub>n</sub>=&radic;(2+u<sub>n-1</sub>)'], {fontSize: 15});
    nameSpace6.showChart(nameSpace6.board, nameSpace6.fillc(), nameSpace6.n);

}

nameSpace6.Paint();