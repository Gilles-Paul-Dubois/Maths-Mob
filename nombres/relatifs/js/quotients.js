  function SetArray (A)
{var B=new Array;
for(var i=0; i<A.length;i++)
B.push(A[i]+"")
var result= "{"+B.join(", ")+"}";
return result
}

function inversibles(n)
{var result=new Array;
for (var i=1;i<n;i++)
{for (var j=1;j<n;j++)
{if ((i*j)%n==1)
{result.push(i);
break;
}
}
}
return result;
}

function ClickOnGo()
{if (isNaN(document.diviseurs.getdiv.value)||document.diviseurs.getdiv.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Vous n'avez pas entré un nombre !";else
document.diviseurs.erreur.value="You did not enter a number !";
document.diviseurs.divn.value="";
return;
}
if (parseFloat(document.diviseurs.getdiv.value)!=parseInt(document.diviseurs.getdiv.value))
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Pas de nombres à virgule, SVP !";else
document.diviseurs.erreur.value="No decimal value please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Entier strictement positif, SVP!";else
document.diviseurs.erreur.value="Strictly positive number please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)>50)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Votre nombre est trop grand!";else
document.diviseurs.erreur.value="Your number is too large !";
document.diviseurs.divn.value="";
return;
}
document.diviseurs.erreur.value="";
document.diviseurs.divn.value=SetArray(inversibles(parseInt(document.diviseurs.getdiv.value)));
}