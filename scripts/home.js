document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('projectList');

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
                    <a href="../views/project.html" class="button style1 fit">Saiba Mais</a>
                </div>
            `;
            
            projectList.appendChild(projectBox);
        });
    }

    loadProjects();
});
