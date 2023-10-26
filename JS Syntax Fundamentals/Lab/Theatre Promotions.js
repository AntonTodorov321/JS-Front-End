function calculatePromotion(day, age) {
    let price;

    if (age > 122 || age < 0) {
        console.log("Error!");
        return;
    }

    if (age >= 0 && age <= 18) {
        if (day == "Weekday") {
            price = 12;
        }
        else if (day == "Weekend") {
            price = 15;
        }
        else {
            price = 5;
        }
    }
    else if (age <= 64) {
        if (day == "Weekday") {
            price = 18;
        }
        else if (day == "Weekend") {
            price = 20;
        }
        else {
            price = 12;
        }
    }
    else {
        if (day == "Weekday") {
            price = 12;
        }
        else if (day == "Weekend") {
            price = 15;
        }
        else {
            price = 10;
        }
    }

    console.log(`${price}$`);
}