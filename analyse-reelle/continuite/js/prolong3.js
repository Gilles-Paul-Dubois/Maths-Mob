var nameSpace3={};
nameSpace3.xmin=-16; // adjust as needed
nameSpace3.xmax=+16; // adjust as needed
nameSpace3.ymin=-2; // adjust according max value of f
nameSpace3.ymax=+2; // adjust according min value of f
nameSpace3.n=0;

nameSpace3.f = function (x)
{
    return Math.sin(1/x);
}

nameSpace3.zoomplus=function()
{ if (nameSpace3.n >=8)
        return;
    else
    {
        nameSpace3.n++;
        nameSpace3.xmin/=2;
        nameSpace3.xmax/=2;
        nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board); 
        nameSpace3.Paint();
    }
    
}
nameSpace3.zoomminus=function()
{ if (nameSpace3.n ==0)
        return;
    else
    {
        nameSpace3.n--;
        nameSpace3.xmin*=2;
        nameSpace3.xmax*=2;
        nameSpace3.board = JXG.JSXGraph.freeBoard(nameSpace3.board); 
        nameSpace3.Paint();
    }
    
}
nameSpace3.Paint=function()
{   
    nameSpace3.board= JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin,nameSpace3.ymax, nameSpace3.xmax,nameSpace3.ymin], axis: true});
    nameSpace3.board.createElement('functiongraph', [nameSpace3.f,nameSpace3.xmin,nameSpace3.xmax],{strokeColor:'#32CD32', strokeWidth:'4px'});
    
}
nameSpace3.Paint();