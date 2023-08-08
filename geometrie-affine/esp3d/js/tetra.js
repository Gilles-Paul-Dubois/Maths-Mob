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
        points: [{x: -1 * s, y: 1 * s, z: -1 * s, name: 'A'}, {x: 1 * s, y: 1 * s, z: -1 * s, name: 'B'}, {x: 1 * s, y: -1 * s, z: -1 * s}, {x: -1 * s, y: -1 * s, z: -1 * s},
            {x: -1 * s, y: 1 * s, z: 1 * s}, {x: 1 * s, y: 1 * s, z: 1 * s}, {x: 1 * s, y: -1 * s, z: 1 * s}, {x: -1 * s, y: -1 * s, z: 1 * s}],
        edges: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 0}, {a: 4, b: 5}, {a: 5, b: 6}, {a: 6, b: 7}, {a: 7, b: 4}, {a: 0, b: 4}, {a: 1, b: 5}, {a: 2, b: 6}, {a: 3, b: 7}],
        polygons: [{vertices: [0, 1, 2, 3]}, {vertices: [1, 5, 6, 2]}, {vertices: [5, 4, 7, 6]}, {vertices: [4, 0, 3, 7]}, {vertices: [4, 5, 1, 0]}, {vertices: [3, 2, 6, 7]}]
    };
}

function generateUnitTetra(scale)
{
    var s = scale || 1;
    var alpha = 120 * Phoria.RADIANS;
    var A = {x: 1 * s, y: 0, z: 0, name: 'A'};
    var B = {x: Math.cos(alpha) * s, y: Math.sin(alpha) * s, z: 0, name: 'B'};
    var C = {x: Math.cos(alpha) * s, y: -Math.sin(alpha) * s, z: 0, name: 'C'};
    var D = {x: 0, y: 0, z: s, name: 'D'};
    return {
        points: [A, B, C, D],
        edges: [{a: 0, b: 1}, {a: 0, b: 2}, {a: 1, b: 2}, {a: 3, b: 0}, {a: 3, b: 1}, {a: 3, b: 2}],
        polygons: [{vertices: [0, 1, 2]}, {vertices: [3, 0, 1]}, {vertices: [3, 0, 2]}, {vertices: [3, 1, 2]}]
    };
}

function generateBars()
{
    var A = c.points[0];
    var B = c.points[1];
    var C = c.points[2];
    var D = c.points[3];
    var G1 = {x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3, z: (A.z + B.z + C.z) / 3, name: 'G1'};
    var G2 = {x: (D.x + A.x + B.x) / 3, y: (D.y + A.y + B.y) / 3, z: (D.z + A.z + B.z) / 3, name: 'G2'};
    var G3 = {x: (D.x + A.x + C.x) / 3, y: (D.y + A.y + C.y) / 3, z: (D.z + A.z + C.z) / 3, name: 'G3'};
    var G4 = {x: (D.x + C.x + B.x) / 3, y: (D.y + C.y + B.y) / 3, z: (D.z + C.z + B.z) / 3, name: 'G4'};
    var G5 = {x: (A.x + B.x + C.x + D.x) / 4, y: (A.y + B.y + C.y + D.y) / 4, z: (A.z + B.z + C.z + D.z) / 4, name: 'G'};
    return {
        points: [A, B, C, D, G1, G2, G3, G4, G5],
        edges: [{a: 3, b: 4}, {a: 0, b: 7}, {a: 1, b: 6}, {a: 2, b: 5}, {a: 8, b: 8}],
        polygons: []
    }

}

// get the canvas DOM element and the 2D drawing context
var canvas = document.getElementById('canvas');

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


var c = generateUnitTetra(2);
var b = generateBars();
var tetra1, tetra2, tetra3, bars2, bars3;

function recompute()
{
    var A = c.points[0];
    var B = c.points[1];
    var C = c.points[2];
    var D = c.points[3];
    bars2.points[4].x = (A.x + B.x + C.x) / 3;
    bars2.points[4].y = (A.y + B.y + C.y) / 3;
    bars2.points[4].z = (A.z + B.z + C.z) / 3;

    bars2.points[5].x = (D.x + B.x + A.x) / 3;
    bars2.points[5].y = (D.y + B.y + A.y) / 3;
    bars2.points[5].z = (D.z + B.z + A.z) / 3;

    bars2.points[6].x = (A.x + D.x + C.x) / 3;
    bars2.points[6].y = (A.y + D.y + C.y) / 3;
    bars2.points[6].z = (A.z + D.z + C.z) / 3;

    bars2.points[7].x = (D.x + B.x + C.x) / 3;
    bars2.points[7].y = (D.y + B.y + C.y) / 3;
    bars2.points[7].z = (D.z + B.z + C.z) / 3;

    bars2.points[8].x = (A.x + B.x + C.x + D.x) / 4;
    bars2.points[8].y = (A.y + B.y + C.y + D.y) / 4;
    bars2.points[8].z = (A.z + B.z + C.z + D.z) / 4;


}

