var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +9; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.n = 2;
nameSpace1.abscisses = [];
nameSpace1.choice = 1;
nameSpace1.pas = 0;
nameSpace1.pointsArray = [];
nameSpace1.poly = null;

nameSpace1.f = function (x)
{
    return 4 / (1 + (x - 3) * (x - 3));
}


nameSpace1.max = function (i)
{
    if (nameSpace1.abscisses[i + 1] <= 3)
        return nameSpace1.f(nameSpace1.abscisses[i + 1]);
    if (nameSpace1.abscisses[i] >= 3)
        return nameSpace1.f(nameSpace1.abscisses[i]);
    else
        return nameSpace1.f(3);
}

nameSpace1.f1 = function (x)
{
    var i;
    for (i = 0; i < nameSpace1.n; i++)
    {
        if ((x >= nameSpace1.abscisses[i]) && (x < nameSpace1.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace1.f(8);
    return nameSpace1.max(i);
}


nameSpace1.min = function (i)
{
    if (nameSpace1.abscisses[i + 1] <= 3)
        return nameSpace1.f(nameSpace1.abscisses[i]);
    if (nameSpace1.abscisses[i] >= 3)
        return nameSpace1.f(nameSpace1.abscisses[i + 1]);

    if (nameSpace1.f(nameSpace1.abscisses[i]) < nameSpace1.f(nameSpace1.abscisses[i + 1]))
        return nameSpace1.f(nameSpace1.abscisses[i]);
    else
        return nameSpace1.f(nameSpace1.abscisses[i + 1]);

}

nameSpace1.f2 = function (x)
{
    var i;
    for (i = 0; i < nameSpace1.n; i++)
    {
        if ((x >= nameSpace1.abscisses[i]) && (x < nameSpace1.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace1.f(8);
    return nameSpace1.min(i);
}

nameSpace1.txt1 = function ()
{
    if(document.body.className.substring(0,2)=="fr")  
   {    switch (nameSpace1.choice)
    {
        case 0:
            return "type: aléatoire";
        case 1:
            return "type: arithmétique";
        case 2:
            return "type: géométrique";
    }}
else
  {    switch (nameSpace1.choice)
    {
        case 0:
            return "type: random";
        case 1:
            return "type: arithmetic";
        case 2:
            return "type: geometric";
    }}
}
nameSpace1.txt2 = function ()
{
    return " &nbsp;n=" + nameSpace1.n;
}
nameSpace1.txt3 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pas=" + nameSpace1.pas.toFixed(2);}
else
 { return "mesh=" + nameSpace1.pas.toFixed(2);}
}

nameSpace1.txt4 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Somme de Darboux inférieure : " + nameSpace1.poly.Area().toFixed(2);}
else
{ return "Lower Darboux sum : " + nameSpace1.poly.Area().toFixed(2);}
}

nameSpace1.txt5 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Somme de Darboux supérieure : " + nameSpace1.integral1.Value().toFixed(2);}
else
{ return "Upper Darboux sum : " + nameSpace1.integral1.Value().toFixed(2);}
}

nameSpace1.calpas = function ()
{
    var pas = nameSpace1.abscisses[1] - nameSpace1.abscisses[0];
    if (nameSpace1.choice == 1)
    {
        nameSpace1.pas = 7 / nameSpace1.n;
        return;
    }
    if (nameSpace1.choice == 2)
    {
        nameSpace1.pas = nameSpace1.abscisses[nameSpace1.n] - nameSpace1.abscisses[nameSpace1.n - 1];
        return;
    }
    var delta;
    for (var i = 0; i < nameSpace1.n; i++)
    {
        delta = nameSpace1.abscisses[i + 1] - nameSpace1.abscisses[i];
        if (delta > pas)
            pas = delta;
    }
    nameSpace1.pas = pas;
}
nameSpace1.geo = function ()
{
    nameSpace1.choice = 2;
    nameSpace1.main();
}
nameSpace1.fillgeo = function ()
{
    nameSpace1.abscisses = [1];
    var q = Math.pow(8, 1 / nameSpace1.n);
    for (var i = 1; i <= nameSpace1.n; i++)
        nameSpace1.abscisses.push(Math.pow(q, i));
    nameSpace1.abscisses[nameSpace1.n] = 8;
}

nameSpace1.alea = function ()
{
    nameSpace1.choice = 0;
    nameSpace1.main();
}

nameSpace1.fillalea = function ()
{
    nameSpace1.abscisses = [1, 8];
    for (var i = 0; i <= nameSpace1.n - 2; i++)
        nameSpace1.abscisses.push(1 + 7 * Math.random());
    nameSpace1.abscisses.sort(function (x, y) {
        return x - y;
    });
    nameSpace1.abscisses[nameSpace1.n] = 8;
}

nameSpace1.ari = function ()
{
    nameSpace1.choice = 1;
    nameSpace1.main();
}
nameSpace1.fillari = function ()
{
    nameSpace1.abscisses = [1];
    var r = 7 / nameSpace1.n;
    for (var i = 1; i <= nameSpace1.n; i++)
        nameSpace1.abscisses.push(1 + i * r);
    nameSpace1.abscisses[nameSpace1.n] = 8;
}
nameSpace1.plus = function ()
{
    nameSpace1.n++;
    nameSpace1.main();
}
nameSpace1.minus = function ()
{
    if (nameSpace1.n >= 3)
    {
        nameSpace1.n--;
        nameSpace1.main();
    }
}


nameSpace1.fillArray = function ()
{
    nameSpace1.pointsArray = [];
    nameSpace1.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace1.n; i++)
    {
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i], nameSpace1.f2(nameSpace1.abscisses[i])]);
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i + 1], nameSpace1.f2(nameSpace1.abscisses[i])]);
    }
    nameSpace1.pointsArray.push([8, 0]);
}
nameSpace1.main = function ()
{
    switch (nameSpace1.choice)
    {
        case 0:
            nameSpace1.fillalea();
            break;
        case 1:
            nameSpace1.fillari();
            break;
        case 2:
            nameSpace1.fillgeo();
            break;
    }

    nameSpace1.calpas();
    nameSpace1.board = JXG.JSXGraph.freeBoard(nameSpace1.board);
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    var i;
    for (i = 0; i <= nameSpace1.n; i++)
        nameSpace1.board.create('point', [nameSpace1.abscisses[i], 0], {size: 1, withLabel: false})
    nameSpace1.board.create('functiongraph', [nameSpace1.f, 1, 8]);
    nameSpace1.graph1 = nameSpace1.board.create('functiongraph', [nameSpace1.f1, 1, 8], {color: 'red'});
    nameSpace1.integral1 = nameSpace1.board.create('integral', [[1, 8], nameSpace1.graph1], { withLabel: false , color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace1.graph2 = nameSpace1.board.create('functiongraph', [nameSpace1.f2, 1, 8]);
    //alternative way to show second integral
    // because normal way not possible NO ERROR MESSAGE OF ANY KIND !!!
    nameSpace1.fillArray(); //vertices of polygon (second integral)
    nameSpace1.poly = nameSpace1.board.create('polygon', nameSpace1.pointsArray, {withLines: false, fillColor: 'blue', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
    // normal way under
    // nameSpace1.integral2 = nameSpace1.board.create('integral', [[1, 8], nameSpace1.graph2], {color: 'blue', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace1.board.create('text', [1, 4.5, nameSpace1.txt1]);
    nameSpace1.board.create('text', [-1, 4.5, nameSpace1.txt2]);
    nameSpace1.board.create('text', [4, 4.5, nameSpace1.txt3]);
    nameSpace1.board.create('text', [2, -2, nameSpace1.txt4]);
    nameSpace1.board.create('text', [2, -2.5, nameSpace1.txt5]);
}
nameSpace1.main();