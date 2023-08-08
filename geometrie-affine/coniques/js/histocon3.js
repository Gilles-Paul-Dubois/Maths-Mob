var nameSpace3 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;




nameSpace3.generateCone = function (scale)
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

nameSpace3.generateCercle = function (scale)
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
nameSpace3.generatePlan = function (scale)
{
    var s = scale || 1;
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 4, y: s, z: 4});
    pts.push({x: -4, y: s, z: 4});
    pts.push({x: -4, y: s, z: -4});
    pts.push({x: 4, y: s, z: -4});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

// get the canvas DOM element and the 2D drawing context
nameSpace3.canvas = document.getElementById('canvas3');

// create the scene and setup camera, perspective and viewport
nameSpace3.scene = new Phoria.Scene();
nameSpace3.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace3.scene.perspective.aspect = nameSpace3.canvas.width / nameSpace3.canvas.height;
nameSpace3.scene.viewport.width = nameSpace3.canvas.width;
nameSpace3.scene.viewport.height = nameSpace3.canvas.height;
nameSpace3.scene.perspective.fov = 35;// standard par défaut 
// create a canvas renderer
nameSpace3.renderer = new Phoria.CanvasRenderer(nameSpace3.canvas);
// add a light
nameSpace3.light = nameSpace3.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace3.decaleSphere = function (dx, dy, dz)
{
    var i, n, P;
    P = nameSpace3.s1.points;
    n = P.length;
    for (i = 0; i < n; i++)
    {
        P[i].x += dx;
        P[i].y += dy;
        P[i].z += dz;
    }
}


nameSpace3.main = function ()
{
    nameSpace3.cone = nameSpace3.generateCone(4);
    nameSpace3.cone1 = Phoria.Entity.create({
        points: nameSpace3.cone.points,
        edges: nameSpace3.cone.edges,
        polygons: nameSpace3.cone.polygons,
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

    nameSpace3.plan = nameSpace3.generatePlan(Math.sqrt(2));
    nameSpace3.plan1 = Phoria.Entity.create({
        points: nameSpace3.plan.points,
        edges: nameSpace3.plan.edges,
        polygons: nameSpace3.plan.polygons,
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

    nameSpace3.s1 = Phoria.Util.generateSphere(2, 32, 64);
    nameSpace3.decaleSphere(0, 2 * Math.sqrt(2), 0);
    nameSpace3.sphere = Phoria.Entity.create({
        points: nameSpace3.s1.points,
        edges: nameSpace3.s1.edges,
        polygons: nameSpace3.s1.polygons,
        style: {
            color: [0, 0, 256],
            opacity:0.3,
            //diffuse: 1,
            //specular: 64,
            //shademode: "lightsource", //gouraud?
            drawmode: 'wireframe'
        }
    });
    nameSpace3.tan = nameSpace3.generateCercle(Math.sqrt(2));
    nameSpace3.tan1 = Phoria.Entity.create({
        points: nameSpace3.tan.points,
        edges: nameSpace3.tan.edges,
        polygons: nameSpace3.tan.polygons,
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
    nameSpace3.scene.graph.push(nameSpace3.cone1);
    nameSpace3.scene.graph.push(nameSpace3.plan1);
    nameSpace3.scene.graph.push(nameSpace3.sphere);
    nameSpace3.scene.graph.push(nameSpace3.tan1);

    Phoria.Entity.debug(nameSpace3.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace3.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace3.pause = false;
    var fnAnimate = function () {
        nameSpace3.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace3.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.sphere.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace3.scene.modelView();
        nameSpace3.renderer.render(nameSpace3.scene);

    };
    var tourne3 = function (vh,vv)
    {
         // rotate local matrix of the cube
        rot.nowx += (rot.velx = (vh- rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (vv - rot.z - rot.nowz) * rot.ratio);

        nameSpace3.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.sphere.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace3.scene.modelView();
        nameSpace3.renderer.render(nameSpace3.scene);

    }
    
    for (i=100;i<600;i+=100)
    for (j=200;j<800;j+=100)
    {tourne3(i,j);
     }
    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace3.main();