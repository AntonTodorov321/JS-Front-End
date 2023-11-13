function sumOfOddAndEvenDigits(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();

    for (const digit of numberAsString) {
        if (digit % 2 === 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}