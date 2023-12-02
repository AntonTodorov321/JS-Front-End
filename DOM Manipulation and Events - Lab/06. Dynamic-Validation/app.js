function validate() {
    const emailField = document.getElementById("email");
    emailField.addEventListener('change', onChange);

    function onChange() {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
        const emailValue = emailField.value;

        if (emailValue.match(regex)) {
            emailField.classList.remove("error");
        } else {
            emailField.classList.add("error");
        }
    }
}