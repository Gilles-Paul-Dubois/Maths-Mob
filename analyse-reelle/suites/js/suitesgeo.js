/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace10 = {};
nameSpace10.maxu = 5;
nameSpace10.minu = -5;
nameSpace10.n = 1;
nameSpace10.board;
nameSpace10.xdata = [];
nameSpace10.ydata = [];
nameSpace10.H = 20; //base
nameSpace10.S = 1; //purity saturation
nameSpace10.V = 0.7; //brightness
nameSpace10.Opacity = 0.5;
nameSpace10.q=1.2;
nameSpace10.u0=1;
nameSpace10.range101 = document.getElementById("myRange101");
nameSpace10.range101.value = 1.2;
nameSpace10.range102 = document.getElementById("myRange102");
nameSpace10.range102.value = 1;
nameSpace10.fillc = function ()
{
    return JXG.hsv2rgb(nameSpace10.H, nameSpace10.S, nameSpace10.V);
}

nameSpace10.caldata = function (p)
{
    var i;
    nameSpace10.xdata = [];
    nameSpace10.ydata = [];
    nameSpace10.maxu = 0;
    nameSpace10.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace10.xdata.push(i);
        nameSpace10.ydata.push(nameSpace10.u(i));
        if (nameSpace10.u(i) < nameSpace10.minu)
            nameSpace10.minu = nameSpace10.u(i);
        if (nameSpace10.u(i) > nameSpace10.maxu)
            nameSpace10.maxu = nameSpace10.u(i);

    }
    nameSpace10.maxu = Math.round(nameSpace10.maxu) + 1;
    nameSpace10.minu = Math.round(nameSpace10.minu) - 1;
}


nameSpace10.u = function (m)
{
    return nameSpace10.u0*Math.pow(nameSpace10.q,m);
}

nameSpace10.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x - 0.5, 0], {visible: false});
    var p2 = b.create('point', [x - 0.5, y], {visible: false});
    var p3 = b.create('point', [x + 0.5, y], {visible: false});
    var p4 = b.create('point', [x + 0.5, 0], {visible: false});
    var pol = b.create('polygon', [p1, p2, p3, p4], {fillColor: col, fillOpacity: nameSpace10.Opacity, gradient: 'linear', gradientsecondcolor: 'white'})

}

nameSpace10.showChart = function (b, col, k)
{
    for (i = 0; i <= k; i++)
        nameSpace10.showBar(b, nameSpace10.xdata[i], nameSpace10.ydata[i], col);
}

nameSpace10.initboard = function ()
{
    nameSpace10.board = JXG.JSXGraph.initBoard('box10', {boundingbox: [-1, nameSpace10.maxu, nameSpace10.n + 1, nameSpace10.minu], axis: true});

}

nameSpace10.next = function ()
{
    nameSpace10.n++;
    nameSpace10.Paint();
}
nameSpace10.plus10 = function ()
{
    nameSpace10.n += 10;
    nameSpace10.Paint();
}

nameSpace10.restart = function ()
{
    nameSpace10.n = 1;
    nameSpace10.Paint();
}
nameSpace10.changeq=function(val)
{
  nameSpace10.q=parseFloat(val);
  nameSpace10.restart();
}

nameSpace10.changeu0=function(val)
{
   nameSpace10.u0=parseFloat(val);
  nameSpace10.restart();  
}

nameSpace10.Paint = function ()
{
    nameSpace10.caldata(nameSpace10.n);
    nameSpace10.initboard();
    nameSpace10.showChart(nameSpace10.board, nameSpace10.fillc(), nameSpace10.n);
    nameSpace10.txt = nameSpace10.board.create('text', [-1, nameSpace10.maxu * 0.9, '&nbsp; q= '+nameSpace10.q+"  u<sub>0</sub>= "+nameSpace10.u0], {fontSize: 15});
    

}

nameSpace10.Paint();