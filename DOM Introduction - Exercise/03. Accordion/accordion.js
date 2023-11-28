function toggle() {
    const hiddenText = document.getElementById("extra");
    let buttonText = document.querySelector(".button");

    if (buttonText.textContent === "More") {
        buttonText.textContent = "Less";
        hiddenText.style.display = "block";
    } else {
        buttonText.textContent = "More";
        hiddenText.style.display = "none";
    }
}