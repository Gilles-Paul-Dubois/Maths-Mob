var nameSpace4 = {};
nameSpace4.xmin = -1;
nameSpace4.xmax = 1;
nameSpace4.ymin = -1;
nameSpace4.ymax = 1;
nameSpace4.zonetexte1 = document.getElementById("text41");
nameSpace4.zonetexte2 = document.getElementById("text42");
nameSpace4.zonetexte3 = document.getElementById("text43");

nameSpace4.create = function ()
{
    nameSpace4.zonetexte1.value = "";
    nameSpace4.zonetexte2.value = "";
    nameSpace4.zonetexte3.value = "";
    nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false, showNavigation: false});
    nameSpace4.O = nameSpace4.board.create('point', [0, 0], {visible: true, name: 'O', size: 1, color: 'blue', fixed: true});
    nameSpace4.R = nameSpace4.board.create('circle', [nameSpace4.O, 1], {color: 'red', opacity: 0.4});
    nameSpace4.M = [];
    nameSpace4.slR1 = nameSpace4.board.create('slider', [[-1, 0.9], [-0.75, 0.9], [0, 0.2, 0.5]]);
    nameSpace4.slR2 = nameSpace4.board.create('slider', [[-1, 0.75], [-0.75, 0.75], [0.5, 0.7, 1]]);
    nameSpace4.slT1 = nameSpace4.board.create('slider', [[0.7, 0.9], [0.95, 0.9], [0, 2, Math.PI]]);
    nameSpace4.slT2 = nameSpace4.board.create('slider', [[0.7, 0.75], [0.95, 0.75], [Math.PI, 5, 2 * Math.PI]]);
    nameSpace4.Total = 0;
    nameSpace4.PR = 0;
    nameSpace4.PT = 0;
    nameSpace4.PTR = 0;
    nameSpace4.zonetexte1.style.width = "300px";
    nameSpace4.zonetexte2.style.width = "300px";
    nameSpace4.zonetexte3.style.width = "300px";
    function R(n)
    {
        if (n == 1)
            return nameSpace4.slR1.Value();
        else
            return nameSpace4.slR2.Value();
    }
    function theta(n)
    {
        if(n==1)
        return nameSpace4.slT1.Value();
    else
        return nameSpace4.slT2.Value();
    }
    function c(n)
    {
       return Math.cos(theta(n));
    }
    
    function s(n)
    {
        return Math.sin(theta(n))
    }
    nameSpace4.A=nameSpace4.board.create('point', [function () {return R(1)*c(1);},function(){return R(1)*s(1);}], {size:1, color:'blue', withLabel:false});
    nameSpace4.B=nameSpace4.board.create('point', [function () {return R(2)*c(1);},function(){return R(2)*s(1);}], {size:1, color:'blue', withLabel:false});
    nameSpace4.C=nameSpace4.board.create('point', [function () {return R(1)*c(2);},function(){return R(1)*s(2);}], {size:1, color:'blue', withLabel:false});
    nameSpace4.D=nameSpace4.board.create('point', [function () {return R(2)*c(2);},function(){return R(2)*s(2);}], {size:1, color:'blue', withLabel:false});
    nameSpace4.board.create('segment',[nameSpace4.A, nameSpace4.B]);
    nameSpace4.board.create('segment',[nameSpace4.C, nameSpace4.D]);
    nameSpace4.board.create('arc',[nameSpace4.O, nameSpace4.A, nameSpace4.C]);
    nameSpace4.board.create('arc',[nameSpace4.O, nameSpace4.B, nameSpace4.D]);
    
  
}

nameSpace4.create();

nameSpace4.txr1 = function ()
{
    return "a=" + nameSpace4.slR1.Value().toFixed(2);
}
nameSpace4.board.create('text', [-1, -0.85, nameSpace4.txr1]);

nameSpace4.txr2 = function ()
{
    return "b=" + nameSpace4.slR2.Value().toFixed(2);
}
nameSpace4.board.create('text', [-1, -0.9, nameSpace4.txr2]);

nameSpace4.txt1 = function ()
{
    return "s=" + nameSpace4.slT1.Value().toFixed(2);
}
nameSpace4.board.create('text', [0.75, -0.85, nameSpace4.txt1]);

nameSpace4.txt2 = function ()
{
    return "t=" + nameSpace4.slT2.Value().toFixed(2);
}
nameSpace4.board.create('text', [0.75, -0.9, nameSpace4.txt2]);

nameSpace4.plus100 = function ()
{
    var i;
    var X, Y, alpha, R;
    for (i = 0; i < 100; i++)
    {
        alpha = Math.random() * Math.PI * 2;
        R = Math.random();
        X = Math.sqrt(R) * Math.cos(alpha);
        Y = Math.sqrt(R) * Math.sin(alpha);
        nameSpace4.M[i] = nameSpace4.board.create('point', [X, Y], {withLabel: false, size: 1});
        nameSpace4.Total++;
        if ((Math.sqrt(R) > nameSpace4.slR1.Value()) && (Math.sqrt(R) < nameSpace4.slR2.Value()))
            nameSpace4.PR++;
        if ((alpha > nameSpace4.slT1.Value()) && (alpha < nameSpace4.slT2.Value()))
            nameSpace4.PT++;
        if (((Math.sqrt(R) > nameSpace4.slR1.Value()) && (Math.sqrt(R) < nameSpace4.slR2.Value())) && ((alpha > nameSpace4.slT1.Value()) && (alpha < nameSpace4.slT2.Value())))
            nameSpace4.PTR++;
    }
    var T1 = "P(a<R<b)=" + (nameSpace4.PR / nameSpace4.Total).toFixed(2);
    var T2 = "P(s<theta<t)=" + (nameSpace4.PT / nameSpace4.Total).toFixed(2);
       if(document.body.className.substring(0,2)=="fr")  
   { var T3 = "P((a<R<b) et (s<theta<t))=" + (nameSpace4.PTR / nameSpace4.Total).toFixed(2);}
else
{ var T3 = "P((a<R<b) and (s<theta<t))=" + (nameSpace4.PTR / nameSpace4.Total).toFixed(2);}
    var T4 = "P(a<R<b)xP(s<theta<t)=" + ((nameSpace4.PR / nameSpace4.Total) * (nameSpace4.PT / nameSpace4.Total)).toFixed(2);
    nameSpace4.zonetexte1.value = T1 + " " + T2;
    nameSpace4.zonetexte2.value = T3;
    nameSpace4.zonetexte3.value = T4;
}

nameSpace4.restart = function ()
{

    nameSpace4.board = JXG.JSXGraph.freeBoard(nameSpace4.board);
    nameSpace4.create();
}

