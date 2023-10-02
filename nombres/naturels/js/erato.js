/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sizeofcell = 27;

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");

var textzone1 = document.getElementById("mytext");
var stepnumber = 2;
var candidates = [];
var nextcandidates = [];

function InitCanvas(context) // initialisation du canevas
{
    context.width = sizeofcell * 20;
    context.height = sizeofcell * 20;
    context.fillStyle = "black";
    context.fillRect(0, 0, context.width, context.height);

}

function drawvert(i)
{
    ctx1.beginPath();
    ctx1.moveTo(i * sizeofcell, 0);
    ctx1.lineTo(i * sizeofcell, 20 * sizeofcell);
    ctx1.stroke();
}

function drawhor(j)
{
    ctx1.beginPath();
    ctx1.moveTo(0, j * sizeofcell);
    ctx1.lineTo(20 * sizeofcell, j * sizeofcell);
    ctx1.stroke();

}

function drawgrid()
{
    ctx1.strokeStyle = 'white';
    var i, j;
    for (i = 1; i < 20; i++)
    {
        drawvert(i);
    }
    for (j = 1; j < 20; j++)
    {
        drawhor(j);
    }
}

function position(n)
{
    var p = [];
    var q, r;
    r = n % 20;
    q = (n - r) / 20 + 1;
    p.push(r * sizeofcell);
    p.push(q * sizeofcell - 7);
    return p;
}

function writenumber(n, col)
{
    var s = "" + n;
    var pos = position(n);
    ctx1.fillStyle = col;
    ctx1.fillText(s, pos[0], pos[1]);
}

function wipe(n)
{
    var p = [];
    var q, r;
    r = n % 20;
    q = (n - r) / 20;
    ctx1.fillStyle = "black";
    ctx1.fillRect(r * sizeofcell, q * sizeofcell, sizeofcell, sizeofcell);

}
function writenumbers()
{
    ctx1.font = "15px Arial";
    var n;
    for (n = 2; n < 400; n++)
        writenumber(n, 'white');
}

function Step()
{
    var j;
    for (j = 2; j * stepnumber < 400; j++)
    {
        wipe(j * stepnumber);
    }
    writenumber(stepnumber, 'red');
    nextcandidates = [];
    for (j = 1; j < candidates.length; j++)
    {
        if (candidates[j] % stepnumber != 0)
            nextcandidates.push(candidates[j]);
    }
    candidates = nextcandidates;
    stepnumber = candidates[0];
    if (stepnumber < 20)
    {
        mytext.value = stepnumber;
    }
    else
    {
        for (j=0;j<candidates.length;j++)
        {
            writenumber(candidates[j], 'red');

        }
        

    }
}
function Paint()
{
    InitCanvas(ctx1);
    stepnumber=2;
    mytext.value = stepnumber;
    drawgrid();
    writenumbers();
    wipe(0);
    wipe(1);
    var j;
    candidates=[];
    for (j = 2; j < 400; j++)
        candidates.push(j);

}
Paint();
