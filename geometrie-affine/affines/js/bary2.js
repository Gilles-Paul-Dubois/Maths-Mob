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
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false});
nameSpace2.sla = nameSpace2.board.create('slider', [[-4, -3.5], [-2, -3.5], [-5, 2, 5]], {snapWidth:0.1});
nameSpace2.slb = nameSpace2.board.create('slider', [[-4, -4], [-2, -4], [-5, 1, 5]],{snapWidth:0.1});
nameSpace2.slc = nameSpace2.board.create('slider', [[-4, -4.5], [-2, -4.5], [-5, 2, 5]],{snapWidth:0.1});
nameSpace2.A = nameSpace2.board.create('point', [2, 0], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});

nameSpace2.B = nameSpace2.board.create('point', [0, 2], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace2.C = nameSpace2.board.create('point', [-1, -1], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace2.AB = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace2.AC = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.C], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace2.CB = nameSpace2.board.create('line', [nameSpace2.C, nameSpace2.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});

nameSpace2.G1x = function ()
{
    return (nameSpace2.A.X() * nameSpace2.sla.Value() + nameSpace2.B.X() * nameSpace2.slb.Value()) / (nameSpace2.sla.Value() + nameSpace2.slb.Value());
}
nameSpace2.G1y = function ()
{
    return (nameSpace2.A.Y() * nameSpace2.sla.Value() + nameSpace2.B.Y() * nameSpace2.slb.Value()) / (nameSpace2.sla.Value() + nameSpace2.slb.Value());
}
nameSpace2.G1 = nameSpace2.board.create('point', [nameSpace2.G1x, nameSpace2.G1y], {fixed: true, color: 'blue', size: 1, name: 'G1', withLabel: true});

nameSpace2.G2x = function ()
{
    return (nameSpace2.A.X() * nameSpace2.sla.Value() + nameSpace2.C.X() * nameSpace2.slc.Value()) / (nameSpace2.sla.Value() + nameSpace2.slc.Value());
}
nameSpace2.G2y = function ()
{
    return (nameSpace2.A.Y() * nameSpace2.sla.Value() + nameSpace2.C.Y() * nameSpace2.slc.Value()) / (nameSpace2.sla.Value() + nameSpace2.slc.Value());
}
nameSpace2.G2 = nameSpace2.board.create('point', [nameSpace2.G2x, nameSpace2.G2y], {fixed: true, color: 'blue', size: 1, name: 'G2', withLabel: true});


nameSpace2.G3x = function ()
{
    return (nameSpace2.B.X() * nameSpace2.slb.Value() + nameSpace2.C.X() * nameSpace2.slc.Value()) / (nameSpace2.slc.Value() + nameSpace2.slb.Value());
}
nameSpace2.G3y = function ()
{
    return (nameSpace2.B.Y() * nameSpace2.slb.Value() + nameSpace2.C.Y() * nameSpace2.slc.Value()) / (nameSpace2.slc.Value() + nameSpace2.slb.Value());
}
nameSpace2.G3 = nameSpace2.board.create('point', [nameSpace2.G3x, nameSpace2.G3y], {fixed: true, color: 'blue', size: 1, name: 'G3', withLabel: true});


nameSpace2.CG1 = nameSpace2.board.create('line', [nameSpace2.C, nameSpace2.G1], {straightFirst: true, straightLast: true, color: 'brown', name: 'CG1', withLabel: false});
nameSpace2.BG2 = nameSpace2.board.create('line', [nameSpace2.B, nameSpace2.G2], {straightFirst: true, straightLast: true, color: 'brown', name: 'BG2', withLabel: false});
nameSpace2.AG3 = nameSpace2.board.create('line', [nameSpace2.A, nameSpace2.G3], {straightFirst: true, straightLast: true, color: 'brown', name: 'AG3', withLabel: false});


nameSpace2.Gx = function ()
{
    return (nameSpace2.A.X() * nameSpace2.sla.Value() + nameSpace2.B.X() * nameSpace2.slb.Value() + nameSpace2.C.X() * nameSpace2.slc.Value()) / (nameSpace2.sla.Value() + nameSpace2.slb.Value() + nameSpace2.slc.Value());
}
nameSpace2.Gy = function ()
{
    return (nameSpace2.A.Y() * nameSpace2.sla.Value() + nameSpace2.B.Y() * nameSpace2.slb.Value() + nameSpace2.C.Y() * nameSpace2.slc.Value()) / (nameSpace2.sla.Value() + nameSpace2.slb.Value() + nameSpace2.slc.Value());
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
   { return "Masse of C = " + nameSpace2.slc.Value().toFixed(2);}
else
{ return "Mass de C = " + nameSpace2.slc.Value().toFixed(2);}
}
nameSpace2.board.create('text', [1, -4.5, nameSpace2.txt3]);