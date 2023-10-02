var nameSpace1 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace1.range1 = document.getElementById("myRange1");
nameSpace1.range1.value = 1;

nameSpace1.changec = function (val)
{
    //nameSpace1.pause=true;
    cancelAnimFrame(nameSpace1.requestID);
    nameSpace1.c = parseFloat(val);
    nameSpace1.scene.graph = [];
    nameSpace1.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace1.main();

}

nameSpace1.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        pts.push({x: s * Math.cos(t), y: s, z: s * Math.sin(t)})
    }
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        pts.push({x: -s * Math.cos(t), y: -s, z: -s * Math.sin(t)})
    }
    for (i = 0; i < 180; i++)
        pols.push({vertices: [0, i + 1, i + 2]});
    for (i = 0; i < 181; i++)
        pols.push({vertices: [0, i + 181, i + 182]});

    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
nameSpace1.c = 1;
nameSpace1.generatePlan = function (scale)
{
    var s = scale || 1;
    var c = nameSpace1.c;
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: s, y: -2 * c * s + c, z: s});
    pts.push({x: s, y: c, z: -s});
    pts.push({x: -s, y: 2 * c * s + c, z: -s});
    pts.push({x: -s, y: c, z: s});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

nameSpace1.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var C, S;
    var i;
    var t;
    var lambda;
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        C = Math.cos(t);
        S = Math.sin(t);
        lambda = 1 / (C + S + 1 / nameSpace1.c);
        if (lambda > 0)
        {
            pts.push({x: lambda * C, y: lambda, z: lambda * S});
        }

    }
    var n = pts.length;
    for (i = 0; i < n - 1; i++)
        eds.push({a: i, b: i + 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}

nameSpace1.generateInter2 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var C, S;
    var i;
    var t;
    var lambda;
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        C = Math.cos(t);
        S = Math.sin(t);
        lambda = 1 / (C + S + 1 / nameSpace1.c);
        if (lambda < 0)
        {
            pts.push({x: lambda * C, y: lambda, z: lambda * S});
        }

    }
    var n = pts.length;
    for (i = 0; i < n - 1; i++)
        eds.push({a: i, b: i + 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
// get the canvas DOM element and the 2D drawing context
nameSpace1.canvas = document.getElementById('canvas1');

// create the scene and setup camera, perspective and viewport
nameSpace1.scene = new Phoria.Scene();
nameSpace1.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace1.scene.perspective.aspect = nameSpace1.canvas.width / nameSpace1.canvas.height;
nameSpace1.scene.viewport.width = nameSpace1.canvas.width;
nameSpace1.scene.viewport.height = nameSpace1.canvas.height;
nameSpace1.scene.perspective.fov = 35;// standard par défaut 
// create a canvas renderer
nameSpace1.renderer = new Phoria.CanvasRenderer(nameSpace1.canvas);
// add a light
nameSpace1.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));




nameSpace1.main = function ()
{
    nameSpace1.cone = nameSpace1.generateCone(4);
    nameSpace1.cone1 = Phoria.Entity.create({
        points: nameSpace1.cone.points,
        edges: nameSpace1.cone.edges,
        polygons: nameSpace1.cone.polygons,
        style: {
            id: "Cube plain green",
            color: [0, 256, 0],
            //texture: 0,
            opacity: 0.4,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'solid'
        }
    });
    nameSpace1.plan = nameSpace1.generatePlan(4);
    nameSpace1.plan1 = Phoria.Entity.create({
        points: nameSpace1.plan.points,
        edges: nameSpace1.plan.edges,
        polygons: nameSpace1.plan.polygons,
        style: {
            id: "plan plain red",
            color: [256, 0, 0],
            //texture: 0,
            opacity: 0.4,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'solid'
        }
    });

    nameSpace1.data1 = nameSpace1.generateInter1();
    nameSpace1.int1 = Phoria.Entity.create({
        points: nameSpace1.data1.points,
        edges: nameSpace1.data1.edges,
        polygons: nameSpace1.data1.polygons,
        style: {
            id: "curv plain black",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });

    nameSpace1.data2 = nameSpace1.generateInter2();
    nameSpace1.int2 = Phoria.Entity.create({
        points: nameSpace1.data2.points,
        edges: nameSpace1.data2.edges,
        polygons: nameSpace1.data2.polygons,
        style: {
            id: "curv plain black",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });

    nameSpace1.scene.graph.push(nameSpace1.cone1);
    nameSpace1.scene.graph.push(nameSpace1.plan1);
    nameSpace1.scene.graph.push(nameSpace1.int1);
    nameSpace1.scene.graph.push(nameSpace1.int2);

    Phoria.Entity.debug(nameSpace1.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace1.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace1.pause = false;
    var fnAnimate = function () {
        nameSpace1.requestID = requestAnimFrame(fnAnimate);
//        if (!nameSpace1.pause)
//        {
            // rotate local matrix of the cube
            rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
            rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
            rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);

            nameSpace1.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            nameSpace1.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            nameSpace1.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            nameSpace1.int2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);

            // execute the model view 3D pipeline and render the scene
            nameSpace1.scene.modelView();
            nameSpace1.renderer.render(nameSpace1.scene);
//        }
//        else
//            cancelAnimFrame(nameSpace1.requestID);
    };
 
    // start animation
    requestAnimFrame(fnAnimate);
}
nameSpace1.main();