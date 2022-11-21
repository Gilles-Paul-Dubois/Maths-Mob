/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// globales
var nameSpace2 = {};
nameSpace2.lignes = 3;
nameSpace2.colonnes = 3;
nameSpace2.choice = 1;
nameSpace2.matrice1 = matrix(6, 6, 0);
nameSpace2.matrice2 = matrix(6, 6, 0);
nameSpace2.cellWidth = 60;
nameSpace2.cellHeight = 20;
nameSpace2.screenWidth;
nameSpace2.screenHeight;
nameSpace2.c1 = document.getElementById("myCanvas4");
nameSpace2.ctx1 = nameSpace2.c1.getContext("2d");
nameSpace2.c2 = document.getElementById("myCanvas5");
nameSpace2.ctx2 = nameSpace2.c2.getContext("2d");
nameSpace2.zonetexte=document.getElementById("myText");
nameSpace2.zonetexte.style.width="100px";
nameSpace2.rad1 = document.corps2;
nameSpace2.range1 = document.getElementById("myRange3");
nameSpace2.range1.value = 3;
nameSpace2.range2 = document.getElementById("myRange4");
nameSpace2.range2.value = 3;

nameSpace2.lambda="            ";
// utilitaires communs aux corps

function Random(n) {
    return Math.floor(Math.random() * n);
}

nameSpace2.randomR = function()
{
    var x = Random(10);
    var coin = Random(2);
    var y = 1+Math.random() * x;
    if (coin == 0)
        y = -y;
    return Math.round(y * 10) / 10;
}
function join(char, n, Liste)
{
    if (n == 0)
        return char + "=()";
    var result;
    result = char + "=(";
    for (var i = 0; i < n - 1; i++)
    {
        result = result + Liste[i].nameSpace2.string() + ",";
    }
    result = result + Liste[n - 1].nameSpace2.string() + ")";
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

nameSpace2.randomCoeff = function()
{
    switch (nameSpace2.choice)
    {
        case 1:
            return nameSpace2.randomR();
        case 2:
            return RandomF();
        case 3:
            return RandomZ();
        case 4:
            return RandomC();
    }
}

nameSpace2.string= function (elt)
{
    if (nameSpace2.choice == 1) // cas réel
        return elt.toString();
    else // tous les autres cas 
        return elt.string();
}

function multiplie(elt1, elt2)
{
    if (nameSpace2.choice == 1) // car réel
        return Math.round((elt1 * elt2)*1000)/1000;
    else // tous les autres cas 
        return elt1.mult(elt2);
}

nameSpace2.toString = function (M)
{
    var i, j;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            M[i][j] = nameSpace2.string(M[i][j])
    }
}

nameSpace2.fillMatrix = function (M)
{
    var i, j;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            M[i][j] = nameSpace2.randomCoeff();
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
        var s = scalar.nameSpace2.string() + '.' + this.name;
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
        var s = scalar.nameSpace2.string() + '.' + this.name;
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

    this.multscal = function (scalar)
    {
        var r1 = this.re;
        var i1 = this.im;
        return new Complexe(r1 * scalar, i1 * scalar);
    }
    this.mult= function (other)
    {
        var r1,i1,r2,i2;
        r1=this.re;
        i1=this.im;
        r2=other.re;
        i2=other.im;
        var r3,i3;
        r3=r1*r2-i1*i2;
        i3=r1*i2+r2*i1;
        return new Complexe(r3,i3);
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
    this.nameSpace2.string = function ()
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
nameSpace2.InitCanvas = function (c, ctx) // initialisation du canevas
{

    c.width = nameSpace2.screenWidth;
    c.height = nameSpace2.screenHeight;
    ctx = c.getContext("2d");
    ctx.width = nameSpace2.screenWidth;
    ctx.height = nameSpace2.screenHeight;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.width, ctx.height);
}
nameSpace2.initCanvases = function ()
{
    nameSpace2.InitCanvas(nameSpace2.c1, nameSpace2.ctx1);
    nameSpace2.InitCanvas(nameSpace2.c2, nameSpace2.ctx2);
    
}
nameSpace2.changem = function (val) {
    nameSpace2.lignes = val;
    nameSpace2.Paint();
}
nameSpace2.changen = function (val) {
    nameSpace2.colonnes = val;
    nameSpace2.Paint();
}

nameSpace2.handleClick = function (radio) {
    nameSpace2.choice = parseInt(radio.value);
    nameSpace2.Paint();
}



nameSpace2.drawVertical = function (j, ctx)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(j * nameSpace2.cellWidth, 0);
    ctx.lineTo(j * nameSpace2.cellWidth, nameSpace2.screenHeight);
    ctx.stroke();
}

nameSpace2.drawHorizontal = function (i, ctx)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(0, i * nameSpace2.cellHeight);
    ctx.lineTo(nameSpace2.screenWidth, i * nameSpace2.cellHeight);
    ctx.stroke();
}
nameSpace2.drawGrid = function (ctx)
{
    var i, j;
    for (i = 1; i < nameSpace2.lignes; i++)
    {
        nameSpace2.drawHorizontal(i, ctx);
    }
    for (j = 1; j < nameSpace2.colonnes; j++)
    {
        nameSpace2.drawVertical(j, ctx);
    }
}
nameSpace2.drawGrids = function ()
{
    nameSpace2.drawGrid(nameSpace2.ctx1);
    nameSpace2.drawGrid(nameSpace2.ctx2);
    
}

nameSpace2.position = function (i, j)
{
    return [i * nameSpace2.cellWidth, j * nameSpace2.cellHeight]
}

nameSpace2.write = function (somechain, i, j, ctx)
{
    pos = nameSpace2.position(i, j);
    ctx.font = "15px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(somechain, pos[0] + 5, pos[1] + nameSpace2.cellHeight - 5);
}


nameSpace2.showMatrice = function (M, ctx)
{
    var i, j;
    for (i = 0; i < nameSpace2.lignes; i++)
    {
        for (j = 0; j < nameSpace2.colonnes; j++)
            nameSpace2.write(M[i][j], j, i, ctx)
    }
}

nameSpace2.multiplyMat = function ()
{
    var i, j;
    for (i=0;i<6;i++)
    {
        for (j=0;j<6;j++)
        {
            nameSpace2.matrice2[i][j]=multiplie(nameSpace2.matrice1[i][j], nameSpace2.lambda);
        }
        
    }
}

nameSpace2.Paint = function ()
{

    nameSpace2.screenWidth = nameSpace2.colonnes * nameSpace2.cellWidth;
    nameSpace2.screenHeight = nameSpace2.lignes * nameSpace2.cellHeight;
    nameSpace2.initCanvases();
    nameSpace2.drawGrids();
    nameSpace2.fillMatrix(nameSpace2.matrice1);
    nameSpace2.fillMatrix(nameSpace2.matrice2);
    nameSpace2.lambda=nameSpace2.randomCoeff();
    nameSpace2.multiplyMat();
    nameSpace2.toString(nameSpace2.matrice1);
    nameSpace2.toString(nameSpace2.matrice2);
    nameSpace2.zonetexte.length=20;
    nameSpace2.zonetexte.value="\u03bb = "+nameSpace2.string(nameSpace2.lambda);
    nameSpace2.showMatrice(nameSpace2.matrice1, nameSpace2.ctx1);
    nameSpace2.showMatrice(nameSpace2.matrice2, nameSpace2.ctx2);
    


}
nameSpace2.Paint();
