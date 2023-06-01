function newGroup() {
    const groupNameE1 = document.querySelector("#groupName");

    const groupDescE1 = document.querySelector("#groupDesc");

    const groupPassE1 = document.querySelector("#groupPass");

    const Group = {
      name: groupNameE1.value,
      description: groupDescE1.value,
      password: groupPassE1.value
    }
    localStorage.setItem("Group", JSON.stringify(Group));

    window.location.href = "index.html";
  }