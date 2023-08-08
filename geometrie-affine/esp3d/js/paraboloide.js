
var nameSpace1 = {};

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };


nameSpace1.genCircle = function (scale)
{
    var pts = [];
    var s = scale || 1;
    var i;
    for (i = 0; i < 360; i++)
    {
        pts.push({x: Math.cos(i * Phoria.RADIANS), y: 1, z: Math.sin(i * Phoria.RADIANS)});
    }
    var eds = [];
    for (i = 0; i < 359; i++)
        eds.push({a: i, b: i + 1});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};
}

nameSpace1.genPara = function (scale)
{
    var pts = [];
    var s = scale || 1;
    var i;
    for (i = 0; i <= 200; i++)
    {
        pts.push({x: s * (100 - i) / 50, y: s * s * (100 - i) * (100 - i) / 2500, z: 0});
    }
    var eds = [];
    for (i = 0; i < 200; i++)
        eds.push({a: i, b: i + 1});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};

}
nameSpace1.twoPoints = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 1, y: 1, z: 0});
    pts.push({x: -1, y: 1, z: 0});
    eds.push({a: 0, b: 0});
    eds.push({a: 1, b: 1});
    return {points: pts, edges: eds, polygons: pols};
}

nameSpace1.main = function ()
{
    // get the canvas DOM element and the 2D drawing context
    var canvas = document.getElementById('canvas1');

    // create the scene and setup camera, perspective and viewport
    var scene = new Phoria.Scene();
    scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.width = canvas.width;
    scene.viewport.height = canvas.height;

    var renderer = new Phoria.CanvasRenderer(canvas);
    var c = nameSpace1.genCircle(1);
    var circle = Phoria.Entity.create({
        points: c.points,
        edges: c.edges,
        polygons: c.polygons,
        style: {
            id: "circle plain red",
            color: [128, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    var p = nameSpace1.genPara(1);
    var gen = Phoria.Entity.create({
        points: p.points,
        edges: p.edges,
        polygons: p.polygons,
        style: {
            id: "para plain green",
            color: [0, 128, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    Phoria.Entity.debug(gen, {
        showAxis: true
    });

    var tp = nameSpace1.twoPoints();
    var TP = Phoria.Entity.create({
        points: tp.points,
        edges: tp.edges,
        polygons: tp.polygons,
        style: {
            id: "para plain green",
            color: [256, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'point'
        }
    });

    scene.graph.push(gen);
    scene.graph.push(circle);
    scene.graph.push(TP);
    scene.graph.push(new Phoria.DistantLight());


    var fnAnimate = function () {
        requestAnimFrame(fnAnimate);
        // rotate local matrix of the cube
        gen.rotateY(0.5 * Phoria.RADIANS);
        TP.rotateY(0.5 * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        scene.modelView();
        renderer.render(scene);
    }
    //requestAnimFrame(fnAnimate);
    // start animation
    requestAnimFrame(fnAnimate);
}

nameSpace1.main();
