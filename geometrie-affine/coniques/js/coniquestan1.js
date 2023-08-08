var nameSpace1 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace1.range1 = document.getElementById("myRange11");
nameSpace1.range1.value = 135;
nameSpace1.range2 = document.getElementById("myRange12");
nameSpace1.range2.value = 45;
nameSpace1.theta = 45;
nameSpace1.phi = 30;
nameSpace1.alpha = 135; // paramètre angulaire du point générique del'ellipse
nameSpace1.changeThetaPhi = function (val)
{
    cancelAnimFrame(nameSpace1.requestID);
    nameSpace1.theta = parseFloat(val);
    nameSpace1.scene.graph = [];
    nameSpace1.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace1.main();
}
nameSpace1.changeM = function (val)
{
    cancelAnimFrame(nameSpace1.requestID);
    nameSpace1.alpha = parseFloat(val);
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
    var T = Math.tan(nameSpace1.theta * Phoria.RADIANS);
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

nameSpace1.generateCercle = function (R, scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    var r = R * Math.tan(nameSpace1.theta * Phoria.RADIANS);
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
nameSpace1.generatePlan = function ()
{
    var t = nameSpace1.phi * Phoria.RADIANS;
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

nameSpace1.generatePlan2 = function ()
{
    var t = nameSpace1.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: nameSpace1.H1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: nameSpace1.H1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace1.H1, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace1.H1, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace1.generateSegment = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace1.phi * Phoria.RADIANS;
    var C = Math.cos(t);
    var S = Math.sin(t);
    var Y = nameSpace1.H1;
    pts.push({x: (C * Y - 1) / S, y: Y, z: 2, name: 'D'});
    pts.push({x: (C * Y - 1) / S, y: Y, z: -2});
    eds.push({a: 0, b: 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols};

}
nameSpace1.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace1.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace1.theta * Phoria.RADIANS);
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


nameSpace1.calCentres = function ()
{
    var t1 = nameSpace1.theta * Phoria.RADIANS;
    var t2 = nameSpace1.phi * Phoria.RADIANS;
    nameSpace1.h1 = 1 / (Math.sin(t1) + Math.cos(t2));
    nameSpace1.h2 = 1 / (Math.cos(t2) - Math.sin(t1));
    nameSpace1.R1 = Math.abs(nameSpace1.h1) * Math.sin(t1);
    nameSpace1.R2 = Math.abs(nameSpace1.h2) * Math.sin(t1);
    nameSpace1.H1 = nameSpace1.h1 * Math.cos(t1) * Math.cos(t1);
    nameSpace1.H2 = nameSpace1.h2 * Math.cos(t1) * Math.cos(t1);
}
// get the canvas DOM element and the 2D drawing context
nameSpace1.canvas = document.getElementById('canvas1');


// create the scene and setup camera, perspective and viewport
nameSpace1.scene = new Phoria.Scene();
nameSpace1.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace1.scene.perspective.aspect = nameSpace1.canvas.width / nameSpace1.canvas.height;
nameSpace1.scene.viewport.width = nameSpace1.canvas.width;
nameSpace1.scene.viewport.height = nameSpace1.canvas.height;
nameSpace1.scene.perspective.fov = 25;// 
// create a canvas renderer
nameSpace1.renderer = new Phoria.CanvasRenderer(nameSpace1.canvas);
// add a light
nameSpace1.light = nameSpace1.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace1.decaleSphere = function (sp, dx, dy, dz)
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

nameSpace1.generateAllLines = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace1.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace1.theta * Phoria.RADIANS);
    var Y = nameSpace1.h1;
    var H = nameSpace1.H1;
    var ir = nameSpace1.alpha * Phoria.RADIANS;
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
    var H2 = nameSpace1.H2;
    var Mx, My, Mz;
    Mx = pts[0].x;
    My = pts[0].y;
    Mz = pts[0].z;
    k = H2 / My;
    pts.push({x: k * Mx, y: H2, z: k * Mz, name: 'B'}); // index 5
    var Y2 = nameSpace1.h2;
    var beta2 = Y2 * S * S + C;
    var alpha2 = (C * beta2 - 1) / S;
    pts.push({x: alpha2, y: beta2, z: 0, name: 'F2'}); // index 6
    k = H / My;
    pts.push({x: k * Mx - Mz/3, y: H, z: k * Mz + Mx/3, name: ''}); // index 7
    pts.push({x: k * Mx + Mz/3, y: H, z: k * Mz - Mx/3, name: ''}); // index 8
    var Tx, Ty, Tz;
    Tx = pts[7].x;
    Ty = pts[7].y;
    Tz = pts[7].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 9
    Tx = pts[8].x;
    Ty = pts[8].y;
    Tz = pts[8].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 10

    var Ix, Iy, Iz;
    Ix = (pts[9].x + pts[10].x) / 2;
    Iy = (pts[9].y + pts[10].y) / 2;
    Iz = (pts[9].z + pts[10].z) / 2;
    var tx, ty, tz;
    tx = pts[0].x - Ix;
    ty = pts[0].y - Iy;
    tz = pts[0].z - Iz;
    pts.push({x: pts[9].x + tx, y: pts[9].y + ty, z: pts[9].z + tz, name: ''}); // index 11
    pts.push({x: pts[10].x + tx, y: pts[10].y + ty, z: pts[10].z + tz, name: ''}); // index 12

    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 1});
    eds.push({a: 3, b: 3});
    //eds.push({a: 2, b: 3});
    //eds.push({a: 0, b: 3});
    eds.push({a: 0, b: 4});
    eds.push({a: 0, b: 5});
    //eds.push({a: 0, b: 6});
    eds.push({a: 7, b: 8, arrow: true});
    eds.push({a: 8, b: 7, arrow: true});
    eds.push({a: 11, b: 12, arrow: true});
    eds.push({a: 12, b: 11, arrow: true});
 

    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
