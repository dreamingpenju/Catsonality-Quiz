

var blackScore = 0;
var whiteScore = 0;
var orangeScore = 0;
var questionCount = 0;
var result = document.getElementById("result");
var reset = document.getElementById("reset");

document.getElementById('q1a1').innerHTML="FRIENDLY";
document.getElementById('q1a2').innerHTML="ANTI-SOCIAL/SHY";

document.getElementById('q2a1').innerHTML='AFFECTIONATE';
document.getElementById('q2a2').innerHTML='ALOOF/DISTANT';

document.getElementById('q3a1').innerHTML="ENERGETIC/PLAYFUL";
document.getElementById('q3a2').innerHTML="CALM/LAZY";

document.getElementById('q4a1').innerHTML="INTUITVE";
document.getElementById('q4a2').innerHTML="NONINTUITIVE";


q1a1.addEventListener("click", () => {
  blackOrange(); 
  q1();
})
q1a2.addEventListener("click", () => {
  white(); 
  q1();
})
q2a1.addEventListener("click",() => {
  blackOrange(); 
  q2();
});
q2a2.addEventListener("click", () => {
  white(); 
  q2();
});
q3a1.addEventListener("click", () => {
  blackOrange(); 
  q3();
});
q3a2.addEventListener("click", () => {
  white(); 
  q3();
});
q4a1.addEventListener("click", () => {
  black(); 
  q4();
});
q4a2.addEventListener("click", () => {
  orange(); 
  q4();
});
reset.addEventListener("click", () => {
  resetScore();
  enableButtonsOne();
});


function blackOrange(){
  blackScore = blackScore + 1;
  orangeScore = orangeScore + 1;
  questionCount = questionCount + 1;  
  
if (questionCount === 4){
  updateResult();
  }
}


function white(){
  whiteScore = whiteScore + 1;
  questionCount = questionCount + 1;
  
if (questionCount === 4){
  updateResult();
  }
}


function black(){
  blackScore = blackScore + 1;
  questionCount = questionCount + 1;
  
if(questionCount === 4){
  updateResult();
  }
}

function orange(){
  orangeScore = orangeScore + 1;
  questionCount = questionCount + 1;
  
if (questionCount>=4){
  updateResult();
  }
}

function updateResult() {
  if(blackScore === whiteScore){
    console.log("you are a mix of a white and black cat!");
    result.innerHTML = "You are a mix of a black and white cat!";
  }
  if(orangeScore === whiteScore){
    console.log("you are a mix of a white and orange cat!");
    result.innerHTML = "You are a mix of a orange and white cat!";
  }
  else if(blackScore > orangeScore && blackScore > whiteScore){
    console.log("you are more like a black cat!");
    result.innerHTML = "You are more like a black cat!";
  }
  else if(orangeScore > whiteScore){
    console.log("you are more like an orange cat!");
    result.innerHTML = "You are more like an orange cat!";
  }
  else {
    console.log("you are more like a white cat!");
    result.innerHTML = "You are more like a white cat!";
  }
}


//reset quiz
function resetScore(){
  blackScore = 0;
  orangeScore = 0;
  whiteScore = 0;
  questionCount = 0;

  result.innerHTML = "YOU ARE A...";
}
//disable button function after click
function q1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
}
function q2(){
  q2a1.disabled = true;
  q2a2.disabled = true;
}
function q3(){
  q3a1.disabled = true;
  q3a2.disabled = true;
}
function q4(){
  q4a1.disabled = true;
  q4a2.disabled = true;
}
//enable buttons when reset is clicked
function enableButtonsOne(){
document.getElementById("q1a1").disabled = false;
document.getElementById('q1a2').disabled = false;

document.getElementById('q2a1').disabled = false;
document.getElementById('q2a2').disabled = false;

document.getElementById('q3a1').disabled = false;
document.getElementById('q3a2').disabled = false;
  
document.getElementById('q4a1').disabled = false;
document.getElementById('q4a2').disabled = false;

}