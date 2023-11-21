function phoneBook(stringArr) {
    let result = {};

    for (const entry of stringArr) {
        let [name, number] = entry.split(" ");
        result[name] = number;
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}