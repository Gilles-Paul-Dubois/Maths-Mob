/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// variables globales
var sizeofelt = 50;
var marginofelt = 3;
var yellow = "#FFCC33";
var orange = "#FF6600";
var brown = "#663300";
var red = "#CC0000";
var blue = "#0000FF";
var green = "#00CC00";
var purple = "#993399";
var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var textzone1 = document.getElementById("mytext1");
var textzone2 = document.getElementById("mytext2");
var textzone3 = document.getElementById("mytext3");
var textzone4 = document.getElementById("mytext4");
var textzone5 = document.getElementById("mytext5");
var textzone6 = document.getElementById("mytext6");

var a, b, c, d, e, f, g, h, z, y, j, m, n, t, u, v, p, q, w, m, n;
var LAE;

//fin des variables globales

// objet element
function element(nom, numero, couleur, forme) {
    this.name = nom;
    this.num = numero;
    this.color = couleur;
    this.shape = forme;
    // dessin sur le canevas à la position x,y
    this.show = function (context, x, y) {
        var grd = context.createLinearGradient(0, y, 0, y + sizeofelt - marginofelt);
        grd.addColorStop(0, "white");
        grd.addColorStop(0.5, this.color);
        grd.addColorStop(1, "white");
        context.fillStyle = grd;
        context.beginPath();
        switch (this.shape)
        {
            case 's':
                context.rect(x + marginofelt, y + marginofelt, sizeofelt - 2 * marginofelt, sizeofelt - 2 * marginofelt);
                break;
            case 'r':
                context.arc(x + sizeofelt / 2, y + sizeofelt / 2, (sizeofelt - 2 * marginofelt) / 2, 0, 2 * Math.PI, false);
                break;
            case 't':
                context.moveTo(x + sizeofelt / 2, y + marginofelt);
                context.lineTo(x + sizeofelt - marginofelt, y + sizeofelt - marginofelt);
                context.lineTo(x + marginofelt, y + sizeofelt - marginofelt);
                context.lineTo(x + sizeofelt / 2, y + marginofelt);
                break;
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.font = "15px Arial";
        context.fillStyle = 'white';
        context.fillText(this.name, x + sizeofelt / 2 + 2 * marginofelt - 12, y + sizeofelt / 2);
        context.font = "12px Arial";
        context.fillStyle = 'black';
        context.fillText(this.num, x + sizeofelt / 2 - 2 * marginofelt, y + sizeofelt / 2 + 15);
    };
}
// fin objet element

// objet ensemble
function Random(n) {
    return Math.floor(Math.random() * n);
}
function Permute(u, v, L)
{
    var temp = L[u];
    L[u] = L[v];
    L[v] = temp;
}

function setview(Liste, char)
{
    return char + "={" + Liste.toString() + "}"
}

function set(card, char, L)
{
    this.cardinal = card;
    this.setname = char;
    this.listnum = [];
    this.listel = [];
    this.listn = [];
    this.ext = "";
    if (L == undefined)
    {
        var stock = [];
        var i, j, k, h;
        for (i = 0; i < 21; i++)
        {
            stock[i] = i;
        }
        for (i = 0; i < card; i++)
        {
            j = 20 - i;
            k = Random(j + 1);
            h = i + k;
            Permute(i, h, stock);
        }
        for (i = 0; i < card; i++)
        {
            this.listnum[i] = stock[i];
        }
    }
    else
        this.listnum = L;
    for (i = 0; i < this.cardinal; i++)
    {
        this.listel[i] = LAE[this.listnum[i]];
    }
    for (i = 0; i < this.cardinal; i++)
    {
        this.listn[i] = this.listel[i].name;
    }
    this.ext = setview(this.listn, this.setname);
    this.show = function (context) {
        var rx, qy;
        var eltx;
        for (var cpti = 0; cpti < this.cardinal; cpti++)
        {
            eltx = this.listel[cpti];
            rx = cpti % 7;
            qy = Math.floor(cpti / 7);
            eltx.show(context, rx * sizeofelt, qy * sizeofelt);
        }
        context.font = "15px Arial";
        context.fillStyle = 'white';
        context.fillText(this.ext, 5, sizeofelt * 3.5);
    }
}
// fin objet ensemble

function InitCanvas(c, wi, hi) // initialisation du canevas
{
    c.width = wi;
    c.height = hi;
    var ctx = c.getContext("2d");
    ctx.width = wi;
    ctx.height = hi;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.width, ctx.height);
}

