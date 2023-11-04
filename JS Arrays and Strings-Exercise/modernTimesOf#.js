function removeHashTags(text) {
    let regex = /(#)[A-Za-z]+/gm;
    let resultWords = text.match(regex);

    for (const word of resultWords) {
        console.log(word.substring(1, word.length));
    }
}