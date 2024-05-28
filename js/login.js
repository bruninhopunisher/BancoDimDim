document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const defaultUsername = 'user123';
    const defaultPassword = 'user123';

    if (username === defaultUsername && password === defaultPassword) {
        window.location.href = 'home_page.html';
    } else {
        errorMessage.style.display = 'block';
    }
});
