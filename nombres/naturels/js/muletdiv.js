
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
function ClickOnGo()
{
if (isNaN(document.diviseurs.getdiv.value)||document.diviseurs.getdiv.value=="")
  {
 if (document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Vous n'avez pas entré un nombre !";
else document.diviseurs.erreur.value="You didn't enter a number  !";
document.diviseurs.divn.value="";
return;
}
if (parseFloat(document.diviseurs.getdiv.value)!=parseInt(document.diviseurs.getdiv.value))
{ if (document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Pas de nombres à virgule, SVP !";
else document.diviseurs.erreur.value="No decimal numbers, please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)<=0)
{ if (document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Entier strictement positif, SVP !";
else document.diviseurs.erreur.value="Only strictly positive numbers, please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)>100000)
{if (document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Votre nombre est trop grand !";
else document.diviseurs.erreur.value="Your number is too big !";
document.diviseurs.divn.value="";
return;
}
document.diviseurs.erreur.value="";
document.diviseurs.divn.value=SetArray(divisors(parseInt(document.diviseurs.getdiv.value)));
}
