var nameSpace2 = {};
var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

nameSpace2.generateDir = function ()
{
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: 0, y: 0, z: 0});
    pts.push({x: 4, y: 4, z: 0});
    pts.push({x: -4, y: -4, z: 0});
    eds.push({a: 0, b: 1});
    eds.push({a: 0, b: 2});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };
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

nameSpace2.generatePlan = function (scale)
{
    var s = scale || 1;
    var pts = [];
    var eds = [];
    var pols = [];
    pts.push({x: s, y: s, z: s});
    pts.push({x: s, y: s, z: -s});
    pts.push({x: -s, y: -s, z: -s});
    pts.push({x: -s, y: -s, z: s});
    pols.push({vertices: [0, 1, 2, 3]});
    return {
        points: pts,
        edges: eds,
        polygons: pols
    };

}

// get the canvas DOM element and the 2D drawing context
nameSpace2.canvas = document.getElementById('canvas2');

// create the scene and setup camera, perspective and viewport
nameSpace2.scene = new Phoria.Scene();
nameSpace2.camposx=0;
nameSpace2.camposy=5.0;
nameSpace2.camposz=-15.0;
nameSpace2.scene.camera.position = {x: nameSpace2.camposx, y: nameSpace2.camposy, z: nameSpace2.camposz};
nameSpace2.scene.perspective.aspect = nameSpace2.canvas.width / nameSpace2.canvas.height;
nameSpace2.scene.viewport.width = nameSpace2.canvas.width;
nameSpace2.scene.viewport.height = nameSpace2.canvas.height;
nameSpace2.scene.perspective.fov = 35;// standard par défaut 
// create a canvas renderer
nameSpace2.renderer = new Phoria.CanvasRenderer(nameSpace2.canvas);
// add a light

nameSpace2.scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -1, z: -2}
}));

nameSpace2.decaleSphere= function(dx,dy,dz)
{
    var i,n,P;
    P=nameSpace2.s1.points;
    n=P.length;
    for(i=0; i<n;i++)
    {
        P[i].x+=dx;
        P[i].y+=dy;
        P[i].z+=dz;
    }
}

    nameSpace2.cone = nameSpace2.generateCone(4);
    nameSpace2.cone1 = Phoria.Entity.create({
        points: nameSpace2.cone.points,
        edges: nameSpace2.cone.edges,
        polygons: nameSpace2.cone.polygons,
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
    nameSpace2.d1 = nameSpace2.generateDir();
    nameSpace2.dir1 = Phoria.Entity.create({
        points: nameSpace2.d1.points,
        edges: nameSpace2.d1.edges,
        polygons: nameSpace2.d1.polygons,
        style: {
            id: "directrice rouge green",
            color: [256, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });
    nameSpace2.plan = nameSpace2.generatePlan(4);
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

    nameSpace2.s1 = Phoria.Util.generateSphere(1, 32, 64);
  nameSpace2.decaleSphere(1/Math.tan(Math.PI/8),1,0);
    nameSpace2.sphere = Phoria.Entity.create({
        points: nameSpace2.s1.points,
        edges: nameSpace2.s1.edges,
        polygons: nameSpace2.s1.polygons,
        style: {
            color: [0, 0, 256],
            opacity: 0.4,
            diffuse: 1,
            specular: 64,
            shademode: "lightsource", //gouraud?
            drawmode: 'wireframe'
        }
    });

    nameSpace2.scene.graph.push(nameSpace2.cone1);
    nameSpace2.scene.graph.push(nameSpace2.dir1);
    nameSpace2.scene.graph.push(nameSpace2.plan1);
    nameSpace2.scene.graph.push(nameSpace2.sphere);

    Phoria.Entity.debug(nameSpace2.cone1, {
        showAxis: true
    });
    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(nameSpace2.canvas);
nameSpace2.main = function ()
{


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
        nameSpace2.dir1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.sphere.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace2.scene.modelView();
        nameSpace2.renderer.render(nameSpace2.scene);

    };

    //requestAnimFrame(fnAnimate);
    var tourne = function (vh,vv)
    {
         // rotate local matrix of the cube
        rot.nowx += (rot.velx = (vh- rot.x - rot.nowx) * rot.ratio);
        rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
        rot.nowz += (rot.velz = (vv - rot.z - rot.nowz) * rot.ratio);

        nameSpace2.cone1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.dir1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.plan1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        nameSpace2.sphere.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
        // execute the model view 3D pipeline and render the scene
        nameSpace2.scene.modelView();
        nameSpace2.renderer.render(nameSpace2.scene);   
    }
    
    for (i=100;i<1000;i+=100)
    for (j=200;j<2000;j+=100)
    {tourne(i,j);
     }
     // start animation
    fnAnimate();    
}




nameSpace2.main();