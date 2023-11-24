function extractText() {
    let liElements = document.getElementsByTagName("li");
    let liArray = [];
    let textArea = document.getElementById("result");

    for (const li of liElements) {
        liArray.push(li.textContent);
    }

    textArea.textContent = liArray.join("\r\n")
}