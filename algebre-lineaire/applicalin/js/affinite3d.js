/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var spaceName10 = {};
spaceName10.angle = 0;
spaceName10.canvas = document.getElementById("myCanvas10");
spaceName10.ctx = spaceName10.canvas.getContext("2d");
spaceName10.range2 = document.getElementById("myRange2");
spaceName10.range2.value = -2;
spaceName10.viewWidth = spaceName10.canvas.width;
spaceName10.viewHeight = spaceName10.canvas.height;
spaceName10.fov = 250;
spaceName10.viewDistance = 20;
spaceName10.speed = 120;
spaceName10.runAnimation = true;
spaceName10.volume;
spaceName10.timer;
spaceName10.lambda = 1.5;
/* code pour dessiner les vecteurs */
spaceName10.arrow = [
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
    drawFilledPolygon(context, translateShape(rotateShape(spaceName10.arrow, ang), x2, y2));
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
        factor = spaceName10.fov / (spaceName10.viewDistance + this.z)
        x = this.x * factor + spaceName10.viewWidth / 2
        y = this.y * factor + spaceName10.viewHeight / 2
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
spaceName10.initCanvas = function()
{
    spaceName10.ctx.fillStyle = "rgb(0,0,0)";
    spaceName10.ctx.fillRect(0, 0, spaceName10.viewWidth, spaceName10.viewHeight);

}

spaceName10.O = new Point3D(0, 0, 0, 'O');
spaceName10.x = new Point3D(spaceName10.viewDistance / 2, 0, 0, 'x');
spaceName10.y = new Point3D(0, spaceName10.viewDistance / 2, 0, 'y');
spaceName10.z = new Point3D(0, 0, spaceName10.viewDistance / 2, 'z');
spaceName10.Ox = new face([spaceName10.O, spaceName10.x], true, 'white', 1, true);
spaceName10.Oy = new face([spaceName10.O, spaceName10.y], true, 'white', 1, true);
spaceName10.Oz = new face([spaceName10.O, spaceName10.z], true, 'white', 1, true);
spaceName10.I = new Point3D(1, 0, 0, 'i');
spaceName10.J = new Point3D(0, 1, 0, 'j');
spaceName10.K = new Point3D(0, 0, 1, 'k');
spaceName10.i = new face([spaceName10.O, spaceName10.I], true, 'white', 1, true);
spaceName10.j = new face([spaceName10.O, spaceName10.J], true, 'white', 1, true);
spaceName10.k = new face([spaceName10.O, spaceName10.K], true, 'white', 1, true);

spaceName10.A = new Point3D(1, 1, 0, 'A');
spaceName10.B = new Point3D(5, 1, 0, 'B');
spaceName10.C = new Point3D(5, 5, 0, 'C');
spaceName10.D = new Point3D(1, 5, 0, 'D');
spaceName10.E = new Point3D(3, 3, 5, 'E');
spaceName10.ABCD = new face([spaceName10.A, spaceName10.B, spaceName10.C, spaceName10.D], true, 'yellow', 1, false, true, true, 0.4);
spaceName10.ABE = new face([spaceName10.A, spaceName10.B, spaceName10.E], true, 'yellow', 1, false, true, true, 0.4);
spaceName10.BCE = new face([spaceName10.B, spaceName10.C, spaceName10.E], true, 'yellow', 1, false, true, true, 0.4);
spaceName10.CDE = new face([spaceName10.C, spaceName10.D, spaceName10.E], true, 'yellow', 1, false, true, true, 0.4);
spaceName10.ADE = new face([spaceName10.A, spaceName10.D, spaceName10.E], true, 'yellow', 1, false, true, true, 0.4);

spaceName10.A1 = new Point3D(1, 1, 0, 'A1');
spaceName10.B1 = new Point3D(5, 1, 0, 'B1');
spaceName10.C1 = new Point3D(5, 5, 0, 'C1');
spaceName10.D1 = new Point3D(1, 5, 0, 'D1');
spaceName10.E1 = new Point3D(3, 3, 5, 'E1');
spaceName10.ABCD1 = new face([spaceName10.A1, spaceName10.B1, spaceName10.C1, spaceName10.D1], true, 'purple', 1, false, true, true, 0.4);
spaceName10.ABE1 = new face([spaceName10.A1, spaceName10.B1, spaceName10.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName10.BCE1 = new face([spaceName10.B1, spaceName10.C1, spaceName10.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName10.CDE1 = new face([spaceName10.C1, spaceName10.D1, spaceName10.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName10.ADE1 = new face([spaceName10.A1, spaceName10.D1, spaceName10.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName10.volume = new shape([spaceName10.Ox, spaceName10.Oy, spaceName10.Oz, spaceName10.i, spaceName10.j, spaceName10.k,
    spaceName10.ABCD, spaceName10.ABE, spaceName10.BCE, spaceName10.CDE, spaceName10.ADE,
    spaceName10.ABCD1, spaceName10.ABE1, spaceName10.BCE1, spaceName10.CDE1, spaceName10.ADE1]);

/* fin de la description de volume */

spaceName10.mult = function ()
{

    spaceName10.E1.z = 5 * spaceName10.lambda;

}

function onButton2()
{
    clearInterval(spaceName10.timer);
    spaceName10.startDemo();
}



spaceName10.loop = function ()
{
    spaceName10.initCanvas();
    spaceName10.mult();
    spaceName10.volume.draw(spaceName10.ctx, spaceName10.angle);
    spaceName10.x.markName(spaceName10.ctx, spaceName10.angle, 'white');
    spaceName10.y.markName(spaceName10.ctx, spaceName10.angle, 'white');
    spaceName10.z.markName(spaceName10.ctx, spaceName10.angle, 'white');
    spaceName10.O.markName(spaceName10.ctx, spaceName10.angle, 'white');
    if (spaceName10.runAnimation)
        spaceName10.angle += 2;
}

document.getElementById('myCanvas10').addEventListener('click', function () {
// flip flag
    spaceName10.runAnimation = !spaceName10.runAnimation;

});
spaceName10.startDemo = function ()
{
 
    spaceName10.timer = setInterval(spaceName10.loop, spaceName10.speed);

}

 	function myFunction2(val) {
    clearInterval(spaceName10.timer);
    spaceName10.lambda = parseFloat(val);
    spaceName10.startDemo(); 		
}


spaceName10.startDemo();