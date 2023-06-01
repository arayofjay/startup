function newEvent() {
    const eventNameE1 = document.querySelector("#eventName");

    const eventDescE1 = document.querySelector("#eventDesc");

    const groupSelectE1 = document.querySelector('#groupSelect option:checked');

    const startDateE1 = document.querySelector("#startDate");

    const endDateE1 = document.querySelector("#endDate");

    const eventColorE1 = document.querySelector("#eventColor");

    const recurrSelectE1 = document.querySelector('#recurrSelect option:checked');

    const Event = {
      name: eventNameE1.value,
      description:eventDescE1.value,
      group: groupSelectE1.value,
      startdate: startDateE1.value,
      enddate: endDateE1.value,
      color: eventColorE1.value,
      recurrence: recurrSelectE1.value
    }

    localStorage.setItem("Event", JSON.stringify(Event));

    window.location.href = "index.html";
  }