/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");

var textzone1 = document.getElementById("mytext");
var stepnumber = 0;


var quadri = [];

function InitCanvas(context) // initialisation du canevas
{
    context.width = 600;
    context.height = 600;
    context.fillStyle = "yellow";
    context.fillRect(0, 0, context.width, context.height);

}

function Step()
{
    stepnumber ++;
    Paint();
}

function Restart()
{
    stepnumber=0;
    Paint();
}


function fillQuad(p)
{
    var quot = 1;
    var i;
    for (i = 0; i < stepnumber/2; i++)
        quot *= 2;
    if (p%2==0)
        return [600/quot, 600/quot]
    else
        return [600/quot, 1200/quot]
}

function drawLeft(p)
{
    
    ctx1.fillStyle = "black";
    var w=fillQuad(stepnumber)[0];
    var h=fillQuad(stepnumber)[1];
    
    var x=600-w;
    var y=600-h;
    console.log(x);            
    console.log(y);
    console.log(w);
    console.log(h);
    ctx1.fillRect(x,y, w, h);
}
function Paint()
{
    InitCanvas(ctx1);
    drawLeft(stepnumber);
    textzone1.value = " n=" + stepnumber;
    
    

}
Paint();