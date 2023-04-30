var nameSpace4 = {};

nameSpace4.anglex = 0; // rotation around Ox
nameSpace4.angley = 0; // id
nameSpace4.anglez = 0; // id
nameSpace4.canvas = document.getElementById("myCanvas4");
nameSpace4.ctx = nameSpace4.canvas.getContext("2d");
nameSpace4.textzone1 = document.getElementById("mytext4");// zone to show some data you can create many
nameSpace4.range1 = document.getElementById("myRange4");
nameSpace4.range1.value = 1;
nameSpace4.viewWidth = nameSpace4.canvas.width;
nameSpace4.viewHeight = nameSpace4.canvas.height;
nameSpace4.fov = 250;// field of view
nameSpace4.viewDistance = 20; // distance of observer
nameSpace4.speed = 120; // speed of animation
nameSpace4.runAnimation = true;
nameSpace4.timer;

nameSpace4.pside = 16;
nameSpace4.pheight = 8;
nameSpace4.n = 4;

nameSpace4.initCanvas = function ()
{
    nameSpace4.ctx.fillStyle = "rgb(0,0,0)";
    nameSpace4.textzone1.style.width = "100%";

}

nameSpace4.buildPyramid = function ()
{
    var s = nameSpace4.pside;
    var h = nameSpace4.pheight;
    nameSpace4.A = new Point3D(s / 2, s / 2, 0);
    nameSpace4.B = new Point3D(-s / 2, s / 2, 0);
    nameSpace4.C = new Point3D(-s / 2, -s / 2, 0);
    nameSpace4.D = new Point3D(s / 2, -s / 2, 0);
    nameSpace4.E = new Point3D(0, 0, h);
    var a = nameSpace4.A;
    var b = nameSpace4.B;
    var c = nameSpace4.C;
    var d = nameSpace4.D;
    var e = nameSpace4.E;
    nameSpace4.AEB = new face([a, e, b], true, 'purple', 1, false, true, true, 0.2);
    nameSpace4.BEC = new face([b, e, c], true, 'purple', 1, false, true, true, 0.2);
    nameSpace4.CED = new face([c, e, d], true, 'purple', 1, false, true, true, 0.2);
    nameSpace4.DEA = new face([d, e, a], true, 'purple', 1, false, true, true, 0.2);
    nameSpace4.ABCD = new face([a, b, c, d], true, 'purple', 1, false, true, true, 0.2);
    nameSpace4.Pyr = new shape([nameSpace4.ABCD, nameSpace4.AEB, nameSpace4.BEC, nameSpace4.CED, nameSpace4.DEA]);
}

nameSpace4.buildSlice = function (i)
{
    var P0, P1, P2, P3;
    var Q0, Q1, Q2, Q3;
    var c = nameSpace4.pside;
    var h = nameSpace4.pheight;
    var n = nameSpace4.n;
    var x = c * (1 - (i + 1) / n) / 2;
    P0 = new Point3D(x, x, i * h / n);
    P1 = new Point3D(-x, x, i * h / n);
    P2 = new Point3D(-x, -x, i * h / n);
    P3 = new Point3D(x, -x, i * h / n);
    var j = i + 1;
    Q0 = new Point3D(x, x, j * h / n);
    Q1 = new Point3D(-x, x, j * h / n);
    Q2 = new Point3D(-x, -x, j * h / n);
    Q3 = new Point3D(x, -x, j * h / n);
    var F1, F2, F3, F4, F5, F6;
    F1 = new face([P0, P1, P2, P3], true, 'yellow', 1, false, true, true, 0.4);
    F2 = new face([Q0, Q1, Q2, Q3], true, 'yellow', 1, false, true, true, 0.4);
    F3 = new face([P0, Q0, Q1, P1], true, 'yellow', 1, false, true, true, 0.4);
    F4 = new face([P1, Q1, Q2, P2], true, 'yellow', 1, false, true, true, 0.4);
    F5 = new face([P2, Q2, Q3, P3], true, 'yellow', 1, false, true, true, 0.4);
    F6 = new face([P3, Q3, Q0, P0], true, 'yellow', 1, false, true, true, 0.4);
    return new shape([F1, F2, F3, F4, F5, F6]);
}
// points for the axis system better not to edit
nameSpace4.O = new Point3D(0, 0, 0, 'O');
nameSpace4.x = new Point3D(nameSpace4.viewDistance / 2, 0, 0, 'x');
nameSpace4.y = new Point3D(0, nameSpace4.viewDistance / 2, 0, 'y');
nameSpace4.z = new Point3D(0, 0, nameSpace4.viewDistance / 2, 'z');
nameSpace4.I = new Point3D(1, 0, 0, 'i');
nameSpace4.J = new Point3D(0, 1, 0, 'j');
nameSpace4.K = new Point3D(0, 0, 1, 'k');
// create your own points here
// exemple nameSpace4.A = new Point3D(3, 0, 0, 'A');
// you can omit name of point


