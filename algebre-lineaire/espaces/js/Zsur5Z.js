/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var textzone1z = document.getElementById("mytext1Z");
var textzone2z = document.getElementById("mytext2Z");
var textzone3z = document.getElementById("mytext3Z");
var textzone4z = document.getElementById("mytext4Z");
var textzone5z = document.getElementById("mytext5Z");


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

function Random(n) {
    return Math.floor(Math.random() * n);
}
function RandomZ()
{
    return new Modulo5(Random(5));
}

function PaintZ()
{
    var n = 2 + Random(5);
    var U = new VectorZ(n, 'u');
    var V = new VectorZ(n, 'v');
    var S = U.add(V);
    f = RandomZ();
    var M = U.multscal(f);
    textzone1z.style.width = "350px";
    textzone2z.style.width = "350px";
    textzone3z.style.width = "350px";
    textzone4z.style.width = "350px";
    textzone5z.style.width = "350px";
    textzone1z.value = "n=" + n;
    textzone2z.value = U.string();
    textzone3z.value = V.string();
    textzone4z.value = S.string();
    textzone5z.value = M.string();
}

PaintZ()