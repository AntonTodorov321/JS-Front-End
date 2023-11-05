function buyBitcoin(arr) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totoalSum = 0;
    let firstDayOfBuyBitcoin = 0;
    let isBuy = false;

    for (let index = 0; index < arr.length; index++) {
        let currentGoldGrams = arr[index];

        if ((index + 1) % 3 === 0) {
            totoalSum += (currentGoldGrams * 0.7) * goldPrice;
        } else {
            totoalSum += currentGoldGrams * goldPrice;
        }

        if (bitcoinPrice <= totoalSum && !isBuy) {
            isBuy = true;
            firstDayOfBuyBitcoin = index + 1;
            totoalSum -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${Math.floor(totoalSum / bitcoinPrice) + (firstDayOfBuyBitcoin > 0 ? 1 : 0)}`);

    if (firstDayOfBuyBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfBuyBitcoin}`);
    }
    console.log(`Left money: ${Math.abs(totoalSum % bitcoinPrice).toFixed(2)} lv.`);
}