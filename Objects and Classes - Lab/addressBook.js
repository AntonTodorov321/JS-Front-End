function adrressBook(inputArr) {
    const result = {};

    for (const row of inputArr) {
        const [name, address] = row.split(":");
        result[name] = address;
    }

    let entries = Object.entries(result);
    let sortedEntries = entries.sort();

    for (const key of sortedEntries) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}