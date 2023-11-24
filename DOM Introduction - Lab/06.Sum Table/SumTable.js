function sumTable() {
    const tdArr = document.querySelectorAll("tr td:nth-child(even)");
    let sum = 0;
    const sumTd = document.getElementById("sum");

    for (const td of tdArr) {
        sum += Number(td.textContent);
    }

    sumTd.textContent = sum;
}