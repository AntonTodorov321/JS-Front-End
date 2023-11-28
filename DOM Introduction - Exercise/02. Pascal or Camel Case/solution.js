function solve() {
  let text = document.getElementById(`text`).value.toLowerCase().split(" ");
  let command = document.getElementById(`naming-convention`).value;
  let result = document.getElementById(`result`);

  if (command === `Camel Case`) {
    for (let index = 1; index < text.length; index++) {
      text[index] = text[index].charAt(0).toUpperCase() + text[index].replace(text[index][0], "");
    }
  } else if (command === `Pascal Case`) {

    for (let index = 0; index < text.length; index++) {
      text[index] = text[index].charAt(0).toUpperCase() + text[index].replace(text[index][0], "");
    }
  } else {
    result.textContent = "Error!"
    return;
  }

  result.textContent = text.join("");
}