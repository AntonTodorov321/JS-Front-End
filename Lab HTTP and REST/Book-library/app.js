function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/books";

  const loadAllButton = document.getElementById("loadBooks");
  const submitButton = document.querySelector("#form button");

  const tbody = document.querySelector("table tbody");
  let rowUpdate;

  const bookTitle = document.getElementsByName("title")[0];
  const bookAuthor = document.getElementsByName("author")[0];
  const formName = document.querySelector("#form h3");
  const bookIdField = document.getElementsByName("bookId")[0];

  loadAllButton.addEventListener("click", loadAllBooks);
  submitButton.addEventListener("click", createBook);

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", saveChanges);

  function saveChanges() {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const bookId = bookIdField.value;

    if (!bookId) return;

    fetch(`${baseUrl}/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({
        author,
        title
      })
    })
      .then(res => res.json())
      .then(data => {
        const newAuthor = data.author;
        const newTitle = data.title;

        rowUpdate.querySelector("td:nth-child(1)").textContent = newTitle;
        rowUpdate.querySelector("td:nth-child(2)").textContent = newAuthor;

        removeCancelButton();
        saveButton.replaceWith(submitButton);
        formName.textContent = "FORM";

        bookTitle.value = "";
        bookAuthor.value = "";
      })
      .catch(err => console.log(err));

  }

  function loadAllBooks() {
    tbody.innerHTML = "";

    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {

        for (const [bookId, bookInfo] of Object.entries(data)) {
          const title = bookInfo.title;
          const author = bookInfo.author;

          createBookElement(title, author, bookId);
        }
      })
      .catch(err => console.log(err));
  }

  function createBook(title, author) {
    const bookTitleValue = bookTitle.value;
    const bookAuthorValue = bookAuthor.value;

    if (bookTitleValue && bookAuthorValue) {
      const bookObj = {
        author: bookAuthorValue,
        title: bookTitleValue
      }
      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(bookObj)
      })
        .then(res => res.json())
        .then(data => {
          createBookElement(data.title, data.author, data._id)
        })
        .catch(err => console.log(err));

      bookTitle.value = "";
      bookAuthor.value = "";
    }
  }

  function createBookElement(title, author, bookId) {
    const trBook = document.createElement("tr");
    tbody.appendChild(trBook);

    const tdTitle = document.createElement("td");
    tdTitle.textContent = title;
    trBook.appendChild(tdTitle);

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = author;
    trBook.appendChild(tdAuthor);

    const tdButtons = document.createElement("td");
    trBook.appendChild(tdButtons);

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    tdButtons.appendChild(buttonEdit);

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    tdButtons.appendChild(buttonDelete);


    buttonEdit.addEventListener("click", (e) => {
      if (buttonEdit.textContent === "Edit") {
        removeCancelButton();
        rowUpdate = e.target.parentNode.parentNode;
        bookIdField.value = bookId;

        bookTitle.value = rowUpdate.querySelector("td:nth-child(1)").textContent;
        bookAuthor.value = rowUpdate.querySelector("td:nth-child(2)").textContent;

        formName.textContent = "Edit FORM";
        submitButton.replaceWith(saveButton);
        buttonEdit.textContent = "Cancel";
      } else {
        bookTitle.value = "";
        bookAuthor.value = "";

        bookIdField.value = "";
        formName.textContent = "FORM";
        saveButton.replaceWith(submitButton);
        buttonEdit.textContent = "Edit";
      }
    });

    buttonDelete.addEventListener("click", (e) => {
      bookIdField.value = bookId;

      fetch(`${baseUrl}/${bookId}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          e.target.parentNode.parentNode.remove();
        })
        .catch(err => console.log(err));
    });
  }

  function removeCancelButton() {
    const allEditButtons = Array.from(document.querySelectorAll("table tbody tr td:nth-child(3) button:nth-child(1)"));
    allEditButtons.filter(b => b.textContent === "Cancel").forEach(btn => {
      btn.textContent = "Edit";
    });
  }
}

attachEvents();