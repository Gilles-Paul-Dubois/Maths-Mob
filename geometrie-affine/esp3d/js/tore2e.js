
var nameSpace5 = {};

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

nameSpace5.genCircle = function (scale)
{
    var pts = [];
    var s = scale || 1;
    var i;
    for (i = 0; i < 360; i++)
    {
        pts.push({x: s * Math.cos(i * Phoria.RADIANS), y: 0, z: s * Math.sin(i * Phoria.RADIANS)});
    }
    var eds = [];
    for (i = 0; i < 359; i++)
        eds.push({a: i, b: i + 1});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};
}

nameSpace5.genTore = function (scale)
{
    var pts = [];
    var s = scale || 1;
    var x, y, z, X, Y, Z, k;
    var THETA, sin, cos;
    var X1, Z1;
    var i, j;
    var eds = [];
    var n1, n2;
    for (var theta = 0; theta < 360; theta = theta + 2)
    {
        n1 = pts.length;
        THETA = theta * Phoria.RADIANS;
        sin = Math.sin(THETA);
        cos = Math.cos(THETA);
        for (i = 0; i < 360; i = i + 2)
        {
            j = i * Phoria.RADIANS;
            x = 2 + s * Math.cos(j);
            y = s * Math.sin(j);
            z = 0;
            Z = 0;
            X1 = cos * x;
            Z1 = sin * x;
            pts.push({x: X1, y: y, z: Z1});

        }
        n2 = pts.length;
        for (i = n1; i < n2 - 1; i++)
            eds.push({a: i, b: i + 1});
    }
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};

}

nameSpace5.main = function ()
{
    // get the canvas DOM element and the 2D drawing context
    var canvas = document.getElementById('canvas5');

    // create the scene and setup camera, perspective and viewport
    var scene = new Phoria.Scene();
    scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.width = canvas.width;
    scene.viewport.height = canvas.height;

    var renderer = new Phoria.CanvasRenderer(canvas);
    var h = nameSpace5.genTore(1);
    var gen = Phoria.Entity.create({
        points: h.points,
        edges: h.edges,
        polygons: h.polygons,
        style: {
            id: "hyper purple wire",
            color: [153, 51, 153],
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

    //scene.graph.push(circle);
    scene.graph.push(gen);
    scene.graph.push(new Phoria.DistantLight());

    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(canvas);
    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };
    var fnAnimate = function () {


        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);

        gen.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        scene.modelView();
        renderer.render(scene);
        requestAnimFrame(fnAnimate);
    }
    //requestAnimFrame(fnAnimate);
    // start animation
    requestAnimFrame(fnAnimate);
}

nameSpace5.main();
