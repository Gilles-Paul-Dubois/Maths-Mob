/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
var textzone2 = document.getElementById("mytext2");

var kw;
function initkw()
{ if (document.body.className=="fr") 
       kw="Classe(";
  if (document.body.className=="en")
       kw="Class(";
}

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
        return [(i + 1.5) * sizeofelt, (this.F.cardinal - 1 - j + .5) * sizeofelt];
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
        //ctx.fillText(this.F.ext, 5, sizeofelt * (this.F.cardinal + 1.9));
        ctx.strokeStyle = 'white';
        for (j = 0; j < this.F.cardinal; j++)
        {
            ctx.beginPath();
            ctx.moveTo(sizeofelt, j * sizeofelt + sizeofelt / 2);
            ctx.lineTo(wi, j * sizeofelt + sizeofelt / 2);
            ctx.stroke();
        }
        for (i = 0; i < this.E.cardinal; i++)
        {
            ctx.beginPath();
            ctx.moveTo(sizeofelt * (i + 1) + sizeofelt / 2, 0);
            ctx.lineTo(sizeofelt * (i + 1) + sizeofelt / 2, hi - 2 * sizeofelt);
            ctx.stroke();
        }
    }
    this.showRandomPoint = function (can, i, j)
    {
        var ctx = can.getContext("2d");
        var pos = this.position(i, j);
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], 7, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}
function relgraph(C, G)
{
    this.cartes = C;
    var i, j;
    if (G == undefined)
    {
        var R = [];
        for (i = 0; i < this.cartes.E.cardinal; i++)
        {
            for (j = 0; j < this.cartes.F.cardinal; j++)
            {
                if (Random(2) == 1)
                    R.push([i, j]);
            }
        }
        this.graph = R;
    }
    else
        this.graph = G;
    this.show = function (can)
    {
        this.cartes.show(can);
        var i, j, k;
        for (k = 0; k < this.graph.length; k++)
        {
            this.cartes.showRandomPoint(can, (this.graph[k])[0], (this.graph[k])[1])
        }
        this.stringtoprint = "G={";
        if (this.graph.length > 0)
        {
            for (k = 0; k < this.graph.length - 1; k++)
            {
                this.stringtoprint = this.stringtoprint + this.cartes.elementstring(this.graph[k][0], this.graph[k][1]);
                this.stringtoprint = this.stringtoprint + ",";
            }
            k = this.graph.length - 1;
            this.stringtoprint = this.stringtoprint + this.cartes.elementstring(this.graph[k][0], this.graph[k][1]);
        }
        this.stringtoprint = this.stringtoprint + "}";
    }
    this.showstring = function (tz, prefix)
    {

        tz.font = "20px Arial";
        tz.fillStyle = 'black';
         tz.value = prefix + this.stringtoprint;
        var long = tz.value.length;
        long = Math.max(long, 50);
        tz.style.width = long * 9 + "px";

    }

    this.drawarrow = function (context, i, j)
    {
        context.strokeStyle = 'white';
        var delta = 4;
        context.beginPath();
        context.moveTo(sizeofelt, i * sizeofelt + sizeofelt / 2);
        context.lineTo(sizeofelt * 4.5, j * sizeofelt + sizeofelt / 2 + (i - j) * delta);
        var fromx, fromy, tox, toy;
        fromx = sizeofelt * 4.5;
        tox = sizeofelt * 5;
        fromy = j * sizeofelt + sizeofelt / 2 + (i - j) * delta;
        toy = fromy;
        var headlen = 5;   // length of head in pixels
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(-Math.PI / 6), toy - headlen * Math.sin(-Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(Math.PI / 6), toy - headlen * Math.sin(Math.PI / 6));
        context.stroke();
    }

    this.saggital = function (can)
    {
        var E = this.cartes.E;
        var F = this.cartes.F;
        var m = E.cardinal;
        var n = F.cardinal;
        var max = Math.max(m, n);
        var i, j;
        var wi = 6 * sizeofelt;
        var hi = (max) * sizeofelt;
        can.width = wi
        can.height = hi
        var ctx = can.getContext("2d");
        ctx.width = wi;
        ctx.height = hi;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.width, ctx.height);
        for (i = 0; i < m; i++)
        {
            E.listel[i].show(ctx, 0, i * sizeofelt);
        }
        for (j = 0; j < n; j++)
        {
            F.listel[j].show(ctx, 5 * sizeofelt, j * sizeofelt);
        }
        var G = this.graph;
        var k;
        var couple;

        for (i = 0; i < m; i++)
        {
            for (j = 0; j < n; j++)
            {
                for (k = 0; k < G.length; k++)
                {
                    couple = G[k];
                    if (i == couple[0] && j == couple[1])
                        this.drawarrow(ctx, i, j);
                }
            }
        }

    }
        this.images = function (i)
    {
        var X, k;
        var R = [];
        for (k = 0; k < this.graph.length; k++)
        {
            X = this.graph[k];
            if (X[0] == i)
            {
                R.push(X[1]);
            }
        }
        var L = [];
        for (k = 0; k < R.length; k++)
        {
            L.push(this.cartes.F.listel[R[k]]);
        }
        return L;
    }
    this.imagesstr = function (i)
    {
        var L = this.images(i);
        var n = this.cartes.E.listel[i].name;
        var M = [];
        var k;
        for (k = 0; k < L.length; k++)
        {
            M.push(L[k].name);
        }
        initkw();
        Result = kw + n;
        Result = Result + ")={";
        Result = Result + M.toString();
        Result = Result + "}";
        return Result;

    }
    this.allimagesstr = function ()
    {
        var i;
        var L = [];
        for (i = 0; i < this.cartes.E.cardinal; i++)
        {
            L.push(this.imagesstr(i));
        }
        return L.toString();
    }
    this.showimages = function (tz)
    {

        tz.value = this.allimagesstr();
        tz.style.width = this.allimagesstr().length * 9 + "px";

    }    
}
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
function InitTextZone(tz, col) {
    //tz.style.backgroundColor = col;
    tz.font = "20px Arial";
    tz.fillStyle = 'black';
    tz.style.width = "350px";
    tz.style.height = "20px";
}

function Paint()
{
    CreateElements();
    InitCanvas1();
    InitCanvas2();
    InitTextZone(textzone2, "#FF99FF");
    var k1 = 3 + Random(4);
    var A = new set(k1, 'E');
    var LN=A.listn;
    var i, j;
    var X,Y;
    var p,q;
    var C = new cart(A, A);
    var dice=Random(3)+2;
    var G=[];
    {
        for (i = 0; i < k1; i++)
        {
            for (j = 0; j < k1; j++)
            {
                X=A.listel[i];
                Y=A.listel[j];
                p=X.num;
                q=Y.num;
                if (p%dice==q%dice)
                {
                  G.push([i,j]);  
                }
                
            }
        }
    }
    var R = new relgraph(C, G);
    R.show(c1);
    R.saggital(c2);
    R.showimages(textzone2);

}


Paint();
