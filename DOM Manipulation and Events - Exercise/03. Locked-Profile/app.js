function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => {
        button.addEventListener("click", hiddenInfo);
    });

    function hiddenInfo(event) {
        const button = event.target;
        const userInfo = button.parentNode;
        const lockButton = userInfo.querySelector(`input[type="radio"]`).checked;
        const secretUserInfo = userInfo.querySelector(`[id^="user"]`);

        if (!lockButton && button.textContent === "Show more") {
            button.textContent = "Hide it";
            secretUserInfo.style.display = "block";
        } else if (!lockButton) {
            secretUserInfo.style.display = "";
            button.textContent = "Show more"
        }
    }
}