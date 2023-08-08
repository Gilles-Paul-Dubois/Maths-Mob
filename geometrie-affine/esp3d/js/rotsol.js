var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };

// bind to window onload event
//window.addEventListener('load', onloadHandler, false);


function generateUnitCube(scale)
{
    var s = scale || 1;
    return {
        points: [{x: -1 * s, y: 1 * s, z: -1 * s, name: 'A'}, {x: 1 * s, y: 1 * s, z: -1 * s, name: 'B'}, {x: 1 * s, y: -1 * s, z: -1 * s, name: 'C'}, {x: -1 * s, y: -1 * s, z: -1 * s, name: 'D'},
            {x: -1 * s, y: 1 * s, z: 1 * s, name: 'E'}, {x: 1 * s, y: 1 * s, z: 1 * s, name: 'F'}, {x: 1 * s, y: -1 * s, z: 1 * s, name: 'G'}, {x: -1 * s, y: -1 * s, z: 1 * s, name: 'H'}],
        edges: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 0}, {a: 4, b: 5}, {a: 5, b: 6}, {a: 6, b: 7}, {a: 7, b: 4}, {a: 0, b: 4}, {a: 1, b: 5}, {a: 2, b: 6}, {a: 3, b: 7}],
        polygons: [{vertices: [0, 1, 2, 3]}, {vertices: [1, 5, 6, 2]}, {vertices: [5, 4, 7, 6]}, {vertices: [4, 0, 3, 7]}, {vertices: [4, 5, 1, 0]}, {vertices: [3, 2, 6, 7]}]
    };
}
// get the canvas DOM element and the 2D drawing context
var canvas = document.getElementById('canvas');
var range2 = document.getElementById("myRange2");
range2.value = "0";
textzone3 = document.getElementById("mytext3");
textzone3.style.width = "200px";
var axerot = 1;
var anglerot = 0;
// create the scene and setup camera, perspective and viewport
var scene = new Phoria.Scene();
scene.camera.position = {x: 0.0, y: 5.0, z: -15.0};
scene.perspective.aspect = canvas.width / canvas.height;
scene.viewport.width = canvas.width;
scene.viewport.height = canvas.height;
scene.perspective.fov = 35;// standard par défaut 
// create a canvas renderer
var renderer = new Phoria.CanvasRenderer(canvas);
// add a light
scene.graph.push(Phoria.DistantLight.create({
    direction: {x: 0, y: -0.5, z: 1}
}));
var c = generateUnitCube(2);
var cube1, cube2, cube3;
//var c = Phoria.Util.generateUnitCube(1.5);

function turn()
{
    affaxe();
    switch (axerot)
    {
        case 1:
            cube1.rotateX(anglerot * Phoria.RADIANS);
            cube2.rotateX(anglerot * Phoria.RADIANS);
            cube3.rotateX(anglerot * Phoria.RADIANS);
            break;
        case 2:
            cube1.rotateY(anglerot * Phoria.RADIANS);
            cube2.rotateY(anglerot * Phoria.RADIANS);
            cube3.rotateY(anglerot * Phoria.RADIANS);
            break;
        case 3:
            cube1.rotateZ(anglerot * Phoria.RADIANS);
            cube2.rotateZ(anglerot * Phoria.RADIANS);
            cube3.rotateZ(anglerot * Phoria.RADIANS);
            break;
    }
    scene.modelView();
    renderer.render(scene);

}

function changeangle(val)
{
    anglerot = parseInt(val);
    turn();
}

function axisX()
{
    axerot = 1;
    affaxe();
}

function axisY()
{
    axerot = 2;
    affaxe();
}

function axisZ()
{
    axerot = 3;
    affaxe();
}

function affaxe()
{
    var text;
   if(document.body.className.substring(0,2)=="fr")  
   {     var axc="axe choisi : "}
else
  {     var axc="chosen axis : "}
    switch (axerot)
    {
        case 1:
            text = axc+"Ox";
            break;
        case 2:
            text = axc+"Oy";
            break;
        case 3:
            text = axc+"Oz";
            break;
    }
    textzone3.value = text;
}


function main()
{

    cube1 = Phoria.Entity.create({
        points: c.points,
        edges: c.edges,
        polygons: c.polygons,
        style: {
            id: "Cube plain green",
            color: [0, 256, 0],
            //texture: 0,
            opacity: 0.3,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'solid'
        }
    });
    for (var i = 0; i < 6; i++)
    {
        cube1.polygons[i].color = [42 * i, 256 - (42 * i), (128 + (42 * i)) % 256];
    }   
    cube2 = Phoria.Entity.create({
        points: c.points,
        edges: c.edges,
        polygons: c.polygons,
        style: {
            id: "Cube frame black",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });

    cube3 = Phoria.Entity.create({
        points: c.points,
        edges: c.edges,
        polygons: c.polygons,
        style: {
            id: "Cube points black",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'point'
        }
    });
//    for (var i = 0; i < 6; i++)
//    {
//        cube.polygons[i].color = [42 * i, 256 - (42 * i), (128 + (42 * i)) % 256];
//    }
    scene.graph.push(cube1);
    scene.graph.push(cube2);
    scene.graph.push(cube3);

    Phoria.Entity.debug(cube1, {
        showAxis: true
    });

    turn();

    // mouse rotation and position tracking
    //var mouse = Phoria.View.addMouseEvents(canvas);

    // keep track of rotation
//    var rot = {
//        x: 0, y: 0, z: 0,
//        velx: 0, vely: 0, velz: 0,
//        nowx: 0, nowy: 0, nowz: 0,
//        ratio: 0.1
//    };

//    var pause = false;
//    var fnAnimate = function () {
//        if (!pause)
//        {
//            // rotate local matrix of the cube
//            rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
//            rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
//            rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);
//
//            cube1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
//            cube2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
//            cube3.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
//
//            // execute the model view 3D pipeline and render the scene
//            scene.modelView();
//            renderer.render(scene);
//        }
//        requestAnimFrame(fnAnimate);
    //};

    // start animation
    //fnAnimate();
}
main();