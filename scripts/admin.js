document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mainForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addSomething();
    });
});

function deleteSomething() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login bem-sucedido!');
        window.location.href = '../views/home.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}