function InitCanvas1()
{
    InitCanvas(c1, 7 * sizeofelt, 7 * sizeofelt);

}

function InitCanvas2()
{
    InitCanvas(c2, 7 * sizeofelt, 7 * sizeofelt);

}
function CreateElements()
{
    a = new element('a', 0, blue, 'r');
    b = new element('b', 1, red, 'r');
    z = new element('z', 2, brown, 'r');
    c = new element('c', 3, green, 'r');
    y = new element('y', 4, orange, 'r');
    g = new element('g', 5, purple, 'r');
    d = new element('d', 6, yellow, 'r');
    j = new element('j', 7, blue, 's');
    t = new element('t', 8, brown, 's');
    v = new element('v', 9, green, 's');
    q = new element('q', 10, orange, 's');
    p = new element('p', 11, purple, 's');
    k = new element('k', 12, red, 's');
    w = new element('w', 13, yellow, 's');
    r = new element('r', 14, blue, 't');
    h = new element('h', 15, brown, 't');
    m = new element('m', 16, green, 't');
    f = new element('f', 17, orange, 't');
    e = new element('e', 18, purple, 't');
    u = new element('u', 19, red, 't');
    n = new element('n', 20, yellow, 't');
    LAE = new Array(a, b, z, c, y, g, d, j, t, v, q, p, k, w, r, h, m, f, e, u, n);
}

function cart(A, B)
{
    this.E = A;
    this.F = B;
    this.couple = function (i, j)
    {
        return[(this.E).listel[i], (this.F).listel[j]];
    }
    this.position = function (i, j)
    {
        return [(i + 1) * sizeofelt, (this.F.cardinal - 1 - j) * sizeofelt];
    }
    this.element = function (i, j)
    {
        return [this.E.listel[i], this.F.listel[j]]
    }
    this.elementstring = function (i, j)
    {
        return "(" + (this.element(i, j)[0]).name + "," + (this.element(i, j)[1]).name + ")";
    }
    this.eltE = function (i)
    {
        return this.E.listel[i];
    }
    this.eltF = function (j)
    {
        return this.F.listel[j];
    }
    this.show = function (can)
    {
        var wi = (1 + this.E.cardinal) * sizeofelt;
        var hi = (2 + this.F.cardinal) * sizeofelt;
        can.width = wi
        can.height = hi
        var ctx = can.getContext("2d");
        ctx.width = wi;
        ctx.height = hi;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.width, ctx.height);
        var i, j;
        for (i = 0; i < this.E.cardinal; i++)
        {
            this.eltE(i).show(ctx, (i + 1) * sizeofelt, (this.F.cardinal) * sizeofelt);
        }
        for (j = 0; j < this.F.cardinal; j++)
        {
            this.eltF(j).show(ctx, 0, (this.F.cardinal - j - 1) * sizeofelt);
        }
        ctx.font = "15px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(this.E.ext, 5, sizeofelt * (this.F.cardinal + 1.5));
        ctx.strokeStyle = 'white';
        for (j = 0; j <= this.F.cardinal; j++)
        {
            ctx.beginPath();
            ctx.moveTo(sizeofelt, j * sizeofelt);
            ctx.lineTo(wi, j * sizeofelt);
            ctx.stroke();
        }
        for (i = 0; i < this.E.cardinal; i++)
        {
            ctx.beginPath();
            ctx.moveTo(sizeofelt * (i + 1), 0);
            ctx.lineTo(sizeofelt * (i + 1), hi - 2 * sizeofelt);
            ctx.stroke();
        }
    }
    this.showRandomElt = function (can, i, j, n)
    {
        var ctx = can.getContext("2d");
        var pos = this.position(i, j);
        var X = this.eltE(n);
        X.show(ctx, pos[0], pos[1]);

    }
}
function loi(E, signe, tab)
{
    this.ensemble = E;
    this.cart = new cart(E, E);
    this.signop = signe;
    this.table = tab;
    this.show = function (can)
    {
        var ctx = can.getContext("2d");
        this.cart.show(can);
        ctx.font = "30px Arial";
        ctx.strokeStyle = 'white';
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(this.signop, sizeofelt / 3, (this.ensemble.cardinal + 2 / 3) * sizeofelt);
        ctx.stroke();
        var i, q, r, n;
        n = this.ensemble.cardinal;
        for (i = 0; i < this.table.length; i++)
        {
            r = i % n;
            q = (i - r) / n;
            this.cart.showRandomElt(can, r, q, this.table[i]);
        }
    }
    this.compose = function (n)
    {
        var p = this.ensemble.cardinal;
        var q, r;
        r = n % p;
        q = (n - r) / p;
        var E = this.ensemble;
        var L = E.listel;
        var X, Y, Z;
        X = L[r];
        Y = L[q];
        Z = L[this.table[n]];
        var x, y, z;
        x = X.name;
        y = Y.name;
        z = Z.name;
        return "   " + x + this.signop + y + '=' + z;

    }
    this.result = function (i, j)
    {
        var p = this.ensemble.cardinal;
        var m = j * p + i;
        var W = this.ensemble.listel[this.table[m]];
        return W.name;
    }
}
function sym(m, n)
{
    var q, r;
    r = m % n;
    q = (m - r) / n;
    return r * n + q;
}

