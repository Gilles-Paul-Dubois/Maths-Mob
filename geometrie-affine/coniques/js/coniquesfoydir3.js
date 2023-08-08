var nameSpace3 = {};
nameSpace3.xmin = -10;
nameSpace3.xmax = 10;
nameSpace3.ymin = -4;
nameSpace3.ymax = 16;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: true});
nameSpace3.slp = nameSpace3.board.create('slider', [[-9, 15], [-5, 15], [1, 2, 6]], {snapWidth: 0.1});

nameSpace3.F = nameSpace3.board.create('point', [0, function () {
        return nameSpace3.slp.Value()/2;
    }], {size: 1, color: 'red', name: 'F', visible: true});

nameSpace3.A = nameSpace3.board.create('point', [-1, function () {
        return -nameSpace3.slp.Value()/2;
    }], {visible: false});
nameSpace3.B = nameSpace3.board.create('point', [+1, function () {
        return -nameSpace3.slp.Value()/2;
    }], {visible: false});
nameSpace3.D = nameSpace3.board.create('line', [nameSpace3.A, nameSpace3.B], {visible: true, color:'red'});
nameSpace3.D2 = nameSpace3.board.create('parallel', [nameSpace3.D, nameSpace3.F], {visible: true, color:'blue'});
nameSpace3.P = nameSpace3.board.create('parabola', [nameSpace3.F, nameSpace3.D]);
nameSpace3.Hy=function()
{
    return nameSpace3.F.Y();
}
nameSpace3.Hx=function()
{
    var p=nameSpace3.slp.Value();
    var y=nameSpace3.F.Y();
    return Math.sqrt(2*y*p);
}

nameSpace3.Gx=function()
{
    var p=nameSpace3.slp.Value();
    var y=nameSpace3.F.Y();
    return -Math.sqrt(2*y*p);
}
nameSpace3.H=nameSpace3.board.create('point', [nameSpace3.Hx,nameSpace3.Hy], {name:'A', size:1});
nameSpace3.G=nameSpace3.board.create('point', [nameSpace3.Gx,nameSpace3.Hy],{name:'B', size:1});
nameSpace3.K=nameSpace3.board.create('point', [function(){return nameSpace3.H.X();},function(){return nameSpace3.A.Y();}],{size:1, color:'blue', withLabel:false});
nameSpace3.L=nameSpace3.board.create('point', [function(){return nameSpace3.G.X();},function(){return nameSpace3.A.Y();}],{size:1, color:'blue', withLabel:false});
nameSpace3.AH=nameSpace3.board.create('segment',[nameSpace3.H,nameSpace3.K], {dash:1});
nameSpace3.BK=nameSpace3.board.create('segment',[nameSpace3.G,nameSpace3.L], {dash:1});
nameSpace3.txt1 = function ()
{
    return "2p=AB=" + 2*nameSpace3.slp.Value().toFixed(2);
}
nameSpace3.board.create('text', [1, 15, nameSpace3.txt1]);

