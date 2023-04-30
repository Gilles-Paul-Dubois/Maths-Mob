var nameSpace1 = {};
nameSpace1.xmin = -1; // adjust as needed
nameSpace1.xmax = +60; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +32; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.A = 5;
nameSpace1.range1 = document.getElementById("myRange1");
nameSpace1.range1.value = 5;
nameSpace1.zonetexte1=document.getElementById('MyText1');
nameSpace1.zonetexte1.style.width="100px";
nameSpace1.f = function (x)
{
    return 0.5 * x + Math.sin(x);
}
nameSpace1.g = function (y)
{
    return 2 * y + Math.PI;
}

nameSpace1.drawvert = function (x)
{
    var p1 = nameSpace1.board.create('point', [x, 0], {visible: false});
    var p2 = nameSpace1.board.create('point', [x, 5], {visible: false});
    var vl = nameSpace1.board.create('line', [p1, p2], {color: 'blue'});

}
nameSpace1.changer = function (val)
{
    nameSpace1.A = parseFloat(val);
    nameSpace1.Paint();
}
nameSpace1.Paint = function ()
{
    nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: '#32CD32', strokeWidth: '4px'});
    nameSpace1.board.createElement('functiongraph', [function (x) {
            return nameSpace1.A
        }, nameSpace1.xmin, nameSpace1.xmax], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace1.drawvert(nameSpace1.g(nameSpace1.A));
    nameSpace1.width="100";
    nameSpace1.zonetexte1.value="X="+nameSpace1.g(nameSpace1.A);
    
}
nameSpace1.Paint();