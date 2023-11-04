function sortArray(array) {
    array.sort((a, b) => a - b);
    let smallNumber = 0;
    let bigNumber = 0;
    let result = [];

    while(!(array.length === 0)){
        smallNumber = array.shift();
        bigNumber = array.pop();
        result.push(smallNumber);
        result.push(bigNumber);
    }

    return result;
}