document.addEventListener('DOMContentLoaded', function() {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(0,0,0,0.6)',
    lineColor: 'rgba(0,0,0,0.5)'
  });
  var intro = document.getElementById('intro');
  //intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

$(function() {
  var w = $(window).width(),
    h = $(window).height();

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
})