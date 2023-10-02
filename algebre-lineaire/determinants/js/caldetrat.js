/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// globales
var nameSpace4 = {};
nameSpace4.cellWidth = 80;
nameSpace4.cellHeight = 20;
nameSpace4.c1 = document.getElementById("nameSpace4.myCanvas1");
nameSpace4.ctx1 = nameSpace4.c1.getContext("2d");

nameSpace4.zonetexte1 = document.getElementById("nameSpace4.myText1");
nameSpace4.zonetexte1.style.width = "250px";
nameSpace4.choice = 2;
nameSpace4.lignes = 3;
nameSpace4.A = null;
nameSpace4.zonetexte2 = document.getElementById("nameSpace4.num");
nameSpace4.zonetexte3 = document.getElementById("nameSpace4.den");
// utilitaires communs aux corps

function Random(n)
{
    return Math.floor(Math.random() * n);
}


function matrix(rows, cols, defaultValue)
{
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

function randomCoeff(k)
{
    switch (k)
    {
        case 1:
            return Reel.random();
        case 2:
            return Fraction.random();
        case 3:
            return Modulo5.random();
        case 4:
            return Complexe.random();
    }
}

// Classe CalRatMatrice

// utilitaires
nameSpace4.position = function (i, j)
{
    return [i * nameSpace4.cellWidth, j * nameSpace4.cellHeight]
}
nameSpace4.drawVertical = function (j, ctx, SH)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(j * nameSpace4.cellWidth, 0);
    ctx.lineTo(j * nameSpace4.cellWidth, SH);
    ctx.stroke();
}

nameSpace4.drawHorizontal = function (i, ctx, SW)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(0, i * nameSpace4.cellHeight);
    ctx.lineTo(SW, i * nameSpace4.cellHeight);
    ctx.stroke();
}
nameSpace4.write = function (somechain, i, j, ctx)
{
    pos = nameSpace4.position(i, j);
    ctx.font = "15px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(somechain, pos[0] + 5, pos[1] + nameSpace4.cellHeight - 5);
}
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
        ;
    return o;
}
;
// fin des utilitaires
var CalRatMatrice = function (m, n, K, L)
{

    fillMatrix = function (M, ML, MC, k)
    {
        var i, j;
        for (i = 0; i < ML; i++)
        {
            for (j = 0; j < MC; j++)
                M[i][j] = randomCoeff(k);
        }
    }
    var i, j;
    this.lignes = m;
    this.colonnes = n;
    this.corps = K;
    this.M = matrix(m, n, 0);
    if (L == undefined)
    {
        fillMatrix(this.M, this.lignes, this.colonnes, this.corps);
    }
    else
    {
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
                this.M[i][j] = L[i][j];
        }
    }
    this.toString = function ()
    {
        var i, j;
        var S = new CalRatMatrice(this.lignes, this.colonnes, this.corps);
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
                S.M[i][j] = this.M[i][j].string();
        }
        return S;
    }
    this.show = function (c)
    {
        var i, j;
        var ctx = c.getContext("2d")
        c.width = this.colonnes * nameSpace4.cellWidth;
        c.height = this.lignes * nameSpace4.cellHeight;
        ctx.width = c.width;
        ctx.height = c.height;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.width, ctx.height);
        for (i = 1; i < this.lignes; i++)
        {
            nameSpace4.drawHorizontal(i, ctx, ctx.width);
        }
        for (j = 1; j < this.colonnes; j++)
        {
            nameSpace4.drawVertical(j, ctx, ctx.height);
        }
        var S = this.toString();
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
                nameSpace4.write(S.M[i][j], j, i, ctx)
        }
    }


    this.determinant = function ()
    {
        function permutator(input) {
            var set = [];
            function permute(arr, data) {
                var cur, memo = data || [];

                for (var i = 0; i < arr.length; i++) {
                    cur = arr.splice(i, 1)[0];
                    if (arr.length === 0)
                        set.push(memo.concat([cur]));
                    permute(arr.slice(), memo.concat([cur]));
                    arr.splice(i, 0, cur);
                }
                return set;
            }
            return permute(input);
        }
        var L = []
        var i;
        for (i = 0; i < this.lignes; i++)
            L.push(i);
        var P = permutator(L)
        var n = P.length;
        var T;
        var perm;
        var pow, parite;
        var u, v;
        S = nul(this.corps);
        for (i = 0; i < n; i++)
        {
            perm = P[i];
            pow = 0;
            for (u = 0; u < n; u++)
                for (v = u + 1; v < n; v++)
                {
                    if (perm[u] > perm[v])
                        pow++
                }
            parite = pow % 2;
            T = unite(this.corps);
            for (j = 0; j < this.lignes; j++)
            {
                T = T.mult(this.M[j][perm[j]]);
            }
            if (parite)
                T = T.opp();
            S = S.add(T);
        }
        return S;
    }
    this.delete = function (i, j)
    {
        var u, v;
        var k, h;
        var result = new CalRatMatrice(this.lignes - 1, this.colonnes - 1, this.corps);
        for (u = 0; u < this.lignes; u++)
        {
            if (u < i)
                k = u;
            else
                k = u - 1;
            if (u != i) {
                for (v = 0; v < this.colonnes; v++)
                {
                    if (v < j)
                        h = v;
                    else
                        h = v - 1;
                    if (v != j)
                        result.M[k][h] = this.M[u][v];

                }
            }

        }
        return result;
    }
    this.cofacteur = function (i, j)
    {
        var Del = this.delete(i, j);
        var result = Del.determinant();
        if ((i + j) % 2 == 0)
            return result;
        else
            return result.opp();
    }
    this.inverse = function ()
    {
        var result = new CalRatMatrice(this.lignes, this.lignes, this.corps);
        var Det = this.determinant();
        var i, j;
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.lignes; j++)
            {
                result.M[i][j] = this.cofacteur(i, j).div(Det);

            }
        }
        return result.transpose();
    }
}