// axes and unit vectors, leave like this, don't edit
nameSpace4.Ox = new face([nameSpace4.O, nameSpace4.x], true, 'white', 1, true);
nameSpace4.Oy = new face([nameSpace4.O, nameSpace4.y], true, 'white', 1, true);
nameSpace4.Oz = new face([nameSpace4.O, nameSpace4.z], true, 'white', 1, true);
nameSpace4.i = new face([nameSpace4.O, nameSpace4.I], true, 'white', 1, true);
nameSpace4.j = new face([nameSpace4.O, nameSpace4.J], true, 'white', 1, true);
nameSpace4.k = new face([nameSpace4.O, nameSpace4.K], true, 'white', 1, true);
// create your faces here
// constructor: face = function (vertices, visible, col, thickness, arrowend, close, fill, transparency)
// only first argument is mandatory
//example  nameSpace4.ADGE = new face([A, D, G, E], true, 'pink', 1, false, true, true, 0.4);

// note: lines are simply faces which are not closed with transparency 1 for full color.

// create your shapes here
// constructor shape = function (LF)
// just give an array of faces
nameSpace4.axes = new shape([nameSpace4.Ox, nameSpace4.Oy, nameSpace4.Oz, nameSpace4.i, nameSpace4.j, nameSpace4.k]);
nameSpace4.buildUniverse = function ()
{
    nameSpace4.buildPyramid();
    nameSpace4.universe = [nameSpace4.axes];
    for (var i = 0; i < nameSpace4.n-1; i++)
        nameSpace4.universe.push(nameSpace4.buildSlice(i));
    nameSpace4.universe.push(nameSpace4.Pyr);
}

//nameSpace4.buildUniverse();
// universe is just an array of shapes
// add your own shapes to the universe



/* end of universe description */



// exemple of interaction with controls outside of canvas push-button
nameSpace4.onButton1 = function ()
{
    clearInterval(nameSpace4.timer);
    nameSpace4.n++;
    nameSpace4.startDemo(); // and restart
}

// exemple of interaction with controls outside of canvas the same with slider
nameSpace4.changer1 = function (val)
{
    clearInterval(nameSpace4.timer);
    nameSpace4.pheight= 8*parseFloat(val); 
    nameSpace4.startDemo(); // and restart
}

nameSpace4.showObjects = function ()
{
    // shows all shapes in order    
    for (var i = 0; i < nameSpace4.universe.length; i++)
        nameSpace4.universe[i].draw(nameSpace4.ctx, nameSpace4.anglex, nameSpace4.angley, nameSpace4.anglez, nameSpace4.fov, nameSpace4.viewDistance, nameSpace4.viewWidth, nameSpace4.viewHeight);

}

nameSpace4.markpoints = function ()
{
    nameSpace4.x.markName(nameSpace4.ctx, nameSpace4.anglex, nameSpace4.angley, nameSpace4.anglez, 'white', nameSpace4.fov, nameSpace4.viewDistance, nameSpace4.viewWidth, nameSpace4.viewHeight);
    nameSpace4.y.markName(nameSpace4.ctx, nameSpace4.anglex, nameSpace4.angley, nameSpace4.anglez, 'white', nameSpace4.fov, nameSpace4.viewDistance, nameSpace4.viewWidth, nameSpace4.viewHeight);
    nameSpace4.z.markName(nameSpace4.ctx, nameSpace4.anglex, nameSpace4.angley, nameSpace4.anglez, 'white', nameSpace4.fov, nameSpace4.viewDistance, nameSpace4.viewWidth, nameSpace4.viewHeight);
    nameSpace4.O.markName(nameSpace4.ctx, nameSpace4.anglex, nameSpace4.angley, nameSpace4.anglez, 'white', nameSpace4.fov, nameSpace4.viewDistance, nameSpace4.viewWidth, nameSpace4.viewHeight);
    // mark own points which you like with names
}
nameSpace4.showData = function ()
{
    var v2=nameSpace4.pside*nameSpace4.pside*nameSpace4.pheight/3;
    var n= nameSpace4.n;
    var v1= v2-v2*(n+1)/(6*n*n);
    nameSpace4.textzone1.value = " n="+nameSpace4.n+ "  h="+nameSpace4.pheight+ "  V2="+v2.toFixed(2) +"  V1="+v1.toFixed(2);
}

nameSpace4.loop = function ()
{
    nameSpace4.ctx.fillStyle = "rgb(0,0,0)";
    nameSpace4.ctx.fillRect(0, 0, nameSpace4.viewWidth, nameSpace4.viewHeight);

    //nameSpace4.volume.draw(nameSpace4.ctx, nameSpace4.anglex, nameSpace4.angley, nameSpace4.anglez, nameSpace4.fov, nameSpace4.viewDistance, nameSpace4.viewWidth, nameSpace4.viewHeight);
    nameSpace4.showObjects();
    nameSpace4.markpoints();
    nameSpace4.showData();
    if (nameSpace4.runAnimation)
    {
        nameSpace4.anglex += 2;
        nameSpace4.angley += 2;
        nameSpace4.anglez += 2;
        // comment any of these when you do want rotation around the corresponding axis.
    }
}

nameSpace4.canvas.addEventListener('click', function () {
// flip flag to run and start animation with single mouse click on canvas
    nameSpace4.runAnimation = !nameSpace4.runAnimation;

});
nameSpace4.startDemo = function ()
{
    nameSpace4.buildUniverse();
    nameSpace4.timer = setInterval(nameSpace4.loop, nameSpace4.speed);
    // nameSpace4.loop();
    // for easy debugging comment first line and uncomment second
}
nameSpace4.initCanvas();  // some initialisation job to do 
nameSpace4.startDemo();// starts the whole affair