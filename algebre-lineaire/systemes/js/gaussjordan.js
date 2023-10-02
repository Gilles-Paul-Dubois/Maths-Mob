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
nameSpace2.choice = 2;
nameSpace2.lignes = 3;
var rad = document.corps;
nameSpace2.range1 = document.getElementById("myRange1");
nameSpace2.range1.value = 3;
nameSpace2.A = null;
nameSpace2.A1 = null;
nameSpace2.B = null;
nameSpace2.C = null;
nameSpace2.D = null;

nameSpace2.etape = -1;// utilitaires communs aux corps

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
        var P = new Matrice(this.lignes, other.colonnes, this.corps);

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

    this.ligne = function (i)
    {
        return this.M[i];
    }
    this.echlignes = function (i1, i2)
    {
        var temp = new Array(this.colonnes);
        var j;
        for (j = 0; j < this.colonnes; j++)
            temp[j] = this.M[i1][j];
        for (j = 0; j < this.colonnes; j++)
            this.M[i1][j] = this.M[i2][j];
        for (j = 0; j < this.colonnes; j++)
            this.M[i2][j] = temp[j];
    }
    this.pivoter = function ()
    {
        var p = this.pivot();
        if (p == 0)
            return;
        else
        {
            var ind = p[1];
            this.echlignes(0, ind);
            var coef = p[0].inv();
            var L = new Array(this.colonnes);
            var kL = new Array(this.colonnes);
            var j;
            for (j = 0; j < this.colonnes; j++)
                L[j] = this.M[0][j].mult(coef);
            var i;
            for (i = 1; i < this.lignes; i++)
            {
                for (j = 0; j < this.colonnes; j++)
                {
                    kL[j] = this.M[i][0].mult(L[j]).opp();
                }
                for (j = 0; j < this.colonnes; j++)
                {
                    this.M[i][j] = this.M[i][j].add(kL[j]);
                }
            }

        }
    }
    this.step = function (n)
    {
        var sub = this.isole(n);
        sub.pivoter();
        this.incruste(n, sub);
    }
    this.isole = function (d)
    {
        if (d == 0)
            return this;
        var i, j, u, v;
        var result = new Matrice(this.lignes - d, this.colonnes - d, this.corps);
        for (i = d; i < this.lignes; i++)
        {
            u = i - d;
            for (j = d; j < this.colonnes; j++)
            {
                v = j - d;
                result.M[u][v] = this.M[i][j];
            }
        }
        return result;
    }
    this.incruste = function (d, other)
    {
        var i, j, u, v;
        for (i = d; i < this.lignes; i++)
        {
            u = i - d;
            for (j = d; j < this.colonnes; j++)
            {
                v = j - d;
                this.M[i][j] = other.M[u][v];
            }
        }
    }
    this.pivot = function ()
    {
        var i, x;
        for (i = 0; i < this.lignes; i++)
        {
            x = this.M[i][0];
            if (!this.M[i][0].isnul())
            {
                return [x, i];
            }
        }
        return 0;
    }
    this.produit = function (other)
    {
        var P = new Matrice(this.lignes, other.colonnes, this.corps);

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
}

// fin des utilitaires communs

