function generateReport() {
    const checkBoxes = Array.from(document.querySelectorAll("thead tr th"));
    const resultArea = document.getElementById("output");
    resultArea.textContent = ""
    let columsToTake = [];
    let employees = [];

    for (let index = 0; index < checkBoxes.length; index++) {
        const checkBox = checkBoxes[index];
        const checkState = checkBox.querySelector(`input[type="checkbox"]`).checked;

        if (checkState) {
            columsToTake.push(index);
        }
    }

    const allRows = document.querySelectorAll("tbody tr");
    const headers = Array.from(document.querySelectorAll("thead tr th"));

    for (let row = 0; row < allRows.length; row++) {
        let employee = {};

        columsToTake.forEach(element => {
            const key = headers[element].textContent.trim().toLowerCase();
            const value = document.querySelectorAll("tbody tr")[row].getElementsByTagName("td")[element].textContent;
            employee[key] = value;
        });

        employees.push(Object.assign(employee));
    }

    resultArea.innerHTML = JSON.stringify(employees);
}