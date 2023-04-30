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
nameSpace1.choicer = 4;

nameSpace1.riem0 = function ()
{
    nameSpace1.choicer = 0;
    nameSpace1.main();
}

nameSpace1.riem1 = function ()
{
    nameSpace1.choicer = 1;
    nameSpace1.main();
}
nameSpace1.riem2 = function ()
{
    nameSpace1.choicer = 2;
    nameSpace1.main();
}
nameSpace1.riem3 = function ()
{
    nameSpace1.choicer = 3;
    nameSpace1.main();
}
nameSpace1.riem4 = function ()
{
    nameSpace1.choicer = 4;
    nameSpace1.main();
}


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

nameSpace1.f3 = function (x)
{
    var i;
    for (i = 0; i < nameSpace1.n; i++)
    {
        if ((x >= nameSpace1.abscisses[i]) && (x < nameSpace1.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace1.f(8);
    return nameSpace1.f(nameSpace1.abscisses[i]);
}

nameSpace1.f4 = function (x)
{
    var i;
    for (i = 0; i < nameSpace1.n; i++)
    {
        if ((x >= nameSpace1.abscisses[i]) && (x < nameSpace1.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace1.f(8);
    return nameSpace1.f(nameSpace1.abscisses[i + 1]);
}

nameSpace1.f5 = function (x)
{
    var i;
    for (i = 0; i < nameSpace1.n; i++)
    {
        if ((x >= nameSpace1.abscisses[i]) && (x < nameSpace1.abscisses[i + 1]))
            break;
    }
    if (x == 8)
        return nameSpace1.f(8);
    return nameSpace1.f((nameSpace1.abscisses[i] + nameSpace1.abscisses[i + 1]) / 2);
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
   {     switch (nameSpace1.choice)
    {
        case 0:
            return "type: aléatoire";
        case 1:
            return "type: arithmétique";
        case 2:
            return "type: géométrique";
    }}
else
  {     switch (nameSpace1.choice)
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
   { return "Valeur de l'approximation : " + nameSpace1.poly.Area().toFixed(2);}
else
   { return "Value of approximation : " + nameSpace1.poly.Area().toFixed(2);}
}

nameSpace1.txt5 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Valeur de l'approximation : " + nameSpace1.integral1.Value().toFixed(2);}
else
 { return "value of approximation  : " + nameSpace1.integral1.Value().toFixed(2);}
}
nameSpace1.txt6 = function ()
{
    if(document.body.className.substring(0,2)=="fr")  
   {    var txt = "Type du pointage : ";}
else
  {    var txt = "Type of tagging : ";}
   if(document.body.className.substring(0,2)=="fr")  
   {     switch (nameSpace1.choicer)
    {
        case 0:
            return txt + "sup sur l'intervalle";
        case 1:
            return txt + "inf sur l'intervalle";
        case 2:
            return txt + "valeur de gauche";
        case 3:
            return txt + "valeur de droite";
        case 4:
            return txt + "valeur du milieu";
    }}
else
   {     switch (nameSpace1.choicer)
    {
        case 0:
            return txt + "sup on interval";
        case 1:
            return txt + "inf on interval";
        case 2:
            return txt + "value at left bound";
        case 3:
            return txt + "value at right bound";
        case 4:
            return txt + "value at the middle point";
    }}
}

nameSpace1.txt7 = function ()
{
    if (nameSpace1.choicer == 0)
        return nameSpace1.txt5();
    else
        return nameSpace1.txt4();
}
nameSpace1.txt8=function()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Valeur de l'intégrale : "+nameSpace1.integral.Value().toFixed(3);}
else
{ return "Value of the integral : "+nameSpace1.integral.Value().toFixed(3);}
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

nameSpace1.fillArray3 = function ()
{
    nameSpace1.pointsArray = [];
    nameSpace1.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace1.n; i++)
    {
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i], nameSpace1.f3(nameSpace1.abscisses[i])]);
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i + 1], nameSpace1.f3(nameSpace1.abscisses[i])]);
    }
    nameSpace1.pointsArray.push([8, 0]);
}

nameSpace1.fillArray4 = function ()
{
    nameSpace1.pointsArray = [];
    nameSpace1.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace1.n; i++)
    {
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i], nameSpace1.f4(nameSpace1.abscisses[i])]);
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i + 1], nameSpace1.f4(nameSpace1.abscisses[i])]);
    }
    nameSpace1.pointsArray.push([8, 0]);
}

nameSpace1.fillArray5 = function ()
{
    nameSpace1.pointsArray = [];
    nameSpace1.pointsArray.push([1, 0]);
    for (var i = 0; i < nameSpace1.n; i++)
    {
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i], nameSpace1.f5(nameSpace1.abscisses[i])]);
        nameSpace1.pointsArray.push([nameSpace1.abscisses[i + 1], nameSpace1.f5(nameSpace1.abscisses[i])]);
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
    nameSpace1.graph= nameSpace1.board.create('functiongraph', [nameSpace1.f, 1, 8]);
            nameSpace1.integral = nameSpace1.board.create('integral', [[1, 8], nameSpace1.graph], {withLabel: false, color: 'green', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    switch (nameSpace1.choicer)
    {
        case 0:
            nameSpace1.graph1 = nameSpace1.board.create('functiongraph', [nameSpace1.f1, 1, 8], {color: 'red'});
            nameSpace1.integral1 = nameSpace1.board.create('integral', [[1, 8], nameSpace1.graph1], {withLabel: false, color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
            break;
        case 1:
            nameSpace1.graph2 = nameSpace1.board.create('functiongraph', [nameSpace1.f2, 1, 8]);
            nameSpace1.fillArray(); //vertices of polygon (second integral)
            nameSpace1.poly = nameSpace1.board.create('polygon', nameSpace1.pointsArray, {withLines: false, fillColor: 'blue', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;
        case 2:
            nameSpace1.graph3 = nameSpace1.board.create('functiongraph', [nameSpace1.f3, 1, 8]);
            nameSpace1.fillArray3(); //vertices of polygon (second integral)
            nameSpace1.poly = nameSpace1.board.create('polygon', nameSpace1.pointsArray, {withLines: false, fillColor: 'green', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;
        case 3:
            nameSpace1.graph4 = nameSpace1.board.create('functiongraph', [nameSpace1.f4, 1, 8]);
            nameSpace1.fillArray4(); //vertices of polygon (second integral)
            nameSpace1.poly = nameSpace1.board.create('polygon', nameSpace1.pointsArray, {withLines: false, fillColor: 'purple', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;
        case 4:
            nameSpace1.graph5 = nameSpace1.board.create('functiongraph', [nameSpace1.f5, 1, 8]);
            nameSpace1.fillArray5(); //vertices of polygon (second integral)
            nameSpace1.poly = nameSpace1.board.create('polygon', nameSpace1.pointsArray, {withLines: false, fillColor: 'red', fillOpacity: 0.2, vertices: {visible: false}});// draw polygon like integral
            break;

    }




    nameSpace1.board.create('text', [1, 4.5, nameSpace1.txt1]);
    nameSpace1.board.create('text', [-1, 4.5, nameSpace1.txt2]);
    nameSpace1.board.create('text', [4, 4.5, nameSpace1.txt3]);
    nameSpace1.board.create('text', [1, -2, nameSpace1.txt6]);
    nameSpace1.board.create('text', [1, -3, nameSpace1.txt7]);
    nameSpace1.board.create('text', [1, -2.5, nameSpace1.txt8]);
}
nameSpace1.main();