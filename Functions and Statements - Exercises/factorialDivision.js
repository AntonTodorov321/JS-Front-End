function factorialDivision(firstNum, secondNum) {

    function findFacturial(number) {

        if (number < 1) {
            return 1;
        } else {
            return number * findFacturial(--number)
        }
    }

    console.log((findFacturial(firstNum) / findFacturial(secondNum)).toFixed(2));
}

factorialDivision(5, 2);