/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// globales

var lignes = 3;
var colonnes = 3;
var choice = 1;
var selectedRow;
var selectedCol;
var matrice = matrix(6, 6, 0);
var cellWidth = 50;
var cellHeight = 20;
var screenWidth;
var screenHeight;
var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
var rad = document.corps;
var range1 = document.getElementById("myRange1");
range1.value = 3;
var range2 = document.getElementById("myRange2");
range2.value = 3;
var textzone1 = document.getElementById('myText1');
// utilitaires communs aux corps

function Random(n) {
    return Math.floor(Math.random() * n);
}

function RandomR()
{
    var x = Random(10);
    var coin = Random(2);
    var y = Math.random() * x;
    if (coin == 0)
        y = -y;
    return Math.round(y * 100) / 100;
}
function join(char, n, Liste)
{
    if (n == 0)
        return char + "=()";
    var result;
    result = char + "=(";
    for (var i = 0; i < n - 1; i++)
    {
        result = result + Liste[i].string() + ",";
    }
    result = result + Liste[n - 1].string() + ")";
    return result;
}


function matrix(rows, cols, defaultValue) {

    var arr = [];

    // Creates all lines:
    for (var i = 0; i < rows; i++) {

        // Creates an empty line
        arr.push([]);

        // Adds cols to the empty line:
        arr[i].push(new Array(cols));

        for (var j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = defaultValue;
        }
    }
    return arr;
}

function randomCoeff()
{
    switch (choice)
    {
        case 1:
            return RandomR();
        case 2:
            return RandomF();
        case 3:
            return RandomZ();
        case 4:
            return RandomC();
    }
}

function string(elt)
{
    if (choice == 1) // car réel
        return elt.toString();
    else // tous les autres cas 
        return elt.string();
}

function fillMatrix()
{

    var i, j;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            matrice[i][j] = randomCoeff();
    }
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            matrice[i][j] = string(matrice[i][j])
    }
}
// fin des utilitaires communs

/* Corps Z/5Z */
var Modulo5 = function (n)
{
    this.r = n % 5;
    this.string = function ()
    {
        return "" + this.r;
    }
    this.add = function (other)
    {
        var r1 = this.r;
        var r2 = other.r;
        return new Modulo5(r1 + r2);
    }
    this.mult = function (other)
    {
        var r1 = this.r;
        var r2 = other.r;
        return new Modulo5(r1 * r2);
    }
}


var VectorZ = function (n, char, L)
{
    this.dim = n;
    this.name = char;
    if (L == undefined)
    {
        var L = [];
        var i;
        for (i = 0; i < n; i++)
            L.push(RandomZ())
        this.coords = L;
    }
    else
        this.coords = L;
    this.string = function ()
    {
        return join(this.name, this.dim, this.coords);
    }
    this.add = function (other)
    {
        var i;
        L = [];
        for (i = 0; i < this.dim; i++)
        {
            L.push(this.coords[i].add(other.coords[i]));
        }
        var s = this.name + "+" + other.name;
        var S = new VectorZ(this.dim, s, L);
        return S;
    }
    this.multscal = function (scalar)
    {
        var i;
        L = [];
        for (i = 0; i < this.dim; i++)
        {
            L.push(this.coords[i].mult(scalar));
        }
        var s = scalar.string() + '.' + this.name;
        var S = new VectorZ(this.dim, s, L);
        return S;
    }

}


function RandomZ()
{
    return new Modulo5(Random(5));
}
/* fin Corps Z/5Z */

// Fractions
function pgcd(m, n)
{
    if (m < 0)
        m = -m;
    if (n < 0)
        n = -n;
    var result = 1;
    var i;
    var k = Math.min(m, n)
    for (i = 1; i <= k; i++)
    {
        if ((n % i == 0) && (m % i == 0))
            result = i;
    }
    return result;
}

