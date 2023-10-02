/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var sizeofelt = 50;

function InitCanvas() // initialisation du canevas
{
    ctx.width = sizeofelt * 7;
    ctx.height = sizeofelt * 4;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.width, ctx.height);

}


function Paint()
{
    InitCanvas();
 
}

Paint();
