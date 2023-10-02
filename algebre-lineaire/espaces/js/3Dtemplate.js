/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var angle = 0;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var viewWidth = canvas.width;
var viewHeight = canvas.height;
var fov = 250;
var viewDistance = 20;
var speed = 120;
var runAnimation = true;
var volume;
var selector = 0;
var timer;
/* code pour dessiner les vecteurs */
var arrow = [
    [2, 0],
    [-5, -2],
    [-5, 2]
];

function drawFilledPolygon(context, shape) {
    context.beginPath();
    context.moveTo(shape[0][0], shape[0][1]);
    var p;
    for (p in shape)
        if (p > 0)
            context.lineTo(shape[p][0], shape[p][1]);

    context.lineTo(shape[0][0], shape[0][1]);
    context.fill();
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
function drawLineArrow(context, x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    var ang = Math.atan2(y2 - y1, x2 - x1);
    drawFilledPolygon(context, translateShape(rotateShape(arrow, ang), x2, y2));
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
    this.markName = function (context, angle, col)
    {
        var r = this.rotateX(angle).rotateY(angle).rotateZ(angle);
        var p = r.project();
        var text = this.name;
        context.fillStyle = col;
        context.fillText(text, p.x + 5, p.y + 5);
    }
}

var face = function (vertices, visible, col, thickness, arrowend, close, fill, transparency)
{
    this.vertices = vertices;
    if (visible == undefined)
        this.visible = true;
    else
        this.visible = visible;
    if (col == undefined)
        this.col = 'white';
    else
        this.col = col;
    if (thickness == undefined)
        this.thickness = 1;
    else
        this.thickness = thickness;
    if (arrowend == undefined)
        this.arrowend = false;
    else
        this.arrowend = arrowend;
    if (close == undefined)
        this.close = false;
    else
        this.close = true;
    if (fill == undefined)
        this.fill = false;
    else
        this.fill = fill;
    if (transparency == undefined)
        this.transparency = 1.0;
    else
        this.transparency = transparency;


    this.draw = function (context, angle)
    {
        if (this.visible) {
            var n = this.vertices.length;
            var i;
            var LS = [];
            var S1, S2, S3;
            for (i = 0; i < n; i++)
            {
                S1 = this.vertices[i];
                S2 = (S1.rotateX(angle).rotateY(angle).rotateZ(angle));
                S3 = S2.project();
                LS.push([S3.x, S3.y]);
            }
            context.strokeStyle = this.col;
            context.lineWidth = this.thickness;
            context.fillStyle = this.col;
            context.beginPath();
            context.moveTo(LS[0][0], LS[0][1]);
            for (i = 1; i < n; i++)
            {
                if (!this.arrowend)
                    context.lineTo(LS[i][0], LS[i][1]);
                else
                    drawLineArrow(context, LS[i - 1][0], LS[i - 1][1], LS[i][0], LS[i][1]);
            }
            if (this.close)
                context.closePath();
            if (this.fill)
            {
                context.save();
                context.globalAlpha = this.transparency;
                context.fill()
                context.restore()

            }
            context.stroke()

        }
    }
}

var shape = function (LF)
{
    this.listFaces = LF;
    this.draw = function (context, angle) {
        var i;
        var n = this.listFaces.length;
        for (i = 0; i < n; i++)
        {
            F = this.listFaces[i];
            F.draw(context, angle);
        }

    }


}
function initCanvas()
{
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, viewWidth, viewHeight);


}
function Random(n) {
    return Math.floor(Math.random() * n);
}
/* description de volume */

var O = new Point3D(0, 0, 0, 'O');
var x = new Point3D(viewDistance / 2, 0, 0, 'x');
var y = new Point3D(0, viewDistance / 2, 0, 'y');
var z = new Point3D(0, 0, viewDistance / 2, 'z');
var Ox = new face([O, x], true, 'white', 1, true);
var Oy = new face([O, y], true, 'white', 1, true);
var Oz = new face([O, z], true, 'white', 1, true);

var A = new Point3D(2 + Random(5), 2 + Random(5), 2 + Random(5), 'u');
var B = new Point3D(2 + Random(5), 2 + Random(5), 2 + Random(5), 'v');
var C = new Point3D((A.y * B.z - A.z * B.y) / 3, (A.z * B.x - A.x * B.y) / 3, (A.x * B.y - A.y * B.x) / 3, 'w');
var u = new face([O, A], true, 'cyan', 1, true);
var v = new face([O, B], true, 'yellow', 1, true);
var w = new face([O, C], true, 'pink', 1, true);

var uvS1 = new Point3D(A.x + B.x, A.y + B.y, A.z + B.z);
var uvS2 = new Point3D(-A.x + B.x, -A.y + B.y, -A.z + B.z);
var uvS3 = new Point3D(-uvS1.x, -uvS1.y, -uvS1.z);
var uvS4 = new Point3D(-uvS2.x, -uvS2.y, -uvS2.z);
var uv = new face([uvS1, uvS2, uvS3, uvS4], true, 'cyan', 1, false, true, true, 0.4);

