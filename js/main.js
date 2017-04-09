$(document).ready(function () { 
  //=========== EFECTO PUSHPIN ====================================
  $('.target').pushpin({
          top: 0,
          bottom: 1000,
        offset: 0
    });
  $('.pushpin-demo-nav').each(function() {
      var $this = $(this);
      var $target = $('#' + $(this).attr('data-target'));
      //console.log ($target);
      $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
    });
  //======== deslizar ===============================================
    $("#aboutus ul li:nth-child(1),#team ul li:nth-child(2)").click(function(e){
        e.preventDefault()
       var dest= $("#aboutg").offset().top;
        $('html, body').animate( {scrollTop : dest}, 500);
    });
    $("#aboutg ul li:nth-child(1),#team ul li:nth-child(1)").click(function(e){
        e.preventDefault()
       var dest= $("#aboutus").offset().top;
        $('html, body').animate( {scrollTop : dest}, 500);
    });
    $("#aboutus ul li:nth-child(2),#aboutg ul li:nth-child(2)").click(function(e){
        e.preventDefault()
       var dest= $("#team").offset().top;
        $('html, body').animate( {scrollTop : dest}, 500);
    });
  //============evitar inciar sesion=====================
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
   });
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
  $('.button-collapse2').sideNav();
  $('.button-collapse2').sideNav({
      menuWidth: 260, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.button-collapse1').sideNav();
  $('.button-collapse1').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

  //tagts
   $('.chips').material_chip();
   $('.chips-initial').material_chip({
    data: [{
      tag: 'Comunicado',
    }, {
      tag: 'Aviso',
    }],
  });
  // Show sideNav
  //$('.button-collapse').sideNav('show');
});