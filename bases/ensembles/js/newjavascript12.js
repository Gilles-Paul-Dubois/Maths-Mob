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

function join(char, n, Liste,char)
{
    if (n == 0)
        return char+"={ }";
    var result;
    result = char +"={";
    for (var i = 0; i < n - 1; i++)
    {
        result = result + Liste[i] + ",";
    }
    result = result + Liste[n - 1] + "}";
    return result;
}

function set(card, nom) {
    this.setname = nom;
    this.cardinal = card;
    this.listnum = [];
    this.listel = [];
    this.listn = [];
    this.ext = "";
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

    for (i = 0; i < card; i++)
    {
        this.listel[i] = LAE[this.listnum[i]];
    }
    for (i = 0; i < card; i++)
    {
        this.listn[i] = this.listel[i].name;
    }
    this.ext = join(',', card, this.listn, this.setname);
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
    this.shuffle = function () { //v1.0
        var j, x, i;
        for (i = this.listnum.length; i; j = Math.floor(Math.random() * i), x = this.listnum[--i], this.listnum[i] = this.listnum[j], this.listnum[j] = x)
            ;
        for (i = 0; i < this.cardinal; i++)
        {
            this.listel[i] = LAE[this.listnum[i]];
        }
        for (i = 0; i < this.cardinal; i++)
        {
            this.listn[i] = this.listel[i].name;
        }
        this.ext = join(',', this.cardinal, this.listn, this.setname);
    }
}
function disjoint(E)
{
    var ln1 = E.listnum;
    var ln3 = [];
    var i;
    var cardE = E.cardinal;
    var maxF = 21-cardE;
    var cardF = Random(maxF);
    for (i = 0; i < 21; i++)
    {
        if (E.listnum.indexOf(i) == -1)
            ln3.push(i);
    }
    var ln4 = [];
    F = new set(cardF, 'F');
    for (i = 0; i < cardF; i++)
        ln4[i] = ln3[i];
    F.listnum = ln4;
    for (i = 0; i < cardF; i++)
    {
        F.listel[i] = LAE[F.listnum[i]];
    }
    for (i = 0; i < cardF; i++)
    {
        F.listn[i] = F.listel[i].name;
    }
    F.ext = join(',', cardF, F.listn, F.setname);
    F.shuffle();
    return F;
}
// fin objet ensemble

function InitCanvas(context) // initialisation du canevas
{
    context.width = sizeofelt * 7;
    context.height = sizeofelt * 4;
    context.fillStyle = "black";
    context.fillRect(0, 0, context.width, context.height);

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

function Paint()
{
    InitCanvas(ctx1);
    InitCanvas(ctx2);
    CreateElements();
    var nk = Random(15);
    var E = new set(nk, 'E');
    E.show(ctx1);
    var F = disjoint(E);
    F.show(ctx2);
}

Paint();