nameSpace1.main = function ()
{
    nameSpace1.cone = nameSpace1.generateCone(4);
    nameSpace1.cone1 = Phoria.Entity.create({
        points: nameSpace1.cone.points,
        edges: nameSpace1.cone.edges,
        polygons: nameSpace1.cone.polygons,
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

    nameSpace1.plan = nameSpace1.generatePlan();
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


    nameSpace1.calCentres();
    nameSpace1.s1 = Phoria.Util.generateSphere(nameSpace1.R1, 32, 64);
    nameSpace1.decaleSphere(nameSpace1.s1, 0, nameSpace1.h1, 0);
    nameSpace1.sphere1 = Phoria.Entity.create({
        points: nameSpace1.s1.points,
        edges: nameSpace1.s1.edges,
        polygons: nameSpace1.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });

    nameSpace1.s2 = Phoria.Util.generateSphere(nameSpace1.R2, 32, 64);
    nameSpace1.decaleSphere(nameSpace1.s2, 0, nameSpace1.h2, 0);
    nameSpace1.sphere2 = Phoria.Entity.create({
        points: nameSpace1.s2.points,
        edges: nameSpace1.s2.edges,
        polygons: nameSpace1.s2.polygons,
        style: {
            color: [0, 0, 256],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });
    nameSpace1.plane = nameSpace1.generatePlan2();
    nameSpace1.plan2 = Phoria.Entity.create({
        points: nameSpace1.plane.points,
        edges: nameSpace1.plane.edges,
        polygons: nameSpace1.plane.polygons,
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
    nameSpace1.tan = nameSpace1.generateCercle(nameSpace1.H1, nameSpace1.H1);
    nameSpace1.tan1 = Phoria.Entity.create({
        points: nameSpace1.tan.points,
        edges: nameSpace1.tan.edges,
        polygons: nameSpace1.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace1.tanbis = nameSpace1.generateCercle(nameSpace1.H2, nameSpace1.H2);
    nameSpace1.tan2 = Phoria.Entity.create({
        points: nameSpace1.tanbis.points,
        edges: nameSpace1.tanbis.edges,
        polygons: nameSpace1.tanbis.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace1.data1 = nameSpace1.generateInter1();
    nameSpace1.int1 = Phoria.Entity.create({
        points: nameSpace1.data1.points,
        edges: nameSpace1.data1.edges,
        polygons: nameSpace1.data1.polygons,
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
    nameSpace1.seg = nameSpace1.generateSegment();
    nameSpace1.seg1 = Phoria.Entity.create({
        points: nameSpace1.seg.points,
        edges: nameSpace1.seg.edges,
        polygons: nameSpace1.seg.polygons,
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
    nameSpace1.all = nameSpace1.generateAllLines();
    nameSpace1.all1 = Phoria.Entity.create({
        points: nameSpace1.all.points,
        edges: nameSpace1.all.edges,
        polygons: nameSpace1.all.polygons,
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

    nameSpace1.all2 = Phoria.Entity.create({
        points: nameSpace1.all.points,
        edges: nameSpace1.all.edges,
        polygons: nameSpace1.all.polygons,
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


    nameSpace1.scene.graph.push(nameSpace1.cone1);
    nameSpace1.scene.graph.push(nameSpace1.plan1);
    nameSpace1.scene.graph.push(nameSpace1.plan2);
    nameSpace1.scene.graph.push(nameSpace1.sphere1);
    nameSpace1.scene.graph.push(nameSpace1.sphere2);
    nameSpace1.scene.graph.push(nameSpace1.tan1);
    nameSpace1.scene.graph.push(nameSpace1.tan2);
    nameSpace1.scene.graph.push(nameSpace1.int1);
    nameSpace1.scene.graph.push(nameSpace1.seg1);
    nameSpace1.scene.graph.push(nameSpace1.all1);
    //nameSpace1.scene.graph.push(nameSpace1.all2);


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

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace1.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.sphere2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.tan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.seg1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace1.all1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        //nameSpace1.all2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);

        // execute the model view 3D pipeline and render the scene
        nameSpace1.scene.modelView();
        nameSpace1.renderer.render(nameSpace1.scene);

    };

    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace1.main();