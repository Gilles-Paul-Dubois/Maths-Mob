// dessin des flèches
function drawLineArrow(context, x1, y1, x2, y2) {

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

    function rotateShape(shape, ang) {

        function rotatePoint(ang, x, y) {
            return [
                (x * Math.cos(ang)) - (y * Math.sin(ang)),
                (x * Math.sin(ang)) + (y * Math.cos(ang))
            ];
        }
        var rv = [];
        for (p in shape)
            rv.push(rotatePoint(ang, shape[p][0], shape[p][1]));
        return rv;
    }
    function translateShape(shape, x, y) {
        var rv = [];
        for (p in shape)
            rv.push([shape[p][0] + x, shape[p][1] + y]);
        return rv;
    }
    var generalArrow = [
        [2, 0],
        [-5, -2],
        [-5, 2]
    ];

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    var ang = Math.atan2(y2 - y1, x2 - x1);
    drawFilledPolygon(context, translateShape(rotateShape(generalArrow, ang), x2, y2));
}
;
/* fin du code dessin flèches */

// la classe point an 3D
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

    this.project = function (fov, viewDistance, viewWidth, viewHeight) {
        var factor, x, y
        factor = fov / (viewDistance + this.z)
        x = this.x * factor + viewWidth / 2
        y = this.y * factor + viewHeight / 2
        return new Point3D(x, y, this.z)
    }
    this.markName = function (context, anglex, angley, anglez, col, fov, viewDistance, viewWidth, viewHeight)
    {
        var r = this.rotateX(anglex).rotateY(angley).rotateZ(anglez);
        var p = r.project(fov, viewDistance, viewWidth, viewHeight);
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

// La classe face =polygone
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

    this.draw = function (context, anglex, angley, anglez, fov, viewDistance, viewWidth, viewHeight)
    {
        if (this.visible) {
            var n = this.vertices.length;
            var i;
            var LS = [];
            var S1, S2, S3;
            for (i = 0; i < n; i++)
            {
                S1 = this.vertices[i];
                S2 = (S1.rotateX(anglex).rotateY(angley).rotateZ(anglez));
                S3 = S2.project(fov, viewDistance, viewWidth, viewHeight);
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

// Un volume=polytope en 3D
var shape = function (LF)
{
    this.listFaces = LF;
    this.draw = function (context, anglex, angley, anglez, fov, viewDistance, viewWidth, viewHeight) {
        var i;
        var F;
        var n = this.listFaces.length;
        for (i = 0; i < n; i++)
        {
            F = this.listFaces[i];
            F.draw(context, anglex, angley, anglez, fov, viewDistance, viewWidth, viewHeight);
        }
    }
}
