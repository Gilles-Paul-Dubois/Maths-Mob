/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace12 = {};
nameSpace12.maxu = 5;
nameSpace12.minu = -5;
nameSpace12.n = 60;
nameSpace12.board;
nameSpace12.xdata = [];
nameSpace12.ydata = [];
nameSpace12.H = 180; //base
nameSpace12.S = 1; //purity saturation
nameSpace12.V = 0.7; //brightness
nameSpace12.Opacity = 0.5;
nameSpace12.Ax = -1;
nameSpace12.Ay = 2;
nameSpace12.Bx = 60;
nameSpace12.By = 2;
nameSpace12.A = null;
nameSpace12.B = null;
nameSpace12.L = null;
nameSpace12.epsilon = 0.5;
nameSpace12.A1 = null;
nameSpace12.B1 = null;
nameSpace12.A2 = null;
nameSpace12.B2 = null;
nameSpace12.N = 1 + Math.floor(4 / nameSpace12.epsilon);
nameSpace12.C1 = null;
nameSpace12.C2 = null;
nameSpace12.L1 = null;
nameSpace12.L2 = null;
nameSpace12.V = null;
nameSpace12.I1 = null;
nameSpace12.I2 = null;

nameSpace12.AAx = -1;
nameSpace12.AAy = 2.4;
nameSpace12.BBx = 60;
nameSpace12.BBy = 2.4;
nameSpace12.AA = null;
nameSpace12.BB = null;
nameSpace12.LL = null;
nameSpace12.AA1 = null;
nameSpace12.BB1 = null;
nameSpace12.AA2 = null;
nameSpace12.BB2 = null;
nameSpace12.LL1 = null;
nameSpace12.LL2 = null;

nameSpace12.II1 = null;
nameSpace12.II2 = null;

nameSpace12.range11 = document.getElementById("myRange12");
nameSpace12.range11.value = 0.5;

nameSpace12.zonetexte1 = document.getElementById("myText121");
nameSpace12.zonetexte2 = document.getElementById("myText122");
nameSpace12.zonetexte1.style.width = "50px";
nameSpace12.zonetexte2.style.width = "50px";

nameSpace12.A1x = function ()
{
    return -1;
}

nameSpace12.A1y = function ()
{
    return 2 + nameSpace12.epsilon;
}

nameSpace12.B1x = function ()
{
    return 60;
}

nameSpace12.B1y = function ()
{
    return 2 + nameSpace12.epsilon;
}

nameSpace12.A2x = function ()
{
    return -1;
}

nameSpace12.A2y = function ()
{
    return 2 - nameSpace12.epsilon;
}

nameSpace12.B2x = function ()
{
    return 60;
}

nameSpace12.B2y = function ()
{
    return 2 - nameSpace12.epsilon;
}

nameSpace12.C1x = function ()
{
    return nameSpace12.N;
}

nameSpace12.C1y = function ()
{
    return 3;
}

nameSpace12.C2x = function ()
{
    return nameSpace12.N;
}

nameSpace12.C2y = function ()
{
    return -0.5;
}

nameSpace12.AA1x = function ()
{
    return -1;
}

nameSpace12.AA1y = function ()
{
    return 2.4 + nameSpace12.epsilon;
}

nameSpace12.BB1x = function ()
{
    return 60;
}

nameSpace12.BB1y = function ()
{
    return 2.4 + nameSpace12.epsilon;
}

nameSpace12.AA2x = function ()
{
    return -1;
}

nameSpace12.AA2y = function ()
{
    return 2.4 - nameSpace12.epsilon;
}

nameSpace12.BB2x = function ()
{
    return 60;
}

nameSpace12.BB2y = function ()
{
    return 2.4 - nameSpace12.epsilon;
}



nameSpace12.couleur = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(nameSpace12.H, nameSpace12.S, nameSpace12.V);
}

nameSpace12.caldata = function (p)
{
    var i;
    nameSpace12.xdata = [];
    nameSpace12.ydata = [];
    nameSpace12.maxu = 0;
    nameSpace12.minu = 0;
    for (i = 0; i <= p; i++)
    {
        nameSpace12.xdata.push(i);
        nameSpace12.ydata.push(nameSpace12.u(i));
        if (nameSpace12.u(i) < nameSpace12.minu)
            nameSpace12.minu = nameSpace12.u(i);
        if (nameSpace12.u(i) > nameSpace12.maxu)
            nameSpace12.maxu = nameSpace12.u(i);

    }
    nameSpace12.maxu = Math.round(nameSpace12.maxu) + 1;
    nameSpace12.minu = Math.round(nameSpace12.minu) - 1;
}


nameSpace12.u = function (m)
{
    return 2 + 4 * Math.sin(m) / m;
}

nameSpace12.showBar = function (b, x, y, col)
{
    var p1 = b.create('point', [x, y], {visible: true, withLabel: false, size: 1, face: '+', color: 'black'});

}

nameSpace12.showChart = function (b, k, fonccolor)
{
    for (i = 0; i <= k; i++)
        nameSpace12.showBar(b, nameSpace12.xdata[i], nameSpace12.ydata[i], fonccolor(i));
}

