/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var spaceName1 = {};
spaceName1.angle = 90;
spaceName1.canvas = document.getElementById("myCanvas10");
spaceName1.ctx = spaceName1.canvas.getContext("2d");
spaceName1.viewWidth = spaceName1.canvas.width;
spaceName1.viewHeight = spaceName1.canvas.height;
spaceName1.fov = 250;
spaceName1.viewDistance = 20;
spaceName1.speed = 120;
spaceName1.runAnimation = true;
spaceName1.volume;
spaceName1.timer;
spaceName1.axrot = 3;
spaceName1.alpha = 0;
spaceName1.range1 = document.getElementById("myRange1");
spaceName1.range1.value = 1;
spaceName1.lambda = 1;
spaceName1.range2 = document.getElementById("myRange2");
spaceName1.range2.value = 0;

/* code pour dessiner les vecteurs */
spaceName1.arrow = [
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
    drawFilledPolygon(context, translateShape(rotateShape(spaceName1.arrow, ang), x2, y2));
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
        factor = spaceName1.fov / (spaceName1.viewDistance + this.z)
        x = this.x * factor + spaceName1.viewWidth / 2
        y = this.y * factor + spaceName1.viewHeight / 2
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
spaceName1.initCanvas = function ()
{
    spaceName1.ctx.fillStyle = "rgb(0,0,0)";
    spaceName1.ctx.fillRect(0, 0, spaceName1.viewWidth, spaceName1.viewHeight);


}

/* fin de la description de volume */




spaceName1.changeAlpha = function (val)
{
    spaceName1.alpha = val;
    clearInterval(spaceName1.timer);
    spaceName1.startDemo();
}

spaceName1.changeLambda = function (val)
{
    spaceName1.lambda = val;
    clearInterval(spaceName1.timer);
    spaceName1.B.x *= spaceName1.lambda;
    spaceName1.B.y *= spaceName1.lambda;
    spaceName1.B.z *= spaceName1.lambda;
    spaceName1.startDemo();
}

spaceName1.initiate = function (lambda, alpha)
{
    spaceName1.O = new Point3D(0, 0, 0, 'O');
    spaceName1.x = new Point3D(spaceName1.viewDistance / 2, 0, 0, 'x');
    spaceName1.y = new Point3D(0, spaceName1.viewDistance / 2, 0, 'y');
    spaceName1.z = new Point3D(0, 0, spaceName1.viewDistance / 2, 'z');
    spaceName1.Ox = new face([spaceName1.O, spaceName1.x], true, 'white', 1, true);
    spaceName1.Oy = new face([spaceName1.O, spaceName1.y], true, 'white', 1, true);
    spaceName1.Oz = new face([spaceName1.O, spaceName1.z], true, 'white', 1, true);
    spaceName1.I = new Point3D(1, 0, 0, 'i');
    spaceName1.J = new Point3D(0, 1, 0, 'j');
    spaceName1.K = new Point3D(0, 0, 1, 'k');
    spaceName1.i = new face([spaceName1.O, spaceName1.I], true, 'white', 1, true);
    spaceName1.j = new face([spaceName1.O, spaceName1.J], true, 'white', 1, true);
    spaceName1.k = new face([spaceName1.O, spaceName1.K], true, 'white', 1, true);
    spaceName1.A = new Point3D(3, 0, 0, 'A');
    spaceName1.B = new Point3D(0, 3*spaceName1.lambda, 0, 'B').rotateZ(spaceName1.alpha,'B');
    spaceName1.u = new face([spaceName1.O, spaceName1.A], true, 'blue', 1, true);
    spaceName1.C=new Point3D(0,0,spaceName1.A.x*spaceName1.B.y-spaceName1.A.y*spaceName1.B.x);
    spaceName1.w = new face([spaceName1.O, spaceName1.C], true, 'pink', 1, true);
    spaceName1.D=new Point3D(spaceName1.A.x+spaceName1.B.x,spaceName1.A.y+spaceName1.B.y,spaceName1.A.z+spaceName1.B.z, 'D');
    spaceName1.OADB = new face([spaceName1.O, spaceName1.A, spaceName1.D, spaceName1.B], true, 'yellow', 1, false, true, true, 0.4);
}

spaceName1.loop = function ()
{
    spaceName1.initCanvas();
    spaceName1.v = new face([spaceName1.O, spaceName1.B], true, 'green', 1, true);
    spaceName1.volume = new shape([spaceName1.Ox, spaceName1.Oy, spaceName1.Oz, spaceName1.i, spaceName1.j, spaceName1.k,
         spaceName1.OADB, spaceName1.u, spaceName1.v, spaceName1.w ]);
    spaceName1.volume.draw(spaceName1.ctx, spaceName1.angle);
    spaceName1.x.markName(spaceName1.ctx, spaceName1.angle, 'white');
    spaceName1.y.markName(spaceName1.ctx, spaceName1.angle, 'white');
    spaceName1.z.markName(spaceName1.ctx, spaceName1.angle, 'white');
    spaceName1.O.markName(spaceName1.ctx, spaceName1.angle, 'white');
    if (spaceName1.runAnimation)
        spaceName1.angle += 2;
}

document.getElementById('myCanvas10').addEventListener('click', function () {
// flip flag
    spaceName1.runAnimation = !spaceName1.runAnimation;

});
spaceName1.startDemo = function ()
{
    spaceName1.initiate();
    spaceName1.timer = setInterval(spaceName1.loop, spaceName1.speed);

}


spaceName1.startDemo();