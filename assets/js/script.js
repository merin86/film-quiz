// Questions for quiz:
let questions = [
    {
        question: "Which film did Stanley Kubrick not direct?",
        answers: [
            {text: "Lolita", correct: false},
            {text: "Dr. Strangelove", correct: false},
            {text: "12 Angry Men", correct: true},
            {text: "Spartacus", correct: false},
        ]
    },
    {
        question: "Who has the lead role in Lawrence of Arabia?",
        answers: [
            {text: "Peter O'Toole", correct: true},
            {text: "Alec Guinness", correct: false},
            {text: "Anthony Quinn", correct: false},
            {text: "Jack Hawkins", correct: false},
        ]
    },
    {
        question: "Which of the following films doesn't star Jack Nicholson?",
        answers: [
            {text: "Chinatown", correct: false},
            {text: "One Flew Over the Cuckoo's Nest", correct: false},
            {text: "Five Easy Pieces", correct: false},
            {text: "The Tenant", correct: true},
        ]
    },
    {
        question: "Which of the following films won the most Oscars?",
        answers: [
            {text: "The Silence of the Lambs", correct: false},
            {text: "Titanic", correct: true},
            {text: "The Great Gatsby", correct: false},
            {text: "Gone with the Wind", correct: false},
        ]
    },
    {
        question: "One of these movies is not considered an 'Epic Movie', which one?",
        answers: [
            {text: "The Ten Commandments", correct: false},
            {text: "Cleopatra", correct: false},
            {text: "Doctor Zhivago", correct: false},
            {text: "Patton", correct: true},
        ]
    },
    {
        question: "The original film 'Planet of the Apes' became a film series with a number of films that followed. How many movies, including the first one, were made in this series?",
        answers: [
            {text: "4", correct: false},
            {text: "5", correct: true},
            {text: "6", correct: false},
            {text: "7", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectedAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();