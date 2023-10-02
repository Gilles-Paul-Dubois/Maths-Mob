/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// globales
var nameSpace2 = {};
nameSpace2.cellWidth = 80;
nameSpace2.cellHeight = 20;
nameSpace2.c1 = document.getElementById("myCanvas1");
nameSpace2.ctx1 = nameSpace2.c1.getContext("2d");
nameSpace2.c2 = document.getElementById("myCanvas2");
nameSpace2.ctx2 = nameSpace2.c2.getContext("2d");
nameSpace2.c3 = document.getElementById("myCanvas3");
nameSpace2.ctx3 = nameSpace2.c3.getContext("2d");
nameSpace2.c4 = document.getElementById("myCanvas4");
nameSpace2.ctx4 = nameSpace2.c4.getContext("2d");
nameSpace2.c5 = document.getElementById("myCanvas5");
nameSpace2.ctx5 = nameSpace2.c5.getContext("2d");
nameSpace2.c6 = document.getElementById("myCanvas6");
nameSpace2.ctx6 = nameSpace2.c6.getContext("2d");
nameSpace2.c7 = document.getElementById("myCanvas7");
nameSpace2.ctx7 = nameSpace2.c7.getContext("2d");
nameSpace2.c8 = document.getElementById("myCanvas8");
nameSpace2.ctx8 = nameSpace2.c8.getContext("2d");
nameSpace2.zonetexte1 = document.getElementById("myText1");
nameSpace2.choice = 1;
nameSpace2.lignes = 4;
nameSpace2.step = -1;
nameSpace2.A = null;
nameSpace2.D = null;
nameSpace2.M = null;
nameSpace2.D1 = null;
nameSpace2.B = null;
nameSpace2.S = null;
nameSpace2.Xn = null;
nameSpace2.Xn1 = null;
nameSpace2.P = null;
nameSpace2.Q = null;
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

// Classe Matrice

// utilitaires
nameSpace2.position = function (i, j)
{
    return [i * nameSpace2.cellWidth, j * nameSpace2.cellHeight]
}
nameSpace2.drawVertical = function (j, ctx, SH)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(j * nameSpace2.cellWidth, 0);
    ctx.lineTo(j * nameSpace2.cellWidth, SH);
    ctx.stroke();
}

