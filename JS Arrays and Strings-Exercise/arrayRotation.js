function arrayRotation(array, countRotation){

    for (let index = 0; index < countRotation; index++) {
        let numberToRotate = array.shift();
        array.push(numberToRotate);
    }

    console.log(array.join(" "));
}