function city(object) {

    for (const entries of Object.entries(object)) {
        let [key, value] = entries;

        console.log(`${key} -> ${value}`);
    }
}