function convertToJSON(name, lastName, hairColor) {
    let object = {
        name,
        lastName,
        hairColor
    }

    let JSONString = JSON.stringify(object);
    console.log(JSONString);
}