var nameSpace2 = {};

nameSpace2.anglex = 0; // rotation around Ox
nameSpace2.angley = 0; // id
nameSpace2.anglez = 0; // id
nameSpace2.canvas = document.getElementById("myCanvas");
nameSpace2.ctx = nameSpace2.canvas.getContext("2d");
nameSpace2.viewWidth = nameSpace2.canvas.width;
nameSpace2.viewHeight = nameSpace2.canvas.height;
nameSpace2.fov = 250;// field of view
nameSpace2.viewDistance = 20; // distance of observer
nameSpace2.speed = 120; // speed of animation
nameSpace2.runAnimation = true;
nameSpace2.timer;
nameSpace2.Random = function (n)
{
    return Math.floor(n * Math.random());
}
nameSpace2.randomize = function ()
{
    nameSpace2.xu = 1 + nameSpace2.Random(5);
    nameSpace2.yu = 1 + nameSpace2.Random(5);
    nameSpace2.zu = 0;
    nameSpace2.xv = 1 + nameSpace2.Random(5);
    nameSpace2.yv = 0;
    nameSpace2.zv = 1 + nameSpace2.Random(5);
    nameSpace2.xw = 0;
    nameSpace2.yw = 1 + nameSpace2.Random(5);
    nameSpace2.zw = 1 + nameSpace2.Random(5);
    nameSpace2.xP = 1 + nameSpace2.Random(2);
    nameSpace2.yP = 1 + nameSpace2.Random(2);
    nameSpace2.zP = 3 + nameSpace2.Random(2);
}

nameSpace2.randomize();

nameSpace2.initCanvas = function ()
{
    nameSpace2.ctx.fillStyle = "rgb(0,0,0)";

}

// points for the axis system better not to edit
nameSpace2.O = new Point3D(0, 0, 0, 'O');
nameSpace2.x = new Point3D(nameSpace2.viewDistance / 2, 0, 0, 'x');
nameSpace2.y = new Point3D(0, nameSpace2.viewDistance / 2, 0, 'y');
nameSpace2.z = new Point3D(0, 0, nameSpace2.viewDistance / 2, 'z');
nameSpace2.I = new Point3D(1, 0, 0, 'i');
nameSpace2.J = new Point3D(0, 1, 0, 'j');
nameSpace2.K = new Point3D(0, 0, 1, 'k');
// create your own points here
// exemple nameSpace2.A = new Point3D(3, 0, 0, 'A');
// you can omit name of point

// axes and unit vectors, leave like this, don't edit
nameSpace2.Ox = new face([nameSpace2.O, nameSpace2.x], true, 'white', 1, true);
nameSpace2.Oy = new face([nameSpace2.O, nameSpace2.y], true, 'white', 1, true);
nameSpace2.Oz = new face([nameSpace2.O, nameSpace2.z], true, 'white', 1, true);
nameSpace2.i = new face([nameSpace2.O, nameSpace2.I], true, 'white', 1, true);
nameSpace2.j = new face([nameSpace2.O, nameSpace2.J], true, 'white', 1, true);
nameSpace2.k = new face([nameSpace2.O, nameSpace2.K], true, 'white', 1, true);
// create your faces here
// constructor: face = function (vertices, visible, col, thickness, arrowend, close, fill, transparency)
// only first argument is mandatory
//example  nameSpace2.ADGE = new face([A, D, G, E], true, 'pink', 1, false, true, true, 0.4);

// note: lines are simply faces which are not closed with transparency 1 for full color.

// create your shapes here
// constructor shape = function (LF)
// just give an array of faces
nameSpace2.axes = new shape([nameSpace2.Ox, nameSpace2.Oy, nameSpace2.Oz, nameSpace2.i, nameSpace2.j, nameSpace2.k]);


// universe is just an array of shapes
// add your own shapes to the universe

/* end of universe description */



// exemple of interaction with controls outside of canvas push-button
nameSpace2.onButton1 = function ()
{
    clearInterval(nameSpace2.timer);
    nameSpace2.randomize();
    nameSpace2.startDemo(); // and restart
}

// exemple of interaction with controls outside of canvas the same with slider
nameSpace2.changer1 = function ()
{
    clearInterval(nameSpace2.timer);
    // use value returned by slider
    // var lambda= ParseFloat(nameSpace2.range1.value); 
    nameSpace2.startDemo(); // and restart
}

nameSpace2.showObjects = function ()
{
    // shows all shapes in order    
    for (var i = 0; i < nameSpace2.universe.length; i++)
        nameSpace2.universe[i].draw(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);

}

