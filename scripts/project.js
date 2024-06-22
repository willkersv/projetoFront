document.addEventListener('DOMContentLoaded', () => {

    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    const projectId = parseInt(getUrlParameter('id'));
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

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

    if (projectId >= 0 && projectId < projects.length) {
        const project = projects[projectId];
        
        // Preencher os elementos HTML com as informações do projeto
        document.getElementById('projectTitle').textContent = project.name;
        document.getElementById('projectSubtitle').textContent = project.subtitle;
        document.getElementById('projectDescription').textContent = project.description;
        
        const mainImageElement = document.getElementById('main-image');
        mainImageElement.src = project.images;
        mainImageElement.alt = "Imagem do projeto";

    } else {
        console.error('ID de projeto inválido ou não encontrado.');
    }
});

// Função auxiliar para obter parâmetros da URL
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
