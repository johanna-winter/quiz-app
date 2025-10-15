const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer"]');
const bookmarkButton = document.querySelector('[data-js="bookmark"]');

// Bookmark icon toggle
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("question-card__bookmark--filled");
});

// Show/Hide answer button toggle
answerButton.addEventListener("click", () => {
  answerText.classList.toggle("question-card__answer--hidden");
  answerText.classList.toggle("question-card__answer--active");
  const changeText = answerText.classList.contains(
    "question-card__answer--active"
  );
  answerButton.textContent = changeText ? "Hide answer" : "Show answer";
});