function Axplus()
{
    tetra1.points[0].x++;
    recompute();
}
function Axminus()
{
    tetra1.points[0].x--;
    recompute();
}
function Bxplus()
{
    tetra1.points[1].x++;
    recompute();
}
function Bxminus()
{
    tetra1.points[1].x--;
    recompute();
}
function Cxplus()
{
    tetra1.points[2].x++;
    recompute();
}
function Cxminus()
{
    tetra1.points[2].x--;
    recompute();
}
function Dxplus()
{
    tetra1.points[3].x++;
    recompute();
}
function Dxminus()
{
    tetra1.points[3].x--;
    recompute();
}



function Ayplus()
{
    tetra1.points[0].y++;
    recompute();
}
function Ayminus()
{
    tetra1.points[0].y--;
    recompute();
}
function Byplus()
{
    tetra1.points[1].y++;
    recompute();
}
function Byminus()
{
    tetra1.points[1].y--;
    recompute();
}
function Cyplus()
{
    tetra1.points[2].y++;
    recompute();
}
function Cyminus()
{
    tetra1.points[2].y--;
    recompute();
}
function Dyplus()
{
    tetra1.points[3].y++;
    recompute();
}
function Dyminus()
{
    tetra1.points[3].y--;
    recompute();
}

function Azplus()
{
    tetra1.points[0].z++;
    recompute();
}
function Azminus()
{
    tetra1.points[0].z--;
    recompute();
}
function Bzplus()
{
    tetra1.points[1].z++;
    recompute();
}
function Bzminus()
{
    tetra1.points[1].z--;
    recompute();
}
function Czplus()
{
    tetra1.points[2].z++;
    recompute();
}
function Czminus()
{
    tetra1.points[2].z--;
    recompute();
}
function Dzplus()
{
    tetra1.points[3].z++;
    recompute();
}
function Dzminus()
{
    tetra1.points[3].z--;
    recompute();
}


function main()
{

    tetra1 = Phoria.Entity.create({
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



    tetra2 = Phoria.Entity.create({
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

    tetra3 = Phoria.Entity.create({
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

    bars2 = Phoria.Entity.create({
        points: b.points,
        edges: b.edges,
        polygons: b.polygons,
        style: {
            id: "bars frame red",
            color: [256, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'wireframe'
        }
    });

    bars3 = Phoria.Entity.create({
        points: b.points,
        edges: b.edges,
        polygons: b.polygons,
        style: {
            id: "bars points black",
            color: [0, 0, 0],
            //texture: 0,
            opacity: 1,
            //fillmode: "fill",
            doublesided: true,
            drawmode: 'point'
        }
    });

    scene.graph.push(tetra1);
    scene.graph.push(tetra2);
    scene.graph.push(tetra3);
    scene.graph.push(bars2);
    scene.graph.push(bars3);

    Phoria.Entity.debug(tetra1, {
        showAxis: true
    });



    // mouse rotation and position tracking
    var mouse = Phoria.View.addMouseEvents(canvas);

    // keep track of rotation
    var rot = {
        x: 0, y: 0, z: 0,
        velx: 0, vely: 0, velz: 0,
        nowx: 0, nowy: 0, nowz: 0,
        ratio: 0.1
    };

    var pause = false;
    var fnAnimate = function () {
        if (!pause)
        {
            // rotate local matrix of the tetra
            rot.nowx += (rot.velx = (mouse.velocityV - rot.x - rot.nowx) * rot.ratio);
            rot.nowy += (rot.vely = (rot.y - rot.nowy) * rot.ratio);
            rot.nowz += (rot.velz = (mouse.velocityH - rot.z - rot.nowz) * rot.ratio);

            tetra1.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            tetra2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            tetra3.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            bars2.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            bars3.rotateX(-rot.velx * Phoria.RADIANS).rotateY(-rot.vely * Phoria.RADIANS).rotateZ(-rot.velz * Phoria.RADIANS);
            // execute the model view 3D pipeline and render the scene
            scene.modelView();
            renderer.render(scene);
        }
        requestAnimFrame(fnAnimate);
    };

    // start animation
    fnAnimate();
}
main();