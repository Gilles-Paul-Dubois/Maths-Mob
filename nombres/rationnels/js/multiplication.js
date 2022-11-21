  function pgcd(m,n)
{
var a=m;
var b=n; while (m%n)
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
function produit(f1,f2)
{ f1=simplif(f1);
f2=simplif(f2);
f3=simplif([f1[0]*f2[0], f1[1]*f2[1]]);
return f3[0]+"/"+f3[1];
}
function ClickOnGoPGCD()
{
if (isNaN(document.pgcd.getm.value)||document.pgcd.getm.value=="")
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
if (parseInt(document.pgcd.getm.value)<0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="m ne doit pas être négatif, SVP!";else
document.pgcd.erreur.value="m should not be negative !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="n doit être strictement positif, SVP!";else
document.pgcd.erreur.value="n should be strictly positive !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getm.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre m est trop grand!";else
document.pgcd.erreur.value="Your number m is too large !";
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
//////
if (isNaN(document.pgcd.getp.value)||document.pgcd.getp.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour p !";else
document.pgcd.erreur.value="You did not enter a number for p !";
document.pgcd.divmn.value="";
return;
}
if (isNaN(document.pgcd.getq.value)||document.pgcd.getq.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour q !";else
document.pgcd.erreur.value="You did not enter a number for q !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getp.value)!=parseInt(document.pgcd.getp.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour p, SVP !";else
document.pgcd.erreur.value="No decimal value for p please !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getq.value)!=parseInt(document.pgcd.getq.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour q, SVP !";else
document.pgcd.erreur.value="No decimal value for q please !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getp.value)<0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="p ne doit pas être négatif, SVP!";else
document.pgcd.erreur.value="p should not be negative !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getq.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="q doit être strictement positif, SVP!";else
document.pgcd.erreur.value="q should be strictly positive !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getp.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre p est trop grand!";else
document.pgcd.erreur.value="Your number p is too large !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getq.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre q est trop grand!";else
document.pgcd.erreur.value="Your number q is too large !";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=produit([parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value)],[parseInt(document.pgcd.getp.value),parseInt(document.pgcd.getq.value)] );
}