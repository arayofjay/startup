function newEvent() {
    const eventNameE1 = document.querySelector("#eventName");
    localStorage.setItem("eventName", eventNameE1.value);

    const eventDescE1 = document.querySelector("#eventDesc");
    localStorage.setItem("eventDesc", eventDescE1.value);

    const startDateE1 = document.querySelector("#startDate");
    localStorage.setItem("startDate", startDateE1.value);

    const endDateE1 = document.querySelector("#endDate");
    localStorage.setItem("endDate", endDateE1.value);

    const eventColorE1 = document.querySelector("#eventColor");
    localStorage.setItem("eventColor", eventColorE1.value);

    window.location.href = "index.html";
  }