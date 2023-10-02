var nameSpace7 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace7.range1 = document.getElementById("myRange71");
nameSpace7.range1.value = 135;
nameSpace7.range2 = document.getElementById("myRange72");
nameSpace7.range2.value = 35;
nameSpace7.theta = 35;
nameSpace7.phi = 35;
nameSpace7.alpha = 135; // paramètre angulaire du point générique del'ellipse
nameSpace7.changeThetaPhi = function (val)
{
    cancelAnimFrame(nameSpace7.requestID);
    nameSpace7.theta = parseFloat(val);
    nameSpace7.scene.graph = [];
    nameSpace7.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace7.main();
}
nameSpace7.changeM = function (val)
{
    cancelAnimFrame(nameSpace7.requestID);
    nameSpace7.alpha = parseFloat(val);
    nameSpace7.scene.graph = [];
    nameSpace7.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace7.main();
}
nameSpace7.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    var T = Math.tan(nameSpace7.theta * Phoria.RADIANS);
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

nameSpace7.generateCercle = function (R, scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    var r = R * Math.tan(nameSpace7.theta * Phoria.RADIANS);
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
nameSpace7.generatePlan = function ()
{
    var t = nameSpace7.phi * Phoria.RADIANS;
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

nameSpace7.generatePlan2 = function ()
{
    var t = nameSpace7.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: nameSpace7.H1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: nameSpace7.H1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace7.H1, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace7.H1, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace7.generateSegment = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace7.phi * Phoria.RADIANS;
    var C = Math.cos(t);
    var S = Math.sin(t);
    var Y = nameSpace7.H1;
    pts.push({x: (C * Y - 1) / S, y: Y, z: 2, name: 'D'});
    pts.push({x: (C * Y - 1) / S, y: Y, z: -2});
    eds.push({a: 0, b: 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols};

}
nameSpace7.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace7.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace7.theta * Phoria.RADIANS);
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


nameSpace7.calCentres = function ()
{
    var t1 = nameSpace7.theta * Phoria.RADIANS;
    var t2 = nameSpace7.phi * Phoria.RADIANS;
    nameSpace7.h1 = 1 / (Math.sin(t1) + Math.cos(t2));
    nameSpace7.h2 = 1 / (Math.cos(t2) - Math.sin(t1));
    nameSpace7.R1 = Math.abs(nameSpace7.h1) * Math.sin(t1);
    nameSpace7.R2 = Math.abs(nameSpace7.h2) * Math.sin(t1);
    nameSpace7.H1 = nameSpace7.h1 * Math.cos(t1) * Math.cos(t1);
    nameSpace7.H2 = nameSpace7.h2 * Math.cos(t1) * Math.cos(t1);
}
// get the canvas DOM element and the 2D drawing context
nameSpace7.canvas = document.getElementById('canvas7');


// create the scene and setup camera, perspective and viewport
nameSpace7.scene = new Phoria.Scene();
nameSpace7.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace7.scene.perspective.aspect = nameSpace7.canvas.width / nameSpace7.canvas.height;
nameSpace7.scene.viewport.width = nameSpace7.canvas.width;
nameSpace7.scene.viewport.height = nameSpace7.canvas.height;
nameSpace7.scene.perspective.fov = 30;// standard par défaut 
// create a canvas renderer
nameSpace7.renderer = new Phoria.CanvasRenderer(nameSpace7.canvas);
// add a light
nameSpace7.light = nameSpace7.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace7.decaleSphere = function (sp, dx, dy, dz)
{
    var i, n, P;
    P = sp.points;
    n = P.length;
    for (i = 0; i < n; i++)
    {
        P[i].x += dx;
        P[i].y += dy;
        P[i].z += dz;
    }
}

nameSpace7.generateAllLines = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace7.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace7.theta * Phoria.RADIANS);
    var Y = nameSpace7.h1;
    var H = nameSpace7.H1;
    var ir = nameSpace7.alpha * Phoria.RADIANS;
    var X = (C * Y * T - T) / (C + S * T);
    var lambda = -1 / (2 * T * S * Math.cos(ir) - 2 * C);
    pts.push({x: 2 * lambda * T * Math.cos(ir), y: 2 * lambda, z: 2 * lambda * T * Math.sin(ir), name: 'M'}); // index 0
    pts.push({x: 0, y: 0, z: 0, name: 'S'}); //index 1
    pts.push({x: 0, y: Y, z: 0, name: 'C'}); //index 2
    var beta = Y * S * S + C;
    var alpha = (C * beta - 1) / S;
    pts.push({x: alpha, y: beta, z: 0, name: 'F1'}); // index 3
    var Mx, My, Mz;
    Mx = pts[0].x;
    My = pts[0].y;
    Mz = pts[0].z;
    var k = H / My;
    pts.push({x: k * Mx, y: H, z: k * Mz, name: 'A'}); // index 4
    var H2 = nameSpace7.H2;
    var Mx, My, Mz;
    Mx = pts[0].x;
    My = pts[0].y;
    Mz = pts[0].z;
    var k = H2 / My;
    pts.push({x: k * Mx, y: H2, z: k * Mz, name: 'B'}); // index 5
    var Y2 = nameSpace7.h2;
    var beta2 = Y2 * S * S + C;
    var alpha2 = (C * beta2 - 1) / S;
    pts.push({x: alpha2, y: beta2, z: 0, name: 'F2'}); // index 6
    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 1});
    eds.push({a: 3, b: 3});
    eds.push({a: 2, b: 3});
    eds.push({a: 0, b: 3});
    eds.push({a: 0, b: 4});
    eds.push({a: 0, b: 5});
    eds.push({a: 0, b: 6});

    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
