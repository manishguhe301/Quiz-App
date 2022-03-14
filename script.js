// creating an array and passing the number, questions, options, and answers
const quizDB = [{
        question: " Q1: What does HTML stand for?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Main Language",
        d: "Hyper Tool Multi Language",
        ans: "ans2",
    },
    {
        question: " Q2: What does CSS stand for?",
        a: "Common Style Sheet",
        b: "Colorful Style Sheet",
        c: "Computer Style Sheet",
        d: "Cascading Style Sheet",
        ans: "ans4",
    },
    {
        question: " Q3: What does PHP stand for?",
        a: "Hypertext Preprocessor",
        b: "Hypertext Programming",
        c: "Hypertext Preprogramming",
        d: "Hometext Preprocessor",
        ans: "ans1",
    },
    {
        question: " Q4: What does SQL stand for?",
        a: "Stylish Question Language",
        b: "Stylesheet Query Language",
        c: "Statement Query Language",
        d: "Structured Query Language",
        ans: "ans4",
    },
    {
        question: " Q5: What does XML stand for?",
        a: "eXtensible Markup Language",
        b: "eXecute Multiple Language",
        c: "eXTra Multiple Language",
        d: "eXamine Multiple Language",
        ans: "ans1",
    },
];

const question = document.querySelector(".question");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
};

loadQuestion();

const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `<h3> Your score is ${score}/${quizDB.length} </h3> 
    <button class="btn d-block m-auto" onclick="location.reload()"> play Again </button>`;

        showScore.classList.remove("scoreArea");
    }
});