function formula1(O1, O2, v1, v2, v3)
{
    var final1 = "";
    var A = O1.ensemble;
    var T1 = O1.table;
    var T2 = O2.table;
    var k1 = A.cardinal;
    var x, y, z;
    var X, Y, Z;
    x = v1;
    y = v2;
    z = v3;
    X = A.listel[x].name;
    Y = A.listel[y].name;
    Z = A.listel[z].name;
    final1 = X + O1.signop + "(" + Y + O2.signop + Z + ")";
    var m;
    m = T2[y * k1 + z];
    var U = A.listel[m].name;
    final1 = final1 + "=" + X + O1.signop + U;
    final1 = final1 + "=" + O1.result(x, m);
    return final1;
}

function formula2(O1, O2, v1, v2, v3)
{
    var final2 = "";
    var A = O1.ensemble;
    var T1 = O1.table;
    var T2 = O2.table;
    var k1 = A.cardinal;
    var x, y, z;
    var X, Y, Z;
    x = v1;
    y = v2;
    z = v3;
    X = A.listel[x].name;
    Y = A.listel[y].name;
    Z = A.listel[z].name;
    final2 = "(" + X + O1.signop + Y + ")" + O2.signop + "(" + X + O1.signop + Z + ")";
    var m, n;
    m = T1[x * k1 + y];
    n = T1[x * k1 + z];
    var U, V, W;
    U = A.listel[m].name;
    V = A.listel[n].name;
    final2 = final2 + "=" + U + O2.signop + V;
    W = O2.result(m, n);
    final2 = final2 + "=" + W;
    return final2;
}


function formula3(O1, O2, v1, v2, v3)
{
    var A = O1.ensemble;
    var k1 = A.cardinal;
    var x, y, z;
    var X, Y, Z;
    var m;
    var str1, str2, str3, str4, str5, final;
    x = 2 + Random(k1 - 2);
    y = 2 + Random(k1 - 2);
    z = 2 + Random(k1 - 2);
    X = A.listel[x].name;
    Y = A.listel[y].name;
    Z = A.listel[z].name;
    m = O1.table[y * k1 + x];
    final = O1.result(m, z);
    str1 = "(" + X + O1.signop + Y + ")" + O1.signop + Z + "=" + O1.result(x, y) + O1.signop + Z + "=" + final;
    m = O1.table[z * k1 + y];
    final = O1.result(x, m);
    str2 = X + O1.signop + "(" + Y + O1.signop + Z + ")=" + X + O1.signop + O1.result(y, z) + '=' + final;
    m = O2.table[y * k1 + x];
    final = O2.result(m, z);
    str3 = "(" + X + O2.signop + Y + ")" + O2.signop + Z + "=" + O2.result(x, y) + O2.signop + Z + "=" + final;
    m = O2.table[z * k1 + y];
    final = O2.result(x, m);
    str4 = X + O2.signop + "(" + Y + O2.signop + Z + ")=" + X + O2.signop + O2.result(y, z) + '=' + final;
    str5 = str1 + "   " + str2 + "     " + str3 + "   " + str4;
    return str5;
}

