function addItem() {
    const itemText = document.getElementById("newItemText");
    const itemValue = document.getElementById("newItemValue");
    const menu = document.getElementById("menu");

    if (!itemText.value || !itemValue.value) {
        return;
    }

    const option = document.createElement("option");
    option.textContent = itemText.value;
    option.value = itemValue.value;

    menu.appendChild(option);

    itemText.value = "";
    itemValue.value = "";
}