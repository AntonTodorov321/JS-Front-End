function search() {
   let towns = document.querySelectorAll("#towns li");
   let searchingTown = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let matchesCount = 0;

   for (let town of towns) {

      town.style.fontWeight = "";
      town.style.textDecoration = "";

      if (town.textContent.includes(searchingTown)) {
         matchesCount++;
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
      }
   }

   result.textContent = `${matchesCount} matches found`;
}