nameSpace7.main = function ()
{
    nameSpace7.cone = nameSpace7.generateCone(4);
    nameSpace7.cone1 = Phoria.Entity.create({
        points: nameSpace7.cone.points,
        edges: nameSpace7.cone.edges,
        polygons: nameSpace7.cone.polygons,
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

    nameSpace7.plan = nameSpace7.generatePlan();
    nameSpace7.plan1 = Phoria.Entity.create({
        points: nameSpace7.plan.points,
        edges: nameSpace7.plan.edges,
        polygons: nameSpace7.plan.polygons,
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


    nameSpace7.calCentres();
    nameSpace7.s1 = Phoria.Util.generateSphere(nameSpace7.R1, 32, 64);
    nameSpace7.decaleSphere(nameSpace7.s1, 0, nameSpace7.h1, 0);
    nameSpace7.sphere1 = Phoria.Entity.create({
        points: nameSpace7.s1.points,
        edges: nameSpace7.s1.edges,
        polygons: nameSpace7.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });

    nameSpace7.s2 = Phoria.Util.generateSphere(nameSpace7.R2, 32, 64);
    nameSpace7.decaleSphere(nameSpace7.s2, 0, nameSpace7.h2, 0);
    nameSpace7.sphere2 = Phoria.Entity.create({
        points: nameSpace7.s2.points,
        edges: nameSpace7.s2.edges,
        polygons: nameSpace7.s2.polygons,
        style: {
            color: [0, 0, 256],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });
    nameSpace7.plane = nameSpace7.generatePlan2();
    nameSpace7.plan2 = Phoria.Entity.create({
        points: nameSpace7.plane.points,
        edges: nameSpace7.plane.edges,
        polygons: nameSpace7.plane.polygons,
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
    nameSpace7.tan = nameSpace7.generateCercle(nameSpace7.H1, nameSpace7.H1);
    nameSpace7.tan1 = Phoria.Entity.create({
        points: nameSpace7.tan.points,
        edges: nameSpace7.tan.edges,
        polygons: nameSpace7.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace7.tanbis = nameSpace7.generateCercle(nameSpace7.H2, nameSpace7.H2);
    nameSpace7.tan2 = Phoria.Entity.create({
        points: nameSpace7.tanbis.points,
        edges: nameSpace7.tanbis.edges,
        polygons: nameSpace7.tanbis.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace7.data1 = nameSpace7.generateInter1();
    nameSpace7.int1 = Phoria.Entity.create({
        points: nameSpace7.data1.points,
        edges: nameSpace7.data1.edges,
        polygons: nameSpace7.data1.polygons,
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
    nameSpace7.seg = nameSpace7.generateSegment();
    nameSpace7.seg1 = Phoria.Entity.create({
        points: nameSpace7.seg.points,
        edges: nameSpace7.seg.edges,
        polygons: nameSpace7.seg.polygons,
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
    nameSpace7.all = nameSpace7.generateAllLines();
    nameSpace7.all1 = Phoria.Entity.create({
        points: nameSpace7.all.points,
        edges: nameSpace7.all.edges,
        polygons: nameSpace7.all.polygons,
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

    nameSpace7.all2 = Phoria.Entity.create({
        points: nameSpace7.all.points,
        edges: nameSpace7.all.edges,
        polygons: nameSpace7.all.polygons,
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


    nameSpace7.scene.graph.push(nameSpace7.cone1);
    nameSpace7.scene.graph.push(nameSpace7.plan1);
    nameSpace7.scene.graph.push(nameSpace7.plan2);
    nameSpace7.scene.graph.push(nameSpace7.sphere1);
    nameSpace7.scene.graph.push(nameSpace7.sphere2);
    nameSpace7.scene.graph.push(nameSpace7.tan1);
    nameSpace7.scene.graph.push(nameSpace7.tan2);
    nameSpace7.scene.graph.push(nameSpace7.int1);
    nameSpace7.scene.graph.push(nameSpace7.seg1);
    nameSpace7.scene.graph.push(nameSpace7.all1);
    nameSpace7.scene.graph.push(nameSpace7.all2);


    Phoria.Entity.debug(nameSpace7.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace7.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace7.pause = false;
    var fnAnimate = function () {
        nameSpace7.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace7.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.sphere2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.tan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.seg1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.all1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace7.all2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);

        // execute the model view 3D pipeline and render the scene
        nameSpace7.scene.modelView();
        nameSpace7.renderer.render(nameSpace7.scene);

    };

    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace7.main();