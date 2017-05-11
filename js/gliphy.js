$(function() {
	  /*============evitar inciar sesion=====================
	  $("form button").click(function (e) {
	    e.preventDefault();
	  });
	  //====================================================
	  $(".dropdown-button").dropdown({
	    constrainWidth: false, //no abarque el ancho que quiera
	    alignment: 'right',
	  });
	  //===========btn editar==================================
	  $(".abrir-btn").click(function () {
	    $(".collapsible-header").addClass("active");
	    $("#lista-expandible").addClass("active");
	    $(".collapsible-body").slideDown();
	    $("#flecha_up_down").text("keyboard_arrow_up");
	  });
	   $(".collapsible-header").click(function () {
	    $("#flecha_up_down").text("keyboard_arrow_down");
	});*/
	// =============== CONTAR CARACTERES ====================
	$('input#input_text, textarea#textarea1').characterCounter();
	 // =============== ComboBox =========================
	$('select').material_select();
	//=============== Fecha =================
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});
	//=============== Arroja Mensaje ===================
	$('.tooltipped').tooltip({delay: 50});
	//=============== Abrir modal ===============
	$('.modal').modal();
	//=============== PRUEBA =================
	$('.options-user').sideNav({
		menuWidth: 260, // Default is 300
		edge: 'right', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});
	$('#menu').sideNav({
		menuWidth: 240, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});

	$('#nTeacher').sideNav({
		menuWidth: 240, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});
	//tagts
	$('.chips').material_chip();
	$('.chips-initial').material_chip({
		data: [{ tag: 'Comunicado', } , { tag: 'Aviso', }],
	});
	// Show sideNav
	//$('.button-collapse').sideNav('show');

	// ====== Carousel =========
  	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.carousel').carousel();
	$('#siguiente').click(function(){
		$('.carousel').carousel('next');
	});
	$('#atras').click(function(){
		$('.carousel').carousel('prev');
	});

	//======== Ocultar o mostrar menu ========
	 var menunavegaciónLargeVisible = true;
	$('#toggleMenu').on("click", function() {
		if (menunavegaciónLargeVisible){
			$('#navegacion-no-oculto').animate({width: '0px'},"fast");
			$('header, main, .botones-flotantes').animate({paddingLeft: '0px'},"fast");
			$('#location').animate({paddingLeft: '3px'});
			$('#toggleMenu i').text("view_quilt");
		}
		else{
			$('#navegacion-no-oculto').animate({width: '240px'},"fast");
			$('header, main, .botones-flotantes').animate({paddingLeft: '240px'},"fast");
			$('#location').animate({paddingLeft: '0px'});
			$('#toggleMenu i').text("view_stream");
		}   
		menunavegaciónLargeVisible = !menunavegaciónLargeVisible
		$('#menu').toggleClass("hide-on-large-only");   
		$('header, main, .botones-flotantes').toggleClass("navegacion-espacio");
	    	//$('#navegacion-no-oculto').toggleClass("ocultado");
	});

	 var menunavegaciónHelp = true;
	$('.helpToggleMenu').on("click", function() {
		if (menunavegaciónHelp){
			$('.helpToggleMenu i').text("view_quilt");
		}
		else{
			$('.helpToggleMenu i').text("view_stream");
		}   
		menunavegaciónHelp = !menunavegaciónHelp
	});

	//======== Cambiar vistas ========

	//Mostrar Comunicado Large => Default

	$('.comunicado-contenedor').click(function (e){
		mostrarComunicadoLarge(e);
	});
	
	function mostrarComunicadoLarge(e) {
		e.preventDefault();
		//$('#contenido-large').slideUp(1);
		//$('#contenido-large').slideDown(1000);
		$('#contenido-large .card-content').animate({opacity: '0.1'}, 1);
		$('#contenido-large').animate({bottom:'100%'}, 100);
		$('#contenido-large').animate({bottom:'15px'}, 400);
		$('#contenido-large .card-content').animate({opacity: '1'}, 1500);
	};

	// Cabiar tags dependiendo del tamaño del dispositivo o resizing
	var tagHrefRexponsive = "#contenido-responsivo"
	var tagHrefLarge ="#!"

	function cambiarHrefTag () {
		// Comprueba el tamaño del dispositivo
		if ($( window ).width() <=  992 ) {
			$('.comunicado-contenedor').off("click");
			$('.comunicado-contenedor').attr("href", tagHrefRexponsive);
		}
		// comprueba si el botón Vista Simple ha sido activado previamente
		else if (vistaTres) {
			$('.comunicado-contenedor').on("click", function(e) {
				mostrarComunicadoLarge(e);
			});
			$('.comunicado-contenedor').attr("href", tagHrefLarge);
		}
	};

	$(window).resize(function() {
		cambiarHrefTag();
	});

	//Botones de cambio de vista 
	var vistaTres = true;

	$('#vista-simple').click(function () {
		//$('#contenido-comunicado-large).animate({opacity: '0.0'}, "slow");
		//$('#contenido-comunicado-large, .v-large').addClass('ocultado'); //quitar el v-large
		$('#contenido-comunicado-large').fadeOut(1);
		//$('#contenido-large').animate({bottom:'100%'}, 400);
		$('.v-touch').removeClass("hide-on-large-only");
		$('#vista-simple').addClass('red white-bonis');
		$('#vista-tres-columnas').removeClass('red white-bonis');
		///$('#parte-izquierda').animate({width: '58.3333333333%'},"slow");    
		$('#parte-izquierda').removeClass('l7');
		//$('#diversos, #cards-comunicados').addClass('l6');
		//$('#calendario-contenedor, #flitros-contenedor').addClass('l12');
		 //usar ajazx
		/*if ($('#cards-comunicados .row a').hasClass("urgente-card")){
		}else{
		$("#cards-comunicados .row a").removeClass("m6");
		$("#cards-comunicados .row a").addClass("m12");
		}*/
		$('.comunicado-contenedor').off("click");
		$('.comunicado-contenedor').attr("href", tagHrefRexponsive);
		vistaTres = false;
  	});

	$('#vista-tres-columnas').click(function () {
		//$('#contenido-comunicado-large, .v-large').removeClass('ocultado');//quitar el v-large
		//$('#contenido-large').removeClass("fixed");
		$('.v-touch').addClass("hide-on-large-only");
		$('#vista-tres-columnas').addClass('red white-bonis');
		$('#vista-simple').removeClass('red white-bonis');
		$('#parte-izquierda').addClass('l7');
		//$('#contenido-large').addClass("fixed");
		//$('#diversos, #cards-comunicados').removeClass('l6');
		//$('#calendario-contenedor, #flitros-contenedor').removeClass('l12');
		//usar ajazx
		/*if ($('#cards-comunicados .row a').hasClass("urgente-card")){
		}else{
		 $("#cards-comunicados .row a").removeClass("m6");
		$("#cards-comunicados .row a").addClass("m12");
		 }*/
		$('#contenido-comunicado-large').fadeIn(1);
		$('#contenido-large').animate({opacity: '0.0',}, 0);
		$('#contenido-large').animate({opacity: '0.0',}, 900);
		$('#contenido-large').animate({opacity: '1',}, 900);

		$('.comunicado-contenedor').on("click", function(e) {
			mostrarComunicadoLarge(e);
		});
		$('.comunicado-contenedor').attr("href", tagHrefLarge);
		vistaTres = true;
	});

	$('.scrollspy').scrollSpy(
		{scrollOffset: 20}
	);
	$(".flechita").dropdown();

	var destacado = false
	$(".destacar-btn").on("click", function() {
		if (destacado) {
			$(".destacar-btn i").text("notifications_none");
		}
		else {
			$(".destacar-btn i").text("notifications_active");
		}
		destacado = !destacado

	});	
	

	//======= Forget =========


	$("#forget").on("click", function() {
		$(".profile-card").removeClass("profileAnimated");
		$(".profile-card").removeClass("anchuraExtraOff");
		$(".profile-card").addClass("profileFinal");
		$('.profile-card').addClass("anchuraExtra");
		$(".profile-card .animate").addClass("animated");
		$(".profile-card .animate").removeClass("animate");
		$("#inicialForm, .logotipo-login").fadeOut();
		$("#forgotten").delay(400).fadeIn(2000);
		
	});

	$("#backLogin").on("click", function() {
		$('.profile-card').removeClass("anchuraExtra");
		$(".profile-card").addClass("anchoCambiado");
		$(".profile-card").addClass("anchuraExtraOff");
		$("#forgotten").fadeOut();
		$("#inicialForm, .logotipo-login").delay(400).fadeIn(2000);
	});

	//========= Editar Profile ==========
	var editable = false
	$("#editarDatosProfile").on("click", function() {
		if (editable) {
			$("#passOne").prop("disabled", true);
			$("#passOne").attr("placeholder", "********");
			$("#passOne").val("");
			$("#passTwo").parent().addClass("ocultado");
			$("#passTwo").prop("disabled", true);
			$("#passTwo").attr("placeholder", "********");
			$("#passTwo").val("");
			$("#correoUser").addClass("grey-text");
			$("#correoUser").prop("disabled", true);
			$("#editarDatosProfile").text("editar");
			$("#cancelarDatosProfile").addClass("ocultado");
			$("#validarPass").addClass("ocultado");
			$("#validarPass input").prop("disabled", true);
			$("#validarPass").val("");
			$(".editar").addClass("ocultado");
			editable = !editable;
		}
		else {
			$("#passOne").prop("disabled", false);
			$("#passOne").attr("placeholder", "Ingresa la nueva contraseña");
			$("#passTwo").parent().removeClass("ocultado");
			$("#passTwo").prop("disabled", false);
			$("#passTwo").attr("placeholder", "Repite la contraseña");
			$("#correoUser").removeClass("grey-text");
			$("#correoUser").prop("disabled", false);
			$("#editarDatosProfile").text("guardar");
			$("#cancelarDatosProfile").removeClass("ocultado");
			$("#validarPass").removeClass("ocultado");
			$("#validarPass input").prop("disabled", false);
			$(".editar").removeClass("ocultado");
			editable = !editable;
		}
	});

	$("#cancelarDatosProfile").on("click", function() {
		$("#passOne").prop("disabled", true);
		$("#passOne").attr("placeholder", "********");
		$("#passOne").val("");
		$("#passTwo").parent().addClass("ocultado");
		$("#passTwo").prop("disabled", true);
		$("#passTwo").attr("placeholder", "********");
		$("#passTwo").val("");
		$("#correoUser").addClass("grey-text");
		$("#correoUser").prop("disabled", true);
		$("#editarDatosProfile").text("editar");
		$("#cancelarDatosProfile").addClass("ocultado");
		$("#validarPass").addClass("ocultado");
		$("#validarPass input").prop("disabled", true);
		$("#validarPass input").val("");
		$(".editar").addClass("ocultado");
		editable = !editable;
	});
});

