document.addEventListener('DOMContentLoaded', () => {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

    if (loggedUser) {
        const spanUsername = document.getElementById('spanUsername');
        spanUsername.textContent = loggedUser.username;

        const profileImage = document.getElementById('profileImage');
        profileImage.src = loggedUser.profileImageBase64;
    }
    
    //vou fazer um sistema para quando o session storage estiver vazio, o cara n consiga entra simplesmente digitando a URL. N fiz isso ainda pq atrapalha os testes!!!!
    // else {
    //     // Redirecionar para a página de login se não houver usuário logado
    //     window.location.href = 'login.html';  // Substitua 'login.html' pelo URL da página de login
    // }
});