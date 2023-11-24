function extract(content) {
    const text = document.getElementById(content).textContent;
    let regex = /\((.+?)\)/mg;
    let matches = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
    }

    return matches.join("; ");
}