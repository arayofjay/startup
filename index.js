class App {
    // Display name
    constructor() {

        const usernameEl = document.querySelector('#username');
        usernameEl.textContent = this.getUserName();
    }

    getUserName() {
        console.log(localStorage.getItem('userName'));
        return localStorage.getItem('userName') ?? "Not logged in?";
    }
}

const app = new App();

function loadGroups() {
    console.table(localStorage.getItem("groups"));

    let groups = [];

    const allGroups = localStorage.getItem("groups");

    if (allGroups) {
        groups = JSON.parse(allGroups);
    }

    if (groups.length) {
        
    }
}

function loadEvents() {
    console.table(localStorage.getItem("events"));
}

loadGroups();
loadEvents();
