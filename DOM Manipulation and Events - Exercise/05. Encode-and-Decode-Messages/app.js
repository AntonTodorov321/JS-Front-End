function encodeAndDecodeMessages() {
    const encodeButton = document.getElementsByTagName("button")[0];
    const decodeButton = document.getElementsByTagName("button")[1];
    const encodeArea = document.getElementsByTagName("textarea")[0];
    const decodeArea = document.getElementsByTagName("textarea")[1];

    encodeButton.addEventListener("click", encodeMessage);
    decodeButton.addEventListener("click", decodeMessage);

    function encodeMessage() {
        const message = Array.from(encodeArea.value);
        let decodeMessage = "";

        for (const currChar of message) {
            const currDecodeChar = currChar.charCodeAt(0) + 1;
            decodeMessage += String.fromCharCode(currDecodeChar);
        }

        decodeArea.value = decodeMessage;
        encodeArea.value = "";
        decodeButton.disabled = false;
    }

    function decodeMessage() {
        const message = Array.from(decodeArea.value);
        let encodeMessage = "";

        for (const currChar of message) {
            const currEncodeChar = currChar.charCodeAt(0) - 1;
            encodeMessage += String.fromCharCode(currEncodeChar);
        }

        decodeArea.value = encodeMessage;
        decodeButton.disabled = true;
    }
}