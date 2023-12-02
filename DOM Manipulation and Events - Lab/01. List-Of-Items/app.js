function addItem() {
    const textToAdd = document.getElementById("newItemText");
    const items = document.getElementById("items");

    if (textToAdd.value) {
        let listItemToAdd = document.createElement("li");
        listItemToAdd.textContent = textToAdd.value;

        items.appendChild(listItemToAdd);
        textToAdd.value = "";
    }
}