nameSpace2.drawHorizontal = function (i, ctx, SW)
{
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(0, i * nameSpace2.cellHeight);
    ctx.lineTo(SW, i * nameSpace2.cellHeight);
    ctx.stroke();
}
nameSpace2.write = function (somechain, i, j, ctx)
{
    pos = nameSpace2.position(i, j);
    ctx.font = "15px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(somechain, pos[0] + 5, pos[1] + nameSpace2.cellHeight - 5);
}
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
        ;
    return o;
}
;
var Vecteur = function (n, K, L)
{
    var i;
    this.dim = n;
    this.corps = K;
    if (L == undefined)
    {
        this.coords = new Array(this.dim);
        for (i = 0; i < this.dim; i++)
            this.coords[i] = nul(this.corps);
    }
    else
    {
        this.dim = L.length;
        this.coords = L;
    }
    this.string = function ()
    {
        var result = "["
        var i;
        if (this.dim != 0)
            result = result + this.coords[0].string();
        for (i = 1; i < this.dim; i++)
        {
            result = result + ",";
            result = result + this.coords[i].string();
        }
        result += "]";
        return result;
    }
    this.add = function (other)
    {
        result = new Vecteur(this.dim, this.corps);
        var i;
        for (i = 0; i < this.dim; i++)
        {
            result.coords[i] = this.coords[i].add(other.coords[i]);
        }
        return result;
    }

    this.minus = function (other)
    {
        result = new Vecteur(this.dim, this.corps);
        var i;
        for (i = 0; i < this.dim; i++)
        {
            result.coords[i] = this.coords[i].minus(other.coords[i]);
        }
        return result;
    }
    this.multscal = function (scal)

    {
        result = new Vecteur(this.dim, this.corps);
        var i;
        for (i = 0; i < this.dim; i++)
        {
            result.coords[i] = this.coords[i].mult(scal);
        }
        return result;
    }
    this.scalaire = function (other)
    {
        var result = new Reel(0);
        var i;
        for (i = 0; i < this.dim; i++)
            result = result.add(this.coords[i].mult(other.coords[i]));
        return result;
    }
    this.norme = function ()
    {
        result = new Reel(0);
        var i;
        for (i = 0; i < this.dim; i++)
        {
            result = result.add(this.coords[i].mult(this.coords[i]));
        }
        var r;
        r = result.r;
        r = Math.sqrt(r);
        return new Reel(r);
    }
    this.unitaire = function ()
    {
        var n = this.norme();
        var coef = n.inv();
        return this.multscal(coef);
    }
    this.proj = function (Mat) {
        var i;
        var V, T;
        var result = new Vecteur(this.dim, this.corps);
        var alpha;
        for (i = 0; i < Mat.lignes; i++)
        {
            V = new Vecteur(this.dim, this.corps, Mat.M[i]);
            alpha = this.scalaire(V);
            T = V.multscal(alpha);
            result = result.add(T);
        }
        return result;
    }
}
// fin des utilitaires
var Matrice = function (m, n, K, L)
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
        var S = new Matrice(this.lignes, this.colonnes, this.corps);
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
        c.width = this.colonnes * nameSpace2.cellWidth;
        c.height = this.lignes * nameSpace2.cellHeight;
        ctx.width = c.width;
        ctx.height = c.height;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.width, ctx.height);
        for (i = 1; i < this.lignes; i++)
        {
            nameSpace2.drawHorizontal(i, ctx, ctx.width);
        }
        for (j = 1; j < this.colonnes; j++)
        {
            nameSpace2.drawVertical(j, ctx, ctx.height);
        }
        var S = this.toString();
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
                nameSpace2.write(S.M[i][j], j, i, ctx)
        }
    }
    this.linesShuffle = function ()
    {
        var S = new Matrice(this.lignes, this.colonnes, this.corps);
        var i, j;
        for (i = 0; i < this.lignes; i++)
            for (j = 0; j < this.colonnes; j++)
                S.M[i][j] = this.M[i][j];
        shuffle(S.M);
        return S;
    }
    this.transpose = function ()
    {
        var T = new Matrice(this.colonnes, this.lignes, this.corps);
        var i, j;
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
            {
                T.M[j][i] = this.M[i][j];
            }
        }
        return T;
    }
    this.columnsShuffle = function ()
    {
        return ((this.transpose()).linesShuffle()).transpose();
    }
    this.produit = function (other)
    {
        var P = new Matrice(this.lignes, other.colonnes, this.corps);

        var i, j, k;
        var accu;
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < other.colonnes; j++)
            {
                accu = nul(this.corps);
                for (k = 0; k < this.colonnes; k++)
                    accu = accu.add(this.M[i][k].mult(other.M[k][j]));
                P.M[i][j] = accu;

            }
        }
        return P;
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
        var result = new Matrice(this.lignes - 1, this.colonnes - 1, this.corps);
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
        var result = new Matrice(this.lignes, this.lignes, this.corps);
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
    this.add = function (other)
    {
        var result = new Matrice(this.lignes, this.colonnes, this.corps);
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
            {
                result.M[i][j] = this.M[i][j].add(other.M[i][j]);

            }
        }
        return result;
    }
    this.minus = function (other)
    {
        var result = new Matrice(this.lignes, this.colonnes, this.corps);
        for (i = 0; i < this.lignes; i++)
        {
            for (j = 0; j < this.colonnes; j++)
            {
                result.M[i][j] = this.M[i][j].minus(other.M[i][j]);

            }
        }
        return result;
    }
}

// fin des utilitaires communs

// Corps des rÃƒÂ©els
var Reel = function (x)
{
    this.r = x;
    this.string = function ()
    {
        return (Math.round(this.r * 1000000) / 1000000).toString();
    }
    this.add = function (other)
    {
        var r1 = this.r;
        var r2 = other.r;
        return new Reel(r1 + r2);
    }
    this.minus = function (other)
    {
        var r1 = this.r;
        var r2 = other.r;
        return new Reel(r1 - r2);
    }
    this.mult = function (other)
    {
        var r1 = this.r;
        var r2 = other.r;
        return new Reel(r1 * r2);
    }
    this.opp = function ()
    {
        return new Reel(-this.r);
    }
    this.inv = function ()
    {
        return new Reel(1 / this.r);
    }
    this.div = function (other)
    {
        return this.mult(other.inv());
    }
}
Reel.random = function ()
{
    var x = Random(10);
    var coin = Random(2);
    var y = 1 + Math.random() * x;
    if (coin == 0)
        y = -y;
    return new Reel(Math.round(y * 100) / 100);
}
// fin du corps des rÃƒÂ©els


