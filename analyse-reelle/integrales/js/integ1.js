/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace1 = {};

nameSpace1.BigPolNE = [];
nameSpace1.BigPolSE = [];
nameSpace1.BigPolW = [];
nameSpace1.BigPol = [];
nameSpace1.SmallPolNE = [];
nameSpace1.SmallPolSE = [];
nameSpace1.SmallPolW = [];
nameSpace1.SmallPol = [];
nameSpace1.BP = null;
nameSpace1.SP = null;
nameSpace1.n = 1;
nameSpace1.epsilon = 0.001

nameSpace1.txt1 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "moyenne des aires des polygones: " + ((nameSpace1.BP.Area() + nameSpace1.SP.Area()) / 2).toFixed(3);}
else
{ return "average of areas of polygons: " + ((nameSpace1.BP.Area() + nameSpace1.SP.Area()) / 2).toFixed(3);}
}
nameSpace1.txt2 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Aire théorique de l'ellipse: " + 2 * Math.PI.toFixed(3);}
else
 { return "Theoretical area of ellipse: " + 2 * Math.PI.toFixed(3);}
}

nameSpace1.txt3 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "valeur de n : " + nameSpace1.n;}
else
 { return "value of n : " + nameSpace1.n;}
}
nameSpace1.init = function ()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1',
            {boundingbox: [-2.5, 1.5, 2.5, -1.5], axis: true, grid: true,
                showNavigation: false});
    nameSpace1.BigPolNE = [];
    nameSpace1.BigPolSE = [];
    nameSpace1.BigPolW = [];
    nameSpace1.BigPol = [];
    nameSpace1.SmallPolNE = [];
    nameSpace1.SmallPolSE = [];
    nameSpace1.SmallPolW = [];
    nameSpace1.SmallPol = [];
    nameSpace1.BP = null;
    nameSpace1.SP = null;

    nameSpace1.F1 = nameSpace1.board.create('Point', [-Math.sqrt(3), 0], {visible: false});
    nameSpace1.F2 = nameSpace1.board.create('Point', [Math.sqrt(3), 0], {visible: false});
}

nameSpace1.inEllipse = function (x, y)
{
    return (x * x / 4 + y * y) <= 1 - nameSpace1.epsilon;
}

nameSpace1.fillBigPolNE = function ()
{
    nameSpace1.BigPolNE = [];
    var x = 0;
    var y = 1;
    var delta = 1 / Math.pow(2, nameSpace1.n);
    while (y >= 0)
    {
        nameSpace1.BigPolNE.push([x, y]);
        if (!nameSpace1.inEllipse(x, y - delta))
            y -= delta;
        else
            x += delta;
    }
}

nameSpace1.fillBigPolSE = function ()
{
    nameSpace1.BigPolSE = [];
    var k = nameSpace1.BigPolNE.length;
    for (var i = k - 2; i >= 0; i--)
    {
        nameSpace1.BigPolSE.push([nameSpace1.BigPolNE[i][0], -nameSpace1.BigPolNE[i][1]]);
    }
}

nameSpace1.fillBigPolW = function ()
{
    nameSpace1.BigPolW = [];
    var T = nameSpace1.BigPolNE.concat(nameSpace1.BigPolSE);
    var k = T.length;
    for (var i = k - 2; i > 1; i--)
        nameSpace1.BigPolW.push([-T[i][0], T[i][1]]);
}
nameSpace1.fillBigPol = function ()
{
    nameSpace1.BigPol = [];
    nameSpace1.fillBigPolNE();
    nameSpace1.fillBigPolSE();
    nameSpace1.fillBigPolW();
    nameSpace1.BigPol = nameSpace1.BigPolNE.concat(nameSpace1.BigPolSE)
    nameSpace1.BigPol = nameSpace1.BigPol.concat(nameSpace1.BigPolW);
}

nameSpace1.fillBigPolygon = function ()
{
    nameSpace1.BP = nameSpace1.board.create('polygon', nameSpace1.BigPol, {withLines: true, fillColor: 'blue', vertices: {size: 1, visible: false}});
}




nameSpace1.fillSmallPolNE = function ()
{
    nameSpace1.SmallPolNE = [];
    var x = 0;
    var delta = 1 / Math.pow(2, nameSpace1.n);
    var y = 1 - delta;
    while (y >= 0)
    {
        nameSpace1.SmallPolNE.push([x, y]);
        if (nameSpace1.inEllipse(x + delta, y))
            x += delta;
        else
            y -= delta;
    }
}

nameSpace1.fillSmallPolSE = function ()
{
    nameSpace1.SmallPolSE = [];
    var k = nameSpace1.SmallPolNE.length;
    for (var i = k - 2; i >= 0; i--)
    {
        nameSpace1.SmallPolSE.push([nameSpace1.SmallPolNE[i][0], -nameSpace1.SmallPolNE[i][1]]);
    }
}

nameSpace1.fillSmallPolW = function ()
{
    nameSpace1.SmallPolW = [];
    var T = nameSpace1.SmallPolNE.concat(nameSpace1.SmallPolSE);
    var k = T.length;
    for (var i = k - 2; i > 1; i--)
        nameSpace1.SmallPolW.push([-T[i][0], T[i][1]]);
}
nameSpace1.fillSmallPol = function ()
{
    nameSpace1.SmallPol = [];
    nameSpace1.fillSmallPolNE();
    nameSpace1.fillSmallPolSE();
    nameSpace1.fillSmallPolW();
    nameSpace1.SmallPol = nameSpace1.SmallPolNE.concat(nameSpace1.SmallPolSE)
    nameSpace1.SmallPol = nameSpace1.SmallPol.concat(nameSpace1.SmallPolW);
}

nameSpace1.fillSmallPolygon = function ()
{
    nameSpace1.SP = nameSpace1.board.create('polygon', nameSpace1.SmallPol, {withLines: true, fillColor: 'yellow', vertices: {size: 1, visible: false}});
}



nameSpace1.nextplus = function ()
{
    if (nameSpace1.n <= 4)
    {
        nameSpace1.n++;
        nameSpace1.main();
    }
    else 
    {
       if(document.body.className.substring(0,2)=="fr")  
   { alert("valeur maximale atteinte");}
else
{ alert("maximal value reached");}
    }
}


nameSpace1.nextminus = function ()
{
    if (nameSpace1.n >= 2)
    {
        nameSpace1.n--;
        nameSpace1.main();
    }
}

nameSpace1.main = function ()
{
    if (nameSpace1.board != null)
        nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.init();
    nameSpace1.fillBigPol();
    nameSpace1.fillBigPolygon();
    nameSpace1.fillSmallPol();
    nameSpace1.fillSmallPolygon();
    nameSpace1.E = nameSpace1.board.create('ellipse', [nameSpace1.F1, nameSpace1.F2, 4], {strokeColor: 'red'});
    nameSpace1.board.create('text', [-2.25, -1.25, nameSpace1.txt1]);
    nameSpace1.board.create('text', [0.5, -1.25, nameSpace1.txt2]);
    nameSpace1.board.create('text', [-2.25, 1.25, nameSpace1.txt3]);

}
nameSpace1.main();