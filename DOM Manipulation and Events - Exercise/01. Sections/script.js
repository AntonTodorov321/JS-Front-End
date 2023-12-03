function create(words) {
   const mainDiv = document.getElementById("content");

   for (const word of words) {
      const div = document.createElement("div");
      const p = document.createElement("p");

      p.textContent = word;
      p.style.display = "none";
      div.appendChild(p);
      mainDiv.appendChild(div);

      div.addEventListener("click", visualizeParagraph);
   }

   function visualizeParagraph(event) {
      const p = event.target.children[0];

      if (p.style.display === "none") {
         p.style.display = "";
      } else {
         p.style.display = "none"
      }
   }
}