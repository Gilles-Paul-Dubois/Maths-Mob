var nameSpace2 = {};
nameSpace2.xmin = -1; // adjust as needed
nameSpace2.xmax = +9; // adjust as needed
nameSpace2.ymin = -1; // adjust according max value of f
nameSpace2.ymax = +9; // adjust according min value of f
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.choice = 0;
nameSpace2.slx = nameSpace2.board.create('slider', [[2, 8], [4, 8], [1, 2, 10]]);
nameSpace2.sln = nameSpace2.board.create('slider', [[2, 7], [4, 7], [0, 0, 6]], {snapWidth:1});
nameSpace2.a=nameSpace2.slx.Value() * Math.pow(10, nameSpace2.sln.Value());

nameSpace2.slx.on('move',function(){nameSpace2.Paint();} );
nameSpace2.sln.on('move',function(){nameSpace2.Paint();} );


nameSpace2.txt1 = function ()
{
    return "x=" + nameSpace2.slx.Value() * Math.pow(10, nameSpace2.sln.Value());
}

nameSpace2.txt2 = function ()
{
    var x = nameSpace2.slx.Value() * Math.pow(10, nameSpace2.sln.Value());
    switch (nameSpace2.choice)
    {
        case 0:
            return "I(f,1,x)=" + (Math.log(x));
        case 1:
            return "I(f,1,x)=" + (1-1/x);
    }

}
nameSpace2.f = function (x)
{
    switch (nameSpace2.choice)
    {
        case 0:
            return 1 / x;
        case 1:
            return 1 / (x*x);
    }
}

nameSpace2.choicef = function ()
{
    nameSpace2.choice = (nameSpace2.choice + 1) % 2;
    nameSpace2.Paint();
}



nameSpace2.Paint = function ()
{
    nameSpace2.board.removeObject(nameSpace2.integral);
    nameSpace2.board.removeObject(nameSpace2.graph);
    nameSpace2.board.removeObject(nameSpace2.texte1);
    nameSpace2.board.removeObject(nameSpace2.texte2);
    nameSpace2.graph = nameSpace2.board.create('functiongraph', [nameSpace2.f, 0, nameSpace2.xmax], {strokeColor: 'green'});
    nameSpace2.a=nameSpace2.slx.Value() * Math.pow(10, nameSpace2.sln.Value());
    nameSpace2.integral = nameSpace2.board.create('integral', [[1,nameSpace2.a], nameSpace2.graph], {withLabel: false, color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace2.texte1=nameSpace2.board.create('text', [5, 7, nameSpace2.txt1]);
    nameSpace2.texte2=nameSpace2.board.create('text', [5, 6, nameSpace2.txt2]);
    
}
nameSpace2.Paint();