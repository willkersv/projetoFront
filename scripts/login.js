document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        login();
    });

    function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => (user.email === email || user.username === email) && user.password === password);

        if (user) {
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            alert('Login bem-sucedido!');
            window.location.href = '../views/home.html';
        } else {
            alert('Email e/ou senha incorretos.');
        }
    }
});