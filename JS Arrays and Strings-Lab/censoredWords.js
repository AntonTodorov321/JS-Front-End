function censoredWords(text, word) {

    text = text.replace(RegExp(word, 'g'), "*".repeat(word.length));
    console.log(text);
}

censoredWords('A small sentence with some words', 'small');