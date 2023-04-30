var nameSpace2 = {};

nameSpace2.anglex = 218;
nameSpace2.angley = 21;
nameSpace2.anglez = 218;
nameSpace2.canvas = document.getElementById("myCanvas2");
nameSpace2.ctx = nameSpace2.canvas.getContext("2d");
nameSpace2.textzone1 = document.getElementById("mytext21");
nameSpace2.range1 = document.getElementById("myRange21");
nameSpace2.range1.value = 1;
nameSpace2.range2 = document.getElementById("myRange22");
nameSpace2.range2.value = 0;
nameSpace2.viewWidth = nameSpace2.canvas.width;
nameSpace2.viewHeight = nameSpace2.canvas.height;
nameSpace2.fov = 400;
nameSpace2.viewDistance = 20;
nameSpace2.speed = 120;
nameSpace2.runAnimation = true;
nameSpace2.volume;
nameSpace2.timer;
nameSpace2.deltax = -2;
nameSpace2.deltay = -2;
nameSpace2.deltah = -2;
nameSpace2.h = 4;
nameSpace2.initCanvas = function ()
{
    nameSpace2.ctx.fillStyle = "rgb(0,0,0)";

    nameSpace2.textzone1.style.width =  "100%x";

}

nameSpace2.O = new Point3D(0, 0, 0, 'O');
nameSpace2.x = new Point3D(nameSpace2.viewDistance / 2, 0, 0, 'x');
nameSpace2.y = new Point3D(0, nameSpace2.viewDistance / 2, 0, 'y');
nameSpace2.z = new Point3D(0, 0, nameSpace2.viewDistance / 2, 'z');
nameSpace2.Ox = new face([nameSpace2.O, nameSpace2.x], true, 'white', 1, true);
nameSpace2.Oy = new face([nameSpace2.O, nameSpace2.y], true, 'white', 1, true);
nameSpace2.Oz = new face([nameSpace2.O, nameSpace2.z], true, 'white', 1, true);
nameSpace2.I = new Point3D(1, 0, 0, 'i');
nameSpace2.J = new Point3D(0, 1, 0, 'j');
nameSpace2.K = new Point3D(0, 0, 1, 'k');
// create your points here
// exemple nameSpace2.A = new Point3D(alea(), 0, 0, 'u');
nameSpace2.P1 = new Point3D(0 + nameSpace2.deltax, 0 + nameSpace2.deltay, 0 + nameSpace2.deltah);
nameSpace2.P2 = new Point3D(3 + nameSpace2.deltax, 0 + nameSpace2.deltay, 0 + nameSpace2.deltah);
nameSpace2.P3 = new Point3D(4 + nameSpace2.deltax, 4 + nameSpace2.deltay, 0 + nameSpace2.deltah);
nameSpace2.P4 = new Point3D(1 + nameSpace2.deltax, 4 + nameSpace2.deltay, 0 + nameSpace2.deltah);
nameSpace2.P5 = new Point3D(0 + nameSpace2.deltax, 2 + nameSpace2.deltay, 0 + nameSpace2.deltah);
nameSpace2.LP = [nameSpace2.P1, nameSpace2.P2, nameSpace2.P3, nameSpace2.P4, nameSpace2.P5];

nameSpace2.Q1 = new Point3D(0 + nameSpace2.deltax, 0 + nameSpace2.deltay, nameSpace2.h + nameSpace2.deltah);
nameSpace2.Q2 = new Point3D(3 + nameSpace2.deltax, 0 + nameSpace2.deltay, nameSpace2.h + nameSpace2.deltah);
nameSpace2.Q3 = new Point3D(4 + nameSpace2.deltax, 4 + nameSpace2.deltay, nameSpace2.h + nameSpace2.deltah);
nameSpace2.Q4 = new Point3D(1 + nameSpace2.deltax, 4 + nameSpace2.deltay, nameSpace2.h + nameSpace2.deltah);
nameSpace2.Q5 = new Point3D(0 + nameSpace2.deltax, 2 + nameSpace2.deltay, nameSpace2.h + nameSpace2.deltah);
nameSpace2.LQ = [nameSpace2.Q1, nameSpace2.Q2, nameSpace2.Q3, nameSpace2.Q4, nameSpace2.Q5];