// fin des complexes
function nul(k)
{
    switch (k)
    {
        case 1:
            return new Reel(0);

    }
}

function unite(k)
{
    switch (k)
    {
        case 1:
            return new Reel(1);

    }
}

function matriceInversible(n, k)
{
    var result = new Matrice(n, n, k);
    var i, j;
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
        {
            if (j < i)
                result.M[i][j] = nul(result.corps);
            if (i == j)
                result.M[i][j] = unite(result.corps);
        }
    return (result.linesShuffle()).columnsShuffle();
    return result;
}

nameSpace2.NextStep = function ()
{
    nameSpace2.step++;
   if(document.body.className.substring(0,2)=="fr")  
   {     nameSpace2.zonetexte1.value = "valeur de n : " + nameSpace2.step;}
else
   {     nameSpace2.zonetexte1.value = "value of n : " + nameSpace2.step;}
    nameSpace2.Xn=nameSpace2.Xn1;
    nameSpace2.Xn1=iter(nameSpace2.Xn);
    nameSpace2.Xn.show(nameSpace2.c7);
    nameSpace2.Xn1.show(nameSpace2.c8);

}
function iter(X)
{
    var Z = nameSpace2.P.produit(X);
    return nameSpace2.Q.minus(Z);

}
nameSpace2.Paint = function ()
{
    var i, j;
    nameSpace2.step = 0;
       if(document.body.className.substring(0,2)=="fr")  
   { nameSpace2.zonetexte1.value = "valeur de n : " + nameSpace2.step;}
else
{ nameSpace2.zonetexte1.value = "value of n : " + nameSpace2.step;}
    nameSpace2.D = new Matrice(nameSpace2.lignes, nameSpace2.lignes, nameSpace2.choice);
    for (i = 0; i < nameSpace2.lignes; i++)
        for (j = 0; j < nameSpace2.lignes; j++)
        {
            if (i != j)
                nameSpace2.D.M[i][j] = nul(nameSpace2.choice);
        }
    for (i = 0; i < nameSpace2.lignes; i++)
        nameSpace2.D.M[i][i] = nameSpace2.D.M[i][i].mult(new Reel(10));
    nameSpace2.D.show(nameSpace2.c2);
    nameSpace2.M = new Matrice(nameSpace2.lignes, nameSpace2.lignes, nameSpace2.choice);
    for (i = 0; i < nameSpace2.lignes; i++)
        nameSpace2.M.M[i][i] = nul(nameSpace2.choice);
    nameSpace2.A = nameSpace2.M.add(nameSpace2.D);
    nameSpace2.M.show(nameSpace2.c3);
    nameSpace2.A.show(nameSpace2.c1);
    nameSpace2.D1 = nameSpace2.D.inverse();
    nameSpace2.D1.show(nameSpace2.c4);
    nameSpace2.B = new Matrice(4, 1, this.choice);
    nameSpace2.B.show(nameSpace2.c5);
    nameSpace2.S = nameSpace2.A.inverse().produit(nameSpace2.B);
    nameSpace2.S.show(nameSpace2.c6);
    nameSpace2.Xn = new Matrice(4, 1, this.choice);
    for (i = 0; i < nameSpace2.lignes; i++)
        nameSpace2.Xn.M[i][0] = nul(nameSpace2.choice);
    nameSpace2.Xn.show(nameSpace2.c7);
    nameSpace2.P = nameSpace2.D1.produit(nameSpace2.M);
    nameSpace2.Q = nameSpace2.D1.produit(nameSpace2.B);
    nameSpace2.Xn1 = iter(nameSpace2.Xn);
    nameSpace2.Xn1.show(nameSpace2.c8);
}
nameSpace2.Paint();
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


