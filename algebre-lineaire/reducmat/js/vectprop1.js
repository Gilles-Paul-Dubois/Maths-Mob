/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-4, 4, 4, -4], axis: true});

var choice = 1;
var p0 = board.create('point', [0, 0], {fixed: true, visible: false});

var c1 = board.create('circle', [p0, 1], {strokeWidth: 1});
var p1 = board.create('point', [1, 0], {visible: true, withLabel: false, size: 1, name: 'M', attractors: [c1], attractorDistance: 0.2, snatchDistance: 2});
var li1 = board.create('line', [p0, p1],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'u', withLabel: true, label: {position: 'top'}});
function p2x()
{
    switch (choice)
    {
        case 1:
            return p1.Y();
        case 2:
            return -p1.Y();
        case 3:
            return 2 * p1.X();
        case 4:
            return 3 * p1.X();
        case 5:
			return p1.Y();
    }
}

function p2y()
{
    switch (choice)
    {
        case 1:
            return p1.X();
        case 2:
            return p1.X();
        case 3:
            return 2 * p1.Y()
        case 4:
            return p1.X() + 2 * p1.Y();
        case 5:
			return p1.Y();

    }
}

var p2 = board.create('point', [p2x, p2y], {visible: true, withLabel: false, size: 1})
var li1 = board.create('line', [p0, p2],
        {straightFirst: false, straightLast: false, strokeWidth: 2, lastArrow: true, name: 'v', withLabel: true, label: {position: 'top'}});

function handleClick(radio) {
    choice = parseInt(radio.value);
}

   if(document.body.className.substring(0,2)=="fr")  
   { function resultat()
{
    var message;
    switch (choice)
    {
        case 1:
            message = "L'application est la symétrie par rapport à la diagonale. Vecteur propre: (1,1) et (-1,1)";
            break;
        case 2:
            message = "l'application est une rotation de 90°. Aucun vecteur propre.";
            break;
        case 3:
            message = "L'application est une homothétie vectorielle de rapport 2. Tout vecteur est propre";
            break;
        case 4:
            message = "L'application a pour vecteurs propres (1,1) et (0,1)";
            break;
        case 5:
			message="L'application a pour vecteurs propres (1,0) et (1,1)";
    }
    window.alert(message);
}}
else
   { function resultat()
{
    var message;
    switch (choice)
    {
        case 1:
            message = "The map is the reflection with diagonal as a mirror eigenvectors: (1,1) and (-1,1)";
            break;
        case 2:
            message = "The map is a rotation with angle 90°. No eigenvector.";
            break;
        case 3:
            message = "The map is a homothety  Any vector is an eigenvector";
            break;
        case 4:
            message = "This map has for eigenvectors  (1,1) and (0,1)";
            break;
        case 5:
			message="This map has for eigenvectors  (1,0) and (1,1)";
    }
    window.alert(message);
}}