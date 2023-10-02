var nameSpace4 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;




nameSpace4.generateCone = function (scale)
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

nameSpace4.generateCercle = function (scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    for (i = 0; i <= 360; i++)
    {
        alpha = i * Phoria.RADIANS;
        pts.push({x: s * Math.cos(alpha), y: s, z: s * Math.sin(alpha)});
    }
    var eds = [];
    for (i = 0; i < 360; i++)
        eds.push({a: i, b: i + 1});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};
}
nameSpace4.generatePlan = function (scale)
{
    var s = scale || 1;
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 3, y: s, z: 3});
    pts.push({x: -3, y: s, z: 3});
    pts.push({x: -3, y: s, z: -3});
    pts.push({x: 3, y: s, z: -3});
    pts.push ({x: 0, y: s, z: 0}); 
    eds.push({a:4,b:4});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

// get the canvas DOM element and the 2D drawing context
nameSpace4.canvas = document.getElementById('canvas4');

// create the scene and setup camera, perspective and viewport
nameSpace4.scene = new Phoria.Scene();
nameSpace4.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace4.scene.perspective.aspect = nameSpace4.canvas.width / nameSpace4.canvas.height;
nameSpace4.scene.viewport.width = nameSpace4.canvas.width;
nameSpace4.scene.viewport.height = nameSpace4.canvas.height;
nameSpace4.scene.perspective.fov = 35;// standard par défaut 
// create a canvas renderer
nameSpace4.renderer = new Phoria.CanvasRenderer(nameSpace4.canvas);
// add a light
nameSpace4.light = nameSpace4.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace4.decaleSphere = function (dx, dy, dz)
{
    var i, n, P;
    P = nameSpace4.s1.points;
    n = P.length;
    for (i = 0; i < n; i++)
    {
        P[i].x += dx;
        P[i].y += dy;
        P[i].z += dz;
    }
}


nameSpace4.main = function ()
{
    nameSpace4.cone = nameSpace4.generateCone(4);
    nameSpace4.cone1 = Phoria.Entity.create({
        points: nameSpace4.cone.points,
        edges: nameSpace4.cone.edges,
        polygons: nameSpace4.cone.polygons,
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

    nameSpace4.plan = nameSpace4.generatePlan(1+Math.sqrt(2));
    nameSpace4.plan1 = Phoria.Entity.create({
        points: nameSpace4.plan.points,
        edges: nameSpace4.plan.edges,
        polygons: nameSpace4.plan.polygons,
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

    nameSpace4.plan2 = Phoria.Entity.create({
        points: nameSpace4.plan.points,
        edges: nameSpace4.plan.edges,
        polygons: nameSpace4.plan.polygons,
        style: {
            id: "plan point yellow",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'point'
        }
    });
    nameSpace4.s1 = Phoria.Util.generateSphere(1, 32, 64);
    nameSpace4.decaleSphere(0,  Math.sqrt(2), 0);
    nameSpace4.sphere = Phoria.Entity.create({
        points: nameSpace4.s1.points,
        edges: nameSpace4.s1.edges,
        polygons: nameSpace4.s1.polygons,
        style: {
            color: [0, 0, 256],
            opacity:0.3,
            //diffuse: 1,
            //specular: 64,
            //shademode: "lightsource", //gouraud?
            drawmode: 'wireframe'
        }
    });
    nameSpace4.tan = nameSpace4.generateCercle(1/Math.sqrt(2));
    nameSpace4.tan1 = Phoria.Entity.create({
        points: nameSpace4.tan.points,
        edges: nameSpace4.tan.edges,
        polygons: nameSpace4.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    nameSpace4.scene.graph.push(nameSpace4.cone1);
    nameSpace4.scene.graph.push(nameSpace4.plan1);
    nameSpace4.scene.graph.push(nameSpace4.plan2);
    nameSpace4.scene.graph.push(nameSpace4.sphere);
    nameSpace4.scene.graph.push(nameSpace4.tan1);

    Phoria.Entity.debug(nameSpace4.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace4.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace4.pause = false;
    var fnAnimate = function () {
        nameSpace4.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace4.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.sphere.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace4.scene.modelView();
        nameSpace4.renderer.render(nameSpace4.scene);

    };
    var tourne4 = function (vh,vv)
    {
         // rotate local matrix of the cube
        rot.nowx += (rot.velx = (vh- rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (vv - rot.z - rot.nowz) * rot.ratio);

        nameSpace4.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.sphere.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace4.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace4.scene.modelView();
        nameSpace4.renderer.render(nameSpace4.scene);
    }
        for (i=100;i<600;i+=100)
    for (j=200;j<800;j+=100)
    {tourne4(i,j);
     }
    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace4.main();