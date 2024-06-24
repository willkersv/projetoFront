document.addEventListener('DOMContentLoaded', () => {
    console.log('Script carregado');  

    const form = document.querySelector('form');

    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    const spanUsername = document.getElementById('spanUsername');
    spanUsername.textContent = loggedUser.username;
    const profileImage = document.getElementById('profileImage');
    profileImage.src = loggedUser.profileImageBase64;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Formulário submetido');  
        addProject();
    });

    function addProject() {
        const name = document.getElementById('name').value;
        const responsible = document.getElementById('responsible').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const localization = document.getElementById('localization').value;
        const description = document.getElementById('description').value;
        const uploadImg = document.getElementById('uploadImg');

        console.log('Dados do projeto:', { name, responsible, email, phone, localization, description });  

        const projectData = {
            name,
            responsible,
            email,
            phone,
            localization,
            description,
            images: []
        };

        function saveToLocalStorage(data) {
            let projects = JSON.parse(localStorage.getItem('projects')) || [];
            projects.push(data);
            localStorage.setItem('projects', JSON.stringify(projects));
            console.log('Projeto salvo no Local Storage:', projects);  
            alert('Projeto salvo com sucesso!');
            form.reset();
            window.location.href = '../views/home.html'; 
        }

        if (uploadImg.files.length > 0) {
            let filesProcessed = 0;
            Array.from(uploadImg.files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    projectData.images.push(e.target.result);
                    filesProcessed++;
                    if (filesProcessed === uploadImg.files.length) {
                        saveToLocalStorage(projectData);
                    }
                };
                reader.readAsDataURL(file);
            });
        } else {
            saveToLocalStorage(projectData);
        }
    }
});
