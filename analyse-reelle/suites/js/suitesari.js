/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace9 = {};
nameSpace9.maxu = 5;
nameSpace9.minu = -5;
nameSpace9.n = 1;
nameSpace9.board;
nameSpace9.xdata = [];
nameSpace9.ydata = [];
nameSpace9.H = 20; //base
nameSpace9.S = 1; //purity saturation
nameSpace9.V = 0.7; //brightness
nameSpace9.Opacity = 0.5;
nameSpace9.r=1;
nameSpace9.u0=1;
nameSpace9.range91 = document.getElementById("myRange91");
nameSpace9.range91.value = 1;
nameSpace9.range92 = document.getElementById("myRange92");
nameSpace9.range92.value = 1;
nameSpace9.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace9.H, nameSpace9.S, nameSpace9.V);
}

nameSpace9.caldata = function (p)
{
    var i;
    nameSpace9.xdata = [];
    nameSpace9.ydata = [];
    nameSpace9.maxu = 0;
    nameSpace9.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace9.xdata.push(i);
        nameSpace9.ydata.push(nameSpace9.u(i));
        if (nameSpace9.u(i) < nameSpace9.minu)
            nameSpace9.minu = nameSpace9.u(i);
        if (nameSpace9.u(i) > nameSpace9.maxu)
            nameSpace9.maxu = nameSpace9.u(i);

    }
    nameSpace9.maxu = Math.round(nameSpace9.maxu) + 1;
    nameSpace9.minu = Math.round(nameSpace9.minu) - 1;
}


nameSpace9.u = function (m)
{
    return nameSpace9.u0+m*nameSpace9.r;
}

nameSpace9.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace9.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace9.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace9.showBar(b, nameSpace9.xdata[i], nameSpace9.ydata[i], col);
}

nameSpace9.initboard = function ()
{
    nameSpace9.board = JXG.JSXGraph.initBoard('box9', {boundingbox: [-1, nameSpace9.maxu, nameSpace9.n + 1, nameSpace9.minu], axis: true});

}

nameSpace9.next = function ()
{
    nameSpace9.n++;
    nameSpace9.Paint();
}
nameSpace9.plus10 = function ()
{
    nameSpace9.n += 10;
    nameSpace9.Paint();
}

nameSpace9.restart = function ()
{
    nameSpace9.n = 1;
    nameSpace9.Paint();
}
nameSpace9.changer=function(val)
{
  nameSpace9.r=parseFloat(val);
  nameSpace9.restart();
}

nameSpace9.changeu0=function(val)
{
   nameSpace9.u0=parseFloat(val);
  nameSpace9.restart();  
}

nameSpace9.Paint = function ()
{
    nameSpace9.caldata(nameSpace9.n);
    nameSpace9.initboard();
    nameSpace9.showChart(nameSpace9.board, nameSpace9.fillc(), nameSpace9.n);
    nameSpace9.txt = nameSpace9.board.create('text', [-1, nameSpace9.maxu * 0.9, '&nbsp;  r= '+nameSpace9.r+"  u<sub>0</sub>= "+nameSpace9.u0], {fontSize: 15});
    

}

nameSpace9.Paint();