document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Impede o envio padrão do formulário
        login();
    });

    function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Recuperar os usuários existentes do LocalStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar se o email e a senha correspondem a um usuário cadastrado
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login bem-sucedido!');
            window.location.href = '../views/home.html';
        } else {
            alert('Email ou senha incorretos.');
        }
    }
});