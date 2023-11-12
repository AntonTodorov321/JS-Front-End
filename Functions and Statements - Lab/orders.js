function order(order, price){
    const orderPrice = {
        "coffee" : 1.5,
        "water" : 1,
        "coke" : 1.4,
        "snacks" : 2
    }

    console.log((orderPrice[order] * price).toFixed(2));
}