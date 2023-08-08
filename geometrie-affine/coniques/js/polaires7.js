var nameSpace7 = {};
nameSpace7.xmin = -10;
nameSpace7.xmax = 10;
nameSpace7.ymin = -1;
nameSpace7.ymax = 19;
nameSpace7.board = JXG.JSXGraph.initBoard('box7', {boundingbox: [nameSpace7.xmin, nameSpace7.ymax, nameSpace7.xmax, nameSpace7.ymin], axis: true});
nameSpace7.slp = nameSpace7.board.create('slider', [[-9, 18], [-5, 18], [0.1, 2.3, 4]], {snapWidth: 0.1});
nameSpace7.M1=nameSpace7.board.create('point',[-3.11,1.42],{size:1, name:"M<sub>1</sub>"});
nameSpace7.F = nameSpace7.board.create('point', [0, function () {
        return nameSpace7.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace7.A = nameSpace7.board.create('point', [-1, function () {
        return -nameSpace7.slp.Value()/2;
    }], {visible: false});
nameSpace7.B = nameSpace7.board.create('point', [+1, function () {
        return -nameSpace7.slp.Value()/2;
    }], {visible: false});
nameSpace7.D = nameSpace7.board.create('line', [nameSpace7.A, nameSpace7.B], {visible: false});
nameSpace7.P = nameSpace7.board.create('parabola', [nameSpace7.F, nameSpace7.D]);

nameSpace7.txt1 = function ()
{
    return "p=" + nameSpace7.slp.Value().toFixed(2);
}
nameSpace7.board.create('text', [1, 18, nameSpace7.txt1]);

nameSpace7.B1y=function()
{
       var p = nameSpace7.slp.Value();
       var y1=nameSpace7.M1.Y();
       return -y1;
}
nameSpace7.B1=nameSpace7.board.create('point',[0,nameSpace7.B1y], {visible:false});

nameSpace7.B2x=function()
{
       var p = nameSpace7.slp.Value();
       var y1=nameSpace7.M1.Y();
       var x1=nameSpace7.M1.X();
       return p*y1/x1;
}
nameSpace7.B2=nameSpace7.board.create('point',[nameSpace7.B2x,0], {visible:false});

nameSpace7.Q=nameSpace7.board.create('line',[nameSpace7.B1, nameSpace7.B2], {color:'red'});

nameSpace7.I0=nameSpace7.board.create('intersection', [nameSpace7.P, nameSpace7.Q,0], {size:1, name:'', color:'blue'});
nameSpace7.I1=nameSpace7.board.create('intersection', [nameSpace7.P, nameSpace7.Q,1], {size:1, name:'', color:'blue'});
nameSpace7.board.create('line',[nameSpace7.M1, nameSpace7.I0], {color:'brown'});
nameSpace7.board.create('line',[nameSpace7.M1, nameSpace7.I1], {color:'brown'});