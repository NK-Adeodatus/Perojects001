const startButton = document.querySelector(".startbtn");
const layout = document.getElementById("content");
let questionEl = document.querySelector(".quest");
let inputEl = document.querySelector(".inpuEl"); // Ensure consistent reference
let marksEl = document.querySelector(".mark");
let labelEl = document.querySelector(".lebelEl");
let ansEl = document.querySelector(".ans");
let grade = 0;

const qandas = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
  { question: "What is the largest ocean on Earth?", answer: "Paris" },
  { question: "In which year did the Titanic sink?", answer: "1912" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "Which element has the chemical symbol 'O'?", answer: "Oxygen" },
  { question: "What is the tallest mountain in the world?", answer: "Everest" },
  { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
  { question: "How many continents are there on Earth?", answer: "Seven" },
];

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  layout.classList.remove("hidden");

  let currentIndex = 0;
  let maxQuestion = 5;
  let currentQuestion;

  function displayQuestion() {
    if (currentIndex < maxQuestion) {
      // Pick a random question
      currentQuestion = qandas[Math.floor(Math.random() * qandas.length)];
      // Display the question
      questionEl.innerText = currentQuestion.question;
      currentIndex++;
      
      // Clear the input field for the new question
      inputEl.value = "";

      // Set the timer to display the next question after 10 seconds
      setTimeout(displayQuestion, 10000);
    } else {
      // Display final message and hide input field after quiz ends
      questionEl.innerText = "Quiz over! Your final score is: " + grade;
      inputEl.style.display = "none"; // Hide the input field when the quiz is over
      labelEl.style.display = "none"
      ansEl.innerText = "Well Played!"
    }
  }

  inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      // Check if the answer is correct
      if (inputEl.value.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase()) {
        grade++; // Increment the score if the answer is correct
        marksEl.innerText = `${grade}/5`; // Update the score display
      }
      inputEl.value = ""; // Clear the input field after the answer is checked
    }
  });

  displayQuestion(); // Start the quiz by displaying the first question
});
