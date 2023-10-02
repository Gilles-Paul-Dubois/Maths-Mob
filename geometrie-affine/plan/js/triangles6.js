/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nameSpace6 = {};
nameSpace6.xmin = -5;
nameSpace6.xmax = 5;
nameSpace6.ymin = -5;
nameSpace6.ymax = 5;
nameSpace6.board = JXG.JSXGraph.initBoard('box6', {boundingbox: [nameSpace6.xmin, nameSpace6.ymax, nameSpace6.xmax, nameSpace6.ymin], axis: false});

nameSpace6.A = nameSpace6.board.create('point', [0.8, 2.2], {fixed: false, color: 'red', size: 1, name: 'A', withLabel: true});
nameSpace6.B = nameSpace6.board.create('point', [-3.2, -1.5], {fixed: false, color: 'red', size: 1, name: 'B', withLabel: true});
nameSpace6.C = nameSpace6.board.create('point', [0.8, 0], {fixed: false, color: 'red', size: 1, name: 'C', withLabel: true});
nameSpace6.AB = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.B], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace6.AC = nameSpace6.board.create('line', [nameSpace6.A, nameSpace6.C], {straightFirst: false, straightLast: false, color: 'green', name: 'AB', withLabel: false});
nameSpace6.CB = nameSpace6.board.create('line', [nameSpace6.C, nameSpace6.B], {straightFirst: true, straightLast: true, color: 'green', name: 'AB', withLabel: false});
nameSpace6.BAS = nameSpace6.board.create('bisectorlines', [nameSpace6.AB, nameSpace6.AC]);
nameSpace6.BAS1 = nameSpace6.BAS.line1;
nameSpace6.BAS2 = nameSpace6.BAS.line2;
nameSpace6.F = nameSpace6.board.create('intersection', [nameSpace6.BAS1, nameSpace6.CB], {name: 'F', size: 1, color: 'blue'});
nameSpace6.E = nameSpace6.board.create('intersection', [nameSpace6.BAS2, nameSpace6.CB], {name: 'E', size: 1, color: 'blue'});
nameSpace6.EB = nameSpace6.board.create('segment', [nameSpace6.E, nameSpace6.B], {visible: false});
nameSpace6.EC = nameSpace6.board.create('segment', [nameSpace6.E, nameSpace6.C], {visible: false});
nameSpace6.FB = nameSpace6.board.create('segment', [nameSpace6.F, nameSpace6.B], {visible: false});
nameSpace6.FC = nameSpace6.board.create('segment', [nameSpace6.F, nameSpace6.C], {visible: false});
nameSpace6.txt1=function ()
{
    return "EB="+nameSpace6.EB.L().toFixed(2)
}
nameSpace6.board.create('text',[-4.5,-3,nameSpace6.txt1]);
nameSpace6.txt2=function ()
{
    return "EC="+nameSpace6.EC.L().toFixed(2)
}
nameSpace6.board.create('text',[-4.5,-3.5,nameSpace6.txt2]);
nameSpace6.txt3=function ()
{
    return "FB="+nameSpace6.FB.L().toFixed(2)
}
nameSpace6.board.create('text',[-4.5,-4,nameSpace6.txt3]);
nameSpace6.txt4=function ()
{
    return "FC="+nameSpace6.FC.L().toFixed(2)
}
nameSpace6.board.create('text',[-4.5,-4.5,nameSpace6.txt4]);

nameSpace6.txt5=function ()
{
    return "EB/EC="+(nameSpace6.EB.L()/nameSpace6.EC.L()).toFixed(2)
}
nameSpace6.board.create('text',[3,-3.5,nameSpace6.txt5]);

nameSpace6.txt6=function ()
{
    return "FB/FC="+(nameSpace6.FB.L()/nameSpace6.FC.L()).toFixed(2)
}
nameSpace6.board.create('text',[3,-4,nameSpace6.txt6]);

nameSpace6.EAC=nameSpace6.board.create('angle',[nameSpace6.E, nameSpace6.A, nameSpace6.C], {name:'&alpha;'});
nameSpace6.BAE=nameSpace6.board.create('angle',[nameSpace6.B, nameSpace6.A, nameSpace6.E], {name:'&alpha;'});
