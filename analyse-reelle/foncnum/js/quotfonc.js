var nameSpace3 = {};
nameSpace3.xmin = -10; // adjust as needed
nameSpace3.xmax = +10; // adjust as needed
nameSpace3.ymin = -10; // adjust according max value of f
nameSpace3.ymax = +10; // adjust according min value of f
nameSpace3.choice1 = 1;
nameSpace3.choice2 = 1;
nameSpace3.rad1=document.getElementsByName('choixf3');
nameSpace3.rad2=document.getElementsByName('choixg3');

nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.f = function (x)
{
    switch (nameSpace3.choice1)
    {
        case 1:
            return x * Math.sin(x);
        case 2:
            return x * x / 10;
        case 3:
            return x;
    }

}

nameSpace3.g = function (x)
{
    switch (nameSpace3.choice2)
    {
        case 1:
            return 2+Math.cos(x);
        case 2:
            return x * x / 10 + 1;
        case 3:
            return 2 * Math.abs(x)+1;
    }

}
nameSpace3.h = function(x)
{
    return nameSpace3.f(x)/nameSpace3.g(x);
}

nameSpace3.handleClick1 = function (radio) {

    nameSpace3.choice1 = parseInt(radio.value);
    nameSpace3.Paint();
}
nameSpace3.handleClick2 = function (radio) {

    nameSpace3.choice2 = parseInt(radio.value);
    nameSpace3.Paint();
}

nameSpace3.Paint = function ()
{
    nameSpace3.board.suspendUpdate();
    nameSpace3.board.create('functiongraph', [nameSpace3.f, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace3.board.create('functiongraph', [nameSpace3.g, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace3.board.create('functiongraph', [nameSpace3.h, nameSpace3.xmin, nameSpace3.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace3.rad1.value=nameSpace3.choice1.toString();
    nameSpace3.board.unsuspendUpdate();
}
nameSpace3.Paint();