const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');

const numberOfQuestions = document.getElementById('number-of-question'),
      numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion,
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'Из каких двух ингредиентов состоит классический "Мартини"?',
        option: [
            'Джин и вермут',
            'Джин и тоник',
            'Водка и биттер',
            'Вермут и виски',
        ],
        rightAnswer: 0
    },
    {
        question: 'В Мексике именно это служит основой для "Маргариты"...',
        option: [
            'Водка',
            'Текила',
            'Сангрия',
            'Мескаль',
        ],
        rightAnswer: 1
    },
    {
        question: 'Именно это приспособление помогает барменам наливать одинаковое количество ингредиентов в коктейль...',
        option: [
            'Снифтер',
            'Мистер',
            'Джиггер',
            'Шейкер',
        ],
        rightAnswer: 2
    }
];

numberOfAllQuestions.innerHTML = questions.length; //выводи кол-во вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; //сам вопрос

    //мапим ответы

    option1.innerHTML = questions[indexOfQuestion].option[0];
    option2.innerHTML = questions[indexOfQuestion].option[1];
    option3.innerHTML = questions[indexOfQuestion].option[2];
    option4.innerHTML = questions[indexOfQuestion].option [3];

    numberOfQuestions.innerHTML = indexOfPage + 1; //установка номера текущей страницы
    indexOfPage++; //увеличение индекса страницы
};

let complitedAnswers = []; //массив для уже заданных вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; //якорь для проверки одинаковых вопросов

    if(indexOfPage == questions.length) {
        quizOver();
    } else {
        if(complitedAnswers.length > 0) {
            complitedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true; 
                }
            });
            if(hitDuplicate == true) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(complitedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    complitedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}
// удаление всех классов со всех ответов
const enabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')) {
        alert('Вам нужно выбрать один из вариантов ответа');
    } else {
        randomQuestion();
        enabledOptions();
    }
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length; 
};

const tryAgain = () => {
    window.location.reload();
}

btnTryAgain.addEventListener('click',  tryAgain);

btnNext.addEventListener('click', () => {
    validate(); 
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
})

