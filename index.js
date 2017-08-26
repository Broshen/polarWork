var screenTop = (253/1918*100).toFixed(3) + "%";
var screenHeight = (1412/1918*100).toFixed(3) + "%";
var screenLeft = 92/994;
var screenWidth = 815/994;

function fitIframeToPhone(iframe, phone){
	var newLeft =  (phone.position().left + screenLeft*phone.width()).toFixed(3) + "px";
	var newWidth = (screenWidth*phone.width()).toFixed(3) + "px";
	iframe.css({top: screenTop, left: newLeft, height: screenHeight, width: newWidth})
}

function loadDemo(element, filename){
	$(".menu_option").removeClass("active");
	$(element).addClass("active");
	$("#screen").attr("src", filename);
}

$(document).ready(function(){
	iframe = $("#screen");
	phone = $("#phone_template");
	bg = $("#screen_bg");

	fitIframeToPhone(iframe, phone);
	fitIframeToPhone(bg, phone);
	$(".left").height($(".right").height());

	$(window).resize(function(){
		fitIframeToPhone(iframe, phone);
		fitIframeToPhone(bg, phone);
		$(".left").height($(".right").height());
	});
})