var nameSpace5 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

nameSpace5.theta = 40;
nameSpace5.phi = 30;


nameSpace5.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    var T = Math.tan(nameSpace5.theta * Phoria.RADIANS);
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        pts.push({x: s * T * Math.cos(t), y: s, z: s * T * Math.sin(t)})
    }
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        pts.push({x: -s * T * Math.cos(t), y: -s, z: -s * T * Math.sin(t)})
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

nameSpace5.generateCercle = function (scale)
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
nameSpace5.generatePlan = function ()
{
    var t = nameSpace5.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T + 1 / T, y: 3 + 1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T + 1 / T, y: 3 + 1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T, y: -3, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T, y: -3, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace5.calCentres = function ()
{
    var t1 = nameSpace5.theta * Phoria.RADIANS;
    var t2 = nameSpace5.phi * Phoria.RADIANS;
    nameSpace5.h1 = 1 / (Math.sin(t1) + Math.cos(t2));
    nameSpace5.R1 = Math.abs(nameSpace5.h1) * Math.sin(t1);
    if ((nameSpace5.theta + nameSpace5.phi) != 90)
    {
        nameSpace5.h2 = -1 / (Math.sin(t1) - Math.cos(t2));
        nameSpace5.R2 = Math.abs(nameSpace5.h2) * Math.sin(t1);
    }
}
// get the canvas DOM element and the 2D drawing context
nameSpace5.canvas = document.getElementById('canvas5');
nameSpace5.range1 = document.getElementById("myRange51");
nameSpace5.range1.value = 40;
nameSpace5.range2 = document.getElementById("myRange52");
nameSpace5.range1.value = 30;

nameSpace5.changetheta = function (val)
{
    cancelAnimFrame(nameSpace5.requestID);
    nameSpace5.theta = parseFloat(val);
    nameSpace5.scene.graph = [];
    nameSpace5.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace5.main();
}

nameSpace5.changephi = function (val)
{
    cancelAnimFrame(nameSpace5.requestID);
    nameSpace5.phi = parseFloat(val);
    nameSpace5.scene.graph = [];
    nameSpace5.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace5.main();
}
// create the scene and setup camera, perspective and viewport
nameSpace5.scene = new Phoria.Scene();
nameSpace5.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace5.scene.perspective.aspect = nameSpace5.canvas.width / nameSpace5.canvas.height;
nameSpace5.scene.viewport.width = nameSpace5.canvas.width;
nameSpace5.scene.viewport.height = nameSpace5.canvas.height;
nameSpace5.scene.perspective.fov = 60;// standard par défaut 
// create a canvas renderer
nameSpace5.renderer = new Phoria.CanvasRenderer(nameSpace5.canvas);
// add a light
nameSpace5.light = nameSpace5.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace5.decaleSphere = function (dx, dy, dz)
{
    var i, n, P;
    P = nameSpace5.s1.points;
    n = P.length;
    for (i = 0; i < n; i++)
    {
        P[i].x += dx;
        P[i].y += dy;
        P[i].z += dz;
    }
}


nameSpace5.main = function ()
{
    nameSpace5.cone = nameSpace5.generateCone(6);
    nameSpace5.cone1 = Phoria.Entity.create({
        points: nameSpace5.cone.points,
        edges: nameSpace5.cone.edges,
        polygons: nameSpace5.cone.polygons,
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

    nameSpace5.plan = nameSpace5.generatePlan();
    nameSpace5.plan1 = Phoria.Entity.create({
        points: nameSpace5.plan.points,
        edges: nameSpace5.plan.edges,
        polygons: nameSpace5.plan.polygons,
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

    nameSpace5.plan2 = Phoria.Entity.create({
        points: nameSpace5.plan.points,
        edges: nameSpace5.plan.edges,
        polygons: nameSpace5.plan.polygons,
        style: {
            id: "plan point yellow",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    nameSpace5.calCentres();
    nameSpace5.s1 = Phoria.Util.generateSphere(nameSpace5.R1, 16, 32);
    nameSpace5.decaleSphere(0, nameSpace5.h1, 0);
    nameSpace5.sphere1 = Phoria.Entity.create({
        points: nameSpace5.s1.points,
        edges: nameSpace5.s1.edges,
        polygons: nameSpace5.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.3,
            //diffuse: 1,
            //specular: 64,
            //shademode: "lightsource", //gouraud?
            drawmode: 'wireframe'
        }
    });

    if ((nameSpace5.theta + nameSpace5.phi) != 90)
    {
        nameSpace5.s1 = Phoria.Util.generateSphere(nameSpace5.R2, 32, 64);
        nameSpace5.decaleSphere(0, nameSpace5.h2, 0);
        nameSpace5.sphere2 = Phoria.Entity.create({
            points: nameSpace5.s1.points,
            edges: nameSpace5.s1.edges,
            polygons: nameSpace5.s1.polygons,
            style: {
                color: [0, 0, 256],
                opacity: 0.3,
                //diffuse: 1,
                //specular: 64,
                //shademode: "lightsource", //gouraud?
                drawmode: 'wireframe'
            }
        });
    }
    nameSpace5.tan = nameSpace5.generateCercle(1 / Math.sqrt(2));
    nameSpace5.tan1 = Phoria.Entity.create({
        points: nameSpace5.tan.points,
        edges: nameSpace5.tan.edges,
        polygons: nameSpace5.tan.polygons,
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
    nameSpace5.scene.graph.push(nameSpace5.cone1);
    nameSpace5.scene.graph.push(nameSpace5.plan1);
    //nameSpace5.scene.graph.push(nameSpace5.plan2);
    nameSpace5.scene.graph.push(nameSpace5.sphere1);
    if ((nameSpace5.theta + nameSpace5.phi) != 90)
    {
        nameSpace5.scene.graph.push(nameSpace5.sphere2);
    }
//    nameSpace5.scene.graph.push(nameSpace5.tan1);

    Phoria.Entity.debug(nameSpace5.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace5.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace5.pause = false;
    var fnAnimate = function () {
        nameSpace5.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);

        nameSpace5.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace5.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        //nameSpace5.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace5.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        if ((nameSpace5.theta + nameSpace5.phi) != 90)
        {
            nameSpace5.sphere2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        }

        nameSpace5.scene.modelView();
        nameSpace5.renderer.render(nameSpace5.scene);
 
    };
    var tourne5 = function (vh,vv)
    {
         // rotate local matrix of the cube
        rot.nowx += (rot.velx = (vh- rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (vv - rot.z - rot.nowz) * rot.ratio);

         nameSpace5.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace5.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        //nameSpace5.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace5.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        if ((nameSpace5.theta + nameSpace5.phi) != 90)
        {
            nameSpace5.sphere2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        }

        nameSpace5.scene.modelView();
        nameSpace5.renderer.render(nameSpace5.scene);
    }
        for (i=100;i<600;i+=100)
    for (j=200;j<800;j+=100)
    {tourne5(i,j);
     }
    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace5.main();