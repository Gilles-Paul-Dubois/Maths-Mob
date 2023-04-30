/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");

var textzone1 = document.getElementById("mytext");
var stepnumber = 4;

var radius = 250;
var centerx = 300;
var centery = 300;
var listangles = [];
var listpoints = [];

var listpoints2 = [];

var sizeofpoint = 1;

function InitCanvas(context) // initialisation du canevas
{
    context.width = 600;
    context.height = 600;
    context.fillStyle = "black";
    context.fillRect(0, 0, context.width, context.height);

}

function Step()
{
    stepnumber *= 2;
    Paint();
}

function Restart()
{
    stepnumber = 4;
    Paint();
}

function transcoord(theta)
{
    var X, Y;
    X = radius * Math.cos(theta);
    Y = radius * Math.sin(theta);
    var x, y;
    x = centerx + X;
    y = centery - Y;
    return [x, y];
}

function transcoord2(theta)
{
    var X, Y;
    var rayon;
    var k;
    k = Math.sqrt(1 + Math.tan(Math.PI / stepnumber) * Math.tan(Math.PI / stepnumber));
    rayon = radius * k;
    X = rayon * Math.cos(theta);
    Y = rayon * Math.sin(theta);
    var x, y;
    x = centerx + X;
    y = centery - Y;
    return [x, y];
}


function drawcircle()
{
    ctx1.beginPath();
    ctx1.arc(centerx, centery, radius, 0, 2 * Math.PI, false);
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = 'white';
    ctx1.stroke();
}
function drawpolygon()
{
    ctx1.strokeStyle = 'green';
    ctx1.beginPath();
    ctx1.moveTo(listpoints[0][0], listpoints[0][1]);
    ctx1.lineWidth = 2;
    var i;
    for (i = 1; i < stepnumber; i++)
    {
        ctx1.lineTo(listpoints[i][0], listpoints[i][1]);

    }
    ctx1.lineTo(listpoints[0][0], listpoints[0][1]);
    ctx1.stroke();

}
function drawpolygon2()
{
    ctx1.beginPath();
    ctx1.moveTo(listpoints2[0][0], listpoints2[0][1]);
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = 'red';
    var i;
    for (i = 1; i < stepnumber; i++)
    {
        ctx1.lineTo(listpoints2[i][0], listpoints2[i][1]);

    }
    ctx1.lineTo(listpoints2[0][0], listpoints2[0][1]);
    ctx1.stroke();

}

function drawarm(p)
{
    ctx1.moveTo(centerx, centery);
    ctx1.lineTo(p[0], p[1]);

}

function drawstar()
{
    var i;
    ctx1.strokeStyle = 'white';
    ctx1.beginPath();
    for (i = 0; i < stepnumber; i++)
    {
        var point = listpoints[i];
        drawarm(point);
    }
    ctx1.stroke();
}

function drawstar2()
{
    var i;
    ctx1.strokeStyle = 'white';
    ctx1.beginPath();
    for (i = 0; i < stepnumber; i++)
    {
        var point = listpoints2[i];
        drawarm(point);
    }
    ctx1.stroke();
}

function Paint()
{
    InitCanvas(ctx1);
    mytext.value = stepnumber;
    drawcircle();
    var i;
    listangles = [];
    for (i = 0; i < stepnumber; i++)
    {
        listangles.push(i * 2 * Math.PI / stepnumber);
    }
    listpoints = [];
    for (i = 0; i < stepnumber; i++)
    {
        listpoints.push(transcoord(listangles[i]));
    }
    listpoints2 = [];
    for (i = 0; i < stepnumber; i++)
    {
        listpoints2.push(transcoord2(listangles[i]));
    }


    drawpolygon();
    drawpolygon2();
    drawstar();
    drawstar2();


}
Paint();