var uwS1 = new Point3D(A.x + C.x, A.y + C.y, A.z + C.z);
var uwS2 = new Point3D(-A.x + C.x, -A.y + C.y, -A.z + C.z);
var uwS3 = new Point3D(-uwS1.x, -uwS1.y, -uwS1.z);
var uwS4 = new Point3D(-uwS2.x, -uwS2.y, -uwS2.z);
var uw = new face([uwS1, uwS2, uwS3, uwS4], true, 'yellow', 1, false, true, true, 0.4);

var vwS1 = new Point3D(B.x + C.x, B.y + C.y, B.z + C.z);
var vwS2 = new Point3D(-B.x + C.x, -B.y + C.y, -B.z + C.z);
var vwS3 = new Point3D(-vwS1.x, -vwS1.y, -vwS1.z);
var vwS4 = new Point3D(-vwS2.x, -vwS2.y, -vwS2.z);
var vw = new face([vwS1, vwS2, vwS3, vwS4], true, 'red', 1, false, true, true, 0.4);

volume = new shape([Ox, Oy, Oz, u, v, w, uv, uw, vw]);

/* fin de la description de volume */


function selectVisibles()
{
    switch (selector)
    {
        case 0:
            uv.visible = true;
            uw.visible = false;
            vw.visible = false;
            break;
        case 1:
            uv.visible = false;
            uw.visible = true;
            vw.visible = false;
            break;
        case 2:
            uv.visible = false;
            uw.visible = false;
            vw.visible = true;
            break;
        default:
            uv.visible = true;
            uw.visible = false;
            vw.visible = false;
    }

}
function onButton1()
{
    selector++;
    selector = selector % 3;
    selectVisibles();
}

function onButton2()
{
    clearInterval(timer);
    A.x = 2 + Random(5);
    A.y = 2 + Random(5);
    A.z = 2 + Random(5);
    B.x = 2 + Random(5);
    B.y = 2 + Random(5);
    B.z = 2 + Random(5);
    C.x = (A.y * B.z - A.z * B.y) / 3;
    C.y = (A.z * B.x - A.x * B.y) / 3;
    C.z = (A.x * B.y - A.y * B.x) / 3;
    uvS1.x = A.x + B.x;
    uvS1.y = A.y + B.y;
    uvS1.z = A.z + B.z;
    uvS2.x = -A.x + B.x;
    uvS2.y = -A.y + B.y;
    uvS2.z = -A.z + B.z;
    uvS3.x = -uvS1.x;
    uvS3.y = -uvS1.y;
    uvS3.z = -uvS1.z;
    uvS4.x = -uvS2.x;
    uvS4.y = -uvS2.y;
    uvS4.z = -uvS2.z;
    uv.vertices = [uvS1, uvS2, uvS3, uvS4];

    vwS1.x = B.x + C.x;
    vwS1.y = B.y + C.y;
    vwS1.z = B.z + C.z;
    vwS2.x = -B.x + C.x;
    vwS2.y = -B.y + C.y;
    vwS2.z = -B.z + C.z;
    vwS3.x = -vwS1.x;
    vwS3.y = -vwS1.y;
    vwS3.z = -vwS1.z;
    vwS4.x = -vwS2.x;
    vwS4.y = -vwS2.y;
    vwS4.z = -vwS2.z;
    vw.vertices = [vwS1, vwS2, vwS3, vwS4];

    uwS1.x = A.x + C.x;
    uwS1.y = A.y + C.y;
    uwS1.z = A.z + C.z;
    uwS2.x = -A.x + C.x;
    uwS2.y = -A.y + C.y;
    uwS2.z = -A.z + C.z;
    uwS3.x = -uwS1.x;
    uwS3.y = -uwS1.y;
    uwS3.z = -uwS1.z;
    uwS4.x = -uwS2.x;
    uwS4.y = -uwS2.y;
    uwS4.z = -uwS2.z;
    uw.vertices = [uwS1, uwS2, uwS3, uwS4];

    startDemo();
}

function loop()
{
    initCanvas();
    volume.draw(ctx, angle);
    x.markName(ctx, angle, 'white');
    y.markName(ctx, angle, 'white');
    z.markName(ctx, angle, 'white');
    O.markName(ctx, angle, 'white');
    A.markName(ctx, angle, 'white');
    B.markName(ctx, angle, 'white');
    C.markName(ctx, angle, 'white');
    if (runAnimation)
        angle += 2;
}

document.getElementById('myCanvas').addEventListener('click', function () {
// flip flag
    runAnimation = !runAnimation;

});
function startDemo()
{
    selectVisibles();
    timer = setInterval(loop, speed);
    //volume.draw(ctx,0);
}
startDemo();