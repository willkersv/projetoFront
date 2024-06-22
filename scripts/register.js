document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const profileImageInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');

    profileImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.style.backgroundImage = `url('${e.target.result}')`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addUser();
    });

    function addUser() {
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const userType = document.querySelector('input[name="userType"]:checked').value;
        const profileImage = profileImageInput.files[0];

        if (password != confirmPassword) {
            alert('As senhas não coincidem, tente novamente.');
            return;   
        }
        else if(email == '' || username == '' || password == '' || confirmPassword == ''){
            alert("Preencha todos os campos :)");
            return
        }
        else{
            const reader = new FileReader();
            reader.onload = function(event) {
                const profileImageBase64 = event.target.result;
                const user = {email, username, password, userType, profileImageBase64};
                let users = JSON.parse(localStorage.getItem('users')) || [];
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                form.reset();
                console.log('Usuário adicionado:', user);
                console.log('Lista de usuários:', users);
                alert('Conta criada com sucesso');
                window.location.href = '../views/index.html';
            };
        reader.readAsDataURL(profileImage);
            
 
        }
    }
});
