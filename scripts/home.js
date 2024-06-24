document.addEventListener('DOMContentLoaded', () => {
    
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    const projectList = document.getElementById('projectList');

    if (loggedUser) {
        const spanUsername = document.getElementById('spanUsername');
        spanUsername.textContent = loggedUser.username;

        const profileImage = document.getElementById('profileImage');
        profileImage.src = loggedUser.profileImageBase64;

        if(loggedUser.username == 'admin' || loggedUser.email == 'admin'){
            const testeAdmin = document.getElementById('adminAreaLabel');
            testeAdmin.hidden = false;
        }else{
            const testeAdmin = document.getElementById('adminAreaLabel');
            testeAdmin.hidden = true;
        }
    }

    function loadProjects() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        console.log('Projetos carregados do Local Storage:', projects);

        projects.forEach(project => {
            const projectBox = document.createElement('div');
            projectBox.classList.add('box');

            let imagesHtml = '';
            if (project.images.length > 0) {
                imagesHtml = `<img src="${project.images[0]}" alt="" width="500" height="338" class="imagefit">`;
            } else {
                imagesHtml = `<img src="../assets/images/home/box1.png" alt="" width="500" height="338" class="imagefit">`;
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
    
    document.getElementById('adminAreaLabel').addEventListener('click', function() {
        window.location.href = '../views/admin.html';
    });
    
    loadProjects();
});



