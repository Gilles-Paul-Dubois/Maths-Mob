var nameSpace3 = {};
nameSpace3.xmin = -10;
nameSpace3.xmax = 10;
nameSpace3.ymin = -10;
nameSpace3.ymax = 10;
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [nameSpace3.xmin, nameSpace3.ymax, nameSpace3.xmax, nameSpace3.ymin], axis: false});
nameSpace3.slR = nameSpace3.board.create('slider', [[-9, -8.5], [-5, -8.5], [3, 4, 5]], {snapWidth: 0.1, withLabel: false});
nameSpace3.txt1 = function ()
{
    return "R=" + nameSpace3.slR.Value().toFixed(2);
}
nameSpace3.board.create('text', [-4, -8.5, nameSpace3.txt1]);
nameSpace3.O=nameSpace3.board.create('point',[0,0], {fixed:true, size:1, name:'O'});
nameSpace3.K1=nameSpace3.board.create('circle', [nameSpace3.O, function(){return nameSpace3.slR.Value();}]);
nameSpace3.A=nameSpace3.board.create('point', [2,1.6],{size:1, name:'A'});
nameSpace3.B1=nameSpace3.board.create('point', [2,5],{size:1, name:'B', fixed:true, visible:false});
nameSpace3.D1=nameSpace3.board.create('line',[nameSpace3.A, nameSpace3.B1], {color:'brown'});
nameSpace3.C10=nameSpace3.board.create('intersection', [nameSpace3.D1,nameSpace3.K1,0], {size:1, name:''});
nameSpace3.C11=nameSpace3.board.create('intersection', [nameSpace3.D1,nameSpace3.K1,1], {size:1, name:''});
nameSpace3.OC10=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.C10], {color:'brown'});
nameSpace3.OC11=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.C11], {color:'brown'});
nameSpace3.T10=nameSpace3.board.create('perpendicular',[nameSpace3.C10,nameSpace3.OC10], {color:'brown'});
nameSpace3.T11=nameSpace3.board.create('perpendicular',[nameSpace3.C11,nameSpace3.OC11], {color:'brown'});
nameSpace3.M1=nameSpace3.board.create('intersection',[nameSpace3.T10, nameSpace3.T11],{size:1, name:''});

nameSpace3.B2=nameSpace3.board.create('point', [5,1],{size:1, name:'B', fixed:true, visible:false});
nameSpace3.D2=nameSpace3.board.create('line',[nameSpace3.A, nameSpace3.B2], {color:'brown'});
nameSpace3.C20=nameSpace3.board.create('intersection', [nameSpace3.D2,nameSpace3.K1,0], {size:1, name:''});
nameSpace3.C21=nameSpace3.board.create('intersection', [nameSpace3.D2,nameSpace3.K1,1], {size:1, name:''});
nameSpace3.OC20=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.C20], {color:'brown'});
nameSpace3.OC21=nameSpace3.board.create('segment',[nameSpace3.O, nameSpace3.C21], {color:'brown'});
nameSpace3.T20=nameSpace3.board.create('perpendicular',[nameSpace3.C20,nameSpace3.OC20], {color:'brown'});
nameSpace3.T21=nameSpace3.board.create('perpendicular',[nameSpace3.C21,nameSpace3.OC21], {color:'brown'});
nameSpace3.M2=nameSpace3.board.create('intersection',[nameSpace3.T20, nameSpace3.T21],{size:1, name:''});

nameSpace3.P=nameSpace3.board.create('line', [nameSpace3.M1, nameSpace3.M2], {color:'green'});
