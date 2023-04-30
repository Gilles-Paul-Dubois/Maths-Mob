/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace7 = {};
nameSpace7.maxu = 5;
nameSpace7.minu = -5;
nameSpace7.n = 1;
nameSpace7.board;
nameSpace7.xdata = [];
nameSpace7.ydata = [];
nameSpace7.H = 225; //base
nameSpace7.S = 1; //purity saturation
nameSpace7.V = 0.7; //brightness
nameSpace7.Opacity = 0.5;


nameSpace7.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace7.H, nameSpace7.S, nameSpace7.V);
}

nameSpace7.caldata = function (p)
{
    var i;
    nameSpace7.xdata = [];
    nameSpace7.ydata = [];
    nameSpace7.maxu = 0;
    nameSpace7.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace7.xdata.push(i);
        nameSpace7.ydata.push(nameSpace7.u(i));
        if (nameSpace7.u(i) < nameSpace7.minu)
            nameSpace7.minu = nameSpace7.u(i);
        if (nameSpace7.u(i) > nameSpace7.maxu)
            nameSpace7.maxu = nameSpace7.u(i);

    }
    nameSpace7.maxu = Math.round(nameSpace7.maxu) + 1;
    nameSpace7.minu = Math.round(nameSpace7.minu) - 1;
}


nameSpace7.u = function (m)
{
    if(m==0)
        return 0;
    else
    {var j,s;
        s=0;
        for(j=1;j<=m;j++)
        s+=1/(j*j);
    return s;
    }
}

nameSpace7.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace7.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace7.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace7.showBar(b, nameSpace7.xdata[i], nameSpace7.ydata[i], col);
}

nameSpace7.initboard = function ()
{
    nameSpace7.board = JXG.JSXGraph.initBoard('box7', {boundingbox: [-1, nameSpace7.maxu, nameSpace7.n + 1, nameSpace7.minu], axis: true});

}

nameSpace7.next = function ()
{
    nameSpace7.n++;
    nameSpace7.Paint();
}
nameSpace7.plus10 = function ()
{
    nameSpace7.n += 10;
    nameSpace7.Paint();
}

nameSpace7.restart = function ()
{
    nameSpace7.n = 1;
    nameSpace7.Paint();
}

nameSpace7.Paint = function ()
{
    nameSpace7.caldata(nameSpace7.n);
    nameSpace7.initboard();
    nameSpace7.txt = nameSpace7.board.create('text', [-1, nameSpace7.maxu * 0.9, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  u<sub>n</sub>=u<sub>n-1</sub>+1/n<sup>2</sup>'], {fontSize: 15});
    nameSpace7.showChart(nameSpace7.board, nameSpace7.fillc(), nameSpace7.n);

}

nameSpace7.Paint();