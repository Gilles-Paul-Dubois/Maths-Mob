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

function go(adress){
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

function changelang(lg) {
    var curl=window.location.href;
    curl=curl.split('?')[0];
    newurl=curl+"?lang="+lg;
    window.open(newurl);
};
