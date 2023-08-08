var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false});
nameSpace1.slk=nameSpace1.board.create('slider',[[-4,4],[-2,4],[-5,2,5]]);
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});

nameSpace1.U = nameSpace1.board.create('point', [1, 1], {fixed: false, size: 1, name: 'U', visible: true, withLabel: false});
nameSpace1.D1 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.U], {straightFirst: true, straightLast: true, lastArrow: true, color: 'black', name: 'D1', withLabel: false, label: {position: 'top'}});
nameSpace1.u = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.U], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'u', withLabel: true, label: {position: 'top'}});


nameSpace1.P = nameSpace1.board.create('point', [-1, 1], {fixed: false, size: 1, name: 'P', visible: true, withLabel: true});
nameSpace1.U1x = function ()
{
    return nameSpace1.P.X() + nameSpace1.U.X();
}
nameSpace1.U1y = function ()
{
    return nameSpace1.P.Y() + nameSpace1.U.Y();

}
nameSpace1.U1 = nameSpace1.board.create('point', [nameSpace1.U1x, nameSpace1.U1y], {fixed: true, size: 1, name: 'U1', visible: false});
nameSpace1.D1 = nameSpace1.board.create('line', [nameSpace1.P, nameSpace1.U1], {straightFirst: true, straightLast: true, lastArrow: true, color: 'green', name: 'D2', withLabel: false, label: {position: 'top'}});
nameSpace1.u1 = nameSpace1.board.create('line', [nameSpace1.P, nameSpace1.U1], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'u', withLabel: true, label: {position: 'top'}});
nameSpace1.Qx = function ()
{
    return nameSpace1.P.X() + nameSpace1.slk.Value()*nameSpace1.U.X();
}
nameSpace1.Qy = function ()
{
    return nameSpace1.P.Y() + nameSpace1.slk.Value()*nameSpace1.U.Y();

}
nameSpace1.Q= nameSpace1.board.create('point', [nameSpace1.Qx, nameSpace1.Qy], {size:1, name:'Q'})
nameSpace1.txt1=function()
{
    return "k="+nameSpace1.slk.Value().toFixed(2);
}
nameSpace1.board.create('text', [-4,3.5,nameSpace1.txt1]);