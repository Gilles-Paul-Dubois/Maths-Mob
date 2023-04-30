var nameSpace3 = {};
nameSpace3.xmin = -0.5; // adjust as needed
nameSpace3.xmax = +1.5; // adjust as needed
nameSpace3.ymin = -0.5; // adjust according max value of f
nameSpace3.ymax = +1.5; // adjust according min value of f
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.sls = nameSpace3.board.create('slider', [[0, -0.25], [0.5, -0.25], [0, 1, 4]]);
nameSpace3.board.create('text', [0.75, -0.25, nameSpace3.txt3]);
nameSpace3.n = 2;
nameSpace3.subDiv1 = [];
nameSpace3.subDiv2 = [];
nameSpace3.points1 = [];
nameSpace3.points2 = [];
nameSpace3.polys = [];
nameSpace3.graphg = null;
nameSpace3.approx = null;
nameSpace3.txt1 = function ()
{
    return "n=" + nameSpace3.n;
}

nameSpace3.txt2 = function ()
{    
       if(document.body.className.substring(0,2)=="fr")  
   { return "Surface du polygone: " + nameSpace3.approx.Value().toFixed(2);}
else
{ return "Area of the polygon: " + nameSpace3.approx.Value().toFixed(2);}
}
nameSpace3.txt3 = function ()
{
    return "s=" + nameSpace3.sls.Value().toFixed(2);
}

nameSpace3.txt4 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Valeur théorique de l'hypographe :" + (1 / (nameSpace3.sls.Value() + 1)).toFixed(2);}
else
{ return "Theoretical value of hypograph area :" + (1 / (nameSpace3.sls.Value() + 1)).toFixed(2);}
}

nameSpace3.f = function (x)
{
    return Math.pow(x, nameSpace3.sls.Value());
}

nameSpace3.g = function (x)
{
    if (x < nameSpace3.subDiv1[0][0])
        return 0;
    var i;
    for (i = 0; i <= nameSpace3.n - 1; i++)
    {
        if ((x >= nameSpace3.subDiv1[i][0]) && (x < nameSpace3.subDiv1[i + 1][0]))
            break;
    }
    return nameSpace3.f(nameSpace3.subDiv1[i][0]);
}

nameSpace3.nextplus = function ()
{
    nameSpace3.n++;
    nameSpace3.Paint();
}

nameSpace3.nextminus = function ()
{
    if (nameSpace3.n >= 3)
    {
        nameSpace3.n--;
        nameSpace3.Paint();
    }
}


nameSpace3.restart = function ()
{
   
        nameSpace3.n=2;
        nameSpace3.Paint();
   
}
nameSpace3.fillSubDiv = function ()
{
    var n = nameSpace3.n;
    var r = Math.pow(n, 1 / n);
    nameSpace3.subDiv1 = [];
    nameSpace3.subDiv2 = [];
    nameSpace3.polys = [];
    var x = 1 / n;
    var i;
    for (i = 0; i <= n; i++)
    {
        nameSpace3.subDiv1.push([x, 0]);
        nameSpace3.subDiv2.push([x, nameSpace3.f(x)]);
        x = x * r;
    }
    for (i = 0; i <= n; i++)
    {
        nameSpace3.points1[i] = nameSpace3.board.create('point', nameSpace3.subDiv1[i], {size: 1, withLabel: false, visible: false});
        nameSpace3.points2[i] = nameSpace3.board.create('point', nameSpace3.subDiv2[i], {size: 1, withLabel: false, visible: false});
    }
    for (i = 0; i < n; i++)
    {
        nameSpace3.polys[i] = "";
    }
}

nameSpace3.Paint = function ()
{
    nameSpace3.board.suspendUpdate();

    nameSpace3.board.removeObject(nameSpace3.t1);
    nameSpace3.board.removeObject(nameSpace3.t3);
    nameSpace3.board.removeObject(nameSpace3.t2);
    nameSpace3.board.removeObject(nameSpace3.t4);
    nameSpace3.board.removeObject(nameSpace3.approx);
    for (var i = 0; i <= nameSpace3.n; i++)
    {
        nameSpace3.board.removeObject(nameSpace3.points1[i]);
        nameSpace3.board.removeObject(nameSpace3.points2[i]);
    }
    nameSpace3.fillSubDiv();
    nameSpace3.board.create('functiongraph', [nameSpace3.f, 0, 1], {strokeColor: 'green'});
    nameSpace3.t3 = nameSpace3.board.create('text', [0.75, -0.25, nameSpace3.txt3]);
    nameSpace3.t1 = nameSpace3.board.create('text', [-0.25, -0.25, nameSpace3.txt1]);

    nameSpace3.graphg = nameSpace3.board.create('functiongraph', [nameSpace3.g, 0, 1], {strokeColor: 'blue'});
    nameSpace3.approx = nameSpace3.board.create('integral', [[0, 1], nameSpace3.graphg],
            {color: 'purple', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace3.t2 = nameSpace3.board.create('text', [-0.25, 1.25, nameSpace3.txt2]);
    nameSpace3.t4 = nameSpace3.board.create('text', [0.5, 1.25, nameSpace3.txt4]);
    nameSpace3.board.unsuspendUpdate();
}
nameSpace3.Paint();