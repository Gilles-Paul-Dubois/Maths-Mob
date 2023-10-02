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
var ctx = c1.getContext("2d");
var textzone = document.getElementById("mytext");
var a, b, c, d, e, f, g, h, z, y, j, m, n, t, u, v, p, q, w, m, n;
var LAE;
var proto0 = "{{}}  ";
var proto1 = "{{},{x1}}";
var proto2 = "{{},{x1},{y1},{x1,y1}}";
var proto3 = "{{},{x1},{y1},{z1},{x1,y1},{x1,z1},{y1,z1},{x1,y1,z1}}}";
var proto4 = "{{},{x1},{y1},{z1},{t1},{x1,y1},{x1,z1},{x1,t1},{y1,z1},{y1,t1},{z1,t1},{y1,z1,t1},{x1,z1,t1},{x1,y1,t1},{x1,y1,z1},{x1,y1,z1,t1}}";
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

function set(card, char) {
    this.cardinal = card;
    this.listnum = [];
    this.listel = [];
    this.listn = [];
    this.setname = char;
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

function InitCanvas() // initialisation du canevas
{
    ctx.width = sizeofelt * 7;
    ctx.height = sizeofelt * 4;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.width, ctx.height);
    textzone.style.width = "100%";
    textzone.style.height = "20px";
c}

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

function writeinzone(str)
{
    textzone.value = str;
    textzone.style.width = (str.length+1)*9+10 + "px";
}
function replaceAll(machaine, chaineARemaplacer, chaineDeRemplacement) {
    return machaine.replace(new RegExp(chaineARemaplacer, 'g'), chaineDeRemplacement);
}
function parts(E)
{
    switch (E.cardinal)
    {
        case 0:
            return proto0;
        case 1:
            return replaceAll(proto1, 'x1', E.listn[0]);
        case 2:
            var rep1 = replaceAll(proto2, 'x1', E.listn[0]);
            return replaceAll(rep1, 'y1', E.listn[1]);
        case 3:
            var rep1 = replaceAll(proto3, 'x1', E.listn[0]);
            var rep2 = replaceAll(rep1, 'y1', E.listn[1]);
            return replaceAll(rep2, 'z1', E.listn[2]);
        case 4:
            var rep1 = replaceAll(proto4, 'x1', E.listn[0]);
            var rep2 = replaceAll(rep1, 'y1', E.listn[1]);
            var rep3 = replaceAll(rep2, 'z1', E.listn[2]);
            return replaceAll(rep3, 't1', E.listn[3]);
    }
}

function Paint()
{
    InitCanvas();
    CreateElements();
    var nk = Random(5);
    var S = new set(nk, 'E');
    S.show(ctx);
    writeinzone(parts(S));

}

Paint();
