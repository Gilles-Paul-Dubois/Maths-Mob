var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +9; // adjust as needed
nameSpace2.ymin = -4; // adjust according max value of f
nameSpace2.ymax = +4; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.n1 = 2;
nameSpace2.abscisses1 = [];
nameSpace2.values1 = [];
nameSpace2.choice1 = 0;
nameSpace2.pas1 = 0;

nameSpace2.n2 = 2;
nameSpace2.abscisses2 = [];
nameSpace2.values2 = [];
nameSpace2.choice2 = 0;
nameSpace2.pas2 = 0;

nameSpace2.f1 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n1; i++)
    {
        if ((x >= nameSpace2.abscisses1[i]) && (x < nameSpace2.abscisses1[i + 1]))
            return nameSpace2.values1[i];
    }
}


nameSpace2.txt11 = function ()
{
   if(document.body.className.substring(0,2)=="fr")  
   {     switch (nameSpace2.choice1)
    {
        case 0:
            return "type: aléatoire";
        case 1:
            return "type: arithmétique";
        case 2:
            return "type: géométrique";
    }}
else
   {     switch (nameSpace2.choice1)
    {
        case 0:
            return "type: random";
        case 1:
            return "type: arithmetic";
        case 2:
            return "type: geometric";
    }}
}
nameSpace2.txt21 = function ()
{
    return " &nbsp;n=" + nameSpace2.n1;
}
nameSpace2.txt31 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pas=" + nameSpace2.pas1.toFixed(2);}
else
{ return "mesh=" + nameSpace2.pas1.toFixed(2);}
}
nameSpace2.calpas1 = function ()
{
    var pas = nameSpace2.abscisses1[1] - nameSpace2.abscisses1[0];
    if (nameSpace2.choice1 == 1)
    {
        nameSpace2.pas1 = 7 / nameSpace2.n1;
        return;
    }
    if (nameSpace2.choice1 == 2)
    {
        nameSpace2.pas1 = nameSpace2.abscisses1[nameSpace2.n1] - nameSpace2.abscisses1[nameSpace2.n1 - 1];
        return;
    }
    var delta;
    for (var i = 0; i < nameSpace2.n1; i++)
    {
        delta = nameSpace2.abscisses1[i + 1] - nameSpace2.abscisses1[i];
        if (delta > pas)
            pas = delta;
    }
    nameSpace2.pas1 = pas;
}
nameSpace2.geo1 = function ()
{
    nameSpace2.choice1 = 2;
    nameSpace2.main();
}
nameSpace2.fillgeo1 = function ()
{
    nameSpace2.abscisses1 = [1];
    var q = Math.pow(8, 1 / nameSpace2.n1);
    for (var i = 1; i <= nameSpace2.n1; i++)
        nameSpace2.abscisses1.push(Math.pow(q, i));
}

nameSpace2.alea1 = function ()
{
    nameSpace2.choice1 = 0;
    nameSpace2.main();
}

nameSpace2.fillalea1 = function ()
{
    nameSpace2.abscisses1 = [1, 8];
    for (var i = 0; i <= nameSpace2.n1 - 2; i++)
        nameSpace2.abscisses1.push(1 + 7 * Math.random());
    nameSpace2.abscisses1.sort(function (x, y) {
        return x - y;
    });
}

nameSpace2.ari1 = function ()
{
    nameSpace2.choice1 = 1;
    nameSpace2.main();
}
nameSpace2.fillari1 = function ()
{
    nameSpace2.abscisses1 = [1];
    var r = 7 / nameSpace2.n1;
    for (var i = 1; i <= nameSpace2.n1; i++)
        nameSpace2.abscisses1.push(1 + i * r);
}
nameSpace2.plus1 = function ()
{
    nameSpace2.n1++;
    nameSpace2.main();
}
nameSpace2.minus1 = function ()
{
    if (nameSpace2.n1 >= 3)
    {
        nameSpace2.n1--;
        nameSpace2.main();
    }
}
nameSpace2.fillValues1 = function ()
{
    nameSpace2.values1 = [];
    for (var i = 0; i <= nameSpace2.n1; i++)
        nameSpace2.values1.push((Math.random() - 0.5) * 3);
}

/* copie pour la deuxième fonction */
nameSpace2.f2 = function (x)
{
    var i;
    for (i = 0; i < nameSpace2.n2; i++)
    {
        if ((x >= nameSpace2.abscisses2[i]) && (x < nameSpace2.abscisses2[i + 1]))
            return nameSpace2.values2[i];
    }
}


