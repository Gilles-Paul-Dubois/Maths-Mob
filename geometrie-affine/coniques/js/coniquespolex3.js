var nameSpace5 = {};
nameSpace5.xmin = -5;
nameSpace5.xmax = 5;
nameSpace5.ymin = -5;
nameSpace5.ymax = 5;
nameSpace5.board = JXG.JSXGraph.initBoard('box5', {boundingbox: [nameSpace5.xmin, nameSpace5.ymax, nameSpace5.xmax, nameSpace5.ymin], axis: false});
nameSpace5.sla = nameSpace5.board.create('slider', [[-4, -3.5], [-2, -3.5], [1, 3, 4]], {snapWidth: 0.1});


nameSpace5.A=nameSpace5.board.create('point',[4,4],{size:1, name:"A"});
nameSpace5.O=nameSpace5.board.create('point',[0,0],{size:1, name:"O", color:'blue', fixed:true});

nameSpace5.E = nameSpace5.board.create('circle', [nameSpace5.O, function(){return nameSpace5.sla.Value();}]);


nameSpace5.B1y=function()
{
       var b = nameSpace5.sla.Value();
       var y1=nameSpace5.A.Y();
       return b*b/y1;
}
nameSpace5.B1=nameSpace5.board.create('point',[0,nameSpace5.B1y], {visible:false});

nameSpace5.B2x=function()
{
       var a = nameSpace5.sla.Value();
       var x1=nameSpace5.A.X();
       return a*a/x1;
}
nameSpace5.B2=nameSpace5.board.create('point',[nameSpace5.B2x,0], {visible:false});

nameSpace5.D=nameSpace5.board.create('line',[nameSpace5.B1, nameSpace5.B2], {color:'red', name:"&Delta;", withLabel:true});

nameSpace5.B=nameSpace5.board.create('glider',[4,-2,nameSpace5.D], {size:1, name:"B"});

nameSpace5.C1y=function()
{
       var b = nameSpace5.sla.Value();
       var y1=nameSpace5.B.Y();
       return b*b/y1;
}
nameSpace5.B1=nameSpace5.board.create('point',[0,nameSpace5.B1y], {visible:false});

nameSpace5.C2x=function()
{
       var a = nameSpace5.sla.Value();
       var x1=nameSpace5.B.X();
       return a*a/x1;
}
nameSpace5.C1=nameSpace5.board.create('point',[0,nameSpace5.C1y], {visible:false});
nameSpace5.C2=nameSpace5.board.create('point',[nameSpace5.C2x,0], {visible:false});

nameSpace5.P=nameSpace5.board.create('line',[nameSpace5.C1, nameSpace5.C2], {color:'red', name:"P", withLabel:true});

nameSpace5.C=nameSpace5.board.create('intersection', [nameSpace5.D, nameSpace5.P],{size:1, color:'blue', name:'C'});
nameSpace5.OA=nameSpace5.board.create('line',[nameSpace5.O, nameSpace5.A], {dash:1, color:'green'});
nameSpace5.OB=nameSpace5.board.create('line',[nameSpace5.O, nameSpace5.B], {dash:1, color:'green'});
nameSpace5.OC=nameSpace5.board.create('line',[nameSpace5.O, nameSpace5.C], {dash:1, color:'green'});

nameSpace5.ABC=nameSpace5.board.create('polygon', [nameSpace5.A, nameSpace5.B, nameSpace5.C]);