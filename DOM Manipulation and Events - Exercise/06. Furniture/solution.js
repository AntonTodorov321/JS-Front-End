function solve() {
  const inputJson = document.getElementsByTagName("textarea")[0];
  const outputArea = document.getElementsByTagName("textarea")[1];

  const generateBtn = document.getElementsByTagName("button")[0];
  const buyBtn = document.getElementsByTagName("button")[1];

  generateBtn.addEventListener("click", generateFurniture);
  buyBtn.addEventListener("click", buyFurniture);

  function generateFurniture() {
    const furnitures = JSON.parse(inputJson.value);

    for (const furniture of furnitures) {
      createFurniture(furniture);
    }
  }

  function createFurniture(furniture) {
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");

    const pImage = document.createElement("img");
    const pName = document.createElement("p");
    const pPrice = document.createElement("p");
    const pDecorationFactor = document.createElement("p");

    const inputMark = document.createElement("input");
    inputMark.setAttribute("type", "checkbox");

    pImage.src = furniture.img;
    pName.textContent = furniture.name;
    pPrice.textContent = furniture.price;
    pDecorationFactor.textContent = furniture.decFactor;

    const tdImage = document.createElement("td");
    tdImage.appendChild(pImage);
    tr.appendChild(tdImage);

    const tdName = document.createElement("td");
    tdName.appendChild(pName);
    tr.appendChild(tdName);

    const tdPrice = document.createElement("td");
    tdPrice.appendChild(pPrice);
    tr.appendChild(tdPrice);

    const tdDecorationFactor = document.createElement("td");
    tdDecorationFactor.appendChild(pDecorationFactor);
    tr.appendChild(tdDecorationFactor);

    const tdInputMark = document.createElement("td");
    tdInputMark.appendChild(inputMark);
    tr.appendChild(tdInputMark);

    tbody.appendChild(tr);
  }

  function buyFurniture() {
    const checkedButtons = document.querySelectorAll(`input[type="checkbox"]`);
    let buyFurnutures = [];
    let totalPrice = 0;
    let sumDecorationFactor = 0;

    for (const button of checkedButtons) {
      if (button.checked) {
        const furnutureData = button.parentNode.parentNode;

        const priceRow = furnutureData.children[2];
        const price = Number(priceRow.children[0].textContent);
        totalPrice += price;

        const nameRow = furnutureData.children[1]
        const name = nameRow.children[0].textContent;
        buyFurnutures.push(name);

        const decorationFactorRow = furnutureData.children[3]
        const decorationFactor = Number(decorationFactorRow.children[0].textContent);
        sumDecorationFactor += decorationFactor;
      }
    }
    const averageDecorationFactor = sumDecorationFactor / buyFurnutures.length;

    outputArea.value += `Bought furniture: ${buyFurnutures.join(", ")}\n`;
    outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.value += `Average decoration factor: ${averageDecorationFactor}`;
  }
}