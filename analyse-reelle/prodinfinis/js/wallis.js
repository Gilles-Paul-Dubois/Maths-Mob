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
nameSpace1.barThick = 0.25;
nameSpace1.offset = 0;
//nameSpace1.textzone1=document.getElementById("myText1");
//nameSpace1.textzone1.style.width="250px";

nameSpace1.couleur = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(nameSpace1.H, nameSpace1.S, nameSpace1.V);
}

nameSpace1.couleur2 = function (i)
{
    // cas d'une couleur constante
    return JXG.hsv2rgb(0, nameSpace1.S, nameSpace1.V);
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
        if (nameSpace1.s(i) < nameSpace1.minu)
            nameSpace1.minu = nameSpace1.s(i);
        if (nameSpace1.u(i) > nameSpace1.maxu)
            nameSpace1.maxu = nameSpace1.u(i);
        if (nameSpace1.s(i) > nameSpace1.maxu)
            nameSpace1.maxu = nameSpace1.s(i);

    }
    nameSpace1.maxu = Math.round(nameSpace1.maxu) + 1;
    nameSpace1.minu = Math.round(nameSpace1.minu) - 1;
}


nameSpace1.u = function (m)
{
    if(m==0)
        return 1;
    else
    return 1-1/((2*m+1)*(2*m+1));
}

nameSpace1.s = function (m)
{
    var i;
    var S = 2;
    for (i = 0; i <= m; i++)
    {
        S *= nameSpace1.u(i)
    }
    return S;
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

nameSpace1.Paint = function ()
{
    nameSpace1.caldata(nameSpace1.n);
    nameSpace1.initboard();
    nameSpace1.txt = nameSpace1.board.create('text', [-1, nameSpace1.maxu * 0.9, '&nbsp;<font style="color:red">p<sub>n</sub></font>=2<font size="4">&Pi;</font><font style="color:blue">u<sub>n</sub></font>'], {fontSize: 15});
    nameSpace1.showChart(nameSpace1.board, nameSpace1.n, -0.25, nameSpace1.couleur, nameSpace1.u);
    nameSpace1.showChart(nameSpace1.board, nameSpace1.n, 0.25, nameSpace1.couleur2, nameSpace1.s);
    //nameSpace1.textzone1.value= "Approximation de Wallis de pi : "+2*nameSpace1.s(nameSpace1.s)

}

nameSpace1.Paint();