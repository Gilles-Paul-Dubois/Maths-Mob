var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +9; // adjust as needed
nameSpace2.ymin = -5; // adjust according max value of f
nameSpace2.ymax = +5; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.n = 2;
nameSpace2.abscisses = [];
nameSpace2.choice = 1;
nameSpace2.pas = 0;
nameSpace2.pointsArray = [];
nameSpace2.poly = null;
nameSpace2.choicer = 2;

nameSpace2.riem0 = function ()
{
    nameSpace2.choicer = 0;
    nameSpace2.main();
}

nameSpace2.riem1 = function ()
{
    nameSpace2.choicer = 1;
    nameSpace2.main();
}
nameSpace2.riem2 = function ()
{
    nameSpace2.choicer = 2;
    nameSpace2.main();
}
nameSpace2.riem3 = function ()
{
    nameSpace2.choicer = 3;
    nameSpace2.main();
}
nameSpace2.riem4 = function ()
{
    nameSpace2.choicer = 4;
    nameSpace2.main();
}


nameSpace2.f = function (x)
{
    return 4 / (1 + (x - 3) * (x - 3));
}


nameSpace2.max = function (i)
{
    if (nameSpace2.abscisses[i + 1] <= 3)
        return nameSpace2.f(nameSpace2.abscisses[i + 1]);
    if (nameSpace2.abscisses[i] >= 3)
        return nameSpace2.f(nameSpace2.abscisses[i]);
    else
        return nameSpace2.f(3);
}

nameSpace2.f1 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n; i++)
    {
        if ((x >= nameSpace2.abscisses[i]) && (x < nameSpace2.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace2.f(8);
    return nameSpace2.max(i);
}

nameSpace2.f3 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n; i++)
    {
        if ((x >= nameSpace2.abscisses[i]) && (x < nameSpace2.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace2.f(8);
    return nameSpace2.f(nameSpace2.abscisses[i]);
}

nameSpace2.f4 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n; i++)
    {
        if ((x >= nameSpace2.abscisses[i]) && (x < nameSpace2.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace2.f(8);
    return nameSpace2.f(nameSpace2.abscisses[i + 1]);
}

nameSpace2.f5 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n; i++)
    {
        if ((x >= nameSpace2.abscisses[i]) && (x < nameSpace2.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace2.f(8);
    return nameSpace2.f((nameSpace2.abscisses[i] + nameSpace2.abscisses[i + 1]) / 2);
}

nameSpace2.min = function (i)
{
    if (nameSpace2.abscisses[i + 1] <= 3)
        return nameSpace2.f(nameSpace2.abscisses[i]);
    if (nameSpace2.abscisses[i] >= 3)
        return nameSpace2.f(nameSpace2.abscisses[i + 1]);

    if (nameSpace2.f(nameSpace2.abscisses[i]) < nameSpace2.f(nameSpace2.abscisses[i + 1]))
        return nameSpace2.f(nameSpace2.abscisses[i]);
    else
        return nameSpace2.f(nameSpace2.abscisses[i + 1]);

}

nameSpace2.f2 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n; i++)
    {
        if ((x >= nameSpace2.abscisses[i]) && (x < nameSpace2.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace2.f(8);
    return nameSpace2.min(i);
}

nameSpace2.txt1 = function ()
{
   if(document.body.className.substring(0,2)=="fr")  
   {     switch (nameSpace2.choice)
    {
        case 0:
            return "type: aléatoire";
        case 1:
            return "type: arithmétique";
        case 2:
            return "type: géométrique";
    }}
else
   {     switch (nameSpace2.choice)
    {
        case 0:
            return "type: random";
        case 1:
            return "type: arithmetic";
        case 2:
            return "type: geometric";
    }}
}
nameSpace2.txt2 = function ()
{
    return " &nbsp;n=" + nameSpace2.n;
}
nameSpace2.txt3 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pas=" + nameSpace2.pas.toFixed(2);}
else
{ return "mesh=" + nameSpace2.pas.toFixed(2);}
}

nameSpace2.txt4 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Valeur de l'approximation : " + nameSpace2.poly.Area().toFixed(2);}
else
{ return "Value of approximation : " + nameSpace2.poly.Area().toFixed(2);}
}

nameSpace2.txt5 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Valeur de l'approximation : " + nameSpace2.integral1.Value().toFixed(2);}
else
 { return "Value of approximation : " + nameSpace2.integral1.Value().toFixed(2);}
}
nameSpace2.txt6 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return  "Méthode des trapèzes ";}
else
   { return  "Method of trapezes ";}

}

nameSpace2.txt7 = function ()
{
    if (nameSpace2.choicer == 0)
        return nameSpace2.txt5();
    else
        return nameSpace2.txt4();
}
nameSpace2.txt8=function()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Valeur de l'intégrale : "+nameSpace2.integral.Value().toFixed(3);}
else
{ return "Value of the integral : "+nameSpace2.integral.Value().toFixed(3);}
}

