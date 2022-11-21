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
var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");
var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");
var c7 = document.getElementById("myCanvas7");
var ctx7 = c7.getContext("2d");
var c8 = document.getElementById("myCanvas8");
var ctx8 = c8.getContext("2d");
var c9 = document.getElementById("myCanvas9");
var ctx9 = c9.getContext("2d");

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

function InitCanvas(ctx) // initialisation du canevas
{
    ctx.width = sizeofelt * 7;
    ctx.height = sizeofelt * 4;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx1.width, ctx1.height);
}

function InitCanvas2()
{
    InitCanvas(ctx1);
    InitCanvas(ctx2);
}
function InitCanvas3()
{
    InitCanvas(ctx3);
    InitCanvas(ctx4);
    InitCanvas(ctx5);
}
function InitCanvas4()
{
    InitCanvas(ctx6);
    InitCanvas(ctx7);
    InitCanvas(ctx8);
    InitCanvas(ctx9);
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

function missing(L)
{
    var i;
    var result = [];
    for (i = 0; i < 21; i++)
    {
        if (L.indexOf(i) == -1)
            result.push(i);
    }
    return result;
}

function Paint2()
{
    InitCanvas2();
    var nk1 = 1 + Random(19);
    var S1 = new set(nk1, 'A');
    var nk2 = 21 - nk1;
    var L = missing(S1.listnum);
    nk2 = L.length;
    var S2 = new set(nk2, 'B', L)
    S1.show(ctx1);
    S2.show(ctx2);
}

function Paint3()
{
    InitCanvas3();
    var nk3 = 1 + Random(16);
    var S3 = new set(nk3, 'C');
    var M = missing(S3.listnum);
    var r2 = 21 - nk3;
    var nk4 = 1 + Random(r2 - 2);
    var L = [];
    var i;
    for (i = 0; i < nk4; i++)
    {
        L[i] = M[i];
    }
    var S4 = new set(nk4, 'D', L);
    var nk5 = 21 - nk3 - nk4;
    L = []
    for (i = 0; i < nk3; i++)
    {
        L[i] = S3.listnum[i]
    }
    for (i = 0; i < nk4; i++)
    {
        L[nk3 + i] = S4.listnum[i]
    }
    M = missing(L);
    var S5 = new set(nk5, 'E', M)
    S3.show(ctx3);
    S4.show(ctx4);
    S5.show(ctx5);
}

function Paint4()
{
    InitCanvas4();
    var nk6, nk7, nk8, nk9;
    var L, M, P, Q;
    nk6 = 1 + Random(8);
    var S6 = new set(nk6, 'F');
    nk7 = 1 + Random(4);
    L = missing(S6.listnum);
    M = []
    for (i = 0; i < nk7; i++)
    {
        M[i] = L[i];
    }
    var S7 = new set(nk7, 'G', M);

    var reste = 21 - (nk6 + nk7);
    nk8 = 1 + Random(reste - 3);
    P = S6.listnum + S7.listnum
    L = missing(P);
    M = [];
    for (i = 0; i < nk8; i++)
    {
        M[i] = L[i];
    }
    var S8 = new set(nk8, 'H', M);
    nk9 = 21 - (nk6 + nk7 + nk8);
    L=[];
    for (i=0;i<21;i++)
    {
        if (S6.listnum.indexOf(i)==-1 && S7.listnum.indexOf(i)==-1 && S8.listnum.indexOf(i)==-1 )
            L.push(i);
    }
    var S9 = new set(nk9, 'I', L);
    S6.show(ctx6);
    S7.show(ctx7);
    S8.show(ctx8);
    S9.show(ctx9);

}

function Paint()
{
    CreateElements();
    Paint2();
    Paint3();
    Paint4();
}
Paint();