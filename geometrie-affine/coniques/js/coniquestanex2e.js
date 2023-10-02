var nameSpace5 = {};
nameSpace5.xmin = -5;
nameSpace5.xmax = 5;
nameSpace5.ymin = -5;
nameSpace5.ymax = 5;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.sla = nameSpace5.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace5.slb = nameSpace5.board.create('slider', [[-4, -4], [-2, -4], [1, 2, 4]], {snapWidth: 0.1, withLabel: false});

nameSpace5.O=nameSpace5.board.create('point',[0,0], {size:1, name:'O', color:'blue', fixed:true});

nameSpace5.A=nameSpace5.board.create('point',[function(){return nameSpace5.sla.Value();},0], {size:1, name:'A', color:'blue', fixed:true});
nameSpace5.B=nameSpace5.board.create('point',[function(){return -nameSpace5.sla.Value();},0], {size:1, name:'B', color:'blue', fixed:true});
nameSpace5.AB=nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B]);
nameSpace5.T1=nameSpace5.board.create('perpendicular',[nameSpace5.A, nameSpace5.AB], {name:'T<sub>1</sub>', withLabel:true});
nameSpace5.T2=nameSpace5.board.create('perpendicular',[nameSpace5.B, nameSpace5.AB], {name:'T<sub>2</sub>', withLabel:true});
nameSpace5.T3=nameSpace5.board.create('perpendicular',[nameSpace5.O, nameSpace5.AB], {name:'T<sub>2</sub>', withLabel:false});


nameSpace5.F1x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return c;
    else
        return 0;
}

nameSpace5.F1y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return c;
}

nameSpace5.F1 = nameSpace5.board.create('point', [nameSpace5.F1x, nameSpace5.F1y], {size: 1, color: 'red', name: 'F1', visible:false});

nameSpace5.F2x = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return -c;
    else
        return 0;
}

nameSpace5.F2y = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    var d = a * a - b * b;
    var c = Math.sqrt(Math.abs(d))
    if (a >= b)
        return 0;
    else
        return -c;
}

nameSpace5.F2 = nameSpace5.board.create('point', [nameSpace5.F2x, nameSpace5.F2y], {size: 1, color: 'blue', name: 'F', visible:true});
nameSpace5.grandAxe = function ()
{
    var a = nameSpace5.sla.Value();
    var b = nameSpace5.slb.Value();
    if (a >= b)
        return 2 * a;
    else
        return 2 * b;
}
nameSpace5.E = nameSpace5.board.create('ellipse', [nameSpace5.F1, nameSpace5.F2, nameSpace5.grandAxe]);
nameSpace5.M=nameSpace5.board.create('glider',[-1.5,2,nameSpace5.E], {size:1, name:'M'});
nameSpace5.T=nameSpace5.board.create('tangent',[nameSpace5.M],{color:'red'});

nameSpace5.P=nameSpace5.board.create('intersection', [nameSpace5.T2, nameSpace5.T],{size:1, color:'blue', name:'P'});
nameSpace5.Q=nameSpace5.board.create('intersection', [nameSpace5.T1, nameSpace5.T],{size:1, color:'blue', name:'Q'});
nameSpace5.C=nameSpace5.board.create('intersection', [nameSpace5.T3, nameSpace5.T],{size:1, color:'blue', name:'C'});

nameSpace5.FP=nameSpace5.board.create('segment',[nameSpace5.F2, nameSpace5.P]);
nameSpace5.FQ=nameSpace5.board.create('segment',[nameSpace5.F2, nameSpace5.Q]);
nameSpace5.FC=nameSpace5.board.create('segment',[nameSpace5.F2, nameSpace5.C]);

nameSpace5.K=nameSpace5.board.create('circle',[nameSpace5.C, nameSpace5.P], {strokeColor:'green'});

nameSpace5.txt1 = function ()
{
    return "a=" + nameSpace5.sla.Value().toFixed(2);
}
nameSpace5.board.create('text', [-1, -3.5, nameSpace5.txt1]);

nameSpace5.txt2 = function ()
{
    return "b=" + nameSpace5.slb.Value().toFixed(2);
}
nameSpace5.board.create('text', [-1, -4, nameSpace5.txt2]);