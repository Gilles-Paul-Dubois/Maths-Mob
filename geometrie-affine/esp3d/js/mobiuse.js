
var nameSpace6 = {};

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };


nameSpace6.genCircle = function (scale)
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

nameSpace6.genDelta = function (scale)
{
    var s = scale || 1;
    var pts = [], eds = [], pols = [];
    pts.push({x: s, y: 0, z: 0});
    pts.push({x: s, y: 1, z: 0});
    pts.push({x: s, y: -1, z: 0});
    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 2});
    return {points: pts, edges: eds, polygons: pols};


}

nameSpace6.main = function ()
{
    // get the canvas DOM element and the 2D drawing context
    var canvas = document.getElementById('canvas6');

    // create the scene and setup camera, perspective and viewport
    var scene = new Phoria.Scene();
    scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.width = canvas.width;
    scene.viewport.height = canvas.height;

    var renderer = new Phoria.CanvasRenderer(canvas);
    var radius;
    radius = 3;
    var stick;
    stick = 1;
    var b = nameSpace6.genCircle(radius);
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

    var generatrice1 = Phoria.Entity.create({
        points: [],
        edges: [],
        polygons: [],
        style: {
            id: "droite  verte",
            color: [0, 128, 0],
            //texture: 0,
            opacity: 0.5,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    //scene.graph.push(base);
    scene.graph.push(generatrice1);
    //scene.graph.push(generatrice2);
    scene.graph.push(new Phoria.DistantLight());
    var t = 0;
    var s;
    var fnAnimate = function () {

        t = (t + 1) % 360;
        if (t == 0)
        {
            generatrice1 = Phoria.Entity.create({
                points: [],
                edges: [],
                polygons: [],
                style: {
                    id: "droite  verte",
                    color: [0, 128, 0],
                    //texture: 0,
                    opacity: 0.5,
                    //fillmode: "fill",
                    doublesided: true,
                    drawmode: 'wireframe'
                }
            });
            
            scene.graph = [];
            //scene.graph.push(base);
            scene.graph.push(generatrice1);
            scene.graph.push(new Phoria.DistantLight());
            scene.modelView();
            renderer.render(scene);
        }

        else
        {
            T = t * Phoria.RADIANS;
            s = t / 2;
            S = s * Phoria.RADIANS;
            var n = generatrice1.points.length;
            generatrice1.points.push({x: radius * Math.cos(T), y: 0, z: radius * Math.sin(T)});
            generatrice1.points.push({x: radius * Math.cos(T) + stick * Math.sin(S) * Math.cos(T), y: Math.cos(S), z: radius * Math.sin(T) + stick * Math.sin(S) * Math.sin(T)});
            generatrice1.points.push({x: radius * Math.cos(T) - stick * Math.sin(S) * Math.cos(T), y: -Math.cos(S), z: radius * Math.sin(T) - stick * Math.sin(S) * Math.sin(T)});
            generatrice1.edges.push({a: n, b: n + 1});
            generatrice1.edges.push({a: n, b: n + 2});
            scene.modelView();
            renderer.render(scene);
        }
        requestAnimFrame(fnAnimate);
    };


    // start animation
    requestAnimFrame(fnAnimate);
}

nameSpace6.main();
