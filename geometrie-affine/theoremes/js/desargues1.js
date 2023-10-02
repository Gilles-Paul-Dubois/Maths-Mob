var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});


//nameSpace1.S=nameSpace1.board.create('point',[-4,4], {fixed: true, size:1, name:'S', color: 'blue'});
nameSpace1.A=nameSpace1.board.create('point',[-1,2], {fixed: false, size:1, name:'A'});
nameSpace1.B=nameSpace1.board.create('point',[-3,1], {fixed: false, size:1, name:'B'});
nameSpace1.C=nameSpace1.board.create('point',[0,1], {fixed: false, size:1, name:'C'});
nameSpace1.A1=nameSpace1.board.create('point',[2,0], {fixed: false, size:1, name:"A'"});
nameSpace1.slk=nameSpace1.board.create('slider',[[1,4],[3,4],[-2,2,2]],{snapWidth:0.1});
nameSpace1.B1x=function()
{
    var k=nameSpace1.slk.Value();
    var xa=nameSpace1.A.X();
    var xb=nameSpace1.B.X();
    var xa1=nameSpace1.A1.X();
    return xa1+k*(xb-xa);
}

nameSpace1.B1y=function()
{
    var k=nameSpace1.slk.Value();
    var ya=nameSpace1.A.Y();
    var yb=nameSpace1.B.Y();
    var ya1=nameSpace1.A1.Y();
    return ya1+k*(yb-ya);
}
nameSpace1.B1=nameSpace1.board.create('point',[nameSpace1.B1x,nameSpace1.B1y], {color:'blue',fixed: false, size:1, name:"B'"});

nameSpace1.C1x=function()
{
    var k=nameSpace1.slk.Value();
    var xa=nameSpace1.A.X();
    var xb=nameSpace1.C.X();
    var xa1=nameSpace1.A1.X();
    return xa1+k*(xb-xa);
}

nameSpace1.C1y=function()
{
    var k=nameSpace1.slk.Value();
    var ya=nameSpace1.A.Y();
    var yb=nameSpace1.C.Y();
    var ya1=nameSpace1.A1.Y();
    return ya1+k*(yb-ya);
}
nameSpace1.C1=nameSpace1.board.create('point',[nameSpace1.C1x,nameSpace1.C1y], {color:'blue',fixed: false, size:1, name:"C'"});

nameSpace1.AA1=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.A1]);
nameSpace1.BB1=nameSpace1.board.create('line',[nameSpace1.B, nameSpace1.B1]);
nameSpace1.CC1=nameSpace1.board.create('line',[nameSpace1.C, nameSpace1.C1]);
nameSpace1.AB=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.B], {color:'red', straightFirst:false, straightLast:false});
nameSpace1.AC=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.C], {color:'red', straightFirst:false, straightLast:false});
nameSpace1.BC=nameSpace1.board.create('line',[nameSpace1.B, nameSpace1.C], {color:'red', straightFirst:false, straightLast:false});

nameSpace1.A1B1=nameSpace1.board.create('line',[nameSpace1.A1, nameSpace1.B1], {color:'red', straightFirst:false, straightLast:false});
nameSpace1.A1C1=nameSpace1.board.create('line',[nameSpace1.A1, nameSpace1.C1], {color:'red', straightFirst:false, straightLast:false});
nameSpace1.B1C1=nameSpace1.board.create('line',[nameSpace1.B1, nameSpace1.C1], {color:'red', straightFirst:false, straightLast:false});

nameSpace1.txt1=function()
{
    return "k="+nameSpace1.slk.Value().toFixed(2);
}
//nameSpace1.board.create('text',[3.5,4,nameSpace1.txt1]);