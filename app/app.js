//DOM ITEMS
const quizName = document.getElementById('quizName')
const buttonLeft = document.getElementById('buttonLeft')
const buttonMid = document.getElementById('buttonMid')
const buttonRight = document.getElementById('buttonRight')
const hudScoreBoard = document.getElementById('scoreBoard')

//Variables
let scoreBoard = 0
let maxQuestions = 3
let playerQuestion = 1
let questionIndex = -1

//Object Array
let quizItems = [
    {
        question: '2 + 2 = X',
        choice1: '4',
        choice2: '12',
        choice3: '27',
        answer: '4'
    },
    {
        question: '4 + 4 = X',
        choice1: '8',
        choice2: '12',
        choice3: '27',
        answer: '8'
    },
    {
        question: '5 + 5 = X',
        choice1: '10',
        choice2: '12',
        choice3: '27',
        answer: '10'
    },
    {
        question: '7 + 7 = X',
        choice1: '14',
        choice2: '12',
        choice3: '27',
        answer: '14'
    },
]

//Functions
const startGame = () =>{
    maxQuestions = 4
    playerQuestion = 1
    questionIndex ++
    quizName.innerText = quizItems[questionIndex].question
    buttonLeft.innerText = quizItems[questionIndex].choice1
    buttonMid.innerText = quizItems[questionIndex].choice2
    buttonRight.innerText = quizItems[questionIndex].choice3

    buttonLeft.value = quizItems[questionIndex].choice1
    buttonMid.value = quizItems[questionIndex].choice2
    buttonRight.value = quizItems[questionIndex].choice3

    hudScoreBoard.innerText = scoreBoard
    
    isTheEnd()
}


const verifyQuestion = (value) => {
    toString(value)
    if(value === quizItems[questionIndex].answer){
        scoreBoard ++
    }
    startGame()
}

//Redirect functions

const redirectToGamePage = () => {
    return window.location.replace("./index.html")
}

const isTheEnd = () =>{
    if (questionIndex === 3){
        return window.location.replace("./endGameScreen.html")
        
    }
}

const redirectToRankingPage = () =>{
    return window.location.replace("./endGameScreen.html")
}

const redirectToHomePage = () =>{
    return window.location.replace("./startScreen.html")
}

//Effects

const hoverEffect = (effect) => {
    let github = document.getElementById('githubLogo')
    let linkedin = document.getElementById('linkedinLogo')    

    if (effect == "1"){
        github.src = "./assets/images/github_white.png"
    }
    else{
        github.src = "./assets/images/github_black.png"
    }

    if (effect == "2"){
        linkedin.src = "./assets/images/linkedin_white.png"
    }
    else{
        linkedin.src = "./assets/images/linkedin_black.png"
    }
}