function wordsTracker(inputArray) {
    let searchingWords = inputArray.shift().split(" ");
    let wordsOccurrences = {};

    for (const searchingWord of searchingWords) {
        for (const word of inputArray) {

            if (searchingWord === word) {

                if (wordsOccurrences[word]) {
                    wordsOccurrences[searchingWord]++;
                } else {
                    wordsOccurrences[searchingWord] = 1;
                }
            }
        }
    }

    let sortedWords = Object.entries(wordsOccurrences);
    sortedWords = sortedWords.sort((a, b) => { return b[1] - a[1] });

    for (const [key, value] of sortedWords) {
        console.log(`${key} - ${value}`);
    }
}