/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");

var textzone1 = document.getElementById("mytext");
var stepnumber = 1;

var radius = 250;
var centerx = 270;
var centery = 270;
var listangles = [0]
var listpoints = []

var sizeofpoint = 7;

function InitCanvas(context) // initialisation du canevas
{
    context.width = 540;
    context.height = 540;
    context.fillStyle = "black";
    context.fillRect(0, 0, context.width, context.height);

}

function Step()
{
    stepnumber++;
    Paint();
}

function Restart()
{
    stepnumber = 1;
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

function markpoint(theta, col)
{
    var x = transcoord(theta)[0];
    var y = transcoord(theta)[1];
    ctx1.beginPath();
    ctx1.arc(x, y, sizeofpoint, 0, 2 * Math.PI, false);
    ctx1.fillStyle = col;
    ctx1.fill();
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
    ctx1.beginPath();
    ctx1.moveTo(listpoints[0][0], listpoints[0][1]);
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = 'white';
    var i;
    for (i = 1; i < stepnumber; i++)
    {
        ctx1.lineTo(listpoints[i][0], listpoints[i][1]);

    }
    ctx1.lineTo(listpoints[0][0], listpoints[0][1]);
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
    ctx1.beginPath();
    for (i = 0; i < stepnumber; i++)
    {
        var point = listpoints[i];
        drawarm(point);
    }
    ctx1.stroke();
}

function pgcd(m, n)
{
    result = 1;
    var k = Math.min(m, n);
    var i;
    for (i = 1; i <= k; i++)
    {
        if ((m % i == 0) && (n % i == 0))
            result = i;
    }
    return result;
}

function prementreux(m, n)
{
    return pgcd(m, n) == 1;
}

function Paint()
{
    InitCanvas(ctx1);
    mytext.value = stepnumber;
    drawcircle();
    var i;
    listangles = []
    for (i = 0; i < stepnumber; i++)
    {
        listangles.push(i * 2 * Math.PI / stepnumber);
    }
    listpoints = [];
    for (i = 0; i < stepnumber; i++)
    {
        listpoints.push(transcoord(listangles[i]));
    }
    markpoint(listangles[0], 'green');
    for (i = 1; i < stepnumber; i++)
    {
        if (prementreux(stepnumber, i))
            markpoint(listangles[i], 'red');
        else
            markpoint(listangles[i], 'green');
    }
    drawpolygon();
    drawstar();

}
Paint();