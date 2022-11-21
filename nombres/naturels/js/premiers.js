   function SetArray (A)
{var B=new Array;
for(var i=0; i<A.length;i++)
B.push(A[i]+"")
var result= "{"+B.join(", ")+"}";
return result
}
function divisors(n)
{var result= new Array;
for( var i=1;i<=n;i++)
if (n%i==0) result.push(i);
return result
}

function estpremier(n)
{ if (divisors(n).length==2)
{if(document.body.className.substring(0,2)=="fr")
  return "n EST premier.";
  else 
  return "n IS prime.";
 } 
  else
  {if(document.body.className.substring(0,2)=="fr")
  return "n'EST PAS premier.";
  else 
  return "n IS NOT prime.";
 } 
}

function ClickOnGo()
{
	if (isNaN(document.diviseurs.getdiv.value)||document.diviseurs.getdiv.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Vous n'avez pas entré un nombre !";else
document.diviseurs.erreur.value="You did not enter a number";
document.diviseurs.divn.value="";
return;
}
if (parseFloat(document.diviseurs.getdiv.value)!=parseInt(document.diviseurs.getdiv.value))
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Pas de nombres à virgule, SVP !";else
document.diviseurs.erreur.value="Only integral values please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Entier strictement positif, SVP!";else
document.diviseurs.erreur.value="No negative values please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)>100000)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Votre nombre est trop grand!";else
document.diviseurs.erreur.value="Your number is too big !";
document.diviseurs.divn.value="";
return;
}
document.diviseurs.erreur.value="";
document.diviseurs.divn.value=estpremier(parseInt(document.diviseurs.getdiv.value));
}
function opensieve()
{window.open("crible.html","Erathostène","top=50,left=100,screenY=50, screenX=100,width=515,height=520,resizable=no");
}