// fin des utilitaires communs




/* fin Corps Z/5Z */

// Fractions
var Fraction = function (a, b)
{
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
    this.opp = function ()
    {
        return new Fraction(-this.num, this.den);
    }
    this.inv = function ()
    {
        return new Fraction(this.den, this.num);
    }
    this.div = function (other)
    {
        return this.mult(other.inv());
    }
    this.isnul = function ()
    {
        return this.num == 0;
    }
    this.equ = function (other)
    {
        return this.num * other.den == this.den * other.num;
    }
}


Fraction.random = function ()
{
    var n = Random(10) - 5;
    var d = 1 + Random(9);
    var F = new Fraction(n, d);
    return F.simplif();
}


// fin des fractions


// fin des complexes
function nul(k)
{
    switch (k)
    {
        case 1:
            return new Reel(0);
        case 2:
            return new Fraction(0, 1);
        case 3:
            return new Modulo5(0);
        case 4:
            return new Complexe(0, 0);

    }
}

function unite(k)
{
    switch (k)
    {
        case 1:
            return new Reel(1);
        case 2:
            return new Fraction(1, 1);
        case 3:
            return new Modulo5(1);
        case 4:
            return new Complexe(1, 0);

    }
}

nameSpace4.Check = function ()
{
    var n1, d1;
    var n2, d2;
    n1 = parseInt(nameSpace4.zonetexte2.value);
    d1 = parseInt(nameSpace4.zonetexte3.value);
    var D = nameSpace4.A.determinant();
    if (D.equ(new Fraction(n1, d1)))
    {
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Bravo ! Bonne réponse");}
else
{ window.alert("Congratulations ! Good answer");}
        nameSpace4.Paint();
    }
    else
    {
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Désolé ! Erreur de calcul")}
else
{ window.alert("Sorry ! Mistake")}
     }
}

nameSpace4.SeeDet = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { nameSpace4.zonetexte1.value = "Déterminant de A : " + nameSpace4.A.determinant().string();}
else
{ nameSpace4.zonetexte1.value = "Dterminant dof A : " + nameSpace4.A.determinant().string();}
}



nameSpace4.Paint = function ()
{
    if (nameSpace4.A != null)
        nameSpace4.A = null;
    nameSpace4.A = new CalRatMatrice(nameSpace4.lignes, nameSpace4.lignes, nameSpace4.choice);
    nameSpace4.A.show(nameSpace4.c1);
    nameSpace4.zonetexte2.value = "";
    nameSpace4.zonetexte3.value = "";
    nameSpace4.zonetexte1.value = "";
}
nameSpace4.Paint();
