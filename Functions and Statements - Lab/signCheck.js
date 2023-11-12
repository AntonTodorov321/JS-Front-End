function signCheck(firstNum, secondNum, tirdNum) {
    let negativeNumbersCount = 0;
    let numArr = [];

    numArr.push(firstNum,secondNum,tirdNum);

    for (const num of numArr) {

        if (num < 0) {
            negativeNumbersCount++;
        }
    }

    if(negativeNumbersCount % 2 === 0 )
    {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}