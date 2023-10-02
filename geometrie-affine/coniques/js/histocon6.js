var nameSpace6 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace6.range1 = document.getElementById("myRange61");
nameSpace6.range1.value = 135;
nameSpace6.range2 = document.getElementById("myRange62");
nameSpace6.range2.value = 45;
nameSpace6.theta = 45;
nameSpace6.phi = 45;
nameSpace6.alpha = 135; // paramètre angulaire du point générique de la parabole
nameSpace6.changeThetaPhi = function (val)
{
    cancelAnimFrame(nameSpace6.requestID);
    nameSpace6.theta = parseFloat(val);
    nameSpace6.phi = 90-parseFloat(val);
    nameSpace6.scene.graph = [];
    nameSpace6.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace6.main();
}
nameSpace6.changeM = function (val)
{
    cancelAnimFrame(nameSpace6.requestID);
    nameSpace6.alpha = parseFloat(val);
    nameSpace6.scene.graph = [];
    nameSpace6.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace6.main();
}
nameSpace6.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    var T = Math.tan(nameSpace6.theta * Phoria.RADIANS);
    for (i = 0; i <= 360; i = i + 2)
    {
        t = i * Phoria.RADIANS;
        pts.push({x: s * T * Math.cos(t), y: s, z: s * T * Math.sin(t)})
    }

    for (i = 0; i < 180; i++)
        pols.push({vertices: [0, i + 1, i + 2]});

    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}

