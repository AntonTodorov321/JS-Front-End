function deleteByEmail() {
    const tableRows = Array.from(document.querySelectorAll("tbody tr"));
    const resultDiv = document.getElementById("result");
    const searchingEmail = document.getElementsByName("email")[0];
    const searchingEmailValue = searchingEmail.value;

    let isDeleted = false;

    for (const row of tableRows) {
        const emailText = row.querySelector("td:nth-child(2)").textContent;

        if (emailText.includes(searchingEmailValue)) {
            isDeleted = true;
            row.remove();
        }
    }

    if (isDeleted) {
        resultDiv.textContent = "Deleted."
    } else {
        resultDiv.textContent = "Not found."
    }

    searchingEmail.value = "";
}