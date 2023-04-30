var nameSpace4 = {};
nameSpace4.xmin = -1; // adjust as needed
nameSpace4.xmax = +9; // adjust as needed
nameSpace4.ymin = -5; // adjust according max value of f
nameSpace4.ymax = +5; // adjust according min value of f
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.slx=nameSpace4.board.create('slider',[[1,-1],[3,-1],[3,4,6]]);
nameSpace4.slh=nameSpace4.board.create('slider',[[1,-2],[3,-2],[-1,0.5,1]]);

nameSpace4.txt1=function()
{
    return "x="+nameSpace4.slx.Value().toFixed(2);
}

nameSpace4.txt2=function()
{
    return "h="+nameSpace4.slh.Value().toFixed(2);
}

nameSpace4.txt3=function()
{
    return "f(x)="+nameSpace4.f(nameSpace4.slx.Value()).toFixed(2);
}

nameSpace4.txt4=function()
{
    return "&delta;F=F(x+h)-F(x)="+nameSpace4.int2.Value().toFixed(2);
}


nameSpace4.txt5=function()
{
    return "&delta;F/h="+(nameSpace4.int2.Value()/nameSpace4.slh.Value()).toFixed(2);
}
nameSpace4.f = function (x)
{
 return 4/x;
}

nameSpace4.x=function()
{
    return nameSpace4.slx.Value();
}

nameSpace4.xplush = function()
{
    return nameSpace4.slx.Value()+nameSpace4.slh.Value();
}
nameSpace4.Paint = function ()
{

    nameSpace4.graph = nameSpace4.board.create('functiongraph', [nameSpace4.f, 1, 8], {strokeColor: 'green'});
    nameSpace4.int1 = nameSpace4.board.create('integral', [[1,nameSpace4.x ], nameSpace4.graph], {withLabel: false, color: 'purple', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}, baseRight:{visible:false, name:'x', withLabel:true}});
    nameSpace4.int2=nameSpace4.board.create('integral',[[nameSpace4.x,nameSpace4.xplush],nameSpace4.graph],{withLabel: false, curveLeft: {visible: false}});
    nameSpace4.board.create('text',[4,-1,nameSpace4.txt1]);
    nameSpace4.board.create('text',[6,-4,nameSpace4.txt3],{color:'red'});
    nameSpace4.board.create('text',[4,-2,nameSpace4.txt2]);
    nameSpace4.board.create('text',[4,-3,nameSpace4.txt4]);
    nameSpace4.board.create('text',[4,-4,nameSpace4.txt5],{color:'red'});
}
nameSpace4.Paint();