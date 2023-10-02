/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace1 = {};
nameSpace1.choice = 0;
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-10, 10, 10, -10], axis: true});
nameSpace1.O = nameSpace1.board.create('point', [0, 0], {fixed: true, size: 1, name: 'O', withLabel: false});
nameSpace1.text1 = "Transformation V=OM(x,y) &rarr; V'=OM'(x'=x+1,y'=y+1)";
nameSpace1.text2 = "Transformation V=OM(x,y) &rarr; V'=OM'(x'=xy/5,y'=x-y)";
nameSpace1.text3 = "Transformation V=OM(x,y) &rarr; V'=OM'(x'=2x-y,y'=x+y)";
nameSpace1.text4 = "Transformation V=OM(x,y) &rarr; V'=OM'(x'=x\u00b2/5,y'=y\u00b2/5)";

nameSpace1.p2x = function ()
{
    switch (nameSpace1.choice)
    {

        case 1:
            return nameSpace1.p1.X() + 1;
            break;
        case 2:
            return nameSpace1.p1.X() * nameSpace1.p1.Y() / 5;
            break;
        case 3:
            return 2 * nameSpace1.p1.X() - nameSpace1.p1.Y();
        case 4:
            return nameSpace1.p1.X() * nameSpace1.p1.X() / 5;
            break;
        default:
            return 0;

    }
}
nameSpace1.p2y = function ()
{
    switch (nameSpace1.choice)
    {
        case 1:
            return nameSpace1.p1.Y() + 1;
            break;
        case 2:
            return nameSpace1.p1.X() - nameSpace1.p1.Y();
            break;
        case 3:
            return nameSpace1.p1.X() + nameSpace1.p1.Y();
        case 4:
            return nameSpace1.p1.Y() * nameSpace1.p1.Y() / 5;
            break;
        default:
            return 0;
            break;
    }
}



   if(document.body.className.substring(0,2)=="fr")  
   { nameSpace1.linear = function ()
{
    switch (nameSpace1.choice)
    {
        case 0:
            return;
        case 1:
            alert("Non linéaire car l'image du vecteur nul n'est pas le vecteur nul");
            break;
        case 2:
            alert("Non linéaire car non additive");
            break;
        case 3:
            alert("Application linéaire");
            break;
        case 4:
            alert("Non linéaire car non homogène");
            break;
    }
}}
else
{
nameSpace1.linear = function ()
{
    switch (nameSpace1.choice)
    {
        case 0:
            return;
        case 1:
            alert("Not linear because  image of null vector not null");
            break;
        case 2:
            alert("Not linear because  not additive");
            break;
        case 3:
            alert("Linear application ");
            break;
        case 4:
            alert("Not linear because because not homogeneous");
            break;
    }
}
}
nameSpace1.remove = function ()
{
    nameSpace1.board.removeObject(nameSpace1.p1);
    nameSpace1.board.removeObject(nameSpace1.li1);
    nameSpace1.board.removeObject(nameSpace1.p2);
    nameSpace1.board.removeObject(nameSpace1.li2);
    nameSpace1.board.removeObject(nameSpace1.txt);
}

nameSpace1.create = function ()
{
    nameSpace1.p1 = nameSpace1.board.create('point', [0, 1], {visible: true, trace: true, size: 1, name: 'M'});


    nameSpace1.li1 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.p1],
            {color: 'red', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM",
                withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'red'}});
    nameSpace1.p2 = nameSpace1.board.create('point', [nameSpace1.p2x, nameSpace1.p2y], {visible: true, color: 'blue', trace: true, size: 1, name: "M'"});
    nameSpace1.li2 = nameSpace1.board.create('line', [nameSpace1.O, nameSpace1.p2],
            {color: 'blue', straightFirst: false, straightLast: false, strokeWidth: 1, lastArrow: true, name: "Vecteur OM'",
                withLabel: false, label: {position: 'top', offsets: [0, 10], color: 'blue'}});
}
nameSpace1.choice1 = function ()
{
    if (nameSpace1.choice != 0)
    {
        nameSpace1.remove();
    }
    nameSpace1.choice = 1;
    nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, nameSpace1.text1], {fontSize: 15, color:'green'});
    nameSpace1.create();

}
nameSpace1.choice2 = function ()
{
    if (nameSpace1.choice != 0)
    {
        nameSpace1.remove();
    }
    nameSpace1.choice = 2;
    nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, nameSpace1.text2], {fontSize: 15, color: 'green'});
    nameSpace1.create();

}

nameSpace1.choice3 = function ()
{
    if (nameSpace1.choice != 0)
    {
        nameSpace1.remove();
    }
    nameSpace1.choice = 3;
    nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, nameSpace1.text3], {fontSize: 15, color:'green'});
    nameSpace1.create();

}

nameSpace1.choice4 = function ()
{
    if (nameSpace1.choice != 0)
    {
        nameSpace1.remove();
    }
    nameSpace1.choice = 4;
    nameSpace1.txt = nameSpace1.board.create('text', [-9.5, -9.5, nameSpace1.text4], {fontSize: 15, color:'green'});
    nameSpace1.create();

}