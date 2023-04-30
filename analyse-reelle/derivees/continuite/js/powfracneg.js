var nameSpace3 = {};
nameSpace3.xmin = -1; // adjust as needed
nameSpace3.xmax = +9; // adjust as needed
nameSpace3.ymin = -1; // adjust according max value of f
nameSpace3.ymax = +9; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});

nameSpace3.p = -1;
nameSpace3.q = 1;

nameSpace3.board.create('text', [4, 7, nameSpace3.stxt1], {color: 'red'});
nameSpace3.board.create('text', [4, 6.5, nameSpace3.stxt2], {color: 'red'});
nameSpace3.stxt1 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "valeur de p : " + nameSpace3.p;}
else
{ return "value of p : " + nameSpace3.p;}
}

nameSpace3.stxt2 = function ()
{
   if(document.body.className.substring(0,2)=="fr")  
   {     return "valeur de q : " + nameSpace3.q;}
else
   {     return "value of q : " + nameSpace3.q;}
}

nameSpace3.f = function (x)
{
    return Math.pow(x, nameSpace3.p / nameSpace3.q);
}

nameSpace3.nextpplus = function ()
{
    if (nameSpace3.p == -1)
        return;
    else
    {
        nameSpace3.p++;
        nameSpace3.Paint2();
    }
}

nameSpace3.nextpminus = function ()
{

    nameSpace3.p--;
    nameSpace3.Paint2();

}

nameSpace3.nextqplus = function ()
{
    nameSpace3.q++;
    nameSpace3.Paint2();
}

nameSpace3.nextqminus = function ()
{
    if (nameSpace3.q == 1)
        return;
    else
    {
        nameSpace3.q--;
        nameSpace3.Paint2();
    }
}

nameSpace3.Paint2 = function ()
{
    nameSpace3.board.suspendUpdate();
    nameSpace3.board.create('functiongraph', [nameSpace3.f, 0, 9], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace3.board.unsuspendUpdate();
}

nameSpace3.Paint = function ()
{
    nameSpace3.board.suspendUpdate();
    nameSpace3.board.create('functiongraph', [nameSpace3.f, 0, 9], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace3.board.create('text', [4, 7, nameSpace3.stxt1], {color: 'red'});
    nameSpace3.board.create('text', [4, 6.5, nameSpace3.stxt2], {color: 'red'});
    nameSpace3.board.unsuspendUpdate();
}
nameSpace3.Paint();