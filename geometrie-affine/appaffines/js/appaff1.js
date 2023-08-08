/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -5;
nameSpace1.ymax = 5;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false
});
nameSpace1.sla = nameSpace1.board.create('slider', [[-4, -3.5], [-2, -3.5], [-5, 2, 5]]);
nameSpace1.slb = nameSpace1.board.create('slider', [[-4, -4], [-2, -4], [-5, 1, 5]]);
nameSpace1.A = nameSpace1.board.create('point', [2, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace1.B = nameSpace1.board.create('point', [0, 2], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A, nameSpace1.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', visible: false});
nameSpace1.U = nameSpace1.board.create('point', [-3, -1], {fixed: false, size: 1, name: 'U', visible: true, withLabel: false});
nameSpace1.u = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.U], {straightFirst: false, straightLast: false, lastArrow: true, color: 'red', name: 'u', withLabel: true, label: {position: 'top'}});

nameSpace1.Gx = function ()
{
    return (nameSpace1.A.X() * nameSpace1.sla.Value() + nameSpace1.B.X() * nameSpace1.slb.Value()) / (nameSpace1.sla.Value() + nameSpace1.slb.Value());
}
nameSpace1.Gy = function ()
{
    return (nameSpace1.A.Y() * nameSpace1.sla.Value() + nameSpace1.B.Y() * nameSpace1.slb.Value()) / (nameSpace1.sla.Value() + nameSpace1.slb.Value());
}

nameSpace1.G = nameSpace1.board.create('point', [nameSpace1.Gx, nameSpace1.Gy], {fixed: true, color: 'blue', size: 1, name: 'G', withLabel: true});

nameSpace1.txt1 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Masse de A = " + nameSpace1.sla.Value().toFixed(2);}
else
{ return "Mass of A = " + nameSpace1.sla.Value().toFixed(2);}
}
nameSpace1.board.create('text', [1, -3.5, nameSpace1.txt1]);
nameSpace1.txt2 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Masse de B = " + nameSpace1.slb.Value().toFixed(2);}
else
{ return "Mass of B = " + nameSpace1.slb.Value().toFixed(2);}
}
nameSpace1.board.create('text', [1, -4, nameSpace1.txt2]);

nameSpace1.transform = nameSpace1.board.create('transform', [
    function () {
        return nameSpace1.U.X()
    },
    function () {
        return nameSpace1.U.Y()
    }],
        {type: 'translate'});

nameSpace1.A1 = nameSpace1.board.create('point', [nameSpace1.A, nameSpace1.transform], {color:'blue', name: "A'", size: 1, withLabel: true});
nameSpace1.B1 = nameSpace1.board.create('point', [nameSpace1.B, nameSpace1.transform], {color:'blue', name: "B'", size: 1, withLabel: true});
nameSpace1.board.create('point', [nameSpace1.G, nameSpace1.transform], {color:'blue', name: "G'", size: 1, withLabel: true});
nameSpace1.AB = nameSpace1.board.create('line', [nameSpace1.A1, nameSpace1.B1], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});