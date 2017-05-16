document.addEventListener('DOMContentLoaded', function() {
	particleground(document.getElementById('particles'), {
		dotColor: 'rgba(240,240,240,0.4)',
		lineColor: 'rgba(240,240,240,0.4)',
		density: 27000,
		proximity: 175,
	});
	var intro = document.getElementById('intro');
	//intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

$(function() {
	var w = $(window).width(), h = $(window).outerHeight(true);
	$('header').width(w);
	$('header').height(h);
	$('canvas').width(w);
	$('canvas').height(h);

	$(window).resize(function() {
		var w = $(window).width(), h = $(window).outerHeight(true);
		$('header').width(w);
		$('header').height(h);
		$('canvas').width(w);
		$('canvas').height(h);
		indexParticles ();
	})

	$(window).scroll(function() {
		indexParticles ();
		//parallaxScroll();
	});

	function indexParticles () {
		var alt = $(".index-first").height() - $("#particles").height();
		var alt2 = $(".index-first").height() - $(".nav-index").height();
		if ($(window).scrollTop() > alt) {
			$("#particles").removeClass("fixed");
		}
		else {
			$("#particles").addClass("fixed");
		}
		if ($(window).scrollTop() >= alt2) {
			$("#particles").addClass("mask");
		}
		else {
			$("#particles").removeClass("mask");
		}
	};

	$('#login-activator').sideNav({
		menuWidth: 240, // Default is 300
		edge: 'right', // Choose the horizontal origin
		closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});

	$('.material-card > .mc-btn-action').click(function () {
		var card = $(this).parent('.material-card');
		var icon = $(this).children('i');
		icon.addClass('fa-spin-fast');

		if (card.hasClass('mc-active')) {
			card.removeClass('mc-active');
			window.setTimeout(function() { icon.removeClass('fa-spin-fast') }, 800);
			icon.text("menu");
		}
		else {
			card.addClass('mc-active');	
			window.setTimeout(function() { icon.removeClass('fa-spin-fast') }, 800);
			icon.text("chevron_left");
		}
	});

	//======= Forget =========

	$("#forget").on("click", function() {
		$(".profile-card").removeClass("profileAnimated");
		$(".profile-card").removeClass("anchuraExtraOff");
		$(".profile-card").removeClass("anchuraCambiado");
		$(".profile-card").addClass("profileFinal");
		$('.profile-card').addClass("anchuraExtra");
		$(".profile-card .animate").addClass("animated");
		$(".profile-card .animate").removeClass("animate");
		$("#inicialForm, .logotipo-login").fadeOut();
		$("#forgotten").delay(400).fadeIn(2000);
		
	});

	$("#backLogin").on("click", function() {
		$('.profile-card').removeClass("anchuraExtra");
		$(".profile-card").addClass("anchuraExtraOff");
		$("#forgotten").fadeOut();
		$("#inicialForm, .logotipo-login").delay(400).fadeIn(2000);
	});

	$(".forget a").on ("click", function() {
		$(".ingresar").fadeOut();
		$(".olvide").delay(500).fadeIn();
	});

	$("#rbutton").on("click", function() {
		$('#mensaje-01').modal('open');
		$("#button").html("<span>Reenviar correo</span>")
	});

	$("#back-to-ingresar").on("click", function() {
		$(".olvide").fadeOut();
		$(".ingresar").delay(500).fadeIn();
	});
	$('.scrollspy').scrollSpy(
		{scrollOffset: 40}
	);

	$("#menu-login a").on("click", function() {
		$('#menu-login').sideNav('hide');
	});

       // function parallaxScroll()
        //{
	//var sss = $( "nav" ).offset();
	//sss.top = 0;
	//alert (sss.top)
        //}
});