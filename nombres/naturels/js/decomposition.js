   function decomp(n)
{result="n=1";
 var i=2;
 while (n>1)
 { while (n%i==0)
    {result=result+"x"+(i+"");
    n=n/i;
    }
  i=i+1;  
 }
 return result;
}

function ClickOnGo()
{if (isNaN(document.diviseurs.getdiv.value)||document.diviseurs.getdiv.value=="")
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Vous n'avez pas rentré un entier !";else
document.diviseurs.erreur.value="You did not enter a natural !";
document.diviseurs.divn.value="";
return;
}
if (parseFloat(document.diviseurs.getdiv.value)!=parseInt(document.diviseurs.getdiv.value))
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Pas de nombres à virgule, SVP !";else
document.diviseurs.erreur.value="Obly integral values, please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)<=0)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Entier strictement positif, SVP!";else
document.diviseurs.erreur.value="Only positive values please !";
document.diviseurs.divn.value="";
return;
}
if (parseInt(document.diviseurs.getdiv.value)> 100000)
{if(document.body.className.substring(0,2)=="fr")
document.diviseurs.erreur.value="Votre nombre est trop grand!";else
document.diviseurs.erreur.value="Your number is too big !";
document.diviseurs.divn.value="";
return;
}
document.diviseurs.erreur.value="";
document.diviseurs.divn.value=decomp(parseInt(document.diviseurs.getdiv.value));
}