var nameSpace2 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace2.range1 = document.getElementById("myRange21");
nameSpace2.range1.value = 135;
nameSpace2.range2 = document.getElementById("myRange22");
nameSpace2.range2.value = 45;
nameSpace2.theta = 45;
nameSpace2.phi = 45;
nameSpace2.alpha = 135; // paramètre angulaire du point générique de la parabole
nameSpace2.changeThetaPhi = function (val)
{
    cancelAnimFrame(nameSpace2.requestID);
    nameSpace2.theta = parseFloat(val);
    nameSpace2.phi = parseFloat(90 - nameSpace2.range2.value);
    nameSpace2.scene.graph = [];
    nameSpace2.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace2.main();
}
nameSpace2.changeM = function (val)
{
    cancelAnimFrame(nameSpace2.requestID);
    nameSpace2.alpha = parseFloat(val);
    nameSpace2.scene.graph = [];
    nameSpace2.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace2.main();
}
nameSpace2.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    var T = Math.tan(nameSpace2.theta * Phoria.RADIANS);
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

nameSpace2.generateCercle = function (scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    var r = nameSpace2.H1 * Math.tan(nameSpace2.theta * Phoria.RADIANS);
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
nameSpace2.generatePlan = function ()
{
    var t = nameSpace2.phi * Phoria.RADIANS;
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

nameSpace2.generatePlan2 = function ()
{
    var t = nameSpace2.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: nameSpace2.H1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: nameSpace2.H1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace2.H1, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace2.H1, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace2.generateSegment = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace2.phi * Phoria.RADIANS;
    var C = Math.cos(t);
    var S = Math.sin(t);
    var Y = nameSpace2.H1;
    pts.push({x: (C * Y - 1) / S, y: Y, z: 2, name: 'D'});
    pts.push({x: (C * Y - 1) / S, y: Y, z: -2});
    eds.push({a: 0, b: 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols};

}
nameSpace2.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace2.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace2.theta * Phoria.RADIANS);
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


nameSpace2.calCentres = function ()
{
    var t1 = nameSpace2.theta * Phoria.RADIANS;
    var t2 = nameSpace2.phi * Phoria.RADIANS;
    nameSpace2.h1 = 1 / (Math.sin(t1) + Math.cos(t2));

    nameSpace2.R1 = Math.abs(nameSpace2.h1) * Math.sin(t1);

    nameSpace2.H1 = nameSpace2.h1 * Math.cos(t1) * Math.cos(t1);
}
// get the canvas DOM element and the 2D drawing context
nameSpace2.canvas = document.getElementById('canvas2');


// create the scene and setup camera, perspective and viewport
nameSpace2.scene = new Phoria.Scene();
nameSpace2.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace2.scene.perspective.aspect = nameSpace2.canvas.width / nameSpace2.canvas.height;
nameSpace2.scene.viewport.width = nameSpace2.canvas.width;
nameSpace2.scene.viewport.height = nameSpace2.canvas.height;
nameSpace2.scene.perspective.fov = 20;// standard par défaut 
// create a canvas renderer
nameSpace2.renderer = new Phoria.CanvasRenderer(nameSpace2.canvas);
// add a light
nameSpace2.light = nameSpace2.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace2.decaleSphere = function (dx, dy, dz)
{
    var i, n, P;
    P = nameSpace2.s1.points;
    n = P.length;
    for (i = 0; i < n; i++)
    {
        P[i].x += dx;
        P[i].y += dy;
        P[i].z += dz;
    }
}

nameSpace2.generateAllLines = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace2.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace2.theta * Phoria.RADIANS);

    var Y = nameSpace2.h1;
    var H = nameSpace2.H1;
    var ir = nameSpace2.alpha * Phoria.RADIANS;
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
    k = H / My;
    pts.push({x: k * Mx - Mz / 3, y: H, z: k * Mz + Mx / 3, name: ''}); // index 8
    pts.push({x: k * Mx + Mz / 3, y: H, z: k * Mz - Mx / 3, name: ''}); // index 9
    var Tx, Ty, Tz;
    Tx = pts[8].x;
    Ty = pts[8].y;
    Tz = pts[8].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 10
    Tx = pts[9].x;
    Ty = pts[9].y;
    Tz = pts[9].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 11
    var Ix, Iy, Iz;
    Ix = (pts[10].x + pts[11].x) / 2;
    Iy = (pts[10].y + pts[11].y) / 2;
    Iz = (pts[10].z + pts[11].z) / 2;
    var tx, ty, tz;
    tx = pts[0].x - Ix;
    ty = pts[0].y - Iy;
    tz = pts[0].z - Iz;
    pts.push({x: pts[10].x + tx, y: pts[10].y + ty, z: pts[10].z + tz, name: ''}); // index 12
    pts.push({x: pts[11].x + tx, y: pts[11].y + ty, z: pts[11].z + tz, name: ''}); // index 13
    pts.push({x: -nameSpace2.H1 * T, y: H, z: 0, name: 'K'}); // index 14
    pts.push({x: nameSpace2.H1 * T, y: H, z: 0, name: 'G'}); // index 15
    //
    Mx = pts[14].x;
    My = pts[14].y;
    Mz = pts[14].z;
    k = -1 / (S * Mx - C * My);
    pts.push({x: k * Mx, y: k*My, z: k * Mz, name: ''}); // index 16
    pts.push({x: 0, y: 1/C, z: 0, name: ''}); // index 17
    pts.push({x: (C*H-1)/S, y: H, z: 0, name: ''}); // index 18
    //eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 2});
    eds.push({a: 0, b: 6});
    eds.push({a: 8, b: 9, arrow: true});
    eds.push({a: 9, b: 8, arrow: true});
    eds.push({a: 12, b: 13, arrow: true});
    eds.push({a: 13, b: 12, arrow: true});
    eds.push({a: 14, b: 15});
    eds.push({a: 16, b: 17});
    eds.push({a: 16, b: 18});
    eds.push({a: 14, b: 18});
    //eds.push({a: 0, b: 16});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
nameSpace2.main = function ()
{
    nameSpace2.cone = nameSpace2.generateCone(2);
    nameSpace2.cone1 = Phoria.Entity.create({
        points: nameSpace2.cone.points,
        edges: nameSpace2.cone.edges,
        polygons: nameSpace2.cone.polygons,
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

    nameSpace2.plan = nameSpace2.generatePlan();
    nameSpace2.plan1 = Phoria.Entity.create({
        points: nameSpace2.plan.points,
        edges: nameSpace2.plan.edges,
        polygons: nameSpace2.plan.polygons,
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


    nameSpace2.calCentres();
    nameSpace2.s1 = Phoria.Util.generateSphere(nameSpace2.R1, 32, 64);
    nameSpace2.decaleSphere(0, nameSpace2.h1, 0);
    nameSpace2.sphere1 = Phoria.Entity.create({
        points: nameSpace2.s1.points,
        edges: nameSpace2.s1.edges,
        polygons: nameSpace2.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });
    nameSpace2.plane = nameSpace2.generatePlan2();
    nameSpace2.plan2 = Phoria.Entity.create({
        points: nameSpace2.plane.points,
        edges: nameSpace2.plane.edges,
        polygons: nameSpace2.plane.polygons,
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
    nameSpace2.tan = nameSpace2.generateCercle(nameSpace2.H1);
    nameSpace2.tan1 = Phoria.Entity.create({
        points: nameSpace2.tan.points,
        edges: nameSpace2.tan.edges,
        polygons: nameSpace2.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace2.data1 = nameSpace2.generateInter1();
    nameSpace2.int1 = Phoria.Entity.create({
        points: nameSpace2.data1.points,
        edges: nameSpace2.data1.edges,
        polygons: nameSpace2.data1.polygons,
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
    nameSpace2.seg = nameSpace2.generateSegment();
    nameSpace2.seg1 = Phoria.Entity.create({
        points: nameSpace2.seg.points,
        edges: nameSpace2.seg.edges,
        polygons: nameSpace2.seg.polygons,
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
    nameSpace2.all = nameSpace2.generateAllLines();
    nameSpace2.all1 = Phoria.Entity.create({
        points: nameSpace2.all.points,
        edges: nameSpace2.all.edges,
        polygons: nameSpace2.all.polygons,
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


    nameSpace2.scene.graph.push(nameSpace2.cone1);
    nameSpace2.scene.graph.push(nameSpace2.plan1);
    nameSpace2.scene.graph.push(nameSpace2.plan2);
    nameSpace2.scene.graph.push(nameSpace2.sphere1);
    nameSpace2.scene.graph.push(nameSpace2.tan1);
    nameSpace2.scene.graph.push(nameSpace2.int1);
    nameSpace2.scene.graph.push(nameSpace2.seg1);
    nameSpace2.scene.graph.push(nameSpace2.all1);


    Phoria.Entity.debug(nameSpace2.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace2.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace2.pause = false;
    var fnAnimate = function () {
        nameSpace2.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace2.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.seg1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.all1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);

        nameSpace2.scene.modelView();
        nameSpace2.renderer.render(nameSpace2.scene);

    };

    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace2.main();