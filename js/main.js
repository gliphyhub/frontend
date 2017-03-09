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
  })

});