var Fraction = function (a, b)
{
    this.num = a;
    this.den = b;
    this.simplif = function ()
    {
        var d = pgcd(this.num, this.den);
        return new Fraction(this.num / d, this.den / d);
    }
    this.string = function ()
    {
        if (this.num == 0)
            return "0";
        if (this.den == 1)
            return "" + this.num;
        if (this.den == -1)
            return "" + -this.num;
        if (this.den > 0)
            return this.num + "/" + this.den;
        if (this.den < 0)
            return (-this.num) + "/" + (-this.den)
    }
    this.add = function (other)
    {
        var n1 = this.num;
        var d1 = this.den;
        var n2 = other.num;
        var d2 = other.den;
        var D = d1 * d2
        var N = n1 * d2 + n2 * d1;
        var F = new Fraction(N, D);
        return F.simplif();
    }
    this.mult = function (other)
    {
        var n1 = this.num;
        var d1 = this.den;
        var n2 = other.num;
        var d2 = other.den;
        var D = d1 * d2
        var N = n1 * n2;
        var F = new Fraction(N, D);
        return F.simplif();
    }
}


function RandomF()
{
    var n = Random(10) - 5;
    var d = 1 + Random(9);
    var F = new Fraction(n, d);
    return F.simplif();
}

var VectorF = function (n, char, L)
{
    this.dim = n;
    this.name = char;
    if (L == undefined)
    {
        var L = [];
        var i;
        for (i = 0; i < n; i++)
            L.push(RandomF())
        this.coords = L;
    }
    else
        this.coords = L;
    this.string = function ()
    {
        return join(this.name, this.dim, this.coords);
    }
    this.add = function (other)
    {
        var i;
        L = [];
        for (i = 0; i < this.dim; i++)
        {
            L.push(this.coords[i].add(other.coords[i]));
        }
        var s = this.name + "+" + other.name;
        var S = new VectorF(this.dim, s, L);
        return S;
    }
    this.multscal = function (scalar)
    {
        var i;
        L = [];
        for (i = 0; i < this.dim; i++)
        {
            L.push(this.coords[i].mult(scalar));
        }
        var s = scalar.string() + '.' + this.name;
        var S = new VectorF(this.dim, s, L);
        return S;
    }

}

// fin des fractions

// corps des complexes
var Complexe = function (a, b)
{
    this.re = a;
    this.im = b;
    this.string = function ()
    {
        if (this.re == 0 && this.im == 0)
            return "0";
        var result;
        if (this.re == 0)
            result = "";
        else
            result = "" + Math.round(this.re * 10) / 10;
        if (this.im == 0)
            return result;
        if (this.re != 0)
        {
            if (this.im == 1)
            {
                result = result + "+i";
                return result;
            }
            if (this.im == -1)
            {
                result = result + "-i";
                return result;

            }
            if (this.im < 0)
            {
                result = result + Math.round(this.im * 10) / 10 + "i";
                return result;
            }
            result = result + "+" + Math.round(this.im * 10) / 10 + "i";
            return result;
        }
        else
        {
            if (this.im == 1)
            {
                result = result + "i";
                return result;
            }
            if (this.im == -1)
            {
                result = result + "-i";
                return result;

            }
            if (this.im < 0)
            {
                result = Math.round(this.im * 10) / 10 + "i";
                return result;
            }
            result = Math.round(this.im * 10) / 10 + "i";
            return result;
        }

    }
    this.add = function (other)
    {
        var r1 = this.re;
        var i1 = this.im;
        var r2 = other.re;
        var i2 = other.im;
        return new Complexe(r1 + r2, i1 + i2);
    }

    this.mult = function (scalar)
    {
        var r1 = this.re;
        var i1 = this.im;
        return new Complexe(r1 * scalar, i1 * scalar);
    }
}

