function loadingBar(number) {

    if (number === 100) {
        console.log(`100% Complete!`);
        return;
    }

    function printLoadingBar(percent, dot, numberPercent) {
        console.log(`${numberPercent}% [${percent}${dot}]`);
        console.log(`Still loading...`);
    }

    let percentCount = "%".repeat(number / 10);
    let dotCount = ".".repeat((100 - number) / 10);

    printLoadingBar(percentCount, dotCount, number);
}