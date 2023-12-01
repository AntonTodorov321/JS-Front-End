function solve() {
    const button = document.getElementsByTagName(`button`)[0];
    button.addEventListener(`click`, convertNumber);
    fillMenu();

    function fillMenu() {
        const menu = document.getElementById(`selectMenuTo`);

        const optionBinary = document.createElement("option");
        optionBinary.value = 'binary';
        optionBinary.textContent = "Binary"

        const optionHexadecimal = menu.querySelector(`option`);
        optionHexadecimal.value = 'hexadecimal';
        optionHexadecimal.textContent = `Hexadecimal`;

        menu.appendChild(optionBinary);
        menu.appendChild(optionHexadecimal)
    }

    function convertNumber(e) {
        const input = document.getElementById(`input`);
        let numberInput = Number(input.value);
        const convertValue = document.getElementById(`selectMenuTo`).value;

        printResult();

        function printResult() {
            let result = document.getElementById(`result`);

            if (convertValue === `hexadecimal`) {
                result.value = numberInput.toString(16).toUpperCase();
            } else {
                result.value = numberInput.toString(2);
            }

            input.value = ``;
        }
    }
}