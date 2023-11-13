function passwordValidator(password) {

    function isValidLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isOnlyLetterAndDigit(password) {
        let regex = /^[A-za-z0-9]+$/gm;
        return regex.test(password);
    }

    function isAtleastTwoDigits(password) {
        let digitCounter = 0;

        for (const digit of password) {
            if (!isNaN(digit)) {
                digitCounter++;
            }
        }

        return digitCounter >= 2;
    }

    let isLengthValid = isValidLength(password);
    let isOnlyLetterAndDigitBool = isOnlyLetterAndDigit(password);
    let isAtleastTwoDigitsBool = isAtleastTwoDigits(password);


    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isOnlyLetterAndDigitBool) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isAtleastTwoDigitsBool) {
        console.log("Password must have at least 2 digits");
    }

    if (isLengthValid && isOnlyLetterAndDigitBool && isAtleastTwoDigitsBool) {
        console.log("Password is valid");
    }
}