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
var c0 = document.getElementById("myCanvas0");
var ctx0 = c0.getContext("2d");
var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
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

function join(char, n, Liste, SN)
{
    if (n == 0)
        return SN + "={}";
    var result;
    result = SN + "={";
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

// fin objet ensemble
function selectshape(sh) {
    var A = new set(21, 'A');
    var lel = [];
    var i, cardA;
    cardA = 0;
    for (i = 0; i < 21; i++)
    {
        if (A.listel[i].shape == sh)
        {
            lel.push(A.listel[i]);
            cardA++;
        }
    }
    A.cardinal = cardA;
    A.listel = lel;
    for (i = 0; i < cardA; i++)
    {
        A.listn[i] = A.listel[i].name;
    }
    A.ext = join(',', cardA, A.listn, A.setname);
    return A;
}

function selectcolor(col) {
    var B = new set(21, 'B');
    var lel = [];
    var i, cardB;
    cardB = 0;
    for (i = 0; i < 21; i++)
    {
        if (B.listel[i].color == col)
        {
            lel.push(B.listel[i]);
            cardB++;
        }
    }
    B.cardinal = cardB;
    B.listel = lel;
    for (i = 0; i < cardB; i++)
    {
        B.listn[i] = B.listel[i].name;
    }
    B.ext = join(',', cardB, B.listn, B.setname);
    return B;
}

function selectorder(bmax) {
    var C = new set(21, 'C');
    var lel = [];
    var i, cardC;
    cardC = 0;
    for (i = 0; i < 21; i++)
    {
        if (C.listel[i].num <= bmax)
        {
            lel.push(C.listel[i]);
            cardC++;
        }
    }
    C.cardinal = cardC;
    C.listel = lel;
    for (i = 0; i < cardC; i++)
    {
        C.listn[i] = C.listel[i].name;
    }
    C.ext = join(',', cardC, C.listn, C.setname);
    return C;
}


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

function extshape(sh)
{
    var shapestring;
    switch (sh)
    {
        case 'r':
            shapestring = "cercle";
            break;
        case 's':
            shapestring = "carr\u00E9";
            break;
        case 't':
            shapestring = "triangle";
            break;
    }
    var result = "A={x \u2208 E | F(x)=" + shapestring + "}";
    return result;
}


function extcolor(col)
{
    var colorstring;
    switch (col)
    {
        case red:
            colorstring = "rouge";
            break;
        case blue:
            colorstring = "bleu";
            break;
        case green:
            colorstring = "vert";
            break;
        case brown:
            colorstring = "marron";
            break;
        case orange:
            colorstring = "orange";
            break;
        case purple:
            colorstring = "violet";
            break;
        case yellow:
            colorstring = "jaune";
            break;

    }
    var result = "B={x \u2208 E | C(x)=" + colorstring + "}";
    return result;
}

function extorder(ord) {
    var result = "C={x \u2208 E | N(x)\u2264" + ord + "}";
    return result;
}

function showInExt(context, string, x, y)
{
    context.font = "15px Arial";
    context.fillStyle = 'white';
    context.fillText(string, x, y);
}

function Paint()
{
    InitCanvas(ctx0);
    InitCanvas(ctx1);
    InitCanvas(ctx2);
    InitCanvas(ctx3);
    CreateElements();
    var sh;
    var rndsh = Random(3);
    switch (rndsh)
    {
        case 0:
            sh = 'r';
            break;
        case 1:
            sh = 's';
            break
        case 2:
            sh = 't'
    }
    var col;
    var rndcol = Random(7);
    switch (rndcol)
    {
        case 0:
            col = red;
            break;
        case 1:
            col = green;
            break
        case 2:
            col = blue;
            break;
        case 3:
            col = purple;
            break;
        case 4:
            col = brown;
            break;
        case 5:
            col = orange;
            break;
        case 6:
            col = yellow;

    }
    var borne;
    borne = 2 + Random(19);
    var E = new set(21, 'E');
    var A = selectshape(sh);
    var B = selectcolor(col);
    var C = selectorder(borne);
    var chaine2 = extcolor(col);
    var chaine1 = extshape(sh);
    var chaine3 = extorder(borne);
    E.show(ctx0);
    A.show(ctx1);
    showInExt(ctx1,chaine1,5,sizeofelt*3.9);
    B.show(ctx2);
    showInExt(ctx2,chaine2,5,sizeofelt*3.9);
    C.show(ctx3);
    showInExt(ctx3,chaine3,5,sizeofelt*3.9);
}

Paint();
