function numberModification(number) {

    function averegeValue(number) {
        let result = 0;
        let numbersAsString = number.toString();

        for (const numberAsString of numbersAsString) {
            result += Number(numberAsString);
        }

        return result / numbersAsString.length;
    }

    while (averegeValue(number) < 5) {
        number += "9";
        Number(number);
    }

    console.log(number);
}