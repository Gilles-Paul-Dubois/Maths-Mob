var nameSpace3 = {};

nameSpace3.anglex = 0;
nameSpace3.angley = 0;
nameSpace3.anglez = 0;
nameSpace3.canvas = document.getElementById("myCanvas3");
nameSpace3.ctx = nameSpace3.canvas.getContext("2d");
nameSpace3.textzone1 = document.getElementById("mytext31");
nameSpace3.textzone1.style.width="100%";
nameSpace3.range1 = document.getElementById("myRange31");
nameSpace3.range1.value = 1;
nameSpace3.range2 = document.getElementById("myRange32");
nameSpace3.range2.value = 0;
nameSpace3.viewWidth = nameSpace3.canvas.width;
nameSpace3.viewHeight = nameSpace3.canvas.height;
nameSpace3.fov = 250;
nameSpace3.viewDistance = 20;
nameSpace3.speed = 120;
nameSpace3.runAnimation = true;
nameSpace3.volume;
nameSpace3.timer;
nameSpace3.deltax = 0;


nameSpace3.initCanvas = function ()
{
    nameSpace3.ctx.fillStyle = "rgb(0,0,0)";

    nameSpace3.textzone1.style.width="100%";;

}

nameSpace3.O = new Point3D(0, 0, 0, 'O');
nameSpace3.x = new Point3D(nameSpace3.viewDistance / 2, 0, 0, 'x');
nameSpace3.y = new Point3D(0, nameSpace3.viewDistance / 2, 0, 'y');
nameSpace3.z = new Point3D(0, 0, nameSpace3.viewDistance / 2, 'z');
nameSpace3.Ox = new face([nameSpace3.O, nameSpace3.x], true, 'white', 1, true);
nameSpace3.Oy = new face([nameSpace3.O, nameSpace3.y], true, 'white', 1, true);
nameSpace3.Oz = new face([nameSpace3.O, nameSpace3.z], true, 'white', 1, true);
nameSpace3.I = new Point3D(1, 0, 0, 'i');
nameSpace3.J = new Point3D(0, 1, 0, 'j');
nameSpace3.K = new Point3D(0, 0, 1, 'k');
nameSpace3.i = new face([nameSpace3.O, nameSpace3.I], true, 'white', 1, true);
nameSpace3.j = new face([nameSpace3.O, nameSpace3.J], true, 'white', 1, true);
nameSpace3.k = new face([nameSpace3.O, nameSpace3.K], true, 'white', 1, true);
nameSpace3.radius = 5;
nameSpace3.deltah = -4;
nameSpace3.h = 4;
nameSpace3.n = 5;
nameSpace3.fillCircle1 = function ()
{
    nameSpace3.C1P = [];
    for (var t = 0; t < 360; t += 6)
    {
        nameSpace3.C1P.push(new Point3D(nameSpace3.radius * Math.cos(t * Math.PI / 180), nameSpace3.radius * Math.sin(t * Math.PI / 180), nameSpace3.deltah));
    }
    nameSpace3.C1F = new face(nameSpace3.C1P, true, 'yellow', 1, false, true, false, 1);
}

nameSpace3.fillCircle2 = function ()
{
    nameSpace3.C2P = [];
    for (var t = 0; t < 360; t += 6)
    {
        nameSpace3.C2P.push(new Point3D(nameSpace3.deltax + nameSpace3.radius * Math.cos(t * Math.PI / 180), nameSpace3.radius * Math.sin(t * Math.PI / 180), nameSpace3.h + nameSpace3.deltah));
    }
    nameSpace3.C2F = new face(nameSpace3.C2P, true, 'yellow', 1, false, true, false, 1);
}
nameSpace3.fillPoly1 = function (n)
{
    nameSpace3.P1P = [];
    var dt = 360 / n;
    for (var t = 0; t < 360; t += dt)
    {
        nameSpace3.P1P.push(new Point3D(nameSpace3.radius * Math.cos(t * Math.PI / 180), nameSpace3.radius * Math.sin(t * Math.PI / 180), nameSpace3.deltah));
    }
    nameSpace3.P1F = new face(nameSpace3.P1P, true, 'purple', 2, false, true, false, 1);
}

nameSpace3.fillPoly2 = function (n)
{
    nameSpace3.P2P = [];
    var dt = 360 / n;
    for (var t = 0; t < 360; t += dt)
    {
        nameSpace3.P2P.push(new Point3D(nameSpace3.deltax + nameSpace3.radius * Math.cos(t * Math.PI / 180), nameSpace3.radius * Math.sin(t * Math.PI / 180), nameSpace3.h + nameSpace3.deltah));
    }
    nameSpace3.P2F = new face(nameSpace3.P2P, true, 'purple', 2, false, true, false, 1);
}

nameSpace3.fillLines = function (n)
{
    var i, P1, P2;
    nameSpace3.Lines = [];
    for (i = 0; i < n; i++)
    {
        P1 = nameSpace3.P1P[i];
        P2 = nameSpace3.P2P [i];
        nameSpace3.Lines.push(new face([P1, P2], true, 'yellow', 1, false, true, false, 1));
    }
}

