/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var spaceName9 = {};
spaceName9.angle = 0;
spaceName9.canvas = document.getElementById("myCanvas9");
spaceName9.ctx = spaceName9.canvas.getContext("2d");
spaceName9.range1 = document.getElementById("myRange1");
spaceName9.range1.value = 1.5;
spaceName9.viewWidth = spaceName9.canvas.width;
spaceName9.viewHeight = spaceName9.canvas.height;
spaceName9.fov = 250;
spaceName9.viewDistance = 20;
spaceName9.speed = 120;
spaceName9.runAnimation = true;
spaceName9.volume;
spaceName9.timer;
spaceName9.lambda = 1.5;
/* code pour dessiner les vecteurs */
spaceName9.arrow = [
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
    drawFilledPolygon(context, translateShape(rotateShape(spaceName9.arrow, ang), x2, y2));
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
        factor = spaceName9.fov / (spaceName9.viewDistance + this.z)
        x = this.x * factor + spaceName9.viewWidth / 2
        y = this.y * factor + spaceName9.viewHeight / 2
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
spaceName9.initCanvas= function()
{
    spaceName9.ctx.fillStyle = "rgb(0,0,0)";
    spaceName9.ctx.fillRect(0, 0, spaceName9.viewWidth, spaceName9.viewHeight);

}

spaceName9.O = new Point3D(0, 0, 0, 'O');
spaceName9.x = new Point3D(spaceName9.viewDistance / 2, 0, 0, 'x');
spaceName9.y = new Point3D(0, spaceName9.viewDistance / 2, 0, 'y');
spaceName9.z = new Point3D(0, 0, spaceName9.viewDistance / 2, 'z');
spaceName9.Ox = new face([spaceName9.O, spaceName9.x], true, 'white', 1, true);
spaceName9.Oy = new face([spaceName9.O, spaceName9.y], true, 'white', 1, true);
spaceName9.Oz = new face([spaceName9.O, spaceName9.z], true, 'white', 1, true);
spaceName9.I = new Point3D(1, 0, 0, 'i');
spaceName9.J = new Point3D(0, 1, 0, 'j');
spaceName9.K = new Point3D(0, 0, 1, 'k');
spaceName9.i = new face([spaceName9.O, spaceName9.I], true, 'white', 1, true);
spaceName9.j = new face([spaceName9.O, spaceName9.J], true, 'white', 1, true);
spaceName9.k = new face([spaceName9.O, spaceName9.K], true, 'white', 1, true);

spaceName9.A = new Point3D(1, 1, 0, 'A');
spaceName9.B = new Point3D(5, 1, 0, 'B');
spaceName9.C = new Point3D(5, 5, 0, 'C');
spaceName9.D = new Point3D(1, 5, 0, 'D');
spaceName9.E = new Point3D(3, 3, 5, 'E');
spaceName9.ABCD = new face([spaceName9.A, spaceName9.B, spaceName9.C, spaceName9.D], true, 'yellow', 1, false, true, true, 0.4);
spaceName9.ABE = new face([spaceName9.A, spaceName9.B, spaceName9.E], true, 'yellow', 1, false, true, true, 0.4);
spaceName9.BCE = new face([spaceName9.B, spaceName9.C, spaceName9.E], true, 'yellow', 1, false, true, true, 0.4);
spaceName9.CDE = new face([spaceName9.C, spaceName9.D, spaceName9.E], true, 'yellow', 1, false, true, true, 0.4);
spaceName9.ADE = new face([spaceName9.A, spaceName9.D, spaceName9.E], true, 'yellow', 1, false, true, true, 0.4);

spaceName9.A1 = new Point3D(1, 1, 0, 'A1');
spaceName9.B1 = new Point3D(5, 1, 0, 'B1');
spaceName9.C1 = new Point3D(5, 5, 0, 'C1');
spaceName9.D1 = new Point3D(1, 5, 0, 'D1');
spaceName9.E1 = new Point3D(3, 3, 5, 'E1');
spaceName9.ABCD1 = new face([spaceName9.A1, spaceName9.B1, spaceName9.C1, spaceName9.D1], true, 'purple', 1, false, true, true, 0.4);
spaceName9.ABE1 = new face([spaceName9.A1, spaceName9.B1, spaceName9.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName9.BCE1 = new face([spaceName9.B1, spaceName9.C1, spaceName9.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName9.CDE1 = new face([spaceName9.C1, spaceName9.D1, spaceName9.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName9.ADE1 = new face([spaceName9.A1, spaceName9.D1, spaceName9.E1], true, 'purple', 1, false, true, true, 0.4);
spaceName9.volume = new shape([spaceName9.Ox, spaceName9.Oy, spaceName9.Oz, spaceName9.i, spaceName9.j, spaceName9.k,
    spaceName9.ABCD, spaceName9.ABE, spaceName9.BCE, spaceName9.CDE, spaceName9.ADE,
    spaceName9.ABCD1, spaceName9.ABE1, spaceName9.BCE1, spaceName9.CDE1, spaceName9.ADE1]);

/* fin de la description de volume */

spaceName9.mult = function ()
{
    spaceName9.A1.x = spaceName9.lambda;
    spaceName9.A1.y = spaceName9.lambda;
    spaceName9.B1.x = 5 * spaceName9.lambda;
    spaceName9.C1.x = 5 * spaceName9.lambda;
    spaceName9.C1.y = 5 * spaceName9.lambda;
    spaceName9.D1.x = spaceName9.lambda;
    spaceName9.D1.y = 5 * spaceName9.lambda;
    spaceName9.E1.x = 3 * spaceName9.lambda;
    spaceName9.E1.y = 3 * spaceName9.lambda;
    spaceName9.E1.z = 5 * spaceName9.lambda;

}

function onButton2()
{
    clearInterval(spaceName9.timer);
    spaceName9.startDemo();
}



spaceName9.loop = function ()
{
    spaceName9.initCanvas();
    spaceName9.mult();
    spaceName9.volume.draw(spaceName9.ctx, spaceName9.angle);
    spaceName9.x.markName(spaceName9.ctx, spaceName9.angle, 'white');
    spaceName9.y.markName(spaceName9.ctx, spaceName9.angle, 'white');
    spaceName9.z.markName(spaceName9.ctx, spaceName9.angle, 'white');
    spaceName9.O.markName(spaceName9.ctx, spaceName9.angle, 'white');
    if (spaceName9.runAnimation)
        spaceName9.angle += 2;
}

document.getElementById('myCanvas9').addEventListener('click', function () {
// flip flag
    spaceName9.runAnimation = !spaceName9.runAnimation;

});
spaceName9.startDemo = function ()
{
    spaceName9.timer = setInterval(spaceName9.loop, spaceName9.speed);

}



 	function myFunction(val) {
    clearInterval(spaceName9.timer);
    spaceName9.lambda = parseFloat(val);
    spaceName9.startDemo(); 		
}
    


spaceName9.startDemo();