nameSpace6.generateCercle = function (scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    var r = nameSpace6.H1*Math.tan(nameSpace6.theta* Phoria.RADIANS);
    for (i = 0; i <= 360; i++)
    {
        alpha = i * Phoria.RADIANS;
        pts.push({x: r * Math.cos(alpha), y: s, z: r * Math.sin(alpha)});
    }
    var eds = [];
    for (i = 0; i < 360; i++)
        eds.push({a: i, b: i + 1});
    var pols = [];
    return {points: pts, edges: eds, polygons: pols};
}
nameSpace6.generatePlan = function ()
{
    var t = nameSpace6.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: 3, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: 3, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: -3 + 2, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: -3 + 2, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

nameSpace6.generatePlan2 = function ()
{
    var t = nameSpace6.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: nameSpace6.H1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: nameSpace6.H1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace6.H1, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace6.H1, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace6.generateSegment = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace6.phi * Phoria.RADIANS;
    var C = Math.cos(t);
    var S = Math.sin(t);
    var Y = nameSpace6.H1;
    pts.push({x: (C * Y - 1) / S, y: Y, z: 2, name: 'D'});
    pts.push({x: (C * Y - 1) / S, y: Y, z: -2});
    eds.push({a: 0, b: 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols};

}
nameSpace6.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace6.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace6.theta * Phoria.RADIANS);
    var i;
    var ir;
    var lambda;
    for (i = 0; i < 360; i++)
    {
        ir = i * Phoria.RADIANS;
        lambda = -1 / (2 * T * S * Math.cos(ir) - 2 * C);
        pts.push({x: 2 * lambda * T * Math.cos(ir), y: 2 * lambda, z: 2 * lambda * T * Math.sin(ir)});
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


nameSpace6.calCentres = function ()
{
    var t1 = nameSpace6.theta * Phoria.RADIANS;
    var t2 = nameSpace6.phi * Phoria.RADIANS;
    nameSpace6.h1 = 1 / (Math.sin(t1) + Math.cos(t2));

    nameSpace6.R1 = Math.abs(nameSpace6.h1) * Math.sin(t1);

    nameSpace6.H1 = nameSpace6.h1 * Math.cos(t1) * Math.cos(t1);
}
// get the canvas DOM element and the 2D drawing context
nameSpace6.canvas = document.getElementById('canvas6');


// create the scene and setup camera, perspective and viewport
nameSpace6.scene = new Phoria.Scene();
nameSpace6.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace6.scene.perspective.aspect = nameSpace6.canvas.width / nameSpace6.canvas.height;
nameSpace6.scene.viewport.width = nameSpace6.canvas.width;
nameSpace6.scene.viewport.height = nameSpace6.canvas.height;
nameSpace6.scene.perspective.fov = 20;// standard par défaut 
// create a canvas renderer
nameSpace6.renderer = new Phoria.CanvasRenderer(nameSpace6.canvas);
// add a light
nameSpace6.light = nameSpace6.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace6.decaleSphere = function (dx, dy, dz)
{
    var i, n, P;
    P = nameSpace6.s1.points;
    n = P.length;
    for (i = 0; i < n; i++)
    {
        P[i].x += dx;
        P[i].y += dy;
        P[i].z += dz;
    }
}

nameSpace6.generateAllLines = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace6.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace6.theta * Phoria.RADIANS);
    var Y = nameSpace6.h1;
    var H = nameSpace6.H1;
    var ir = nameSpace6.alpha * Phoria.RADIANS;
    var X = (C * Y * T - T) / (C + S * T);
    var lambda = -1 / (2 * T * S * Math.cos(ir) - 2 * C);
    pts.push({x: 2 * lambda * T * Math.cos(ir), y: 2 * lambda, z: 2 * lambda * T * Math.sin(ir), name: 'M'}); // index 0
    pts.push({x: (C * H - 1) / S, y: H, z: 2 * lambda * T * Math.sin(ir), name: 'B'}); //index 1
    pts.push({x: 0, y: 0, z: 0, name: 'S'}); //index 2
    pts.push({x: 0, y: Y, z: 0, name: 'C'}); //index 3
    var beta = Y * S * S + C;
    var alpha = (C * beta - 1) / S;
    pts.push({x: alpha, y: beta, z: 0, name: 'F'}); // index 4
    var Fx, Fy, Fz;
    Fx = pts[4].x;
    Fy = pts[4].y;
    Fz = pts[4].z;

    pts.push({x: -Fx, y: 2 * Y - Fy, z: -Fz, name: 'G'}); // index 5

    var Mx, My, Mz;
    Mx = pts[0].x;
    My = pts[0].y;
    Mz = pts[0].z;
    var k = H / My;
    pts.push({x: k * Mx, y: H, z: k * Mz, name: 'A'}); // index 6

    var Bx, By, Bz;
    Bx = pts[1].x;
    By = pts[1].y;
    Bz = pts[1].z;
    pts.push({x: Bx, y: By, z: 0, name: 'I'}); // index 7
    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 2});
    eds.push({a: 3, b: 4});
    eds.push({a: 3, b: 5});
    eds.push({a: 1, b: 5});
    eds.push({a: 6, b: 6});
    eds.push({a: 4, b: 7});
    eds.push({a: 2, b: 7});
    eds.push({a: 2, b: 5});
    eds.push({a: 0, b: 4});
    pols.push({vertices: [4, 7, 2, 5]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
nameSpace6.main = function ()
{
    nameSpace6.cone = nameSpace6.generateCone(2);
    nameSpace6.cone1 = Phoria.Entity.create({
        points: nameSpace6.cone.points,
        edges: nameSpace6.cone.edges,
        polygons: nameSpace6.cone.polygons,
        style: {
            id: "Coneplain green",
            color: [0, 256, 0],
            //texture: 0,
            opacity: 0.4,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'solid'
        }
    });

    nameSpace6.plan = nameSpace6.generatePlan();
    nameSpace6.plan1 = Phoria.Entity.create({
        points: nameSpace6.plan.points,
        edges: nameSpace6.plan.edges,
        polygons: nameSpace6.plan.polygons,
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


    nameSpace6.calCentres();
    nameSpace6.s1 = Phoria.Util.generateSphere(nameSpace6.R1, 32, 64);
    nameSpace6.decaleSphere(0, nameSpace6.h1, 0);
    nameSpace6.sphere1 = Phoria.Entity.create({
        points: nameSpace6.s1.points,
        edges: nameSpace6.s1.edges,
        polygons: nameSpace6.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });
    nameSpace6.plane = nameSpace6.generatePlan2();
    nameSpace6.plan2 = Phoria.Entity.create({
        points: nameSpace6.plane.points,
        edges: nameSpace6.plane.edges,
        polygons: nameSpace6.plane.polygons,
        style: {
            id: "plan plain purple",
            color: [0, 256, 256],
            //texture: 0,
            opacity: 0.4,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'solid'
        }
    });
    nameSpace6.tan = nameSpace6.generateCercle(nameSpace6.H1);
    nameSpace6.tan1 = Phoria.Entity.create({
        points: nameSpace6.tan.points,
        edges: nameSpace6.tan.edges,
        polygons: nameSpace6.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace6.data1 = nameSpace6.generateInter1();
    nameSpace6.int1 = Phoria.Entity.create({
        points: nameSpace6.data1.points,
        edges: nameSpace6.data1.edges,
        polygons: nameSpace6.data1.polygons,
        style: {
            id: "curv plain black",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });
    nameSpace6.seg = nameSpace6.generateSegment();
    nameSpace6.seg1 = Phoria.Entity.create({
        points: nameSpace6.seg.points,
        edges: nameSpace6.seg.edges,
        polygons: nameSpace6.seg.polygons,
        style: {
            id: "curv plain black",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });
    nameSpace6.all = nameSpace6.generateAllLines();
    nameSpace6.all1 = Phoria.Entity.create({
        points: nameSpace6.all.points,
        edges: nameSpace6.all.edges,
        polygons: nameSpace6.all.polygons,
        style: {
            id: "curv plain black",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace6.all2 = Phoria.Entity.create({
        points: nameSpace6.all.points,
        edges: nameSpace6.all.edges,
        polygons: nameSpace6.all.polygons,
        style: {
            id: "curv plain black",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'point',
            objectsortmode: "front"
        }
    });

    nameSpace6.all3 = Phoria.Entity.create({
        points: nameSpace6.all.points,
        edges: nameSpace6.all.edges,
        polygons: nameSpace6.all.polygons,
        style: {
            id: "curv plain black",
            color: [256, 256, 0],
            //texture: 0,
            opacity: 0.5,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'solid',
            //objectsortmode: "front"
        }
    });
    nameSpace6.scene.graph.push(nameSpace6.cone1);
    nameSpace6.scene.graph.push(nameSpace6.plan1);
    nameSpace6.scene.graph.push(nameSpace6.plan2);
    nameSpace6.scene.graph.push(nameSpace6.sphere1);
    nameSpace6.scene.graph.push(nameSpace6.tan1);
    nameSpace6.scene.graph.push(nameSpace6.int1);
    nameSpace6.scene.graph.push(nameSpace6.seg1);
    nameSpace6.scene.graph.push(nameSpace6.all1);
    nameSpace6.scene.graph.push(nameSpace6.all2);
    nameSpace6.scene.graph.push(nameSpace6.all3);

    Phoria.Entity.debug(nameSpace6.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace6.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace6.pause = false;
    var fnAnimate = function () {
        nameSpace6.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace6.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.seg1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.all1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.all2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace6.all3.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace6.scene.modelView();
        nameSpace6.renderer.render(nameSpace6.scene);

    };

    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace6.main();