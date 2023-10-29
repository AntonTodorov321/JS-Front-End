function printSpiceCount(startingProfit) {
    const consumeSpice = 26;
    const profitDrop = 10;
    let daysCount = 0;
    let totalSpice = 0;

    while (startingProfit >= 100) {
        totalSpice += startingProfit;
        totalSpice -= consumeSpice;
        startingProfit -= profitDrop;
        daysCount++;
    }

    if (totalSpice >= consumeSpice) {
        totalSpice -= consumeSpice;
    }

    console.log(daysCount);
    console.log(totalSpice);
}

printSpiceCount(99);