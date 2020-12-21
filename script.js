function startSliders() {
  document.querySelectorAll('.slider').forEach((slider, i) => {
    M.Slider.getInstance(slider).start();
  });
}

function pauseSliders() {
  document.querySelectorAll('.slider').forEach((slider, i) => {
    M.Slider.getInstance(slider).pause();
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  M.Slider.init(document.querySelectorAll('.slider'), {height:560});

  M.Materialbox.init(document.querySelectorAll('.materialboxed'), {
    onOpenStart: pauseSliders,
    onCloseEnd: startSliders
  });
});
