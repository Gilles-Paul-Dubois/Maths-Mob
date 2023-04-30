var nameSpace1 = {};
nameSpace1.xmin = -10; // adjust as needed
nameSpace1.xmax = +10; // adjust as needed
nameSpace1.ymin = -10; // adjust according max value of f
nameSpace1.ymax = +10; // adjust according min value of f
nameSpace1.choice1 = 1;
nameSpace1.choice2 = 1;
nameSpace1.rad1=document.getElementsByName('choixf');
nameSpace1.rad2=document.getElementsByName('choixg');

nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.f = function (x)
{
    switch (nameSpace1.choice1)
    {
        case 1:
            return x * Math.sin(x);
        case 2:
            return x * x / 10;
        case 3:
            return x;
    }

}

nameSpace1.g = function (x)
{
    switch (nameSpace1.choice2)
    {
        case 1:
            return Math.cos(x);
        case 2:
            return x * x / 10 + 1;
        case 3:
            return 2 * x;
    }

}
nameSpace1.h = function(x)
{
    return nameSpace1.f(x)+nameSpace1.g(x);
}

nameSpace1.handleClick1 = function (radio) {

    nameSpace1.choice1 = parseInt(radio.value);
    nameSpace1.Paint();
}
nameSpace1.handleClick2 = function (radio) {

    nameSpace1.choice2 = parseInt(radio.value);
    nameSpace1.Paint();
}

nameSpace1.Paint = function ()
{
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.create('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.create('functiongraph', [nameSpace1.g, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace1.board.create('functiongraph', [nameSpace1.h, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace1.rad1.value=nameSpace1.choice1.toString();
    nameSpace1.board.unsuspendUpdate();
}
nameSpace1.Paint();