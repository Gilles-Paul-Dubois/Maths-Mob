/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace2 = {}
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -5;
nameSpace2.ymax = 5;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false
});
nameSpace2.sla = nameSpace2.board.create('slider', [[-4, -3.5], [-2, -3.5], [-5, 2, 5]]);
nameSpace2.slb = nameSpace2.board.create('slider', [[-4, -4], [-2, -4], [-5, 1, 5]]);
nameSpace2.slh = nameSpace2.board.create('slider', [[2, 4], [4, 4], [-2, -2, 2]]);
nameSpace2.A = nameSpace2.board.create('point', [2, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace2.B = nameSpace2.board.create('point', [0, 2], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace2.AB = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace2.O = nameSpace2.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', color:'blue', visible: true});


nameSpace2.Gx = function ()
{
    return (nameSpace2.A.X() * nameSpace2.sla.Value() + nameSpace2.B.X() * nameSpace2.slb.Value()) / (nameSpace2.sla.Value() + nameSpace2.slb.Value());
}
nameSpace2.Gy = function ()
{
    return (nameSpace2.A.Y() * nameSpace2.sla.Value() + nameSpace2.B.Y() * nameSpace2.slb.Value()) / (nameSpace2.sla.Value() + nameSpace2.slb.Value());
}

nameSpace2.G = nameSpace2.board.create('point', [nameSpace2.Gx, nameSpace2.Gy], {fixed: true, color: 'blue', size: 1, name: 'G', withLabel: true});

nameSpace2.txt1 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Masse de A = " + nameSpace2.sla.Value().toFixed(2);}
else
{ return "Mass of A = " + nameSpace2.sla.Value().toFixed(2);}
}
nameSpace2.board.create('text', [1, -3.5, nameSpace2.txt1]);
nameSpace2.txt2 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Masse de B = " + nameSpace2.slb.Value().toFixed(2);}
else
{ return "Mass of B = " + nameSpace2.slb.Value().toFixed(2);}
}
nameSpace2.board.create('text', [1, -4, nameSpace2.txt2]);

nameSpace2.txt3 = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { return "Rapport de l'homothétie = " + nameSpace2.slh.Value().toFixed(2);}
else
{ return "Ratio of dilation = " + nameSpace2.slh.Value().toFixed(2);}
}
nameSpace2.board.create('text', [1, 3, nameSpace2.txt3]);

nameSpace2.transform = nameSpace2.board.create('transform', [
    function () {
        return nameSpace2.slh.Value();
    },
    function () {
        return nameSpace2.slh.Value();
    }],
        {type: 'scale'});

nameSpace2.A1 = nameSpace2.board.create('point', [nameSpace2.A, nameSpace2.transform], {color:'blue', name: "A'", size: 1, withLabel: true});
nameSpace2.B1 = nameSpace2.board.create('point', [nameSpace2.B, nameSpace2.transform], {color:'blue', name: "B'", size: 1, withLabel: true});
nameSpace2.G1=nameSpace2.board.create('point', [nameSpace2.G, nameSpace2.transform], {color:'blue', name: "G'", size: 1, withLabel: true});
nameSpace2.AB = nameSpace2.board.create('line', [nameSpace2.A1, nameSpace2.B1], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace2.AA1 = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.A1], {straightFirst: true, straightLast: true, color: 'brown',  withLabel: false});
nameSpace2.BB1 = nameSpace2.board.create('line', [nameSpace2.B, nameSpace2.B1], {straightFirst: true, straightLast: true, color: 'brown',  withLabel: false});
nameSpace2.GG1 = nameSpace2.board.create('line', [nameSpace2.G, nameSpace2.G1], {straightFirst: true, straightLast: true, color: 'brown',  withLabel: false});