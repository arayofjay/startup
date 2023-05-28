function newGroup() {
    const groupNameE1 = document.querySelector("#groupName");
    localStorage.setItem("groupName", groupNameE1.value);

    const groupDescE1 = document.querySelector("#groupDesc");
    localStorage.setItem("groupDesc", groupDescE1.value);

    const groupPassE1 = document.querySelector("#groupPass");
    localStorage.setItem("groupPass", groupPassE1.value);

    window.location.href = "index.html";
  }