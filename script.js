// Initialisation
document.addEventListener('DOMContentLoaded', function() {

  // Sliders
  var sliders = document.getElementsByClassName('splide');
  for (var i=0; i<sliders.length; i++) {
  	new Splide(sliders[i], {
      autoplay: true,
      speed: 600,
      rewind: true
    }).mount();
  }

});
