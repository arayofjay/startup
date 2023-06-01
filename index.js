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
    console.table(localStorage.getItem("Group"));
}

function loadEvents() {
    console.table(localStorage.getItem("Event"));
}

loadGroups();
loadEvents();
