function solve() {
  const buttons = Array.from(document.getElementsByClassName("answer-text"));
  const allSections = Array.from(document.getElementsByTagName("section"));

  let couner = 0;
  let rightAnswerCounter = 0;

  const mapper = {
    "Question #1: Which event occurs when the user clicks on an HTML element?": "onclick",
    "Question #2: Which function converting JSON to string?": "JSON.stringify()",
    "Question #3: What is DOM?": "A programming API for HTML and XML documents"
  }

  buttons.forEach(button => {
    button.addEventListener("click", anserQuiz);
  });

  function anserQuiz(event) {
    const cuurentSection = event.currentTarget.parentElement.parentElement.parentElement.parentElement;
    const question = cuurentSection.getElementsByTagName("h2")[0].textContent;
    const answear = event.currentTarget.textContent;
    
    if (mapper[question] === answear) {
      rightAnswerCounter++;
    }

    cuurentSection.style.display = "none";

    couner++;
    if (allSections[couner]) {
      allSections[couner].style.display = "block";
    }

    if (couner === allSections.length) {
      const result = document.getElementsByClassName("results-inner")[0].children[0];
      document.getElementById("results").style.display = "block";

      if (rightAnswerCounter === allSections.length) {
        result.textContent = "You are recognized as top JavaScript fan!";
      } else {
        result.textContent = `You have ${rightAnswerCounter} right answers`;
      }
    }
  }
}
