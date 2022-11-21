  function bezout(a,b)
{
var r0=a;
var r1=b;
var u0=0;
var u1=1;
var v0=1;
var v1=-Math.floor(r0/r1);
var s=[r1,u0,v0];
while (r0%r1)
{
r=r0;
r0=r1;
r1=r%r1;
u=u0;
v=v0;
u0=u1;
v0=v1;
q=Math.floor(r0/r1);
u1=u-q*u1;
v1=v-q*v1;
s=[r1,u0,v0];
}
if(document.body.className.substring(0,2)=="fr")
return "pgcd: "+r1+" Entiers de Bezout:("+u0+","+v0+")";
else 
return "gcd: "+r1+" Bezout's integers:("+u0+","+v0+")";
}
function ClickOnGoPGCD()
{if (isNaN(document.pgcd.getm.value)||document.pgcd.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour m !";else
document.pgcd.erreur.value="You did not enter a number for m !";
document.pgcd.divmn.value="";
return;
}
if (isNaN(document.pgcd.getn.value)||document.pgcd.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour n !";else
document.pgcd.erreur.value="You did not enter a number for n !";
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
document.pgcd.erreur.value="your number m is too large !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre n est trop grand!";else
document.pgcd.erreur.value="Your number n is too large !";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=bezout(parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value) );
}