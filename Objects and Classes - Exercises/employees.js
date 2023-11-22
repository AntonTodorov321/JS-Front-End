function employees(inputArray) {
    let result = {};

    for (const name of inputArray) {
        result[name] = name.length;
    }

    for (const key in result) {
        console.log(`Name: ${key} -- Personal Number: ${result[key]}`);
    }
}