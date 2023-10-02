//JXG.Options.text.useMathJax = true;
var nameSpace2 = {}
nameSpace2.xmin = -5;
nameSpace2.xmax = 5;
nameSpace2.ymin = -2;
nameSpace2.ymax = 2;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: false, showNavigation: false,
});

nameSpace2.M = nameSpace2.board.create('point', [-1, 0], {fixed: true, color: 'blue', size: 1, name: 'M', withLabel: true});
nameSpace2.N = nameSpace2.board.create('point', [1, 0], {fixed: true, color: 'blue', size: 1, name: 'N', withLabel: true});

nameSpace2.MN = nameSpace2.board.create('line', [nameSpace2.M, nameSpace2.N]);
nameSpace2.P = nameSpace2.board.create('point', [0.5, 0], {slideObject: nameSpace2.MN, name: 'P', size: 1});
nameSpace2.Q = nameSpace2.board.create('point', [-2, 0], {slideObject: nameSpace2.MN, name: 'Q', size: 1});

nameSpace2.txt0="<math><mrow><mfrac><mover><mi>PM</mi><mo>&macr;</mo></mover><mover><mi>PN</mi><mo>&macr;</mo></mover></mfrac></mrow></math>"
+"&times;"+"<math><mrow><mfrac><mover><mi>QN</mi><mo>&macr;</mo></mover><mover><mi>QM</mi><mo>&macr;</mo></mover></mfrac></mrow></math>";

nameSpace2.txt1 = function ()
{
    var n1 = nameSpace2.M.X() - nameSpace2.P.X();
    var d1 = nameSpace2.N.X() - nameSpace2.P.X();
    var r1 = n1 / d1;
    var n2 = nameSpace2.M.X() - nameSpace2.Q.X();
    var d2 = nameSpace2.N.X() - nameSpace2.Q.X();
    var r2 = n2 / d2;
    var r=r1/r2;
    return " = "+ r.toFixed(2);

}
nameSpace2.board.create('text', [0, -1, nameSpace2.txt0],{display:"html"});
nameSpace2.board.create('text', [1.2, -1, nameSpace2.txt1]);