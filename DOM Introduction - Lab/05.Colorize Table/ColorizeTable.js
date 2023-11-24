function colorize() {
    const liArr = document.querySelectorAll("table tr:nth-child(even)");

    for (const li of liArr) {
        li.style.backgroundColor = "Teal";
    }
}