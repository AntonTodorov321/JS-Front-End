function div() {
    const divs = Array.from(document.getElementsByTagName("div"));

    divs.forEach(div => {
        div.addEventListener("click", (event) => {
            event.stopPropagation();
            console.log(event.target);
        });
    });
}