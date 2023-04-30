var nameSpace4 = {};
nameSpace4.xmin = -10; // adjust as needed
nameSpace4.xmax = +10; // adjust as needed
nameSpace4.ymin = -10; // adjust according max value of f
nameSpace4.ymax = +10; // adjust according min value of f
nameSpace4.choice1 = 1;
nameSpace4.rad1=document.getElementsByName('choixf4');
nameSpace4.lambda=1.5;
nameSpace4.range4 = document.getElementById("myRange4");
nameSpace4.range4.value = 1.5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.f = function (x)
{
    switch (nameSpace4.choice1)
    {
        case 1:
            return x * Math.sin(x);
        case 2:
            return x * x / 10;
        case 3:
            return x;
    }

}


nameSpace4.h = function(x)
{
    return nameSpace4.f(x)*nameSpace4.lambda;
}

nameSpace4.handleClick1 = function (radio) {

    nameSpace4.choice1 = parseInt(radio.value);
    nameSpace4.Paint();
}
nameSpace4.changer=function(val)
{
  nameSpace4.lambda=parseFloat(val);
  nameSpace4.Paint();
}

nameSpace4.Paint = function ()
{
    nameSpace4.board.suspendUpdate();
    nameSpace4.board.create('functiongraph', [nameSpace4.f, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    
    nameSpace4.board.create('functiongraph', [nameSpace4.h, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'red', strokeWidth: '4px'});
     nameSpace4.board.unsuspendUpdate();
}
nameSpace4.Paint();