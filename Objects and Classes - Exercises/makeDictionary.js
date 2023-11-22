function makeDictionary(inputJSON) {
    let result = {};

    for (const row of inputJSON) {
        let obj = JSON.parse(row)
        result = Object.assign(result, obj);
    }

    let sortedResult = Object.keys(result);
    sortedResult = sortedResult.sort((a, b) => a.localeCompare(b));

    for (const key of sortedResult) {
        let definition = result[key];
        console.log(`Term: ${key} => Definition: ${definition}`);
    }
}