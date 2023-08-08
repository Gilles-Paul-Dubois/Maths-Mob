var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slR = nameSpace1.board.create('slider', [[-9, -8.5], [-5, -8.5], [3, 4, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace1.txt1 = function ()
{
    return "R=" + nameSpace1.slR.Value().toFixed(2);
}
nameSpace1.board.create('text', [-4, -8.5, nameSpace1.txt1]);
nameSpace1.O=nameSpace1.board.create('point',[0,0], {fixed:true, size:1, name:'O'});
nameSpace1.K1=nameSpace1.board.create('circle', [nameSpace1.O, function(){return nameSpace1.slR.Value();}]);
nameSpace1.A=nameSpace1.board.create('point',[5,5], {size:1});
nameSpace1.OA=nameSpace1.board.create('segment',[nameSpace1.O, nameSpace1.A]);
nameSpace1.D=nameSpace1.board.create('line',[nameSpace1.O, nameSpace1.A]);
nameSpace1.I=nameSpace1.board.create('midpoint', [nameSpace1.OA], {size:1, name:'I'});
nameSpace1.K2=nameSpace1.board.create('circle',[nameSpace1.I,nameSpace1.O]);
nameSpace1.C0=nameSpace1.board.create('intersection',[nameSpace1.K1,nameSpace1.K2,0], {size:1, name:"C"});
nameSpace1.C1=nameSpace1.board.create('intersection',[nameSpace1.K1,nameSpace1.K2,1], {size:1, name:"C'"});
nameSpace1.P=nameSpace1.board.create('line',[nameSpace1.C0, nameSpace1.C1], {color:'red'});
nameSpace1.T1=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.C0], {color:'brown'});
nameSpace1.T2=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.C1], {color:'brown'});
