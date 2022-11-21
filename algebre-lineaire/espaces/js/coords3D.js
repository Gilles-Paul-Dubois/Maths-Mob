/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var angle = 0;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var textzone1 = document.getElementById("mytext1");
var textzone2 = document.getElementById("mytext2");
var viewWidth = canvas.width;
var viewHeight = canvas.height;
var fov = 250;
var viewDistance = 20;
var speed = 120;
var runAnimation = true;
var volume;
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
    this.stringCoords = function ()
    {
        var i, j, k;
        i = Math.round(this.x * 100) / 100;
        j = Math.round(this.y * 100) / 100;
        k = Math.round(this.z * 100) / 100;
        return this.name + "=(" + i + "," + j + "," + k + ")";
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
        var F;
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
    textzone1.style.width = viewWidth + "px";
    textzone2.style.width = viewWidth + "px";

}
function Random(n) {
    return Math.floor(Math.random() * n);
}
/* description de volume */
function alea()
{
    return Random(14) - 7;
}
var O = new Point3D(0, 0, 0, 'O');
var x = new Point3D(viewDistance / 2, 0, 0, 'x');
var y = new Point3D(0, viewDistance / 2, 0, 'y');
var z = new Point3D(0, 0, viewDistance / 2, 'z');
var Ox = new face([O, x], true, 'white', 1, true);
var Oy = new face([O, y], true, 'white', 1, true);
var Oz = new face([O, z], true, 'white', 1, true);
var I = new Point3D(1, 0, 0, 'i');
var J = new Point3D(0, 1, 0, 'j');
var K = new Point3D(0, 0,1, 'k');

var A = new Point3D(alea(), 0, 0, 'u');
var B = new Point3D(0, alea(), 0, 'v');
var C = new Point3D(0, 0, alea(), 'w');
var u = new face([O, A], true, 'cyan', 1, true);
var v = new face([O, B], true, 'yellow', 1, true);
var w = new face([O, C], true, 'pink', 1, true);

var i = new face([O, I], true, 'white', 1, true);
var j = new face([O, J], true, 'white', 1, true);
var k = new face([O, K], true, 'white', 1, true);

var D = new Point3D(A.x + B.x, A.y + B.y, A.z + B.z);
var E = new Point3D(A.x + C.x, A.y + C.y, A.z + C.z);
var F = new Point3D(B.x + C.x, B.y + C.y, B.z + C.z);
var G = new Point3D(A.x + B.x + C.x, A.y + B.y + C.y, A.z + B.z + C.z,'M');

var OM=new face([O, G], true, 'red', 1, true);
var ADGE = new face([A, D, G, E], true, 'pink', 1, false, true, true, 0.4);
var OBFC = new face([O, B, F, C], true, 'pink', 1, false, true, true, 0.4);
var OADB = new face([O, A, D, B], true, 'cyan', 1, false, true, true, 0.4);
var CEGF = new face([C, E, G, F], true, 'cyan', 1, false, true, true, 0.4);
var OAEC = new face([O, A, E, C], true, 'yellow', 1, false, true, true, 0.4);
var BDGF = new face([B, D, G, F], true, 'yellow', 1, false, true, true, 0.4);
volume = new shape([Ox, Oy, Oz, ADGE, OBFC, OADB, CEGF, OAEC, BDGF, u, v, w,i,j,k,OM]);

/* fin de la description de volume */



function onButton2()
{
    clearInterval(timer);
    A.x = alea();
    A.y = 0;
    A.z = 0;
    B.x = 0;
    B.y = alea();
    B.z = 0;

    C.x = 0;
    C.y = 0;
    C.z = alea();


    D.x = A.x + B.x;
    D.y = A.y + B.y;
    D.z = A.z + B.z;

    E.x = A.x + C.x;
    E.y = A.y + C.y;
    E.z = A.z + C.z;

    F.x = B.x + C.x;
    F.y = B.y + C.y;
    F.z = B.z + C.z;

    G.x = A.x + B.x + C.x;
    G.y = A.y + B.y + C.y;
    G.z = A.z + B.z + C.z;

    ADGE.vertices = [A, D, G, E];
    OBFC.vertices = [O, B, F, C];
    OADB.vertices = [O, A, D, B];
    CEGF.vertices = [C, E, G, F];
    OAEC.vertices = [O, A, E, C];
    BDGF.vertices = [B, D, G, F];
    u.vertices = [O, A];
    v.vertices = [O, B];
    w.vertices = [O, C];
    OM.vertices=[O,G];
    volume.listFaces = [Ox, Oy, Oz, ADGE, OBFC, OADB, CEGF, OAEC, BDGF, u, v, w,i,j,k,OM];

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
    G.markName(ctx, angle, 'white');
    textzone1.value = "OM=u+v+w"+ "  "+"O"+G.stringCoords();
    textzone2.value = A.stringCoords() +"="+A.x+"i"+ " " + B.stringCoords()+"="+B.y+"j"+ " " + C.stringCoords()+"="+C.z+"k";
    if (runAnimation)
        angle += 2;
}

document.getElementById('myCanvas').addEventListener('click', function () {
// flip flag
    runAnimation = !runAnimation;

});
function startDemo()
{

    timer = setInterval(loop, speed);

}
startDemo();