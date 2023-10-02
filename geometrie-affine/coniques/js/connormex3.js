var nameSpace5 = {};
nameSpace5.xmin = -10;
nameSpace5.xmax = 10;
nameSpace5.ymin = -1;
nameSpace5.ymax = 19;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: true});
nameSpace5.slp = nameSpace5.board.create('slider', [[-9, 18], [-5, 18], [1, 3, 5]], {snapWidth: 0.1});
nameSpace5.O=nameSpace5.board.create('point', [0,0], {visible:false});
nameSpace5.F = nameSpace5.board.create('point', [0, function () {
        return nameSpace5.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F1', visible: true});
nameSpace5.OF=nameSpace5.board.create('line',[nameSpace5.O, nameSpace5.F], {visible:false});
nameSpace5.A = nameSpace5.board.create('point', [-1, function () {
        return -nameSpace5.slp.Value()/2;
    }], {visible: false});
nameSpace5.B = nameSpace5.board.create('point', [+1, function () {
        return -nameSpace5.slp.Value()/2;
    }], {visible: false});
nameSpace5.D = nameSpace5.board.create('line', [nameSpace5.A, nameSpace5.B], {visible: false});

nameSpace5.P = nameSpace5.board.create('parabola', [nameSpace5.F, nameSpace5.D]);
nameSpace5.M=nameSpace5.board.create('glider', [7.4,8.16,nameSpace5.P], {size:1, name:'M'});
nameSpace5.T=nameSpace5.board.create('tangent',[nameSpace5.M], {color:'green'});
nameSpace5.N=nameSpace5.board.create('normal',[nameSpace5.P, nameSpace5.M], {color:'black'});
nameSpace5.M1x=function()
{
    var p=nameSpace5.slp.Value();
    var X=nameSpace5.M.X();
    var Y=nameSpace5.M.Y();
    return -(2*p*(p+Y))/X;
}

nameSpace5.M1y=function()
{
    var x=nameSpace5.M1x();
    var p=nameSpace5.slp.Value();
    return (x*x)/(2*p);
}

nameSpace5.M1=nameSpace5.board.create('point',[nameSpace5.M1x, nameSpace5.M1y], {size:1, color:'blue', name:'N'});
nameSpace5.G=nameSpace5.board.create('intersection',[nameSpace5.OF, nameSpace5.N], {size:1,name:'G',visible:false});
nameSpace5.H=nameSpace5.board.create('point',[function(){return nameSpace5.M.X();}, 19], {name:'H',size:1, visible: false});

nameSpace5.Xx=function()
{
    var p=nameSpace5.slp.Value();
    var alpha= Math.sqrt(2)*p;
    return alpha;
}

nameSpace5.Xy=function()
{
    var p=nameSpace5.slp.Value();
    var alpha= Math.sqrt(2)*p;
    return (alpha*alpha)/(2*p);
}
nameSpace5.X =nameSpace5.board.create('point', [nameSpace5.Xx,nameSpace5.Xy], {name:'X', size:1, color:'blue'});

nameSpace5.Yx=function()
{
    var p=nameSpace5.slp.Value();
    var X=nameSpace5.X.X();
    var Y=nameSpace5.X.Y();
    return -(2*p*(p+Y))/X;
}

nameSpace5.Yy=function()
{
    var x=nameSpace5.Yx();
    var p=nameSpace5.slp.Value();
    return (x*x)/(2*p);
}
nameSpace5.Y =nameSpace5.board.create('point', [nameSpace5.Yx,nameSpace5.Yy], {name:'Y', size:1, color:'blue'});

nameSpace5.XY=nameSpace5.board.create('segment', [nameSpace5.X, nameSpace5.Y], {color:'red'});

nameSpace5.MY=nameSpace5.board.create('segment', [nameSpace5.M, nameSpace5.Y], {color:'black'});
nameSpace5.NX=nameSpace5.board.create('segment', [nameSpace5.M1, nameSpace5.X], {color:'black'});
nameSpace5.MN=nameSpace5.board.create('segment', [nameSpace5.M, nameSpace5.M1], {visible:false});

nameSpace5.K=nameSpace5.board.create('circle',[nameSpace5.Y, nameSpace5.X],{strokeColor:'black'});
nameSpace5.txt1 = function ()
{
    return "p=" + nameSpace5.slp.Value().toFixed(2);
}
nameSpace5.board.create('text', [1, 18, nameSpace5.txt1]);

nameSpace5.txt2 = function ()
{
    return "MN=" + nameSpace5.MN.L().toFixed(2);
}
nameSpace5.board.create('text', [-9, 1, nameSpace5.txt2]);


