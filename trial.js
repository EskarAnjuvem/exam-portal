var totScore = 0;
//document.getElementById("markReview").disabled = false;
document.getElementById("load-prev").disabled = true;

function Question(qPic, crOption, ansOption, markState, score) {
  this.qPic = qPic;
  this.crOption = crOption;
  this.ansOption = ansOption;
  this.markState = markState;
  this.score = score;
}

var q1 = new Question("Q1.jpg", "B", "Not Answered", false, 0);
var q2 = new Question("Q2.jpg", "D", "Not Answered", false, 0);
var q3 = new Question("Q3.jpg", "B", "Not Answered", false, 0);
var q4 = new Question("Q4.jpg", "B", "Not Answered", false, 0);
var q5 = new Question("Q5.jpg", "D", "Not Answered", false, 0);
var q6 = new Question("Q6.jpg", "A", "Not Answered", false, 0);
var q7 = new Question("Q7.jpg", "C", "Not Answered", false, 0);
var q8 = new Question("Q8.jpg", "D", "Not Answered", false, 0);
var q9 = new Question("Q9.jpg", "C", "Not Answered", false, 0);
var q10 = new Question("Q10.jpg", "B", "Not Answered", false, 0);
var qArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var questionNumber = 0;

// var qArray = ["Q1.jpg", "Q2.jpg", "Q3.jpg", "Q4.jpg"];
// var correctOption = ["A", "B", "A", "D"];
// var markedState = [];

// var markArray = [];

document.getElementById("markReview").addEventListener("click", () => {
  var c = document.getElementById("markReview");
  var mess = document.getElementById("choice");

  var ele = document.getElementsByName("option");
  
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      qArr[questionNumber].ansOption = ele[i].value;
      mess.innerHTML = qArr[questionNumber].ansOption;
      c.disabled = true;
      c.style.borderColor = "#FFF";
      qArr[questionNumber].markState = true;
      if (ele[i].value == qArr[questionNumber].crOption) {
        qArr[questionNumber].score = 4;
      }
      else{
        qArr[questionNumber].score = -1;
      } 

      console.log(qArr[questionNumber].score);
      //   if (questionNumber == qArray.length - 1)
      //     alert("Your total score is " + score);
    }
  }
});

document.getElementById("clear").addEventListener("click", () => {
  var c = document.getElementById("markReview");
  c.disabled = false;
  c.style.borderColor = "#000";
  document.getElementById("unchck1").checked = false;
  document.getElementById("unchck2").checked = false;
  document.getElementById("unchck3").checked = false;
  document.getElementById("unchck4").checked = false;
  qArr[questionNumber].markState = false;
  qArr[questionNumber].ansOption = "Not Answered";
  document.getElementById("choice").innerHTML = qArr[questionNumber].ansOption;
  qArr[questionNumber].score = 0;
});

document.getElementById("load-next").addEventListener("click", () => {
  questionNumber = questionNumber + 1;
  document.getElementById("markReview").style.borderColor = "#000";
  document.getElementById("load-prev").disabled = false;
  document.getElementById("choice").innerHTML = qArr[questionNumber].ansOption;
  //document.getElementById("markReview").disabled = false;

  if(qArr[questionNumber].markState == false)
  document.getElementById("markReview").disabled = false;
  else
  document.getElementById("markReview").disabled = true;
  
  document.getElementById(
    "qImage"
  ).src = `./Electrostatics-2/${qArr[questionNumber].qPic}`;
  if (questionNumber == qArr.length - 1)
    document.getElementById("load-next").disabled = true;
    document.getElementById("choice").innerHTML = qArr[questionNumber].ansOption;
  document.getElementById("unchck1").checked = false;
  document.getElementById("unchck2").checked = false;
  document.getElementById("unchck3").checked = false;
  document.getElementById("unchck4").checked = false;
});

document.getElementById("load-prev").addEventListener("click", () => {
  questionNumber = questionNumber - 1;  
  if(qArr[questionNumber].markState == true){
  document.getElementById("markReview").disabled = true;
  document.getElementById("markReview").style.borderColor = "#000";
  }
  else{
  document.getElementById("markReview").disabled = false;
  document.getElementById("markReview").style.borderColor = "#000";
  }
    document.getElementById(
      "qImage"
    ).src = `./Electrostatics-2/${qArr[questionNumber].qPic}`;
    if (questionNumber == 0)
    document.getElementById("load-prev").disabled = true;
    document.getElementById("load-next").disabled = false;
    document.getElementById("choice").innerHTML = qArr[questionNumber].ansOption;
    document.getElementById("unchck1").checked = false;
    document.getElementById("unchck2").checked = false;
    document.getElementById("unchck3").checked = false;
    document.getElementById("unchck4").checked = false;
  });
document.getElementById("submit").addEventListener("click", () => {
  if (time != 0){
  if (confirm("Are you sure? Do you want to Submit while you have time?")) {
    for (i = 0; i < qArr.length; i++) {
      totScore = totScore + qArr[i].score;
      console.log(qArr[i]);
    }
    alert("You total score is " + totScore);
    window.location = "index.html";
  }}
  else{
    for (i = 0; i < qArr.length; i++) {
      totScore = totScore + qArr[i].score;
      console.log(qArr[i]);
    }
    alert("You total score is " + totScore);
    window.location = "index.html";
  }
});

const startminutes = 40;
let time = startminutes*60;
const countDown = document.getElementById('countdown');

setInterval(updateCount,1000);
function updateCount(){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;

  countDown.innerHTML = `${minutes}:${seconds}`;
  time !== 0? time-- : time;
  if(time == 0){
    document.getElementById("load-prev").disabled = true;
    document.getElementById("load-next").disabled = true;
    document.getElementById("markReview").disabled = true;
    document.getElementById("clear").disabled = true;
  }

}