nameSpace2.txt12 = function ()
{
   if(document.body.className.substring(0,2)=="fr")  
   {     switch (nameSpace2.choice2)
    {
        case 0:
            return "type: aléatoire";
        case 1:
            return "type: arithmétique";
        case 2:
            return "type: géométrique";
    }}
else
  {     switch (nameSpace2.choice2)
    {
        case 0:
            return "type: random";
        case 1:
            return "type: arithmetic";
        case 2:
            return "type: geometric";
    }}
}
nameSpace2.txt22 = function ()
{
    return " &nbsp;n=" + nameSpace2.n2;
}
nameSpace2.txt32 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pas=" + nameSpace2.pas2.toFixed(2);}
else
{ return "mesh=" + nameSpace2.pas2.toFixed(2);}
}
nameSpace2.calpas2 = function ()
{
    var pas = nameSpace2.abscisses2[1] - nameSpace2.abscisses2[0];
    if (nameSpace2.choice2 == 1)
    {
        nameSpace2.pas2 = 7 / nameSpace2.n2;
        return;
    }
    if (nameSpace2.choice2 == 2)
    {
        nameSpace2.pas2 = nameSpace2.abscisses2[nameSpace2.n2] - nameSpace2.abscisses2[nameSpace2.n2 - 1];
        return;
    }
    var delta;
    for (var i = 0; i < nameSpace2.n2; i++)
    {
        delta = nameSpace2.abscisses2[i + 1] - nameSpace2.abscisses2[i];
        if (delta > pas)
            pas = delta;
    }
    nameSpace2.pas2 = pas;
}
nameSpace2.geo2 = function ()
{
    nameSpace2.choice2 = 2;
    nameSpace2.main();
}
nameSpace2.fillgeo2 = function ()
{
    nameSpace2.abscisses2 = [1];
    var q = Math.pow(8, 1 / nameSpace2.n2);
    for (var i = 1; i <= nameSpace2.n2; i++)
        nameSpace2.abscisses2.push(Math.pow(q, i));
}

nameSpace2.alea2 = function ()
{
    nameSpace2.choice2 = 0;
    nameSpace2.main();
}

nameSpace2.fillalea2 = function ()
{
    nameSpace2.abscisses2 = [1, 8];
    for (var i = 0; i <= nameSpace2.n2 - 2; i++)
        nameSpace2.abscisses2.push(1 + 7 * Math.random());
    nameSpace2.abscisses2.sort(function (x, y) {
        return x - y;
    });
}

nameSpace2.ari2 = function ()
{
    nameSpace2.choice2 = 1;
    nameSpace2.main();
}
nameSpace2.fillari2 = function ()
{
    nameSpace2.abscisses2 = [1];
    var r = 7 / nameSpace2.n2;
    for (var i = 1; i <= nameSpace2.n2; i++)
        nameSpace2.abscisses2.push(1 + i * r);
}
nameSpace2.plus2 = function ()
{
    nameSpace2.n2++;
    nameSpace2.main();
}
nameSpace2.minus2 = function ()
{
    if (nameSpace2.n2 >= 3)
    {
        nameSpace2.n2--;
        nameSpace2.main();
    }
}
nameSpace2.fillValues2 = function ()
{
    nameSpace2.values2 = [];
    for (var i = 0; i <= nameSpace2.n2; i++)
        nameSpace2.values2.push((Math.random() - 0.5) * 3);
}

/* fin de la copie */

nameSpace2.f3=function(x)
{
    return nameSpace2.f1(x)+nameSpace2.f2(x);
}
nameSpace2.main = function ()
{
    switch (nameSpace2.choice1)
    {
        case 0:
            nameSpace2.fillalea1();
            break;
        case 1:
            nameSpace2.fillari1();
            break;
        case 2:
            nameSpace2.fillgeo1();
            break;
    }

    switch (nameSpace2.choice2)
    {
        case 0:
            nameSpace2.fillalea2();
            break;
        case 1:
            nameSpace2.fillari2();
            break;
        case 2:
            nameSpace2.fillgeo2();
            break;
    }
    nameSpace2.fillValues1();
    nameSpace2.calpas1();
    nameSpace2.fillValues2();
    nameSpace2.calpas2();
    nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board);
    nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
    var i;
    for (i = 0; i <= nameSpace2.n1; i++)
        nameSpace2.board.create('point', [nameSpace2.abscisses1[i], 0], {size: 1, withLabel: false, color: 'red'});
    nameSpace2.board.create('functiongraph', [nameSpace2.f1, 1, 8], {strokeColor: 'red'});
    for (i = 0; i <= nameSpace2.n2; i++)
        nameSpace2.board.create('point', [nameSpace2.abscisses2[i], 0], {size: 1, withLabel: false, color: 'blue'});
    nameSpace2.board.create('functiongraph', [nameSpace2.f2, 1, 8], {strokeColor: 'blue'});
    
    nameSpace2.board.create('functiongraph', [nameSpace2.f3, 1, 8], {strokeColor: 'green'});
    nameSpace2.board.create('text', [1, 3.5, nameSpace2.txt11], {color: 'red'});
    nameSpace2.board.create('text', [-1, 3.5, nameSpace2.txt21], {color: 'red'});
    nameSpace2.board.create('text', [4, 3.5, nameSpace2.txt31], {color: 'red'});

    nameSpace2.board.create('text', [1, -3.5, nameSpace2.txt12], {color: 'blue'});
    nameSpace2.board.create('text', [-1, -3.5, nameSpace2.txt22], {color: 'blue'});
    nameSpace2.board.create('text', [4, -3.5, nameSpace2.txt32], {color: 'blue'});
}