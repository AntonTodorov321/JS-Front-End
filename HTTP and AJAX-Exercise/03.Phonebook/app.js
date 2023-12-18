function attachEvents() {
   const baseUrl = "http://localhost:3030/jsonstore/phonebook";

   const loadBtn = document.getElementById("btnLoad");
   const createBtn = document.getElementById("btnCreate");

   const phoneBook = document.getElementById("phonebook");
   const person = document.getElementById("person");
   const phone = document.getElementById("phone");

   loadBtn.addEventListener("click", () => {
      fetch(baseUrl)
         .then(res => res.json())
         .then(data => {
            phoneBook.textContent = "";

            for (const personInfo of Object.values(data)) {
               createListItem(personInfo);
            }
         });
   });

   createBtn.addEventListener("click", () => {
      if (person.value && phone.value) {
         let personObj = {
            person: person.value,
            phone: phone.value
         };

         fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(personObj)
         })
            .then(res => res.json())
            .then(data => {
               createListItem(personObj);

               person.value = "";
               phone.value = "";
            });
      }
   });

   function createListItem(personInfo) {
      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
      const personId = personInfo._id;
      deleteBtn.textContent = "Delete";

      li.textContent = `${personInfo.person}: ${personInfo.phone}`;
      li.appendChild(deleteBtn);
      phoneBook.appendChild(li);

      deleteBtn.addEventListener("click", (e) => {
         fetch(`${baseUrl}/${personId}`, {
            method: "DELETE"
         }).then(res => res.json())
            .then(data => {
               e.target.parentNode.remove();
            });
      });
   }
}

attachEvents();