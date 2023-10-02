//JXG.Options.text.useMathJax = true;
var nameSpace1 = {}
nameSpace1.xmin = -5;
nameSpace1.xmax = 5;
nameSpace1.ymin = -2;
nameSpace1.ymax = 2;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: false, showNavigation:false,
});

nameSpace1.M= nameSpace1.board.create('point', [-2, 0], {fixed: true, color: 'blue', size: 1, name: 'M', withLabel: true});

nameSpace1.N= nameSpace1.board.create('point', [2, 0], {fixed: true, color: 'blue', size: 1, name: 'N', withLabel: true});

nameSpace1.MN=nameSpace1.board.create('line', [nameSpace1.M, nameSpace1.N]);
nameSpace1.P =nameSpace1.board.create('point',[0,0], {slideObject:nameSpace1.MN, name:'P', size:1});

nameSpace1.txt1=function()
{
    var n= nameSpace1.M.X()-nameSpace1.P.X();
    var d= nameSpace1.N.X()-nameSpace1.P.X();
    var r=n/d;
    return ""+r.toFixed(2);

};
nameSpace1.txt0="<math><mrow><mfrac><mover><mi>PM</mi><mo>&macr;</mo></mover><mover><mi>PN</mi><mo>&macr;</mo></mover></mfrac></mrow></math>="
nameSpace1.board.create('text',[0,-1,nameSpace1.txt0],{display:"html"});
nameSpace1.board.create('text',[1,-1,nameSpace1.txt1]);
