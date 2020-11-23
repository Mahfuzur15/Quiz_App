

var quizData = [
    {
        question: 'How old is Tushar',
        a: '10',
        b: '17',
        c: '26',
        d: '34',
        correct: 'b'
    }, {
        question: 'What is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'C++',
        correct: 'c'
    }, {
        question: 'Who is the President of Bangladesh?',
        a: 'Khaleda Zia',
        b: 'Seikh Hasina',
        c: 'Ersad Hussain',
        d: 'Abdul Hamid',
        correct: 'd'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Hypertext Tranasfer Protocol',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '1997',
        b: '1992',
        c: '1996',
        d: 'None of the above',
        correct: 'd'
    }
];

var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById('question');


var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');

var submitBtn = document.getElementById('submit');

var currentQuiz = 0;
var score = 0;



// initial call
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    var currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    var answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
    }
});

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    //  check answer
    var answer = getSelected();

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    
        currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } 
    else {
        quiz.innerHTML =
             `<h2> you answered correctly at  ${score}/${quizData.length}  questions. </h2>     <button onclick="location.reload()"> Reload </  button>`;
        } 
    }
});