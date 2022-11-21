   function basen (m,n)
{if (m<n)
 return m+"";
 else
 return basen(Math.floor(m/n),n)+(m%n+"");
}

function ClickOnGoPGCD()
{if (isNaN(document.pgcd.getm.value)||document.pgcd.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour m !";else
document.pgcd.erreur.value="You did not enter a valid number for m";
document.pgcd.divmn.value="";
return;
}
if (isNaN(document.pgcd.getn.value)||document.pgcd.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour n !";else
document.pgcd.erreur.value="You did not enter a valid number for n !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getm.value)!=parseInt(document.pgcd.getm.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour m, SVP !";else
document.pgcd.erreur.value="Only integral values for m please !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getn.value)!=parseInt(document.pgcd.getn.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour n, SVP !";else
document.pgcd.erreur.value="Only integral values for n please !";
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
if (parseInt(document.pgcd.getn.value)<=1)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="n doit être au moins égal à 2, SVP!";else
document.pgcd.erreur.value="n should be at least 2 !";
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
if (parseInt(document.pgcd.getn.value)>10)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre base n est trop grande!";else
document.pgcd.erreur.value="Your base is too big !";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=basen(parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value) );
}