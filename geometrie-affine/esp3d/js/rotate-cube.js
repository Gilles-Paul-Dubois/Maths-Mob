var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (c) {
            window.setTimeout(c, 15)
        };
var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

// bind to window onload event
//window.addEventListener('load', main, false);

generateUnitCube = function generateUnitCube(scale)
{
    var s = scale || 1;
    return {
        points: [{x: -1 * s, y: 1 * s, z: -1 * s, name:'A'}, {x: 1 * s, y: 1 * s, z: -1 * s, name:'B'}, {x: 1 * s, y: -1 * s, z: -1 * s, name:'C'}, {x: -1 * s, y: -1 * s, z: -1 * s, name:'D'},
            {x: -1 * s, y: 1 * s, z: 1 * s, name:'E'}, {x: 1 * s, y: 1 * s, z: 1 * s, name:'F'}, {x: 1 * s, y: -1 * s, z: 1 * s, name:'G'}, {x: -1 * s, y: -1 * s, z: 1 * s, name:'H'}],
        edges: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 0}, {a: 4, b: 5}, {a: 5, b: 6}, {a: 6, b: 7}, {a: 7, b: 4}, {a: 0, b: 4}, {a: 1, b: 5}, {a: 2, b: 6}, {a: 3, b: 7}],
        polygons: [{vertices: [0, 1, 2, 3]}, {vertices: [1, 5, 6, 2]}, {vertices: [5, 4, 7, 6]}, {vertices: [4, 0, 3, 7]}, {vertices: [4, 5, 1, 0]}, {vertices: [3, 2, 6, 7]}]
    };
}
// get the canvas DOM element and the 2D drawing context
var canvas = document.getElementById('canvas');
var range1 = document.getElementById("myRange1");
range1.value = "2";

textzone3 = document.getElementById("mytext3");

textzone3.style.width="500px";
var range2 = document.getElementById("myRange2");
range2.value = "90";

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

var axevissage = 1;
var anglevissage = 90;
var transvissage = 2;
var deltangle;
var delttrans;
var c;
var cube1;
var cube2;
var requestID;
var compteur;
var dx,dy,dz,da;
var position;

function changetrans(val)
{
    transvissage = parseFloat(val);
    scene.graph.pop(cube2);
    scene.graph.pop(cube1);
    scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -0.5, z: 1}
    }));
    main();
}

function changeangle(val)
{
    anglevissage = parseInt(val);
    scene.graph.pop(cube2);
    scene.graph.pop(cube1);
    scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -0.5, z: 1}
    }));
    main();
}

function axisX()
{
    axevissage = 1;
    scene.graph.pop(cube2);
    scene.graph.pop(cube1);
    scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -0.5, z: 1}
    }));
    main();
}

function axisY()
{
    axevissage = 2;
    scene.graph.pop(cube2);
    scene.graph.pop(cube1);
    scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -0.5, z: 1}
    }));
    main();
}

function axisZ()
{
    axevissage = 3;
    scene.graph.pop(cube2);
    scene.graph.pop(cube1);
    scene.graph.push(Phoria.DistantLight.create({
        direction: {x: 0, y: -0.5, z: 1}
    }));
    main();
}

function main()
{
    range1.value = ""+transvissage.toFixed(2);
    range2.value = ""+anglevissage;
    c = generateUnitCube(1.5);
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
    for (var i = 0; i < 6; i++)
    {
        cube1.polygons[i].color = [42 * i, 256 - (42 * i), (128 + (42 * i)) % 256];
    }    
    scene.graph.push(cube1);
    scene.graph.push(cube2);
    Phoria.Entity.debug(cube1, {
        showAxis: true,
        //showPosition: true
    });
    deltangle = anglevissage / 100;
    delttrans = transvissage / 100;
    compteur = 0;
    dx=dy=dz=da=0;

    var fnAnimate = function () {
        requestID = requestAnimFrame(fnAnimate);
        // rotate local matrix of an object
        switch (axevissage)
        {
            case 1:
                cube1.rotateX(deltangle * Phoria.RADIANS);
                cube1.translateX(delttrans);
                cube2.rotateX(deltangle * Phoria.RADIANS);
                cube2.translateX(delttrans);
                dx+=delttrans;
                break;
            case 2:
                cube1.rotateY(deltangle * Phoria.RADIANS);
                cube1.translateY(delttrans);
                cube2.rotateY(deltangle * Phoria.RADIANS);
                cube2.translateY(delttrans);
                dy+=delttrans;
                break;
            case 3:
                cube1.rotateZ(deltangle * Phoria.RADIANS);
                cube1.translateZ(delttrans);
                cube2.rotateZ(deltangle * Phoria.RADIANS);
                cube2.translateZ(delttrans);
                dz+=delttrans;
                break;
        }
        scene.modelView();
        renderer.render(scene);
        da+=deltangle;
        compteur++;
        position="("+dx.toFixed(2)+","+dy.toFixed(2)+","+dz.toFixed(2)+")";
        position=position+" angle = "+da.toFixed(2)+"°"
        textzone3.value=position;
        
        if (compteur >= 100)
        {
            cancelAnimFrame(requestID);
        }
    };
    fnAnimate();
}
main();

