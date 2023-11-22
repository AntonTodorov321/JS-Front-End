function towns(inputArray) {
    for (const data of inputArray) {
        let [town, latitudeData, longtitudeData] = data.split(" | ");

        let result = {
            town,
            latitude: Number(latitudeData).toFixed(2),
            longitude: Number(longtitudeData).toFixed(2)
        };

        console.log(result);
    }
}