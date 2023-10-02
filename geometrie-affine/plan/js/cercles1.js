var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slr=nameSpace1.board.create('slider', [[-4,4],[-2,4],[1,2,3]]);
nameSpace1.A=nameSpace1.board.create('point',[0,0], {name:'A', size:1});
nameSpace1.K=nameSpace1.board. create ('circle',[nameSpace1.A, function (){return nameSpace1.slr.Value();}]);
nameSpace1.B=nameSpace1.board.create('point',[3,-2], {name:'B', size:1});
nameSpace1.C=nameSpace1.board.create('point',[3,2], {name:'C', size:1});
nameSpace1.BC=nameSpace1.board.create('line',[nameSpace1.B, nameSpace1.C], {color:'brown'});
nameSpace1.H = nameSpace1.board.create('perpendicularpoint',[nameSpace1.BC,nameSpace1.A],{size:1, name:'H', fixed:'true', color:'blue'});
nameSpace1.AH = nameSpace1.board.create('segment',[nameSpace1.A, nameSpace1.H],{color:'green'} );
nameSpace1.I=nameSpace1.board.create('intersection',[nameSpace1.K, nameSpace1.BC,0], {name:'I',size:1, fixed:true, color:'blue'});
nameSpace1.J=nameSpace1.board.create('intersection',[nameSpace1.K, nameSpace1.BC,1], {name:'J',size:1, fixed:true, color:'blue'});
nameSpace1.txt1=function()
{
    return "R="+nameSpace1.slr.Value().toFixed(2);
}
nameSpace1.board.create('text',[-1,4, nameSpace1.txt1]);
nameSpace1.txt2=function()
{
    return "AH="+nameSpace1.AH.L().toFixed(2);
}
nameSpace1.board.create('text',[1,4, nameSpace1.txt2]);