function storeProducts(arrayOne, arrayTwo) {
    let store = {};

    function addToStore(array, store) {
        for (let index = 0; index < array.length; index += 2) {
            const name = array[index];
            const quantity = Number(array[index + 1]);

            if (store[name]) {
                store[name] += quantity;
            } else {
                store[name] = quantity;
            }
        }
    }

    addToStore(arrayOne, store);
    addToStore(arrayTwo, store);

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

}