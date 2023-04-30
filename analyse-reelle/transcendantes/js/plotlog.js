var nameSpace1={};
nameSpace1.xmin=-1; // adjust as needed
nameSpace1.xmax=+9; // adjust as needed
nameSpace1.ymin=-3; // adjust according max value of f
nameSpace1.ymax=+7; // adjust according min value of f
nameSpace1.board= JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin,nameSpace1.ymax, nameSpace1.xmax,nameSpace1.ymin], axis: true});
nameSpace1.slx=nameSpace1.board.create('slider',[[1,6], [3,6],[0.1,2,8]], {snapWidth:0.1})

nameSpace1.f = function (x)
{
    return 1/x;
}

nameSpace1.g = function (x)
{
    return Math.log(x);
}
nameSpace1.Paint=function()
{   nameSpace1.board.suspendUpdate();
    nameSpace1.graph1=nameSpace1.board.create('functiongraph', [nameSpace1.f,0,nameSpace1.xmax],{strokeColor:'green'});
    nameSpace1.integral = nameSpace1.board.create('integral', [[1,function () {return nameSpace1.slx.Value();}], nameSpace1.graph1], {color: 'red', fillOpacity: 0.2, curveRight: {visible: false}, curveLeft: {visible: false}});
    nameSpace1.graph2=nameSpace1.board.create('functiongraph', [nameSpace1.g,0,nameSpace1.xmax],{strokeColor:'blue'});
    nameSpace1.board.create('text',[4,6, function(){return "x="+nameSpace1.slx.Value().toFixed(2);}]);
    
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();