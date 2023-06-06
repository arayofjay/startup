class App {
    // Display name
    constructor() {

        const usernameEl = document.querySelector('#username');
        usernameEl.textContent = this.getUserName();
    }

    getUserName() {
        console.log(localStorage.getItem('userName'));
        return localStorage.getItem('userName') ?? 'Not logged in?';
    }
}

const app = new App();

function loadGroups() {
    console.table(localStorage.getItem('groups'));

    let groups = [];

    const allGroups = localStorage.getItem('groups');

    if (allGroups) {
        groups = JSON.parse(allGroups);
    }

    const groupSelect = document.getElementById('groupSelect');

    if (groups.length) {
        for (const [i, group] of groups.entries()) {
            const groupNameOptE1 = document.createElement('option');

            groupNameOptE1.textContent = group.name;
            
            groupSelect.appendChild(groupNameOptE1);
        }
    }
}

function loadEvents() {
    console.table(localStorage.getItem('events'));
}

loadGroups();
loadEvents();
