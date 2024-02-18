function updateHandsImg() {
    var i = document.getElementById("hands-selection").value;
    var id = 9 + 10 * (i - 1);
    id = id.toString().padStart(5, '0');

    var filename = "resources/fake-hands-generator/" + id + ".png";
    document.getElementById("hands-img").src = filename;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {

    // Sliders
    var sliders = document.getElementsByClassName('splide');
    for (var i = 0; i < sliders.length; i++) {
        new Splide(sliders[i], {
            autoplay: true,
            speed: 600,
            rewind: true
        }).mount();
    }

    // Tabs
    var tabs = document.getElementsByClassName('tabs');
    for (var i=0; i<tabs.length; i++) {
        M.Tabs.init(tabs[i], {});
    }

    // Modals
    M.Modal.init(document.querySelectorAll('.modal'), {});

    // Image selection
    updateHandsImg();
});
