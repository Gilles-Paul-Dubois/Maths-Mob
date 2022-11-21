// JavaScript Document
// dessine un produit cartésien
// ajouter méthode de brouillage à la classe Array
if (!Array.prototype.sortRandom)
    Array.prototype.sortRandom = function() { this.sort(function(elmt1, elmt2) { return ((2 * Math.round(Math.random())) - 1) }); }
        
var NAMES=['a','b','c','d','g','y','z','j','k','v','w','p','q','t','r','u','m','n','e','f'];

// globale utilisée par des fonctions
var ALL=elindexes(20);

function drawgraphe(nameS,nbreltsS,indicesS,nameB,nbreltsB,indicesB,Graphe)
{
document.write("<H3>Représentation graphe G</H3>");
document.write("<P>");
document.write("<APPLET codebase='classes' code='GraGenerator.class' width= "+((nbreltsS+1)*64).toString(10)+" height= "+((nbreltsB+1)*64).toString(10)+">");
document.write(" <PARAM NAME='nomS' VALUE=" + nameS + ">");
document.write(" <PARAM NAME='nbeltsS' VALUE=" + nbreltsS.toString(10) + ">");
for(i=0;i<nbreltsS;i++)
document.write(" <PARAM NAME="+nameS+i.toString(10)+" VALUE= " + indicesS[i].toString(10) + ">");
document.write(" <PARAM NAME='nomB' VALUE=" + nameB + ">");
document.write(" <PARAM NAME='nbeltsB' VALUE=" + nbreltsB.toString(10) + ">");
for(i=0;i<nbreltsB;i++)
document.write(" <PARAM NAME="+nameB+i.toString(10)+" VALUE= " + indicesB[i].toString(10) + ">");
for(i=0;i<nbreltsS;i++)
for (j=0;j<nbreltsB;j++)
document.write(" <PARAM NAME= GR"+i.toString(10)+j.toString(10)+" VALUE= " +Graphe[i*nbreltsB+j].toString(10)+ ">");
document.write("</APPLET>");
document.write("</P>");
}

function drawsag(nameS,nbreltsS,indicesS,nameB,nbreltsB,indicesB,Graphe)
{
document.write("<H3>Schéma sagittal du graphe G</H3>");
document.write("<P>");
document.write("<APPLET codebase='classes' code='SagGenerator.class' width=320 "+" height= "+(MAXH*64).toString(10)+">");
document.write(" <PARAM NAME='nomS' VALUE=" + nameS + ">");
document.write(" <PARAM NAME='nbeltsS' VALUE=" + nbreltsS.toString(10) + ">");
for(i=0;i<nbreltsS;i++)
document.write(" <PARAM NAME="+nameS+i.toString(10)+" VALUE= " + indicesS[i].toString(10) + ">");
document.write(" <PARAM NAME='nomB' VALUE=" + nameB + ">");
document.write(" <PARAM NAME='nbeltsB' VALUE=" + nbreltsB.toString(10) + ">");
for(i=0;i<nbreltsB;i++)
document.write(" <PARAM NAME="+nameB+i.toString(10)+" VALUE= " + indicesB[i].toString(10) + ">");
for(i=0;i<nbreltsS;i++)
for (j=0;j<nbreltsB;j++)
document.write(" <PARAM NAME= GR"+i.toString(10)+j.toString(10)+" VALUE= " +Graphe[i*nbreltsB+j].toString(10)+ ">");
document.write("</APPLET>");
document.write("</P>");
}

function drawop(nameS,nbreltsS,indicesS,Graphe, symbol)
{
document.write("<H3>Table opération "+symbol+"</H3>");
document.write("<P>");
document.write("<APPLET codebase='classes' code='OpGenerator.class' width= "+((nbreltsS+1)*64).toString(10)+" height= "+((nbreltsS+1)*64).toString(10)+">");
document.write(" <PARAM NAME='nomS' VALUE=" + nameS + ">");
document.write(" <PARAM NAME='nbeltsS' VALUE=" + nbreltsS.toString(10) + ">");
for(i=0;i<nbreltsS;i++)
document.write(" <PARAM NAME="+nameS+i.toString(10)+" VALUE= " + indicesS[i].toString(10) + ">");
document.write(" <PARAM NAME='nomB' VALUE=" + nameS + ">");
document.write(" <PARAM NAME='nbeltsB' VALUE=" + nbreltsS.toString(10) + ">");
for(i=0;i<nbreltsS;i++)
document.write(" <PARAM NAME="+nameS+i.toString(10)+" VALUE= " + indicesS[i].toString(10) + ">");
for(i=0;i<nbreltsS;i++)
for (j=0;j<nbreltsS;j++)
document.write(" <PARAM NAME= GR"+i.toString(10)+j.toString(10)+" VALUE= " +Graphe[i*nbreltsS+j].toString(10)+ ">");
document.write(" <PARAM NAME=Symbole" + " VALUE= "+symbol+">");
document.write("</APPLET>");
document.write("</P>");
}


