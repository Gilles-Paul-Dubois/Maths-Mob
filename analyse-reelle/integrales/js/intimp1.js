var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +9; // adjust as needed
nameSpace1.ymin = -1; // adjust according max value of f
nameSpace1.ymax = +9; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.choice = 0;
nameSpace1.slx = nameSpace1.board.create('slider', [[2, 8], [4, 8], [0.1, 0.5, 1]]);
nameSpace1.sln = nameSpace1.board.create('slider', [[2, 7], [4, 7], [-6, 0, 0]], {snapWidth:1});
nameSpace1.a=nameSpace1.slx.Value() * Math.pow(10, nameSpace1.sln.Value());

nameSpace1.slx.on('move',function(){nameSpace1.Paint();} );
nameSpace1.sln.on('move',function(){nameSpace1.Paint();} );


nameSpace1.txt1 = function ()
{
    return "x=" + nameSpace1.slx.Value() * Math.pow(10, nameSpace1.sln.Value());
}

nameSpace1.txt2 = function ()
{
    var x = nameSpace1.slx.Value() * Math.pow(10, nameSpace1.sln.Value());
 /*   
    switch (nameSpace1.choice)
    {
        case 0:
            return "I(f,1,x)=" + (-Math.log(x));
        case 1:
            return "I(f,1,x)=" + (2 * Math.sqrt(x) - 2);
    }
*/
return "";
}
nameSpace1.f = function (x)
{
    switch (nameSpace1.choice)
    {
        case 0:
            return 1 / x;
        case 1:
            return 1 / Math.sqrt(x);
    }
}

nameSpace1.choicef = function ()
{
    nameSpace1.choice = (nameSpace1.choice + 1) % 2;
    nameSpace1.Paint();
}



nameSpace1.Paint = function ()
{
    nameSpace1.board.removeObject(nameSpace1.integral);
    nameSpace1.board.removeObject(nameSpace1.graph);
    nameSpace1.board.removeObject(nameSpace1.texte1);
    nameSpace1.board.removeObject(nameSpace1.texte2);
    nameSpace1.board.removeObject(nameSpace1.poly);
    nameSpace1.graph = nameSpace1.board.create('functiongraph', [nameSpace1.f, 0, nameSpace1.xmax], {strokeColor: 'green'});
    nameSpace1.a=nameSpace1.slx.Value() * Math.pow(10, nameSpace1.sln.Value());
    // cheating to compensate strange behaviour of 'integral'
    if (nameSpace1.choice==1 && nameSpace1.a<0.05)
    {   var b=nameSpace1.a;
        nameSpace1.poly=nameSpace1.board.create('polygon',[[b,0],[b,8],[0.05,8],[0.05,b]],{withLines:false, fillColor:'red',fillOpacity: 0.2, vertices: {visible: false}});
        nameSpace1.a=0.05;
    }
    // end of cheating
    nameSpace1.integral = nameSpace1.board.create('integral', [[1,nameSpace1.a], nameSpace1.graph], {color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace1.texte1=nameSpace1.board.create('text', [5, 7, nameSpace1.txt1]);
    nameSpace1.texte2=nameSpace1.board.create('text', [5, 6, nameSpace1.txt2]);
    
}
nameSpace1.Paint();