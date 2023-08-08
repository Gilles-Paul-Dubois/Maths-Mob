var nameSpace3 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
nameSpace3.range1 = document.getElementById("myRange31");
nameSpace3.range1.value = 135;
nameSpace3.range2 = document.getElementById("myRange32");
nameSpace3.range2.value = 50;
nameSpace3.theta = 50;
nameSpace3.phi = 60;
nameSpace3.alpha = 135; // paramètre angulaire du point générique del'ellipse
nameSpace3.changeThetaPhi = function (val)
{
    cancelAnimFrame(nameSpace3.requestID);
    nameSpace3.theta = parseFloat(val);
    nameSpace3.scene.graph = [];
    nameSpace3.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace3.main();
}
nameSpace3.changeM = function (val)
{
    cancelAnimFrame(nameSpace3.requestID);
    nameSpace3.alpha = parseFloat(val);
    nameSpace3.scene.graph = [];
    nameSpace3.scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -1, z: -2}
    }));
    nameSpace3.main();
}
nameSpace3.generateCone = function (scale)
{
    var s = scale || 1;

    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    var i;
    var t;
    var T = Math.tan(nameSpace3.theta * Phoria.RADIANS);
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

nameSpace3.generateCercle = function (R, scale)
{

    var pts = [];
    var s = scale || 1;
    var alpha;
    var i;
    var r = R * Math.tan(nameSpace3.theta * Phoria.RADIANS);
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
nameSpace3.generatePlan = function ()
{
    var t = nameSpace3.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T + 1, y: 3 + T, z: 2 + T, name: 'A'});
    pts.push({x: (3 - X) / T + 1, y: 3 + T, z: -2 + T, name: 'B'});
    pts.push({x: (-3 - X) / T - 1 + 2 / T, y: -3 + 2 - T, z: -2 - T, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T - 1, y: -3 + 2 - T, z: 2 - T, name: 'D'});


    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

nameSpace3.generatePlan2 = function ()
{
    var t = nameSpace3.phi * Phoria.RADIANS;
    var T = Math.tan(t);
    var X = 1 / Math.cos(t);
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: (3 - X) / T, y: nameSpace3.H1, z: 2, name: 'A'});
    pts.push({x: (3 - X) / T, y: nameSpace3.H1, z: -2, name: 'B'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace3.H1, z: -2, name: 'C'});
    pts.push({x: (-3 - X) / T + 2 / T, y: nameSpace3.H1, z: 2, name: 'D'});
    eds.push({a: 0, b: 1});
    eds.push({a: 2, b: 3});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}
nameSpace3.generateSegment = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace3.phi * Phoria.RADIANS;
    var C = Math.cos(t);
    var S = Math.sin(t);
    var Y = nameSpace3.H1;
    pts.push({x: (C * Y - 1) / S, y: Y, z: 2, name: 'D'});
    pts.push({x: (C * Y - 1) / S, y: Y, z: -2});
    eds.push({a: 0, b: 1});
    return {
        points: pts,
        edges: eds,
        polygons: pols};

}
nameSpace3.generateInter1 = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace3.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace3.theta * Phoria.RADIANS);
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


nameSpace3.calCentres = function ()
{
    var t1 = nameSpace3.theta * Phoria.RADIANS;
    var t2 = nameSpace3.phi * Phoria.RADIANS;
    nameSpace3.h1 = 1 / (Math.sin(t1) + Math.cos(t2));
    nameSpace3.h2 = 1 / (Math.cos(t2) - Math.sin(t1));
    nameSpace3.R1 = Math.abs(nameSpace3.h1) * Math.sin(t1);
    nameSpace3.R2 = Math.abs(nameSpace3.h2) * Math.sin(t1);
    nameSpace3.H1 = nameSpace3.h1 * Math.cos(t1) * Math.cos(t1);
    nameSpace3.H2 = nameSpace3.h2 * Math.cos(t1) * Math.cos(t1);
}
// get the canvas DOM element and the 2D drawing context
nameSpace3.canvas = document.getElementById('canvas3');


// create the scene and setup camera, perspective and viewport
nameSpace3.scene = new Phoria.Scene();
nameSpace3.scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
nameSpace3.scene.perspective.aspect = nameSpace3.canvas.width / nameSpace3.canvas.height;
nameSpace3.scene.viewport.width = nameSpace3.canvas.width;
nameSpace3.scene.viewport.height = nameSpace3.canvas.height;
nameSpace3.scene.perspective.fov = 30;// standard par défaut 
// create a canvas renderer
nameSpace3.renderer = new Phoria.CanvasRenderer(nameSpace3.canvas);
// add a light
nameSpace3.light = nameSpace3.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace3.decaleSphere = function (sp, dx, dy, dz)
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