nameSpace2.calpas = function ()
{
    var pas = nameSpace2.abscisses[1] - nameSpace2.abscisses[0];
    if (nameSpace2.choice == 1)
    {
        nameSpace2.pas = 7 / nameSpace2.n;
        return;
    }
    if (nameSpace2.choice == 2)
    {
        nameSpace2.pas = nameSpace2.abscisses[nameSpace2.n] - nameSpace2.abscisses[nameSpace2.n - 1];
        return;
    }
    var delta;
    for (var i = 0; i < nameSpace2.n; i++)
    {
        delta = nameSpace2.abscisses[i + 1] - nameSpace2.abscisses[i];
        if (delta > pas)
            pas = delta;
    }
    nameSpace2.pas = pas;
}
nameSpace2.geo = function ()
{
    nameSpace2.choice = 2;
    nameSpace2.main();
}
nameSpace2.fillgeo = function ()
{
    nameSpace2.abscisses = [1];
    var q = Math.pow(8, 1 / nameSpace2.n);
    for (var i = 1; i <= nameSpace2.n; i++)
        nameSpace2.abscisses.push(Math.pow(q, i));
    nameSpace2.abscisses[nameSpace2.n] = 8;
}

nameSpace2.alea = function ()
{
    nameSpace2.choice = 0;
    nameSpace2.main();
}

nameSpace2.fillalea = function ()
{
    nameSpace2.abscisses = [1, 8];
    for (var i = 0; i <= nameSpace2.n - 2; i++)
        nameSpace2.abscisses.push(1 + 7 * Math.random());
    nameSpace2.abscisses.sort(function (x, y) {
        return x - y;
    });
    nameSpace2.abscisses[nameSpace2.n] = 8;
}

nameSpace2.ari = function ()
{
    nameSpace2.choice = 1;
    nameSpace2.main();
}
nameSpace2.fillari = function ()
{
    nameSpace2.abscisses = [1];
    var r = 7 / nameSpace2.n;
    for (var i = 1; i <= nameSpace2.n; i++)
        nameSpace2.abscisses.push(1 + i * r);
    nameSpace2.abscisses[nameSpace2.n] = 8;
}
nameSpace2.plus = function ()
{
    nameSpace2.n++;
    nameSpace2.main();
}
nameSpace2.minus = function ()
{
    if (nameSpace2.n >= 3)
    {
        nameSpace2.n--;
        nameSpace2.main();
    }
}


nameSpace2.fillArray = function ()
{
    nameSpace2.pointsArray = [];
    nameSpace2.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace2.n; i++)
    {
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i], nameSpace2.f2(nameSpace2.abscisses[i])]);
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i + 1], nameSpace2.f2(nameSpace2.abscisses[i])]);
    }
    nameSpace2.pointsArray.push([8, 0]);
}

nameSpace2.fillArray3 = function ()
{
    nameSpace2.pointsArray = [];
    nameSpace2.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace2.n; i++)
    {
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i], nameSpace2.f3(nameSpace2.abscisses[i])]);
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i + 1], nameSpace2.f3(nameSpace2.abscisses[i+1])]);
    }
    nameSpace2.pointsArray.push([8, 0]);
}

