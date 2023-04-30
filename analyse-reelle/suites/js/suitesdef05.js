/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace5 = {};
nameSpace5.maxu = 5;
nameSpace5.minu = -5;
nameSpace5.n = 1;
nameSpace5.board;
nameSpace5.xdata = [];
nameSpace5.ydata = [];
nameSpace5.H = 45; //base
nameSpace5.S = 1; //purity saturation
nameSpace5.V = 0.7; //brightness
nameSpace5.Opacity = 0.5;


nameSpace5.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace5.H, nameSpace5.S, nameSpace5.V);
}

nameSpace5.caldata = function (p)
{
    var i;
    nameSpace5.xdata = [];
    nameSpace5.ydata = [];
    nameSpace5.maxu = 0;
    nameSpace5.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace5.xdata.push(i);
        nameSpace5.ydata.push(nameSpace5.u(i));
        if (nameSpace5.u(i) < nameSpace5.minu)
            nameSpace5.minu = nameSpace5.u(i);
        if (nameSpace5.u(i) > nameSpace5.maxu)
            nameSpace5.maxu = nameSpace5.u(i);

    }
    nameSpace5.maxu = Math.round(nameSpace5.maxu) + 1;
    nameSpace5.minu = Math.round(nameSpace5.minu) - 1;
}


nameSpace5.u = function (m)
{
    if(m==0)
        return 1;
    else
    {var j,s;
        s=1;
        for(j=1;j<=m;j++)
        s+=1/j;
    return s;
    }
}

nameSpace5.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace5.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace5.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace5.showBar(b, nameSpace5.xdata[i], nameSpace5.ydata[i], col);
}

nameSpace5.initboard = function ()
{
    nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [-1, nameSpace5.maxu, nameSpace5.n + 1, nameSpace5.minu], axis: true});

}

nameSpace5.next = function ()
{
    nameSpace5.n++;
    nameSpace5.Paint();
}
nameSpace5.plus10 = function ()
{
    nameSpace5.n += 10;
    nameSpace5.Paint();
}

nameSpace5.restart = function ()
{
    nameSpace5.n = 1;
    nameSpace5.Paint();
}

nameSpace5.Paint = function ()
{
    nameSpace5.caldata(nameSpace5.n);
    nameSpace5.initboard();
    nameSpace5.txt = nameSpace5.board.create('text', [-1, nameSpace5.maxu * 0.9, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  u<sub>n</sub>=u<sub>n-1</sub>+1/n'], {fontSize: 15});
    nameSpace5.showChart(nameSpace5.board, nameSpace5.fillc(), nameSpace5.n);

}

nameSpace5.Paint();