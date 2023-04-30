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
nameSpace2.H = 180; //base
nameSpace2.S = 1; //purity saturation
nameSpace2.V = 0.7; //brightness
nameSpace2.Opacity = 0.5;
nameSpace2.barThick = 1/6;
nameSpace2.offset = 0;


nameSpace2.couleur = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(nameSpace2.H, nameSpace2.S, nameSpace2.V);
}
nameSpace2.couleur2 = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(90, nameSpace2.S, nameSpace2.V);
}

nameSpace2.couleur3 = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(0, nameSpace2.S, nameSpace2.V);
}


nameSpace2.caldata = function (p)
{
    var i;
    nameSpace2.maxu = 0;
    nameSpace2.minu = 0;
    for (i = 0; i <= p; i++)
    {
         if (nameSpace2.u(i) < nameSpace2.minu)
            nameSpace2.minu = nameSpace2.u(i);
         if (nameSpace2.v(i) < nameSpace2.minu)
            nameSpace2.minu = nameSpace2.v(i);
         if (nameSpace2.w(i) < nameSpace2.minu)
            nameSpace2.minu = nameSpace2.w(i);        
        if (nameSpace2.u(i) > nameSpace2.maxu)
            nameSpace2.maxu = nameSpace2.u(i);
       if (nameSpace2.v(i) > nameSpace2.maxu)
            nameSpace2.maxu = nameSpace2.v(i);        
       if (nameSpace2.w(i) > nameSpace2.maxu)
            nameSpace2.maxu = nameSpace2.w(i);        

    }
    nameSpace2.maxu = Math.round(nameSpace2.maxu) + 1;
    nameSpace2.minu = Math.round(nameSpace2.minu) - 1;
}


nameSpace2.u = function (m)
{ if(m%3==0)
    return 2+1/(m+1);
else
    return 2-1/(m+1);
}
nameSpace2.v = function (m)
{   if(m%4==1)
    return 3 +2/(m+1);
else
    return 3 -2/(m+1);
}

nameSpace2.w = function (m)
{
    return nameSpace2.u(m)*nameSpace2.v(m);
}


nameSpace2.showBar = function (b, x, y, offset, col)
{
    var p1 = b.create('point', [x - nameSpace2.barThick + offset, 0], {visible: false});
    var p2 = b.create('point', [x - nameSpace2.barThick + offset, y], {visible: false});
    var p3 = b.create('point', [x + nameSpace2.barThick + offset, y], {visible: false});
    var p4 = b.create('point', [x + nameSpace2.barThick + offset, 0], {visible: false});
    b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace2.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace2.showChart = function (b, k, offset, fonccolor, u)
{
    for (i = 0; i <= k; i++)
        nameSpace2.showBar(b, i, u(i), offset, fonccolor(i));
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
    nameSpace2.txt = nameSpace2.board.create('text', [-1, nameSpace2.maxu * 0.9, ''], {fontSize: 15});
    nameSpace2.showChart(nameSpace2.board, nameSpace2.n, -1/3, nameSpace2.couleur, nameSpace2.u);
    nameSpace2.showChart(nameSpace2.board, nameSpace2.n, 1/3, nameSpace2.couleur2, nameSpace2.v);
    nameSpace2.showChart(nameSpace2.board, nameSpace2.n, 0, nameSpace2.couleur3, nameSpace2.w);
}

nameSpace2.Paint();