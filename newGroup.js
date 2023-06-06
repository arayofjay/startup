function newGroup() {
    const groupNameE1 = document.querySelector("#groupName");

    const groupDescE1 = document.querySelector("#groupDesc");

    const groupPassE1 = document.querySelector("#groupPass");

    const Group = {
      name: groupNameE1.value,
      description: groupDescE1.value,
      password: groupPassE1.value
    }
    
    let groups = [];
    const allgroups = localStorage.getItem("groups");

    if (allgroups) {
      groups = JSON.parse(allgroups);
    }

    groups = updategroups(Group, groups);

    localStorage.setItem("groups", JSON.stringify(groups));

    window.location.href = "index.html";
  }

  function updategroups(group, groups) {

    groups.push(group);

    return groups;
  }