function drawopext(nameS,nbreltsS,indicesS,nameB,nbreltsB,indicesB,Graphe, symbol)
{
document.write("<H3>Table opération externe"+symbol+" de ("+nameB+"x"+nameS+") dans "+ nameS+ "</H3>");
document.write("<P>");
document.write("<APPLET codebase='classes' code='OpGenerator.class' width= "+((nbreltsS+1)*64).toString(10)+" height= "+((nbreltsB+1)*64).toString(10)+">");
document.write(" <PARAM NAME='nomS' VALUE=" + nameS + ">");
document.write(" <PARAM NAME='nbeltsS' VALUE=" + nbreltsS.toString(10) + ">");
for(i=0;i<nbreltsS;i++)
document.write(" <PARAM NAME="+nameS+i.toString(10)+" VALUE= " + indicesS[i].toString(10) + ">");
document.write(" <PARAM NAME='nomB' VALUE=" + nameB + ">");
document.write(" <PARAM NAME='nbeltsB' VALUE=" + nbreltsB.toString(10) + ">");
for(i=0;i<nbreltsB;i++)
document.write(" <PARAM NAME="+nameB+i.toString(10)+" VALUE= " + indicesB[i].toString(10) + ">");
for(i=0;i<nbreltsS;i++)
for (j=0;j<nbreltsB;j++)
document.write(" <PARAM NAME= GR"+i.toString(10)+j.toString(10)+" VALUE= " +Graphe[i*nbreltsS+j].toString(10)+ ">");
document.write(" <PARAM NAME=Symbole" + " VALUE= "+symbol+">");
document.write("</APPLET>");
document.write("</P>");
}


function drawsag2(nameS,nbreltsS,indicesS,nameB,nbreltsB,indicesB,Graphe,Fonction)
{
document.write("<H3>Schéma sagittal de la fonction "+Fonction+"</H3>");
document.write("<P>");
document.write("<APPLET codebase='classes' code='SagGenerator.class' width=320 "+" height= "+(MAXH*64).toString(10)+">");
document.write(" <PARAM NAME='nomS' VALUE=" + nameS + ">");
document.write(" <PARAM NAME='nbeltsS' VALUE=" + nbreltsS.toString(10) + ">");
for(i=0;i<nbreltsS;i++)
document.write(" <PARAM NAME="+nameS+i.toString(10)+" VALUE= " + indicesS[i].toString(10) + ">");
document.write(" <PARAM NAME='nomB' VALUE=" + nameB + ">");
document.write(" <PARAM NAME='nbeltsB' VALUE=" + nbreltsB.toString(10) + ">");
for(i=0;i<nbreltsB;i++)
document.write(" <PARAM NAME="+nameB+i.toString(10)+" VALUE= " + indicesB[i].toString(10) + ">");
for(i=0;i<nbreltsS;i++)
for (j=0;j<nbreltsB;j++)
document.write(" <PARAM NAME= GR"+i.toString(10)+j.toString(10)+" VALUE= " +Graphe[i*nbreltsB+j].toString(10)+ ">");
document.write("</APPLET>");
document.write("</P>");
}


// retourne un entier aléatoire m<=a<M
function alea (m,M)
{ 
 		 var d=M-m;
		 var r=Math.random();
		 r*=100;
		 r=parseInt(r);
		 r=m+r%d;
		 return r;
 }

// retourne un tableau aléatoire de n indices distincts entre 0 et 19 inclus 
 function elindexes(n)
 { 
    var EI=[];
    var Free=[];
    var i;
    var j;
    var h;
    var k;
    for (i=0;i<20;i++)
      Free.push(1); 
    for(i=0;i<n;i++)
     {j=alea(0,20-i);
       // trouver le j-ième emplacement libre
        for(h=0,k=0;;k++)
         {if(Free[k]) 
           {
           if(h==j)
           {EI.push(k);
           Free[k]=0;
           break;}
           h++;
          }
          }
      }
  return EI;
}


// retourne un tableau aléatoire contenant le tableau L et a autres éléments
// n'appartenant pas à L
// on doit avoir len(L))+a<=20
function addindexes(L,a)
{
var B=[];
var i;
for (i=0;i<L.length;i++)
  B.push(L[i]);
  ALL.sortRandom();
var j;
for(j=0,k=0;k<a;j++)
  {if(not_in(ALL[j],L))
    {B.push(ALL[j]);
     k++;
    }
  }
return B; 
}

// teste si j n'est pas dans L
function not_in(j,L)
{var i;
for(i=0;i<L.length;i++)
    if(j==L[i])
    return false;
return true;
}

// teste si j est dans L
function is_in(j,L)
{var i;
for(i=0;i<L.length;i++)
    if(j==L[i])
    return true;
return false;
}

// conversion indices ->noms
function decode(L, CODES)
{var R=[];
 var i;
 for(i=0;i<L.length;i++)
 R.push(CODES[L[i]]);
 return R;
}

function strpart(L)
{var S="{";
var n=L.length;
var i;
for(i=0;i<n-1;i++)
{S=S+L[i]+",";
}
if (n==0)
S=S+" }";
else
S+=L[n-1]+"}";
return S; 
}

function strcouple(L)
{var S="(";
var n=L.length;
var i;
for(i=0;i<n-1;i++)
{S=S+L[i]+",";
}
if (n==0)
S=S+" )";
else
S+=L[n-1]+")";
return S; 
}