nameSpace2.i = new face([nameSpace2.O, nameSpace2.I], true, 'white', 1, true);
nameSpace2.j = new face([nameSpace2.O, nameSpace2.J], true, 'white', 1, true);
nameSpace2.k = new face([nameSpace2.O, nameSpace2.K], true, 'white', 1, true);
// create your faces here
nameSpace2.BP = new face(nameSpace2.LP, true, 'yellow', 1, false, true, true, 0.4);
nameSpace2.BQ = new face(nameSpace2.LQ, true, 'yellow', 1, false, true, true, 0.4);
nameSpace2.F3 = new face([nameSpace2.P1, nameSpace2.P2, nameSpace2.Q2, nameSpace2.Q1], true, 'yellow', 1, false, true, true, 0.4);
nameSpace2.F4 = new face([nameSpace2.P2, nameSpace2.P3, nameSpace2.Q3, nameSpace2.Q2], true, 'yellow', 1, false, true, true, 0.4);
nameSpace2.F5 = new face([nameSpace2.P3, nameSpace2.P4, nameSpace2.Q4, nameSpace2.Q3], true, 'yellow', 1, false, true, true, 0.4);
nameSpace2.F6 = new face([nameSpace2.P4, nameSpace2.P5, nameSpace2.Q5, nameSpace2.Q4], true, 'yellow', 1, false, true, true, 0.4);
nameSpace2.F7 = new face([nameSpace2.P5, nameSpace2.P1, nameSpace2.Q1, nameSpace2.Q5], true, 'yellow', 1, false, true, true, 0.4);

nameSpace2.volume = new shape([nameSpace2.Ox, nameSpace2.Oy, nameSpace2.Oz, nameSpace2.i, nameSpace2.j, nameSpace2.k, nameSpace2.BP, nameSpace2.BQ, nameSpace2.F3, nameSpace2.F4, nameSpace2.F5, nameSpace2.F6, nameSpace2.F7]);

/* fin de la description de nameSpace2.volume */



nameSpace2.decalx = function (dx)
{
    nameSpace2.Q1.x = 0 + nameSpace2.deltax + dx;
    nameSpace2.Q2.x = 3 + nameSpace2.deltax + dx;
    nameSpace2.Q3.x = 4 + nameSpace2.deltax + dx;
    nameSpace2.Q4.x = 1 + nameSpace2.deltax + dx;
    nameSpace2.Q5.x = 0 + nameSpace2.deltax + dx;
}

nameSpace2.changer2 = function (val)
{
    clearInterval(nameSpace2.timer);
    nameSpace2.decalx(parseFloat(val));
    nameSpace2.startDemo(); // and restart
}




nameSpace2.changer1 = function (val)
{
    clearInterval(nameSpace2.timer);
    nameSpace2.h = 4 * parseFloat(val);
    nameSpace2.Q1.z = nameSpace2.h + nameSpace2.deltah;
    nameSpace2.Q2.z = nameSpace2.h + nameSpace2.deltah;
    nameSpace2.Q3.z = nameSpace2.h + nameSpace2.deltah;
    nameSpace2.Q4.z = nameSpace2.h + nameSpace2.deltah;
    nameSpace2.Q5.z = nameSpace2.h + nameSpace2.deltah;
    nameSpace2.startDemo(); // and restart
}


nameSpace2.loop = function ()
{
    nameSpace2.ctx.fillStyle = "rgb(0,0,0)";
    nameSpace2.ctx.fillRect(0, 0, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.volume.draw(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.x.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.y.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.z.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.O.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
// mark points which you like with names
    //    nameSpace2.A.markName(nameSpace2.ctx, nameSpace2.angle, 'white');

    nameSpace2.textzone1.value = "h=" + nameSpace2.h + " S=13 " +" V=" +(nameSpace2.h*13).toFixed(2) ;

    if (nameSpace2.runAnimation)
    {
        nameSpace2.anglex += 2;
        nameSpace2.angley += 2;
        nameSpace2.anglez += 2;

    }


}

nameSpace2.canvas.addEventListener('click', function () {
// flip flag to run and start animation with single mouse click
    nameSpace2.runAnimation = !nameSpace2.runAnimation;

});
nameSpace2.startDemo = function ()
{

    nameSpace2.timer = setInterval(nameSpace2.loop, nameSpace2.speed);

}
nameSpace2.initCanvas();
nameSpace2.startDemo();