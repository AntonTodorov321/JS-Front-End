function piccolo(inputArray) {
    let parkingLot = [];

    for (const carData of inputArray) {
        const [direction, plateNumber] = carData.split(", ");

        if (direction === "IN" && !parkingLot.includes(plateNumber)) {
            parkingLot.push(plateNumber);
        } else if (direction === "OUT" && parkingLot.includes(plateNumber)) {
            let indexOfCar = parkingLot.indexOf(plateNumber);
            parkingLot.splice(indexOfCar, 1);
        }
    }

    parkingLot = parkingLot.sort();

    parkingLot.forEach(carNumber => {
        console.log(carNumber);
    });
}