
const startButon = document.getElementById('start-btn')
const nextButon = document.getElementById('next-btn')

const questionContainerElement =document.getElementById(question-container)
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,cuurrectQuestionIndex;
let quizScore=0;

startButon.addEventListener('click',startGame)
nextButon.addEventListener('click',()=>{
    cuurrectQuestionIndex++
    setnextQuestion()
})
function startGame(){
    startButon.classList.add('hide')
    shuffledQuestions=questions.sort(() => Math.random()-0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0;
}

function setnextQuestion(){
    resetSate();
    showQuestion(showQuestions[currectQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText= question.questions;
    question.answers.forEach(answer) =>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild('button')
    }
    
}

function resetSate(){
    clearStatusClass(document.body)
    nextButon.classList.add("hide")
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selecteButton=e.target
    const correct=selecteButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button)=>{
        setSatusClass(button,button,dataset.correct)
    }
    if(shuffledQuestions.lenght > currectQuestionIndex+1)
    {
        nextButon.classList.remove("hide")
    }else{
        startButon.innerText="restart"
        startButon.classList.remove("hide")
    }
    if(selecteButton.dataset = correct)
    {
        quizScore++
    }
    document.getElementById("riight-answers").innerText=quizScore
}
function setSatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}




function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
const questions = [
    {
        question: "Which one of there is JavaSricpt framework?",
        answers :[
            
                
                text: "Python",correct:false;
                text: "django",correct:false;
                text: "React",correct:true;
                text: "Eclipse",correct:false;
        ],
    },
    {
        question: "Who  is the prim minister of india?",
        answers :[
            
                
            {text: "narendra Modi",correct: true},
            {text: "rahul gandhi",correct:false},
        ],
    },
    {
        question: "What is 4*3",
        answers :[
            
                
            {text: "6",correct: false},
            {text: "12",correct:true},
        
        ],
    },
] 