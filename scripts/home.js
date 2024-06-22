document.addEventListener('DOMContentLoaded', () => {
    
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    const projectList = document.getElementById('projectList');

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

    function loadProjects() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        console.log('Projetos carregados do Local Storage:', projects);

        projects.forEach(project => {
            const projectBox = document.createElement('div');
            projectBox.classList.add('box');

            let imagesHtml = '';
            if (project.images.length > 0) {
                imagesHtml = `<a href="../views/project.html" class="imagefit"><img src="${project.images[0]}" alt="" width="500" height="338"></a>`;
            } else {
                imagesHtml = `<a href="../views/project.html" class="imagefit"><img src="../assets/images/home/box1.png" alt="" width="500" height="338"></a>`;
            }

            projectBox.innerHTML = `
                ${imagesHtml}
                <div class="inner">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="../views/project.html?id=${projects.indexOf(project)}" class="button style1 fit">Saiba Mais</a>
                </div>
            `;

            projectList.appendChild(projectBox);
        });
    }

    loadProjects();
});