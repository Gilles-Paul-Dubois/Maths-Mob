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
nameSpace1.H = 180; //base
nameSpace1.S = 1; //purity saturation
nameSpace1.V = 0.7; //brightness
nameSpace1.Opacity = 0.5;
nameSpace1.barThick = 0.5;
nameSpace1.offset = 0;
nameSpace1.choice = 1;
nameSpace1.A=null;
nameSpace1.B=null;
nameSpace1.L=null;

nameSpace1.Ax=function()
{
    return -1;
}
nameSpace1.Ay= function ()
{
    return 1;
}
nameSpace1.Bx=function()
{
    return nameSpace1.n;
}
nameSpace1.By= function ()
{
    return 1;
}


nameSpace1.couleur = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(nameSpace1.H, nameSpace1.S, nameSpace1.V);
}

nameSpace1.caldata = function (p)
{
    var i;
    nameSpace1.maxu = 0;
    nameSpace1.minu = 0;
    for (i = 0; i <= p; i++)
    {
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
    switch (nameSpace1.choice)
    {
        case 1:
            nameSpace1.H = 180;
            return 1 - Math.abs(Math.sin(m)) / (m + 1);
        case 2:
            nameSpace1.H = 0;
            return 1 + Math.abs(Math.sin(m)) / (m + 1);
        case 3:
            nameSpace1.H = 90;
            return 1 + Math.sin(m) / (m + 1);
    }
}
nameSpace1.showBar = function (b, x, y, offset, col)
{
    var p1 = b.create('point', [x - nameSpace1.barThick + offset, 0], {visible: false});
    var p2 = b.create('point', [x - nameSpace1.barThick + offset, y], {visible: false});
    var p3 = b.create('point', [x + nameSpace1.barThick + offset, y], {visible: false});
    var p4 = b.create('point', [x + nameSpace1.barThick + offset, 0], {visible: false});
    b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace1.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace1.showChart = function (b, k, offset, fonccolor, u)
{
    for (i = 0; i <= k; i++)
        nameSpace1.showBar(b, i, u(i), offset, fonccolor(i));
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
nameSpace1.handleClick = function (radio) {

    nameSpace1.choice = parseInt(radio.value);
    nameSpace1.restart();
}
nameSpace1.showLimit= function()

{
    nameSpace1.A=nameSpace1.board.create('point',[nameSpace1.Ax,nameSpace1.Ay], {visible:false});
    nameSpace1.B=nameSpace1.board.create('point',[nameSpace1.Bx,nameSpace1.By], {visible:false});
    nameSpace1.L=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.B],{color:'red',strokeWidth:1});
}
nameSpace1.Paint = function ()
{
    nameSpace1.caldata(nameSpace1.n);
    nameSpace1.initboard();
    nameSpace1.txt = nameSpace1.board.create('text', [-1, nameSpace1.maxu * 0.9, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; u<sub>n</sub>&rarr; 1'], {fontSize: 15});
    nameSpace1.showChart(nameSpace1.board, nameSpace1.n, nameSpace1.offset, nameSpace1.couleur, nameSpace1.u);
    nameSpace1.showLimit();
}

nameSpace1.Paint();