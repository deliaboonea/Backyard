document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('register_name').value;
        const email = document.getElementById('register_email').value;
        const password = document.getElementById('register_password').value;
        const confirmPassword = document.getElementById('confirm_register_password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password
        };

        // Stocăm temporar datele în localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Registration successful!');
        registerForm.reset();
    });
});
