var nameSpace8 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace8.range1 = document.getElementById("myRange81");
nameSpace8.range1.value = 135;
nameSpace8.range2 = document.getElementById("myRange82");
nameSpace8.range2.value = 50;
nameSpace8.theta = 50;
nameSpace8.phi = 50;
nameSpace8.alpha = 135; // paramètre angulaire du point générique del'ellipse
nameSpace8.changeThetaPhi = function (val)
{
    cancelAnimFrame(nameSpace8.requestID);
    nameSpace8.theta = parseFloat(val);
    nameSpace8.scene.graph = [];
    nameSpace8.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace8.main();
}
nameSpace8.changeM = function (val)
{
    cancelAnimFrame(nameSpace8.requestID);
    nameSpace8.alpha = parseFloat(val);
    nameSpace8.scene.graph = [];
    nameSpace8.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace8.main();
}
nameSpace8.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    var T = Math.tan(nameSpace8.theta * Phoria.RADIANS);
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

nameSpace8.generateCercle = function (R, scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    var r = R * Math.tan(nameSpace8.theta * Phoria.RADIANS);
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
nameSpace8.generatePlan = function ()
{
    var t = nameSpace8.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
//    pts.push({x: (3 - X) / T, y: 3, z: 2, name: 'A'});
//    pts.push({x: (3 - X) / T, y: 3, z: -2, name: 'B'});
//    pts.push({x: (-3 - X) / T + 2 / T, y: -3 + 2, z: -2, name: 'C'});
//    pts.push({x: (-3 - X) / T + 2 / T, y: -3 + 2, z: 2, name: 'D'});


    pts.push({x: (3 - X) / T+1, y: 3+T, z: 2+T, name: 'A'});
    pts.push({x: (3 - X) / T+1, y: 3+T, z: -2+T, name: 'B'});
    pts.push({x: (-3 - X) / T -1+ 2 / T, y: -3 + 2-T, z: -2-T, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T-1, y: -3 + 2-T, z: 2-T, name: 'D'});


    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

nameSpace8.generatePlan2 = function ()
{
    var t = nameSpace8.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: nameSpace8.H1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: nameSpace8.H1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace8.H1, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace8.H1, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace8.generateSegment = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace8.phi * Phoria.RADIANS;
    var C = Math.cos(t);
    var S = Math.sin(t);
    var Y = nameSpace8.H1;
    pts.push({x: (C * Y - 1) / S, y: Y, z: 2, name: 'D'});
    pts.push({x: (C * Y - 1) / S, y: Y, z: -2});
    eds.push({a: 0, b: 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols};

}
nameSpace8.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace8.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace8.theta * Phoria.RADIANS);
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


nameSpace8.calCentres = function ()
{
    var t1 = nameSpace8.theta * Phoria.RADIANS;
    var t2 = nameSpace8.phi * Phoria.RADIANS;
    nameSpace8.h1 = 1 / (Math.sin(t1) + Math.cos(t2));
    nameSpace8.h2 = 1 / (Math.cos(t2) - Math.sin(t1));
    nameSpace8.R1 = Math.abs(nameSpace8.h1) * Math.sin(t1);
    nameSpace8.R2 = Math.abs(nameSpace8.h2) * Math.sin(t1);
    nameSpace8.H1 = nameSpace8.h1 * Math.cos(t1) * Math.cos(t1);
    nameSpace8.H2 = nameSpace8.h2 * Math.cos(t1) * Math.cos(t1);
}
// get the canvas DOM element and the 2D drawing context
nameSpace8.canvas = document.getElementById('canvas8');


// create the scene and setup camera, perspective and viewport
nameSpace8.scene = new Phoria.Scene();
nameSpace8.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace8.scene.perspective.aspect = nameSpace8.canvas.width / nameSpace8.canvas.height;
nameSpace8.scene.viewport.width = nameSpace8.canvas.width;
nameSpace8.scene.viewport.height = nameSpace8.canvas.height;
nameSpace8.scene.perspective.fov = 30;// standard par défaut 
// create a canvas renderer
nameSpace8.renderer = new Phoria.CanvasRenderer(nameSpace8.canvas);
// add a light
nameSpace8.light = nameSpace8.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace8.decaleSphere = function (sp, dx, dy, dz)
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

nameSpace8.generateAllLines = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace8.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace8.theta * Phoria.RADIANS);
    var Y = nameSpace8.h1;
    var H = nameSpace8.H1;
    var ir = nameSpace8.alpha * Phoria.RADIANS;
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
    var H2 = nameSpace8.H2;
    var Mx, My, Mz;
    Mx = pts[0].x;
    My = pts[0].y;
    Mz = pts[0].z;
    var k = H2 / My;
    pts.push({x: k * Mx, y: H2, z: k * Mz, name: 'B'}); // index 5
    var Y2 = nameSpace8.h2;
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
nameSpace8.main = function ()
{
    nameSpace8.cone = nameSpace8.generateCone(4);
    nameSpace8.cone1 = Phoria.Entity.create({
        points: nameSpace8.cone.points,
        edges: nameSpace8.cone.edges,
        polygons: nameSpace8.cone.polygons,
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

    nameSpace8.plan = nameSpace8.generatePlan();
    nameSpace8.plan1 = Phoria.Entity.create({
        points: nameSpace8.plan.points,
        edges: nameSpace8.plan.edges,
        polygons: nameSpace8.plan.polygons,
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


    nameSpace8.calCentres();
    nameSpace8.s1 = Phoria.Util.generateSphere(nameSpace8.R1, 32, 64);
    nameSpace8.decaleSphere(nameSpace8.s1, 0, nameSpace8.h1, 0);
    nameSpace8.sphere1 = Phoria.Entity.create({
        points: nameSpace8.s1.points,
        edges: nameSpace8.s1.edges,
        polygons: nameSpace8.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });

    nameSpace8.s2 = Phoria.Util.generateSphere(nameSpace8.R2, 32, 64);
    nameSpace8.decaleSphere(nameSpace8.s2, 0, nameSpace8.h2, 0);
    nameSpace8.sphere2 = Phoria.Entity.create({
        points: nameSpace8.s2.points,
        edges: nameSpace8.s2.edges,
        polygons: nameSpace8.s2.polygons,
        style: {
            color: [0, 0, 256],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });
    nameSpace8.plane = nameSpace8.generatePlan2();
    nameSpace8.plan2 = Phoria.Entity.create({
        points: nameSpace8.plane.points,
        edges: nameSpace8.plane.edges,
        polygons: nameSpace8.plane.polygons,
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
    nameSpace8.tan = nameSpace8.generateCercle(nameSpace8.H1, nameSpace8.H1);
    nameSpace8.tan1 = Phoria.Entity.create({
        points: nameSpace8.tan.points,
        edges: nameSpace8.tan.edges,
        polygons: nameSpace8.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace8.tanbis = nameSpace8.generateCercle(nameSpace8.H2, nameSpace8.H2);
    nameSpace8.tan2 = Phoria.Entity.create({
        points: nameSpace8.tanbis.points,
        edges: nameSpace8.tanbis.edges,
        polygons: nameSpace8.tanbis.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace8.data1 = nameSpace8.generateInter1();
    nameSpace8.int1 = Phoria.Entity.create({
        points: nameSpace8.data1.points,
        edges: nameSpace8.data1.edges,
        polygons: nameSpace8.data1.polygons,
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
    nameSpace8.seg = nameSpace8.generateSegment();
    nameSpace8.seg1 = Phoria.Entity.create({
        points: nameSpace8.seg.points,
        edges: nameSpace8.seg.edges,
        polygons: nameSpace8.seg.polygons,
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
    nameSpace8.all = nameSpace8.generateAllLines();
    nameSpace8.all1 = Phoria.Entity.create({
        points: nameSpace8.all.points,
        edges: nameSpace8.all.edges,
        polygons: nameSpace8.all.polygons,
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

    nameSpace8.all2 = Phoria.Entity.create({
        points: nameSpace8.all.points,
        edges: nameSpace8.all.edges,
        polygons: nameSpace8.all.polygons,
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


    nameSpace8.scene.graph.push(nameSpace8.cone1);
    nameSpace8.scene.graph.push(nameSpace8.plan1);
    nameSpace8.scene.graph.push(nameSpace8.plan2);
    nameSpace8.scene.graph.push(nameSpace8.sphere1);
    nameSpace8.scene.graph.push(nameSpace8.sphere2);
    nameSpace8.scene.graph.push(nameSpace8.tan1);
    nameSpace8.scene.graph.push(nameSpace8.tan2);
    nameSpace8.scene.graph.push(nameSpace8.int1);
    nameSpace8.scene.graph.push(nameSpace8.seg1);
    nameSpace8.scene.graph.push(nameSpace8.all1);
    nameSpace8.scene.graph.push(nameSpace8.all2);


    Phoria.Entity.debug(nameSpace8.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace8.canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    //nameSpace8.pause = false;
    var fnAnimate = function () {
        nameSpace8.requestID = requestAnimFrame(fnAnimate);

        // rotate local matrix of the cube
        rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);



        nameSpace8.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.sphere2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.tan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.seg1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.all1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace8.all2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);

        // execute the model view 3D pipeline and render the scene
        nameSpace8.scene.modelView();
        nameSpace8.renderer.render(nameSpace8.scene);

    };

    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace8.main();