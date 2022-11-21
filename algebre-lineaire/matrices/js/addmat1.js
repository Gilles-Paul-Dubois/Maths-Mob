/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// globales
var nameSpace1 = {};
nameSpace1.lignes = 3;
nameSpace1.colonnes = 3;
nameSpace1.choice = 1;
nameSpace1.matrice1 = matrix(6, 6, 0);
nameSpace1.matrice2 = matrix(6, 6, 0);
nameSpace1.matrice3 = matrix(6, 6, 0);
nameSpace1.cellWidth = 50;
nameSpace1.cellHeight = 20;
nameSpace1.screenWidth;
nameSpace1.screenHeight;
nameSpace1.c1 = document.getElementById("myCanvas1");
nameSpace1.ctx1 = nameSpace1.c1.getContext("2d");
nameSpace1.c2 = document.getElementById("myCanvas2");
nameSpace1.ctx2 = nameSpace1.c2.getContext("2d");
nameSpace1.c3 = document.getElementById("myCanvas3");
nameSpace1.ctx3 = nameSpace1.c3.getContext("2d");
nameSpace1.rad1 = document.corps1;
nameSpace1.range1 = document.getElementById("myRange1");
nameSpace1.range1.value = 3;
nameSpace1.range2 = document.getElementById("myRange2");
nameSpace1.range2.value = 3;

// utilitaires communs aux corps

function Random(n) {
    return Math.floor(Math.random() * n);
}

nameSpace1.RandomR= function()
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

nameSpace1.randomCoeff= function()
{
    switch (nameSpace1.choice)
    {
        case 1:
            return nameSpace1.RandomR();
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
    if (nameSpace1.choice == 1) // cas réel
        return elt.toString();
    else // tous les autres cas 
        return elt.string();
}

function ajoute(elt1, elt2)
{
    if (nameSpace1.choice == 1) // car réel
        return Math.round((elt1 + elt2)*100)/100;
    else // tous les autres cas 
        return elt1.add(elt2);
}

nameSpace1.toString = function (M)
{
    var i, j;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            M[i][j] = string(M[i][j])
    }
}

nameSpace1.fillMatrix = function (M)
{
    var i, j;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            M[i][j] = nameSpace1.randomCoeff();
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
nameSpace1.InitCanvas = function (c, ctx) // initialisation du canevas
{

    c.width = nameSpace1.screenWidth;
    c.height = nameSpace1.screenHeight;
    ctx = c.getContext("2d");
    ctx.width = nameSpace1.screenWidth;
    ctx.height = nameSpace1.screenHeight;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.width, ctx.height);
}
nameSpace1.initCanvases = function ()
{
    nameSpace1.InitCanvas(nameSpace1.c1, nameSpace1.ctx1);
    nameSpace1.InitCanvas(nameSpace1.c2, nameSpace1.ctx2);
    nameSpace1.InitCanvas(nameSpace1.c3, nameSpace1.ctx3);
}
nameSpace1.changem = function (val) {
    nameSpace1.lignes = val;
    nameSpace1.Paint();
}
nameSpace1.changen = function (val) {
    nameSpace1.colonnes = val;
    nameSpace1.Paint();
}

nameSpace1.handleClick = function (radio) {
    nameSpace1.choice = parseInt(radio.value);
    nameSpace1.Paint();
}



nameSpace1.drawVertical = function (j, ctx)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(j * nameSpace1.cellWidth, 0);
    ctx.lineTo(j * nameSpace1.cellWidth, nameSpace1.screenHeight);
    ctx.stroke();
}

nameSpace1.drawHorizontal = function (i, ctx)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(0, i * nameSpace1.cellHeight);
    ctx.lineTo(nameSpace1.screenWidth, i * nameSpace1.cellHeight);
    ctx.stroke();
}
nameSpace1.drawGrid = function (ctx)
{
    var i, j;
    for (i = 1; i < nameSpace1.lignes; i++)
    {
        nameSpace1.drawHorizontal(i, ctx);
    }
    for (j = 1; j < nameSpace1.colonnes; j++)
    {
        nameSpace1.drawVertical(j, ctx);
    }
}
nameSpace1.drawGrids = function ()
{
    nameSpace1.drawGrid(nameSpace1.ctx1);
    nameSpace1.drawGrid(nameSpace1.ctx2);
    nameSpace1.drawGrid(nameSpace1.ctx3);
}

nameSpace1.position = function (i, j)
{
    return [i * nameSpace1.cellWidth, j * nameSpace1.cellHeight]
}

nameSpace1.write = function (somechain, i, j, ctx)
{
    pos = nameSpace1.position(i, j);
    ctx.font = "15px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(somechain, pos[0] + 5, pos[1] + nameSpace1.cellHeight - 5);
}


nameSpace1.showMatrice = function (M, ctx)
{
    var i, j;
    for (i = 0; i < nameSpace1.lignes; i++)
    {
        for (j = 0; j < nameSpace1.colonnes; j++)
            nameSpace1.write(M[i][j], j, i, ctx)
    }
}

nameSpace1.addMatrices = function ()
{
    var i, j;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            nameSpace1.matrice3[i][j] = ajoute(nameSpace1.matrice1[i][j], nameSpace1.matrice2[i][j]);
    }

}

nameSpace1.Paint = function ()
{

    nameSpace1.screenWidth = nameSpace1.colonnes * nameSpace1.cellWidth;
    nameSpace1.screenHeight = nameSpace1.lignes * nameSpace1.cellHeight;
    nameSpace1.initCanvases();
    nameSpace1.drawGrids();
    nameSpace1.fillMatrix(nameSpace1.matrice1);
    nameSpace1.fillMatrix(nameSpace1.matrice2);
    nameSpace1.addMatrices();
    nameSpace1.toString(nameSpace1.matrice1);
    nameSpace1.toString(nameSpace1.matrice2);
    nameSpace1.toString(nameSpace1.matrice3);
    nameSpace1.showMatrice(nameSpace1.matrice1, nameSpace1.ctx1);
    nameSpace1.showMatrice(nameSpace1.matrice2, nameSpace1.ctx2);
    nameSpace1.showMatrice(nameSpace1.matrice3, nameSpace1.ctx3);


}
nameSpace1.Paint();
