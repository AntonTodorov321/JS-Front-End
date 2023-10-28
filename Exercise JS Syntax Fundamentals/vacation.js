function calculatePrice(numberOfPeople, groupType, dayOfWeek) {
    let pricePerPerson = 0;

    if (dayOfWeek == "Friday") {
        if (groupType == "Students") {
            pricePerPerson = 8.45;
        } else if (groupType == "Business") {
            pricePerPerson = 10.90;
        } else {
            pricePerPerson = 15;
        }
    } else if (dayOfWeek == "Saturday") {
        if (groupType == "Students") {
            pricePerPerson = 9.8;
        } else if (groupType == "Business") {
            pricePerPerson = 15.6;
        } else {
            pricePerPerson = 20;
        }
    }
    else {
        if (groupType == "Students") {
            pricePerPerson = 10.46;
        } else if (groupType == "Business") {
            pricePerPerson = 16;
        } else {
            pricePerPerson = 22.50;
        }
    }

    let totalPrice = numberOfPeople * pricePerPerson;

    if (groupType == "Business" && numberOfPeople >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType == "Students" && numberOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (groupType == "Regular" && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}