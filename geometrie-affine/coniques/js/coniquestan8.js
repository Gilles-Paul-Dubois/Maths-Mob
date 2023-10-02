var nameSpace8 = {};
nameSpace8.xmin = -10;
nameSpace8.xmax = 10;
nameSpace8.ymin = -1;
nameSpace8.ymax = 19;
nameSpace8.board = JXG.JSXGraph.initBoard('box8', {boundingbox: [nameSpace8.xmin, nameSpace8.ymax, nameSpace8.xmax, nameSpace8.ymin], axis: true, showNavigation:false});
nameSpace8.slp = nameSpace8.board.create('slider', [[-9, 18], [-5, 18], [0.7, 1, 4]], {snapWidth: 0.1, withLabel: false});
nameSpace8.slx = nameSpace8.board.create('slider', [[-4, 18], [0, 18], [-5, 1, 5]], {snapWidth: 0.1, withLabel: false});

nameSpace8.F = nameSpace8.board.create('point', [0, function () {
        return nameSpace8.slp.Value() / 2;
    }], {size: 1, color: 'red', name: 'F1', visible: false});

nameSpace8.A = nameSpace8.board.create('point', [-1, function () {
        return -nameSpace8.slp.Value() / 2;
    }], {visible: false});
nameSpace8.B = nameSpace8.board.create('point', [+1, function () {
        return -nameSpace8.slp.Value() / 2;
    }], {visible: false});
nameSpace8.D = nameSpace8.board.create('line', [nameSpace8.A, nameSpace8.B], {visible: false});
nameSpace8.P = nameSpace8.board.create('parabola', [nameSpace8.F, nameSpace8.D]);
//nameSpace8.M=nameSpace8.board.create('glider', [nameSpace8.P], {size:1, name:'M'});
nameSpace8.M = nameSpace8.board.create('point', [function () {
        return nameSpace8.slx.Value();
    }, function () {
        var x = nameSpace8.slx.Value();
        return x * x / (2 * nameSpace8.slp.Value());
    }], {size: 1, name: 'M'});
nameSpace8.Nx = function ()
{
    var x = nameSpace8.slx.Value();
    var p = nameSpace8.slp.Value();
    return x + 1;
}

nameSpace8.Ny = function ()
{
    var x = nameSpace8.slx.Value();
    var p = nameSpace8.slp.Value();
    return x * x / (2 * p) + x / p;
}
nameSpace8.N = nameSpace8.board.create('point', [nameSpace8.Nx, nameSpace8.Ny], {visible: false});
//nameSpace8.T=nameSpace8.board.create('tangent',[nameSpace8.M], {color:'red'});
nameSpace8.T = nameSpace8.board.create('line', [nameSpace8.M, nameSpace8.N], {color: 'red'});

nameSpace8.txt1 = function ()
{
    return "p=" + nameSpace8.slp.Value().toFixed(2);
}
nameSpace8.board.create('text', [1, 18, nameSpace8.txt1]);

nameSpace8.txt2 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "pente de la tangent =" + (nameSpace8.slx.Value() / nameSpace8.slp.Value()).toFixed(2);}
else
{ return "slope of the tangent =" + (nameSpace8.slx.Value() / nameSpace8.slp.Value()).toFixed(2);}
}
nameSpace8.board.create('text', [1, 17, nameSpace8.txt2]);

nameSpace8.txt3 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "abscisse of M =" + nameSpace8.slx.Value().toFixed(2);}
else
{ return "abscissa de M =" + nameSpace8.slx.Value().toFixed(2);}
}
nameSpace8.board.create('text', [1, 16, nameSpace8.txt3]);
