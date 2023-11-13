function printMatrix(number) {

    function printRow(number) {
        let result = "";

        for (let index = 0; index < number; index++) {
            result += `${number} `;
        }

        console.log(result);
    }

    for (let index = 0; index < number; index++) {
        printRow(number);
    }
}