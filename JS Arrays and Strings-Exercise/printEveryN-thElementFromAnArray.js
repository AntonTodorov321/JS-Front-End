function printElement(array, step){
    let arrayLength = array.length;
    let result = [];

    for (let index = 0; index < arrayLength; index+= step) {
        result.push(array[index]);
    }

    return result;
}