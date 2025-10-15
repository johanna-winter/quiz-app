// Answer button & bookmark toggle

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("question-card__bookmark--filled");
});

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("question-card__answer--hidden");
  answerText.classList.toggle("question-card__answer--active");
  const changeText = answerText.classList.contains(
    "question-card__answer--active"
  );
  answerButton.textContent = changeText ? "Hide answer" : "Show answer";
});