nameSpace3.fillCircle1();
nameSpace3.fillCircle2();
nameSpace3.fillPoly1(nameSpace3.n);
nameSpace3.fillPoly2(nameSpace3.n);
nameSpace3.fillLines(nameSpace3.n);
nameSpace3.volume = new shape([nameSpace3.Ox, nameSpace3.Oy, nameSpace3.Oz, nameSpace3.i, nameSpace3.j, nameSpace3.k,
    nameSpace3.C1F, nameSpace3.C2F, nameSpace3.P1F, nameSpace3.P2F]);
nameSpace3.gen = new shape(nameSpace3.Lines);


nameSpace3.onButton1 = function ()
{
    clearInterval(nameSpace3.timer);
    nameSpace3.n += 5;
    nameSpace3.fillPoly1(nameSpace3.n);
    nameSpace3.fillPoly2(nameSpace3.n);
    nameSpace3.fillLines(nameSpace3.n);
    nameSpace3.volume = new shape([nameSpace3.Ox, nameSpace3.Oy, nameSpace3.Oz, nameSpace3.i, nameSpace3.j, nameSpace3.k,
        nameSpace3.C1F, nameSpace3.C2F, nameSpace3.P1F, nameSpace3.P2F]);
    nameSpace3.gen = new shape(nameSpace3.Lines);
    nameSpace3.startDemo(); // and restart
}

nameSpace3.changer1 = function (val)
{
    clearInterval(nameSpace3.timer);
    nameSpace3.h = 4 * parseFloat(val);
    nameSpace3.fillCircle1();
    nameSpace3.fillCircle2();
    nameSpace3.fillPoly1(nameSpace3.n);
    nameSpace3.fillPoly2(nameSpace3.n);
    nameSpace3.fillLines(nameSpace3.n);
    nameSpace3.volume = new shape([nameSpace3.Ox, nameSpace3.Oy, nameSpace3.Oz, nameSpace3.i, nameSpace3.j, nameSpace3.k,
        nameSpace3.C1F, nameSpace3.C2F, nameSpace3.P1F, nameSpace3.P2F]);
    nameSpace3.gen = new shape(nameSpace3.Lines)
    nameSpace3.startDemo(); // and restart
}
nameSpace3.changer2 = function (val)
{
    clearInterval(nameSpace3.timer);
    nameSpace3.deltax = parseFloat(val);
    nameSpace3.fillCircle2();
    nameSpace3.fillPoly2(nameSpace3.n);
    nameSpace3.fillLines(nameSpace3.n);
    nameSpace3.volume = new shape([nameSpace3.Ox, nameSpace3.Oy, nameSpace3.Oz, nameSpace3.i, nameSpace3.j, nameSpace3.k,
        nameSpace3.C1F, nameSpace3.C2F, nameSpace3.P1F, nameSpace3.P2F]);
    nameSpace3.gen = new shape(nameSpace3.Lines)
    nameSpace3.startDemo(); // and restart
}



nameSpace3.loop = function ()
{
    nameSpace3.ctx.fillStyle = "rgb(0,0,0)";
    nameSpace3.ctx.fillRect(0, 0, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.volume.draw(nameSpace3.ctx, nameSpace3.anglex, nameSpace3.angley, nameSpace3.anglez, nameSpace3.fov, nameSpace3.viewDistance, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.gen.draw(nameSpace3.ctx, nameSpace3.anglex, nameSpace3.angley, nameSpace3.anglez, nameSpace3.fov, nameSpace3.viewDistance, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.x.markName(nameSpace3.ctx, nameSpace3.anglex, nameSpace3.angley, nameSpace3.anglez, 'white', nameSpace3.fov, nameSpace3.viewDistance, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.y.markName(nameSpace3.ctx, nameSpace3.anglex, nameSpace3.angley, nameSpace3.anglez, 'white', nameSpace3.fov, nameSpace3.viewDistance, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.z.markName(nameSpace3.ctx, nameSpace3.anglex, nameSpace3.angley, nameSpace3.anglez, 'white', nameSpace3.fov, nameSpace3.viewDistance, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.O.markName(nameSpace3.ctx, nameSpace3.anglex, nameSpace3.angley, nameSpace3.anglez, 'white', nameSpace3.fov, nameSpace3.viewDistance, nameSpace3.viewWidth, nameSpace3.viewHeight);
    nameSpace3.s=nameSpace3.radius * nameSpace3.radius * Math.PI;
    nameSpace3.v1=nameSpace3.h*nameSpace3.n*(nameSpace3.radius*nameSpace3.radius)*Math.sin(2*Math.PI/nameSpace3.n)/2;
    nameSpace3.textzone1.value = "n="+nameSpace3.n+" S=" + nameSpace3.s.toFixed(2) +
            "  h=" + nameSpace3.h.toFixed(2)+ "  V1="+nameSpace3.v1.toFixed(2)+ "  V2="+(nameSpace3.s*nameSpace3.h).toFixed(2);

    if (nameSpace3.runAnimation)
    {
        nameSpace3.anglex += 2;
        nameSpace3.angley += 2;
        nameSpace3.anglez += 2;
    }


}

nameSpace3.canvas.addEventListener('click', function () {
// flip flag to run and start animation with single mouse click
    nameSpace3.runAnimation = !nameSpace3.runAnimation;

});
nameSpace3.startDemo = function ()
{
//    nameSpace3.loop();
    nameSpace3.timer = setInterval(nameSpace3.loop, nameSpace3.speed);

}
nameSpace3.initCanvas();
nameSpace3.startDemo();