$(document).ready(function () {	
	//=========== EFECTO PUSHPIN ============================
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
    //Removes pushpin and pushpin classes
 	$('.tabs-wrapper .row').pushpin('remove');

// ======== deslizar =========
 $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

});