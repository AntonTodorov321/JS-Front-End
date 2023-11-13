function isPalindrom(numArr) {

    for (const num of numArr) {
        let result = num.toString().split("").reverse().join("");

        if (result === num.toString()) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}