function convertToObject(objectAsJSON) {

    let object = JSON.parse(objectAsJSON);

    for (const entry of Object.entries(object)) {
        let [key, value] = entry;

        console.log(`${key}: ${value}`);
    }
}