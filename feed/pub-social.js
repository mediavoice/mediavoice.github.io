function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	if (name !== "_ga" || name !== "_gat" || !name.startsWith("__utm")) {
    		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    	}
    }

    console.log('deleted cookies');
}

function htmlbodyHeightUpdate(){
	var height3 = $( window ).height()
	var height1 = $('.nav').height()+50
	height2 = $('.main').height()
	if(height2 > height3){
		$('html').height(Math.max(height1,height3,height2)+10);
		$('body').height(Math.max(height1,height3,height2)+10);
	}
	else
	{
		$('html').height(Math.max(height1,height3,height2));
		$('body').height(Math.max(height1,height3,height2));
	}

}

function linkRedirect(link_class, pageURL, el) {

	// deleteAllCookies();

	if (link_class === "desktop") {
		$("#sitewindow").removeClass("mobile");
		$("#sitewindow").addClass("desktop");		
	}
	else if (link_class === "mobile") {		
		$("#sitewindow").removeClass("desktop");		
		$("#sitewindow").addClass("mobile");
	}
	else if (link_class === "facebookia") {
		$("#sitewindow").css("width", "420px");
	}
	else if (link_class === "newsletter") {
		$("#sitewindow").css("width", "80%");
	}

	$("#sitewindow").attr('src', pageURL);
	$(".nav li").removeClass("active");
	$(el).parent().addClass("active");

	ga('send', 'pageview', pageURL);
}

$(document).ready(function () {
	htmlbodyHeightUpdate()
	$( window ).resize(function() {
		htmlbodyHeightUpdate()
	});
	$( window ).scroll(function() {
		height2 = $('.main').height()
		htmlbodyHeightUpdate()
	});

	// add tooltips to each element in navbar
	var listAnchors = $("nav.navbar .navbar-collapse .nav a");
	listAnchors.each(function(index) {
		$(this).attr("title", $(this).text());
	});

});

