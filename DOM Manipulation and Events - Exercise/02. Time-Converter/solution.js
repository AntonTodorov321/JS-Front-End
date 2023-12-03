function attachEventsListeners() {
    const daysField = document.getElementById("days");
    const hoursField = document.getElementById("hours");
    const minutesField = document.getElementById("minutes");
    const secondsField = document.getElementById("seconds");

    const daysButton = document.getElementById("daysBtn");
    const hoursButton = document.getElementById("hoursBtn");
    const minutesButton = document.getElementById("minutesBtn");
    const secondsButton = document.getElementById("secondsBtn");

    daysButton.addEventListener("click", convertDays);
    hoursButton.addEventListener("click", convertHours);
    minutesButton.addEventListener("click", convertMinutes);
    secondsButton.addEventListener("click", convertSeconds);

    function convertDays() {
        hoursField.value = daysField.value * 24;
        minutesField.value = hoursField.value * 60;
        secondsField.value = minutesField.value * 60;
    }

    function convertHours() {
        daysField.value = hoursField.value / 24;
        minutesField.value = hoursField.value * 60;
        secondsField.value = minutesField.value * 60;
    }

    function convertMinutes() {
        hoursField.value = minutesField.value / 60;
        daysField.value = hoursField.value / 24;
        secondsField.value = minutesField.value * 60;
    }

    function convertSeconds() {
        minutesField.value = secondsField.value / 60;
        hoursField.value = minutesField.value / 60;
        daysField.value = hoursField.value / 24;
    }
}