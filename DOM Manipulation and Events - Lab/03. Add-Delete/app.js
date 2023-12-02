function addItem() {
    const textToAdd = document.getElementById("newItemText");
    const items = document.getElementById("items");

    if (textToAdd.value) {
        let listItemToAdd = document.createElement("li");
        listItemToAdd.textContent = textToAdd.value;

        const aElement = document.createElement("a");
        aElement.href = "#";
        aElement.textContent = "[Delete]";
        aElement.addEventListener("click", (event) => event.currentTarget.parentNode.remove());
        listItemToAdd.appendChild(aElement);

        items.appendChild(listItemToAdd);
        textToAdd.value = "";
    }
}