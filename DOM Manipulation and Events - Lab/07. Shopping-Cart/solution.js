function solve() {
   const buttons = Array.from(document.getElementsByClassName("add-product"));
   const resultArea = document.getElementsByTagName("textarea")[0];
   const checkoutButton = document.getElementsByClassName("checkout")[0];

   let products = [];
   let totalPrice = 0;

   buttons.forEach(button => {
      button.addEventListener("click", addProducts);
   });
   checkoutButton.addEventListener("click", checkout);

   function addProducts(event) {
      const currentButton = event.target;

      const productInfo = currentButton.parentNode.parentNode;
      const productName = productInfo.getElementsByClassName("product-title")[0].textContent;
      const productPrice = Number(productInfo.getElementsByClassName("product-line-price")[0].textContent);

      resultArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      totalPrice += productPrice;

      if (!products.includes(productName)) {
         products.push(productName)
      }
   }

   function checkout() {
      resultArea.value += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`;

      buttons.forEach(button => {
         button.removeEventListener("click", addProducts);
      });
   }
}