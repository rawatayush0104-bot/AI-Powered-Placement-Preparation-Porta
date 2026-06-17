const latestScore = localStorage.getItem("latestScore") || 0;
const totalQuestions = localStorage.getItem("totalQuestions") || 5;

const accuracy =
Math.round((latestScore/totalQuestions)*100);

document.getElementById("score").innerText =
`${latestScore}/${totalQuestions}`;

document.getElementById("percentage").innerText =
accuracy + "%";

document.getElementById("attempts").innerText =
localStorage.getItem("attempts") || 1;

const ctx =
document.getElementById("performanceChart");

new Chart(ctx, {
type:"bar",

data:{
labels:["Quiz Performance"],

datasets:[{
label:"Score",
data:[latestScore]
}]
}
});