   function SetArray (A)
{var B=new Array;
for(var i=0; i<A.length;i++)
B.push(A[i]+"")
var result= "{"+B.join(", ")+"}";
return result
}

function quotereste(m,n)
{if(document.body.className.substring(0,2)=="fr")
return "Le quotient de m par n est : "+Math.floor(m/n)+"" +"\n"
+ "Le reste de la division de m par n est : "+(m%n)+"";
else 
return "The quotient of m by n is : "+Math.floor(m/n)+"" +"\n"
+ "The remainder of the  division of m by n is : "+(m%n)+"";
	
}

function ClickOnGoPGCD()
{if (isNaN(document.pgcd.getm.value)||document.pgcd.getm.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour m !";else
document.pgcd.erreur.value="Enter a natural integer for m";
document.pgcd.divmn.value="";
return;
}
if (isNaN(document.pgcd.getn.value)||document.pgcd.getn.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Vous n'avez pas entré un nombre pour n !";else
document.pgcd.erreur.value="You did not enter a natural for n !";
document.pgcd.divmn.value="";
return;
}
if (parseFloat(document.pgcd.getm.value)!=parseInt(document.pgcd.getm.value))
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Pas de nombres à virgule pour m, SVP !";else
document.pgcd.erreur.value="No decimal value for m, please !";
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
document.pgcd.erreur.value="Value of m too big !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre n est trop grand!";else
document.pgcd.erreur.value="Value of n too big !";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=quotereste(parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value) );
}
