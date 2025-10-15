const form = document.querySelector('[data-js="question-form"]');
const addQuestionText = document.querySelector('[data-js="question-text"]');
const addAnswerText = document.querySelector('[data-js="answer-text"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

// Create div tag to store new cards in
const cardContainer = document.createElement("div");
cardContainer.classList.add("new-card-container");
document.body.append(cardContainer);
// newCardContainer.textContent = "Container for new cards";

// Listen to the form's submit event & create DOM Elements inside listener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("Question data: ", data);
  console.log("Question: ", data.question);

  const cardElement = document.createElement("section");
  cardElement.classList.add("question-card__container");
  cardContainer.append(cardElement);

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("question-card__title");
  cardQuestion.textContent = data.question;
  cardElement.append(cardQuestion);

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("question-card__answer");
  cardAnswer.textContent = data.answer;
  cardElement.append(cardAnswer);

  const cardButton = document.createElement("button");
  cardButton.classList.add("question-card__button");
  cardButton.textContent = "Show answer";
  cardElement.append(cardButton);

  const tagContainer = document.createElement("div");
  tagContainer.classList.add("question-card__categories");
  cardElement.append(tagContainer);

  const cardTag = document.createElement("span");
  cardTag.classList.add("question-card__category");
  cardTag.textContent = data.tag;
  tagContainer.append(cardTag);

  // Create svg in js with document.createElementNS
  const bookmarkSvg = "http://www.w3.org/2000/svg";
  const cardBookmark = document.createElementNS(bookmarkSvg, "svg");
  cardBookmark.setAttribute("width", "24");
  cardBookmark.setAttribute("height", "24");
  cardBookmark.setAttribute("viewBox", "0 0 24 24");
  cardBookmark.setAttribute("fill", "none");
  cardBookmark.setAttribute("stroke", "#800020");
  cardBookmark.setAttribute("stroke-width", "2");
  cardBookmark.setAttribute("stroke-linecap", "round");
  cardBookmark.setAttribute("stroke-linejoin", "round");
  cardBookmark.classList.add(
    "lucide",
    "lucide-bookmark",
    "lucide-bookmark",
    "question-card__bookmark"
  );

  const path = document.createElementNS(bookmarkSvg, "path");
  path.setAttribute("d", "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z");

  cardBookmark.append(path);
  cardElement.append(cardBookmark);

  // reset form after submit and focus on the first element
  formElement.reset();
  formElement.elements.question.focus();
});
