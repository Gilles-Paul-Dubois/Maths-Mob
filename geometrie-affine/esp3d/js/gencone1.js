
var nameSpace3 = {};

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };


nameSpace3.genCircle = function (scale)
{
    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    for (i = 0; i <= 360; i++)
    {
        alpha = i * Phoria.RADIANS;
        pts.push({x: s * Math.cos(alpha), y: 0, z: s * Math.sin(alpha)});
    }
    var eds = [];
    for (i = 0; i < 360; i++)
        eds.push({a: i, b: i + 1});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};

}

nameSpace3.genDelta = function (scale)
{
    var s = scale || 1;
    var pts = [], eds = [], pols = [];
    pts.push({x: s, y: 0, z: 0, name: 'M'});
    pts.push({x: 0, y: 2, z: 0});
    //pts.push({x: 2*s, y: -2, z: 0});
    pts.push({x: 6 * s, y: -10, z: 0});
    pts.push({x: -4 * s, y: 10, z: 0});
    eds.push({a: 1, b: 0});
    //eds.push({a: 1, b: 2});
    eds.push({a: 1, b: 2});
    eds.push({a: 1, b: 3});
    eds.push({a: 0, b: 0});

    return {points: pts, edges: eds, polygons: pols};
}

nameSpace3.genDelta2 = function (scale)
{
    var s = scale || 1;
    var pts = [], eds = [], pols = [];
    pts.push({x: s, y: 0, z: 0, name: 'M'});
    pts.push({x: 0, y: 2, z: 0, name:'S'});
    eds.push({a: 1, b: 0});

    return {points: pts, edges: eds, polygons: pols};
}
nameSpace3.main = function ()
{
    // get the canvas DOM element and the 2D drawing context
    var canvas = document.getElementById('canvas3');

    // create the scene and setup camera, perspective and viewport
    var scene = new Phoria.Scene();
    scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.width = canvas.width;
    scene.viewport.height = canvas.height;

    var renderer = new Phoria.CanvasRenderer(canvas);

    var b = nameSpace3.genCircle(2);
    var base = Phoria.Entity.create({
        points: b.points,
        edges: b.edges,
        polygons: b.polygons,
        style: {
            id: "circle plain green",
            color: [0, 128, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    Phoria.Entity.debug(base, {
        showAxis: true
    });

    var g = nameSpace3.genDelta(2);
    var generatrice1 = Phoria.Entity.create({
        points: g.points,
        edges: g.edges,
        polygons: g.polygons,
        style: {
            id: "droite noire",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });


    var g2 = nameSpace3.genDelta2(2);
    var generatrice2 = Phoria.Entity.create({
        points: g2.points,
        edges: g2.edges,
        polygons: g2.polygons,
        style: {
            id: "points rouges",
            color: [256, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'point'
        }
    });

    scene.graph.push(base);
    scene.graph.push(generatrice1);
    scene.graph.push(generatrice2);
    scene.graph.push(new Phoria.DistantLight());

    var pause = false;
    var fnAnimate = function () {
        if (!pause)
        {
            // rotate local matrix of the cube
            generatrice1.rotateY(0.5 * Phoria.RADIANS);
            generatrice2.rotateY(0.5 * Phoria.RADIANS);


            // execute the model view 3D pipeline and render the scene
            scene.modelView();
            renderer.render(scene);
        }
        requestAnimFrame(fnAnimate);
    };


    // start animation
    requestAnimFrame(fnAnimate);
}

nameSpace3.main();
