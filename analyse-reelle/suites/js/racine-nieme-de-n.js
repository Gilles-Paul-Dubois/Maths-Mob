/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace2 = {};
nameSpace2.maxu = 5;
nameSpace2.minu = -5;
nameSpace2.n = 1;
nameSpace2.board;
nameSpace2.xdata = [];
nameSpace2.ydata = [];
nameSpace2.H = 0; //base
nameSpace2.S = 1; //purity saturation
nameSpace2.V = 0.7; //brightness
nameSpace2.Opacity = 0.5;


nameSpace2.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace2.H, nameSpace2.S, nameSpace2.V);
}

nameSpace2.caldata = function (p)
{
    var i;
    nameSpace2.xdata = [];
    nameSpace2.ydata = [];
    nameSpace2.maxu = 0;
    nameSpace2.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace2.xdata.push(i);
        nameSpace2.ydata.push(nameSpace2.u(i));
        if (nameSpace2.u(i) < nameSpace2.minu)
            nameSpace2.minu = nameSpace2.u(i);
        if (nameSpace2.u(i) > nameSpace2.maxu)
            nameSpace2.maxu = nameSpace2.u(i);

    }
    nameSpace2.maxu = Math.round(nameSpace2.maxu) + 1;
    nameSpace2.minu = Math.round(nameSpace2.minu) - 1;
}


nameSpace2.u = function (m)
{ if (m==0)
        return 0;
    else
    return Math.pow(m,1/m);
}

nameSpace2.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace2.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace2.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace2.showBar(b, nameSpace2.xdata[i], nameSpace2.ydata[i], col);
}

nameSpace2.initboard = function ()
{
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-1, nameSpace2.maxu, nameSpace2.n + 1, nameSpace2.minu], axis: true});

}

nameSpace2.next = function ()
{
    nameSpace2.n++;
    nameSpace2.Paint();
}
nameSpace2.plus10 = function ()
{
    nameSpace2.n += 10;
    nameSpace2.Paint();
}

nameSpace2.restart = function ()
{
    nameSpace2.n = 1;
    nameSpace2.Paint();
}

nameSpace2.Paint = function ()
{
    nameSpace2.caldata(nameSpace2.n);
    nameSpace2.initboard();
    nameSpace2.txt = nameSpace2.board.create('text', [-1, nameSpace2.maxu * 0.9, '&nbsp;  u<sub>n</sub>=n<sup>1/n</sup>'], {fontSize: 15});
    nameSpace2.showChart(nameSpace2.board, nameSpace2.fillc(), nameSpace2.n);

}

nameSpace2.Paint();