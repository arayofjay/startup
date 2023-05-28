function login() {
    const nameE1 = document.querySelector("#username");
    localStorage.setItem("userName", nameE1.value);

    const passE1 = document.querySelector("#password");
    localStorage.setItem("password", passE1.value);

    const numE1 = document.querySelector("#telnum");
    localStorage.setItem("telnum", numE1.value);

    window.location.href = "index.html";
  }