function check() {
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pwd');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    if (userName.value === storedName && userPw.value === storedPw) {
        alert('Login realizado.');
    } else {
        alert('Erro ao fazer login');
    }
}