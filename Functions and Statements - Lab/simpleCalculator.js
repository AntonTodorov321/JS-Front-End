function calculateNumbers(firstNum, secondNum, operation) {
    const operations = {
        add: (firstNum, secondNum) => firstNum + secondNum,
        multiply: (firstNum, secondNum) => firstNum * secondNum,
        divide: (firstNum, secondNum) => firstNum / secondNum,
        subtract: (firstNum, secondNum) => firstNum - secondNum,
    }

    console.log(operations[operation](firstNum, secondNum));
}