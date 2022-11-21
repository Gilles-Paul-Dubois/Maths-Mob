   function SetArray (A)
{var B=new Array;
for(var i=0; i<A.length;i++)
B.push(A[i]+"")
var result= "{"+B.join(", ")+"}";
return result
}
function quotereste(m,n)
{ var q=Math.floor(m/n);
var r=m-q*n;
if(r<0)
r=r+Math.abs(n);
q=(m-r)/n;
return "Le quotient de m par n est: "+q+"" +"\n"
+ "Le reste de la division de m par n est: "+r+""
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
if (parseInt(document.pgcd.getm.value)==0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="m ne doit pas doit être nul, SVP!";else
document.pgcd.erreur.value="m should not be zero please !";
document.pgcd.divmn.value="";
return;
}
if (parseInt(document.pgcd.getn.value)==0)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="n ne doit pas doit être nul, SVP!";else
document.pgcd.erreur.value="n should not be zero please !";
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
if (parseInt(document.pgcd.getm.value)<-100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre m est trop petit!";else
document.pgcd.erreur.value="Your number m is too small !";
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
if (parseInt(document.pgcd.getn.value)<-100000)
{if(document.body.className.substring(0,2)=="fr")
document.pgcd.erreur.value="Votre nombre n est trop petit!";else
document.pgcd.erreur.value="Your number n is too small !";
document.pgcd.divmn.value="";
return;
}
document.pgcd.erreur.value="";
document.pgcd.divmn.value=quotereste(parseInt(document.pgcd.getm.value),parseInt(document.pgcd.getn.value) );
}