nameSpace3.generateAllLines = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    var t = nameSpace3.phi * Phoria.RADIANS;
    var S = Math.sin(t);
    var C = Math.cos(t);
    var T = Math.tan(nameSpace3.theta * Phoria.RADIANS);
    var Y = nameSpace3.h1;
    var H = nameSpace3.H1;
    var R = H * T;
    var ir = nameSpace3.alpha * Phoria.RADIANS;
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
    var H2 = nameSpace3.H2;
    var Mx, My, Mz;
    Mx = pts[0].x;
    My = pts[0].y;
    Mz = pts[0].z;
    var k = H2 / My;
    pts.push({x: k * Mx, y: H2, z: k * Mz, name: 'B'}); // index 5
    var Y2 = nameSpace3.h2;
    var beta2 = Y2 * S * S + C;
    var alpha2 = (C * beta2 - 1) / S;
    pts.push({x: alpha2, y: beta2, z: 0, name: 'F2'}); // index 6

    k = H / My;
    pts.push({x: k * Mx - Mz / 3, y: H, z: k * Mz + Mx / 3, name: ''}); // index 7
    pts.push({x: k * Mx + Mz / 3, y: H, z: k * Mz - Mx / 3, name: ''}); // index 8

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
    var X = C * H / S;
    pts.push({x: X, y: H, z: Math.sqrt(R * R - X * X), name: 'G'}); //index 13
    pts.push({x: X, y: H, z: -Math.sqrt(R * R - X * X), name: "G'"}); // index 14

    var mag1x, mag1y, mag1z;
    mag1x = (pts[4].x + pts[13].x) / 2;
    mag1y = (pts[4].y + pts[13].y) / 2;
    mag1z = (pts[4].z + pts[13].z) / 2;
    pts.push({x: mag1x, y: mag1y, z: mag1z}); // index 15 milieu de AG

    mag1x=2*pts[4].x-pts[15].x;
    mag1y=2*pts[4].y-pts[15].y;
    mag1z=2*pts[4].z-pts[15].z;
    pts.push({x: mag1x, y: mag1y, z: mag1z}); // index 16 sym du milieu de AG
    
    var mag2x, mag2y, mag2z;
    mag2x = (pts[4].x + pts[14].x) / 2;
    mag2y = (pts[4].y + pts[14].y) / 2;
    mag2z = (pts[4].z + pts[14].z) / 2;
    pts.push({x: mag2x, y: mag2y, z: mag2z}); // index 17 milieu de AG'
    
    mag2x=2*pts[4].x-pts[17].x;
    mag2y=2*pts[4].y-pts[17].y;
    mag2z=2*pts[4].z-pts[17].z;
    pts.push({x: mag2x, y: mag2y, z: mag2z}); // index 18 sym du milieu de AG'    

    Tx = pts[15].x;
    Ty = pts[15].y;
    Tz = pts[15].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 19 image du milieu de AG

    Tx = pts[16].x;
    Ty = pts[16].y;
    Tz = pts[16].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 20 image du milieu de AG'
    
    Tx = pts[17].x;
    Ty = pts[17].y;
    Tz = pts[17].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 21 image du sym du milieu de AG    
    
    Tx = pts[18].x;
    Ty = pts[18].y;
    Tz = pts[18].z;
    k = -1 / (S * Tx - C * Ty);
    pts.push({x: k * Tx, y: k * Ty, z: k * Tz, name: ''}); // index 22 image du sym du milieu de AG
    

    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 4});
    //eds.push({a: 0, b: 5});
    eds.push({a: 7, b: 8, arrow: true});
    eds.push({a: 8, b: 7, arrow: true});
    eds.push({a: 11, b: 12, arrow: true});
    eds.push({a: 12, b: 11, arrow: true});
    eds.push({a: 4, b: 13});
    eds.push({a: 4, b: 14});
    eds.push({a: 1, b: 13});
    eds.push({a: 1, b: 14});
    eds.push({a: 13, b: 14});
    eds.push({a: 19, b: 20});
    eds.push({a: 21, b: 22});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
}
nameSpace3.main = function ()
{
    nameSpace3.cone = nameSpace3.generateCone(4);
    nameSpace3.cone1 = Phoria.Entity.create({
        points: nameSpace3.cone.points,
        edges: nameSpace3.cone.edges,
        polygons: nameSpace3.cone.polygons,
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

    nameSpace3.plan = nameSpace3.generatePlan();
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


    nameSpace3.calCentres();
    nameSpace3.s1 = Phoria.Util.generateSphere(nameSpace3.R1, 32, 64);
    nameSpace3.decaleSphere(nameSpace3.s1, 0, nameSpace3.h1, 0);
    nameSpace3.sphere1 = Phoria.Entity.create({
        points: nameSpace3.s1.points,
        edges: nameSpace3.s1.edges,
        polygons: nameSpace3.s1.polygons,
        style: {
            color: [256, 0, 0],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });

    nameSpace3.s2 = Phoria.Util.generateSphere(nameSpace3.R2, 32, 64);
    nameSpace3.decaleSphere(nameSpace3.s2, 0, nameSpace3.h2, 0);
    nameSpace3.sphere2 = Phoria.Entity.create({
        points: nameSpace3.s2.points,
        edges: nameSpace3.s2.edges,
        polygons: nameSpace3.s2.polygons,
        style: {
            color: [0, 0, 256],
            opacity: 0.1,
            drawmode: 'wireframe',
            objectsortmode: "front"

        }
    });
    nameSpace3.plane = nameSpace3.generatePlan2();
    nameSpace3.plan2 = Phoria.Entity.create({
        points: nameSpace3.plane.points,
        edges: nameSpace3.plane.edges,
        polygons: nameSpace3.plane.polygons,
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
    nameSpace3.tan = nameSpace3.generateCercle(nameSpace3.H1, nameSpace3.H1);
    nameSpace3.tan1 = Phoria.Entity.create({
        points: nameSpace3.tan.points,
        edges: nameSpace3.tan.edges,
        polygons: nameSpace3.tan.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace3.tanbis = nameSpace3.generateCercle(nameSpace3.H2, nameSpace3.H2);
    nameSpace3.tan2 = Phoria.Entity.create({
        points: nameSpace3.tanbis.points,
        edges: nameSpace3.tanbis.edges,
        polygons: nameSpace3.tanbis.polygons,
        style: {
            id: "circle yellow",
            color: [256, 256, 0],
            opacity: 1,
            doublesided: true,
            drawmode: 'wireframe',
            objectsortmode: "front"
        }
    });

    nameSpace3.data1 = nameSpace3.generateInter1();
    nameSpace3.int1 = Phoria.Entity.create({
        points: nameSpace3.data1.points,
        edges: nameSpace3.data1.edges,
        polygons: nameSpace3.data1.polygons,
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
    nameSpace3.seg = nameSpace3.generateSegment();
    nameSpace3.seg1 = Phoria.Entity.create({
        points: nameSpace3.seg.points,
        edges: nameSpace3.seg.edges,
        polygons: nameSpace3.seg.polygons,
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
    nameSpace3.all = nameSpace3.generateAllLines();
    nameSpace3.all1 = Phoria.Entity.create({
        points: nameSpace3.all.points,
        edges: nameSpace3.all.edges,
        polygons: nameSpace3.all.polygons,
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


    nameSpace3.scene.graph.push(nameSpace3.cone1);
    nameSpace3.scene.graph.push(nameSpace3.plan1);
    nameSpace3.scene.graph.push(nameSpace3.plan2);
    nameSpace3.scene.graph.push(nameSpace3.sphere1);
    nameSpace3.scene.graph.push(nameSpace3.sphere2);
    nameSpace3.scene.graph.push(nameSpace3.tan1);
    nameSpace3.scene.graph.push(nameSpace3.tan2);
    nameSpace3.scene.graph.push(nameSpace3.int1);
    nameSpace3.scene.graph.push(nameSpace3.seg1);
    nameSpace3.scene.graph.push(nameSpace3.all1);



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
        nameSpace3.plan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.sphere1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.sphere2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.tan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.tan2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.int1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.seg1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace3.all1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);


        // execute the model view 3D pipeline and render the scene
        nameSpace3.scene.modelView();
        nameSpace3.renderer.render(nameSpace3.scene);

    };

    // start animation
    fnAnimate();
    //requestAnimFrame(fnAnimate);
}
nameSpace3.main();