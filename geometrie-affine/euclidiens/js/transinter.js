var nameSpace3 = {};
nameSpace3.board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace3.O = nameSpace3.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});

nameSpace3.M = nameSpace3.board.create('point', [1, 1], {visible: true, size: 1, name: ''});
nameSpace3.u=nameSpace3.board.create('line',[nameSpace3.O, nameSpace3.M], {straightFirst:false, straightLast:false, lastArrow:true, name:'u'});

nameSpace3.A = nameSpace3.board.create('point', [-3, -3], {visible: true, size: 1, name: 'A'});
nameSpace3.B = nameSpace3.board.create('point', [-7, -3], {visible: true, size: 1, name: 'B'});
nameSpace3.C = nameSpace3.board.create('point', [-7, -8], {visible: true, size: 1, name: 'C'});
nameSpace3.D = nameSpace3.board.create('point', [-3, -8], {visible: true, size: 1, name: 'D'});

nameSpace3.A1x=function ()
{
    return nameSpace3.A.X()+nameSpace3.M.X();
}

nameSpace3.A1y=function ()
{
    return nameSpace3.A.Y()+nameSpace3.M.Y();
}
nameSpace3.A1 = nameSpace3.board.create('point', [nameSpace3.A1x, nameSpace3.A1y], {visible: true, size: 1, name: "A'", color:'blue'});

nameSpace3.B1x=function ()
{
    return nameSpace3.B.X()+nameSpace3.M.X();
}

nameSpace3.B1y=function ()
{
    return nameSpace3.B.Y()+nameSpace3.M.Y();
}
nameSpace3.B1 = nameSpace3.board.create('point', [nameSpace3.B1x, nameSpace3.B1y], {visible: true, size: 1, name: "B'", color:'blue'});

nameSpace3.C1x=function ()
{
    return nameSpace3.C.X()+nameSpace3.M.X();
}

nameSpace3.C1y=function ()
{
    return nameSpace3.C.Y()+nameSpace3.M.Y();
}
nameSpace3.C1 = nameSpace3.board.create('point', [nameSpace3.C1x, nameSpace3.C1y], {visible: true, size: 1, name: "C'", color:'blue'});

nameSpace3.D1x=function ()
{
    return nameSpace3.D.X()+nameSpace3.M.X();
}

nameSpace3.D1y=function ()
{
    return nameSpace3.D.Y()+nameSpace3.M.Y();
}
nameSpace3.D1 = nameSpace3.board.create('point', [nameSpace3.D1x, nameSpace3.D1y], {visible: true, size: 1, name: "D'", color:'blue'});

nameSpace3.P=nameSpace3.board.create('polygon', [nameSpace3.A,nameSpace3.B,nameSpace3.C,nameSpace3.D ]);
nameSpace3.P1=nameSpace3.board.create('polygon', [nameSpace3.A1,nameSpace3.B1,nameSpace3.C1,nameSpace3.D1 ],{color:'red'});