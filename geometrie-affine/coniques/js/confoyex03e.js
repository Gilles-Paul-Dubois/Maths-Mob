var nameSpace2 = {};
nameSpace2.xmin = -10;
nameSpace2.xmax = 10;
nameSpace2.ymin = -10;
nameSpace2.ymax = 10;
nameSpace2.board = JXG.JSXGraph.initBoard('box2', {boundingbox: [nameSpace2.xmin, nameSpace2.ymax, nameSpace2.xmax, nameSpace2.ymin], axis: true});

nameSpace2.sla = nameSpace2.board.create('slider', [[-9, 9], [-6, 9], [1, 1.5, 2]]);
nameSpace2.slb = nameSpace2.board.create('slider', [[-9, 7], [-6, 7], [3, 4, 5]]);
nameSpace2.slt = nameSpace2.board.create('slider', [[-9, 5], [-6, 5], [-4, 0, 6]]);

nameSpace2.Ma = nameSpace2.board.create('point', [function () {
        return nameSpace2.sla.Value();
    }, 0], {size: 1, color: 'black', name: 'a'});
nameSpace2.Mb = nameSpace2.board.create('point', [function () {
        return nameSpace2.slb.Value();
    }, 0], {size: 1, color: 'black', name: 'b'});
nameSpace2.Mt = nameSpace2.board.create('point', [function () {
        return nameSpace2.slt.Value();
    }, 0], {size: 1, color: 'black', name: 't'});

nameSpace2.F1 = nameSpace2.board.create('point', [0, function () {
        return Math.sqrt(nameSpace2.slb.Value() - nameSpace2.sla.Value());
    }], {size: 1, color: 'blue', name: "F"});
nameSpace2.F2 = nameSpace2.board.create('point', [0, function () {
        return -Math.sqrt(nameSpace2.slb.Value() - nameSpace2.sla.Value());
    }], {size: 1, color: 'blue', name: "F'"});


nameSpace2.ga = function ()
{
    var t = nameSpace2.slt.Value();
    var b = nameSpace2.slb.Value();
    return 2 * Math.sqrt(b - t);
}

nameSpace2.C = nameSpace2.board.create('ellipse', [nameSpace2.F1, nameSpace2.F2, nameSpace2.ga]);