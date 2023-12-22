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
    },
    {
        question: "What year did the movie 'The Matrix' come out?",
        answers: [
            {text: "1990", correct: false},
            {text: "1999", correct: true},
            {text: "2000", correct: false},
            {text: "2009", correct: false},
        ]
    },
    {
        question: "Who directed the movie 'Lost in Translation'?",
        answers: [
            {text: "Sofia Coppola", correct: true},
            {text: "James Cameron", correct: false},
            {text: "Francis Ford Coppola", correct: false},
            {text: "Alejandro G. Iñárritu", correct: false},
        ]
    },
    {
        question: "What was the name of the character played by Marlon Brandon in the movie 'Apocalypse Now'?",
        answers: [
            {text: "Capt. Benjamin L. Willard", correct: false},
            {text: "Colonel Lucas", correct: false},
            {text: "Lt. Col. Bill Kilgore", correct: false},
            {text: "Col. Walter E. Kurtz", correct: true},
        ]
    },
    {
        question: "Which of the following Tarantino films came out first?",
        answers: [
            {text: "Pulp Fiction", correct: false},
            {text: "Jackie Brown", correct: false},
            {text: "Reservoir Dogs", correct: true},
            {text: "Kill Bill", correct: false},
        ]
    },
    {
        question: "Who plays the role of Malcolm X in the movie with the same name?",
        answers: [
            {text: "Denzel Washington", correct: true},
            {text: "Will Smith", correct: false},
            {text: "Glenn Plummer", correct: false},
            {text: "Samuel L. Jackson", correct: false},
        ]
    },
    {
        question: "One of the Cone brothers' films won four Oscar statuettes. What movie?",
        answers: [
            {text: "Fargo", correct: false},
            {text: "No Country for Old Men", correct: true},
            {text: "O Brother, Where Art Thou?", correct: false},
            {text: "The Big Lebowski", correct: false},
        ]
    },
    {
        question: "One of these movies is not set in World War II. Which one?",
        answers: [
            {text: "The Pianist", correct: false},
            {text: "Schindler's List", correct: false},
            {text: "Enemy at the Gates", correct: false},
            {text: "Paths of Glory", correct: true},
        ]
    },
    {
        question: "Which of the following films is not a musical?",
        answers: [
            {text: "The Rose", correct: true},
            {text: "Fiddler on the Roof", correct: false},
            {text: "My Fair Lady", correct: false},
            {text: "Cabaret", correct: false},
        ]
    },
    {
        question: "A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich. What's the name of the movie?",
        answers: [
            {text: "I am John Malkovich", correct: false},
            {text: "John Malkovich is me", correct: false},
            {text: "Being John Malkovich", correct: true},
            {text: "Enter the Void", correct: false},
        ]
    },
    {
        question: "What is the name of the first Star Wars movie?",
        answers: [
            {text: "The Empire Strikes Back", correct: false},
            {text: "A New Hope", correct: true},
            {text: "Return Of The Jedi", correct: false},
            {text: "The Phantom Menace", correct: false},
        ]
    },
    {
        question: "In which movie does Tom Hanks play a homosexual man with AIDS?",
        answers: [
            {text: "Forest Gump", correct: false},
            {text: "Cast Away", correct: false},
            {text: "The Ladykillers", correct: false},
            {text: "Philadelphia", correct: true},
        ]
    },
    {
        question: "Which war is portrayed in the film 'Dances with Wolves'?",
        answers: [
            {text: "The American Civil War", correct: true},
            {text: "World War I", correct: false},
            {text: "The American Revolutionary War", correct: false},
            {text: "World War II", correct: false},
        ]
    },
    {
        question: "Who directed the movie 'The Godfather'?",
        answers: [
            {text: "Stanley Kubrick", correct: false},
            {text: "Francis Ford Coppola", correct: true},
            {text: "Roman Polanski", correct: false},
            {text: "Michael Cimino", correct: false},
        ]
    },
    {
        question: "From which country is the emperor in the movie 'The Last Emperor'?",
        answers: [
            {text: "Japan", correct: false},
            {text: "Russia", correct: false},
            {text: "China", correct: true},
            {text: "Germany", correct: false},
        ]
    }

];

const playButton = document.getElementById("play-btn");
const questionCounter = document.getElementById("question-counter");
const currentQuestionElement = document.getElementById("current-question");
const returnButton = document.getElementById("return-btn");
const quizArea = document.getElementById("quiz-area");
const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const paragraph = document.getElementById("paragraph");
const max_questions = 5;

let currentQuestionIndex = 0;
let randomQuestions
let score = 0;
let currentQuestionCounter = 0;

playButton.addEventListener("click", runQuiz)

// Starts the game
function runQuiz() {
    playButton.classList.add("hide")
    paragraph.classList.add("hide")
    quizArea.classList.remove("hide")
    questionCounter.classList.remove("hide")
    returnButton.classList.remove("hide")
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    setQuestion();
}

// Displays questions in question container and answers in buttons
function setQuestion() {
    restoreState();
    counterTool();
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

// Increments question counter and resets counter when user wants to play again
function counterTool() {
    if (currentQuestionCounter < max_questions) {
        currentQuestionCounter++;
        currentQuestionElement.innerText = currentQuestionCounter + "/" + max_questions;
    } else (currentQuestionCounter === max_questions)
        currentQuestionElement.innerText = currentQuestionIndex + 1 + "/" + max_questions;
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

// this function shows users score in the end of the game
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

// This function reloads the page with return button, code taken from sentry.io
function returnStart() {
    window.location.reload();
}

returnButton.addEventListener("click", returnStart)