document.addEventListener('DOMContentLoaded', () => {
    const addUserForm = document.getElementById('addUserForm');
    const userList = document.getElementById('userList');
    const clearListForm = document.getElementById('deleteList');
    const returnButton = document.getElementById('return');

    addUserForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addUser();
    });

    clearListForm.addEventListener('submit', (event) => {
        event.preventDefault();
        clearUserList();
    });

    function addUser() {
        const newUserName = document.getElementById('newUserName').value;
        const newUserEmail = document.getElementById('newUserEmail').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username: newUserName, email: newUserEmail });
        localStorage.setItem('users', JSON.stringify(users));
        addUserForm.reset();
        displayUsers();
    }

    function displayUsers() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        userList.innerHTML = '';

        users.forEach((user, index) => {
            const userItem = document.createElement('div');
            userItem.classList.add('user-item');
            userItem.innerHTML = `
                <span>${user.username} (${user.email})</span>
                <button onclick="deleteUser(${index})">Deletar</button>
            `;
            userList.appendChild(userItem);
        });
    }

    window.deleteUser = function(index) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }

    function clearUserList() {
        localStorage.removeItem('users');
        displayUsers();
    }

    displayUsers();

    if (returnButton) {
        returnButton.addEventListener('click', () => {
            window.location.href = 'home.html';  // Redireciona para home.html
        });
    } else {
        console.error('Return button not found!');
    }
});
