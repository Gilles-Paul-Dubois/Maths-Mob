var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +9; // adjust as needed
nameSpace2.ymin = -1; // adjust according max value of f
nameSpace2.ymax = +9; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});

nameSpace2.p = 2;
nameSpace2.q = 1;

   nameSpace2.board.create('text', [4, 7, nameSpace2.stxt1], {color: 'red'});
    nameSpace2.board.create('text', [4, 6.5, nameSpace2.stxt2], {color: 'red'});
nameSpace2.stxt1 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "valeur de p : " + nameSpace2.p;}
else
  { return "value of p : " + nameSpace2.p;}
}

nameSpace2.stxt2 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "valeur de q : " + nameSpace2.q;}
else
{ return "value of q : " + nameSpace2.q;}
}

nameSpace2.f = function (x)
{
    return Math.pow(x, nameSpace2.p / nameSpace2.q);
}

nameSpace2.nextpplus = function ()
{
    nameSpace2.p++;
    nameSpace2.Paint2();
}

nameSpace2.nextpminus = function ()
{
    if (nameSpace2.p == 1)
        return;
    else
    {
        nameSpace2.p--;
        nameSpace2.Paint2();
    }
}

nameSpace2.nextqplus = function ()
{
    nameSpace2.q++;
    nameSpace2.Paint2();
}

nameSpace2.nextqminus = function ()
{
    if (nameSpace2.q == 1)
        return;
    else
    {
        nameSpace2.q--;
        nameSpace2.Paint2();
    }
}

nameSpace2.Paint2 = function ()
{
    nameSpace2.board.suspendUpdate();
    nameSpace2.board.create('functiongraph', [nameSpace2.f, 0, 9], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace2.board.unsuspendUpdate();
}

nameSpace2.Paint = function ()
{
    nameSpace2.board.suspendUpdate();
    nameSpace2.board.create('functiongraph', [nameSpace2.f, 0, 9], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace2.board.create('text', [4, 7, nameSpace2.stxt1], {color: 'red'});
    nameSpace2.board.create('text', [4, 6.5, nameSpace2.stxt2], {color: 'red'});
    nameSpace2.board.unsuspendUpdate();
}
nameSpace2.Paint();