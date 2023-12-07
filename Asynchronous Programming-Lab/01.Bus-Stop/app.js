function getInfo() {
    const stopId = document.getElementById("stopId");
    const bustStopName = document.getElementById("stopName");
    const busesUl = document.getElementById("buses");

    const stopIdvalue = stopId.value;

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIdvalue}`)
        .then(res => res.json())
        .then(res => {
            bustStopName.textContent = res.name;
            busesUl.textContent = "";

            for (const bus in res.buses) {
                const li = document.createElement("li");
                li.textContent = `Bus ${bus} arrives in ${res.buses[bus]} minutes`;

                busesUl.appendChild(li);
            }
        })
        .catch(err => {
            bustStopName.textContent = "Error";
        });

    stopId.value = "";

}
