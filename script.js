var scroll;
var scrollpositie = 0;
var menu = $("nav");
var hoogteMenu = menu.outerHeight();

function schuif(){
	scroll = $(this).scrollTop();
	if(scroll > scrollpositie){
		//je scroll naar beneden
		// console.log("we scrollen naar beneden"); hiermee testen of dit werkt
		scrollpositie = scroll;
		menu.css("top", -hoogteMenu + "px");
	}
	else{
		//je scroll naar boven
		// console.log("we scrollen naar boven"); hiermee testen of dit werkt
		scrollpositie = scroll;
		menu.css("top", "0px");
	}
}

$(window).on("scroll", schuif);