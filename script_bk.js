// Obține elementele necesare
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementsByClassName('close')[0];
const loginForm = document.getElementById('loginForm');

// Afișează fereastra modală când se apasă butonul de Log In
loginBtn.onclick = function() {
  loginModal.style.display = 'block';
}

// Ascunde fereastra modală când se apasă pe butonul de închidere (X)
closeModal.onclick = function() {
  loginModal.style.display = 'none';
}

// Ascunde fereastra modală când se apasă în afara ei
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
}

// Procesează formularul de Log In
loginForm.onsubmit = function(event) {
  event.preventDefault(); // Previne acțiunea implicită de submit
  // Aici poți adăuga cod pentru a trimite datele la server sau a le verifica în JavaScript
}
