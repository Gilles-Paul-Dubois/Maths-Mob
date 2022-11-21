/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var spaceName2 = {};
spaceName2.angle = 0;
spaceName2.canvas = document.getElementById("myCanvas2");
spaceName2.ctx = spaceName2.canvas.getContext("2d");
spaceName2.viewWidth = spaceName2.canvas.width;
spaceName2.viewHeight = spaceName2.canvas.height;
spaceName2.fov = 250;
spaceName2.viewDistance = 20;
spaceName2.speed = 120;
spaceName2.runAnimation = true;
spaceName2.volume;
spaceName2.timer;

/* code pour dessiner les vecteurs */
spaceName2.arrow = [
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
    drawFilledPolygon(context, translateShape(rotateShape(spaceName2.arrow, ang), x2, y2));
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
    this.rotateX = function (angle, newname) {
        if (newname == undefined)
            newname = this.name;
        var rad, cosa, sina, y, z
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        y = this.y * cosa - this.z * sina
        z = this.y * sina + this.z * cosa
        return new Point3D(this.x, y, z, newname)
    }

    this.rotateY = function (angle, newname) {
        if (newname == undefined)
            newname = this.name;
        var rad, cosa, sina, x, z
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        z = this.z * cosa - this.x * sina
        x = this.z * sina + this.x * cosa
        return new Point3D(x, this.y, z)
    }

    this.rotateZ = function (angle, newname) {
        if (newname == undefined)
            newname = this.name;
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
        factor = spaceName2.fov / (spaceName2.viewDistance + this.z)
        x = this.x * factor + spaceName2.viewWidth / 2
        y = this.y * factor + spaceName2.viewHeight / 2
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
spaceName2.initCanvas = function ()
{
    spaceName2.ctx.fillStyle = "rgb(0,0,0)";
    spaceName2.ctx.fillRect(0, 0, spaceName2.viewWidth, spaceName2.viewHeight);

}
function Random(n) {
    var result = Math.floor(Math.random() * n);
    if (Math.Random < 0.5)
        result = -result;
    return result;
}

spaceName2.initiate = function (lambda, alpha)
{
    spaceName2.O = new Point3D(0, 0, 0, 'O');
    spaceName2.x = new Point3D(spaceName2.viewDistance / 2, 0, 0, 'x');
    spaceName2.y = new Point3D(0, spaceName2.viewDistance / 2, 0, 'y');
    spaceName2.z = new Point3D(0, 0, spaceName2.viewDistance / 2, 'z');
    spaceName2.Ox = new face([spaceName2.O, spaceName2.x], true, 'white', 1, true);
    spaceName2.Oy = new face([spaceName2.O, spaceName2.y], true, 'white', 1, true);
    spaceName2.Oz = new face([spaceName2.O, spaceName2.z], true, 'white', 1, true);
    spaceName2.I = new Point3D(1, 0, 0, 'i');
    spaceName2.J = new Point3D(0, 1, 0, 'j');
    spaceName2.K = new Point3D(0, 0, 1, 'k');
    spaceName2.i = new face([spaceName2.O, spaceName2.I], true, 'white', 1, true);
    spaceName2.j = new face([spaceName2.O, spaceName2.J], true, 'white', 1, true);
    spaceName2.k = new face([spaceName2.O, spaceName2.K], true, 'white', 1, true);
    spaceName2.A = new Point3D(Random(5), Random(5),  Random(5), 'A');
    spaceName2.B = new Point3D(Random(5), Random(5),  Random(5), 'B');
    spaceName2.u = new face([spaceName2.O, spaceName2.A], true, 'blue', 1, true);
    spaceName2.C = new Point3D(spaceName2.A.y*spaceName2.B.z-spaceName2.B.y*spaceName2.A.z,spaceName2.A.z*spaceName2.B.x-spaceName2.A.x*spaceName2.B.z, spaceName2.A.x * spaceName2.B.y - spaceName2.A.y * spaceName2.B.x);
    spaceName2.w = new face([spaceName2.O, spaceName2.C], true, 'pink', 1, true);
    spaceName2.D = new Point3D(spaceName2.A.x + spaceName2.B.x, spaceName2.A.y + spaceName2.B.y, spaceName2.A.z + spaceName2.B.z, 'D');
    spaceName2.OADB = new face([spaceName2.O, spaceName2.A, spaceName2.D, spaceName2.B], true, 'yellow', 1, false, true, true, 0.4);
}

spaceName2.loop = function ()
{
    spaceName2.initCanvas();
    spaceName2.v = new face([spaceName2.O, spaceName2.B], true, 'green', 1, true);
    spaceName2.volume = new shape([spaceName2.Ox, spaceName2.Oy, spaceName2.Oz, spaceName2.i, spaceName2.j, spaceName2.k,
        spaceName2.OADB, spaceName2.u, spaceName2.v, spaceName2.w]);
    spaceName2.volume.draw(spaceName2.ctx, spaceName2.angle);
    spaceName2.x.markName(spaceName2.ctx, spaceName2.angle, 'white');
    spaceName2.y.markName(spaceName2.ctx, spaceName2.angle, 'white');
    spaceName2.z.markName(spaceName2.ctx, spaceName2.angle, 'white');
    spaceName2.O.markName(spaceName2.ctx, spaceName2.angle, 'white');
    if (spaceName2.runAnimation)
        spaceName2.angle += 2;
}

document.getElementById('myCanvas2').addEventListener('click', function () {
// flip flag
    spaceName2.runAnimation = !spaceName2.runAnimation;

});
spaceName2.startDemo = function ()
{
    spaceName2.initiate();
    spaceName2.timer = setInterval(spaceName2.loop, spaceName2.speed);

}

spaceName2.New = function ()
{
    clearInterval(spaceName2.timer);
    spaceName2.startDemo();
}
spaceName2.startDemo();