function  formula4()
{
    var A = Op1.ensemble;
    var NEUTRE = A.listel[0].name;
    var k1 = A.cardinal;
    var X, Y;
    var i;
    var str2 = "";
    for (i = 0; i < k1; i++)
    {
        X = A.listel[i].name;
        if (i == 0)
        {
            Y = X;
        }
        else
        {
            Y = A.listel[k1 - i].name;
        }
        str2 = str2 + "  (" + X + ":" + Y + ")";
    }
    return str2;
}

function  formula5()
{
    var A = Op1.ensemble;
    var k1 = A.cardinal;
    var X, Y;
    var i, j, m;
    var str2 = "";
    for (i = 0; i < k1; i++)
    {
        for (j = 0; j < k1; j++)
        {
            m = Op1.table[i * k1 + j];
            if (m == 1)
            {
                X = A.listel[i].name;
                Y = A.listel[j].name;
                str2 = str2 + "  (" + X + ":" + Y + ")";
            }
        }

    }
    return str2;
}
function formula6(O1, O2, v1, v2)
{
    var A = O1.ensemble;
    var k1 = A.cardinal;
    var x, y;
    var X, Y;
    var m;
    var str1, str2, str3, str4, str5, final;
    x = 1 + Random(k1 - 1);
    y = 1 + Random(k1 - 1);
    while(x==y)
    {
         y = 1 + Random(k1 - 1);
    }
    X = A.listel[x].name;
    Y = A.listel[y].name;
    m = O1.table[y * k1 + x];
    final = A.listel[m].name;
    str1 = "(" + X + O1.signop + Y + ")=" + final;
    str2 = "(" + Y + O1.signop + X + ")=" + final;
    m = O2.table[y * k1 + x];
    final = A.listel[m].name;
    str3 = "(" + X + O2.signop + Y + ")=" + final;
    str4 = "(" + Y + O2.signop + X + ")=" + final;
    str5 = str1 + "   " + str2 + "   " + str3 + "   " + str4;
    return str5;
}

var Op1, Op2;

function Paint()
{
    CreateElements();
    InitCanvas1();
    InitCanvas2();
    var k2 = 2 + Random(2);
    var k1 = 2 * k2;
    var A = new set(k1, 'E');
    var T1 = [];
    var T2 = [];
    var i, q, r;
    for (i = 0; i < k1 * k1; i++)
    {
        r = i % k1;
        q = (i - r) / k1;
        T1.push((q * r) % k1);
        T2.push((q + r) % k1);
    }
    Op1 = new loi(A, 'x', T1);
    Op2 = new loi(A, '+', T2);
    Op1.show(c1);
    Op2.show(c2);
    textzone1.style.width = 2 * ctx1.width + "px";
    //textzone1.style.backgroundColor = "#00FF00";
    textzone2.style.width = 2 * ctx1.width + "px";
    //textzone2.style.backgroundColor = "#00FF00";
    textzone3.style.width = 2 * ctx1.width + "px";
    //textzone3.style.backgroundColor = "#00FF00";
    textzone4.style.width = 2 * ctx1.width + "px";
    //textzone4.style.backgroundColor = "#00FF00";
    textzone5.style.width = 2 * ctx1.width + "px";
    //textzone5.style.backgroundColor = "#00FF00";
    textzone6.style.width = 2 * ctx1.width + "px";
    //textzone6.style.backgroundColor = "#00FF00";
    Paint2();



}
function Paint2()
{
    var v1, v2, v3;
    var A = Op1.ensemble;
    var k1 = A.cardinal;
    var v1 = Random(k1);
    var v2 = Random(k1);
    var v3 = Random(k1);
    textzone1.value = formula1(Op1, Op2, v1, v2, v3) + "   " + formula2(Op1, Op2, v1, v2, v3);
    textzone3.value =  A.listel[1].name+"=1   :   " + A.listel[0].name+"=0";
    textzone2.value = formula3(Op1, Op2, v1, v2, v3);
    textzone4.value = formula4();
    textzone5.value = formula5();
    textzone6.value = formula6(Op1,Op2,v1,v2);
}

Paint();
Paint2();



