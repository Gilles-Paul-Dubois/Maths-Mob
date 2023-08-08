var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.slR = nameSpace2.board.create('slider', [[-9, -8.5], [-5, -8.5], [3, 4, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace2.txt1 = function ()
{
    return "R=" + nameSpace2.slR.Value().toFixed(2);
}
nameSpace2.board.create('text', [-4, -8.5, nameSpace2.txt1]);
nameSpace2.O=nameSpace2.board.create('point',[0,0], {fixed:true, size:1, name:'O'});
nameSpace2.K1=nameSpace2.board.create('circle', [nameSpace2.O, function(){return nameSpace2.slR.Value();}]);
nameSpace2.M1=nameSpace2.board.create('glider', [4,0,nameSpace2.K1], {size:1, name:'M'});
nameSpace2.M2=nameSpace2.board.create('glider', [0,4,nameSpace2.K1], {size:1, name:"M'"});
nameSpace2.D=nameSpace2.board.create('line',[nameSpace2.M1, nameSpace2.M2]);
nameSpace2.OM1=nameSpace2.board.create('segment',[nameSpace2.O,nameSpace2.M1]);
nameSpace2.OM2=nameSpace2.board.create('segment',[nameSpace2.O,nameSpace2.M2]);
nameSpace2.N1=nameSpace2.board.create('perpendicular',[nameSpace2.M1,nameSpace2.OM1]);
nameSpace2.N2=nameSpace2.board.create('perpendicular',[nameSpace2.M2,nameSpace2.OM2]);
nameSpace2.A=nameSpace2.board.create('intersection',[nameSpace2.N1, nameSpace2.N2], {size:1, name:'A'});
