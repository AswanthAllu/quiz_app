const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which language runs in a web browser?", options: ["JavaScript", "Python", "C++"], answer: "JavaScript" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax"], answer: "Cascading Style Sheets" },
    { question: "What is the correct way to link an external CSS file?", options: ["<link rel='stylesheet' href='style.css'>", "<css>style.css</css>", "<script src='style.css'></script>"], answer: "<link rel='stylesheet' href='style.css'>" },
    { question: "Which tag is used to create a button in HTML?", options: ["<btn>", "<button>", "<click>"], answer: "<button>" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 1200; // 20 minutes

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question-container").innerText = q.question;
    document.getElementById("options-container").innerHTML = q.options.map(opt => `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>`).join("");
}

document.getElementById("next-btn").addEventListener("click", () => {
    let selected = document.querySelector("input[name='answer']:checked");
    if (selected && selected.value === questions[currentQuestionIndex].answer) score++;
    if (++currentQuestionIndex < questions.length) loadQuestion();
    else { localStorage.setItem("quizScore", score); window.location.href = "result.html"; }
});

loadQuestion();
