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

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const max_questions = 5;

let currentQuestionIndex = 0;
let randomQuestions
let score = 0;

// Starts the game
function runQuiz() {
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    setQuestion();
}

// Displays questions in question container and answers in buttons
function setQuestion() {
    restoreState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionContainer.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer);
    })
}

// Removes placeholder-buttons
function restoreState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// checks if answer is correct or incorrect and apply red or green background
function chooseAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// this function shows users score in the ned of the game
function displayScore() {
    restoreState();
    questionContainer.innerHTML = `You scored ${score} out of ${max_questions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// function for next-button
function setNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < max_questions) {
        setQuestion();
    } else {
        displayScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < max_questions) {
        setNextButton();
    } else {
        runQuiz();
    }
});

runQuiz();