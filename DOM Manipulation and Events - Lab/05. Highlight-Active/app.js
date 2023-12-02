function focused() {
    const inputFields = Array.from(document.querySelectorAll(`input[type="text"]`));

    inputFields.forEach(field => {
        field.addEventListener("focus", () => field.parentNode.classList.add("focused"));
        field.addEventListener("blur", () => field.parentNode.classList.remove("focused"));
    });
}