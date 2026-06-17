const questions = [

{
question:"What comes next in the series?",
series:"2, 6, 12, 20, 30, ?",
options:["42","40","44","38"],
answer:"42"
},

{
question:"25% of 200 = ?",
series:"",
options:["25","50","75","100"],
answer:"50"
},

{
question:"Find the odd one out",
series:"3, 5, 7, 11, 14",
options:["3","5","11","14"],
answer:"14"
},

{
question:"A train covers 120 km in 2 hours. Speed?",
series:"",
options:["50","60","70","80"],
answer:"60"
},

{
question:"If CAT = 24 then DOG = ?",
series:"",
options:["26","30","34","40"],
answer:"26"
}

];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("questionNo").innerText =
`Question ${currentQuestion+1} of ${questions.length}`;

document.getElementById("percentage").innerText =
`${Math.round(((currentQuestion+1)/questions.length)*100)}%`;

document.getElementById("question").innerText =
q.question;

document.getElementById("series").innerText =
q.series;

let optionsHTML = "";

q.options.forEach(option=>{

const checked =
userAnswers[currentQuestion]===option ?
"checked" : "";

optionsHTML += `
<label class="option">
<input
type="radio"
name="answer"
value="${option}"
${checked}
onclick="saveAnswer('${option}')">
${option}
</label>
`;

});

document.getElementById("options").innerHTML =
optionsHTML;

document.getElementById("progress").style.width =
`${((currentQuestion+1)/questions.length)*100}%`;
}

function saveAnswer(answer){
userAnswers[currentQuestion]=answer;
}

function nextQuestion(){

if(currentQuestion < questions.length-1){
currentQuestion++;
loadQuestion();
}
else{
showResult();
}
}

function prevQuestion(){

if(currentQuestion > 0){
currentQuestion--;
loadQuestion();
}
}

function showResult(){

let score = 0;

questions.forEach((q,index)=>{

if(userAnswers[index] === q.answer){
score++;
}

});

localStorage.setItem("latestScore", score);
localStorage.setItem("totalQuestions", questions.length);

let attempts =
Number(localStorage.getItem("attempts")) || 0;

attempts++;

localStorage.setItem("attempts", attempts);

document.querySelector(".quiz-card").innerHTML = `
<div class="result">
<h1>Quiz Completed 🎉</h1>

<h2>Your Score: ${score}/${questions.length}</h2>

<br>

<a href="performance.html">
<button>
View Performance
</button>
</a>

</div>
`;
}
/* Timer */

let time = 300;

const timer = setInterval(()=>{

let minutes = Math.floor(time/60);
let seconds = time%60;

document.getElementById("timer").innerText =
`${minutes}:${seconds < 10 ? "0"+seconds : seconds}`;

time--;

if(time < 0){
clearInterval(timer);
showResult();
}

},1000);

loadQuestion();