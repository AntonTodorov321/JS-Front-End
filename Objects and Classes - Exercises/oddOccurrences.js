function oddOccurrences(inputString) {
    let map = new Map();
    let inputArr = inputString.toLowerCase().split(" ");

    for (const word of inputArr) {
        if (map.has(word)) {
            let oldValue = map.get(word);
            map.set(word, ++oldValue);
        } else {
            map.set(word, 1);
        }
    }

    let result = [];

    map.forEach((value, key) => {
        if (value % 2 !== 0) {
            result.push(key);
        }
    });

    console.log(result.join(" "));
}