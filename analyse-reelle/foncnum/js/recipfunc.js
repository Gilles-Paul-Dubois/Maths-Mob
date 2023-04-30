var nameSpace4 = {};
nameSpace4.xmin = -10; // adjust as needed
nameSpace4.xmax = +10; // adjust as needed
nameSpace4.ymin = -10; // adjust according max value of f
nameSpace4.ymax = +10; // adjust according min value of f
nameSpace4.choice1 = 1;
nameSpace4.rad1 = document.getElementsByName('choixf4');

nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true});
nameSpace4.f = function (x)
{
    switch (nameSpace4.choice1)
    {
        case 1:
            return 2 * x + 2;
        case 2:
            return x * x * x + 1;
        case 3:
            return Math.tan(x/7);
    }

}

nameSpace4.g = function (x)
{
    switch (nameSpace4.choice1)
    {
        case 1:
            return 0.5 * x - 1;
        case 2:
            if (x > 1)
                return Math.pow(x - 1, 1 / 3);
            else
                return -Math.pow(1-x, 1 / 3);
        case 3:
            return Math.atan(x)*7;
    }

}


nameSpace4.handleClick1 = function (radio) {

    nameSpace4.choice1 = parseInt(radio.value);
    nameSpace4.Paint();
}


nameSpace4.Paint = function ()
{
    nameSpace4.board.suspendUpdate();
      p0=nameSpace4.board.create('point',[0,0],{visible:false});
      p1=nameSpace4.board.create('point',[1,1],{visible:false});
      D=nameSpace4.board.create('line',[p0,p1], {strokeSize:1,strokeColor:'blue'});
    nameSpace4.board.create('functiongraph', [nameSpace4.f, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'green', strokeWidth: '4px'});

    nameSpace4.board.create('functiongraph', [nameSpace4.g, nameSpace4.xmin, nameSpace4.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace4.board.unsuspendUpdate();
}
nameSpace4.Paint();