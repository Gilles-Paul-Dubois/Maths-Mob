
var nameSpace2 = {};

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };


nameSpace2.genSquare = function (scale)
{
    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    pts.push({x: s, y: 0, z: 0});
    pts.push({x: 0, y: 0, z: s});
    pts.push({x: -s, y: 0, z: 0});
    pts.push({x: 0, y: 0, z: -s});

    pts.push({x: s-2, y: -2, z: 0});
    pts.push({x: 0-2, y: -2, z: s});
    pts.push({x: -s-2, y: -2, z: 0});
    pts.push({x: 0-2, y: -2, z: -s});
    var eds = [];
    for (i = 0; i < 3; i++)
        eds.push({a: i, b: i + 1});
    eds.push({a: 3, b: 0});

    for (i = 4; i < 7; i++)
        eds.push({a: i, b: i + 1});
    eds.push({a: 7, b: 4});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};

}

nameSpace2.genDelta = function (scale)
{
    var s = scale || 1;
    var pts = [], eds = [], pols = [];
    pts.push({x: s, y: 0, z: 0, name: 'M'});
    pts.push({x: s+2, y: 2, z: 0});
    pts.push({x: s-2, y: -2, z: 0});
    pts.push({x: s+8, y: 8, z: 0});
    pts.push({x: s-8, y: -8, z: 0});
    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 2});
    eds.push({a: 0, b: 0});
    eds.push({a: 1, b: 3});
    eds.push({a: 2, b: 4});

    return {points: pts, edges: eds, polygons: pols};


}

nameSpace2.main = function ()
{
    // get the canvas DOM element and the 2D drawing context
    var canvas = document.getElementById('canvas2');

    // create the scene and setup camera, perspective and viewport
    var scene = new Phoria.Scene();
    scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.width = canvas.width;
    scene.viewport.height = canvas.height;

    var renderer = new Phoria.CanvasRenderer(canvas);

    var b = nameSpace2.genSquare(2);
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

    var g = nameSpace2.genDelta(2);
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

    var generatrice2 = Phoria.Entity.create({
        points: g.points,
        edges: g.edges,
        polygons: g.polygons,
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

    var t = 0;
    var fnAnimate = function () {
        // rotate local matrix of the cube
        requestID = requestAnimFrame(fnAnimate);
        t = (t + 1) % 360;
        var T = Math.tan(t * Phoria.RADIANS);
        if (t < 90)
        {
            generatrice1.points[0] = {x: 2 / (1 + T), y: 0, z: 2 * T / (1 + T)};

        }
        else if (t == 90)
        {
            generatrice1.points[0] = {x: 0, y: 0, z: 2};
        }
        else if (t < 180)
        {
            generatrice1.points[0] = {x: 2 / (T - 1), y: 0, z: 2 * T / (T - 1)};
        }
        else if (t < 270)
        {
            generatrice1.points[0] = {x: -2 / (1 + T), y: 0, z: -2 * T / (1 + T)};
        }
        else if (t == 270)
        {
            generatrice1.points[0] = {x: 0, y: 0, z: -2};
        }
        else
        {
            generatrice1.points[0] = {x: -2 / (T - 1), y: 0, z: -2 * T / (T - 1)};
        }
        var X = generatrice1.points[0].x;
        var Z = generatrice1.points[0].z;
        generatrice1.points[1] = {x: X+2, y: 2, z: Z };
        generatrice1.points[2] = {x: X-2, y: -2, z: Z };
        generatrice1.points[3] = {x: X+8, y: 8, z: Z };
        generatrice1.points[4] = {x: X-8, y: -8, z: Z};

        //        generatrice1.rotateY(0.5 * Phoria.RADIANS);
//        generatrice2.rotateY(0.5 * Phoria.RADIANS);

        // execute the model view 3D pipeline and render the scene
        scene.modelView();
        renderer.render(scene);

    }
    fnAnimate();

};


nameSpace2.main();