nameSpace2.fillArray4 = function ()
{
    nameSpace2.pointsArray = [];
    nameSpace2.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace2.n; i++)
    {
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i], nameSpace2.f4(nameSpace2.abscisses[i])]);
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i + 1], nameSpace2.f4(nameSpace2.abscisses[i])]);
    }
    nameSpace2.pointsArray.push([8, 0]);
}

nameSpace2.fillArray5 = function ()
{
    nameSpace2.pointsArray = [];
    nameSpace2.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace2.n; i++)
    {
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i], nameSpace2.f5(nameSpace2.abscisses[i])]);
        nameSpace2.pointsArray.push([nameSpace2.abscisses[i + 1], nameSpace2.f5(nameSpace2.abscisses[i])]);
    }
    nameSpace2.pointsArray.push([8, 0]);
}

nameSpace2.main = function ()
{
    switch (nameSpace2.choice)
    {
        case 0:
            nameSpace2.fillalea();
            break;
        case 1:
            nameSpace2.fillari();
            break;
        case 2:
            nameSpace2.fillgeo();
            break;
    }

    nameSpace2.calpas();
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    var i;
    for (i = 0; i <= nameSpace2.n; i++)
        nameSpace2.board.create('point', [nameSpace2.abscisses[i], 0], {size: 1, withLabel: false})
    nameSpace2.graph= nameSpace2.board.create('functiongraph', [nameSpace2.f, 1, 8]);
            nameSpace2.integral = nameSpace2.board.create('integral', [[1, 8], nameSpace2.graph], {withLabel: false, color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    switch (nameSpace2.choicer)
    {
        case 0:
            nameSpace2.graph1 = nameSpace2.board.create('functiongraph', [nameSpace2.f1, 1, 8], {color: 'red'});
            nameSpace2.integral1 = nameSpace2.board.create('integral', [[1, 8], nameSpace2.graph1], {withLabel: false, color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
            break;
        case 1:
            nameSpace2.graph2 = nameSpace2.board.create('functiongraph', [nameSpace2.f2, 1, 8]);
            nameSpace2.fillArray(); //vertices of polygon (second integral)
            nameSpace2.poly = nameSpace2.board.create('polygon', nameSpace2.pointsArray, {withLines: false, fillColor: 'blue', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;
        case 2:
            //nameSpace2.graph3 = nameSpace2.board.create('functiongraph', [nameSpace2.f3, 1, 8]);
            nameSpace2.fillArray3(); //vertices of polygon (second integral)
            nameSpace2.poly = nameSpace2.board.create('polygon', nameSpace2.pointsArray, {withLines: true, fillColor: 'green', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;
        case 3:
            nameSpace2.graph4 = nameSpace2.board.create('functiongraph', [nameSpace2.f4, 1, 8]);
            nameSpace2.fillArray4(); //vertices of polygon (second integral)
            nameSpace2.poly = nameSpace2.board.create('polygon', nameSpace2.pointsArray, {withLines: false, fillColor: 'purple', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;
        case 4:
            nameSpace2.graph5 = nameSpace2.board.create('functiongraph', [nameSpace2.f5, 1, 8]);
            nameSpace2.fillArray5(); //vertices of polygon (second integral)
            nameSpace2.poly = nameSpace2.board.create('polygon', nameSpace2.pointsArray, {withLines: false, fillColor: 'red', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;

    }




    nameSpace2.board.create('text', [1, 4.5, nameSpace2.txt1]);
    nameSpace2.board.create('text', [-1, 4.5, nameSpace2.txt2]);
    nameSpace2.board.create('text', [4, 4.5, nameSpace2.txt3]);
    nameSpace2.board.create('text', [1, -2, nameSpace2.txt6]);
    nameSpace2.board.create('text', [1, -3, nameSpace2.txt7]);
    nameSpace2.board.create('text', [1, -2.5, nameSpace2.txt8]);
}
nameSpace2.main();