// Corps des réels
var Reel = function (x)
{
    this.r = x;
    this.string = function ()
    {
        return (Math.round(this.r * 100) / 100).toString();
    }
    this.add = function (other)
    {
        var r1 = this.r;
        var r2 = other.r;
        return new Reel(r1 + r2);
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
    this.isnul = function ()
    {
        return this.r == 0;
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
// fin du corps des réels

/* Corps Z/5Z */


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
}

Fraction.random = function ()
{
    var n = Random(10) - 5;
    var d = 1 + Random(9);
    var F = new Fraction(n, d);
    return F.simplif();
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
    this.mult = function (other)
    {
        var r1, i1, r2, i2;
        r1 = this.re;
        i1 = this.im;
        r2 = other.re;
        i2 = other.im;
        var r3, i3;
        r3 = r1 * r2 - i1 * i2;
        i3 = r1 * i2 + r2 * i1;
        return new Complexe(r3, i3);
    }
    this.opp = function ()
    {
        return new Complexe(-this.re, -this.im);
    }
    this.inv = function ()
    {
        var u, v;
        var r2 = this.re * this.re + this.im * this.im;
        u = this.re / r2;
        v = -this.im / r2
        return new Complexe(u, v);
    }
    this.div = function (other)
    {
        return this.mult(other.inv());
    }
    this.isnul = function ()
    {
        return this.re == 0 && this.im == 0;
    }
}

Complexe.random = function ()
{
    return new Complexe(Random(10) - 5, Random(10) - 5);
}

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
nameSpace2.changem = function (val) {

    nameSpace2.lignes = parseInt(val);
    nameSpace2.New();

}


nameSpace2.handleClick = function (radio) {

    nameSpace2.choice = parseInt(radio.value);
    nameSpace2.New();

}
nameSpace2.Solution = function ()
{

    if (nameSpace2.etape >= Math.min(nameSpace2.lignes, nameSpace2.colonnes))
        return;
    nameSpace2.etape++;
    nameSpace2.A1.step(nameSpace2.etape);
    nameSpace2.Paint();
}

nameSpace2.New = function ()
{
    nameSpace2.etape = -1;
    nameSpace2.A = null;
    nameSpace2.A1 = null;
    nameSpace2.B = null;
    nameSpace2.C = null;
    nameSpace2.D = null;
    nameSpace2.Paint();
}

function clearsol()
{
    var i, j;
    nameSpace2.c3.width = nameSpace2.cellWidth;
    nameSpace2.c3.height = nameSpace2.lignes * nameSpace2.cellHeight;
    nameSpace2.ctx3.width = nameSpace2.c3.width;
    nameSpace2.ctx3.height = nameSpace2.c3.height;
    nameSpace2.ctx3.fillStyle = "black";
    nameSpace2.ctx3.fillRect(0, 0, nameSpace2.ctx3.width, nameSpace2.ctx3.height);
    for (i = 1; i < nameSpace2.lignes; i++)
    {
        nameSpace2.drawHorizontal(i, nameSpace2.ctx3, nameSpace2.ctx3.width);
    }

}
function recopie()
{
    var i, j;
    for (j = 0; j < nameSpace2.A1.colonnes - 1; j++)
    {
        for (i = 0; i < nameSpace2.lignes; i++)
            nameSpace2.A1.M[i][j] = nameSpace2.A.M[i][j];
    }
    for (i = 0; i < nameSpace2.lignes; i++)
        nameSpace2.A1.M[i][nameSpace2.A1.colonnes - 1] = nameSpace2.C.M[i][0];

}

nameSpace2.Paint = function ()
{
    if (nameSpace2.lignes == 4 && nameSpace2.choice == 2)
    {
           if(document.body.className.substring(0,2)=="fr")  
   { window.alert("valeurs incompatibles")}
else
{ window.alert("incompatible values")}
        nameSpace2.lignes = 3;
        nameSpace2.range1.value = 3;
    }
    if (nameSpace2.etape == -1)
    {
        nameSpace2.A = new matriceInversible(nameSpace2.lignes, nameSpace2.choice);
        nameSpace2.B = nameSpace2.A.inverse();
        nameSpace2.B.show(nameSpace2.c2);
        nameSpace2.C = new Matrice(nameSpace2.lignes, 1, nameSpace2.choice);
        nameSpace2.A1 = new Matrice(nameSpace2.lignes, nameSpace2.lignes + 1, nameSpace2.choice);

        recopie();
    }

    nameSpace2.A.show(nameSpace2.c4);
    nameSpace2.A1.show(nameSpace2.c1);
    nameSpace2.D = nameSpace2.B.produit(nameSpace2.C);
    nameSpace2.C.show(nameSpace2.c2);
    clearsol();
    if (nameSpace2.etape >= nameSpace2.lignes - 1)
        nameSpace2.D.show(nameSpace2.c3);



}
nameSpace2.Paint();
