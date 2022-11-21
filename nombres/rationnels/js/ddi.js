  function quot(a,b)
{ var r= a%b;
  return Math.round((a-r)/b);
  }

function indof(r,R)
{ var i;
  for(i=0;i<R.length;i++)
  if (r==R[i])
  return i;
  return -1;
  }

function ddi(p,q)
{var e=quot(p,q);
p=p%q;
var R=[p];
var Q=[];
var d;
var r=p;
var x;
var bye=true;
while (bye)
{d=quot(10*r,q);
 r=(10*r)%q;
 x=indof(r,R);
 if(x!=-1)
 { 
 bye=false;
 }
 else
 {R.push(r);
 }
 Q.push(d);
}
S=e+",";
var i;
var j;
for (j=0;j<Q.length;j++)
S=S+(Q[j]+"");
S=S+"(";
for(j=x;j<Q.length;j++)
S=S+(Q[j]+"");
S=S+")";
return S;
}
function ClickOnGoPGCD()
{if (isNaN(document.pgcd.getm.value)||document.pgcd.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour m !";else
document.pgcd.erreur.value="You didn't enter a natural for m !";
document.pgcd.divmn.value="";
return;
}
if (isNaN(document.pgcd.getn.value)||document.pgcd.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour n !";else
document.pgcd.erreur.value="You didn't enter a natural for n !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getm.value)!=parseInt(document.pgcd.getm.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour m, SVP !";else
document.pgcd.erreur.value="No decimal value for m please !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getn.value)!=parseInt(document.pgcd.getn.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour n, SVP !";else
document.pgcd.erreur.value="No decimal value for n please !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getm.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="m doit être strictement positif, SVP!";else
document.pgcd.erreur.value="m should be strictly positive please !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="n doit être strictement positif, SVP!";else
document.pgcd.erreur.value="n should be strictly positive please !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getm.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre m est trop grand!";else
document.pgcd.erreur.value="Your  value for m is too large !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre n est trop grand!";else
document.pgcd.erreur.value="Your value for n is too large";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=ddi(parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value) );
}