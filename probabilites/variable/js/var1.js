var nameSpace4 = {};
nameSpace4.xmin = -0.5;
nameSpace4.xmax = 2.5;
nameSpace4.ymin = -0.5;
nameSpace4.ymax = 2.5;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: true, showNavigation: false});
nameSpace4.I = nameSpace4.board.create('point', [1, 1], {visible: true, name: 'I', size: 1, color: 'blue', fixed: true});

nameSpace4.A = nameSpace4.board.create('point', [0, 0], {visible: true, name: 'A', size: 1, color: 'blue', fixed: true});
nameSpace4.B = nameSpace4.board.create('point', [2, 0], {visible: true, name: 'B', size: 1, color: 'blue', fixed: true});
nameSpace4.C = nameSpace4.board.create('point', [2, 2], {visible: true, name: 'C', size: 1, color: 'blue', fixed: true});
nameSpace4.D = nameSpace4.board.create('point', [0, 2], {visible: true, name: 'D', size: 1, color: 'blue', fixed: true});
nameSpace4.K=nameSpace4.board.create('polygon',[nameSpace4.A, nameSpace4.B, nameSpace4.C, nameSpace4.D]);

nameSpace4.sla=nameSpace4.board.create('slider',[[0.2,2.25],[0.75,2.25],[0,1,Math.sqrt(2)]]);
nameSpace4.R1 = nameSpace4.board.create('circle', [nameSpace4.I, function(){return nameSpace4.sla.Value();}], {color: 'blue', opacity: 0.4});

nameSpace4.slb=nameSpace4.board.create('slider',[[1,2.25],[1.5,2.25],[0.6,1.3,Math.sqrt(2)]]);
nameSpace4.R2 = nameSpace4.board.create('circle', [nameSpace4.I, function(){return nameSpace4.slb.Value();}], {color: 'red', opacity: 0.4});

nameSpace4.txt1=function()
{
    return "a="+nameSpace4.sla.Value().toFixed(2);
}
nameSpace4.board.create('text',[0.2,-0.25,nameSpace4.txt1]);

nameSpace4.txt2=function()
{
    return "b="+nameSpace4.slb.Value().toFixed(2);
}
nameSpace4.board.create('text',[1.5,-0.25,nameSpace4.txt2]);