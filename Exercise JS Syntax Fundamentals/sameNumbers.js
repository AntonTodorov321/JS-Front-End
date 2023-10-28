function calculateSameNumbers(number) {
    let isSame = true;
    let numberAsString = String(number);
    let sum = 0;
    let sameNumber = numberAsString[0];

    for (let i = 0; i < numberAsString.length; i++) {
        let currNumber = numberAsString[i];
        if (sameNumber != currNumber){
            isSame = false;
        }

        sum += Number(currNumber);
    }

    console.log(isSame);
    console.log(sum);
}