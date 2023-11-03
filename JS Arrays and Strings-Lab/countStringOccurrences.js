function countOccurrences(text, wordToSearch) {
    let textArr = text.split(" ");
    let counter = 0;

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] == wordToSearch) {
            counter++;
        }
    }

    console.log(counter);
}

countOccurrences('This is a word and it also is a sentence','is');