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
nameSpace1.H = 0; //base
nameSpace1.S = 1; //purity saturation
nameSpace1.V = 0.7; //brightness
nameSpace1.Opacity = 0.5;
nameSpace1.choice = 1;
var rad = document.fonc;
nameSpace1.p = function (i)
{
    switch (nameSpace1.choice)
    {
        case 1:
            return 2 * i;
        case 2:
            return i * i;
        case 3:
            return Math.floor(i / 2) + i;
    }
    return 2 * i;
}

nameSpace1.couleur2 = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(nameSpace1.H , nameSpace1.S, nameSpace1.V);
}

nameSpace1.couleur = function (i)
{
    // cas d'une couleur constante
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

nameSpace1.showChart1 = function (b, k, fonccolor)
{   nameSpace1.Opacity = 0.5;
    for (i = 0; i <= k; i++)
        nameSpace1.showBar(b, nameSpace1.xdata[i], nameSpace1.ydata[i], fonccolor(i));
}

nameSpace1.showChart2 = function (b, k, fonccolor)
{   nameSpace1.Opacity = 0.8;
    for (i = 0; nameSpace1.p(i) <= k; i++)
        nameSpace1.showBar(b, nameSpace1.xdata[nameSpace1.p(i)], nameSpace1.ydata[nameSpace1.p(i)], fonccolor(i));
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
nameSpace1.handleClick = function (radio) {

    nameSpace1.choice = parseInt(radio.value);
    nameSpace1.restart();
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
    nameSpace1.txt = nameSpace1.board.create('text', [-1, nameSpace1.maxu * 0.9, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; u<sub>n</sub>=sin(n)'], {fontSize: 15});
    nameSpace1.showChart1(nameSpace1.board, nameSpace1.n, nameSpace1.couleur);
    nameSpace1.showChart2(nameSpace1.board, nameSpace1.n, nameSpace1.couleur2);

}

nameSpace1.Paint();