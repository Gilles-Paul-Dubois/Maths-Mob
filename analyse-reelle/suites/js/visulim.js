/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace11 = {};
nameSpace11.maxu = 5;
nameSpace11.minu = -5;
nameSpace11.n = 60;
nameSpace11.board;
nameSpace11.xdata = [];
nameSpace11.ydata = [];
nameSpace11.H = 180; //base
nameSpace11.S = 1; //purity saturation
nameSpace11.V = 0.7; //brightness
nameSpace11.Opacity = 0.5;
nameSpace11.Ax = -1;
nameSpace11.Ay = 2;
nameSpace11.Bx = 60;
nameSpace11.By = 2;
nameSpace11.A = null;
nameSpace11.B = null;
nameSpace11.L = null;
nameSpace11.epsilon = 0.5;
nameSpace11.A1 = null;
nameSpace11.B1 = null;
nameSpace11.A2 = null;
nameSpace11.B2 = null;
nameSpace11.N = 1 + Math.floor(4 / nameSpace11.epsilon);
nameSpace11.C1 = null;
nameSpace11.C2 = null;
nameSpace11.L1 = null;
nameSpace11.L2 = null;
nameSpace11.V = null;
nameSpace11.I1 = null;
nameSpace11.I2 = null;

nameSpace11.range11 = document.getElementById("myRange11");
nameSpace11.range11.value = 0.5;

nameSpace11.zonetexte1=document.getElementById("myText111");
nameSpace11.zonetexte2=document.getElementById("myText112");
nameSpace11.zonetexte1.style.width = "50px";
nameSpace11.zonetexte2.style.width = "50px";

nameSpace11.A1x = function ()
{
    return -1;
}

nameSpace11.A1y = function ()
{
    return 2 + nameSpace11.epsilon;
}

nameSpace11.B1x = function ()
{
    return 60;
}

nameSpace11.B1y = function ()
{
    return 2 + nameSpace11.epsilon;
}

nameSpace11.A2x = function ()
{
    return -1;
}

nameSpace11.A2y = function ()
{
    return 2 - nameSpace11.epsilon;
}

nameSpace11.B2x = function ()
{
    return 60;
}

nameSpace11.B2y = function ()
{
    return 2 - nameSpace11.epsilon;
}

nameSpace11.C1x = function ()
{
    return nameSpace11.N;
}

nameSpace11.C1y = function ()
{
    return 3;
}

nameSpace11.C2x = function ()
{
    return nameSpace11.N;
}

nameSpace11.C2y = function ()
{
    return -0.5;
}

nameSpace11.couleur = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(nameSpace11.H, nameSpace11.S, nameSpace11.V);
}

nameSpace11.caldata = function (p)
{
    var i;
    nameSpace11.xdata = [];
    nameSpace11.ydata = [];
    nameSpace11.maxu = 0;
    nameSpace11.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace11.xdata.push(i);
        nameSpace11.ydata.push(nameSpace11.u(i));
        if (nameSpace11.u(i) < nameSpace11.minu)
            nameSpace11.minu = nameSpace11.u(i);
        if (nameSpace11.u(i) > nameSpace11.maxu)
            nameSpace11.maxu = nameSpace11.u(i);

    }
    nameSpace11.maxu = Math.round(nameSpace11.maxu) + 1;
    nameSpace11.minu = Math.round(nameSpace11.minu) - 1;
}


nameSpace11.u = function (m)
{
    return 2 + 4 * Math.sin(m) / m;
}

nameSpace11.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x, y], {visible: true, withLabel: false, size: 1, face: '+', color: 'black'});

}

nameSpace11.showChart = function (b, k, fonccolor)
{
    for (i = 0; i <= k; i++)
        nameSpace11.showBar(b, nameSpace11.xdata[i], nameSpace11.ydata[i], fonccolor(i));
}

nameSpace11.initboard = function ()
{
    nameSpace11.board = JXG.JSXGraph.initBoard('box11', {boundingbox: [-1, nameSpace11.maxu, nameSpace11.n + 1, nameSpace11.minu], axis: true});

}
nameSpace11.changep = function (val)
{
    nameSpace11.epsilon = parseFloat(val);
    nameSpace11.N = 1 + Math.floor(4 / nameSpace11.epsilon);
    nameSpace11.Paint();
}

nameSpace11.drawlines = function ()
{
    nameSpace11.A1 = nameSpace11.board.create('point', [nameSpace11.A1x, nameSpace11.A1y], {visible: false});
    nameSpace11.B1 = nameSpace11.board.create('point', [nameSpace11.B1x, nameSpace11.B1y], {visible: false});
    nameSpace11.L1 = nameSpace11.board.create('line', [nameSpace11.A1, nameSpace11.B1], {strokeSize: 1, color: 'blue'});
    nameSpace11.A2 = nameSpace11.board.create('point', [nameSpace11.A2x, nameSpace11.A2y], {visible: false});
    nameSpace11.B2 = nameSpace11.board.create('point', [nameSpace11.B2x, nameSpace11.B2y], {visible: false});
    nameSpace11.L2 = nameSpace11.board.create('line', [nameSpace11.A2, nameSpace11.B2], {strokeSize: 1, color: 'blue'});

    nameSpace11.C1 = nameSpace11.board.create('point', [nameSpace11.C1x, nameSpace11.C1y], {visible: false});
    nameSpace11.C2 = nameSpace11.board.create('point', [nameSpace11.C2x, nameSpace11.C2y], {visible: false});
    nameSpace11.V = nameSpace11.board.create('line', [nameSpace11.C1, nameSpace11.C2], {strokeSize: 1, color: 'green'});
    nameSpace11.I1 = nameSpace11.board.create('intersection', [nameSpace11.V, nameSpace11.L1], {visible: false});
    nameSpace11.I2 = nameSpace11.board.create('intersection', [nameSpace11.V, nameSpace11.L2], {visible: false});
    nameSpace11.POL = nameSpace11.board.create('polygon', [nameSpace11.I1, nameSpace11.B1, nameSpace11.B2, nameSpace11.I2]);
}

nameSpace11.Paint = function ()
{
    nameSpace11.caldata(nameSpace11.n);
    nameSpace11.initboard();
    nameSpace11.showChart(nameSpace11.board, nameSpace11.n, nameSpace11.couleur);
    nameSpace11.A = nameSpace11.board.create('point', [nameSpace11.Ax, nameSpace11.Ay], {visible: false});
    nameSpace11.B = nameSpace11.board.create('point', [nameSpace11.Bx, nameSpace11.By], {visible: false});
    nameSpace11.L = nameSpace11.board.create('line', [nameSpace11.A, nameSpace11.B], {strokeSize: 1, color: 'red'});
    nameSpace11.drawlines();
    nameSpace11.zonetexte1.value=""+nameSpace11.epsilon;
    nameSpace11.zonetexte2.value=""+nameSpace11.N;
}

nameSpace11.Paint();