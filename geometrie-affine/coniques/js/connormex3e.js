var nameSpace6 = {};
nameSpace6.xmin = -10;
nameSpace6.xmax = 10;
nameSpace6.ymin = -1;
nameSpace6.ymax = 19;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: true});
nameSpace6.slp = nameSpace6.board.create('slider', [[-9, 18], [-5, 18], [1, 3, 5]], {snapWidth: 0.1});
nameSpace6.O=nameSpace6.board.create('point', [0,0], {visible:false});
nameSpace6.F = nameSpace6.board.create('point', [0, function () {
        return nameSpace6.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F1', visible: true});
nameSpace6.OF=nameSpace6.board.create('line',[nameSpace6.O, nameSpace6.F], {visible:false});
nameSpace6.A = nameSpace6.board.create('point', [-1, function () {
        return -nameSpace6.slp.Value()/2;
    }], {visible: false});
nameSpace6.B = nameSpace6.board.create('point', [+1, function () {
        return -nameSpace6.slp.Value()/2;
    }], {visible: false});
nameSpace6.D = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.B], {visible: false});

nameSpace6.P = nameSpace6.board.create('parabola', [nameSpace6.F, nameSpace6.D]);
nameSpace6.M=nameSpace6.board.create('glider', [7.4,8.16,nameSpace6.P], {size:1, name:'M'});
nameSpace6.T=nameSpace6.board.create('tangent',[nameSpace6.M], {color:'green'});
nameSpace6.N=nameSpace6.board.create('normal',[nameSpace6.P, nameSpace6.M], {color:'black'});
nameSpace6.M1x=function()
{
    var p=nameSpace6.slp.Value();
    var X=nameSpace6.M.X();
    var Y=nameSpace6.M.Y();
    return -(2*p*(p+Y))/X;
}

nameSpace6.M1y=function()
{
    var x=nameSpace6.M1x();
    var p=nameSpace6.slp.Value();
    return (x*x)/(2*p);
}

nameSpace6.M1=nameSpace6.board.create('point',[nameSpace6.M1x, nameSpace6.M1y], {size:1, color:'blue', name:'N'});
nameSpace6.G=nameSpace6.board.create('intersection',[nameSpace6.OF, nameSpace6.N], {size:1,name:'G',visible:false});
nameSpace6.H=nameSpace6.board.create('point',[function(){return nameSpace6.M.X();}, 19], {name:'H',size:1, visible: false});

nameSpace6.Xx=function()
{
    var p=nameSpace6.slp.Value();
    var alpha= Math.sqrt(2)*p;
    return alpha;
}

nameSpace6.Xy=function()
{
    var p=nameSpace6.slp.Value();
    var alpha= Math.sqrt(2)*p;
    return (alpha*alpha)/(2*p);
}
nameSpace6.X =nameSpace6.board.create('point', [nameSpace6.Xx,nameSpace6.Xy], {name:'X', size:1, color:'blue'});

nameSpace6.Yx=function()
{
    var p=nameSpace6.slp.Value();
    var X=nameSpace6.X.X();
    var Y=nameSpace6.X.Y();
    return -(2*p*(p+Y))/X;
}

nameSpace6.Yy=function()
{
    var x=nameSpace6.Yx();
    var p=nameSpace6.slp.Value();
    return (x*x)/(2*p);
}
nameSpace6.Y =nameSpace6.board.create('point', [nameSpace6.Yx,nameSpace6.Yy], {name:'Y', size:1, color:'blue'});

nameSpace6.XY=nameSpace6.board.create('segment', [nameSpace6.X, nameSpace6.Y], {color:'red'});

nameSpace6.MY=nameSpace6.board.create('segment', [nameSpace6.M, nameSpace6.Y], {color:'black'});
nameSpace6.NX=nameSpace6.board.create('segment', [nameSpace6.M1, nameSpace6.X], {color:'black'});
nameSpace6.MN=nameSpace6.board.create('segment', [nameSpace6.M, nameSpace6.M1], {visible:false});

nameSpace6.K=nameSpace6.board.create('circle',[nameSpace6.Y, nameSpace6.X],{strokeColor:'black'});
nameSpace6.txt1 = function ()
{
    return "p=" + nameSpace6.slp.Value().toFixed(2);
}
nameSpace6.board.create('text', [1, 18, nameSpace6.txt1]);

nameSpace6.txt2 = function ()
{
    return "MN=" + nameSpace6.MN.L().toFixed(2);
}
nameSpace6.board.create('text', [-9, 1, nameSpace6.txt2]);


