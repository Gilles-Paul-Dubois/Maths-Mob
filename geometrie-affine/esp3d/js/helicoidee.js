
var nameSpace8 = {};

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };


nameSpace8.genCircle = function (scale)
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

nameSpace8.genDelta = function (scale)
{
    var s = scale || 1;
    var pts = [], eds = [], pols = [];
    pts.push({x: s, y: 0, z: 0});
    pts.push({x: 0, y: 0, z: 0});
    pts.push({x: 0, y: 0, z: 0, name: 'O'});
    pts.push({x: 0, y: 2, z: 0, name: 'S'});

    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3})
    return {points: pts, edges: eds, polygons: pols};


}

nameSpace8.main = function ()
{
    // get the canvas DOM element and the 2D drawing context
    var canvas = document.getElementById('canvas8');

    // create the scene and setup camera, perspective and viewport
    var scene = new Phoria.Scene();
    scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.width = canvas.width;
    scene.viewport.height = canvas.height;

    var renderer = new Phoria.CanvasRenderer(canvas);

    var b = nameSpace8.genCircle(2);
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
        //showAxis: true
    });

    var g = nameSpace8.genDelta(2);
    var generatrice1 = Phoria.Entity.create({
        points: g.points,
        edges: g.edges,
        polygons: g.polygons,
        style: {
            id: "droite noire",
            color: [256, 0, 0],
            //texture: 0,
            opacity: 0.3,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });

    scene.graph.push(base);
    scene.graph.push(generatrice1);
    scene.graph.push(new Phoria.DistantLight());

    var t = 0;
    var fnAnimate = function () {

        t = (t + 1) % 360;
        if (t == 0)
        {   g = nameSpace8.genDelta(2);
            generatrice1 = Phoria.Entity.create({
                points: g.points,
                edges: g.edges,
                polygons: g.polygons,
                style: {
                    id: "droite noire",
                    color: [256, 0, 0],
                    //texture: 0,
                    opacity: 0.3,
                    //fillmode: "fill",
                    doublesided: true,
                    drawmode: 'wireframe'
                }
            });
            scene.graph = [];
            scene.graph.push(base);
            scene.graph.push(generatrice1);
            scene.graph.push(new Phoria.DistantLight());
            scene.modelView();
            renderer.render(scene);
        }
        T = t * Phoria.RADIANS;
        var n = generatrice1.points.length;
        generatrice1.points.push({x: 2 * Math.cos(T), y: t / 180, z: 2 * Math.sin(T)});
        generatrice1.points.push({x: 0, y: t / 180, z: 0});
        generatrice1.edges.push({a: n, b: n + 1});

        // execute the model view 3D pipeline and render the scene
        scene.modelView();
        renderer.render(scene);

        requestAnimFrame(fnAnimate);
    };


    // start animation
    requestAnimFrame(fnAnimate);
}

nameSpace8.main();
