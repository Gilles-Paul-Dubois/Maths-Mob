var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +9; // adjust as needed
nameSpace1.ymin = -1; // adjust according max value of f
nameSpace1.ymax = +9; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});

nameSpace1.n = 2;

nameSpace1.stxt = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "valeur de n : " + nameSpace1.n;}
else
{ return "value of n : " + nameSpace1.n;}
}
nameSpace1.f = function (x)
{
    return Math.pow(x, nameSpace1.n);
}

nameSpace1.g = function (x)
{
    return Math.pow(x, 1 / nameSpace1.n);
}

nameSpace1.nextplus = function ()
{
    nameSpace1.n++;
    nameSpace1.Paint2();
}

nameSpace1.nextminus = function ()
{
    if (nameSpace1.n == 1)
        return;
    else
    {
        nameSpace1.n--;
        nameSpace1.Paint2();
    }
}

nameSpace1.Paint2 = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.create('functiongraph', [nameSpace1.f, 0, 9], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.create('functiongraph', [nameSpace1.g, 0, 9], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace1.board.unsuspendUpdate();
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.create('functiongraph', [nameSpace1.f, 0, 9], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.create('functiongraph', [nameSpace1.g, 0, 9], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace1.board.create('text', [4, 7, nameSpace1.stxt], {color:'red'});
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();