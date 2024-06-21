document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addUser();
    });
    function addUser() {
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password == confirmPassword) {
            
            const user = {email, username, password };
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            form.reset();
            console.log('Usuário adicionado:', user);
            console.log('Lista de usuários:', users);
            window.location.href = '../views/index.html';
        }else{
            alert('As senhas não coincidem, tente novamente.');
            return;
        }
    }
});
