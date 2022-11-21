var angle = 0;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var viewWidth = canvas.width;
var viewHeight = canvas.height;
var fov = 250;
var viewDistance = 3.5;
var speed = 60;

function Point3D(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

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
    new Point3D(0, 0, 0),
    new Point3D(1, 0, 0),
    new Point3D(1 - headlen, headlen, 0),
    new Point3D(1 - headlen, -headlen, 0),
    new Point3D(0, 2, 0),
    new Point3D(headlen, 2 - headlen, 0),
    new Point3D(-headlen, 2 - headlen, 0),
    new Point3D(1, 2, 0),
    new Point3D(1 - delta1 - 2 * delta2, 2 - delta2, 0),
    new Point3D(1 - delta1 + 2 * delta2, 2 - 3 * delta2, 0)
];

// les faces données par les indices des sommets dans la liste ci-dessus
var faces = [[0, 1, 2, 3,1], [0, 4, 5, 6,4], [0, 7, 8, 9,7], [1, 7], [4, 7]];



function startDemo() {

    if (canvas && canvas.getContext) {

        setInterval(loop, speed);
    }
}

function initCanvas()
{
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, viewWidth, viewHeight);
}

function drawArrow(fromx, fromy, tox, toy, col)
{
    ctx.strokeStyle = col;
    var headlen = 5;   // length of head in pixels
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(-Math.PI / 6), toy - headlen * Math.sin(-Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(Math.PI / 6), toy - headlen * Math.sin(Math.PI / 6));

}


function drawVertex(x, y)
{

    ctx.lineTo(x, y);
}

function drawFace(f, t, col, ep)
{
    ctx.strokeStyle = col;
    ctx.lineWidth = ep;
    ctx.beginPath();
    ctx.moveTo(t[f[0]].x, t[f[0]].y);
    for (var j = 1; j < f.length; j++)
    {

        drawVertex(t[f[j]].x, t[f[j]].y);

    }
    ctx.stroke()
}

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
                col = 'cyan';
                break;
            case 1:
                col = 'cyan';
                break;
            case 2:
                col = 'red';
                break;
            default:
                col = 'yellow';
        }
        var ep;
        switch (i)
        {
            case 3:
                ep = 1;
                break;
            case 4:
                ep = 1;
                break;
            default:
                ep = 2;

        }


        drawFace(f, t, col, ep);
    }
    angle += 2
}
startDemo();
