var nameSpace2={};
nameSpace2.xmin=-1; // adjust as needed
nameSpace2.xmax=+9; // adjust as needed
nameSpace2.ymin=-3; // adjust according max value of f
nameSpace2.ymax=+7; // adjust according min value of f
nameSpace2.board= JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin,nameSpace2.ymax, nameSpace2.xmax,nameSpace2.ymin], axis: true});
nameSpace2.sla=nameSpace2.board.create('slider',[[1,6], [3,6],[0.01,0.5,0.99]], {snapWidth:0.01})

nameSpace2.f = function (x)
{
    return Math.log(x)/Math.log(nameSpace2.sla.Value());
}

nameSpace2.g = function (x)
{
    return Math.log(x);
}
nameSpace2.Paint=function()
{   nameSpace2.board.suspendUpdate();
    nameSpace2.graph1=nameSpace2.board.create('functiongraph', [nameSpace2.f,0,nameSpace2.xmax],{strokeColor:'green'});
    
    nameSpace2.graph2=nameSpace2.board.create('functiongraph', [nameSpace2.g,0,nameSpace2.xmax],{strokeColor:'blue'});
    nameSpace2.board.create('text',[4,6, function(){return "a="+nameSpace2.sla.Value().toFixed(2);}]);
    
    nameSpace2.board.unsuspendUpdate();
}
nameSpace2.Paint();