var VectorC = function (n, char, L)
{
    this.dim = n;
    this.name = char;
    if (L == undefined)
    {
        var L = [];
        var i;
        for (i = 0; i < n; i++)
            L.push(RandomC())
        this.coords = L;
    }
    else
        this.coords = L;
    this.string = function ()
    {
        return join(this.name, this.dim, this.coords);
    }
    this.add = function (other)
    {
        var i;
        L = [];
        for (i = 0; i < this.dim; i++)
        {
            L.push(this.coords[i].add(other.coords[i]));
        }
        var s = this.name + "+" + other.name;
        var S = new VectorC(this.dim, s, L);
        return S;
    }
    this.multscal = function (scalar)
    {
        var i;
        L = [];
        for (i = 0; i < this.dim; i++)
        {
            L.push(this.coords[i].mult(scalar));
        }
        var s = scalar + '.' + this.name;
        var S = new VectorC(this.dim, s, L);
        return S;
    }

}


function RandomC()
{
    return new Complexe(Random(10) - 5, Random(10) - 5);
}
// fin des comlexes
function InitCanvas() // initialisation du canevas
{

    c1.width = screenWidth;
    c1.height = screenHeight;
    ctx1 = c1.getContext("2d");
    ctx1.width = screenWidth;
    ctx1.height = screenHeight;
    ctx1.fillStyle = "black";
    ctx1.fillRect(0, 0, ctx1.width, ctx1.height);
    c1.addEventListener("mousedown", onMouseDown, false);
    c1.addEventListener("mouseup", onMouseUp, false);
}
function onMouseUp(event)
{
    InitCanvas();
    drawGrid();
    var i, j;
    for (i = 0; i < lignes; i++)
    {
        for (j = 0; j < colonnes; j++)
            write(matrice[i][j], j, i)
    }
    textzone1.value = "";
}

function changem(val)
{lignes=val; 
Paint();}

function changen(val) {
    colonnes = val;
    Paint();
}

function handleClick(radio) {
    choice = parseInt(radio.value);
    Paint();
}


function onMouseDown(event)
{

    var cani, canj;
    var i, j;
    var canx = new Number();
    var cany = new Number();
    canx = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
    cany = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    canx -= c1.offsetLeft;
    cany -= c1.offsetTop;
    i = 0;
    while (i * cellWidth < canx)
        i++;
    j = 0;
    while (j * cellHeight < cany)
        j++;
    cani = i;
    canj = j;
    enlight(cani - 1, canj - 1, "yellow");
       if(document.body.className.substring(0,2)=="fr")  
   { textzone1.value = " ligne : " + canj + " colonne : " + cani;}
else
{ textzone1.value = " row : " + canj + " column : " + cani;}
}


function drawVertical(j)
{
    ctx1.strokeStyle = 'white';
    ctx1.beginPath();
    ctx1.moveTo(j * cellWidth, 0);
    ctx1.lineTo(j * cellWidth, screenHeight);
    ctx1.stroke();
}

function drawHorizontal(i)
{
    ctx1.strokeStyle = 'white';
    ctx1.beginPath();
    ctx1.moveTo(0, i * cellHeight);
    ctx1.lineTo(screenWidth, i * cellHeight);
    ctx1.stroke();
}
function drawGrid()
{
    var i, j;
    for (i = 1; i < lignes; i++)
    {
        drawHorizontal(i);
    }
    for (j = 1; j < colonnes; j++)
    {
        drawVertical(j);
    }
}

function position(i, j)
{
    return [i * cellWidth, j * cellHeight]
}

function write(somechain, i, j)
{
    pos = position(i, j);
    ctx1.font = "15px Arial";
    ctx1.fillStyle = 'white';
    ctx1.fillText(somechain, pos[0] + 5, pos[1] + cellHeight - 5);
}

function enlight(i, j, col)
{
    pos = position(i, j);
    ctx1.fillStyle = col;
    ctx1.globalAlpha = 0.5;
    ctx1.fillRect(pos[0], pos[1], cellWidth, cellHeight);
    ctx1.globalAlpha = 1.0;
}

function Paint()
{

    screenWidth = colonnes * cellWidth;
    screenHeight = lignes * cellHeight;
    InitCanvas();
    drawGrid();
    fillMatrix();
    var i, j;
    for (i = 0; i < lignes; i++)
    {
        for (j = 0; j < colonnes; j++)
            write(matrice[i][j], j, i)
    }

}
Paint();
