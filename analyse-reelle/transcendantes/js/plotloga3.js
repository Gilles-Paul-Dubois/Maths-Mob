var nameSpace3={};
nameSpace3.xmin=-5; // adjust as needed
nameSpace3.xmax=+5; // adjust as needed
nameSpace3.ymin=-1; // adjust according max value of f
nameSpace3.ymax=+9; // adjust according min value of f
nameSpace3.board= JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin,nameSpace3.ymax, nameSpace3.xmax,nameSpace3.ymin], axis: true});
nameSpace3.sla=nameSpace3.board.create('slider',[[-4,8], [-2,8],[1,2,10]], {snapWidth:0.1})

nameSpace3.f = function (x)
{
    return Math.exp(x*Math.log(nameSpace3.sla.Value()));
}

nameSpace3.g = function (x)
{
    return Math.exp(x);
}
nameSpace3.Paint=function()
{   nameSpace3.board.suspendUpdate();
    nameSpace3.graph1=nameSpace3.board.create('functiongraph', [nameSpace3.f,nameSpace3.xmin,nameSpace3.xmax],{strokeColor:'green'});
    
    nameSpace3.graph2=nameSpace3.board.create('functiongraph', [nameSpace3.g,nameSpace3.xmin,nameSpace3.xmax],{strokeColor:'blue'});
    nameSpace3.board.create('text',[-1,8, function(){return "a="+nameSpace3.sla.Value().toFixed(2);}]);
    
    nameSpace3.board.unsuspendUpdate();
}
nameSpace3.Paint();