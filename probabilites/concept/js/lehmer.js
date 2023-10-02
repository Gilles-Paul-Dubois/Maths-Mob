/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var M = 1024 * 1024 * 1024 * 2 - 1;
var result = 1;
var zonetexte = document.getElementById("text1");
zonetexte.value = '1';
function next()
{
    result = (result * 16807) % M;
    zonetexte.value = result.toString();
}

