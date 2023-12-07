function solve() {

    function depart() {

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`)
            .then(res => res.json())
            .then(data => {
                stopId = data.next;
                stopName = data.name;
                info.textContent = `Next stop ${stopName}`;

                arriveButton.disabled = false;
                departButton.disabled = true;
            })
            .catch(err => {
                info.textContent = "Error";

                arriveButton.disabled = true;
                departButton.disabled = true;
            });
    }

    async function arrive() {
        info.textContent = `Arriving at ${stopName}`;

        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();