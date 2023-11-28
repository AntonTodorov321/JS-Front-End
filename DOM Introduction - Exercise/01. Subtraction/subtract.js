function subtract() {
    let firstNum = document.getElementById(`firstNumber`).value;
    let secondNum = document.getElementById(`secondNumber`).value;
    let resultdiv = document.getElementById(`result`);

    resultdiv.textContent = firstNum - secondNum;
}