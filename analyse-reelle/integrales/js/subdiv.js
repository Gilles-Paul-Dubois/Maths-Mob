var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +9; // adjust as needed
nameSpace1.ymin = -2; // adjust according max value of f
nameSpace1.ymax = +2; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.n = 2;
nameSpace1.abscisses = [];
nameSpace1.choice = 0;
nameSpace1.pas = 0;

nameSpace1.txt1 = function ()
{
   if(document.body.className.substring(0,2)=="fr")  
   {     switch (nameSpace1.choice)
    {        case 0:
            return "type: aléatoire";
        case 1:
            return "type: arithmétique";
        case 2:
            return "type: géométrique";
    }}
else
  {     switch (nameSpace1.choice)
    {        case 0:
            return "kind: random";
        case 1:
            return "kind: arithmetic";
        case 2:
            return "kind: geometric";
    }}
}
nameSpace1.txt2=function()
{
    return " &nbsp;n="+nameSpace1.n;
}
nameSpace1.txt3=function()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pas="+nameSpace1.pas.toFixed(2);}
else
{ return "mesh="+nameSpace1.pas.toFixed(2);}
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
    nameSpace1.board.create('text',[1,1.5,nameSpace1.txt1]);
    nameSpace1.board.create('text',[-1,1.5,nameSpace1.txt2]);
    nameSpace1.board.create('text',[4,1.5,nameSpace1.txt3]);
}