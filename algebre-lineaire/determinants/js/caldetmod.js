/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// globales
var nameSpace5 = {};
nameSpace5.cellWidth = 80;
nameSpace5.cellHeight = 20;
nameSpace5.c1 = document.getElementById("nameSpace5.myCanvas1");
nameSpace5.ctx1 = nameSpace5.c1.getContext("2d");
nameSpace5.zonetexte1 = document.getElementById("nameSpace5.myText1");
nameSpace5.zonetexte1.style.width = "250px";
nameSpace5.choice = 3;
nameSpace5.lignes = 3;
nameSpace5.A = null;
nameSpace5.zonetexte2 = document.getElementById("nameSpace5.mod");
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

// Classe CalModMatrice

// utilitaires
nameSpace5.position = function (i, j)
{
    return [i * nameSpace5.cellWidth, j * nameSpace5.cellHeight]
}
nameSpace5.drawVertical = function (j, ctx, SH)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(j * nameSpace5.cellWidth, 0);
    ctx.lineTo(j * nameSpace5.cellWidth, SH);
    ctx.stroke();
}

nameSpace5.drawHorizontal = function (i, ctx, SW)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(0, i * nameSpace5.cellHeight);
    ctx.lineTo(SW, i * nameSpace5.cellHeight);
    ctx.stroke();
}
nameSpace5.write = function (somechain, i, j, ctx)
{
    pos = nameSpace5.position(i, j);
    ctx.font = "15px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(somechain, pos[0] + 5, pos[1] + nameSpace5.cellHeight - 5);
}
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
        ;
    return o;
}
;
// fin des utilitaires
var CalModMatrice = function (m, n, K, L)
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
        var S = new CalModMatrice(this.lignes, this.colonnes, this.corps);
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
        c.width = this.colonnes * nameSpace5.cellWidth;
        c.height = this.lignes * nameSpace5.cellHeight;
        ctx.width = c.width;
        ctx.height = c.height;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.width, ctx.height);
        for (i = 1; i < this.lignes; i++)
        {
            nameSpace5.drawHorizontal(i, ctx, ctx.width);
        }
        for (j = 1; j < this.colonnes; j++)
        {
            nameSpace5.drawVertical(j, ctx, ctx.height);
        }
        var S = this.toString();
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
                nameSpace5.write(S.M[i][j], j, i, ctx)
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
        var result = new CalModMatrice(this.lignes - 1, this.colonnes - 1, this.corps);
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
        var result = new CalModMatrice(this.lignes, this.lignes, this.corps);
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
    this.opp = function ()
    {
        return new Modulo5(5 - this.r);
    }
    this.inv = function ()
    {
        var i;
        var m;
        for (i = 1; i < 5; i++)
        {
            if (i * this.r % 5 == 1)
            {
                m = i;
                break;
            }
        }
        return new Modulo5(m);
    }
    this.div = function (other)
    {
        return this.mult(other.inv());
    }
    this.isnul = function ()
    {
        return this.r == 0;
    }
}
Modulo5.random = function ()
{
    return new Modulo5(Random(5));
}



/* fin Corps Z/5Z */



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

nameSpace5.Check = function ()
{
    var r1;
    r1 = parseInt(nameSpace5.zonetexte2.value);
    var D = nameSpace5.A.determinant();
    if (D.r == r1)
    {
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Bravo ! Bonne réponse");}
else
{ window.alert("Congratulations ! Good answer");}
        nameSpace5.Paint();
    }
    else
    {
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("Désolé ! Erreur de calcul")}
else
{ window.alert("Sorry ! Mistake")}
    }
}

nameSpace5.SeeDet = function ()
{
       if(document.body.className.substring(0,2)=="fr")  
   { nameSpace5.zonetexte1.value = "Déterminant de A : " + nameSpace5.A.determinant().string();}
else
 { nameSpace5.zonetexte1.value = "Determinant of A : " + nameSpace5.A.determinant().string();}
}



nameSpace5.Paint = function ()
{
    if (nameSpace5.A != null)
        nameSpace5.A = null;
    nameSpace5.A = new CalModMatrice(nameSpace5.lignes, nameSpace5.lignes, nameSpace5.choice);
    nameSpace5.A.show(nameSpace5.c1);
    nameSpace5.zonetexte2.value = "";
    nameSpace5.zonetexte1.value = "";
}
nameSpace5.Paint();
