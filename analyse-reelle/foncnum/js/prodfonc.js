var nameSpace2 = {};
nameSpace2.xmin = -10; // adjust as needed
nameSpace2.xmax = +10; // adjust as needed
nameSpace2.ymin = -10; // adjust according max value of f
nameSpace2.ymax = +10; // adjust according min value of f
nameSpace2.choice1 = 1;
nameSpace2.choice2 = 1;
nameSpace2.rad1=document.getElementsByName('choixf2');
nameSpace2.rad2=document.getElementsByName('choixg2');

nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});
nameSpace2.f = function (x)
{
    switch (nameSpace2.choice1)
    {
        case 1:
            return x * Math.sin(x);
        case 2:
            return x * x / 10;
        case 3:
            return x;
    }

}

nameSpace2.g = function (x)
{
    switch (nameSpace2.choice2)
    {
        case 1:
            return Math.cos(x);
        case 2:
            return x * x / 10 + 1;
        case 3:
            return 2 * x;
    }

}
nameSpace2.h = function(x)
{
    return nameSpace2.f(x)*nameSpace2.g(x);
}

nameSpace2.handleClick1 = function (radio) {

    nameSpace2.choice1 = parseInt(radio.value);
    nameSpace2.Paint();
}
nameSpace2.handleClick2 = function (radio) {

    nameSpace2.choice2 = parseInt(radio.value);
    nameSpace2.Paint();
}

nameSpace2.Paint = function ()
{
    nameSpace2.board.suspendUpdate();
    nameSpace2.board.create('functiongraph', [nameSpace2.f, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace2.board.create('functiongraph', [nameSpace2.g, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'blue', strokeWidth: '4px'});
    nameSpace2.board.create('functiongraph', [nameSpace2.h, nameSpace2.xmin, nameSpace2.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace2.rad1.value=nameSpace2.choice1.toString();
    nameSpace2.board.unsuspendUpdate();
}
nameSpace2.Paint();