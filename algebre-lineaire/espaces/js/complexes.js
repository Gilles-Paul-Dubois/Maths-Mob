/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var textzone1c = document.getElementById("mytext1C");
var textzone2c = document.getElementById("mytext2C");
var textzone3c = document.getElementById("mytext3C");
var textzone4c = document.getElementById("mytext4C");
var textzone5c = document.getElementById("mytext5C");

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
                result =  Math.round(this.im * 10) / 10 + "i";
                return result;
            }
            result =  Math.round(this.im * 10) / 10 + "i";
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

function Random(n) {
    return Math.floor(Math.random() * n);
}
function RandomC()
{
    return new Complexe(Random(10) - 5, Random(10) - 5);
}

function PaintC()
{
    var n = 2 + Random(5);
    var U = new VectorC(n, 'u');
    var V = new VectorC(n, 'v');
    var S = U.add(V);
    f = Random(9) + Random(9) / 10;
    var M = U.multscal(f);
    textzone1c.style.width = "450px";
    textzone2c.style.width = "450px";
    textzone3c.style.width = "450px";
    textzone4c.style.width = "450px";
    textzone5c.style.width = "450px";
    textzone1c.value = "n=" + n;
    textzone2c.value = U.string();
    textzone3c.value = V.string();
    textzone4c.value = S.string();
    textzone5c.value = M.string();
}

PaintC()
