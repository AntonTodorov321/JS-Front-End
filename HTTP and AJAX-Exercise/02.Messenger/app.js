function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";

    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");
    const authorName = document.querySelector(`input[name="author"]`);
    const message = document.querySelector(`input[name="content"]`);

    const messages = document.getElementById("messages");


    sendBtn.addEventListener("click", () => {
        if (authorName.value && message.value) {
            fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify({
                    author: authorName.value,
                    content: message.value
                })
            })
                .then(res => res.json())
                .then(data => { });

            authorName.value = "";
            message.value = "";
        }
    });

    refreshBtn.addEventListener("click", () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                messages.textContent = "";

                for (const key in data) {
                    const messageObj = data[key];

                    messages.textContent += `${messageObj.author}: ${messageObj.content}\n`;
                }
            });
    });
}

attachEvents();