nameSpace12.initboard = function ()
{
    nameSpace12.board = JXG.JSXGraph.initBoard('box12', {boundingbox: [-1, nameSpace12.maxu, nameSpace12.n + 1, nameSpace12.minu], axis: true});

}
nameSpace12.changep = function (val)
{
    nameSpace12.epsilon = parseFloat(val);
    nameSpace12.N = 1 + Math.floor(4 / nameSpace12.epsilon);
    nameSpace12.Paint();
}

nameSpace12.drawlines = function ()
{
    nameSpace12.A1 = nameSpace12.board.create('point', [nameSpace12.A1x, nameSpace12.A1y], {visible: false});
    nameSpace12.B1 = nameSpace12.board.create('point', [nameSpace12.B1x, nameSpace12.B1y], {visible: false});
    nameSpace12.L1 = nameSpace12.board.create('line', [nameSpace12.A1, nameSpace12.B1], {strokeSize: 1, color: 'blue'});
    nameSpace12.A2 = nameSpace12.board.create('point', [nameSpace12.A2x, nameSpace12.A2y], {visible: false});
    nameSpace12.B2 = nameSpace12.board.create('point', [nameSpace12.B2x, nameSpace12.B2y], {visible: false});
    nameSpace12.L2 = nameSpace12.board.create('line', [nameSpace12.A2, nameSpace12.B2], {strokeSize: 1, color: 'blue'});

    nameSpace12.AA1 = nameSpace12.board.create('point', [nameSpace12.AA1x, nameSpace12.AA1y], {visible: false});
    nameSpace12.BB1 = nameSpace12.board.create('point', [nameSpace12.BB1x, nameSpace12.BB1y], {visible: false});
    nameSpace12.LL1 = nameSpace12.board.create('line', [nameSpace12.AA1, nameSpace12.BB1], {strokeSize: 1, color: 'blue'});
    nameSpace12.AA2 = nameSpace12.board.create('point', [nameSpace12.AA2x, nameSpace12.AA2y], {visible: false});
    nameSpace12.BB2 = nameSpace12.board.create('point', [nameSpace12.BB2x, nameSpace12.BB2y], {visible: false});
    nameSpace12.LL2 = nameSpace12.board.create('line', [nameSpace12.AA2, nameSpace12.BB2], {strokeSize: 1, color: 'blue'});

    nameSpace12.C1 = nameSpace12.board.create('point', [nameSpace12.C1x, nameSpace12.C1y], {visible: false});
    nameSpace12.C2 = nameSpace12.board.create('point', [nameSpace12.C2x, nameSpace12.C2y], {visible: false});
    nameSpace12.V = nameSpace12.board.create('line', [nameSpace12.C1, nameSpace12.C2], {strokeSize: 1, color: 'green'});
    nameSpace12.I1 = nameSpace12.board.create('intersection', [nameSpace12.V, nameSpace12.L1], {visible: false});
    nameSpace12.I2 = nameSpace12.board.create('intersection', [nameSpace12.V, nameSpace12.L2], {visible: false});
    nameSpace12.POL = nameSpace12.board.create('polygon', [nameSpace12.I1, nameSpace12.B1, nameSpace12.B2, nameSpace12.I2]);

    nameSpace12.II1 = nameSpace12.board.create('intersection', [nameSpace12.V, nameSpace12.LL1], {visible: false});
    nameSpace12.II2 = nameSpace12.board.create('intersection', [nameSpace12.V, nameSpace12.LL2], {visible: false});
    nameSpace12.POL2 = nameSpace12.board.create('polygon', [nameSpace12.II1, nameSpace12.BB1, nameSpace12.BB2, nameSpace12.II2],{fillColor:'red'});
}

nameSpace12.Paint = function ()
{
    nameSpace12.caldata(nameSpace12.n);
    nameSpace12.initboard();
    nameSpace12.showChart(nameSpace12.board, nameSpace12.n, nameSpace12.couleur);
    nameSpace12.A = nameSpace12.board.create('point', [nameSpace12.Ax, nameSpace12.Ay], {visible: false});
    nameSpace12.B = nameSpace12.board.create('point', [nameSpace12.Bx, nameSpace12.By], {visible: false});
    nameSpace12.L = nameSpace12.board.create('line', [nameSpace12.A, nameSpace12.B], {strokeSize: 1, color: 'red', name:'a', withLabel:true});

    nameSpace12.AA = nameSpace12.board.create('point', [nameSpace12.AAx, nameSpace12.AAy], {visible: false});
    nameSpace12.BB = nameSpace12.board.create('point', [nameSpace12.BBx, nameSpace12.BBy], {visible: false});
    nameSpace12.LL = nameSpace12.board.create('line', [nameSpace12.AA, nameSpace12.BB], {strokeSize: 1, color: 'red', name:'b', withLabel:true});

    nameSpace12.drawlines();
    nameSpace12.zonetexte1.value = "" + nameSpace12.epsilon;
    nameSpace12.zonetexte2.value = "" + nameSpace12.N;
}

nameSpace12.Paint();