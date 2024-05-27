// Definirea funcției pentru slideshow
function startSlideshow() {
    var images = document.querySelectorAll('.header-content .image-container img');
    var interval = 1500; // Intervalul în milisecunde între schimbarea imaginilor

    var currentIndex = 0;
    var maxIndex = images.length;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % maxIndex;
        images[currentIndex].style.opacity = 1;
    }

    // Afișează următoarea imagine la fiecare interval
    setInterval(showNextImage, interval);
}

// Apelarea funcției pentru slideshow după încărcarea paginii
window.onload = startSlideshow;
