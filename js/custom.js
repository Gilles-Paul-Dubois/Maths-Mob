$(document).on("pagecontainertransition", function () {
    var section = location.hash,
        activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
    if (section) {
        var scrollTo = activePage.find(section).offset().top;
        setTimeout(function () {
            $("body").animate({
                scrollTop: scrollTo
            }, 500, function () {
                subPage = null;
            });
        }, 500);
    }
});

const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

function go(adress){
	var pathName = document.location.pathname;
   var pos =(getScrollPosition().y );
   var key ="scrollPosition_" + pathName;
	sessionStorage.setItem("scrollPosition_" + pathName, pos);
  var page=adress.split('#')[0];
  var bookmark=adress.split('#')[1];
  var lg=document.body.className.substring(0,2);
  var params="lang="+lg
  var url= page+"?"+params ;
  if (bookmark !=undefined) url=url+"#"+bookmark;
  location.href = url;
};

function goext(adress){
  var page=adress.split('#')[0];
  var bookmark=adress.split('#')[1];
  var lg=document.body.className.substring(0,2);
  var params="lang="+lg
  var url= page+"?"+params ;
  if (bookmark !=undefined) url=url+"#"+bookmark;
  window.open(url);
};


function get(){

   var params = new URLSearchParams(window.location.search),
      lg = params.get("lang");
      lg=lg.substring(0,2);
      if(lg!="fr"&& lg!="en") {lg="fr"};
      document.body.className=lg;
};

function showscroll()
{	if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) 
    document.getElementById("scroller").style.display="block";
	}


function goback()
{
	var key;
	var pos;
	if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) 
  	{
  	var pathName = document.location.pathname;
   key ="scrollPosition_" + pathName;
	pos=sessionStorage[key];
   }
   window.scrollTo(0,pos);
   document.getElementById("scroller").style.display="none";	
}


function changelang(lg) {
    var curl=window.location.href;
    curl=curl.split('?')[0];
    newurl=curl+"?lang="+lg;
    window.open(newurl);
};
