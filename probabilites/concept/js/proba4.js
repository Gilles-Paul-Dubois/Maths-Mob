var nameSpace4 = {};
nameSpace4.xmin = 0;
nameSpace4.xmax = 12;
nameSpace4.ymin = 0;
nameSpace4.ymax = 12;
nameSpace4.board = JXG.JSXGraph.initBoard('box4', {boundingbox: [nameSpace4.xmin, nameSpace4.ymax, nameSpace4.xmax, nameSpace4.ymin], axis: false});
nameSpace4.A = nameSpace4.board.create('point', [0, 0], {visible: false});
nameSpace4.B = nameSpace4.board.create('point', [1, 0], {visible: false});
nameSpace4.AB = nameSpace4.board.create('line', [nameSpace4.A, nameSpace4.B], {visible: false});
nameSpace4.succes = 0;
nameSpace4.zonetexte = document.getElementById("text4");
nameSpace4.sla = nameSpace4.board.create('slider', [[0, 1], [3, 1], [1, 2, 3]]);
nameSpace4.slp = nameSpace4.board.create('slider', [[4, 1], [7, 1], [1, 2, 3]]);
nameSpace4.M = [];
nameSpace4.D = [];
nameSpace4.P = null;
nameSpace4.P1 = null;
nameSpace4.P2 = null;
nameSpace4.N=null;
nameSpace4.theta = null;

nameSpace4.bouton = function ()
{
    var i;
    for (i = 1; i <= 12; i++)
    {
        nameSpace4.board.removeObject(nameSpace4.M[i])
    }
    nameSpace4.board.removeObject(nameSpace4.P);
    nameSpace4.board.removeObject(nameSpace4.P1);
    nameSpace4.board.removeObject(nameSpace4.P2);
    nameSpace4.board.removeObject(nameSpace4.N);
    nameSpace4.board.update();
    for (i = 1; i <= 12; i++)
    {
        nameSpace4.M[i] = nameSpace4.board.create('point', [0, i * nameSpace4.slp.Value()], {visible: false});
        nameSpace4.D[i] = nameSpace4.board.create('parallel', [nameSpace4.M[i], nameSpace4.AB], {vsible: true});
    }
    nameSpace4.P = nameSpace4.board.create('point', [3 + 6 * Math.random(), 3 + 6 * Math.random()], {visible: false});
    nameSpace4.theta = Math.random() * Math.PI;
    nameSpace4.P1 = nameSpace4.board.create('point', [nameSpace4.P.X() + (nameSpace4.sla.Value() / 2) * Math.cos(nameSpace4.theta), nameSpace4.P.Y() + (nameSpace4.sla.Value() / 2) * Math.sin(nameSpace4.theta)], {visible: false});
    nameSpace4.P2 = nameSpace4.board.create('point', [nameSpace4.P.X() - (nameSpace4.sla.Value() / 2) * Math.cos(nameSpace4.theta), nameSpace4.P.Y() - (nameSpace4.sla.Value() / 2) * Math.sin(nameSpace4.theta)], {visible: false});
    nameSpace4.N=nameSpace4.board.create('segment',[nameSpace4.P1, nameSpace4.P2]);
    nameSpace4.success=false;
    for(i=1;i<=12;i++)
    {
        if (nameSpace4.M[i].Y()< nameSpace4.P1.Y() && nameSpace4.M[i].Y()> nameSpace4.P2.Y())
            nameSpace4.success=true;
    }
    if (nameSpace4.success)
   if(document.body.className.substring(0,2)=="fr")  
   {         nameSpace4.zonetexte.value='Succès';}
else
 {         nameSpace4.zonetexte.value='Success';}
    else
           if(document.body.className.substring(0,2)=="fr")  
   { nameSpace4.zonetexte.value='Echec';}
else
{ nameSpace4.zonetexte.value='Failure';}
    nameSpace4.board.update();

}
nameSpace4.bouton();