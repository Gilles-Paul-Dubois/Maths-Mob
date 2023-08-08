var nameSpace1 = {};
nameSpace1.xmin = -10;
nameSpace1.xmax = 10;
nameSpace1.ymin = -10;
nameSpace1.ymax = 10;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});

nameSpace1.sla = nameSpace1.board.create('slider', [[-9, 9], [-6, 9], [1, 1.5, 2]]);
nameSpace1.slb = nameSpace1.board.create('slider', [[-9, 7], [-6, 7], [3, 4, 5]]);
nameSpace1.slt = nameSpace1.board.create('slider', [[-9, 5], [-6, 5], [-4, 0, 6]]);

nameSpace1.Ma = nameSpace1.board.create('point', [function () {
        return nameSpace1.sla.Value();
    }, 0], {size: 1, color: 'black', name: 'a'});
nameSpace1.Mb = nameSpace1.board.create('point', [function () {
        return nameSpace1.slb.Value();
    }, 0], {size: 1, color: 'black', name: 'b'});
nameSpace1.Mt = nameSpace1.board.create('point', [function () {
        return nameSpace1.slt.Value();
    }, 0], {size: 1, color: 'black', name: 't'});

nameSpace1.F1 = nameSpace1.board.create('point', [0, function () {
        return Math.sqrt(nameSpace1.slb.Value() - nameSpace1.sla.Value());
    }], {size: 1, color: 'blue', name: "F"});
nameSpace1.F2 = nameSpace1.board.create('point', [0, function () {
        return -Math.sqrt(nameSpace1.slb.Value() - nameSpace1.sla.Value());
    }], {size: 1, color: 'blue', name: "F'"});


nameSpace1.ga = function ()
{
    var t = nameSpace1.slt.Value();
    var b = nameSpace1.slb.Value();
    return 2 * Math.sqrt(b - t);
}

nameSpace1.C = nameSpace1.board.create('ellipse', [nameSpace1.F1, nameSpace1.F2, nameSpace1.ga]);