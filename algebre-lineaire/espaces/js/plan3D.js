var angle = 0;
var theta = 30;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var viewWidth = canvas.width;
var viewHeight = canvas.height;
var fov = 250;
var viewDistance = 3.5;
var speed = 120;
var runAnimation = true;

/* code pour dessiner les vecteurs */
var arrow = [
    [2, 0],
    [-5, -2],
    [-5, 2]
];
function drawFilledPolygon(shape) {
    ctx.beginPath();
    ctx.moveTo(shape[0][0], shape[0][1]);

    for (p in shape)
        if (p > 0)
            ctx.lineTo(shape[p][0], shape[p][1]);

    ctx.lineTo(shape[0][0], shape[0][1]);
    ctx.fill();
}
;
function translateShape(shape, x, y) {
    var rv = [];
    for (p in shape)
        rv.push([shape[p][0] + x, shape[p][1] + y]);
    return rv;
}
;
function rotateShape(shape, ang) {
    var rv = [];
    for (p in shape)
        rv.push(rotatePoint(ang, shape[p][0], shape[p][1]));
    return rv;
}
;
function rotatePoint(ang, x, y) {
    return [
        (x * Math.cos(ang)) - (y * Math.sin(ang)),
        (x * Math.sin(ang)) + (y * Math.cos(ang))
    ];
}
;
function drawLineArrow(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    var ang = Math.atan2(y2 - y1, x2 - x1);
    drawFilledPolygon(translateShape(rotateShape(arrow, ang), x2, y2));
}
;
/* fin du code dessin flèches */

function Point3D(x, y, z, c) {
    this.x = x;
    this.y = y;
    this.z = z;
    if (c == undefined)
        this.name = "";
    else
        this.name = c;
    this.rotateX = function (angle) {
        var rad, cosa, sina, y, z
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        y = this.y * cosa - this.z * sina
        z = this.y * sina + this.z * cosa
        return new Point3D(this.x, y, z)
    }

    this.rotateY = function (angle) {
        var rad, cosa, sina, x, z
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        z = this.z * cosa - this.x * sina
        x = this.z * sina + this.x * cosa
        return new Point3D(x, this.y, z)
    }

    this.rotateZ = function (angle) {
        var rad, cosa, sina, x, y
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        x = this.x * cosa - this.y * sina
        y = this.x * sina + this.y * cosa
        return new Point3D(x, y, this.z)
    }

    this.project = function () {
        var factor, x, y
        factor = fov / (viewDistance + this.z)
        x = this.x * factor + viewWidth / 2
        y = this.y * factor + viewHeight / 2
        return new Point3D(x, y, this.z)
    }
}

// les sommets
var headlen = 0.04;
var delta1 = headlen / 2;
var delta2 = headlen / Math.sqrt(5);
var vertices = [
    new Point3D(0, 0, 0, 'O'),
    new Point3D(2, 0, 0, 'x'),
    new Point3D(-2, 0, 0),
    new Point3D(0, 2, 0, 'y'),
    new Point3D(0, -2, 0),
    new Point3D(0, 0, 2, 'z'),
    new Point3D(0, 0, -2),
    new Point3D(-1, 0, 1),
    new Point3D(0, -1, 1),
    new Point3D(1, 0, -1),
    new Point3D(0, 1, -1),
    new Point3D(1, 1, 1, 'n')

];
// les faces données par les indices des sommets dans la liste ci-dessus
var faces = [[2, 1], [4, 3], [6, 5], [7, 8, 9, 10], [0, 11], [7, 9], [8, 10]];
function startDemo() {
    if (runAnimation)
        setInterval(loop, speed);
}

function initCanvas()
{
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, viewWidth, viewHeight);
}


function drawVertex(x, y)
{

    ctx.lineTo(x, y);
}

function drawFace(f, t, col, ep, close, fill, arrow)
{
    ctx.strokeStyle = col;
    ctx.lineWidth = ep;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(t[f[0]].x, t[f[0]].y);
    for (var j = 1; j < f.length; j++)
    {
if (! arrow)
        drawVertex(t[f[j]].x, t[f[j]].y);
    else
      drawLineArrow(t[f[j-1]].x, t[f[j-1]].y,t[f[j]].x, t[f[j]].y);  
    }
    if (close)
        ctx.closePath();
    if (fill)
    {
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.fill()
        ctx.restore()

    }
    ctx.stroke()
}

function markpoint(i)
{
    var v = vertices[i];
    var r = v.rotateX(angle).rotateY(angle).rotateZ(angle);
    var p = r.project();
    var text = v.name;
    ctx.fillStyle = 'white';
    ctx.fillText(text, p.x, p.y);
}
document.getElementById('myCanvas').addEventListener('click', function () {
// flip flag
    runAnimation = !runAnimation;

});

function loop() {
    initCanvas();

    var t = new Array();
    for (var i = 0; i < vertices.length; i++) {
        var v = vertices[i];
        var r = v.rotateX(angle).rotateY(angle).rotateZ(angle);
        var p = r.project();
        t.push(p)
    }
    for (var i = 0; i < faces.length; i++) {
        var f = faces[i];
        var col;
        switch (i)
        {
            case 0:
                col = 'white';
                break;
            case 1:
                col = 'white';
                break;
            case 2:
                col = 'white';
                break;
            case 4:
                col = 'red';
                break;
            default:
                col = 'yellow';
        }
        var ep;
        switch (i)
        {
            case 0:
                ep = 1;
                break;
            case 1:
                ep = 1;
                break;
            default:
                ep = 1;
        }
        var close;
        var fill;
        switch (i)

        {
            case 3:
                close = true;
                fill = true;
                break;
            default:
                close = false;
                fill = false;
        }
        var arrow;
        switch (i)
        {
            case 0:
                arrow = true;
                break;
            case 1:
                arrow = true;
                break;                
            case 2:
                arrow = true;
                break;
            case 4:
                arrow = true;
                break;            
            default:
                arrow = false;
        }
        drawFace(f, t, col, ep, close, fill,arrow);
    }
    markpoint(0);
    markpoint(1);
    markpoint(3);
    markpoint(5);
    markpoint(11);

    if (runAnimation)
        angle += 2;

}
startDemo();