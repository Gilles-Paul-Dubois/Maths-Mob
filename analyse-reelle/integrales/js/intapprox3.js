var nameSpace3 = {};
nameSpace3.xmin = -1; // adjust as needed
nameSpace3.xmax = +9; // adjust as needed
nameSpace3.ymin = -5; // adjust according max value of f
nameSpace3.ymax = +5; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.won = 0;
nameSpace3.lost = 0;
nameSpace3.shots = 0;


nameSpace3.txt1 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "nombre de tirs :" + nameSpace3.shots;}
else
{ return "number of shots :" + nameSpace3.shots;}
}

nameSpace3.txt2 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "nombre de succès :" + nameSpace3.won;}
else
 { return "number of successes :" + nameSpace3.won;}
}

nameSpace3.txt3 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "nombre d'échecs :" + nameSpace3.lost;}
else
 { return "number of failures :" + nameSpace3.lost;}
}

nameSpace3.txt4 = function ()
{
    if (nameSpace3.shots == 0)
        return "";
    else
          if(document.body.className.substring(0,2)=="fr")  
   {  return "succès/total :" + (nameSpace3.won / nameSpace3.shots).toFixed(2);}
else
{  return "successes/total :" + (nameSpace3.won / nameSpace3.shots).toFixed(2);}
}
nameSpace3.txt5 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "rapport Intégrale/surface du rectangle:"+(9.93/28).toFixed(2);}
else
{ return "ratio integral/area of rectangle:"+(9.93/28).toFixed(2);}
}

nameSpace3.restart = function ()
{
    nameSpace3.won = 0;
    nameSpace3.lost = 0;
    nameSpace3.shots = 0;
    nameSpace3.Paint();
}
nameSpace3.shoot = function ()
{
    nameSpace3.shots++;
    var x = 1 + 7 * Math.random();
    var y = 4 * Math.random();
    if (y < nameSpace3.f(x))
        nameSpace3.won++;
    else
        nameSpace3.lost++;
    nameSpace3.board.create('point', [x, y], {size: 1, fixed: true, withLabel: false});
}

nameSpace3.f = function (x)
{
    return 4 / (1 + (x - 3) * (x - 3));
}

nameSpace3.plus10 = function ()
{
    var i;
    for (i = 0; i < 10; i++)
    {
        nameSpace3.shoot();
    }
    nameSpace3.board.removeObject(nameSpace3.texte1);// update counters
    nameSpace3.board.removeObject(nameSpace3.texte2);// update counters
    nameSpace3.board.removeObject(nameSpace3.texte3);// update counters
    nameSpace3.board.removeObject(nameSpace3.texte4);// update counters
    nameSpace3.texte1 = nameSpace3.board.create('text', [2, -1, nameSpace3.txt1]);
    nameSpace3.texte2 = nameSpace3.board.create('text', [2, -1.5, nameSpace3.txt2]);
    nameSpace3.texte3 = nameSpace3.board.create('text', [2, -2, nameSpace3.txt3]);
    nameSpace3.texte4 = nameSpace3.board.create('text', [2, -2.5, nameSpace3.txt4]);
    //nameSpace3.Paint();
}

nameSpace3.Paint = function ()
{
    nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board);
    nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
    nameSpace3.graph = nameSpace3.board.create('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'green'});
    nameSpace3.integral = nameSpace3.board.create('integral', [[1, 8], nameSpace3.graph], {withLabel: false, color: 'green', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace3.board.create('polygon', [[1, 0], [1, 4], [8, 4], [8, 0]], {fillColor: 'yellow', vertices: {visible: false}});
    nameSpace3.texte1 = nameSpace3.board.create('text', [2, -1, nameSpace3.txt1]);
    nameSpace3.texte2 = nameSpace3.board.create('text', [2, -1.5, nameSpace3.txt2]);
    nameSpace3.texte3 = nameSpace3.board.create('text', [2, -2, nameSpace3.txt3]);
    nameSpace3.texte4 = nameSpace3.board.create('text', [2, -2.5, nameSpace3.txt4]);
    nameSpace3.texte5 = nameSpace3.board.create('text', [2, -3, nameSpace3.txt5]);
}
nameSpace3.Paint();