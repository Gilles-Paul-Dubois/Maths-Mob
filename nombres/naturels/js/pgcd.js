   function SetArray (A)
{var B=new Array;
for(var i=0; i<A.length;i++)
B.push(A[i]+"")
var result= "{"+B.join(", ")+"}";
return result
}
function divisors(m,n)
{var result= new Array;
for( var i=1;i<=n;i++)
if ((m%i==0)&&(n%i==0)) result.push(i);
return result
}
function Euclide(m,n)
{var result=""
var r;
while (m%n)
{result+="("+(m+"")+","+(n+"")+") "
r=m;
m=n;
n=r%n;
}
result+="("+(m+"")+","+(n+"")+") "
result+="\n";
result+="Résultat: ";
result+=n+"";
return result;
}
function ClickOnGo()
{if (isNaN(document.diviseurs.getm.value)||document.diviseurs.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Vous n'avez pas saisi un entier pour m !";else
document.diviseurs.erreur.value="You did not give a number for m !";
document.diviseurs.divmn.value="";
return;
}
if (isNaN(document.diviseurs.getn.value)||document.diviseurs.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Vous n'avez pas saisi un entier pour n !";else
document.diviseurs.erreur.value="You did not give a number for n !";
document.diviseurs.divmn.value="";
return;
}
if (parseFloat(document.diviseurs.getm.value)!=parseInt(document.diviseurs.getm.value))
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Pas de nombres à virgule pour m, SVP !";else
document.diviseurs.erreur.value="No decimal value for m please !";
document.diviseurs.divmn.value="";
return;
}
if (parseFloat(document.diviseurs.getn.value)!=parseInt(document.diviseurs.getn.value))
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Pas de nombres à virgule pour n, SVP !";else
document.diviseurs.erreur.value="No decimal value for n please !";
document.diviseurs.divmn.value="";
return;
}
if (parseInt(document.diviseurs.getm.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="m doit être strictement positif, SVP!";else
document.diviseurs.erreur.value="m should not be negative !";
document.diviseurs.divmn.value="";
return;
}
if (parseInt(document.diviseurs.getn.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="n doit être strictement positif, SVP!";else
document.diviseurs.erreur.value="n should not be negative !";
document.diviseurs.divmn.value="";
return;
}
if (parseInt(document.diviseurs.getm.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Votre nombre m est trop grand!";else
document.diviseurs.erreur.value="Your number m is too big !";
document.diviseurs.divmn.value="";
return;
}
if (parseInt(document.diviseurs.getn.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Votre nombre n est trop grand !";else
document.diviseurs.erreur.value="Your number n is too big !";
document.diviseurs.divmn.value="";
return;
}
document.diviseurs.erreur.value="";
document.diviseurs.divmn.value=SetArray(divisors(parseInt(document.diviseurs.getm.value),parseInt(document.diviseurs.getn.value) ));
}
function pgcd(m,n)
{ var d=divisors(m,n);
var k=d.length;
return d[k-1];
}
function ClickOnGoPGCD()
{if (isNaN(document.pgcd.getm.value)||document.pgcd.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour m !";else
document.pgcd.erreur.value="You did not give a number for m !";
document.pgcd.divmn.value="";
return;
}
if (isNaN(document.pgcd.getn.value)||document.pgcd.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour n !";else
document.pgcd.erreur.value="You did not give a number for n !";
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
document.pgcd.erreur.value="m should not be negative !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="n doit être strictement positif, SVP!";else
document.pgcd.erreur.value="n should not be negative !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getm.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre m est trop grand!";else
document.pgcd.erreur.value="Your number m is too big !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre n est trop grand!";else
document.pgcd.erreur.value="Your number n is too big !";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=pgcd(parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value) );
}
function ClickOnGoEUCLIDE()
{if (isNaN(document.euclide.getm.value)||document.euclide.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="Vous n'avez pas entré un nombre pour m !";else
document.euclide.erreur.value="You did not enter a number for m !";
document.euclide.divmn.value="";
return;
}
if (isNaN(document.euclide.getn.value)||document.euclide.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="Vous n'avez pas entré un nombre pour n !";else
document.euclide.erreur.value="You did not enter a number for n !";
document.euclide.divmn.value="";
return;
}
if (parseFloat(document.euclide.getm.value)!=parseInt(document.euclide.getm.value))
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="Pas de nombres à virgule pour m, SVP !";else
document.euclide.erreur.value="No decimal value for m please !";
document.euclide.divmn.value="";
return;
}
if (parseFloat(document.euclide.getn.value)!=parseInt(document.euclide.getn.value))
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="Pas de nombres à virgule pour n, SVP !";else
document.euclide.erreur.value="No decimal value for n please !";
document.euclide.divmn.value="";
return;
}
if (parseInt(document.euclide.getm.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="m doit être strictement positif, SVP!";else
document.euclide.erreur.value="m should not be negative !";
document.euclide.divmn.value="";
return;
}
if (parseInt(document.euclide.getn.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="n doit être strictement positif, SVP!";else
document.euclide.erreur.value="n should not be negative !";
document.euclide.divmn.value="";
return;
}
if (parseInt(document.euclide.getm.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="Votre nombre m est trop grand!";else
document.euclide.erreur.value="Your number m is too big !";
document.euclide.divmn.value="";
return;
}
if (parseInt(document.euclide.getn.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.euclide.erreur.value="Votre nombre n est trop grand!";else
document.euclide.erreur.value="Your number n is too big !";
document.euclide.divmn.value="";
return;
}
document.euclide.erreur.value="";
document.euclide.divmn.value=Euclide(document.euclide.getm.value,document.euclide.getn.value);
}