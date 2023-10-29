function printWordsUppercase(text) {
    let splitText = text.split(/[\W]+/).filter(n => n);
    let result = "";

    for (let i = 0; i < splitText.length; i++) {

        if (i + 1 == splitText.length) {
            result += `${splitText[i].toUpperCase()}`;
            break;
        }
        result += `${splitText[i].toUpperCase()}, `;
    }

    console.log(result);
}