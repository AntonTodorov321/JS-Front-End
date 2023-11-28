function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedText = document.getElementById("searchField").value;
      let allRows = document.querySelectorAll("tbody tr");

      for (const row of allRows) {
         let rowData = row.textContent;
         row.className = "";

         if (rowData.includes(searchedText)) {
            row.className = "select";
         }
      }
   }
}