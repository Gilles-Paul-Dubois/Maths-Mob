var nameSpace2={};
nameSpace2.xmin=-16; // adjust as needed
nameSpace2.xmax=+16; // adjust as needed
nameSpace2.ymin=-2; // adjust according max value of f
nameSpace2.ymax=+2; // adjust according min value of f
nameSpace2.n=0;

nameSpace2.f = function (x)
{
    return Math.sin(x)/x;
}

nameSpace2.zoomplus=function()
{ if (nameSpace2.n >=4)
        return;
    else
    {
        nameSpace2.n++;
        nameSpace2.xmin/=2;
        nameSpace2.xmax/=2;
        nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board); 
        nameSpace2.Paint();
    }
    
}
nameSpace2.zoomminus=function()
{ if (nameSpace2.n ==0)
        return;
    else
    {
        nameSpace2.n--;
        nameSpace2.xmin*=2;
        nameSpace2.xmax*=2;
        nameSpace2.board = JXG.JSXGraph.freeBoard(nameSpace2.board); 
        nameSpace2.Paint();
    }
    
}
nameSpace2.Paint=function()
{   
    nameSpace2.board= JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin,nameSpace2.ymax, nameSpace2.xmax,nameSpace2.ymin], axis: true});
    nameSpace2.board.createElement('functiongraph', [nameSpace2.f,nameSpace2.xmin,nameSpace2.xmax],{strokeColor:'#32CD32', strokeWidth:'4px'});
    nameSpace2.board.create('point',[0,1], {size:1, withLabel:false, color: 'red'});
}
nameSpace2.Paint();