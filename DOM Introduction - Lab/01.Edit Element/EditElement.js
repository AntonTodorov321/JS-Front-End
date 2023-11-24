function editElement(h1, match, replacer) {
    const oldText = h1.textContent;
    let regex = new RegExp(match, "g");

    h1.textContent = oldText.replace(regex, replacer);
}