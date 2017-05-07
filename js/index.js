document.addEventListener('DOMContentLoaded', function() {
	particleground(document.getElementById('particles'), {
		dotColor: 'rgba(0,0,0,0.6)',
		lineColor: 'rgba(0,0,0,0.5)',
		density: 27000,
		proximity: 175,
	});
	var intro = document.getElementById('intro');
	//intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

$(function() {
	var w = $(window).width(), h = $(window).height();
	$('header').width(w);
	$('header').height(h);
	$('canvas').width(w);
	$('canvas').height(h);

	$(window).resize(function() {
		var w = $(window).width(),
		h = $(window).height();
		$('header').width(w);
		$('header').height(h);
		$('canvas').width(w);
		$('canvas').height(h);
	})
	$(window).scroll(function() {
		posicionarMenu();
	});
	function posicionarMenu() {
		var altura_del_header = $('.contenedor-login').outerHeight(true);
		var altura_del_menu = $('nav').outerHeight(true);
		if ($(window).scrollTop() >= altura_del_header){
			$('nav').addClass('arregladito');
			$('.deslizable').css('margin-top', (altura_del_menu) + 'px');
		}
		else {
		$('nav').removeClass('arregladito');
		$('.deslizable').css('margin-top', '0');
		}
	};
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
});