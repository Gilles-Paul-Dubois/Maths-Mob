  function pgcd(m,n)
{
var a=m;
var b=n; 
while (m%n)
{var t=m;
 m=n;
 n=t%n;
}
return n;
}

function simplif( f)
{ return [f[0]/pgcd(f[0],f[1]),f[1]/pgcd(f[0],f[1])];
}

function quot(a,b)
{ var r= a%b;
  return Math.round((a-r)/b);
  }

function egypt(f)
{ f=simplif(f);
result=[];
var i=2;
while (f[0]!=1)
{
i=quot(f[1],f[0])+1;
f=simplif([f[0]*i-f[1],f[1]*i])
result.push(i);
}
result.push(f[1]);
var resaff=[];
var numun="1/";
var n=result.length;
for (var i=0;i<n;i++)
resaff.push(numun+result[i]);
return resaff.join("+");
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
document.pgcd.divmn.value=egypt([parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value)] );
}