nameSpace2.markpoints = function ()
{
    nameSpace2.x.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.y.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.z.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.O.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.P.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.S.markName(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, 'white', nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    // mark own points which you like with names
}
nameSpace2.showData = function ()
{

}
nameSpace2.createObjects = function ()
{   // constructor: face = function (vertices, visible, col, thickness, arrowend, close, fill, transparency)

    function fillpol()
    {
        var P=nameSpace2.P;
        var A1=nameSpace2.A1;
        var B1=nameSpace2.B1;
        var C1=nameSpace2.C1;
        var x = nameSpace2.P.x;
        var y = nameSpace2.P.y;
        var z = nameSpace2.P.z;
        var ux=nameSpace2.A.x;
        var uy=nameSpace2.A.y;
        var uz=nameSpace2.A.z;
        var vx=nameSpace2.B.x;
        var vy=nameSpace2.B.y;
        var vz=nameSpace2.B.z; 
        var wx=nameSpace2.C.x;
        var wy=nameSpace2.C.y;
        var wz=nameSpace2.C.z;
        var SAB = new Point3D(x+ux+vx,y+uy+vy,z+uz+vz);
        var SAC = new Point3D(x+ux+wx,y+uy+wy,z+uz+wz);
        var SBC = new Point3D(x+wx+vx,y+wy+vy,z+wz+vz);
        nameSpace2.par1= new face ([P,A1,SAB,B1],true, 'yellow',1, false,true,true,0.4);
        nameSpace2.par2= new face ([P,A1,SAC,C1],true, 'yellow',1, false,true,true,0.4);
        nameSpace2.par3= new face ([P,B1,SBC,C1],true, 'yellow',1, false,true,true,0.4);
        var S = new Point3D(x+ux+wx+vx,y+uy+wy+vy,z+uz+wz+vz,'S');
        nameSpace2.par4= new face([B1,SAB,S,SBC],true, 'yellow',1, false,true,true,0.4);
        nameSpace2.par5= new face([A1,SAB,S,SAC],true, 'yellow',1, false,true,true,0.4);
        nameSpace2.par6= new face([C1,SAC,S,SBC],true, 'yellow',1, false,true,true,0.4);
        nameSpace2.PS=new face([P,S],true, 'white',1,true, false, false, 1 );
        nameSpace2.S=S;
        
    }
    
    nameSpace2.A = new Point3D(nameSpace2.xu, nameSpace2.yu, nameSpace2.zu);
    nameSpace2.u = new face([nameSpace2.O, nameSpace2.A], true, 'blue', 1, true, false, false, 1);
    nameSpace2.B = new Point3D(nameSpace2.xv, nameSpace2.yv, nameSpace2.zv);
    nameSpace2.v = new face([nameSpace2.O, nameSpace2.B], true, 'green', 1, true, false, false, 1);
    nameSpace2.C = new Point3D(nameSpace2.xw, nameSpace2.yw, nameSpace2.zw);
    nameSpace2.w = new face([nameSpace2.O, nameSpace2.C], true, 'red', 1, true, false, false, 1);
    nameSpace2.P = new Point3D(nameSpace2.xP, nameSpace2.yP, nameSpace2.zP, 'M');
    nameSpace2.A1 = new Point3D(nameSpace2.P.x + nameSpace2.A.x, nameSpace2.P.y + nameSpace2.A.y, nameSpace2.P.z + nameSpace2.A.z);
    nameSpace2.B1 = new Point3D(nameSpace2.P.x + nameSpace2.B.x, nameSpace2.P.y + nameSpace2.B.y, nameSpace2.P.z + nameSpace2.B.z);
    nameSpace2.C1 = new Point3D(nameSpace2.P.x + nameSpace2.C.x, nameSpace2.P.y + nameSpace2.C.y, nameSpace2.P.z + nameSpace2.C.z);
    nameSpace2.u1 = new face([nameSpace2.P, nameSpace2.A1], true, 'blue', 1, true, false, false, 1);
    nameSpace2.v1 = new face([nameSpace2.P, nameSpace2.B1], true, 'green', 1, true, false, false, 1);
    nameSpace2.w1 = new face([nameSpace2.P, nameSpace2.C1], true, 'red', 1, true, false, false, 1);

    fillpol();
    
    nameSpace2.universe = [nameSpace2.axes];
    nameSpace2.universe.push(nameSpace2.par1);
    nameSpace2.universe.push(nameSpace2.par2);
    nameSpace2.universe.push(nameSpace2.par3);
    nameSpace2.universe.push(nameSpace2.par4);
    nameSpace2.universe.push(nameSpace2.par5);
    nameSpace2.universe.push(nameSpace2.par6);
    nameSpace2.universe.push(nameSpace2.PS);
    
    nameSpace2.universe.push(nameSpace2.u);
    nameSpace2.universe.push(nameSpace2.v);
    nameSpace2.universe.push(nameSpace2.w);
    nameSpace2.universe.push(nameSpace2.u1);
    nameSpace2.universe.push(nameSpace2.v1);
    nameSpace2.universe.push(nameSpace2.w1);

}
nameSpace2.loop = function ()
{
    nameSpace2.ctx.fillStyle = "rgb(0,0,0)";
    nameSpace2.ctx.fillRect(0, 0, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.createObjects();
    //nameSpace2.volume.draw(nameSpace2.ctx, nameSpace2.anglex, nameSpace2.angley, nameSpace2.anglez, nameSpace2.fov, nameSpace2.viewDistance, nameSpace2.viewWidth, nameSpace2.viewHeight);
    nameSpace2.showObjects();
    nameSpace2.markpoints();
    nameSpace2.showData();
    if (nameSpace2.runAnimation)
    {
        nameSpace2.anglex += 2;
        nameSpace2.angley += 2;
        nameSpace2.anglez += 2;
        // comment any of these when you do want rotation around the corresponding axis.
    }
}

nameSpace2.canvas.addEventListener('click', function () {
// flip flag to run and start animation with single mouse click on canvas
    nameSpace2.runAnimation = !nameSpace2.runAnimation;

});
nameSpace2.startDemo = function ()
{
    nameSpace2.timer = setInterval(nameSpace2.loop, nameSpace2.speed);
    // nameSpace2.loop();
    // for easy debugging comment first line and uncomment second
}
nameSpace2.initCanvas();  // some initialisation job to do 
nameSpace2.startDemo();// starts the whole affair