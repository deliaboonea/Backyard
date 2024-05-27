let backbtn = document.getElementById('backbtn');
let nextbtn = document.getElementById('nextbtn');
let gallery = document.querySelector('.gallery');
let images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Ascundem butonul "Back" inițial, deoarece nu avem unde să ne întoarcem încă
backbtn.style.display = "none";

// Funcție pentru afișarea imaginii curente și gestionarea vizibilității butoanelor
function showCurrentImage() {
    // Ascundem toate imaginile
    images.forEach(image => {
        image.style.display = "none";
    });
    // Afișăm imaginea curentă
    images[currentIndex].style.display = "block";
    // Ascundem butonul "Back" dacă suntem la prima imagine din galerie
    backbtn.style.display = currentIndex === 0 ? "none" : "block";
}

// Afisam imaginea curenta la incarcarea paginii
showCurrentImage();

// Adăugăm un eveniment pentru butonul "Next"
nextbtn.addEventListener('click', () => {
    // Trecem la următoarea imagine
    currentIndex++;
    // Afișăm imaginea curentă
    showCurrentImage();
});

// Adăugăm un eveniment pentru butonul "Back"
backbtn.addEventListener('click', () => {
    // Trecem la imaginea anterioară
    currentIndex--;
    showCurrentImage();
});
