function revealWords(words, text) {
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");

    for (let i = 0; i < wordsArr.length; i++) {
        let currentWordToReplace = wordsArr[i];

        for (let j = 0; j < textArr.length; j++) {
            let currentWord = textArr[j];

            if (currentWord.includes("*") 
            && currentWord.length === currentWordToReplace.length) {
                textArr[j] = currentWordToReplace;
            }
        }
    }

    console.log(textArr.join(" "));
}