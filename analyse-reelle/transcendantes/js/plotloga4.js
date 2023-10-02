var nameSpace4={};
nameSpace4.xmin=-5; // adjust as needed
nameSpace4.xmax=+5; // adjust as needed
nameSpace4.ymin=-1; // adjust according max value of f
nameSpace4.ymax=+9; // adjust according min value of f
nameSpace4.board= JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin,nameSpace4.ymax, nameSpace4.xmax,nameSpace4.ymin], axis: true});
nameSpace4.sla=nameSpace4.board.create('slider',[[1,1], [3,1],[0.01,0.5,0.99]], {snapWidth:0.01})

nameSpace4.f = function (x)
{
    return Math.exp(x*Math.log(nameSpace4.sla.Value()));
}

nameSpace4.g = function (x)
{
    return Math.exp(x);
}
nameSpace4.Paint=function()
{   nameSpace4.board.suspendUpdate();
    nameSpace4.graph1=nameSpace4.board.create('functiongraph', [nameSpace4.f,nameSpace4.xmin,nameSpace4.xmax],{strokeColor:'green'});
    
    nameSpace4.graph2=nameSpace4.board.create('functiongraph', [nameSpace4.g,nameSpace4.xmin,nameSpace4.xmax],{strokeColor:'blue'});
    nameSpace4.board.create('text',[4,1, function(){return "a="+nameSpace4.sla.Value().toFixed(2);}]);
    
    nameSpace4.board.unsuspendUpdate();
}
nameSpace4.Paint();