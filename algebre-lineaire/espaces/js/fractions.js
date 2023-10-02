/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var textzone1f = document.getElementById("mytext1F");
var textzone2f = document.getElementById("mytext2F");
var textzone3f = document.getElementById("mytext3F");
var textzone4f = document.getElementById("mytext4F");
var textzone5f = document.getElementById("mytext5F");

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

function Random(n) {
    return Math.floor(Math.random() * n);
}

function RandomFraction()
{
    var n = Random(10) - 5;
    var d = 1 + Random(9);
    var F = new Fraction(n, d);
    return F.simplif();
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
var VectorF = function (n, char, L)
{
    this.dim = n;
    this.name = char;
    if (L == undefined)
    {
        var L = [];
        var i;
        for (i = 0; i < n; i++)
            L.push(RandomFraction())
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



function PaintF()
{
    var n= 2+Random(5);
    var U = new VectorF(n, 'u');
    var V = new VectorF(n, 'v');
    var S = U.add(V);
    f = RandomFraction();
    var M = U.multscal(f);
    textzone1f.style.width = "350px";
    textzone2f.style.width = "350px";
    textzone3f.style.width = "350px";
    textzone4f.style.width = "350px";
    textzone5f.style.width = "350px";
    textzone1f.value = "n="+n;
    textzone2f.value = U.string();
    textzone3f.value = V.string();
    textzone4f.value = S.string();
    textzone5f.value = M.string();
}

PaintF()