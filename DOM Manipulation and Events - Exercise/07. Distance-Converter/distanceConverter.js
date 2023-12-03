function attachEventsListeners() {
    const outputDistance = document.getElementById("outputDistance");

    const convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", convertDistance);

    const possibleDistances = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254

    }

    function convertDistance() {
        const inputDistance = document.getElementById("inputDistance");
        const fromDistance = document.getElementById("inputUnits").value;
        const toDistance = document.getElementById("outputUnits").value;

        outputDistance.value = inputDistance.value * possibleDistances[fromDistance] / possibleDistances[toDistance];
    }
}