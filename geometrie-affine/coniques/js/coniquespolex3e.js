var nameSpace6 = {};
nameSpace6.xmin = -5;
nameSpace6.xmax = 5;
nameSpace6.ymin = -5;
nameSpace6.ymax = 5;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: false});
nameSpace6.sla = nameSpace6.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1});


nameSpace6.A=nameSpace6.board.create('point',[4,4],{size:1, name:"A"});
nameSpace6.O=nameSpace6.board.create('point',[0,0],{size:1, name:"O", color:'blue', fixed:true});

nameSpace6.E = nameSpace6.board.create('circle', [nameSpace6.O, function(){return nameSpace6.sla.Value();}]);


nameSpace6.B1y=function()
{
       var b = nameSpace6.sla.Value();
       var y1=nameSpace6.A.Y();
       return b*b/y1;
}
nameSpace6.B1=nameSpace6.board.create('point',[0,nameSpace6.B1y], {visible:false});

nameSpace6.B2x=function()
{
       var a = nameSpace6.sla.Value();
       var x1=nameSpace6.A.X();
       return a*a/x1;
}
nameSpace6.B2=nameSpace6.board.create('point',[nameSpace6.B2x,0], {visible:false});

nameSpace6.D=nameSpace6.board.create('line',[nameSpace6.B1, nameSpace6.B2], {color:'red', name:"&Delta;", withLabel:true});

nameSpace6.B=nameSpace6.board.create('glider',[4,-2,nameSpace6.D], {size:1, name:"B"});

nameSpace6.C1y=function()
{
       var b = nameSpace6.sla.Value();
       var y1=nameSpace6.B.Y();
       return b*b/y1;
}
nameSpace6.B1=nameSpace6.board.create('point',[0,nameSpace6.B1y], {visible:false});

nameSpace6.C2x=function()
{
       var a = nameSpace6.sla.Value();
       var x1=nameSpace6.B.X();
       return a*a/x1;
}
nameSpace6.C1=nameSpace6.board.create('point',[0,nameSpace6.C1y], {visible:false});
nameSpace6.C2=nameSpace6.board.create('point',[nameSpace6.C2x,0], {visible:false});

nameSpace6.P=nameSpace6.board.create('line',[nameSpace6.C1, nameSpace6.C2], {color:'red', name:"P", withLabel:true});

nameSpace6.C=nameSpace6.board.create('intersection', [nameSpace6.D, nameSpace6.P],{size:1, color:'blue', name:'C'});
nameSpace6.OA=nameSpace6.board.create('line',[nameSpace6.O, nameSpace6.A], {dash:1, color:'green'});
nameSpace6.OB=nameSpace6.board.create('line',[nameSpace6.O, nameSpace6.B], {dash:1, color:'green'});
nameSpace6.OC=nameSpace6.board.create('line',[nameSpace6.O, nameSpace6.C], {dash:1, color:'green'});

nameSpace6.ABC=nameSpace6.board.create('polygon', [nameSpace6.A, nameSpace6.B, nameSpace6.C]);
