function printCharactersInRange(firstCh, secondCh) {
    let start = Math.min(firstCh.charCodeAt(), secondCh.charCodeAt());
    let end = Math.max(firstCh.charCodeAt(), secondCh.charCodeAt());
    let result = "";

    for (let i = start + 1; i < end; i++) {
        result += `${String.fromCharCode(i)} `;
    }

    console.log(result);
}